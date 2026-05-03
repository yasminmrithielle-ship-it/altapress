import React, { useEffect, useMemo, useRef, useState } from 'react';
import type {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  ActivityIndicator,
  Alert,
  Animated,
  FlatList,
  Image,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  ChevronLeft,
  ChevronRight,
  CircleGauge,
  Cog,
  Disc3,
  Droplets,
  Filter,
  Gauge,
  Image as ImageIcon,
  Info,
  Menu,
  Nut,
  Ruler,
  Search,
  Send,
  Wrench,
  X,
} from 'lucide-react-native';
import {
  CATALOG_IMAGE_ASSETS,
  CATALOG_PRODUCT_IMAGES,
} from './catalog-images';
import {
  CATALOG_DRAWING_ASSETS,
  CATALOG_PRODUCT_DRAWINGS,
} from './catalog-drawings';
import {
  CATALOG_CATEGORIES,
  CATALOG_ITEMS,
  CatalogCategory,
  CatalogItem,
} from './catalog';

type FlangeClass =
  | '150lbs'
  | '300lbs'
  | '600lbs'
  | 'PN10'
  | 'PN16'
  | 'PN25'
  | 'PN40';

type Standard = 'ANSI / ASME B16.5' | 'DIN / EN 1092-1';
type FlangeType =
  | 'WN - Weld Neck'
  | 'SO - Slip On'
  | 'BL - Blind'
  | 'TH - Roscado'
  | 'SW - Socket Weld';

type Flange = {
  id: string;
  standard: Standard;
  classe: FlangeClass;
  tipo: FlangeType;
  nps?: string;
  dn?: string;
  diametroExternoMm: number;
  furoCentralMm?: number;
  circuloFurosMm: number;
  qtdFuros: number;
  diametroFuroMm: number;
  parafuso: string;
  espessuraMm?: number;
  face?: 'RF' | 'FF' | 'RTJ';
  observacao?: string;
};

type PhotoAnalysisResult = {
  tipo_peca: string;
  tipo_flange: string;
  nome_tecnico: string;
  norma_provavel: string;
  classe_provavel: string;
  material_provavel: string;
  face: string;
  confianca: number;
  caracteristicas: string[];
  alternativas: string[];
  nao_confirmado: string[];
  recomendacoes: string[];
  resumo: string;
};

type PhotoChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  result?: PhotoAnalysisResult;
};

// ATENCAO:
// Estes dados abaixo sao exemplos para estruturacao do app.
// Antes de vender/usar em campo, substitua por dados conferidos em catalogo oficial,
// norma licenciada ASME/ANSI/DIN/EN ou tabela validada pela empresa.
const FLANGES: Flange[] = [
  {
    id: 'ansi-150-2-so',
    standard: 'ANSI / ASME B16.5',
    classe: '150lbs',
    tipo: 'SO - Slip On',
    nps: '2"',
    dn: 'DN50',
    diametroExternoMm: 152,
    furoCentralMm: 61,
    circuloFurosMm: 120.7,
    qtdFuros: 4,
    diametroFuroMm: 19,
    parafuso: '5/8"',
    espessuraMm: 19,
    face: 'RF',
    observacao:
      'Exemplo ANSI 150. Conferir tabela oficial antes de uso tecnico.',
  },
  {
    id: 'ansi-300-2-wn',
    standard: 'ANSI / ASME B16.5',
    classe: '300lbs',
    tipo: 'WN - Weld Neck',
    nps: '2"',
    dn: 'DN50',
    diametroExternoMm: 165,
    furoCentralMm: 61,
    circuloFurosMm: 127,
    qtdFuros: 8,
    diametroFuroMm: 19,
    parafuso: '5/8"',
    espessuraMm: 22,
    face: 'RF',
    observacao:
      'Exemplo ANSI 300. Conferir tabela oficial antes de uso tecnico.',
  },
  {
    id: 'ansi-600-2-bl',
    standard: 'ANSI / ASME B16.5',
    classe: '600lbs',
    tipo: 'BL - Blind',
    nps: '2"',
    dn: 'DN50',
    diametroExternoMm: 165,
    circuloFurosMm: 127,
    qtdFuros: 8,
    diametroFuroMm: 19,
    parafuso: '5/8"',
    espessuraMm: 32,
    face: 'RF',
    observacao:
      'Exemplo ANSI 600. Conferir tabela oficial antes de uso tecnico.',
  },
  {
    id: 'din-pn16-dn50-wn',
    standard: 'DIN / EN 1092-1',
    classe: 'PN16',
    tipo: 'WN - Weld Neck',
    dn: 'DN50',
    diametroExternoMm: 165,
    furoCentralMm: 61,
    circuloFurosMm: 125,
    qtdFuros: 4,
    diametroFuroMm: 18,
    parafuso: 'M16',
    espessuraMm: 18,
    face: 'RF',
    observacao:
      'Exemplo DIN/EN. Conferir tabela oficial antes de uso tecnico.',
  },
];

function formatCode(item: Flange) {
  return `${item.dn ?? '-'}${item.nps ? ` / ${item.nps}` : ''}`;
}

const MILLIMETERS_PER_INCH = 25.4;
const QUICK_INCH_SIZES = [
  '1/4',
  '3/8',
  '1/2',
  '3/4',
  '1',
  '1 1/2',
  '2',
  '2 1/2',
  '3',
  '4',
];

type ConverterInput = 'inch' | 'millimeter';
type ToolRoute = 'home' | 'converter' | 'photo';

const PHOTO_API_FALLBACK_URL =
  'https://altapress-production.up.railway.app/api/photo-reading';
const PHOTO_MAX_BYTES = 10 * 1024 * 1024;

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getPhotoReadingEndpoint() {
  const location = (globalThis as any).location;

  if (
    location?.origin &&
    location.hostname !== 'localhost' &&
    location.hostname !== '127.0.0.1'
  ) {
    return `${location.origin}/api/photo-reading`;
  }

  return PHOTO_API_FALLBACK_URL;
}

function getImageMimeType(asset: ImagePicker.ImagePickerAsset) {
  if (asset.mimeType) {
    return asset.mimeType;
  }

  const uri = asset.uri.toLowerCase();

  if (uri.endsWith('.png')) {
    return 'image/png';
  }

  if (uri.endsWith('.webp')) {
    return 'image/webp';
  }

  return 'image/jpeg';
}

function estimateBase64Bytes(base64: string) {
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
  return Math.floor((base64.length * 3) / 4) - padding;
}

