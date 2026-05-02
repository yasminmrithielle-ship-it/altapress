const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const { TextDecoder } = require('util');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(PROJECT_ROOT, 'catalog.ts');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'catalog-technical-data.ts');
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

const ENTITY_MAP = {
  nbsp: ' ',
  amp: '&',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  laquo: '«',
  raquo: '»',
  aacute: 'á',
  Aacute: 'Á',
  agrave: 'à',
  Agrave: 'À',
  acirc: 'â',
  Acirc: 'Â',
  atilde: 'ã',
  Atilde: 'Ã',
  ccedil: 'ç',
  Ccedil: 'Ç',
  eacute: 'é',
  Eacute: 'É',
  ecirc: 'ê',
  Ecirc: 'Ê',
  iacute: 'í',
  Iacute: 'Í',
  oacute: 'ó',
  Oacute: 'Ó',
  ocirc: 'ô',
  Ocirc: 'Ô',
  otilde: 'õ',
  Otilde: 'Õ',
  uacute: 'ú',
  Uacute: 'Ú',
  deg: '°',
  sup2: '²',
};

const BOILERPLATE_PATTERNS = [
  /tudo flui/i,
  /termos de uso/i,
  /nota legal/i,
  /pol[ií]tica de privacidade/i,
  /^procurar:?$/i,
  /:: home/i,
  /»/,
  /^home$/i,
  /^produtos?$/i,
  /todos os desenhos e imagens/i,
  /^imprimir$/i,
  /esta p[aá]gina/i,
  /n[aã]o encontrou/i,
  /busca avan[cç]ada/i,
  /reportar link/i,
  /visualize o mapa/i,
  /recomendar este site/i,
  /^tel\.:/i,
  /^email:/i,
  /^end\.:/i,
  /valaco@/i,
  /^\+55/,
  /instagram/i,
  /statcounter/i,
  /javascript:/i,
  /^siga a/i,
  /^entregamos/i,
  /^termos$/i,
];

const fetchCache = new Map();

function decodeEntities(value) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z][a-z0-9]+);/gi, (match, entity) => {
    if (entity[0] === '#') {
      const isHex = entity[1]?.toLowerCase() === 'x';
      const code = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }

    return ENTITY_MAP[entity] ?? match;
  });
}

function cleanLine(value) {
  return decodeEntities(value)
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s+([,.;:])/g, '$1')
    .trim();
}

function isBoilerplate(line) {
  if (!line || line.length < 2) {
    return true;
  }

  return BOILERPLATE_PATTERNS.some((pattern) => pattern.test(line));
}

function stripHtmlToLines(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;

  body = body
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|tr|td|th|li|table|h1|h2|h3|h4|h5|h6)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');

  const seen = new Set();

  return body
    .split(/\r?\n/)
    .map(cleanLine)
    .filter((line) => !isBoilerplate(line))
    .filter((line) => {
      const key = line.toLowerCase();
      if (seen.has(key) && line.length < 80) {
        return false;
      }
      seen.add(key);
      return true;
    });
}

function titleFromHtml(html, fallback) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? fallback;
  return cleanLine(title)
    .replace(/\s*\|\s*Produtos\s*\|\s*Val\s*Aço\s*$/i, '')
    .replace(/\s*\|\s*Produtos\s*\|\s*Val\s*Aco\s*$/i, '')
    .trim();
}

function isHeading(line) {
  if (line.length > 90) {
    return false;
  }

  if (/^(caracter[ií]sticas|constru[cç][aã]o|materiais|notas|componentes|face|peso|press[aã]o|dimens|classe|descri[cç][aã]o|material|tabela|extremidades)/i.test(line)) {
    return true;
  }

  const letters = line.replace(/[^A-Za-zÀ-ÿ]/g, '');
  if (letters.length < 4) {
    return false;
  }

  const upper = letters.replace(/[a-zà-ÿ]/g, '').length;
  return upper / letters.length > 0.78;
}

