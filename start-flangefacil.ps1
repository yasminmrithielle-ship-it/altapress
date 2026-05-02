param(
  [switch]$Android,
  [switch]$Ios,
  [switch]$Web,
  [switch]$Lan,
  [switch]$Tunnel,
  [switch]$Localhost,
  [switch]$Clear,
  [switch]$Doctor,
  [switch]$ShowCommand
)

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = if (Test-Path (Join-Path $scriptRoot 'package.json')) {
  $scriptRoot
} else {
  Join-Path $scriptRoot 'flangefacil'
}
$workspaceRoot = Split-Path -Parent $projectRoot
$workspaceOwner = $null

if ($workspaceRoot -match '^[A-Za-z]:\\Users\\([^\\]+)\\') {
  $workspaceOwner = $Matches[1]
}

function Get-FirstExistingPath {
  param(
    [string[]]$Candidates,
    [switch]$Directory
  )

  foreach ($candidate in $Candidates) {
    if (-not $candidate) {
      continue
    }

    $pathType = if ($Directory) { 'Container' } else { 'Leaf' }

    if (Test-Path $candidate -PathType $pathType) {
      return $candidate
    }
  }

  return $null
}

# Prefer the bundled toolchains from the parent workspace, but fall back to a regular npm install when needed.
$nodeExe = Get-FirstExistingPath -Candidates @(
  (Join-Path $workspaceRoot 'node20_19_4\node-v20.19.4-win-x64\node.exe'),
  (Join-Path $workspaceRoot 'node20\node-v20.19.1-win-x64\node.exe')
)
$npmCli = Get-FirstExistingPath -Candidates @(
  (Join-Path $workspaceRoot 'node20_19_4\node-v20.19.4-win-x64\node_modules\npm\bin\npm-cli.js'),
  (Join-Path $workspaceRoot 'node20\node-v20.19.1-win-x64\node_modules\npm\bin\npm-cli.js')
)
$npmCommand = $null

if (-not ($nodeExe -and $npmCli)) {
  $npmCmd = Get-Command npm.cmd -ErrorAction SilentlyContinue

  if ($npmCmd) {
    $npmCommand = $npmCmd.Source
  } else {
    $npm = Get-Command npm -ErrorAction SilentlyContinue

    if ($npm) {
      $npmCommand = $npm.Source
    }
  }
}

$javaRootParent = Join-Path $workspaceRoot 'android-java'
$javaRoot = $null

if (Test-Path $javaRootParent) {
  $javaRoot = Get-ChildItem $javaRootParent -Directory -Filter 'jdk-*' |
    Sort-Object Name -Descending |
    Select-Object -First 1 -ExpandProperty FullName
} elseif ($env:JAVA_HOME -and (Test-Path $env:JAVA_HOME -PathType Container)) {
  $javaRoot = $env:JAVA_HOME
}

$javaExe = if ($javaRoot) { Join-Path $javaRoot 'bin\java.exe' } else { $null }
$defaultSdkRoot = Join-Path $env:LOCALAPPDATA 'Android\Sdk'
$candidateSdkRoots = @()

if ($env:ANDROID_SDK_ROOT) {
  $candidateSdkRoots += $env:ANDROID_SDK_ROOT
}

$candidateSdkRoots += $defaultSdkRoot

if ($workspaceOwner) {
  $candidateSdkRoots += "C:\Users\$workspaceOwner\AppData\Local\Android\Sdk"
}

$androidSdkRoot = $candidateSdkRoots |
  Where-Object { $_ } |
  Select-Object -Unique |
  Where-Object { Test-Path $_ } |
  Select-Object -First 1

$androidUserHome = if ($workspaceOwner) {
  "C:\Users\$workspaceOwner\.android"
} else {
  Join-Path $env:USERPROFILE '.android'
}
$adbExe = if ($androidSdkRoot) { Join-Path $androidSdkRoot 'platform-tools\adb.exe' } else { $null }
$emulatorExe = if ($androidSdkRoot) { Join-Path $androidSdkRoot 'emulator\emulator.exe' } else { $null }
$preferredAvd = 'FlangeFacil_API37'