function parseDecimalMeasure(value: string) {
  const cleaned = value
    .toLowerCase()
    .replace(/milimetros?|millimeters?|mm/g, ' ')
    .replace(',', '.')
    .trim();
  const match = cleaned.match(/\d+(?:\.\d+)?/);

  if (!match) {
    return null;
  }

  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseInchValue(value: string) {
  const cleaned = value
    .toLowerCase()
    .replace(/["']/g, ' ')
    .replace(/\b(polegadas?|pol|inches?|inch|in)\b\.?/g, ' ')
    .replace(',', '.')
    .replace(/-/g, ' ')
    .trim();

  if (!cleaned) {
    return null;
  }

  const fraction = cleaned.match(
    /^(?:(\d+(?:\.\d+)?)\s+)?(\d+)\/(\d+)$/,
  );

  if (fraction) {
    const whole = fraction[1] ? Number(fraction[1]) : 0;
    const numerator = Number(fraction[2]);
    const denominator = Number(fraction[3]);

    if (!denominator) {
      return null;
    }

    return whole + numerator / denominator;
  }

  const numeric = cleaned.match(/\d+(?:\.\d+)?/);

  if (!numeric) {
    return null;
  }

  const parsed = Number(numeric[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatNumber(value: number, decimals = 2) {
  return value
    .toFixed(decimals)
    .replace(/\.?0+$/, '')
    .replace('.', ',');
}

function formatNearestFraction(value: number) {
  const denominatorBase = 16;
  let whole = Math.floor(value);
  let numerator = Math.round((value - whole) * denominatorBase);

  if (numerator === denominatorBase) {
    whole += 1;
    numerator = 0;
  }

  if (!numerator) {
    return `${whole}"`;
  }

  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
  const divisor = gcd(numerator, denominatorBase);
  const reducedNumerator = numerator / divisor;
  const reducedDenominator = denominatorBase / divisor;

  if (!whole) {
    return `${reducedNumerator}/${reducedDenominator}"`;
  }

  return `${whole} ${reducedNumerator}/${reducedDenominator}"`;
}

function parseFlangeInches(item: Flange) {
  return item.nps ? parseInchValue(item.nps) : null;
}

function parseFlangeDnMillimeters(item: Flange) {
  const match = item.dn?.match(/\d+(?:[,.]\d+)?/);

  if (!match) {
    return null;
  }

  return parseDecimalMeasure(match[0]);
}

const COLORS = {
  bg: '#090a0c',
  ink: '#121418',
  inkSoft: '#171b20',
  red: '#d71920',
  redDeep: '#ff545a',
  redGlow: 'rgba(215, 25, 32, 0.22)',
  silver: '#d7d9dd',
  silverSoft: '#1d2229',
  silverStrong: '#252c35',
  white: '#ffffff',
  textOnDark: '#f4f5f7',
  textDark: '#f4f5f7',
  mutedOnDark: 'rgba(244,245,247,0.76)',
  muted: '#a3aab3',
  borderOnDark: 'rgba(255,255,255,0.1)',
  borderSoft: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.14)',
};

const WHATSAPP_PHONE = '553191878767';
const WHATSAPP_MESSAGE = 'Ola, quero falar com a ALTA PRESS.';

export default function App() {
  const { width } = useWindowDimensions();
  const [catalogQuery, setCatalogQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogRoute, setCatalogRoute] = useState<CatalogCategory | null>(
    null,
  );
  const [selectedCatalogItem, setSelectedCatalogItem] =
    useState<CatalogItem | null>(null);
  const [selected, setSelected] = useState<Flange | null>(FLANGES[0] ?? null);
  const [inchInput, setInchInput] = useState('2');
  const [millimeterInput, setMillimeterInput] = useState('50,8');
  const [activeConverterInput, setActiveConverterInput] =
    useState<ConverterInput>('inch');
  const [activeTool, setActiveTool] = useState<ToolRoute>('home');
  const [photoImageUri, setPhotoImageUri] = useState<string | null>(null);
  const [photoFileName, setPhotoFileName] = useState('');
  const [photoUserNote, setPhotoUserNote] = useState('');
  const [photoMessages, setPhotoMessages] = useState<PhotoChatMessage[]>([]);
  const [photoLoading, setPhotoLoading] = useState(false);
  const drawerProgress = useRef(new Animated.Value(0)).current;
  const drawerWidth = Math.min(width * 0.88, 390);
  const drawerTranslateX = drawerProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-drawerWidth, 0],
  });
  const drawerOverlayOpacity = drawerProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.62],
  });

  useEffect(() => {
    Animated.timing(drawerProgress, {
      toValue: menuOpen ? 1 : 0,
      duration: 240,
      useNativeDriver: true,
    }).start();
  }, [drawerProgress, menuOpen]);

  const categoryProducts = useMemo(() => {
    const q = catalogQuery.trim().toLowerCase();

    if (!catalogRoute) {
      return [];
    }

    return CATALOG_ITEMS.filter((item) => {
      if (item.category !== catalogRoute) {
        return false;
      }

      if (!q) {
        return true;
      }

      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        item.specs.some(
          (spec) =>
            spec.label.toLowerCase().includes(q) ||
            spec.value.toLowerCase().includes(q),
        )
      );
    });
  }, [catalogQuery, catalogRoute]);

  const inchValue = useMemo(() => parseInchValue(inchInput), [inchInput]);
  const millimeterValue = useMemo(
    () => parseDecimalMeasure(millimeterInput),
    [millimeterInput],
  );
  const converterTarget = useMemo(() => {
    if (activeConverterInput === 'inch' && inchValue !== null) {
      return {
        inches: inchValue,
        millimeters: inchValue * MILLIMETERS_PER_INCH,
      };
    }

    if (activeConverterInput === 'millimeter' && millimeterValue !== null) {
      return {
        inches: millimeterValue / MILLIMETERS_PER_INCH,
        millimeters: millimeterValue,
      };
    }

    if (inchValue !== null) {
      return {
        inches: inchValue,
        millimeters: inchValue * MILLIMETERS_PER_INCH,
      };
    }

    if (millimeterValue !== null) {
      return {
        inches: millimeterValue / MILLIMETERS_PER_INCH,
        millimeters: millimeterValue,
      };
    }

    return null;
  }, [activeConverterInput, inchValue, millimeterValue]);
  const converterMatches = useMemo(() => {
    if (!converterTarget) {
      return [];
    }

    return FLANGES.filter((item) => {
      const flangeInches = parseFlangeInches(item);
      const flangeDnMillimeters = parseFlangeDnMillimeters(item);
      const matchNps =
        flangeInches !== null &&
        Math.abs(flangeInches - converterTarget.inches) <= 0.04;
      const matchDn =
        flangeDnMillimeters !== null &&
        Math.abs(flangeDnMillimeters - converterTarget.millimeters) <= 2;

      return matchNps || matchDn;
    });
  }, [converterTarget]);

  const handleInchInputChange = (value: string) => {
    setActiveConverterInput('inch');
    setInchInput(value);

    const parsed = parseInchValue(value);
    setMillimeterInput(
      parsed === null ? '' : formatNumber(parsed * MILLIMETERS_PER_INCH),
    );
  };

  const handleMillimeterInputChange = (value: string) => {
    setActiveConverterInput('millimeter');
    setMillimeterInput(value);

    const parsed = parseDecimalMeasure(value);
    setInchInput(
      parsed === null ? '' : formatNumber(parsed / MILLIMETERS_PER_INCH, 4),
    );
  };

  const handleQuickInchSize = (value: string) => {
    const parsed = parseInchValue(value);

    if (parsed === null) {
      return;
    }

    setActiveConverterInput('inch');
    setInchInput(value);
    setMillimeterInput(formatNumber(parsed * MILLIMETERS_PER_INCH));
  };

  const pickNativePhoto = async (source: 'camera' | 'library') => {
    try {
      const permission =
        source === 'camera'
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Permissao necessaria',
          source === 'camera'
            ? 'Autorize o uso da camera para fotografar a peca.'
            : 'Autorize o acesso as imagens para selecionar a foto da peca.',
        );
        return;
      }

      const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: ['images'],
        allowsEditing: false,
        base64: true,
        quality: 0.78,
        exif: false,
      };
      const result =
        source === 'camera'
          ? await ImagePicker.launchCameraAsync(options)
          : await ImagePicker.launchImageLibraryAsync(options);

      if (result.canceled) {
        return;
      }

      const asset = result.assets[0];

      if (!asset?.base64) {
        Alert.alert(
          'Imagem indisponivel',
          'Nao consegui preparar essa foto para analise. Tente novamente.',
        );
        return;
      }

      if (estimateBase64Bytes(asset.base64) > PHOTO_MAX_BYTES) {
        Alert.alert(
          'Imagem muito grande',
          'Envie uma foto com ate 10 MB para manter a analise rapida.',
        );
        return;
      }

      setPhotoImageUri(`data:${getImageMimeType(asset)};base64,${asset.base64}`);
      setPhotoFileName(
        asset.fileName ||
          (source === 'camera' ? 'foto-da-camera.jpg' : 'foto-da-galeria.jpg'),
      );
    } catch (error) {
      Alert.alert(
        'Leitura por foto',
        error instanceof Error
          ? error.message
          : 'Nao consegui abrir a camera ou galeria.',
      );
    }
  };

  const handlePickPhoto = () => {
    if (Platform.OS !== 'web') {
      Alert.alert('Leitura por foto', 'Escolha como enviar a imagem da peca.', [
        {
          text: 'Camera',
          onPress: () => {
            void pickNativePhoto('camera');
          },
        },
        {
          text: 'Galeria',
          onPress: () => {
            void pickNativePhoto('library');
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]);
      return;
    }

    const documentRef = (globalThis as any).document;
    const FileReaderRef = (globalThis as any).FileReader;

    if (!documentRef || !FileReaderRef) {
      Alert.alert(
        'Leitura por foto',
        'Nao consegui abrir o seletor de imagem neste dispositivo.',
      );
      return;
    }

    const input = documentRef.createElement('input');
    input.type = 'file';
    input.accept = 'image/png,image/jpeg,image/webp,image/gif';
    input.setAttribute('capture', 'environment');

    input.onchange = () => {
      const file = input.files?.[0];

      if (!file) {
        return;
      }

      if (!file.type?.startsWith('image/')) {
        Alert.alert('Arquivo invalido', 'Envie uma imagem da peca.');
        return;
      }

      if (file.size > PHOTO_MAX_BYTES) {
        Alert.alert(
          'Imagem muito grande',
          'Envie uma foto com ate 10 MB para manter a analise rapida.',
        );
        return;
      }

      const reader = new FileReaderRef();
      reader.onload = () => {
        setPhotoImageUri(String(reader.result));
        setPhotoFileName(file.name || 'foto-da-peca');
      };
      reader.onerror = () => {
        Alert.alert('Erro', 'Nao consegui carregar essa imagem.');
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };

  const handleSendPhoto = async () => {
    if (!photoImageUri) {
      Alert.alert('Leitura por foto', 'Envie uma foto da peca primeiro.');
      return;
    }

    const imageDataUrl = photoImageUri;
    const userNote = photoUserNote.trim();

    setPhotoLoading(true);
    setPhotoImageUri(null);
    setPhotoFileName('');

    const userMessage: PhotoChatMessage = {
      id: createMessageId(),
      role: 'user',
      text: userNote
        ? `Foto enviada para analise. Observacao: ${userNote}`
        : 'Foto enviada para analise.',
    };

    setPhotoMessages((current) => [...current, userMessage]);

    try {
      const response = await fetch(getPhotoReadingEndpoint(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageDataUrl,
          userNote,
        }),
      });
      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          payload?.error ||
            'Nao consegui consultar a IA agora. Tente novamente.',
        );
      }

      const result = payload?.result as PhotoAnalysisResult | undefined;
      const assistantMessage: PhotoChatMessage = {
        id: createMessageId(),
        role: 'assistant',
        text:
          result?.resumo ||
          payload?.rawText ||
          'Analise concluida.',
        result,
      };

      setPhotoMessages((current) => [...current, assistantMessage]);
      setPhotoUserNote('');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Nao consegui analisar a foto agora.';

      setPhotoMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: 'assistant',
          text: message,
        },
      ]);
      Alert.alert('Leitura por foto', message);
    } finally {
      setPhotoLoading(false);
      setPhotoImageUri(null);
      setPhotoFileName('');
    }
  };

  const openWhatsApp = async () => {
    await openWhatsAppMessage(WHATSAPP_MESSAGE);
  };

  const openWhatsAppMessage = async (rawMessage: string) => {
    const message = encodeURIComponent(rawMessage);
    const appUrl = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${message}`;
    const webUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

    if (await Linking.canOpenURL(appUrl)) {
      await Linking.openURL(appUrl);
      return;
    }

    await Linking.openURL(webUrl);
  };

  const openProductOrder = async (item: CatalogItem) => {
    await openWhatsAppMessage(
      `Ola, quero pedir o produto: ${item.title}. Categoria: ${item.category}.`,
    );
  };

  const homeHeader = (
    <>
      <View style={styles.heroShell}>
        <View style={[styles.heroGlow, styles.heroGlowRight]} />
        <View style={[styles.heroGlow, styles.heroGlowLeft]} />

        <View style={styles.heroInner}>
          <View style={styles.headerBar}>
            <Pressable
              style={styles.menuButton}
              onPress={() => {
                setCatalogRoute(null);
                setCatalogQuery('');
                setSelectedCatalogItem(null);
                setMenuOpen(true);
              }}
              accessibilityRole="button"
              accessibilityLabel="Abrir catalogo"
            >
              <Menu color={COLORS.white} size={22} />
            </Pressable>

            <Pressable
              style={styles.headerCta}
              onPress={() => {
                setMenuOpen(false);
                setActiveTool('photo');
              }}
            >
              <Text style={styles.headerCtaText}>Consulta rapida</Text>
            </Pressable>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.heroLogoPanel}>
              <Image
                source={require('./assets/alta-press-logo-banner.png')}
                style={styles.heroLogoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.eyebrow}>ALTA PRESS</Text>
            <Text style={styles.heroTitle}>
              ALTA PRESS SIMPLIFICANDO SUA VIDA!
            </Text>
            <Text style={styles.heroText}>
              Consulte produtos, categorias e informacoes tecnicas com rapidez
              no app, ou atendimento via telefone e whatsapp.
            </Text>

            <View style={styles.heroCatalogGrid}>
              {CATALOG_CATEGORIES.map((category) => (
                <HeroCatalogShortcut
                  key={category}
                  category={category}
                  compact={width < 520}
                  onPress={() => {
                    setCatalogRoute(category);
                    setCatalogQuery('');
                    setSelectedCatalogItem(null);
                    setMenuOpen(true);
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionBlock}>
        <SectionHeading
          icon={<Info color={COLORS.red} size={18} />}
          title="Ferramentas rapidas"
          text="Acesso direto aos recursos que a equipe mais usa."
        />

        <View style={styles.toolsGrid}>
          <ToolCard
            icon={<Ruler color={COLORS.red} size={22} />}
            title="Comparador"
            text="Converta polegadas e milimetros para identificar a peca."
            onPress={() => setActiveTool('converter')}
          />
          <ToolCard
            icon={<ImageIcon color={COLORS.red} size={22} />}
            title="Analisando foto com IA"
            text="Sugestao visual para acelerar a identificacao da peca."
            onPress={() => setActiveTool('photo')}
          />
          <ToolCard
            icon={<Search color={COLORS.red} size={22} />}
            title="Busca tecnica"
            text="Encontre itens por DN, NPS, norma, face e parafuso."
            onPress={() =>
              Alert.alert(
                'ALTA PRESS',
                'Use o campo de busca principal para localizar o item.',
              )
            }
          />
        </View>
      </View>

    </>
  );

  const toolHeader =
    activeTool === 'converter' ? (
      <View style={styles.toolScreen}>
        <ToolScreenHeader
          icon={<Ruler color={COLORS.red} size={20} />}
          title="Comparador"
          text="Converta polegadas e milimetros em uma aba dedicada."
          onBack={() => setActiveTool('home')}
        />

        <InchMillimeterConverter
          activeInput={activeConverterInput}
          inchInput={inchInput}
          inchValue={inchValue}
          millimeterInput={millimeterInput}
          millimeterValue={millimeterValue}
          matches={converterMatches}
          target={converterTarget}
          onInchChange={handleInchInputChange}
          onMillimeterChange={handleMillimeterInputChange}
          onQuickSize={handleQuickInchSize}
          onSelectMatch={setSelected}
        />
      </View>
    ) : activeTool === 'photo' ? (
      <View style={styles.toolScreen}>
        <ToolScreenHeader
          icon={<ImageIcon color={COLORS.red} size={20} />}
          title="Analisando foto com IA"
          text="Envie a imagem da peca para identificacao tecnica pela IA."
          onBack={() => setActiveTool('home')}
        />

        <PhotoReadingChat
          imageUri={photoImageUri}
          fileName={photoFileName}
          loading={photoLoading}
          messages={photoMessages}
          userNote={photoUserNote}
          onClose={() => setActiveTool('home')}
          onPickPhoto={handlePickPhoto}
          onSendPhoto={handleSendPhoto}
          onUserNoteChange={setPhotoUserNote}
        />
      </View>
    ) : null;

  const header = activeTool === 'home' ? homeHeader : toolHeader;
  const visibleResults: Flange[] = [];

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        style={styles.list}
        data={visibleResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = selected?.id === item.id;

          return (
            <Pressable
              style={[styles.resultCard, isActive && styles.resultCardActive]}
              onPress={() => setSelected(item)}
            >
              <View style={styles.resultTop}>
                <View style={styles.resultCopy}>
                  <Text style={styles.resultTitle}>{formatCode(item)}</Text>
                  <Text style={styles.resultSub}>{item.tipo}</Text>
                  <Text style={styles.resultMeta}>{item.standard}</Text>
                </View>

                <View style={styles.resultBadge}>
                  <Text style={styles.resultBadgeText}>{item.classe}</Text>
                </View>
              </View>

              <View style={styles.resultSpecsGrid}>
                <ResultMeasure label="OD" value={`${item.diametroExternoMm} mm`} />
                <ResultMeasure label="PCD" value={`${item.circuloFurosMm} mm`} />
                <ResultMeasure
                  label="Furos"
                  value={`${item.qtdFuros} x ${item.diametroFuroMm} mm`}
                  wide
                />
              </View>
            </Pressable>
          );
        }}
        ListHeaderComponent={header}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <View
        pointerEvents={menuOpen ? 'auto' : 'none'}
        style={styles.drawerLayer}
      >
        <Pressable style={styles.drawerScrimButton} onPress={() => setMenuOpen(false)}>
          <Animated.View
            style={[
              styles.drawerScrim,
              { opacity: drawerOverlayOpacity },
            ]}
          />
        </Pressable>

        <Animated.View
          style={[
            styles.drawerPanel,
            {
              width: drawerWidth,
              transform: [{ translateX: drawerTranslateX }],
            },
          ]}
        >
          <View style={styles.drawerHeader}>
            <View>
              <Text style={styles.drawerEyebrow}>ALTA PRESS</Text>
              <Text style={styles.drawerTitle}>
                {catalogRoute ?? 'Catalogo'}
              </Text>
            </View>

            <Pressable
              style={styles.drawerCloseButton}
              onPress={() => setMenuOpen(false)}
              accessibilityRole="button"
              accessibilityLabel="Fechar catalogo"
            >
              <X color={COLORS.white} size={20} />
            </Pressable>
          </View>

          {catalogRoute ? (
            <Pressable
              style={styles.drawerBackButton}
              onPress={() => {
                setCatalogRoute(null);
                setCatalogQuery('');
                setSelectedCatalogItem(null);
              }}
            >
              <ChevronLeft color={COLORS.redDeep} size={18} />
              <Text style={styles.drawerBackText}>Categorias</Text>
            </Pressable>
          ) : null}

          {catalogRoute ? (
            <View style={styles.drawerSearchBox}>
              <Search color={COLORS.red} size={18} />
              <TextInput
                style={styles.drawerInput}
                placeholder="Buscar produto..."
                placeholderTextColor={COLORS.muted}
                value={catalogQuery}
                onChangeText={setCatalogQuery}
              />
            </View>
          ) : null}

          <ScrollView
            style={styles.drawerScroll}
            contentContainerStyle={styles.drawerScrollContent}
            showsVerticalScrollIndicator={false}
          >
            {catalogRoute ? (
              <View style={styles.drawerGroup}>
                {categoryProducts.map((item) => (
                  <CatalogCard
                    key={item.id}
                    item={item}
                    onPress={() => {
                      setSelectedCatalogItem(item);
                      setMenuOpen(false);
                    }}
                  />
                ))}

                {!categoryProducts.length ? (
                  <Text style={styles.drawerEmpty}>
                    Nenhum produto encontrado nesta categoria.
                  </Text>
                ) : null}
              </View>
            ) : (
              <View style={styles.categoryMenuGrid}>
                {CATALOG_CATEGORIES.map((category) => (
                  <CategoryTile
                    key={category}
                    category={category}
                    onPress={() => {
                      setCatalogRoute(category);
                      setCatalogQuery('');
                      setSelectedCatalogItem(null);
                    }}
                  />
                ))}
              </View>
            )}
          </ScrollView>

          <Pressable style={styles.whatsappButton} onPress={openWhatsApp}>
            <View style={styles.whatsappIconWrap}>
              <Send color={COLORS.white} size={18} />
            </View>
            <View style={styles.whatsappCopy}>
              <Text style={styles.whatsappTitle}>WhatsApp</Text>
              <Text style={styles.whatsappText}>Falar com a ALTA PRESS</Text>
            </View>
            <ChevronRight color={COLORS.white} size={18} />
          </Pressable>
        </Animated.View>
      </View>

      {selectedCatalogItem ? (
        <CatalogQuickView
          item={selectedCatalogItem}
          onClose={() => setSelectedCatalogItem(null)}
          onOrder={() => openProductOrder(selectedCatalogItem)}
        />
      ) : null}
    </SafeAreaView>
  );
}

function SectionHeading({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.sectionHeading}>
      <View style={styles.sectionHeadingTop}>
        {icon}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <Text style={styles.sectionText}>{text}</Text>
    </View>
  );
}

function ToolCard({
  icon,
  title,
  text,
  onPress,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.toolCard} onPress={onPress}>
      <View style={styles.toolIconWrap}>{icon}</View>
      <Text style={styles.toolTitle}>{title}</Text>
      <Text style={styles.toolText}>{text}</Text>
    </Pressable>
  );
}

function ToolScreenHeader({
  icon,
  title,
  text,
  onBack,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  onBack: () => void;
}) {
  return (
    <View style={styles.toolScreenHeader}>
      <Pressable style={styles.toolBackButton} onPress={onBack}>
        <ChevronLeft color={COLORS.white} size={20} />
        <Text style={styles.toolBackText}>Voltar</Text>
      </Pressable>

      <View style={styles.toolScreenTitleRow}>
        <View style={styles.toolScreenIcon}>{icon}</View>
        <View style={styles.toolScreenCopy}>
          <Text style={styles.toolScreenLabel}>Ferramenta rapida</Text>
          <Text style={styles.toolScreenTitle}>{title}</Text>
          <Text style={styles.toolScreenText}>{text}</Text>
        </View>
      </View>
    </View>
  );
}

function InchMillimeterConverter({
  activeInput,
  inchInput,
  inchValue,
  millimeterInput,
  millimeterValue,
  matches,
  target,
  onInchChange,
  onMillimeterChange,
  onQuickSize,
  onSelectMatch,
}: {
  activeInput: ConverterInput;
  inchInput: string;
  inchValue: number | null;
  millimeterInput: string;
  millimeterValue: number | null;
  matches: Flange[];
  target: { inches: number; millimeters: number } | null;
  onInchChange: (value: string) => void;
  onMillimeterChange: (value: string) => void;
  onQuickSize: (value: string) => void;
  onSelectMatch: (item: Flange) => void;
}) {
  const millimetersFromInches =
    inchValue === null
      ? '--'
      : `${formatNumber(inchValue * MILLIMETERS_PER_INCH)} mm`;
  const inchesFromMillimeters =
    millimeterValue === null
      ? '--'
      : `${formatNumber(millimeterValue / MILLIMETERS_PER_INCH, 4)} pol`;
  const nearestFraction =
    millimeterValue === null
      ? '--'
      : formatNearestFraction(millimeterValue / MILLIMETERS_PER_INCH);

  return (
    <View style={styles.converterCard}>
      <View style={styles.converterHeader}>
        <View style={styles.converterHeaderCopy}>
          <Text style={styles.converterLabel}>Comparador</Text>
          <Text style={styles.converterTitle}>
            Conversor polegadas x milimetros
          </Text>
          <Text style={styles.converterText}>
            Digite em qualquer campo para identificar a medida da peca.
          </Text>
        </View>

        <View style={styles.converterFormulaBadge}>
          <Text style={styles.converterFormulaText}>1 pol = 25,4 mm</Text>
        </View>
      </View>

      <View style={styles.converterInputGrid}>
        <View
          style={[
            styles.converterField,
            activeInput === 'inch' && styles.converterFieldActive,
          ]}
        >
          <Text style={styles.converterFieldLabel}>Polegadas</Text>
          <TextInput
            value={inchInput}
            onChangeText={onInchChange}
            placeholder="Ex: 1 1/2"
            placeholderTextColor={COLORS.muted}
            keyboardType="default"
            style={styles.converterInput}
          />
          <Text style={styles.converterHint}>Aceita fracao: 1/2, 3/4, 2</Text>
        </View>

        <View
          style={[
            styles.converterField,
            activeInput === 'millimeter' && styles.converterFieldActive,
          ]}
        >
          <Text style={styles.converterFieldLabel}>Milimetros</Text>
          <TextInput
            value={millimeterInput}
            onChangeText={onMillimeterChange}
            placeholder="Ex: 50,8"
            placeholderTextColor={COLORS.muted}
            keyboardType="decimal-pad"
            style={styles.converterInput}
          />
          <Text style={styles.converterHint}>Use virgula ou ponto decimal</Text>
        </View>
      </View>

      <View style={styles.converterResultGrid}>
        <View style={styles.converterResultCard}>
          <Text style={styles.converterResultLabel}>Em milimetros</Text>
          <Text style={styles.converterResultValue}>{millimetersFromInches}</Text>
        </View>

        <View style={styles.converterResultCard}>
          <Text style={styles.converterResultLabel}>Em polegadas</Text>
          <Text style={styles.converterResultValue}>{inchesFromMillimeters}</Text>
          <Text style={styles.converterResultHint}>
            Fracao aprox.: {nearestFraction}
          </Text>
        </View>
      </View>

      <Text style={styles.quickSizeLabel}>Atalhos comuns</Text>
      <View style={styles.quickSizeRow}>
        {QUICK_INCH_SIZES.map((size) => (
          <Pressable
            key={size}
            style={styles.quickSizeButton}
            onPress={() => onQuickSize(size)}
          >
            <Text style={styles.quickSizeText}>{size}"</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.matchPanel}>
        <View style={styles.matchPanelHeader}>
          <View>
            <Text style={styles.matchPanelLabel}>Pecas nesse tamanho</Text>
            <Text style={styles.matchPanelText}>
              {target
                ? `${formatNumber(target.inches, 4)} pol / ${formatNumber(
                    target.millimeters,
                  )} mm`
                : 'Informe uma medida valida'}
            </Text>
          </View>

          <Text style={styles.matchCount}>{matches.length}</Text>
        </View>

        {matches.length ? (
          <View style={styles.matchList}>
            {matches.map((item) => (
              <Pressable
                key={item.id}
                style={styles.matchItem}
                onPress={() => onSelectMatch(item)}
              >
                <View style={styles.matchItemCopy}>
                  <Text style={styles.matchItemTitle}>{item.tipo}</Text>
                  <Text style={styles.matchItemMeta}>
                    {formatCode(item)} - {item.classe} - {item.standard}
                  </Text>
                </View>
                <Text style={styles.matchItemAction}>Selecionar</Text>
              </Pressable>
            ))}
          </View>
        ) : (
          <Text style={styles.matchEmpty}>
            Nenhuma peca cadastrada nesse tamanho ainda. A conversao continua
            valida para consulta.
          </Text>
        )}
      </View>
    </View>
  );
}

function PhotoReadingChat({
  imageUri,
  fileName,
  loading,
  messages,
  userNote,
  onClose,
  onPickPhoto,
  onSendPhoto,
  onUserNoteChange,
}: {
  imageUri: string | null;
  fileName: string;
  loading: boolean;
  messages: PhotoChatMessage[];
  userNote: string;
  onClose: () => void;
  onPickPhoto: () => void;
  onSendPhoto: () => void;
  onUserNoteChange: (value: string) => void;
}) {
  return (
    <View style={styles.photoChatCard}>
      <View style={styles.photoChatHeader}>
        <View style={styles.photoChatHeaderCopy}>
          <Text style={styles.photoChatLabel}>Leitura por foto</Text>
          <Text style={styles.photoChatTitle}>Analisando foto com IA</Text>
          <Text style={styles.photoChatText}>
            Envie uma foto, detalhe qualquer gravacao visivel e receba a
            identificacao tecnica com nivel de confianca.
          </Text>
        </View>

        <Pressable style={styles.photoChatClose} onPress={onClose}>
          <X color={COLORS.white} size={18} />
        </Pressable>
      </View>

      <View style={styles.photoUploadArea}>
        <Pressable style={styles.photoPickButton} onPress={onPickPhoto}>
          <ImageIcon color={COLORS.redDeep} size={24} />
          <Text style={styles.photoPickTitle}>
            {imageUri ? 'Trocar foto' : 'Enviar foto da peca'}
          </Text>
          <Text style={styles.photoPickText}>
            No smartphone, o navegador pode abrir camera ou galeria.
          </Text>
        </Pressable>

        <View style={styles.photoPreview}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={styles.photoPreviewImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.photoPreviewEmpty}>
              <ImageIcon color={COLORS.muted} size={30} />
              <Text style={styles.photoPreviewEmptyText}>Aguardando foto</Text>
            </View>
          )}
        </View>
      </View>

      {fileName ? <Text style={styles.photoFileName}>{fileName}</Text> : null}

      <View style={styles.photoNoteBox}>
        <Text style={styles.photoNoteLabel}>Observacao opcional</Text>
        <TextInput
          value={userNote}
          onChangeText={onUserNoteChange}
          placeholder="Ex: tem gravacao 2 polegadas, 150 lbs, RF..."
          placeholderTextColor={COLORS.muted}
          multiline
          style={styles.photoNoteInput}
        />
      </View>

      <Pressable
        style={[
          styles.photoSendButton,
          (!imageUri || loading) && styles.photoSendButtonDisabled,
        ]}
        onPress={onSendPhoto}
        disabled={!imageUri || loading}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Send color={COLORS.white} size={18} />
        )}
        <Text style={styles.photoSendText}>
          {loading ? 'Analisando foto com IA...' : 'Analisar foto'}
        </Text>
      </Pressable>

      <View style={styles.photoMessages}>
        {messages.length ? (
          messages.map((message) => (
            <PhotoMessageBubble key={message.id} message={message} />
          ))
        ) : (
          <Text style={styles.photoEmptyChat}>
            Envie a primeira foto para comecar a identificacao.
          </Text>
        )}
      </View>
    </View>
  );
}

function PhotoMessageBubble({ message }: { message: PhotoChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <View
      style={[
        styles.photoBubble,
        isUser ? styles.photoBubbleUser : styles.photoBubbleAssistant,
      ]}
    >
      <Text style={styles.photoBubbleRole}>
        {isUser ? 'Voce' : 'Analisando foto com IA'}
      </Text>

      <Text style={styles.photoBubbleText}>{message.text}</Text>

      {message.result ? <PhotoAnalysisCard result={message.result} /> : null}
    </View>
  );
}

function PhotoAnalysisCard({ result }: { result: PhotoAnalysisResult }) {
  return (
    <View style={styles.analysisCard}>
      <Text style={styles.analysisTitle}>Identificacao principal</Text>

      <View style={styles.analysisGrid}>
        <AnalysisItem label="Peca" value={result.tipo_peca} />
        <AnalysisItem label="Flange" value={result.tipo_flange} />
        <AnalysisItem label="Nome tecnico" value={result.nome_tecnico} />
        <AnalysisItem label="Norma" value={result.norma_provavel} />
        <AnalysisItem label="Classe" value={result.classe_provavel} />
        <AnalysisItem label="Material" value={result.material_provavel} />
        <AnalysisItem label="Face" value={result.face} />
        <AnalysisItem label="Confianca" value={`${result.confianca}%`} />
      </View>

      <AnalysisList
        title="Caracteristicas observadas"
        items={result.caracteristicas}
      />
      <AnalysisList title="Possiveis alternativas" items={result.alternativas} />
      <AnalysisList title="Nao confirmado" items={result.nao_confirmado} />
      <AnalysisList title="Para confirmar" items={result.recomendacoes} />
    </View>
  );
}

function AnalysisItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.analysisItem}>
      <Text style={styles.analysisItemLabel}>{label}</Text>
      <Text style={styles.analysisItemValue}>{value || '-'}</Text>
    </View>
  );
}

function AnalysisList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <View style={styles.analysisSection}>
      <Text style={styles.analysisSectionTitle}>{title}</Text>
      {items.map((item, index) => (
        <Text key={`${title}-${index}`} style={styles.analysisListItem}>
          - {item}
        </Text>
      ))}
    </View>
  );
}

function renderCategoryIcon(category: CatalogCategory) {
  const iconColor = COLORS.red;
  const size = 24;

  switch (category) {
    case 'Valvulas':
      return <Gauge color={iconColor} size={size} />;
    case 'Flanges':
      return <Disc3 color={iconColor} size={size} />;
    case 'Conexoes':
      return <Wrench color={iconColor} size={size} />;
    case 'Filtros':
      return <Filter color={iconColor} size={size} />;
    case 'Purgadores':
      return <Droplets color={iconColor} size={size} />;
    case 'Vedacoes':
      return <Nut color={iconColor} size={size} />;
    case 'Instrumentos':
      return <CircleGauge color={iconColor} size={size} />;
    case 'Acessorios':
      return <Cog color={iconColor} size={size} />;
  }
}

function HeroCatalogShortcut({
  category,
  compact,
  onPress,
}: {
  category: CatalogCategory;
  compact: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={[
        styles.heroCatalogShortcut,
        { flexBasis: compact ? '47%' : '23%' },
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Abrir catalogo de ${category}`}
    >
      <View style={styles.heroCatalogIcon}>
        {renderCategoryIcon(category)}
      </View>
      <View style={styles.heroCatalogCopy}>
        <Text style={styles.heroCatalogTitle}>{category}</Text>
      </View>
    </Pressable>
  );
}

