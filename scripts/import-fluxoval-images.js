const fs = require('fs');
const https = require('https');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const ASSET_DIR = path.join(PROJECT_ROOT, 'assets', 'catalog', 'fluxoval');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'catalog-images.ts');
const MEDIA_API =
  'https://www.portal.fluxoval.com/wp-json/wp/v2/media?per_page=100&page=';

const PRODUCT_PATTERNS = [
  /acoplamento/i,
  /adaptador/i,
  /atuador/i,
  /borboleta/i,
  /bucha/i,
  /conex/i,
  /cotovelo/i,
  /curva/i,
  /diafragma/i,
  /esfera/i,
  /filtro/i,
  /flange/i,
  /gaveta/i,
  /globo/i,
  /grampo/i,
  /grooved/i,
  /junta/i,
  /luva/i,
  /manometro/i,
  /mangote/i,
  /niple/i,
  /purgador/i,
  /reducao/i,
  /retencao/i,
  /solenoide/i,
  /te-/i,
  /\bte\b/i,
  /termometro/i,
  /tubos?/i,
  /uniao/i,
  /valvula/i,
  /ved/i,
];

const IGNORE_PATTERNS = [
  /atendimento/i,
  /banner/i,
  /caminhao/i,
  /catalogo/i,
  /contato/i,
  /download/i,
  /face/i,
  /fundo/i,
  /insta/i,
  /linha_laranja/i,
  /linkedin/i,
  /localizacao/i,
  /logo/i,
  /loja/i,
  /missao/i,
  /pix/i,
  /qrcode/i,
  /qual/i,
  /social/i,
  /twitter/i,
  /valores/i,
  /visao/i,
  /youtube/i,
];

const HTML_ENTITY_MAP = {
  '&Aacute;': '\u00c1',
  '&Acirc;': '\u00c2',
  '&Atilde;': '\u00c3',
  '&Ccedil;': '\u00c7',
  '&Eacute;': '\u00c9',
  '&Ecirc;': '\u00ca',
  '&Iacute;': '\u00cd',
  '&Oacute;': '\u00d3',
  '&Ocirc;': '\u00d4',
  '&Otilde;': '\u00d5',
  '&Uacute;': '\u00da',
  '&aacute;': '\u00e1',
  '&acirc;': '\u00e2',
  '&amp;': '&',
  '&atilde;': '\u00e3',
  '&ccedil;': '\u00e7',
  '&eacute;': '\u00e9',
  '&ecirc;': '\u00ea',
  '&iacute;': '\u00ed',
  '&nbsp;': ' ',
  '&oacute;': '\u00f3',
  '&ocirc;': '\u00f4',
  '&otilde;': '\u00f5',
  '&uacute;': '\u00fa',
};

function fixMojibake(value) {
  return value
    .replace(/\u00c2\u00b0/g, '\u00b0')
    .replace(/\u00c3\u00a1/g, '\u00e1')
    .replace(/\u00c3\u00a2/g, '\u00e2')
    .replace(/\u00c3\u00a3/g, '\u00e3')
    .replace(/\u00c3\u00a7/g, '\u00e7')
    .replace(/\u00c3\u00a9/g, '\u00e9')
    .replace(/\u00c3\u00aa/g, '\u00ea')
    .replace(/\u00c3\u00ad/g, '\u00ed')
    .replace(/\u00c3\u00b3/g, '\u00f3')
    .replace(/\u00c3\u00b4/g, '\u00f4')
    .replace(/\u00c3\u00b5/g, '\u00f5')
    .replace(/\u00c3\u00ba/g, '\u00fa')
    .replace(/\u00e2\u20ac\u201c/g, '-')
    .replace(/\u00e2\u20ac\u2122/g, "'");
}

function decodeHtml(value) {
  const decoded = value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 10)),
    )
    .replace(/&[a-zA-Z]+;/g, (entity) => HTML_ENTITY_MAP[entity] ?? entity);

  return fixMojibake(decoded);
}

