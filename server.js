const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const PORT = Number(process.env.PORT || 8080);
const DIST_DIR = path.join(__dirname, 'dist');
const MAX_BODY_BYTES = Number(process.env.MAX_UPLOAD_BYTES || 12 * 1024 * 1024);
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = Number(process.env.PHOTO_RATE_LIMIT_MAX || 8);
const rateLimitBuckets = new Map();

const PHOTO_ANALYSIS_PROMPT = `Voce e um especialista tecnico em conexoes industriais, flanges e pecas de alta pressao.

Sua funcao e analisar a imagem enviada pelo usuario e identificar a peca com o maior nivel de precisao possivel.

Analise visualmente:
- formato geral da peca
- presenca ou ausencia de furo central
- quantidade de furos para parafusos
- existencia de pescoco/neck
- face elevada, face plana ou encaixe RTJ
- tipo de acabamento
- sinais de rosca, solda ou encaixe
- proporcao entre diametro externo, furo central e furos dos parafusos
- possiveis gravacoes visiveis na peca

Identifique, quando possivel:
- tipo da peca
- tipo do flange: WN, SO/SORF, BL, LJ, SW, TH, RTJ, FF, RF
- norma provavel: ANSI/ASME B16.5, DIN, EN, JIS ou outra
- classe provavel: 150, 300, 600, 900, 1500 ou 2500 lbs
- material provavel: aco carbono, aco inox, galvanizado, ferro fundido ou outro
- aplicacao comum
- nivel de confianca da identificacao

IMPORTANTE:
- Nunca invente uma medida exata se ela nao estiver visivel.
- Se nao houver escala, regua ou gravacao, informe que a classe e o DN sao apenas estimativas.
- Se houver duvida entre dois tipos, retorne as possibilidades.
- De prioridade para seguranca: informe que a validacao final deve ser feita por medicao, gravacao da peca ou tabela tecnica.
- Nao afirme compatibilidade para uso em pressao sem confirmacao tecnica.

Retorne sempre em JSON valido, sem texto fora do JSON.

Formato obrigatorio:

{
  "identificacao_principal": {
    "tipo_peca": "",
    "tipo_flange": "",
    "nome_tecnico": "",
    "norma_provavel": "",
    "classe_provavel": "",
    "material_provavel": "",
    "face": "",
    "confianca": 0
  },
  "caracteristicas_observadas": [
    ""
  ],
  "possiveis_alternativas": [
    {
      "tipo": "",
      "motivo": "",
      "confianca": 0
    }
  ],
  "informacoes_nao_confirmadas": [
    ""
  ],
  "recomendacoes_para_confirmar": [
    "Enviar foto da gravacao da peca",
    "Enviar medida do diametro externo",
    "Enviar medida do furo central",
    "Enviar quantidade e diametro dos furos dos parafusos",
    "Enviar espessura da peca"
  ],
  "resumo_para_usuario": ""
}`;

const PHOTO_RESULT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'identificacao_principal',
    'caracteristicas_observadas',
    'possiveis_alternativas',
    'informacoes_nao_confirmadas',
    'recomendacoes_para_confirmar',
    'resumo_para_usuario',
  ],
  properties: {
    identificacao_principal: {
      type: 'object',
      additionalProperties: false,
      required: [
        'tipo_peca',
        'tipo_flange',
        'nome_tecnico',
        'norma_provavel',
        'classe_provavel',
        'material_provavel',
        'face',
        'confianca',
      ],
      properties: {
        tipo_peca: { type: 'string' },
        tipo_flange: { type: 'string' },
        nome_tecnico: { type: 'string' },
        norma_provavel: { type: 'string' },
        classe_provavel: { type: 'string' },
        material_provavel: { type: 'string' },
        face: { type: 'string' },
        confianca: { type: 'number' },
      },
    },
    caracteristicas_observadas: {
      type: 'array',
      items: { type: 'string' },
    },
    possiveis_alternativas: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['tipo', 'motivo', 'confianca'],
        properties: {
          tipo: { type: 'string' },
          motivo: { type: 'string' },
          confianca: { type: 'number' },
        },
      },
    },
    informacoes_nao_confirmadas: {
      type: 'array',
      items: { type: 'string' },
    },
    recomendacoes_para_confirmar: {
      type: 'array',
      items: { type: 'string' },
    },
    resumo_para_usuario: { type: 'string' },
  },
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  response.end(JSON.stringify(payload));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    let totalBytes = 0;

    request.on('data', (chunk) => {
      totalBytes += chunk.length;

      if (totalBytes > MAX_BODY_BYTES) {
        reject(new Error('Imagem muito grande. Envie uma foto menor.'));
        request.destroy();
        return;
      }

      body += chunk;
    });

    request.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        reject(new Error('JSON invalido na requisicao.'));
      }
    });

    request.on('error', reject);
  });
}