function CategoryTile({
  category,
  onPress,
}: {
  category: CatalogCategory;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.categoryTile} onPress={onPress}>
      <View style={styles.categoryTileIcon}>
        {renderCategoryIcon(category)}
      </View>
      <View style={styles.categoryTileCopy}>
        <Text style={styles.categoryTileTitle}>{category}</Text>
      </View>
      <ChevronRight color={COLORS.redDeep} size={18} />
    </Pressable>
  );
}

function getCatalogStatusLabel(status: CatalogItem['status']) {
  switch (status) {
    case 'alta-press':
      return 'Alta Press';
    case 'authorized-ready':
      return 'Pronto para autorizados';
    case 'catalog-placeholder':
      return 'Ficha preparada';
  }
}

const WINDOWS_1252_BYTES: Record<number, number> = {
  0x20ac: 0x80,
  0x201a: 0x82,
  0x0192: 0x83,
  0x201e: 0x84,
  0x2026: 0x85,
  0x2020: 0x86,
  0x2021: 0x87,
  0x02c6: 0x88,
  0x2030: 0x89,
  0x0160: 0x8a,
  0x2039: 0x8b,
  0x0152: 0x8c,
  0x017d: 0x8e,
  0x2018: 0x91,
  0x2019: 0x92,
  0x201c: 0x93,
  0x201d: 0x94,
  0x2022: 0x95,
  0x2013: 0x96,
  0x2014: 0x97,
  0x02dc: 0x98,
  0x2122: 0x99,
  0x0161: 0x9a,
  0x203a: 0x9b,
  0x0153: 0x9c,
  0x017e: 0x9e,
  0x0178: 0x9f,
};

