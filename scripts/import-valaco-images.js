const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(PROJECT_ROOT, 'catalog.ts');
const ASSET_DIR = path.join(PROJECT_ROOT, 'assets', 'catalog', 'valaco');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'catalog-images.ts');
const DRAWINGS_OUTPUT_PATH = path.join(PROJECT_ROOT, 'catalog-drawings.ts');
const PRODUCT_ROOT = 'http://www.valaco.com.br/produtos/';

const CATEGORY_ARRAYS = [
  ['valvulas', 'Valvulas'],
  ['flanges', 'Flanges'],
  ['conexoes', 'Conexoes'],
  ['filtros', 'Filtros'],
  ['purgadores', 'Purgadores'],
  ['vedacoes', 'Vedacoes'],
  ['instrumentos', 'Instrumentos'],
  ['acessorios', 'Acessorios'],
];

const fetchCache = new Map();

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function shortHash(value) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash.toString(36).slice(0, 6);
}

function fetchBuffer(url) {
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }

  const promise = new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const request = client.get(url, { timeout: 30000 }, (response) => {
      if (
        response.statusCode &&
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        resolve(fetchBuffer(new URL(response.headers.location, url).toString()));
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`HTTP ${response.statusCode} em ${url}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
    });

    request.on('timeout', () => request.destroy(new Error(`Timeout em ${url}`)));
    request.on('error', reject);
  });

  fetchCache.set(url, promise);
  return promise;
}

async function fetchText(url) {
  const buffer = await fetchBuffer(url);
  return buffer.toString('utf8');
}

function parseCatalogItems() {
  const source = fs.readFileSync(CATALOG_PATH, 'utf8');

  return CATEGORY_ARRAYS.flatMap(([arrayName, category]) => {
    const match = source.match(
      new RegExp(`const\\s+${arrayName}\\s*=\\s*\\[([\\s\\S]*?)\\];`),
    );
    if (!match) {
      return [];
    }

    return [...match[1].matchAll(/'([^']+\.html)'/g)].map((slugMatch) => {
      const slug = slugMatch[1];
      return {
        category,
        slug,
        id: `${category.toLowerCase()}-${slug
          .replace(/[^a-z0-9]+/gi, '-')
          .replace(/-$/g, '')}`,
      };
    });
  });
}

function productUrl(filename) {
  return new URL(filename, PRODUCT_ROOT).toString();
}

function extractLinkedProductPages(html, baseSlug) {
  const prefix = baseSlug.replace(/\.html$/i, '');

  return [...html.matchAll(/href\s*=\s*["']([^"']+\.html)["']/gi)]
    .map((match) => match[1])
    .map((href) => href.split('/').pop())
    .filter(Boolean)
    .filter((filename) => filename !== baseSlug)
    .filter((filename) => filename.startsWith(`${prefix}_`))
    .filter((filename, index, all) => all.indexOf(filename) === index);
}

function cleanImageCandidate(src, pageUrl) {
  if (!src || /^data:/i.test(src)) {
    return null;
  }

  const absoluteUrl = new URL(src, pageUrl).toString();
  const normalized = absoluteUrl.replace(/^http:\/\//i, 'https://');

  if (!/\/images\/produtos\//i.test(normalized)) {
    return null;
  }

  if (/\.(php|html?)($|\?)/i.test(normalized)) {
    return null;
  }

  return normalized;
}

function imageScore(url) {
  const pathname = new URL(url).pathname.toLowerCase();
  const filename = path.basename(pathname);
  let score = 0;

  if (/\.(png|jpe?g|gif)$/i.test(filename)) {
    score += 10;
  }

  if (!/^des[_-]/i.test(filename)) {
    score += 90;
  }

  if (/desenho|tabela|dimens|medida|detalhe|grafico|curva/i.test(filename)) {
    score -= 50;
  }

  if (/mipel|produtos/i.test(pathname)) {
    score += 5;
  }

  return score;
}

function extractImageCandidates(html, pageUrl) {
  return [...html.matchAll(/<img\b[^>]*?\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi)]
    .map((match) => cleanImageCandidate(match[1], pageUrl))
    .filter(Boolean)
    .filter((url, index, all) => all.indexOf(url) === index)
    .map((url) => ({
      url,
      fileName: path.basename(new URL(url).pathname),
      score: imageScore(url),
    }));
}

function extractProductImages(html, pageUrl) {
  return extractImageCandidates(html, pageUrl)
    .sort((a, b) => b.score - a.score)
    .map((candidate) => candidate.url);
}

function isTechnicalDrawingUrl(url, category) {
  const fileName = path.basename(new URL(url).pathname).toLowerCase();
  const technicalCategory = category === 'Flanges' || category === 'Conexoes';

  return (
    technicalCategory ||
    /^des[_-]/i.test(fileName) ||
    /desenho|dimens|medida|corte|vista|tabela|curva|grafico/i.test(fileName)
  );
}

function extractTechnicalDrawings(html, pageUrl, category) {
  return extractImageCandidates(html, pageUrl)
    .filter((candidate) => isTechnicalDrawingUrl(candidate.url, category))
    .map((candidate) => candidate.url);
}

function extensionFromUrl(url) {
  const ext = path.extname(new URL(url).pathname).toLowerCase();
  return ext && /^\.(png|jpe?g|gif)$/i.test(ext) ? ext : '.png';
}

function titleFromSlug(slug) {
  return slug
    .replace(/\.html$/i, '')
    .replace(/^prod_/, '')
    .replace(/^conexoes_/, '')
    .replace(/^aces_/, '')
    .replace(/^instr_/, '')
    .replace(/^purg_/, 'purgador_')
    .replace(/^ved_/, '')
    .replace(/^val_/, 'valvula_')
    .replace(/^flg_/, 'flange_')
    .split('_')
    .filter(Boolean)
    .map((part) => {
      const upper = part.toUpperCase();
      if (
        /^\d/.test(part) ||
        ['ANSI', 'AWWA', 'DIN', 'JIS', 'WN', 'SO', 'SW', 'RSC', 'RTJ'].includes(upper)
      ) {
        return upper;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}

function toTsObject(value) {
  return JSON.stringify(value, null, 2);
}

async function getPagesForItem(item) {
  const baseUrl = productUrl(item.slug);
  const baseHtml = await fetchText(baseUrl);
  const linkedPages = extractLinkedProductPages(baseHtml, item.slug);
  const pages = [item.slug, ...linkedPages];

  return { baseHtml, pages };
}

async function findImageForItem(item, pageInfo) {
  for (const filename of pageInfo.pages) {
    const url = productUrl(filename);

    try {
      const html = filename === item.slug ? pageInfo.baseHtml : await fetchText(url);
      const images = extractProductImages(html, url);

      if (images.length) {
        return {
          imageUrl: images[0],
          pageUrl: url,
          title: titleFromSlug(filename),
        };
      }
    } catch (error) {
      console.warn(`Aviso: ${error.message}`);
    }
  }

  return null;
}

async function findDrawingsForItem(item, pageInfo) {
  const drawings = [];
  const seenUrls = new Set();

  for (const filename of pageInfo.pages) {
    const url = productUrl(filename);

    try {
      const html = filename === item.slug ? pageInfo.baseHtml : await fetchText(url);
      const imageUrls = extractTechnicalDrawings(html, url, item.category);

      for (const imageUrl of imageUrls) {
        if (seenUrls.has(imageUrl)) {
          continue;
        }

        seenUrls.add(imageUrl);
        drawings.push({
          imageUrl,
          pageUrl: url,
          title: titleFromSlug(filename),
        });
      }
    } catch (error) {
      console.warn(`Aviso: ${error.message}`);
    }
  }

  return drawings;
}

async function downloadImage(url, target) {
  const buffer = await fetchBuffer(url);
  fs.writeFileSync(target, buffer);
}

async function getOrDownloadAsset(imageByUrl, record, assetType) {
  let asset = imageByUrl.get(record.imageUrl);
  if (asset) {
    return asset;
  }

  const pathname = new URL(record.imageUrl).pathname;
  const baseName = path.basename(pathname, path.extname(pathname));
  const key = `${slugify(baseName)}-${shortHash(record.imageUrl)}`;
  const fileName = `${key}${extensionFromUrl(record.imageUrl)}`;
  const target = path.join(ASSET_DIR, fileName);

  if (!fs.existsSync(target)) {
    await downloadImage(record.imageUrl, target);
  }

  asset = {
    key,
    fileName,
    title: record.title,
    sourceUrl: record.imageUrl,
    pageUrl: record.pageUrl,
    credit: 'Valaco',
    assetType,
  };
  imageByUrl.set(record.imageUrl, asset);

  return asset;
}

function buildImageModuleOutput(assets, productImages) {
  const assetEntries = assets
    .map(
      (asset) =>
        `  ${JSON.stringify(asset.key)}: require(${JSON.stringify(
          `./assets/catalog/valaco/${asset.fileName}`,
        )}),`,
    )
    .join('\n');
  const meta = Object.fromEntries(
    assets.map((asset) => [
      asset.key,
      {
        title: asset.title,
        sourceUrl: asset.sourceUrl,
        pageUrl: asset.pageUrl,
        credit: asset.credit,
      },
    ]),
  );

  return `import type { ImageSourcePropType } from 'react-native';

export type CatalogImageMeta = {
  title: string;
  sourceUrl: string;
  pageUrl: string;
  credit: string;
};

export const CATALOG_IMAGE_ASSETS: Record<string, ImageSourcePropType> = {
${assetEntries}
};

export const CATALOG_IMAGE_META: Record<string, CatalogImageMeta> = ${toTsObject(meta)};

export const CATALOG_PRODUCT_IMAGES: Record<string, string> = ${toTsObject(productImages)};
`;
}

function buildDrawingModuleOutput(assets, productDrawings) {
  const assetEntries = assets
    .map(
      (asset) =>
        `  ${JSON.stringify(asset.key)}: require(${JSON.stringify(
          `./assets/catalog/valaco/${asset.fileName}`,
        )}),`,
    )
    .join('\n');
  const meta = Object.fromEntries(
    assets.map((asset) => [
      asset.key,
      {
        title: asset.title,
        sourceUrl: asset.sourceUrl,
        pageUrl: asset.pageUrl,
        credit: asset.credit,
      },
    ]),
  );

  return `import type { ImageSourcePropType } from 'react-native';

export type CatalogDrawingMeta = {
  title: string;
  sourceUrl: string;
  pageUrl: string;
  credit: string;
};

export const CATALOG_DRAWING_ASSETS: Record<string, ImageSourcePropType> = {
${assetEntries}
};

export const CATALOG_DRAWING_META: Record<string, CatalogDrawingMeta> = ${toTsObject(meta)};

export const CATALOG_PRODUCT_DRAWINGS: Record<string, string[]> = ${toTsObject(productDrawings)};
`;
}

async function main() {
  fs.mkdirSync(ASSET_DIR, { recursive: true });

  const items = parseCatalogItems();
  const imageByUrl = new Map();
  const productImages = {};
  const productDrawings = {};

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    process.stdout.write(`[${index + 1}/${items.length}] ${item.slug}... `);

    try {
      const pageInfo = await getPagesForItem(item);
      const imageRecord = await findImageForItem(item, pageInfo);
      const drawingRecords = await findDrawingsForItem(item, pageInfo);

      if (imageRecord) {
        const asset = await getOrDownloadAsset(imageByUrl, imageRecord, 'product');
        productImages[item.id] = asset.key;
      }

      const drawingKeys = [];
      for (const drawingRecord of drawingRecords) {
        const drawingAsset = await getOrDownloadAsset(imageByUrl, drawingRecord, 'drawing');
        if (!drawingKeys.includes(drawingAsset.key)) {
          drawingKeys.push(drawingAsset.key);
        }
      }

      if (drawingKeys.length) {
        productDrawings[item.id] = drawingKeys;
      }

      process.stdout.write(
        `${imageRecord ? 'imagem' : 'sem imagem'} / ${drawingKeys.length} desenho(s)\n`,
      );
    } catch (error) {
      process.stdout.write(`falhou: ${error.message}\n`);
    }
  }

  const assets = [...imageByUrl.values()].sort((a, b) => a.key.localeCompare(b.key));
  const productImageKeys = new Set(Object.values(productImages));
  const drawingKeys = new Set(Object.values(productDrawings).flat());
  const productAssets = assets.filter((asset) => productImageKeys.has(asset.key));
  const drawingAssets = assets.filter((asset) => drawingKeys.has(asset.key));

  fs.writeFileSync(OUTPUT_PATH, buildImageModuleOutput(productAssets, productImages), 'utf8');
  fs.writeFileSync(
    DRAWINGS_OUTPUT_PATH,
    buildDrawingModuleOutput(drawingAssets, productDrawings),
    'utf8',
  );

  console.log(`\nImagens Valaco: ${productAssets.length}`);
  console.log(`Produtos associados: ${Object.keys(productImages).length}`);
  console.log(`Desenhos tecnicos: ${drawingAssets.length}`);
  console.log(`Produtos com desenhos: ${Object.keys(productDrawings).length}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