function chunkText(lines, maxLength = 820) {
  const chunks = [];
  let current = '';

  for (const line of lines) {
    const next = current ? `${current}; ${line}` : line;
    if (next.length > maxLength && current) {
      chunks.push(current);
      current = line;
    } else {
      current = next;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function buildSections(title, lines) {
  const sections = [];
  let sectionTitle = title || 'Dados tecnicos';
  let buffer = [];

  const flush = () => {
    if (!buffer.length) {
      return;
    }

    sections.push({
      title: sectionTitle,
      rows: chunkText(buffer).map((value, index) => ({
        label: index === 0 ? 'Dados' : `Dados ${index + 1}`,
        value,
      })),
    });
    buffer = [];
  };

  for (const line of lines) {
    if (isHeading(line)) {
      flush();
      sectionTitle = line;
      continue;
    }

    buffer.push(line);
  }

  flush();

  return sections.filter((section) => section.rows.length);
}

function summarize(sections, fallback) {
  const firstRows = sections.flatMap((section) => section.rows.map((row) => row.value));
  const firstUseful = firstRows.find((value) => value.length > 40) ?? firstRows[0];

  if (!firstUseful) {
    return fallback;
  }

  return firstUseful.length > 220 ? `${firstUseful.slice(0, 217)}...` : firstUseful;
}

function parseCatalogItems() {
  const source = fs.readFileSync(CATALOG_PATH, 'utf8');

  return CATEGORY_ARRAYS.flatMap(([arrayName, category]) => {
    const match = source.match(new RegExp(`const\\s+${arrayName}\\s*=\\s*\\[([\\s\\S]*?)\\];`));
    if (!match) {
      return [];
    }

    return [...match[1].matchAll(/'([^']+\.html)'/g)].map((slugMatch) => {
      const slug = slugMatch[1];
      return {
        category,
        slug,
        id: `${category.toLowerCase()}-${slug.replace(/[^a-z0-9]+/gi, '-').replace(/-$/g, '')}`,
      };
    });
  });
}

function productUrl(filename) {
  return new URL(filename, PRODUCT_ROOT).toString();
}

function extractLinks(html, baseSlug) {
  const prefix = baseSlug.replace(/\.html$/i, '');

  return [...html.matchAll(/href\s*=\s*["']([^"']+\.html)["']/gi)]
    .map((match) => match[1])
    .map((href) => href.split('/').pop())
    .filter(Boolean)
    .filter((filename) => filename !== baseSlug)
    .filter((filename) => filename.startsWith(`${prefix}_`))
    .filter((filename, index, all) => all.indexOf(filename) === index);
}

function fetchUrl(url) {
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }

  const promise = new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const request = client.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        resolve(fetchUrl(new URL(response.headers.location, url).toString()));
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`HTTP ${response.statusCode} em ${url}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const decoder = new TextDecoder('utf-8');
        resolve(decoder.decode(buffer));
      });
    });

    request.on('timeout', () => request.destroy(new Error(`Timeout em ${url}`)));
    request.on('error', reject);
  });

  fetchCache.set(url, promise);
  return promise;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toTsString(value) {
  return JSON.stringify(value, null, 2);
}

async function buildRecord(item) {
  const baseUrl = productUrl(item.slug);
  const baseHtml = await fetchUrl(baseUrl);
  const linkedPages = extractLinks(baseHtml, item.slug);
  const pages = linkedPages.length ? linkedPages : [item.slug];
  const pageRecords = [];

  for (const filename of pages) {
    await delay(45);

    try {
      const url = productUrl(filename);
      const html = await fetchUrl(url);
      const title = titleFromHtml(html, filename.replace(/\.html$/i, ''));
      const lines = stripHtmlToLines(html);
      const sections = buildSections(title, lines);

      if (sections.length) {
        pageRecords.push({ title, url, sections });
      }
    } catch (error) {
      console.warn(`Aviso: ${error.message}`);
    }
  }

  if (!pageRecords.length) {
    return null;
  }

  const technicalSections = pageRecords.flatMap((page) => page.sections);
  const summary = summarize(
    technicalSections,
    'Texto tecnico autorizado importado para consulta interna da Alta Press.',
  );

  return {
    sourceUrl: baseUrl,
    sourcePages: pageRecords.map((page) => ({ title: page.title, url: page.url })),
    summary,
    specs: [
      { label: 'Fonte textual', value: 'Valaço - texto autorizado' },
      { label: 'Paginas tecnicas', value: `${pageRecords.length}` },
      { label: 'Imagem', value: 'Inserir imagem propria futuramente' },
    ],
    technicalSections,
  };
}

async function main() {
  const items = parseCatalogItems();
  const records = {};

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    process.stdout.write(`[${index + 1}/${items.length}] ${item.slug}... `);

    try {
      const record = await buildRecord(item);
      if (record) {
        records[item.id] = record;
        process.stdout.write('ok\n');
      } else {
        process.stdout.write('sem texto tecnico\n');
      }
    } catch (error) {
      process.stdout.write(`falhou: ${error.message}\n`);
    }
  }

  const output = `export type CatalogTechnicalRow = {
  label: string;
  value: string;
};

export type CatalogTechnicalSection = {
  title: string;
  rows: CatalogTechnicalRow[];
};

export type CatalogTechnicalSourcePage = {
  title: string;
  url: string;
};

export type CatalogTechnicalRecord = {
  sourceUrl: string;
  sourcePages: CatalogTechnicalSourcePage[];
  summary: string;
  specs: CatalogTechnicalRow[];
  technicalSections: CatalogTechnicalSection[];
};

export const CATALOG_TECHNICAL_DATA: Record<string, CatalogTechnicalRecord> = ${toTsString(records)};
`;

  fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
  console.log(`\nGerado ${path.relative(PROJECT_ROOT, OUTPUT_PATH)} com ${Object.keys(records).length} produtos.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