function decodeCatalogMojibake(value: string) {
  if (!/[ÃÂâ]/.test(value)) {
    return value;
  }

  const bytes = Array.from(value, (char) => {
    const code = char.charCodeAt(0);
    return code <= 0xff ? code : WINDOWS_1252_BYTES[code];
  });

  if (bytes.some((byte) => byte === undefined)) {
    return value;
  }

  try {
    return decodeURIComponent(
      bytes
        .map((byte) => `%${byte.toString(16).padStart(2, '0')}`)
        .join(''),
    );
  } catch {
    return value;
  }
}

function decodeCatalogEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&reg;/gi, '®')
    .replace(/&ordm;/gi, '°')
    .replace(/&deg;/gi, '°')
    .replace(/&Oslash;/gi, 'Ø');
}

function capitalizeSentenceStarts(value: string) {
  return value.replace(
    /(^|[.!?]\s+)([a-záàâãéêíóôõúç])/giu,
    (_, prefix: string, letter: string) =>
      `${prefix}${letter.toLocaleUpperCase('pt-BR')}`,
  );
}

function formatCatalogText(value: string) {
  let text = decodeCatalogEntities(decodeCatalogMojibake(value));

  text = text
    .replace(/\s*;\s*/g, ', ')
    .replace(/,{2,}/g, ',')
    .replace(/\s+,/g, ',')
    .replace(/,\s*/g, ', ')
    .replace(/\b(\d+)\.,\s*/g, '$1. ')
    .replace(/,\s*\./g, '.')
    .replace(/\s+\./g, '.')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\(\s*BSP,\s*\/\s*NPT,?\s*\)/gi, '(BSP/NPT)')
    .replace(/\bANSI,\s*B\s*(\d+(?:\.\d+)?)/gi, 'ANSI B$1')
    .replace(/\bANSI\s+B\s+(\d+(?:\.\d+)?)/gi, 'ANSI B$1')
    .replace(/\bDIN,\s*(\d+)/gi, 'DIN $1')
    .replace(/\bNBR,\s*(\d+)/gi, 'ABNT NBR $1')
    .replace(/\bnorma\s+NBR\s+(\d+)/gi, 'norma ABNT NBR $1')
    .replace(/\bABNT\s+ABNT\s+NBR\b/gi, 'ABNT NBR')
    .replace(/\bABNT\s*2\b/gi, 'ABNT NBR')
    .replace(/\bconforme norma\b/gi, 'Conforme as normas')
    .replace(/\bconforme ANSI\b/gi, 'Conforme as normas ANSI')
    .replace(/\bflanges padrão\b/gi, 'Flanges padrão')
    .replace(/\bflange padrão\b/gi, 'Flange padrão')
    .replace(/\bcorpo em aço/gi, 'Corpo em aço')
    .replace(/\bCaracteristicas\b/g, 'Características')
    .replace(/\bEspecificacoes tecnicas\b/gi, 'Especificações técnicas')
    .replace(/\bPaginas tecnicas\b/gi, 'Páginas técnicas')
    .replace(/\bReferencia\b/g, 'Referência')
    .replace(/\bFamilia\b/g, 'Família')
    .replace(/\bValidacao tecnica\b/gi, 'Validação técnica')
    .replace(/\bDesenhos tecnicos\b/gi, 'Desenhos técnicos')
    .replace(/(^|[-•]\s+)([a-záàâãéêíóôõúç])/giu, (_, prefix: string, letter: string) =>
      `${prefix}${letter.toLocaleUpperCase('pt-BR')}`,
    )
    .replace(/\s{2,}/g, ' ')
    .trim();

  return capitalizeSentenceStarts(text);
}