function isRateLimited(request) {
  const forwardedFor = request.headers['x-forwarded-for'];
  const ip = String(forwardedFor || request.socket.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip);

  if (!bucket || now - bucket.start > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { start: now, count: 1 });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

function makeOpenAiPayload({ imageDataUrl, userNote, structuredOutput }) {
  const userContext = userNote?.trim()
    ? `\n\nObservacoes adicionais do usuario: ${userNote.trim()}`
    : '\n\nObservacoes adicionais do usuario: nenhuma.';
  const payload = {
    model: OPENAI_MODEL,
    input: [
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: `${PHOTO_ANALYSIS_PROMPT}${userContext}`,
          },
          {
            type: 'input_image',
            image_url: imageDataUrl,
            detail: 'high',
          },
        ],
      },
    ],
    temperature: 0.2,
    max_output_tokens: 1600,
  };

  if (structuredOutput) {
    payload.text = {
      format: {
        type: 'json_schema',
        name: 'alta_press_photo_identification',
        strict: true,
        schema: PHOTO_RESULT_SCHEMA,
      },
    };
  }

  return payload;
}

function extractOpenAiText(payload) {
  if (typeof payload?.output_text === 'string') {
    return payload.output_text.trim();
  }

  const chunks = [];

  for (const output of payload?.output || []) {
    for (const content of output.content || []) {
      if (typeof content.text === 'string') {
        chunks.push(content.text);
      }
    }
  }

  return chunks.join('\n').trim();
}

function parseJsonResult(text) {
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');

    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }

    throw new Error('A OpenAI nao retornou JSON valido.');
  }
}

async function callOpenAi(payload) {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => null);

  return { response, data };
}

async function handlePhotoReading(request, response) {
  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {});
    return;
  }

  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Metodo nao permitido.' });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 500, {
      error:
        'OPENAI_API_KEY nao configurada no servidor. Configure a variavel no Railway.',
    });
    return;
  }

  if (isRateLimited(request)) {
    sendJson(response, 429, {
      error: 'Muitas analises em pouco tempo. Aguarde um minuto e tente novamente.',
    });
    return;
  }

  try {
    const { imageDataUrl, userNote } = await readJsonBody(request);

    if (
      typeof imageDataUrl !== 'string' ||
      !/^data:image\/(?:png|jpe?g|webp|gif);base64,[a-z0-9+/=]+$/i.test(
        imageDataUrl,
      )
    ) {
      sendJson(response, 400, {
        error: 'Envie uma imagem valida em PNG, JPG, WEBP ou GIF.',
      });
      return;
    }

    let openAiPayload = makeOpenAiPayload({
      imageDataUrl,
      userNote: typeof userNote === 'string' ? userNote : '',
      structuredOutput: true,
    });
    let { response: openAiResponse, data } = await callOpenAi(openAiPayload);

    if (!openAiResponse.ok && openAiResponse.status === 400) {
      openAiPayload = makeOpenAiPayload({
        imageDataUrl,
        userNote: typeof userNote === 'string' ? userNote : '',
        structuredOutput: false,
      });
      ({ response: openAiResponse, data } = await callOpenAi(openAiPayload));
    }

    if (!openAiResponse.ok) {
      sendJson(response, 502, {
        error:
          data?.error?.message ||
          'A OpenAI nao conseguiu analisar a imagem neste momento.',
      });
      return;
    }

    const rawText = extractOpenAiText(data);
    const result = parseJsonResult(rawText);

    sendJson(response, 200, {
      result,
      rawText,
      model: OPENAI_MODEL,
    });
  } catch (error) {
    sendJson(response, 500, {
      error:
        error instanceof Error
          ? error.message
          : 'Erro inesperado na leitura por foto.',
    });
  }
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case '.html':
      return 'text/html; charset=utf-8';
    case '.js':
      return 'text/javascript; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.css':
      return 'text/css; charset=utf-8';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.ico':
      return 'image/x-icon';
    case '.svg':
      return 'image/svg+xml';
    default:
      return 'application/octet-stream';
  }
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(DIST_DIR, normalizedPath);

  if (!filePath.startsWith(DIST_DIR)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type': getContentType(filePath),
      'Cache-Control': filePath.endsWith('index.html')
        ? 'no-store'
        : 'public, max-age=31536000, immutable',
    });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  if (request.url?.startsWith('/api/photo-reading')) {
    handlePhotoReading(request, response);
    return;
  }

  serveStatic(request, response);
});

server.listen(PORT, () => {
  console.log(`ALTA PRESS app listening on port ${PORT}`);
});