function Get-PreferredLocalIPv4 {
  try {
    $interfaces = [System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() |
      Where-Object {
        $_.OperationalStatus -eq [System.Net.NetworkInformation.OperationalStatus]::Up -and
        $_.NetworkInterfaceType -ne [System.Net.NetworkInformation.NetworkInterfaceType]::Loopback
      }

    foreach ($interface in $interfaces) {
      $addresses = $interface.GetIPProperties().UnicastAddresses

      foreach ($address in $addresses) {
        if (
          $address.Address.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork -and
          -not $address.Address.ToString().StartsWith('169.254.')
        ) {
          return $address.Address.ToString()
        }
      }
    }
  } catch {
    return $null
  }

  return $null
}

function Ensure-PathEntry {
  param(
    [string]$Value
  )

  if (-not $Value) {
    return
  }

  if (-not (Test-Path $Value)) {
    return
  }

  $separator = [IO.Path]::PathSeparator
  $entries = $env:Path -split [regex]::Escape($separator)

  if ($entries -notcontains $Value) {
    $env:Path = "$Value$separator$env:Path"
  }
}

function Initialize-Environment {
  if ($javaRoot -and (Test-Path $javaExe)) {
    $env:JAVA_HOME = $javaRoot
    Ensure-PathEntry (Join-Path $javaRoot 'bin')
  }

  if ($androidSdkRoot) {
    $env:ANDROID_SDK_ROOT = $androidSdkRoot
    $env:ANDROID_HOME = $androidSdkRoot
    Ensure-PathEntry (Join-Path $androidSdkRoot 'platform-tools')
    Ensure-PathEntry (Join-Path $androidSdkRoot 'emulator')
  }

  if (-not (Test-Path $androidUserHome)) {
    New-Item -ItemType Directory -Path $androidUserHome -Force | Out-Null
  }

  $env:ANDROID_USER_HOME = $androidUserHome
}

function Get-AdbDevices {
  if (-not $adbExe -or -not (Test-Path $adbExe)) {
    return @()
  }

  $output = & $adbExe devices 2>$null

  if (-not $output) {
    return @()
  }

  return $output |
    Select-Object -Skip 1 |
    Where-Object { $_ -match "\sdevice$" } |
    ForEach-Object { ($_ -split "\s+")[0] }
}

function Get-AvdNames {
  if (-not $emulatorExe -or -not (Test-Path $emulatorExe)) {
    return @()
  }

  $output = & $emulatorExe -list-avds 2>$null

  if (-not $output) {
    return @()
  }

  return $output | Where-Object { $_.Trim() }
}

function Write-AndroidDoctor {
  $devices = Get-AdbDevices
  $avds = Get-AvdNames

  Write-Host ''
  Write-Host 'Android doctor'
  Write-Host "SDK: $androidSdkRoot"
  Write-Host "JAVA_HOME: $($env:JAVA_HOME)"
  Write-Host "ADB: $adbExe"
  Write-Host "Emulator: $emulatorExe"
  Write-Host "ANDROID_USER_HOME: $androidUserHome"
  Write-Host "Devices: $($devices.Count)"

  if ($devices.Count -gt 0) {
    $devices | ForEach-Object { Write-Host "  - $_" }
  }

  Write-Host "AVDs: $($avds.Count)"

  if ($avds.Count -gt 0) {
    $avds | ForEach-Object { Write-Host "  - $_" }
  }

  if ($devices.Count -eq 0 -and $avds.Count -eq 0) {
    Write-Host ''
    Write-Host 'Nenhum device ou emulador Android esta disponivel neste momento.'
    Write-Host 'Voce ainda pode usar: .\start-flangefacil.ps1 -Web'
  }
}

function Write-ExpoHostHint {
  param(
    [string]$HostFlag
  )

  switch ($HostFlag) {
    '--lan' {
      $localIp = Get-PreferredLocalIPv4

      Write-Host ''
      Write-Host 'Modo LAN habilitado para uso no smartphone.'

      if ($localIp) {
        Write-Host "IP local detectado: $localIp"
      }

      Write-Host 'Conecte o celular na mesma rede Wi-Fi e abra pelo Expo Go usando o QR code.'
      break
    }
    '--tunnel' {
      Write-Host ''
      Write-Host 'Modo Tunnel habilitado.'
      Write-Host 'Use este modo se o celular nao conseguir acessar o app pela rede local.'
      break
    }
  }
}

function Start-PreferredAvd {
  $avds = Get-AvdNames

  if ($avds.Count -eq 0) {
    return $false
  }

  $selectedAvd = if ($avds -contains $preferredAvd) {
    $preferredAvd
  } else {
    $avds[0]
  }

  Write-Host "Abrindo emulador Android: $selectedAvd"
  Start-Process -FilePath $emulatorExe -ArgumentList @('-avd', $selectedAvd)
  return $true
}

function Wait-For-AndroidDevice {
  param(
    [int]$TimeoutSeconds = 180
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)

  while ((Get-Date) -lt $deadline) {
    $devices = Get-AdbDevices

    if ($devices.Count -gt 0) {
      return $true
    }

    Start-Sleep -Seconds 5
  }

  return $false
}

if (-not (Test-Path $projectRoot)) {
  throw "Projeto nao encontrado em: $projectRoot"
}

$usePortableNode = $nodeExe -and $npmCli

if (-not $usePortableNode -and -not $npmCommand) {
  throw 'npm nao encontrado. Instale Node.js no PATH ou mantenha o Node portatil ao lado do projeto.'
}

Initialize-Environment

if ($Doctor) {
  Write-AndroidDoctor
  exit 0
}

$selectedPlatforms = @()

if ($Android) {
  $selectedPlatforms += '--android'
}

if ($Ios) {
  $selectedPlatforms += '--ios'
}

if ($Web) {
  $selectedPlatforms += '--web'
}

if ($selectedPlatforms.Count -gt 1) {
  throw "Use apenas uma das opcoes: -Android, -Ios ou -Web."
}

$selectedHostModes = @()

if ($Lan) {
  $selectedHostModes += '--lan'
}

if ($Tunnel) {
  $selectedHostModes += '--tunnel'
}

if ($Localhost) {
  $selectedHostModes += '--localhost'
}

if ($selectedHostModes.Count -gt 1) {
  throw "Use apenas uma das opcoes de host: -Lan, -Tunnel ou -Localhost."
}

if ($Android) {
  if (-not $androidSdkRoot) {
    throw "Android SDK nao encontrado. Rode .\start-flangefacil.ps1 -Doctor para diagnostico."
  }

  if (-not (Test-Path $adbExe)) {
    throw "adb.exe nao encontrado em: $adbExe"
  }

  if (-not (Test-Path $emulatorExe)) {
    throw "emulator.exe nao encontrado em: $emulatorExe"
  }

  $devices = Get-AdbDevices

  if ($devices.Count -eq 0) {
    $started = Start-PreferredAvd

    if ($started) {
      $ready = Wait-For-AndroidDevice

      if (-not $ready) {
        Write-AndroidDoctor
        throw "O emulador foi iniciado, mas nenhum device ficou disponivel a tempo."
      }
    } else {
      Write-AndroidDoctor
      throw "Nenhum Android conectado e nenhum AVD cadastrado. Use .\start-flangefacil.ps1 -Web ou crie/conecte um device."
    }
  }
}

$commandArgs = @('start')
$expoArgs = @()

if ($selectedPlatforms.Count -eq 1) {
  $expoArgs += $selectedPlatforms[0]
}

if ($selectedHostModes.Count -eq 1) {
  $expoArgs += $selectedHostModes[0]
}

if ($Clear) {
  $expoArgs += '-c'
}

if ($expoArgs.Count -gt 0) {
  $commandArgs += '--'
  $commandArgs += $expoArgs
}

if ($ShowCommand) {
  $rendered = if ($usePortableNode) {
    @($nodeExe, $npmCli) + $commandArgs
  } else {
    @($npmCommand) + $commandArgs
  }

  $rendered = $rendered | ForEach-Object {
    if ($_ -match '\s') {
      '"{0}"' -f $_
    } else {
      $_
    }
  }

  Write-Host ($rendered -join ' ')
  exit 0
}

Push-Location $projectRoot

try {
  if ($selectedHostModes.Count -eq 1) {
    Write-ExpoHostHint -HostFlag $selectedHostModes[0]
  }

  if ($usePortableNode) {
    & $nodeExe $npmCli @commandArgs
  } else {
    & $npmCommand @commandArgs
  }
} finally {
  Pop-Location
}