function getCatalogImageSource(item: CatalogItem) {
  const imageKey = CATALOG_PRODUCT_IMAGES[item.id];

  return imageKey ? CATALOG_IMAGE_ASSETS[imageKey] : undefined;
}

function getCatalogDrawingSources(item: CatalogItem) {
  const drawingKeys = CATALOG_PRODUCT_DRAWINGS[item.id] ?? [];
  const drawings = [];

  for (const key of drawingKeys) {
    const source = CATALOG_DRAWING_ASSETS[key];
    if (source) {
      drawings.push({ key, source });
    }
  }

  return drawings;
}

function CatalogAssetImage({
  source,
  style,
  resizeMode = 'contain',
  accessibilityLabel,
}: {
  source: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
  resizeMode?: ImageProps['resizeMode'];
  accessibilityLabel?: string;
}) {
  const resolvedSource =
    Platform.OS === 'web' && typeof Image.resolveAssetSource === 'function'
      ? Image.resolveAssetSource(source)
      : null;
  const safeSource =
    Platform.OS === 'web' && resolvedSource?.uri
      ? { uri: resolvedSource.uri }
      : source;

  return (
    <Image
      accessibilityLabel={accessibilityLabel}
      source={safeSource}
      style={style}
      resizeMode={resizeMode}
    />
  );
}