function slugify(value) {
  return decodeHtml(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode === 400 || response.statusCode === 404) {
        response.resume();
        resolve(null);
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`HTTP ${response.statusCode} em ${url}`));
        return;
      }

      let data = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => resolve(JSON.parse(data)));
    });

    request.on('timeout', () =>
      request.destroy(new Error(`Timeout em ${url}`)),
    );
    request.on('error', reject);
  });
}

function download(url, target) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(target);
    const request = https.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode !== 200) {
        file.close();
        fs.rmSync(target, { force: true });
        response.resume();
        reject(new Error(`HTTP ${response.statusCode} ao baixar ${url}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    });

    request.on('timeout', () =>
      request.destroy(new Error(`Timeout em ${url}`)),
    );
    request.on('error', (error) => {
      file.close();
      fs.rmSync(target, { force: true });
      reject(error);
    });
  });
}

async function fetchAllMedia() {
  const items = [];

  for (let page = 1; page <= 50; page += 1) {
    const data = await fetchJson(`${MEDIA_API}${page}`);
    if (!Array.isArray(data) || !data.length) {
      break;
    }

    items.push(...data);
  }

  return items;
}

function isProductMedia(media) {
  const title = decodeHtml(media.title?.rendered ?? '');
  const source = media.source_url ?? '';
  const haystack = `${title} ${source}`;

  if (!media.mime_type?.startsWith('image/')) {
    return false;
  }

  if (IGNORE_PATTERNS.some((pattern) => pattern.test(haystack))) {
    return false;
  }

  return PRODUCT_PATTERNS.some((pattern) => pattern.test(haystack));
}

function extensionFromUrl(url) {
  const ext = path.extname(new URL(url).pathname).toLowerCase();
  return ext || '.png';
}

function appFileNameFor(slug, downloadedFileName) {
  const pngOverride = `${slug}.png`;
  const pngOverridePath = path.join(ASSET_DIR, pngOverride);

  if (fs.existsSync(pngOverridePath)) {
    return pngOverride;
  }

  return downloadedFileName;
}

function findImageKeyBySlug(images, pattern) {
  const match = images.find((image) => pattern.test(image.slug));
  return match?.key;
}

function getCatalogSlugs() {
  const catalogSource = fs.readFileSync(
    path.join(PROJECT_ROOT, 'catalog.ts'),
    'utf8',
  );

  return [...catalogSource.matchAll(/'([^']+\.html)'/g)].map(
    (match) => match[1],
  );
}

function categoryFromSlug(slug) {
  if (slug.startsWith('val_')) {
    return 'valvulas';
  }

  if (slug.startsWith('filtro_')) {
    return 'filtros';
  }

  if (slug.startsWith('purg_')) {
    return 'purgadores';
  }

  if (slug.startsWith('ved_')) {
    return 'vedacoes';
  }

  if (slug.startsWith('instr_')) {
    return 'instrumentos';
  }

  if (
    slug.startsWith('aces_') ||
    slug.startsWith('prod_') ||
    slug === 'amortecedor.html' ||
    slug === 'indicador_nivel_brz.html'
  ) {
    return 'acessorios';
  }

  if (slug.startsWith('conexoes_flg') || slug.startsWith('conexoes_rsc')) {
    return 'flanges';
  }

  return 'conexoes';
}

function catalogIdFromSlug(slug) {
  return `${categoryFromSlug(slug)}-${slug
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/-$/g, '')}`;
}

function buildProductMap(images) {
  const pick = (pattern) => findImageKeyBySlug(images, pattern);
  const keys = {
    acoplamentoGrooved: pick(/acoplamento.*grooved/),
    atuador: pick(/atuador-pneumatico/),
    cotovelo45Grooved: pick(/cotovelo-45.*grooved/),
    cotovelo45Npt: pick(/cotovelo-45-npt/),
    cotoveloGrooved: pick(/cotovelo.*grooved/),
    cotoveloNpt: pick(/cotovelo-npt/),
    curvaNpt: pick(/curva-npt/),
    filtroY: pick(/filtro-y/),
    flangeCego: pick(/flange-cego/),
    flangeGrooved: pick(/flange-adaptador.*grooved/),
    flangeLiso: pick(/flange-liso/),
    flangeNpt: pick(/flange-npt/),
    flangeRoscado: pick(/flange-roscado/),
    flangeSo: pick(/flange-sobreposto|flange-so/),
    flangeSolto: pick(/flange-solto|flange-lj/),
    flangeSw: pick(/flange-de-encaixe|flange-sw/),
    flangeWn: pick(/flange-com-pescoco|flange-wn/),
    grampoU: pick(/grampo-u/),
    juntaExpansao: pick(/junta-de-expansao/),
    luvaNpt: pick(/luva-npt/),
    manometro: pick(/manometro/),
    nipleNpt: pick(/niple-npt/),
    purgador: pick(/purgador/),
    reducaoGrooved: pick(/reducao.*grooved/),
    teGrooved: pick(/te.*grooved/),
    teNpt: pick(/te-npt|tee-npt/),
    termometro: pick(/termometro/),
    tubos: pick(/tubos?/),
    uniaoNpt: pick(/uniao-npt/),
    valvulaBorboleta: pick(/valvula-borboleta/),
    valvulaEsfera: pick(/valvula-de-esfera(?!.*bipartida)(?!.*tripartida)/),
    valvulaEsferaBipartida: pick(/valvula-de-esfera-bipartida/),
    valvulaEsferaTripartida: pick(/valvula-de-esfera-tripartida/),
    valvulaGaveta: pick(/valvula-gaveta/) || pick(/valvula-gabeta/),
    valvulaGlobo: pick(/valvula-globo/),
    valvulaRetencao: pick(/valvula.*retencao/),
  };

  const map = {};
  const assign = (id, key) => {
    if (key) {
      map[id] = key;
    }
  };

  assign('valvulas-val-borboleta-html', keys.valvulaBorboleta);
  assign('valvulas-val-esfera-html', keys.valvulaEsfera || keys.valvulaEsferaTripartida);
  assign('valvulas-val-esfera-bip-html', keys.valvulaEsferaBipartida);
  assign('valvulas-val-esfera-tri-html', keys.valvulaEsferaTripartida);
  assign('valvulas-val-gaveta-html', keys.valvulaGaveta);
  assign('valvulas-val-globo-html', keys.valvulaGlobo);
  assign('valvulas-val-retencao-html', keys.valvulaRetencao);
  assign('filtros-filtro-y-html', keys.filtroY);
  assign('purgadores-purg-balde-invertido-html', keys.purgador);
  assign('purgadores-purg-boia-html', keys.purgador);
  assign('instrumentos-instr-manometro-html', keys.manometro);
  assign('instrumentos-instr-termometro-html', keys.termometro);
  assign('acessorios-prod-junta-expansao-html', keys.juntaExpansao);
  assign('acessorios-amortecedor-html', keys.atuador);
  assign('acessorios-aces-grampou-html', keys.grampoU || keys.acoplamentoGrooved);
  assign('conexoes-conexoes-tb-html', keys.tubos);
  assign('conexoes-conexoes-ap-html', keys.cotoveloNpt || keys.curvaNpt);
  assign('conexoes-conexoes-fm-html', keys.teNpt || keys.uniaoNpt);
  assign('conexoes-conexoes-colares-html', keys.flangeGrooved || keys.acoplamentoGrooved);

  const genericRules = [
    [/flg-cego/, keys.flangeCego],
    [/flg-wn|flg-orificio-wn/, keys.flangeWn],
    [/flg-so-plano/, keys.flangeLiso],
    [/flg-so|flg-orificio-so/, keys.flangeSo],
    [/flg-sw/, keys.flangeSw],
    [/flg-rsc|conexoes-rsc|flg-orificio-rsc/, keys.flangeRoscado],
    [/flg-solto/, keys.flangeSolto],
    [/flg-reducao/, keys.flangeNpt || keys.flangeSo],
    [/conexoes-ap/, keys.cotoveloNpt || keys.curvaNpt],
    [/conexoes-fm/, keys.teNpt || keys.uniaoNpt],
    [/conexoes-tb/, keys.tubos],
    [/filtro/, keys.filtroY],
    [/purg/, keys.purgador],
    [/manometro/, keys.manometro],
    [/termometro/, keys.termometro],
  ];

  for (const slug of getCatalogSlugs()) {
    const id = catalogIdFromSlug(slug);
    const normalized = id.toLowerCase();

    for (const [pattern, key] of genericRules) {
      if (pattern.test(normalized)) {
        assign(id, key);
        break;
      }
    }
  }

  return map;
}

function toTsObject(value) {
  return JSON.stringify(value, null, 2);
}

async function main() {
  fs.mkdirSync(ASSET_DIR, { recursive: true });

  const media = (await fetchAllMedia()).filter(isProductMedia);
  const images = [];
  const seenKeys = new Set();

  for (const item of media) {
    const title = decodeHtml(item.title?.rendered ?? path.basename(item.source_url));
    const sourceUrl = item.source_url;
    const slug = slugify(title || sourceUrl);
    const ext = extensionFromUrl(sourceUrl);
    const downloadedFileName = `${slug}${ext}`;
    const target = path.join(ASSET_DIR, downloadedFileName);
    const appFileName = appFileNameFor(slug, downloadedFileName);
    const appTarget = path.join(ASSET_DIR, appFileName);

    if (slug === 'tubos' && ext === '.jpg' && appFileName === downloadedFileName) {
      console.warn('Pulando tubos.jpg: o Metro nao consegue ler esse JPG. Use assets/catalog/fluxoval/tubos.png.');
      continue;
    }

    if (seenKeys.has(slug)) {
      continue;
    }

    seenKeys.add(slug);

    if (!fs.existsSync(target) && !fs.existsSync(appTarget)) {
      process.stdout.write(`Baixando ${downloadedFileName}... `);
      await download(sourceUrl, target);
      process.stdout.write('ok\n');
    }

    if (appFileName !== downloadedFileName && fs.existsSync(target)) {
      fs.rmSync(target, { force: true });
    }

    images.push({
      key: slug,
      slug,
      title,
      fileName: appFileName,
      sourceUrl,
      credit: 'Fluxoval',
    });
  }

  images.sort((a, b) => a.key.localeCompare(b.key));

  const productImages = buildProductMap(images);
  const assetEntries = images
    .map(
      (image) =>
        `  ${JSON.stringify(image.key)}: require(${JSON.stringify(
          `./assets/catalog/fluxoval/${image.fileName}`,
        )}),`,
    )
    .join('\n');
  const meta = Object.fromEntries(
    images.map((image) => [
      image.key,
      {
        title: image.title,
        sourceUrl: image.sourceUrl,
        credit: image.credit,
      },
    ]),
  );
  const output = `import type { ImageSourcePropType } from 'react-native';

export type CatalogImageMeta = {
  title: string;
  sourceUrl: string;
  credit: string;
};

export const CATALOG_IMAGE_ASSETS: Record<string, ImageSourcePropType> = {
${assetEntries}
};

export const CATALOG_IMAGE_META: Record<string, CatalogImageMeta> = ${toTsObject(meta)};

export const CATALOG_PRODUCT_IMAGES: Record<string, string> = ${toTsObject(productImages)};
`;

  fs.writeFileSync(OUTPUT_PATH, output, 'utf8');

  console.log(`\nImagens de produto: ${images.length}`);
  console.log(`Produtos associados: ${Object.keys(productImages).length}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
