import {
  CATALOG_TECHNICAL_DATA,
  CatalogTechnicalSection,
  CatalogTechnicalSourcePage,
} from './catalog-technical-data';

export type CatalogCategory =
  | 'Valvulas'
  | 'Flanges'
  | 'Conexoes'
  | 'Filtros'
  | 'Purgadores'
  | 'Vedacoes'
  | 'Instrumentos'
  | 'Acessorios';

export type CatalogSpec = {
  label: string;
  value: string;
};

export type CatalogItem = {
  id: string;
  title: string;
  category: CatalogCategory;
  status: 'alta-press' | 'catalog-placeholder' | 'authorized-ready';
  summary: string;
  tags: string[];
  specs: CatalogSpec[];
  localAsset?: string;
  sourceUrl?: string;
  sourcePages?: CatalogTechnicalSourcePage[];
  technicalSections?: CatalogTechnicalSection[];
};

function normalizeTitle(slug: string) {
  const clean = slug
    .replace(/\.html$/i, '')
    .replace(/^prod_/, '')
    .replace(/^conexoes_/, '')
    .replace(/^aces_/, '')
    .replace(/^instr_/, '')
    .replace(/^purg_/, 'purgador_')
    .replace(/^ved_/, '')
    .replace(/^val_/, 'valvula_')
    .replace(/^flg_/, 'flange_');

  const words = clean.split('_').filter(Boolean);

  return words
    .map((word) => {
      const upper = word.toUpperCase();

      if (
        ['ANSI', 'AWWA', 'DIN', 'JIS', 'JISB2220', 'JISB2238', 'WN', 'SO', 'SW', 'RSC', 'RTJ', 'PN6', 'PN10', 'PN16', 'PN25', 'PN40', 'PN64', 'PN100'].includes(upper) ||
        /^\d/.test(word)
      ) {
        return upper;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function tagsFromSlug(slug: string, category: CatalogCategory) {
  return [
    category,
    ...slug
      .replace(/\.html$/i, '')
      .split(/[_-]/)
      .filter((part) => part.length > 1)
      .map((part) => part.toUpperCase()),
  ];
}

function makeCatalogPlaceholder(category: CatalogCategory, slug: string): CatalogItem {
  const id = `${category.toLowerCase()}-${slug.replace(/[^a-z0-9]+/gi, '-').replace(/-$/g, '')}`;
  const title = normalizeTitle(slug);
  const technicalData = CATALOG_TECHNICAL_DATA[id];
  const fallbackSpecs = [
    { label: 'Imagem', value: 'Em breve' },
    { label: 'Ficha tecnica', value: 'Aguardando dados autorizados' },
    { label: 'Status', value: 'Preparado para cadastro Alta Press' },
  ];

  return {
    id,
    title,
    category,
    status: 'catalog-placeholder',
    summary:
      technicalData?.summary ??
      'Produto cadastrado como estrutura inicial do catalogo. Imagem e especificacoes autorizadas serao inseridas futuramente.',
    tags: tagsFromSlug(slug, category),
    specs: technicalData?.specs?.length
      ? [{ label: 'Imagem', value: 'Em breve' }, ...technicalData.specs]
      : fallbackSpecs,
    sourceUrl: technicalData?.sourceUrl,
    sourcePages: technicalData?.sourcePages,
    technicalSections: technicalData?.technicalSections,
  };
}

const valvulas = [
  'val_angular.html',
  'val_borboleta.html',
  'val_descarga.html',
  'val_diafragma.html',
  'val_esfera.html',
  'val_esfera_bip.html',
  'val_esfera_tri.html',
  'val_gaveta.html',
  'val_globo.html',
  'val_guilhotina.html',
  'val_hidrante_brz.html',
  'val_macho.html',
  'val_mangote.html',
  'val_passagem_reta.html',
  'val_redutora_pressao.html',
  'val_retencao.html',
  'val_sa_brz.html',
  'val_solenoide.html',
  'val_start_up.html',
];

const flanges = [
  'conexoes_flg_cego_ANSI.html',
  'conexoes_flg_cego_AWWA.html',
  'conexoes_flg_cego_DIN.html',
  'conexoes_flg_cego_JIS.html',
  'conexoes_flg_cego_ANSI_150.html',
  'conexoes_flg_cego_ANSI_300.html',
  'conexoes_flg_cego_ANSI_600.html',
  'conexoes_flg_cego_ANSI_900.html',
  'conexoes_flg_cego_ANSI_1500.html',
  'conexoes_flg_cego_ANSI_2500.html',
  'conexoes_flg_cego_AWWA_86psi.html',
  'conexoes_flg_cego_AWWA_175-150psi.html',
  'conexoes_flg_cego_AWWA_275psi.html',
  'conexoes_flg_cego_AWWA_300psi.html',
  'conexoes_flg_cego_DIN2527_PN6.html',
  'conexoes_flg_cego_DIN2527_PN10.html',
  'conexoes_flg_cego_DIN2527_PN16.html',
  'conexoes_flg_cego_DIN2527_PN25.html',
  'conexoes_flg_cego_DIN2527_PN40.html',
  'conexoes_flg_cego_DIN2527_PN64.html',
  'conexoes_flg_cego_DIN2527_PN100.html',
  'conexoes_flg_cego_JISB2220_5K.html',
  'conexoes_flg_cego_JISB2220_10K.html',
  'conexoes_flg_cego_JISB2220_16K.html',
  'conexoes_flg_cego_JISB2220_20K.html',
  'conexoes_flg_cego_JISB2220_30K.html',
  'conexoes_flg_cego_JISB2238_40K.html',
  'conexoes_flg_cego_JISB2238_63K.html',
  'conexoes_flg_wn_ANSI.html',
  'conexoes_flg_wn_ANSI_150.html',
  'conexoes_flg_wn_ANSI_300.html',
  'conexoes_flg_wn_ANSI_600.html',
  'conexoes_flg_wn_ANSI_900.html',
  'conexoes_flg_wn_ANSI_1500.html',
  'conexoes_flg_wn_ANSI_2500.html',
  'conexoes_flg_WN_DIN.html',
  'conexoes_flg_WN_DIN2631_PN6.html',
  'conexoes_flg_WN_DIN2632_PN10.html',
  'conexoes_flg_WN_DIN2633_PN16.html',
  'conexoes_flg_WN_DIN2634_PN25.html',
  'conexoes_flg_WN_DIN2635_PN40.html',
  'conexoes_flg_WN_DIN2636_PN64.html',
  'conexoes_flg_WN_DIN2637_PN100.html',
  'conexoes_flg_wn_JIS.html',
  'conexoes_flg_wn_JISB2220_30K.html',
  'conexoes_flg_wn_JISB2238_40K.html',
  'conexoes_flg_wn_JISB2238_63K.html',
  'conexoes_flg_so_ANSI.html',
  'conexoes_flg_so_ANSI_150.html',
  'conexoes_flg_so_ANSI_300.html',
  'conexoes_flg_so_ANSI_600.html',
  'conexoes_flg_so_ANSI_900.html',
  'conexoes_flg_so_ANSI_1500.html',
  'conexoes_flg_so_ANSI_2500.html',
  'conexoes_flg_so_AWWA.html',
  'conexoes_flg_so_AWWA_175-150psi.html',
  'conexoes_flg_so_AWWA_275psi.html',
  'conexoes_flg_so_JIS.html',
  'conexoes_flg_so_JISB2220_5K.html',
  'conexoes_flg_so_JISB2220_10K.html',
  'conexoes_flg_so_JISB2220_16K.html',
  'conexoes_flg_so_JISB2220_20K.html',
  'conexoes_flg_so_JISB2220_30K.html',
  'conexoes_flg_sw_ANSI.html',
  'conexoes_flg_sw_ANSI_150.html',
  'conexoes_flg_sw_ANSI_300.html',
  'conexoes_flg_sw_ANSI_600.html',
  'conexoes_flg_sw_ANSI_900.html',
  'conexoes_flg_sw_ANSI_1500.html',
  'conexoes_rsc_ANSI.html',
  'conexoes_flg_rsc_ANSI_150.html',
  'conexoes_flg_rsc_ANSI_300.html',
  'conexoes_flg_rsc_ANSI_600.html',
  'conexoes_flg_rsc_ANSI_900.html',
  'conexoes_flg_rsc_ANSI_1500.html',
  'conexoes_flg_rsc_ANSI_2500.html',
  'conexoes_flg_rsc_DIN.html',
  'conexoes_flg_rsc_DIN2565_PN6.html',
  'conexoes_flg_rsc_DIN2566_PN10PN16.html',
  'conexoes_flg_rsc_DIN2567_PN25PN40.html',
  'conexoes_flg_rsc_DIN2568_PN64.html',
  'conexoes_flg_rsc_DIN2569_PN100.html',
  'conexoes_flg_solto_ANSI.html',
  'conexoes_flg_solto_ANSI_150.html',
  'conexoes_flg_solto_ANSI_300.html',
  'conexoes_flg_solto_ANSI_600.html',
  'conexoes_flg_solto_ANSI_900.html',
  'conexoes_flg_solto_ANSI_1500.html',
  'conexoes_flg_solto_ANSI_2500.html',
  'conexoes_flg_solto_DIN.html',
  'conexoes_flg_solto_DIN2641_PN6.html',
  'conexoes_flg_solto_DIN2642_PN10.html',
  'conexoes_flg_solto_DIN2652_PN6.html',
  'conexoes_flg_solto_DIN2653_PN10.html',
  'conexoes_flg_solto_DIN2655_PN25.html',
  'conexoes_flg_solto_DIN2656_PN40.html',
  'conexoes_flg_so_plano_ANSI.html',
  'conexoes_flg_so_plano_ANSI_150.html',
  'conexoes_flg_so_plano_ANSI_300.html',
  'conexoes_flg_so_plano_ANSI_600.html',
  'conexoes_flg_so_plano_ANSI_900.html',
  'conexoes_flg_so_plano_ANSI_1500.html',
  'conexoes_flg_so_plano_ANSI_2500.html',
  'conexoes_flg_so_plano_AWWA.html',
  'conexoes_flg_so_plano_AWWA_86psi.html',
  'conexoes_flg_so_plano_AWWA_175-150psi.html',
  'conexoes_flg_so_plano_AWWA_275psi.html',
  'conexoes_flg_so_plano_AWWA_300psi.html',
  'conexoes_flg_so_plano_DIN.html',
  'conexoes_flg_so_plano_DIN2573_PN6.html',
  'conexoes_flg_so_plano_DIN2576_PN10.html',
  'conexoes_flg_so_plano_JIS.html',
  'conexoes_flg_so_plano_JISB2220_5K.html',
  'conexoes_flg_so_plano_JISB2220_10K.html',
  'conexoes_flg_so_plano_JISB2220_16K.html',
  'conexoes_flg_so_plano_JISB2220_20K.html',
  'conexoes_flg_so_plano_JISB2220_30K.html',
  'conexoes_flg_so_plano_JISB2238_40K.html',
  'conexoes_flg_so_plano_JISB2238_63K.html',
  'conexoes_flg_orificio_wn_ANSI.html',
  'conexoes_flg_orificio_wn_ANSI_300.html',
  'conexoes_flg_orificio_wn_ANSI_600.html',
  'conexoes_flg_orificio_wn_ANSI_900.html',
  'conexoes_flg_orificio_wn_ANSI_1500.html',
  'conexoes_flg_orificio_wn_ANSI_2500.html',
  'conexoes_flg_orificio_wn_ANSI_600_rtj.html',
  'conexoes_flg_orificio_wn_ANSI_900_rtj.html',
  'conexoes_flg_orificio_wn_ANSI_1500_rtj.html',
  'conexoes_flg_orificio_wn_ANSI_2500_rtj.html',
  'conexoes_flg_orificio_so_ANSI.html',
  'conexoes_flg_orificio_so_ANSI_300.html',
  'conexoes_flg_orificio_rsc_ANSI.html',
  'conexoes_flg_orificio_rsc_ANSI_300.html',
  'conexoes_flg_reducao_ANSI.html',
  'conexoes_flg_reducao_ANSI_150-2500.html',
];

const conexoes = [
  'conexoes_ap.html',
  'conexoes_fm.html',
  'conexoes_colares.html',
  'conexoes_tb.html',
];

const filtros = ['filtro_cesto.html', 'filtro_y.html'];

const purgadores = [
  'purg_bimetalico.html',
  'purg_balde.html',
  'purg_boia.html',
  'purg_eletronico.html',
  'purg_termodinamico.html',
  'purg_termostatico.html',
];

const vedacoes = [
  'ved_anel.html',
  'ved_fita.html',
  'ved_gaxeta.html',
  'ved_junta.html',
];

const instrumentos = ['instr_manometro.html', 'instr_termometro.html'];

const acessorios = [
  'amortecedor.html',
  'aces_eliminador.html',
  'aces_grampou.html',
  'indicador_nivel_brz.html',
  'prod_junta_expansao.html',
  'aces_separador.html',
  'acessorios_ventosa.html',
  'acessorios_visor_brz.html',
];

export const AUTHORIZED_CONTENT_SLOTS: CatalogItem[] = [
  {
    id: 'alta-press-catalogo-autorizado',
    title: 'Catalogo autorizado Alta Press',
    category: 'Acessorios',
    status: 'authorized-ready',
    summary:
      'Espaco reservado para fichas, desenhos e imagens que a Alta Press tenha autorizacao para publicar dentro do app.',
    tags: ['ALTA PRESS', 'AUTORIZADO', 'IMAGENS', 'DESENHOS', 'FICHAS'],
    specs: [
      { label: 'Entrada aceita', value: 'PDF, PNG, JPG, SVG, XLSX ou CSV' },
      { label: 'Campos previstos', value: 'produto, material, norma, classe, bitola, medidas e observacoes' },
      { label: 'Status', value: 'Aguardando arquivos autorizados' },
    ],
  },
];

export const ALTA_PRESS_INTERNAL_ITEMS: CatalogItem[] = [
  {
    id: 'alta-press-flanges-alta-pressao',
    title: 'Flanges para alta pressao',
    category: 'Flanges',
    status: 'alta-press',
    summary:
      'Linha comercial editavel da Alta Press para consulta rapida no balcao, oficina e atendimento.',
    tags: ['ALTA PRESS', 'FLANGES', 'ALTA PRESSAO', 'ANSI', 'DIN'],
    specs: [
      { label: 'Origem', value: 'Cadastro interno Alta Press' },
      { label: 'Conferencia', value: 'Completar com catalogo proprio ou autorizado' },
    ],
  },
  {
    id: 'alta-press-valvulas-industriais',
    title: 'Valvulas industriais',
    category: 'Valvulas',
    status: 'alta-press',
    summary:
      'Familia editavel para organizar modelos vendidos pela Alta Press sem depender de copia de terceiros.',
    tags: ['ALTA PRESS', 'VALVULAS', 'ESFERA', 'GAVETA', 'RETENCAO'],
    specs: [
      { label: 'Origem', value: 'Cadastro interno Alta Press' },
      { label: 'Proximo passo', value: 'Adicionar fotos e fichas tecnicas proprias' },
    ],
  },
];

export const CATALOG_PLACEHOLDER_ITEMS: CatalogItem[] = [
  ...valvulas.map((slug) => makeCatalogPlaceholder('Valvulas', slug)),
  ...flanges.map((slug) => makeCatalogPlaceholder('Flanges', slug)),
  ...conexoes.map((slug) => makeCatalogPlaceholder('Conexoes', slug)),
  ...filtros.map((slug) => makeCatalogPlaceholder('Filtros', slug)),
  ...purgadores.map((slug) => makeCatalogPlaceholder('Purgadores', slug)),
  ...vedacoes.map((slug) => makeCatalogPlaceholder('Vedacoes', slug)),
  ...instrumentos.map((slug) => makeCatalogPlaceholder('Instrumentos', slug)),
  ...acessorios.map((slug) => makeCatalogPlaceholder('Acessorios', slug)),
];

export const CATALOG_ITEMS: CatalogItem[] = [
  ...ALTA_PRESS_INTERNAL_ITEMS,
  ...AUTHORIZED_CONTENT_SLOTS,
  ...CATALOG_PLACEHOLDER_ITEMS,
];

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  'Valvulas',
  'Flanges',
  'Conexoes',
  'Filtros',
  'Purgadores',
  'Vedacoes',
  'Instrumentos',
  'Acessorios',
];