function CatalogCard({
  item,
  onPress,
}: {
  item: CatalogItem;
  onPress: () => void;
}) {
  const catalogImage = getCatalogImageSource(item);

  return (
    <Pressable
      style={styles.catalogCard}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Abrir ficha técnica de ${item.title}`}
    >
      <View style={styles.catalogImageSlot}>
        {catalogImage ? (
          <CatalogAssetImage
            accessibilityLabel={`Imagem de ${item.title}`}
            source={catalogImage}
            style={styles.catalogCardImage}
            resizeMode="contain"
          />
        ) : (
          <ImageIcon color={COLORS.redDeep} size={28} />
        )}
      </View>

      <Text style={styles.catalogTitle}>{item.title}</Text>
    </Pressable>
  );
}

function getCatalogDisplaySpecs(item: CatalogItem) {
  const pagesSpec = item.specs.find(
    (spec) => spec.label.toLowerCase() === 'paginas tecnicas',
  );

  if (pagesSpec) {
    return [pagesSpec];
  }

  if (item.sourcePages?.length) {
    return [{ label: 'Paginas tecnicas', value: String(item.sourcePages.length) }];
  }

  return [{ label: 'Paginas tecnicas', value: 'Em breve' }];
}

function CatalogQuickView({
  item,
  onClose,
  onOrder,
}: {
  item: CatalogItem;
  onClose: () => void;
  onOrder: () => void;
}) {
  return (
    <View style={styles.catalogQuickLayer}>
      <Pressable style={styles.catalogQuickBackdrop} onPress={onClose} />

      <View style={styles.catalogQuickPanel}>
        <View style={styles.catalogQuickHeader}>
          <View style={styles.catalogQuickHeaderCopy}>
            <Text style={styles.catalogQuickEyebrow}>Visualizacao rapida</Text>
            <Text style={styles.catalogQuickTitle}>{item.title}</Text>
            <Text style={styles.catalogQuickSubtitle}>
              Foto, desenhos técnicos e especificações em tela cheia.
            </Text>
          </View>

          <Pressable
            style={styles.catalogQuickClose}
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Fechar ficha técnica"
          >
            <X color={COLORS.white} size={22} />
          </Pressable>
        </View>

        <ScrollView
          style={styles.catalogQuickScroll}
          contentContainerStyle={styles.catalogQuickContent}
          showsVerticalScrollIndicator
        >
          <CatalogDetailView item={item} onOrder={onOrder} />
        </ScrollView>
      </View>
    </View>
  );
}

function CatalogDetailView({
  item,
  onOrder,
}: {
  item: CatalogItem;
  onOrder: () => void;
}) {
  const fallbackSections = [
    {
      title: 'Caracteristicas',
      rows: item.tags.slice(0, 7).map((tag, index) => ({
        label: index === 0 ? 'Familia' : `Referencia ${index}`,
        value: tag,
      })),
    },
    {
      title: 'Especificacoes tecnicas',
      rows: [
        { label: 'Categoria', value: item.category },
        { label: 'Status', value: getCatalogStatusLabel(item.status) },
        ...item.specs,
      ],
    },
  ];
  const technicalSections = item.technicalSections?.length
    ? item.technicalSections
    : fallbackSections;
  const catalogImage = getCatalogImageSource(item);
  const catalogDrawings = getCatalogDrawingSources(item);

  return (
    <View style={styles.catalogDetailCard}>
      <View style={styles.catalogDetailHero}>
        <Text style={styles.catalogDetailCategory}>{item.category}</Text>
        <Text style={styles.catalogDetailTitle}>{item.title}</Text>
        <Text style={styles.catalogDetailSummary}>
          {formatCatalogText(item.summary)}
        </Text>
      </View>

      <View style={styles.catalogDetailImagePanel}>
        {catalogImage ? (
          <CatalogAssetImage
            accessibilityLabel={`Imagem técnica de ${item.title}`}
            source={catalogImage}
            style={styles.catalogDetailProductImage}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.catalogDetailImagePlaceholder}>
            <ImageIcon color={COLORS.redDeep} size={42} />
            <Text style={styles.catalogDetailImageTitle}>
              Foto do produto em breve
            </Text>
            <Text style={styles.catalogDetailImageText}>
              Espaço reservado para imagem própria da ALTA PRESS, desenho técnico,
              corte ou vista do produto.
            </Text>
          </View>
        )}
      </View>

      {catalogDrawings.length ? (
        <View style={styles.catalogDrawingsSheet}>
          <View style={styles.catalogDrawingsHeader}>
            <View>
              <Text style={styles.catalogDrawingsTitle}>Desenhos técnicos</Text>
            </View>
            <Text style={styles.catalogDrawingsCount}>
              {catalogDrawings.length} imagens
            </Text>
          </View>

          <View style={styles.catalogDrawingsList}>
            {catalogDrawings.map((drawing, index) => (
              <View key={`${item.id}-${drawing.key}`} style={styles.catalogDrawingCard}>
                <CatalogAssetImage
                  accessibilityLabel={`Desenho técnico ${index + 1} de ${item.title}`}
                  source={drawing.source}
                  style={styles.catalogDrawingImage}
                  resizeMode="contain"
                />
                <Text style={styles.catalogDrawingCaption}>
                  Desenho técnico {index + 1}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : null}

      {technicalSections.map((section) => (
        <View key={`${item.id}-${section.title}`} style={styles.catalogTechnicalSheet}>
          <Text style={styles.catalogSheetTitle}>{formatCatalogText(section.title)}</Text>
          <View style={styles.catalogSheetRows}>
            {section.rows.map((row, index) => (
              <CatalogDetailRow
                key={`${item.id}-${section.title}-${row.label}-${index}`}
                label={row.label}
                value={row.value}
              />
            ))}
          </View>
        </View>
      ))}

      <Pressable
        style={styles.catalogDetailOrderButton}
        onPress={onOrder}
        accessibilityRole="button"
        accessibilityLabel={`Pedir produto ${item.title}`}
      >
        <Send color={COLORS.white} size={18} />
        <View style={styles.catalogDetailOrderCopy}>
          <Text style={styles.catalogDetailOrderTitle}>Pedir produto</Text>
          <Text style={styles.catalogDetailOrderText}>
            Enviar consulta desse item pelo WhatsApp.
          </Text>
        </View>
        <ChevronRight color={COLORS.white} size={18} />
      </Pressable>

      <View style={styles.catalogDetailNote}>
        <Text style={styles.catalogDetailNoteTitle}>Validação técnica</Text>
        <Text style={styles.catalogDetailNoteText}>
          Confirme medidas, classe, material e norma em ficha oficial antes de
          aplicar em linha pressurizada.
        </Text>
      </View>
    </View>
  );
}

function CatalogDetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.catalogDetailRow}>
      <Text style={styles.catalogDetailRowLabel}>{formatCatalogText(label)}</Text>
      <Text style={styles.catalogDetailRowValue}>{formatCatalogText(value)}</Text>
    </View>
  );
}

function DetailsCard({ item }: { item: Flange }) {
  return (
    <View style={styles.detailsCard}>
      <View style={styles.detailsTop}>
        <View style={styles.detailsCopy}>
          <Text style={styles.detailsLabel}>Item selecionado</Text>
          <Text style={styles.detailsTitle}>{item.tipo}</Text>
          <Text style={styles.detailsSub}>{formatCode(item)}</Text>
        </View>

        <View style={styles.detailsBadge}>
          <Text style={styles.detailsBadgeText}>{item.classe}</Text>
        </View>
      </View>

      <View style={styles.previewCard}>
        <Text style={styles.previewTitle}>Area reservada para desenho tecnico</Text>
        <Text style={styles.previewText}>
          Substitua este bloco por PNG, SVG ou vista tecnica autorizada pela
          ALTA PRESS.
        </Text>
      </View>

      <View style={styles.grid}>
        <Measure label="Norma" value={item.standard} />
        <Measure label="DN / NPS" value={formatCode(item)} />
        <Measure
          label="Diametro externo"
          value={`${item.diametroExternoMm} mm`}
        />
        <Measure
          label="Furo central"
          value={item.furoCentralMm ? `${item.furoCentralMm} mm` : '-'}
        />
        <Measure
          label="Circulo dos furos"
          value={`${item.circuloFurosMm} mm`}
        />
        <Measure
          label="Furacao"
          value={`${item.qtdFuros} x ${item.diametroFuroMm} mm`}
        />
        <Measure label="Parafuso" value={item.parafuso} />
        <Measure label="Face" value={item.face ?? '-'} />
      </View>

      {item.observacao ? <Text style={styles.note}>{item.observacao}</Text> : null}
    </View>
  );
}

function Measure({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.measure}>
      <Text style={styles.measureLabel}>{label}</Text>
      <Text style={styles.measureValue}>{value}</Text>
    </View>
  );
}

function ResultMeasure({
  label,
  value,
  wide,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <View style={[styles.resultMeasure, wide && styles.resultMeasureWide]}>
      <Text style={styles.resultMeasureLabel}>{label}</Text>
      <Text style={styles.resultMeasureValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  list: {
    flex: 1,
    backgroundColor: COLORS.silverSoft,
  },
  listContent: {
    paddingBottom: 40,
  },
  heroShell: {
    backgroundColor: COLORS.bg,
    paddingTop: 14,
    paddingBottom: 94,
    overflow: 'hidden',
  },
  heroInner: {
    paddingHorizontal: 18,
  },
  heroGlow: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: COLORS.redGlow,
  },
  heroGlowRight: {
    width: 320,
    height: 320,
    top: 88,
    right: -130,
  },
  heroGlowLeft: {
    width: 240,
    height: 240,
    top: 270,
    left: -120,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.borderOnDark,
    backgroundColor: 'rgba(18,20,24,0.84)',
    borderRadius: 24,
    marginBottom: 14,
  },
  menuButton: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCta: {
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.red,
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  headerCtaText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  heroCard: {
    borderRadius: 28,
    backgroundColor: COLORS.inkSoft,
    borderWidth: 1,
    borderColor: COLORS.borderOnDark,
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  heroLogoPanel: {
    width: '100%',
    height: 224,
    borderRadius: 10,
    backgroundColor: 'transparent',
    marginBottom: 12,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  heroLogoImage: {
    width: '112%',
    height: '112%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  eyebrow: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: COLORS.textOnDark,
    fontSize: 31,
    lineHeight: 35,
    fontWeight: '900',
    textAlign: 'center',
  },
  heroText: {
    color: COLORS.mutedOnDark,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 14,
    textAlign: 'center',
  },
  heroCatalogGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 22,
    justifyContent: 'center',
  },
  heroCatalogShortcut: {
    minWidth: 128,
    minHeight: 58,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.34)',
  },
  heroCatalogIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(215,25,32,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCatalogCopy: {
    flex: 1,
    minWidth: 0,
  },
  heroCatalogTitle: {
    color: COLORS.textOnDark,
    fontSize: 14,
    fontWeight: '900',
  },
  sectionBlock: {
    paddingHorizontal: 18,
    marginTop: 26,
  },
  sectionHeading: {
    marginBottom: 16,
    gap: 6,
    alignItems: 'center',
  },
  sectionHeadingTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  sectionTitle: {
    color: COLORS.textDark,
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '900',
    textAlign: 'center',
  },
  sectionText: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  toolsGrid: {
    gap: 14,
  },
  toolCard: {
    borderRadius: 28,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 22,
    alignItems: 'center',
    shadowColor: COLORS.bg,
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  toolIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: 'rgba(215,25,32,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  toolTitle: {
    color: COLORS.textDark,
    fontWeight: '900',
    fontSize: 18,
    textAlign: 'center',
  },
  toolText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
    textAlign: 'center',
  },
  toolScreen: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 36,
    gap: 16,
  },
  toolScreenHeader: {
    borderRadius: 30,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    padding: 16,
    gap: 16,
  },
  toolBackButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  toolBackText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '900',
  },
  toolScreenTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  toolScreenIcon: {
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: 'rgba(215,25,32,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolScreenCopy: {
    flex: 1,
    gap: 5,
  },
  toolScreenLabel: {
    color: COLORS.red,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  toolScreenTitle: {
    color: COLORS.textDark,
    fontSize: 26,
    lineHeight: 29,
    fontWeight: '900',
  },
  toolScreenText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  converterCard: {
    borderRadius: 30,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    padding: 18,
    gap: 16,
  },
  converterHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  converterHeaderCopy: {
    flex: 1,
    minWidth: 220,
    gap: 6,
  },
  converterLabel: {
    color: COLORS.red,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
  },
  converterTitle: {
    color: COLORS.textDark,
    fontSize: 22,
    lineHeight: 25,
    fontWeight: '900',
  },
  converterText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  converterFormulaBadge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: 'rgba(215,25,32,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.32)',
  },
  converterFormulaText: {
    color: COLORS.textDark,
    fontSize: 12,
    fontWeight: '900',
  },
  converterInputGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  converterField: {
    flex: 1,
    minWidth: 190,
    borderRadius: 22,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
  },
  converterFieldActive: {
    borderColor: COLORS.red,
    backgroundColor: '#191d23',
  },
  converterFieldLabel: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  converterInput: {
    color: COLORS.textDark,
    fontSize: 24,
    fontWeight: '900',
    paddingVertical: 8,
  },
  converterHint: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 16,
  },
  converterResultGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  converterResultCard: {
    flex: 1,
    minWidth: 160,
    borderRadius: 22,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
  },
  converterResultLabel: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  converterResultValue: {
    color: COLORS.textDark,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 6,
  },
  converterResultHint: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 4,
  },
  quickSizeLabel: {
    color: COLORS.textDark,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  quickSizeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  quickSizeButton: {
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  quickSizeText: {
    color: COLORS.textDark,
    fontSize: 12,
    fontWeight: '900',
  },
  matchPanel: {
    borderRadius: 24,
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
    gap: 12,
  },
  matchPanelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  matchPanelLabel: {
    color: COLORS.red,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  matchPanelText: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 4,
  },
  matchCount: {
    minWidth: 36,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    overflow: 'hidden',
    backgroundColor: COLORS.red,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },
  matchList: {
    gap: 8,
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderRadius: 18,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 12,
  },
  matchItemCopy: {
    flex: 1,
    gap: 4,
  },
  matchItemTitle: {
    color: COLORS.textDark,
    fontSize: 14,
    fontWeight: '900',
  },
  matchItemMeta: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 16,
  },
  matchItemAction: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  matchEmpty: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  photoChatCard: {
    marginTop: 16,
    borderRadius: 30,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    padding: 18,
    gap: 16,
  },
  photoChatHeader: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  photoChatHeaderCopy: {
    flex: 1,
    gap: 6,
  },
  photoChatLabel: {
    color: COLORS.red,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
  },
  photoChatTitle: {
    color: COLORS.textDark,
    fontSize: 22,
    lineHeight: 25,
    fontWeight: '900',
  },
  photoChatText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  photoChatClose: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoUploadArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  photoPickButton: {
    flex: 1,
    minWidth: 190,
    minHeight: 164,
    borderRadius: 24,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.32)',
    borderStyle: 'dashed',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  photoPickTitle: {
    color: COLORS.textDark,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  photoPickText: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
  },
  photoPreview: {
    flex: 1,
    minWidth: 190,
    height: 164,
    borderRadius: 24,
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    overflow: 'hidden',
  },
  photoPreviewImage: {
    width: '100%',
    height: '100%',
  },
  photoPreviewEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  photoPreviewEmptyText: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '800',
  },
  photoFileName: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: -4,
  },
  photoNoteBox: {
    borderRadius: 22,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
    gap: 8,
  },
  photoNoteLabel: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  photoNoteInput: {
    minHeight: 70,
    color: COLORS.textDark,
    fontSize: 14,
    lineHeight: 20,
    textAlignVertical: 'top',
  },
  photoSendButton: {
    minHeight: 54,
    borderRadius: 999,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
  },
  photoSendButtonDisabled: {
    opacity: 0.48,
  },
  photoSendText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '900',
  },
  photoMessages: {
    gap: 12,
  },
  photoEmptyChat: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    paddingVertical: 12,
  },
  photoBubble: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  photoBubbleUser: {
    backgroundColor: COLORS.silverSoft,
    borderColor: COLORS.borderSoft,
  },
  photoBubbleAssistant: {
    backgroundColor: COLORS.bg,
    borderColor: 'rgba(215,25,32,0.28)',
  },
  photoBubbleRole: {
    color: COLORS.red,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  photoBubbleText: {
    color: COLORS.textDark,
    fontSize: 14,
    lineHeight: 20,
  },
  analysisCard: {
    borderRadius: 20,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
    gap: 12,
  },
  analysisTitle: {
    color: COLORS.textDark,
    fontSize: 16,
    fontWeight: '900',
  },
  analysisGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  analysisItem: {
    flexGrow: 1,
    minWidth: '45%',
    borderRadius: 16,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 10,
  },
  analysisItemLabel: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  analysisItemValue: {
    color: COLORS.textDark,
    fontSize: 13,
    fontWeight: '900',
    marginTop: 4,
  },
  analysisSection: {
    gap: 6,
  },
  analysisSectionTitle: {
    color: COLORS.redDeep,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  analysisListItem: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  drawerLayer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 50,
    elevation: 50,
  },
  drawerScrimButton: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  drawerScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.bg,
  },
  drawerPanel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: COLORS.ink,
    borderRightWidth: 1,
    borderRightColor: COLORS.borderStrong,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    shadowColor: COLORS.bg,
    shadowOpacity: 0.22,
    shadowRadius: 22,
    shadowOffset: { width: 10, height: 0 },
    zIndex: 2,
    elevation: 16,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 14,
  },
  drawerEyebrow: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  drawerTitle: {
    color: COLORS.textDark,
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 32,
  },
  drawerCloseButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.silverSoft,
    borderRadius: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    marginBottom: 14,
  },
  drawerInput: {
    flex: 1,
    height: 48,
    color: COLORS.textDark,
    fontSize: 14,
  },
  drawerBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 10,
  },
  drawerBackText: {
    color: COLORS.redDeep,
    fontSize: 13,
    fontWeight: '900',
  },
  drawerScroll: {
    flex: 1,
  },
  drawerScrollContent: {
    flexGrow: 1,
    paddingBottom: 14,
  },
  categoryMenuGrid: {
    flexGrow: 1,
    justifyContent: 'space-between',
    gap: 10,
  },
  categoryTile: {
    width: '100%',
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  categoryTileIcon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: 'rgba(215,25,32,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTileCopy: {
    flex: 1,
    minWidth: 0,
  },
  categoryTileTitle: {
    color: COLORS.redDeep,
    fontSize: 15,
    fontWeight: '900',
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#13a047',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  whatsappIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whatsappCopy: {
    flex: 1,
    minWidth: 0,
  },
  whatsappTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '900',
  },
  whatsappText: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 3,
  },
  drawerGroup: {
    marginBottom: 18,
  },
  drawerGroupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  drawerGroupTitle: {
    color: COLORS.textDark,
    fontSize: 18,
    fontWeight: '900',
  },
  drawerGroupCount: {
    minWidth: 32,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: COLORS.red,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },
  drawerEmpty: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    paddingVertical: 24,
  },
  catalogNotice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    borderRadius: 20,
    padding: 16,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    marginBottom: 14,
  },
  catalogNoticeText: {
    flex: 1,
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
  },
  catalogGrid: {
    gap: 12,
  },
  catalogCard: {
    borderRadius: 18,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 146,
  },
  catalogCardOpenArea: {
    gap: 0,
  },
  catalogCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  catalogImageSlot: {
    width: 88,
    height: 88,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 4,
  },
  catalogCardImage: {
    width: '100%',
    height: '100%',
  },
  catalogCopy: {
    flex: 1,
    minWidth: 0,
  },
  catalogCategory: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  catalogTitle: {
    color: COLORS.textDark,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '900',
    marginTop: 10,
    textAlign: 'center',
  },
  catalogSummary: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
  },
  catalogSpecGrid: {
    gap: 8,
    marginTop: 14,
  },
  catalogSpec: {
    borderRadius: 14,
    padding: 12,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
  },
  catalogSpecLabel: {
    color: COLORS.redDeep,
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  catalogSpecValue: {
    color: COLORS.textDark,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    marginTop: 4,
  },
  catalogFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    marginTop: 12,
  },
  catalogOrderButton: {
    flex: 1,
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 14,
    backgroundColor: '#13a047',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  catalogOrderText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '900',
  },
  catalogQuickLayer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    elevation: 80,
  },
  catalogQuickBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.74)',
  },
  catalogQuickPanel: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  catalogQuickHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 14,
    backgroundColor: COLORS.bg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderStrong,
  },
  catalogQuickHeaderCopy: {
    flex: 1,
    minWidth: 0,
  },
  catalogQuickEyebrow: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  catalogQuickTitle: {
    color: COLORS.textDark,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '900',
    marginTop: 4,
  },
  catalogQuickSubtitle: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
  catalogQuickClose: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catalogQuickScroll: {
    flex: 1,
  },
  catalogQuickContent: {
    padding: 16,
    paddingBottom: 34,
  },
  catalogDetailCard: {
    borderRadius: 20,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 14,
    gap: 14,
  },
  catalogDetailHero: {
    gap: 8,
  },
  catalogDetailCategory: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  catalogDetailTitle: {
    color: COLORS.textDark,
    fontSize: 23,
    lineHeight: 27,
    fontWeight: '900',
  },
  catalogDetailSummary: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
  },
  catalogDetailImagePanel: {
    minHeight: 300,
    borderRadius: 18,
    backgroundColor: COLORS.inkSoft,
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.28)',
    padding: 12,
    justifyContent: 'center',
  },
  catalogDetailProductImage: {
    width: '100%',
    height: 276,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  catalogDetailImagePlaceholder: {
    minHeight: 190,
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(215,25,32,0.36)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  catalogDetailImageTitle: {
    color: COLORS.textDark,
    fontSize: 17,
    fontWeight: '900',
    marginTop: 12,
    textAlign: 'center',
  },
  catalogDetailImageText: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
    textAlign: 'center',
  },
  catalogDrawingsSheet: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  catalogDrawingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: 'rgba(215,25,32,0.14)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  catalogDrawingsEyebrow: {
    color: COLORS.redDeep,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  catalogDrawingsTitle: {
    color: COLORS.textDark,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '900',
    marginTop: 2,
  },
  catalogDrawingsCount: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  catalogDrawingsList: {
    gap: 10,
    padding: 10,
  },
  catalogDrawingCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    backgroundColor: COLORS.inkSoft,
    padding: 8,
  },
  catalogDrawingImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  catalogDrawingCaption: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 8,
  },
  catalogTechnicalSheet: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  catalogSheetTitle: {
    color: COLORS.textDark,
    backgroundColor: 'rgba(215,25,32,0.16)',
    fontSize: 13,
    fontWeight: '900',
    paddingHorizontal: 12,
    paddingVertical: 9,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  catalogSheetRows: {
    padding: 8,
    gap: 6,
  },
  catalogDetailRow: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    backgroundColor: 'rgba(255,255,255,0.04)',
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  catalogDetailRowLabel: {
    color: '#b31820',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  catalogDetailRowValue: {
    color: COLORS.textDark,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '800',
    marginTop: 4,
  },
  catalogDetailNote: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: 'rgba(215,25,32,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.24)',
  },
  catalogDetailNoteTitle: {
    color: COLORS.redDeep,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  catalogDetailNoteText: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },
  catalogDetailOrderButton: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#13a047',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  catalogDetailOrderCopy: {
    flex: 1,
    minWidth: 0,
  },
  catalogDetailOrderTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '900',
  },
  catalogDetailOrderText: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 3,
  },
  detailsCard: {
    borderRadius: 30,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 22,
    shadowColor: COLORS.bg,
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  detailsTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  detailsCopy: {
    flex: 1,
    alignItems: 'center',
  },
  detailsLabel: {
    color: COLORS.redDeep,
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  detailsTitle: {
    color: COLORS.textDark,
    fontSize: 25,
    lineHeight: 27,
    fontWeight: '900',
    marginTop: 6,
    textAlign: 'center',
  },
  detailsSub: {
    color: COLORS.muted,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  detailsBadge: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: COLORS.red,
  },
  detailsBadgeText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 12,
  },
  previewCard: {
    minHeight: 160,
    borderRadius: 24,
    marginTop: 18,
    marginBottom: 18,
    padding: 20,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewTitle: {
    color: COLORS.textDark,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  previewText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  measure: {
    minWidth: '47%',
    flex: 1,
    borderRadius: 18,
    padding: 14,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    alignItems: 'center',
  },
  measureLabel: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  measureValue: {
    color: COLORS.textDark,
    fontSize: 14,
    fontWeight: '900',
    marginTop: 6,
    flexShrink: 1,
    textAlign: 'center',
  },
  note: {
    marginTop: 16,
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
  },
  bannerCard: {
    borderRadius: 30,
    padding: 24,
    backgroundColor: COLORS.inkSoft,
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.42)',
    alignItems: 'center',
  },
  bannerEyebrow: {
    color: COLORS.silver,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  bannerTitle: {
    color: COLORS.white,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '900',
    marginTop: 10,
    textAlign: 'center',
  },
  bannerText: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    textAlign: 'center',
  },
  resultCard: {
    marginHorizontal: 18,
    marginBottom: 14,
    borderRadius: 28,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 20,
    shadowColor: COLORS.bg,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  resultCardActive: {
    borderColor: 'rgba(215,25,32,0.42)',
    shadowOpacity: 0.1,
  },
  resultTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  resultCopy: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
  },
  resultTitle: {
    color: COLORS.textDark,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '900',
    flexShrink: 1,
    textAlign: 'center',
  },
  resultSub: {
    color: COLORS.redDeep,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },
  resultMeta: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
  },
  resultBadge: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: COLORS.red,
  },
  resultBadgeText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 12,
  },
  resultSpecsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  resultMeasure: {
    width: '48%',
    borderRadius: 18,
    padding: 14,
    backgroundColor: COLORS.silverSoft,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    alignItems: 'center',
  },
  resultMeasureWide: {
    width: '100%',
  },
  resultMeasureLabel: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  resultMeasureValue: {
    color: COLORS.textDark,
    fontSize: 14,
    fontWeight: '900',
    marginTop: 6,
    flexShrink: 1,
    textAlign: 'center',
  },
  empty: {
    color: COLORS.muted,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingBottom: 24,
  },
});
