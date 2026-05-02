export type CatalogTechnicalRow = {
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

export const CATALOG_TECHNICAL_DATA: Record<string, CatalogTechnicalRecord> = {
  "valvulas-val-angular-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_angular.html",
    "sourcePages": [
      {
        "title": "Válvula Angular em Aço Carbono",
        "url": "http://www.valaco.com.br/produtos/val_angular_ac.html"
      },
      {
        "title": "Válvula Angular em Aço Laminado",
        "url": "http://www.valaco.com.br/produtos/val_angular_al.html"
      },
      {
        "title": "Válvula Angular em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_angular_brz.html"
      },
      {
        "title": "Válvula Angular em ferro fundido",
        "url": "http://www.valaco.com.br/produtos/val_angular_ff.html"
      }
    ],
    "summary": "Entrada e saída; do fluido no ângulo de 90°;; Fecho cônico; permitindo maior estanqueidade;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "4"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Entrada e saída; do fluido no ângulo de 90°;; Fecho cônico; permitindo maior estanqueidade;"
          }
        ]
      },
      {
        "title": "Face a Face (L)",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme norma ANSI; B 16.10 ou DIN; 3300;; Flanges padrão ANSI; B 16.5 ou DIN; 2545;; Corpo em Aço Carbono ASTM"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - Classe 150; lbs; Vapor; a 297°C sem Choque; 150 lbs/pol²; Água, óleo; e gás a 40°C sem Choque; 285 lbs/pol²; de Serviço - Classe PN; 40; a 400°C sem Choque; 21 kg/cml²; e gás a 120°C sem Choque; 40 kg/cm²"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Figura; Angular, volante e haste ascendente, corpo; em; Aço Carbono ASTM A 216 Gr. WCB,; flange padrão ANSI; B 16.5.; 150 lbs; V1500; flange padrão DIN; 2545.; PN 40; V1501"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Bronze; Ferro Fundido; Outras Ligas; Sob Consulta"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais;; 5.; O peso é um valor aproximado, podendo variar conforme fabricante."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Prisioneiro do Castelo; 8 - Junta; 9 - Porca da Contra-Sede; 10 - Contra-Sede; 11 - Anel (sede); 12 - Corpo"
          }
        ]
      },
      {
        "title": "Face",
        "rows": [
          {
            "label": "Dados",
            "value": "a Face (L) - Em Milímetro; Class.\\Diâm; (Pol.); 1.1/2\"; 2\"; 2.1/2\"; 3\"; 4\"; 5\"; 6\"; 8\"; 10\"; 12\"; 83,5; 102; 108; 121; 146; 165; 178; 248; 311; 349,5; (mm); 50; 65; 80; 100; 125; 150; 200; 115; 145; 155; 175; 225; 275"
          }
        ]
      },
      {
        "title": "Peso Aproximado (KG)",
        "rows": [
          {
            "label": "Dados",
            "value": "12; 18; 25; 30; 45; 85; 140; 19; 28; 36; 68; 90; 176"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para Solda de; Topo."
          }
        ]
      },
      {
        "title": "Extremidades flangeadas",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme ANSI ou DIN.; Construídas; de tubos e peças usinadas de barras; sólidas, não estão; sujeitas a falhas ou porosidades;; Fluxo direto, com; mínima perda de pressão;; Ideais para óleo; térmico, vapor saturado e superaquecido,; ar comprimido e outras aplicações; que requerem válvulas superiores;; Podem ser fornecidas; com extremidades para solda de topo ou; flanges norma ANSI ou DIN."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor até 425°C; 28,3 bar (410 lbf/pol²); Água, óleo,; gás, sem golpes a 40&ordm;C; 51,1 bar (740 lbf/pol²)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo"
          }
        ]
      },
      {
        "title": "Classes",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Normas; dos Flanges; Aço; Carbono Laminado; SAE; 1020; 300 lbs"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 ou DIN; Inoxidável Laminado"
          }
        ]
      },
      {
        "title": "AISI",
        "rows": [
          {
            "label": "Dados",
            "value": "304; 316"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; Solda; (BW); Flange; 150lbs; 300lbs; Angular, volante e haste ascendente,; corpo em Aço; Inoxidável Laminado AISI 304; V2400; V2403; V2404; Inoxidável Laminado AISI 316; V2401; V2405; V2406; Carbono Laminado SAE 1020; V2402; V2407; V2408"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; À pedido, esta válvula; poderá ser fornecida com:; • acionamento pneumático;; • camisa de vapor;; volante fixo e haste; ascendente;; • 3 vias;; 2.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 3.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do",
        "rows": [
          {
            "label": "Dados",
            "value": "corpo da válvula;; 4.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 5.; Veja recomendação; para utilização das; válvulas; mais usuais."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Corpo; 8 - Porca da contra-sede; 9 - Contra-sede; 10 - Anel (sede)"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M024"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT"
          }
        ]
      },
      {
        "title": "Construção de acordo com",
        "rows": [
          {
            "label": "Dados",
            "value": "a norma NBR; 8466;; Nas medidas de 1/4\" e 3/8\" os; porta discos são integrais a haste;; Gaxeta em PTFE; Tampa roscada internamente ao corpo;; Na medida de 4\" a tampa é; aparafusada ao corpo;; Disco renovável de PTFE;; Disco giratório para medidas acima; de 3/8\";"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor Saturado sem; Choque; 150 PSI (10 Bar); Água, óleo; e gás sem Choque; 300 PSI (20 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "150 S (300 WOG)",
        "rows": [
          {
            "label": "Dados",
            "value": "M027 / M028; Gaxeta em PTFE;; Figura M027: Disco e; Sede em Aço; Inoxidável AISI 410;; Figura M028: Disco em"
          }
        ]
      },
      {
        "title": "PTFE.",
        "rows": [
          {
            "label": "Dados",
            "value": "200 PSI (14 Bar); 400 PSI (28 Bar); do Corpo, Tampa e Porca de União"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Entrada e saída; do fluido no ângulo de 90°;; Fecho cônico; permitindo maior estanqueidade;"
          }
        ]
      },
      {
        "title": "Face a Face (L)",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme norma ANSI; B 16.10 ou DIN; 3300; Flanges padrão ANSI; B 16.1 ou DIN; 2533"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - Classe 125; lbs; Vapor; 125 lbs/pol²; Água, óleo; e gás a 40°C; 200 lbs/pol²; de Serviço - Classe PN; 16; a 300°C; 10 kg/cml²; e gás a 120°C; 16 kg/cml²"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Figura; Angular, volante e haste ascendente, corpo; em; Ferro Fundido ASTM A 126, flange padrão"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.1.; 125 lbs; V1502; DIN; 2533.; PN 16; V1503"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Bronze; Ferro Fundido; Outras Ligas; Sob Consulta"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais;; 5.; O peso é um valor aproximado, podendo variar conforme fabricante."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Prisioneiro do Castelo; 8 - Junta; 9 - Porca da Contra-Sede; 10 - Contra-Sede; 11 - Anel (sede); 12 - Corpo"
          }
        ]
      },
      {
        "title": "Face",
        "rows": [
          {
            "label": "Dados",
            "value": "a Face (L) - Em Milímetro; Class.\\Diâm; (Pol.); 1.1/2\"; 2\"; 2.1/2\"; 3\"; 4\"; 5\"; 6\"; 8\"; 10\"; 12\"; 150 lbs; 83,5; 102; 108; 121; 146; 165; 178; 248; 311; 349,5; (mm); 40; 50; 65; 80; 100; 125; 150; 200; 115; 145; 155; 175; 225; 275"
          }
        ]
      },
      {
        "title": "Peso Aproximado (KG)",
        "rows": [
          {
            "label": "Dados",
            "value": "12; 18; 25; 30; 45; 85; 140; 19; 28; 36; 68; 90; 176"
          }
        ]
      }
    ]
  },
  "valvulas-val-borboleta-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_borboleta.html",
    "sourcePages": [
      {
        "title": "Valvula Borboleta",
        "url": "http://www.valaco.com.br/produtos/val_borboleta_wafer.html"
      },
      {
        "title": "Valvula Borboleta Corpo Lug",
        "url": "http://www.valaco.com.br/produtos/val_borboleta_lug.html"
      },
      {
        "title": "Valvula Borboleta Corpo Flangeado",
        "url": "http://www.valaco.com.br/produtos/val_borboleta_flg.html"
      }
    ],
    "summary": "estreita;; Corpo Monobloco;; Facilmente desmontável para; manutenção;; Indicada para aplicações; genéricas e agressivos por corrosão,; abrasão, ou com sólidos; em suspensão;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "3"
      }
    ],
    "technicalSections": [
      {
        "title": "Construção",
        "rows": [
          {
            "label": "Dados",
            "value": "estreita;; Corpo Monobloco;; Facilmente desmontável para; manutenção;; Indicada para aplicações; genéricas e agressivos por corrosão,; abrasão, ou com sólidos; em suspensão;"
          }
        ]
      },
      {
        "title": "Construção conforme normas:",
        "rows": [
          {
            "label": "Dados",
            "value": "- DIN; 2501ND6;; 2501ND10;"
          }
        ]
      },
      {
        "title": "- ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 150lbs;; - Outras."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Borboleta, tipo wafer, corpo em; Aço Inoxidável ASTM A 351; Gr. CF8.; 150 lbs; V1200"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1201; Aço Carbono ASTM A 216 Gr. WCB.; V1202; Ferro Fundido ASTM A 126.; V1203"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Buna N (NBR); Neoprene; Hypalon; Viton; Etileno Propileno"
          }
        ]
      },
      {
        "title": "(EPDM)",
        "rows": [
          {
            "label": "Dados",
            "value": "Silicone; Metal / Metal; Acionamentos; Alavanca; Caixa de Redução; Atuador Pneumático; Atuador Elétrico; Atuador Hidráulico"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Haste; 2 - Corpo; 3 - Sede; 4 - Disco"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo da válvula;; 3.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversões;; 4.; Veja recomendação; para utilização das; válvulas mais usuais;; 5.; Viton&reg; é marca registrada; da Du Pont;; 6.; Neoprene&reg; é marca registrada; 7.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      },
      {
        "title": "Extremidades Wafer",
        "rows": [
          {
            "label": "Dados",
            "value": "Corpo Tipo Lug"
          }
        ]
      },
      {
        "title": "Construção",
        "rows": [
          {
            "label": "Dados",
            "value": "estreita;; Corpo Monobloco; Tipo Lug;; Facilmente desmontável para; manutenção;; Indicada para aplicações; genéricas e agressivos por corrosão,; abrasão, ou com sólidos; em suspensão;; Ideal para instalação; em fim de linha;"
          }
        ]
      },
      {
        "title": "Construção conforme normas:",
        "rows": [
          {
            "label": "Dados",
            "value": "- DIN; 2501ND6;; 2501ND10;"
          }
        ]
      },
      {
        "title": "- ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 150lbs;; - Outras."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Borboleta, tipo wafer, corpo em; Aço Inoxidável ASTM A 351; Gr. CF8.; 150 lbs; V1200"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1201; Aço Carbono ASTM A 216 Gr. WCB.; V1202; Ferro Fundido ASTM A 126.; V1203"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Buna N (NBR); Neoprene; Hypalon; Viton; Etileno Propileno"
          }
        ]
      },
      {
        "title": "(EPDM)",
        "rows": [
          {
            "label": "Dados",
            "value": "Silicone; Metal / Metal; Acionamentos; Alavanca; Caixa de Redução; Atuador Pneumático; Atuador Elétrico; Atuador Hidráulico"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Haste; 2 - Corpo; 3 - Sede; 4 - Disco"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo da válvula;; 3.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversões;; 4.; Veja recomendação; para utilização das; válvulas mais usuais;; 5.; Viton&reg; é marca registrada; da Du Pont;; 6.; Neoprene&reg; é marca registrada; 7.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      },
      {
        "title": "Extremidades Wafer",
        "rows": [
          {
            "label": "Dados",
            "value": "Corpo Flangeado"
          }
        ]
      },
      {
        "title": "Construção",
        "rows": [
          {
            "label": "Dados",
            "value": "estreita;; Corpo Monobloco; Flangeado;; Facilmente desmontável para; manutenção;; Indicada para aplicações; genéricas e agressivos por corrosão,; abrasão, ou com sólidos; em suspensão;"
          }
        ]
      },
      {
        "title": "Construção conforme normas:",
        "rows": [
          {
            "label": "Dados",
            "value": "- DIN; 2501ND6;; 2501ND10;"
          }
        ]
      },
      {
        "title": "- ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 150lbs;; - Outras."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Borboleta, tipo wafer, corpo em; Aço Inoxidável ASTM A 351; Gr. CF8.; 150 lbs; V1200"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1201; Aço Carbono ASTM A 216 Gr. WCB.; V1202; Ferro Fundido ASTM A 126.; V1203"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Buna N (NBR); Neoprene; Hypalon; Viton; Etileno Propileno"
          }
        ]
      },
      {
        "title": "(EPDM)",
        "rows": [
          {
            "label": "Dados",
            "value": "Silicone; Metal / Metal; Acionamentos; Alavanca; Caixa de Redução; Atuador Pneumático; Atuador Elétrico; Atuador Hidráulico"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Haste; 2 - Corpo; 3 - Sede; 4 - Disco"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo da válvula;; 3.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversões;; 4.; Veja recomendação; para utilização das; válvulas mais usuais;; 5.; Viton&reg; é marca registrada; da Du Pont;; 6.; Neoprene&reg; é marca registrada; 7.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      }
    ]
  },
  "valvulas-val-descarga-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_descarga.html",
    "sourcePages": [
      {
        "title": "Valvula Descarga de Caldeira",
        "url": "http://www.valaco.com.br/produtos/val_descarga.html"
      }
    ],
    "summary": "Vedação; plana tipo corrediça;; Flanges pelo padrão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Vedação; plana tipo corrediça;; Flanges pelo padrão"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 300 lbs sem furo;; Pode ser fornecida; com furação padrão:"
          }
        ]
      },
      {
        "title": "- ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 150 lbs;; B 16.5 300 lbs;; - DIN; PN 16;; PN 40;; Corpo em Aço Carbono ASTM"
          }
        ]
      },
      {
        "title": "A 216 Gr. WCB.",
        "rows": [
          {
            "label": "Dados",
            "value": "Acionamento manual por alavanca,; podendo ser fornecida com atuador pneumático."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - Classe 150/300; lbs; A 400°C; 300 lbs/pol²"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; de Descarga de Caldeira, corpo em; Aço Carbono ASTM A 216 Gr. WCB,; flange padrão ANSI; B 16.5.; 300 lbs; V2500"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Outras Ligas; Sob Consulta"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Alavanca; 2 - Preme-gaxeta; 3 - Haste; 4 - Gaxeta; 5 - Castelo; 6 - Corpo; 7 - Mola; 8 - Contra-Sede; 9 - Anel (sede)"
          }
        ]
      }
    ]
  },
  "valvulas-val-diafragma-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_diafragma.html",
    "sourcePages": [
      {
        "title": "Valvula Diafragma Tipo A",
        "url": "http://www.valaco.com.br/produtos/val_diafragma_tpa.html"
      },
      {
        "title": "Valvula Diafragma Tipo R",
        "url": "http://www.valaco.com.br/produtos/val_diafragma_tpr.html"
      }
    ],
    "summary": "Simples funcionamento;; Menor tempo de Manutenção;; Evita contaminação do; fluído tanto com a atmosféra; quanto com o lubrificante;; Estanqueidade absoluta;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Simples funcionamento;; Menor tempo de Manutenção;; Evita contaminação do; fluído tanto com a atmosféra; quanto com o lubrificante;; Estanqueidade absoluta;"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 ou DIN; 2545 ou Roscada ( BSP; / NPT; );; Pode ser fornecida com revestimento; especial;; Acionamento por volante ou atuador pneumático."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Diafragma, tipo \"A\", flangeada,; corpo em; Aço Inoxidável ASTM A 351; Gr. CF8.; 150 lbs; V1408"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1409; Aço Carbono ASTM A 216 Gr. WCB.; V1410; Ferro Fundido ASTM A 126.; V1411; Diafragma, tipo \"A\", com rosca,; V1412; V1413; V1414; V1415"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "de Revestimento; Borracha; Natural; Butil; Ebonite; Neoprene; Hypalon"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "Outros; Sob Consulta; Diafragma"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Volante; 2 - Haste; 3 - Compressor; 4 - Diafragma; 5 - Corpo"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja as Propriedades; dos Diafragmas;; 2.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo;; 3.; Veja Resistência; à Corrosão dos materiais; do corpo da válvula e vedações;; 4.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversões;; 5.; Veja recomendação; para utilização das; válvulas mais usuais;; 6.; Viton&reg; é marca registrada; da Du Pont;; 7.; Neoprene&reg; é marca registrada; 8.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Simples funcionamento;; Menor tempo de Manutenção;; Evita contaminação do; fluído tanto com a atmosféra; quanto com o lubrificante;; Estanqueidade absoluta;"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 ou DIN; 2545 ou Roscada ( BSP; / NPT; );; Pode ser fornecida com revestimento; especial;; Acionamento por volante ou atuador pneumático."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Diafragma, tipo \"R\", flangeada,; corpo em; Aço Inoxidável ASTM A 351; Gr. CF8.; 150 lbs; V1400"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1401; Aço Carbono ASTM A 216 Gr. WCB.; V1402; Ferro Fundido ASTM A 126.; V1403; Diafragma, tipo \"R\", com rosca,; V1404; V1405; V1406; V1407"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "de Revestimento; Borracha; Natural; Butil; Ebonite; Neoprene; Hypalon"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "Outros; Sob Consulta; Diafragma"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Volante; 2 - Haste; 3 - Compressor; 4 - Diafragma; 5 - Corpo"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja as Propriedades; dos Diafragmas;; 2.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo;; 3.; Veja Resistência; à Corrosão dos materiais; do corpo da válvula e vedações;; 4.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversões;; 5.; Veja recomendação; para utilização das; válvulas mais usuais;; 6.; Viton&reg; é marca registrada; da Du Pont;; 7.; Neoprene&reg; é marca registrada; 8.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      }
    ]
  },
  "valvulas-val-esfera-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_esfera.html",
    "sourcePages": [
      {
        "title": "Valvula Esfera Monobloco Rosca NPT e BSP",
        "url": "http://www.valaco.com.br/produtos/val_esfera_mon.html"
      },
      {
        "title": "Valvula Esfera Bipartida Flange ANSI DIN",
        "url": "http://www.valaco.com.br/produtos/val_esfera_bip.html"
      },
      {
        "title": "Válvulas de Esfera Tripartida",
        "url": "http://www.valaco.com.br/produtos/val_esfera_tri.html"
      }
    ],
    "summary": "Acionamento; por 1/4 de volta (90°);; Fluxo; direto, com mínima; perda de pressão;; Indicada; para bloqueio de fluxo para; água, óleo; ou gás;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "3"
      }
    ],
    "technicalSections": [
      {
        "title": "DE ESFERA - CORPO MONOBLOCO",
        "rows": [
          {
            "label": "Dados",
            "value": "Monobloco 400 WOG; Monobloco 1000 WOG"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Acionamento; por 1/4 de volta (90°);; Fluxo; direto, com mínima; perda de pressão;; Indicada; para bloqueio de fluxo para; água, óleo; ou gás;"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas (",
        "rows": [
          {
            "label": "Dados",
            "value": "BSP; / NPT; );; Haste à prova de; explosão.; Torque; extremamente baixo devido; suas sedes de dupla vedação."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - 400 WOG; Água,; óleo, gás, sem; golpes a 40&ordm;C; 21 bar; (300 lbf/pol²); de Serviço - 1000 WOG; 56 bar; (800 lbf/pol²)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo"
          }
        ]
      },
      {
        "title": "Classes",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Latão"
          }
        ]
      },
      {
        "title": "ASTM",
        "rows": [
          {
            "label": "Dados",
            "value": "B 124 C377; 400; WOG; Aço; Carbono ASTM"
          }
        ]
      },
      {
        "title": "A 216 Gr. WCB",
        "rows": [
          {
            "label": "Dados",
            "value": "1000; Inoxidável ASTM"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; de Esfera Monobloco, Passagem Plena, Corpo; em; Latão ASTM B 124 C377 cromado.; 400 WOG; V0800; de Esfera Monobloco, Passagem Reduzida,; Corpo em Aço; Inoxidável ASTM A 351 Gr. CF8.; 1000 WOG; V0801; Corpo em; Aço Inoxidável ASTM A 351; Gr. F8M.; V0802; Carbono ASTM A 216 Gr. WCB.; V0803; V0804"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Alavanca; 2 - Haste; 3 - Esfera; 4 - Anel (sede); 5 - Corpo; de Vedação"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "reforçado com fibra de vidro; mais grafite e molibidênio; mais carbono e grafite; Metal; da Esfera; Inoxidável ASTM A 351 Gr. CF8; Inoxidável ASTM A 351 Gr. CF8M"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do",
        "rows": [
          {
            "label": "Dados",
            "value": "corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Acionamento; por 1/4 de volta (90°);; Fluxo direto,; com mínima perda de pressão;; Flanges padrão ANSI; B 16.5 ou outros sob consulta;"
          }
        ]
      },
      {
        "title": "Face a Face padrão ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.10 ou DIN; 3202 F1 - PN10; Haste à; prova de explosão"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; de Esfera Bipartida, Passagem Plena, Corpo; em Aço; Inoxidável ASTM A 351 Gr. CF8.; 150 lbs; V0900; 300 lbs; V0901; 600 lbs; V0902; Inoxidável ASTM A 351 Gr. F8M.; V0903; V0904; V0905; Carbono ASTM A 216 Gr. WCB.; V0906; V0907; V0908; de Esfera Bipartida, Passagem Reduzida,; Corpo em Aço; V0909; V0910; V0911"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Cruzeta; 2 - Preme; Gaxeta; 3 - Gaxeta; 4 - Anel (sede); 5 - Esfera; 6 - Corpo; 7 - Mancal"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "de Vedação"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "reforçado com fibra de vidro; mais grafite e molibidênio; mais carbono e grafite; Metal; da Esfera; Aço; Inoxidável ASTM A 351 Gr. CF8; Inoxidável ASTM A 351 Gr. CF8M"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do",
        "rows": [
          {
            "label": "Dados",
            "value": "corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais.; 5.; Existem dois modelos de válvula para DN 6\".; Consulte nosso departamento de vendas"
          }
        ]
      },
      {
        "title": "Face (\"L\" - Em Milímetro)",
        "rows": [
          {
            "label": "Dados",
            "value": "para Válvulas de Esfera Bipartida modelo; Passagem Plena; Class.\\Diâm; (Pol.); 2\"; 2.1/2\"; 3\"; 4\"; 5\"; 6\"; 8\"; 10\"; 12\"; PN 10; 174; 186; 199; 224; 394; 457; 178; 191; 203; 229; 254; 267 / 394 (ver nota 5); 533; 610; 215; 241; 282; 305; 403; 502; 568; 648; 295; 330; 356; 432; 562; 660; 787; 841; Passagem Reduzida; 267; 292"
          }
        ]
      },
      {
        "title": "VÁLVULAS DE ESFERA",
        "rows": [
          {
            "label": "Dados",
            "value": "Extremidade: Rosca, SW e BW; Extremidade: Flanges Adaptados; Propriedades; Especificações"
          }
        ]
      }
    ]
  },
  "valvulas-val-esfera-bip-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_esfera_bip.html",
    "sourcePages": [
      {
        "title": "Valvula Esfera Bipartida Flange ANSI DIN",
        "url": "http://www.valaco.com.br/produtos/val_esfera_bip.html"
      }
    ],
    "summary": "Acionamento; por 1/4 de volta (90°);; Fluxo direto,; com mínima perda de pressão;; Flanges padrão ANSI; B 16.5 ou outros sob consulta;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Acionamento; por 1/4 de volta (90°);; Fluxo direto,; com mínima perda de pressão;; Flanges padrão ANSI; B 16.5 ou outros sob consulta;"
          }
        ]
      },
      {
        "title": "Face a Face padrão ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.10 ou DIN; 3202 F1 - PN10; Haste à; prova de explosão"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; de Esfera Bipartida, Passagem Plena, Corpo; em Aço; Inoxidável ASTM A 351 Gr. CF8.; 150 lbs; V0900; 300 lbs; V0901; 600 lbs; V0902; Inoxidável ASTM A 351 Gr. F8M.; V0903; V0904; V0905; Carbono ASTM A 216 Gr. WCB.; V0906; V0907; V0908; de Esfera Bipartida, Passagem Reduzida,; Corpo em Aço; V0909; V0910; V0911"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Cruzeta; 2 - Preme; Gaxeta; 3 - Gaxeta; 4 - Anel (sede); 5 - Esfera; 6 - Corpo; 7 - Mancal"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "de Vedação"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "reforçado com fibra de vidro; mais grafite e molibidênio; mais carbono e grafite; Metal; da Esfera; Aço; Inoxidável ASTM A 351 Gr. CF8; Inoxidável ASTM A 351 Gr. CF8M"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do",
        "rows": [
          {
            "label": "Dados",
            "value": "corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais.; 5.; Existem dois modelos de válvula para DN 6\".; Consulte nosso departamento de vendas"
          }
        ]
      },
      {
        "title": "Face (\"L\" - Em Milímetro)",
        "rows": [
          {
            "label": "Dados",
            "value": "para Válvulas de Esfera Bipartida modelo; Passagem Plena; Class.\\Diâm; (Pol.); 2\"; 2.1/2\"; 3\"; 4\"; 5\"; 6\"; 8\"; 10\"; 12\"; PN 10; 174; 186; 199; 224; 394; 457; 178; 191; 203; 229; 254; 267 / 394 (ver nota 5); 533; 610; 215; 241; 282; 305; 403; 502; 568; 648; 295; 330; 356; 432; 562; 660; 787; 841; Passagem Reduzida; 267; 292"
          }
        ]
      }
    ]
  },
  "valvulas-val-esfera-tri-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_esfera_tri.html",
    "sourcePages": [
      {
        "title": "Valvula Esfera corpo Tripartida NPT e BSP SW BW",
        "url": "http://www.valaco.com.br/produtos/val_esfera_tri_rscswbw.html"
      },
      {
        "title": "Valvula Esfera Tripartida Flanges Adaptados",
        "url": "http://www.valaco.com.br/produtos/val_esfera_tri_flg.html"
      }
    ],
    "summary": "Acionamento; por 1/4 de volta (90°);; Fluxo direto,; com mínima perda de pressão;; Indicada para; bloqueio de fluxo de diversos; líquidos, gases e vapores;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Acionamento; por 1/4 de volta (90°);; Fluxo direto,; com mínima perda de pressão;; Indicada para; bloqueio de fluxo de diversos; líquidos, gases e vapores;"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Roscada ( BSP; / NPT; );; - Para solda ( BW; / SW );; Haste à prova de explosão;"
          }
        ]
      },
      {
        "title": "Construção",
        "rows": [
          {
            "label": "Dados",
            "value": "tripartida facilitando a manutenção; sem a necessidade de desconectar; as extremidades da linha.; Pode ser fornecida com Flanges; Adaptados."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; de Esfera Tripartida, Passagem Plena, Corpo; em Aço; Inoxidável ASTM A 351 Gr. CF8.; 300 lbs; V1000; Inoxidável ASTM A 351 Gr. CF8M.; V1001; Carbono ASTM A 216 Gr. WCB.; V1002; em Bronze"
          }
        ]
      },
      {
        "title": "ASTM B 62 C836.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1003; em Latão"
          }
        ]
      },
      {
        "title": "ASTM B 124 C377.",
        "rows": [
          {
            "label": "Dados",
            "value": "V1004; de Esfera Tripartida, Passagem Reduzida,; Corpo em Aço; V1005; V1006; V1007; Corpo em Bronze; V1008; Corpo em Latão; V1009; 1000 WOG; V1022; V1023; V1024"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Alavanca; 2 - Haste; 3 - Esfera; 4 - Anel (sede); 5 - Corpo"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "de Vedação"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "reforçado com fibra de vidro; mais grafite e molibidênio; mais carbono e grafite; Metal; da Esfera; Aço; Inoxidável ASTM A 351 Gr. CF8; Inoxidável ASTM A 351 Gr. CF8M"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do",
        "rows": [
          {
            "label": "Dados",
            "value": "corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais;; 5.; Veja esta válvula com Flanges"
          }
        ]
      },
      {
        "title": "DE ESFERA - CORPO TRIPARTIDO",
        "rows": [
          {
            "label": "Dados",
            "value": "Modelo com flanges adaptados"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Acionamento; por 1/4 de volta (90°);; Fluxo direto,; com mínima perda de pressão;; Indicada para; bloqueio de fluxo de diversos; líquidos, gases e vapores;"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5"
          }
        ]
      },
      {
        "title": "Face a Face (L)",
        "rows": [
          {
            "label": "Dados",
            "value": "padrão ANSI; B 16.10;; Haste à prova de explosão;"
          }
        ]
      },
      {
        "title": "Construção",
        "rows": [
          {
            "label": "Dados",
            "value": "tripartida facilitando a manutenção; sem a necessidade de desconectar; as extremidades da linha."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "do Flange; Figura; de Esfera Tripartida, Passagem Plena, Corpo; em Aço; Inoxidável ASTM A 351 Gr. CF8.; 150 lbs; V1010; 300 lbs; V1011; Inoxidável ASTM A 351 Gr. CF8M.; V1012; V1013; Carbono ASTM A 216 Gr. WCB.; V1014; V1015; de Esfera Tripartida, Passagem Reduzida,; Corpo em Aço; V1016; V1017; V1018; V1019; V1020; V1021"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Alavanca; 2 - Haste; 3 - Esfera; 4 - Anel (sede); 5 - Corpo"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "de Vedação"
          }
        ]
      },
      {
        "title": "PTFE",
        "rows": [
          {
            "label": "Dados",
            "value": "reforçado com fibra de vidro; mais grafite e molibidênio; mais carbono e grafite; Metal; da Esfera; Aço; Inoxidável ASTM A 351 Gr. CF8; Inoxidável ASTM A 351 Gr. CF8M"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do",
        "rows": [
          {
            "label": "Dados",
            "value": "corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais.; 5.; Veja com Extremidade; em Rosca, SW ou BW."
          }
        ]
      },
      {
        "title": "Face",
        "rows": [
          {
            "label": "Dados",
            "value": "a Face (\"L\" - Em Milímetro); para Válvulas de Esfera Bipartida modelo; Passagem Plena; Class.\\Diâm; (Pol.); 1/2\"; 3/4\"; 1\"; 1.1/4\"; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 4\"; 108; 117; 127; 140; 165; 178; 191; 203; 229; 138; 152; 216; 241; 283; 305"
          }
        ]
      },
      {
        "title": "Face (\"L\" - Em Milímetro)",
        "rows": [
          {
            "label": "Dados",
            "value": "Passagem Reduzida"
          }
        ]
      }
    ]
  },
  "valvulas-val-gaveta-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_gaveta.html",
    "sourcePages": [
      {
        "title": "Valvulas Gaveta Haste Ascendente",
        "url": "http://www.valaco.com.br/produtos/val_gaveta_ha.html"
      },
      {
        "title": "Valvulas Gaveta Haste Fixa",
        "url": "http://www.valaco.com.br/produtos/val_gaveta_hf.html"
      },
      {
        "title": "Valvula Gaveta Fecho Rápido em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_gaveta_fr_brz.html"
      }
    ],
    "summary": "Em Aço Forjado; • Em; Aço Fundido; Bronze; Ferro Fundido",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "3"
      }
    ],
    "technicalSections": [
      {
        "title": "Valvulas Gaveta Haste Ascendente",
        "rows": [
          {
            "label": "Dados",
            "value": "Em Aço Forjado; • Em; Aço Fundido; Bronze; Ferro Fundido"
          }
        ]
      },
      {
        "title": "Valvulas Gaveta Haste Fixa",
        "rows": [
          {
            "label": "Dados",
            "value": "• Em; Aço Fundido; Bronze; Ferro Fundido"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M067"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT; Gaxeta em PTFE;; Tampa roscada internamente ao corpo;; Diâmetro nominal de 1/4\" à; 4\";; Na medida de 4\" a pressão; máxima é de 100 WOG."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Água,; óleo e gás sem Choque; 200 PSI (14 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "ASTM B62 C836",
        "rows": [
          {
            "label": "Dados",
            "value": "200 WOG; / PN 16"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      }
    ]
  },
  "valvulas-val-globo-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_globo.html",
    "sourcePages": [
      {
        "title": "Valvula Globos em Aço Forjado",
        "url": "http://www.valaco.com.br/produtos/val_globo_afj.html"
      },
      {
        "title": "Valvula Globo em aço Aço Fundido",
        "url": "http://www.valaco.com.br/produtos/val_globo_afd.html"
      },
      {
        "title": "Valvula Globo em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_globo_brz.html"
      },
      {
        "title": "Valvula Globo » Ferro Fundido",
        "url": "http://www.valaco.com.br/produtos/val_globo_ff.html"
      },
      {
        "title": "Valvula Globo Abertura Rápida em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_globo_ar_brz.html"
      },
      {
        "title": "Valvula Globo tipo Aerodinâmica",
        "url": "http://www.valaco.com.br/produtos/val_globo_aero.html"
      },
      {
        "title": "Valvula Globo Oblíqua em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_globo_ob_brz.html"
      },
      {
        "title": "Valvula Globo Ponta de Agulha",
        "url": "http://www.valaco.com.br/produtos/val_globo_agulha.html"
      }
    ],
    "summary": "• Extremidade:; Rosca, SW e BW; Extremidade: Flanges Adaptados",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "8"
      }
    ],
    "technicalSections": [
      {
        "title": "Valvula Globos em Aço Forjado",
        "rows": [
          {
            "label": "Dados",
            "value": "• Extremidade:; Rosca, SW e BW; Extremidade: Flanges Adaptados"
          }
        ]
      },
      {
        "title": "Face a Face (L) conforme",
        "rows": [
          {
            "label": "Dados",
            "value": "norma ANSI; B 16.10;; Flanges padrão; B 16.5 com ressalto, lisos ou outras"
          }
        ]
      },
      {
        "title": "faces",
        "rows": [
          {
            "label": "Dados",
            "value": "sob consulta;; Fecho cônico, garantindo total; estanqueidade;; Haste com rosca externa e volante ascendentes;; Também disponível com"
          }
        ]
      },
      {
        "title": "extremidades biseladas para solda de topo",
        "rows": [
          {
            "label": "Dados",
            "value": "( BW )."
          }
        ]
      },
      {
        "title": "Dimensionada de forma a prover a menor",
        "rows": [
          {
            "label": "Dados",
            "value": "perda de carga com reforço nos; pontos de maior solicitação,; proporcionando boa duração; e resistência à pressão."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - Classe 150; lbs; Vapor; a 297°C; 10 bar (150 lbf/pol²); Água, óleo; e gás a 40°C; 19 bar (285 lbf/pol²); de Serviço - Classe 300"
          }
        ]
      },
      {
        "title": "A 216 Gr. WCB",
        "rows": [
          {
            "label": "Dados",
            "value": "a 449°C; 20,7 bar (300 lbf/pol²); 51,0 bar (740 lbf/pol²)"
          }
        ]
      },
      {
        "title": "A 351 Gr. CF8",
        "rows": [
          {
            "label": "Dados",
            "value": "a 560°C; 49,6 bar (720 lbf/pol²)"
          }
        ]
      },
      {
        "title": "A 351 Gr. CF8M",
        "rows": [
          {
            "label": "Dados",
            "value": "a 607°C; de Serviço - Classe 600; 41,3 bar (600 lbf/pol²); 102,0 bar (1.480; lbf/pol²); 99,3 bar (1.440"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Figura; Globo em; Aço Inoxidável ASTM A 351; Gr. CF8, haste e volante ascendentes; e flanges padrão ANSI; B 16.5.; 150 lbs; V0300; 300 lbs; V0301; 600 lbs; V0302; Gr. CF8M, haste e volante ascendentes; V0303; V0304; V0305; Aço Carbono ASTM A 216 Gr. WCB,; haste e volante ascendentes e flanges padrão; V0306; V0307; V0308"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Bronze; Stellite; Ligas Níquel; - Cobre; Monel; Outras Ligas; Sob Consulta"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Porca da Haste; 8 - Contra sede; 9 - Anel (sede); 10 - Corpo"
          }
        ]
      },
      {
        "title": "Face",
        "rows": [
          {
            "label": "Dados",
            "value": "a Face (L) - Em Milímetro; Class.\\Diâm; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 4\"; 5\"; 6\"; 8\"; 10\"; 12\"; 165; 203; 216; 241; 292; 356; 406; 495; 622; 699; 229; 267; 318; 400; 445; 559; 711; 330; 432; 660; 787"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M001; / M004 / M005"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT"
          }
        ]
      },
      {
        "title": "Construção de acordo com",
        "rows": [
          {
            "label": "Dados",
            "value": "a norma NBR; 8466;; Gaxeta em PTFE;; Tampa roscada internamente;; Diâmetro nominal de 1/4\"; a 4\";; Na medida de 4\" a tampa é; aparafusada ao corpo;; Para as figs. 001 e 004, os obturadores; e porta discos são integrais à; haste.; M004; M005; Disco cônico; Disco renovável; Disco e sede em; Inox."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor; Saturado sem Choque; 150 PSI (10 Bar); Água, óleo; e gás sem Choque; 300 PSI (20 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo, Tampa e Porca de União"
          }
        ]
      },
      {
        "title": "Classes de Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "Bronze"
          }
        ]
      },
      {
        "title": "150 S (300 WOG )",
        "rows": [
          {
            "label": "Dados",
            "value": "/ PN 20; M006; / M009 / M010; Castelo com porca de união;; à 2\".; M009; M010; 200 PSI (14 Bar); 400 PSI (28 Bar)"
          }
        ]
      },
      {
        "title": "ASTM B61 C922",
        "rows": [
          {
            "label": "Dados",
            "value": "400 WOG; / PN 25; M011; / M012; à 4\";; Para a fig. 011, nas medidas de 1/4\"; e 3/8\" o porta disco é integral; à haste.; Fig. M011; Fig. M012; e sede em aço inox.; aço inox.; 300 PSI (9 Bar); 600 PSI (14 Bar)"
          }
        ]
      },
      {
        "title": "300 S (600 WOG )",
        "rows": [
          {
            "label": "Dados",
            "value": "/ PN 50; M013; / M014 / M015"
          }
        ]
      },
      {
        "title": "Extremidades Flangeadas",
        "rows": [
          {
            "label": "Dados",
            "value": "Flanges de acordo com a norma ANSI; B16.24;; Nas medidas de 4\" a tampa é; Diâmetro nominal de 1/2\"; à 4\".; M014; M015; 225 PSI (15 Bar)"
          }
        ]
      },
      {
        "title": "150 S (225 WOG )",
        "rows": [
          {
            "label": "Dados",
            "value": "M101; / M104; Tampa roscada internamente ao corpo;; Diâmetro nominal de 1/4\" à; 3\";; Nas medidas de 1/4\" e 3/8\" os; obturadores e porta discos são integrais; a haste.; Fig. M101; Fig. M104; Válvula globo; com disco cônico.; com disco renovável;; Vapor Saturado sem; Choque; 125 PSI (9 Bar); do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      },
      {
        "title": "125 S (200 WOG )",
        "rows": [
          {
            "label": "Dados",
            "value": "/ PN 16"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      },
      {
        "title": "Face a Face (L) conforme",
        "rows": [
          {
            "label": "Dados",
            "value": "norma ANSI; B 16.10;; Flanges padrão; B 16.1;; Fecho cônico, garantindo total; estanqueidade;; Haste com rosca externa e volante ascendentes;"
          }
        ]
      },
      {
        "title": "Dimensionada de forma a prover a menor",
        "rows": [
          {
            "label": "Dados",
            "value": "perda de carga com reforço nos; pontos de maior solicitação,; proporcionando boa duração; e resistência à pressão."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - Classe 125; lbs; Vapor; 8,6 bar (125 lbf/pol²); Água, óleo; e gás a 40°C; 13,8 bar (200 lbf/pol²)"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Figura; Globo em; Ferro Fundido ASTM A 126, haste e volante; ascendentes e flanges padrão ANSI; B 16.5.; 125 lbs; V0309"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Bronze; Stellite; Ligas Níquel; - Cobre; Monel; Outras Ligas; Sob Consulta"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Porca da Haste; 8 - Contra sede; 9 - Anel (sede); 10 - Corpo"
          }
        ]
      },
      {
        "title": "Face",
        "rows": [
          {
            "label": "Dados",
            "value": "a Face (L) - Em Milímetro; Class.\\Diâm; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 4\"; 5\"; 6\"; 8\"; 10\"; 12\"; 165; 203; 216; 241; 292; 330; 356; 495; 622; 699"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M614"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT; Gaxeta em PTFE;; Tampa roscada internamente ao corpo;; Diâmetro nominal de 1/2\" à; 1\";"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Água,; óleo e gás sem Choque; 125 PSI (9 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "125 S (200 WOG )",
        "rows": [
          {
            "label": "Dados",
            "value": "/ PN 16"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      },
      {
        "title": "Dimensionamento",
        "rows": [
          {
            "label": "Dados",
            "value": "para proporcionar mínima perda; de carga;; Vedação; semelhante à da válvula; globo, permitindo aplicações; equivalentes, porém em condições; mais severas;"
          }
        ]
      },
      {
        "title": "Face a Face (L)",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme norma DIN; 3300;; Flanges padrão DIN; 2545;; A pedido, poderá ser fornecida; com mecanismo de não retorno."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço - Classe PN; 16; Vapor; a 300°C sem Choque; 10 kg/cml²; Água, óleo; e gás a 120°C sem Choque; 16 kg/cm²; 40; a 400°C sem Choque; 21 kg/cml²; 40 kg/cm²"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Figura; Globo tipo Aerodinâmica, volante e; haste ascendente, corpo em; Aço Inoxidável ASTM A 351; Gr. CF8, flange padrão DIN; 2545.; PN 40; V0400; Gr. CF8M, flange padrão DIN; V0401; Aço; Carbono ASTM A 216 Gr. WCB, flange padrão; DIN; V0402; Ferro; Fundido ASTM A 126, flange padrão; PN 16; V0403"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "da Sede; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Bronze; Ferro Fundido; Outras Ligas; Sob Consulta"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Porca da base; 8 - Junta; 9 - Porca da Contra-Sede; 10 - Contra-Sede; 11 - Anel (sede); 12 - Corpo"
          }
        ]
      },
      {
        "title": "Face",
        "rows": [
          {
            "label": "Dados",
            "value": "a Face (L) - Em Milímetro; Class.\\Diâm; 13; 20; 25; 32; 50; 65; 80; 100; 120; 150; 200; 250; 300; 130; 160; 180; 230; 290; 310; 350; 400; 480; 600; 730; 850"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M023"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT; Gaxeta em PTFE;; Tampa roscada internamente ao corpo;; Diâmetro nominal de 1/4\" à; 2\";; Nas medidas de 1/4\" e 3/8\",; os porta discos são integrais à; haste;; Na medida de 4\" a tampa é; aparafusada ao corpo."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor saturado sem; Choque; 150 PSI (10 Bar); Água,; óleo e gás sem Choque; 300 PSI (20 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "150 S (300 WOG )",
        "rows": [
          {
            "label": "Dados",
            "value": "/ PN 20"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      },
      {
        "title": "Valvula Globo Ponta de Agulha",
        "rows": [
          {
            "label": "Dados",
            "value": "• Em; Aço Forjado; Aço Laminado; Bronze"
          }
        ]
      }
    ]
  },
  "valvulas-val-guilhotina-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_guilhotina.html",
    "sourcePages": [
      {
        "title": "Valvula Guilhotina",
        "url": "http://www.valaco.com.br/produtos/val_guilhotina.html"
      }
    ],
    "summary": "Ideal para fluidos líquidos,; sólidos e gasosos como:; - água;; - massa;; - pasta;; - granulado;; - pó, etc;; Castelo roscado;; Acionamento manual por Volante e haste; ascendentes, podendo ser fornecida com; atuador p...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Extremidades wafer;",
        "rows": [
          {
            "label": "Dados",
            "value": "Ideal para fluidos líquidos,; sólidos e gasosos como:; - água;; - massa;; - pasta;; - granulado;; - pó, etc;; Castelo roscado;; Acionamento manual por Volante e haste; ascendentes, podendo ser fornecida com; atuador pneumático ou caixa redutora; incorporada;; Corpo bipartido, atendendo as medidas; dos flanges ANSI; B 16.5 classe 150lbs e DIN; PN 10;; Pode ser fornecido com faca; passante, que é indicado para; situações em que quer-se; evitar sedimentação na sede; da válvula."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; Guilhotina em; Aço; Inoxidável ASTM A 351 Gr. CF8.; 150 lbs / PN 10; V1100; Inoxidável ASTM A 351 Gr. CF8M.; V1101; Ferro; Fundido ASTM A 126.; V1102; Inoxidável ASTM A 351 Gr. CF8; com faca passante.; V1103; Inoxidável ASTM A 351 Gr. CF8M; V1104; Fundido ASTM A 126 com faca passante.; V1105"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Volante; 2 - Suporte; 3 - Preme-gaxeta; 4 - Corpo; 5 - Faca; Aço Carbono; Aço Inoxidável"
          }
        ]
      },
      {
        "title": "(AISI 304,",
        "rows": [
          {
            "label": "Dados",
            "value": "316; e 410 ); Outras Ligas Sob Consulta; *O modelo de faca passante é indicado; para casos como: polpa de minério, terra; úmida, serragem de madeira etc.; *Tipo Faca Passante"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo; da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo da válvula;; 3.; Para converter unidades de temperatura e"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas; mais usuais."
          }
        ]
      }
    ]
  },
  "valvulas-val-hidrante-brz-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_hidrante_brz.html",
    "sourcePages": [
      {
        "title": "Valvula Para Hidrante em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_hidrante_brz.html"
      }
    ],
    "summary": "Gaxeta em PTFE;; Tampa roscada internamente ao corpo;; Rosca de entrada BSP; ou NPT; e rosca de saída NBR; 5667 ou ANSI",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M091"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "Gaxeta em PTFE;; Tampa roscada internamente ao corpo;; Rosca de entrada BSP; ou NPT; e rosca de saída NBR; 5667 ou ANSI"
          }
        ]
      },
      {
        "title": "B26 (NSFHT)",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro nominal de 2.1/2\"."
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "ASTM B62 C836",
        "rows": [
          {
            "label": "Dados",
            "value": "300 W; M094; Disco de Buna N;"
          }
        ]
      },
      {
        "title": "Classe de Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "200 W; M095"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      }
    ]
  },
  "valvulas-val-macho-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_macho.html",
    "sourcePages": [
      {
        "title": "Válvulas Macho » 2 Vias",
        "url": "http://www.valaco.com.br/produtos/val_macho_2vias.html"
      },
      {
        "title": "Válvulas Macho » 3 Vias",
        "url": "http://www.valaco.com.br/produtos/val_macho_3vias.html"
      }
    ],
    "summary": "• Em; Aço Fundido; Ferro Fundido; Bronze",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "Válvulas Macho » 2 Vias",
        "rows": [
          {
            "label": "Dados",
            "value": "• Em; Aço Fundido; Ferro Fundido; Bronze"
          }
        ]
      },
      {
        "title": "Válvulas Macho » 3 Vias",
        "rows": [
          {
            "label": "Dados",
            "value": "• Em; Aço Fundido; Ferro Fundido"
          }
        ]
      }
    ]
  },
  "valvulas-val-mangote-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_mangote.html",
    "sourcePages": [
      {
        "title": "Valvula Mangote » Corpo Aberto",
        "url": "http://www.valaco.com.br/produtos/val_mangote_ca.html"
      },
      {
        "title": "Valvula Mangote » Corpo Fechado",
        "url": "http://www.valaco.com.br/produtos/val_mangote_cf.html"
      }
    ],
    "summary": "Passagem livre sem obstruções;; Fechamento positivo; mesmo sobre sólidos;; Ausência; de gaxeta;; Baixíssima; perda de carga;; Manutenção rápida; e simples;; Corpo em Ferro Fundido ASTM; A 126;; Suporta pressões até 17...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Passagem livre sem obstruções;; Fechamento positivo; mesmo sobre sólidos;; Ausência; de gaxeta;; Baixíssima; perda de carga;; Manutenção rápida; e simples;; Corpo em Ferro Fundido ASTM; A 126;; Suporta pressões até 17kg/cm²,; podendo variar conforme o diâmetro; nominal;; Acionamento por volante."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Mangote, corpo aberto em Ferro; Fundido ASTM A 126, flangeda.; 150 lbs; V1301"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Mangote; Borracha; Natural; Até 24\"; Neoprene; Até 8\"; Hypalon; Butil; Sob Consulta"
          }
        ]
      },
      {
        "title": "EPDM",
        "rows": [
          {
            "label": "Dados",
            "value": "Buna N; Outros"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais;; 5.; Neoprene&reg; é marca registrada; da Du Pont;; 6.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Volante; 2 - Haste; 3 - Compressor; 4 - Mangote; 5 - Corpo"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Passagem livre sem obstruções;; Fechamento positivo; mesmo sobre sólidos;; Ausência; de gaxeta;; Baixíssima; perda de carga;; Manutenção rápida; e simples;; Corpo em Ferro Fundido ASTM; A 126;; Suporta pressões até 17kg/cm²,; podendo variar conforme o diâmetro; nominal;; Acionamento por volante."
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Figura; Mangote, corpo aberto em Ferro; Fundido ASTM A 126, flangeda.; 150 lbs; V1300"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Mangote; Borracha; Natural; Até 8\"; Neoprene; Hypalon; Butil; Sob Consulta"
          }
        ]
      },
      {
        "title": "EPDM",
        "rows": [
          {
            "label": "Dados",
            "value": "Buna N; Outros"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da válvula;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das; válvulas; mais usuais;; 5.; Neoprene&reg; é marca registrada; da Du Pont;; 6.; Hypalon&reg; é marca registrada; da Du Pont."
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Volante; 2 - Haste; 3 - Compressor; 4 - Mangote; 5 - Corpo"
          }
        ]
      }
    ]
  },
  "valvulas-val-passagem-reta-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_passagem_reta.html",
    "sourcePages": [
      {
        "title": "Valvula Passagem Reta em aço laminado",
        "url": "http://www.valaco.com.br/produtos/val_passagem_reta.html"
      }
    ],
    "summary": "conforme ANSI ou DIN.; Construídas; de tubos e peças usinadas de; barras sólidas, não estão; sujeitas a falhas ou porosidades;; Fluxo direto, com; mínima perda de pressão;; Ideais para óleo; térmico, vapor saturado e ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para Solda; de Topo."
          }
        ]
      },
      {
        "title": "Extremidades flangeadas",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme ANSI ou DIN.; Construídas; de tubos e peças usinadas de; barras sólidas, não estão; sujeitas a falhas ou porosidades;; Fluxo direto, com; mínima perda de pressão;; Ideais para óleo; térmico, vapor saturado e superaquecido,; ar comprimido e outras aplicações; que requerem válvulas superiores;; Podem ser fornecidas; com extremidades para solda de topo; ou flanges norma ANSI ou DIN."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor; até 425°C; 28,3; bar; (410 lbf/pol²); Água, óleo,; gás,; sem golpes a 40&ordm;C; 51,1 bar; (740 lbf/pol²)"
          }
        ]
      },
      {
        "title": "Classes",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Normas; dos Flanges; Aço; Carbono; Laminado SAE; 1020; 300 lbs"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5; ou DIN; Inoxidável Laminado AISI; 304; 316"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; Solda; (BW); Flange; 150lbs; 300lbs; Angular, volante e haste ascendente,; corpo em Aço; Inoxidável Laminado AISI 304; V2418; V2421; V2422; Inoxidável Laminado AISI 316; V2419; V2423; V2424; Carbono Laminado SAE 1020; V2420; V2425; V2426"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Volante; 3 - Haste; 4 - Castelo; 5 - Preme-gaxeta; 6 - Gaxeta; 7 - Corpo; 8 - Porca da contra-sede; 9 - Contra-sede; 10 - Anel (sede)"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; À pedido, esta válvula; poderá ser fornecida com:; • acionamento pneumático;; • camisa de vapor;; volante fixo e haste; ascendente;; • 3; vias;; 2.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 3.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do corpo da válvula;",
        "rows": [
          {
            "label": "Dados",
            "value": "4.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversão; de Medidas;; 5.; Veja recomendação; para utilização; das válvulas mais usuais."
          }
        ]
      }
    ]
  },
  "valvulas-val-redutora-pressao-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_redutora_pressao.html",
    "sourcePages": [
      {
        "title": "Válvulas Redutora de Pressão",
        "url": "http://www.valaco.com.br/produtos/val_redutora_pressao.html"
      }
    ],
    "summary": "Para obter informações sobre; válvulas redutora de pressão, entre em contato; com nosso departamento comercial através do telefone; 031 3361-6106 ou por e-mail: vendas@valaco.com.br.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ENTRE EM CONTATO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para obter informações sobre; válvulas redutora de pressão, entre em contato; com nosso departamento comercial através do telefone; 031 3361-6106 ou por e-mail: vendas@valaco.com.br."
          }
        ]
      }
    ]
  },
  "valvulas-val-retencao-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_retencao.html",
    "sourcePages": [
      {
        "title": "Válvulas Retenção » Fundo de Poço",
        "url": "http://www.valaco.com.br/produtos/val_retencao_fundo.html"
      },
      {
        "title": "Válvulas Retenção Horizontal",
        "url": "http://www.valaco.com.br/produtos/val_retencao_horizontal.html"
      },
      {
        "title": "Valvula Retenção Passagem Reta",
        "url": "http://www.valaco.com.br/produtos/val_retencao_passagem_reta.html"
      },
      {
        "title": "Valvula Retenção Portinhola",
        "url": "http://www.valaco.com.br/produtos/val_retencao_portinhola.html"
      },
      {
        "title": "Valvula Retenção Tipo Wafer",
        "url": "http://www.valaco.com.br/produtos/val_retencao_wafer.html"
      },
      {
        "title": "Valvula Retenção Vertical em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_retencao_vertical_brz.html"
      }
    ],
    "summary": "Construídas; de tubos e peças usinadas de; barras sólidas, não estão; sujeitas a falhas ou porosidades;; Fluxo direto, com; mínima perda de pressão;; Ideais para óleo; térmico, vapor saturado e superaquecido,; ar comp...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "Válvulas Retenção » Fundo de Poço",
        "rows": [
          {
            "label": "Dados",
            "value": "de Poço; • Em; Bronze; Ferro Fundido"
          }
        ]
      },
      {
        "title": "Válvulas Retenção Horizontal",
        "rows": [
          {
            "label": "Dados",
            "value": "• Tipo; Aerodinâmica; Pistão"
          }
        ]
      },
      {
        "title": "Valvula Retenção Passagem Reta",
        "rows": [
          {
            "label": "Dados",
            "value": "Reta"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para Solda; de Topo."
          }
        ]
      },
      {
        "title": "Extremidades flangeadas",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme ANSI ou DIN."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Construídas; de tubos e peças usinadas de; barras sólidas, não estão; sujeitas a falhas ou porosidades;; Fluxo direto, com; mínima perda de pressão;; Ideais para óleo; térmico, vapor saturado e superaquecido,; ar comprimido e outras aplicações; que requerem válvulas superiores;; Podem ser fornecidas; com extremidades para solda de topo; ou flanges norma ANSI ou DIN."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor; até 425°C; 28,3; bar (410 lbf/pol²); Água, óleo,; gás, sem golpes a 40&ordm;C; 51,1 bar (740 lbf/pol²)"
          }
        ]
      },
      {
        "title": "Classes",
        "rows": [
          {
            "label": "Dados",
            "value": "de; Normas; dos Flanges; Aço; Carbono Laminado SAE; 1020; 300 lbs"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5 ou DIN; Inoxidável Laminado AISI; 304; 316"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; Solda; (BW); Flange; 150lbs; 300lbs; de Retenção Passagem Reta,; corpo em Aço; Inoxidável Laminado AISI 304; V2409; V2412; V2413; Inoxidável Laminado AISI 316; V2410; V2414; V2415; Carbono Laminado SAE 1020; V2411; V2416; V2417"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Porca sextavada; 2 - Tampa; 3 - Junta; 4 - Corpo; 5 - Pistão; 6 - Anel (sede)"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos"
          }
        ]
      },
      {
        "title": "materiais do corpo da válvula;",
        "rows": [
          {
            "label": "Dados",
            "value": "3.; Para converter unidades de temperatura; e pressão acesse a seção; de Conversão; de Medidas;; 4.; Veja recomendação; para utilização; das válvulas mais usuais."
          }
        ]
      },
      {
        "title": "Valvula Retenção Portinhola",
        "rows": [
          {
            "label": "Dados",
            "value": "• Em; Aço Fundido; Ferro Fundido; Bronze"
          }
        ]
      },
      {
        "title": "Valvula Retenção Tipo Wafer",
        "rows": [
          {
            "label": "Dados",
            "value": "Wafer; • Disco; • Dupla; Portinhola; • Portinhola; (Uniflap)"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M447; / M448"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT"
          }
        ]
      },
      {
        "title": "Construção de acordo com",
        "rows": [
          {
            "label": "Dados",
            "value": "a norma NBR; 9973;; Diâmetro nominal de 1/2\" a; 4\".; Fig. M447; Fig. M448; Disco metálico; Disco com anel de; vedação tipo o'ring"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor Saturado sem; Choque; 125 PSI (9 Bar); Água,; óleo e gás sem Choque; 200 PSI (14 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      },
      {
        "title": "ASTM B62 C836",
        "rows": [
          {
            "label": "Dados",
            "value": "125 s (200 WOG )"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      }
    ]
  },
  "valvulas-val-sa-brz-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_sa_brz.html",
    "sourcePages": [
      {
        "title": "Valvula Segurança e Alívio em Bronze",
        "url": "http://www.valaco.com.br/produtos/val_sa_brz.html"
      }
    ],
    "summary": "( BSP; / NPT; Estas válvulas foram desenvolvidas; para proporcionar o alívio da sobrepressão; em linhas ou vasos de pressão que; operam com água ou outros líquidos.; Embora estas válvulas não; tenham a ação de abertur...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M037; / M038"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT; Estas válvulas foram desenvolvidas; para proporcionar o alívio da sobrepressão; em linhas ou vasos de pressão que; operam com água ou outros líquidos.; Embora estas válvulas não; tenham a ação de abertura; instantânea (POP), elas podem ser; usadas para vapor em instalações; que não sejam codificadas (sem; especificações legais) e; onde necessidades de alta descarga não; sejam requiridas;; Recomenda-se substituir a mola para; regulagens abaixo de 40 PSI;; Diâmetro nominal de 1/2\"; a 3\".; Fig.; M038; Disco metálico; Disco de PTFE"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo, Tampa e Porca de União; Bronze"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      }
    ]
  },
  "valvulas-val-solenoide-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_solenoide.html",
    "sourcePages": [
      {
        "title": "Valvula Solenóide",
        "url": "http://www.valaco.com.br/produtos/val_solenoide.html"
      }
    ],
    "summary": "Para obter informações sobre; válvulas redutora de pressão, entre em contato; com nosso departamento comercial através do telefone; 031 3361-6106 ou por e-mail: vendas@valaco.com.br.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ENTRE EM CONTATO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para obter informações sobre; válvulas redutora de pressão, entre em contato; com nosso departamento comercial através do telefone; 031 3361-6106 ou por e-mail: vendas@valaco.com.br."
          }
        ]
      }
    ]
  },
  "valvulas-val-start-up-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/val_start_up.html",
    "sourcePages": [
      {
        "title": "Valvula Start-Up",
        "url": "http://www.valaco.com.br/produtos/val_start_up.html"
      }
    ],
    "summary": "Para obter informações sobre; válvulas Start Up, entre em contato com nosso departamento; comercial através do telefone 031 3361-6106 ou por; e-mail: vendas@valaco.com.br.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ENTRE EM CONTATO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para obter informações sobre; válvulas Start Up, entre em contato com nosso departamento; comercial através do telefone 031 3361-6106 ou por; e-mail: vendas@valaco.com.br."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Cego 150 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_150.html"
      },
      {
        "title": "Flange Cego 300 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_300.html"
      },
      {
        "title": "Flange Cego 600 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_600.html"
      },
      {
        "title": "Flange Cego 900 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_900.html"
      },
      {
        "title": "Flange Cego 1500 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_1500.html"
      },
      {
        "title": "Flange Cego 2500 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 88,9; 34,9; 60,3; 15,9; 0,5; 3/4\"; 12,7; 98,4; 42,9; 69,8; 0,9; 1\"; 14,3; 108,0; 50,8; 79,4; 1.1/4\"; 117,0; 63,5; 1,4; 1.1/2\"; 17,5; 127,0; 73,0; 1,8; 2\"; 19,0; 152,0; 92,1; 121,0; 2,3; 2.1/2\"; 22,2; 178,0; 104,8; 140,0; 3,2; 3\"; 23,8; 190,0; 4,1; 3.1/2\"; 216,0; 5,9; 4\"; 229,0; 157,0; 7,7; 5\"; 254,0; 186,0; 22,0; 9,1; 6\"; 25,4; 279,0; 241,0; 11,8; 8\"; 28,6; 343,0; 270,0; 298,0; 20,4; 10\"; 12; 30,2; 406,0; 324,0; 362,0; 31,8; 12\"; 483,0; 381,0; 432,0; 49,9; 14\"; 533,0; 413,0; 476,0; 16\"; 16; 36,5; 597,0; 470,0; 540,0; 81,6; 18\"; 39,7; 635,0; 578,0; 99,8; 20\"; 20; 698,0; 584,0; 129,0; 22\"; 46,0; 749,3; 641,3; 692,1; 151,0; 24\"; 47,6; 813,0; 692,0; 749,0; 195,0; 26\"; (2); 24; 869,9; 742,9; 806,4; 238,0; 28\"; 28; 52,4; 927,1; 793,7; 863,6; 281,0; 30\"; 54,0; 984,2; 857,2; 914,4; 327,0"
          },
          {
            "label": "Dados 2",
            "value": "32\"; 57,1; 1060,4; 908,0; 977,9; 41,3; 395,0; 34\"; 32; 58,7; 1111,2; 958,8; 1028,7; 449,0; 36\"; 1168,4; 1022,3; 1085,8; 511,0; 42\"; 36; 66,7; 1346,2; 1193,8; 1257,3; 738,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( H ); do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 124,0; 50,8; 88,9; 1.1/4\"; 133,0; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 156,0; 73,0; 114,0; 22,2; 2,7; 2\"; 165,0; 92,1; 127,0; 3,6; 2.1/2\"; 25,4; 190,0; 104,8; 149,0; 5,4; 3\"; 28,6; 210,0; 168,0; 7,3; 3.1/2\"; 30,2; 229,0; 140,0; 184,0; 9,5; 4\"; 31,8; 254,0; 157,0; 200,0; 12,2; 5\"; 279,0; 186,0; 235,0; 6\"; 12; 38,5; 318,0; 216,0; 270,0; 22,7; 8\"; 41,3; 381,0; 330,0; 36,7; 10\"; 16; 47,6; 444,0; 324,0; 387,0; 56,7; 12\"; 521,0; 451,0; 83,9; 14\"; 20; 54,0; 584,0; 413,0; 514,0; 113,0; 16\"; 57,2; 648,0; 470,0; 572,0; 134,0; 18\"; 24; 60,3; 711,0; 533,0; 629,0; 179,0; 20\"; 775,0; 686,0; 22\"; 66,8; 838,2; 641,3; 742,9; 24\"; 69,8; 914,0; 692,0; 813,0; 358,0; 26\"; (2); 28; 79,4; 971,5; 749,3; 876,3; 44,4; 477,0; 28\"; 85,7"
          },
          {
            "label": "Dados 2",
            "value": "1035,0; 800,1; 939,8; 579,0; 30\"; 1092,2; 857,2; 996,9; 681,0; 32\"; 1149,3; 914,4; 1054,1; 806,0; 34\"; 101,6; 1206,5; 965,2; 1104,9; 919,0; 36\"; 32; 1270,0; 1022,3; 1168,4; 1033,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 124,0; 50,8; 88,9; 1,8; 1.1/4\"; 20,6; 133,0; 63,5; 98,4; 2,3; 1.1/2\"; 22,2; 156,0; 73,0; 114,0; 3,6; 2\"; 25,4; 165,0; 92,1; 127,0; 4,5; 2.1/2\"; 28,6; 190,0; 104,8; 149,0; 6,8; 3\"; 31,8; 210,0; 168,0; 9,1; 3.1/2\"; 229,0; 140,0; 184,0; 13,2; 4\"; 38,1; 273,0; 157,0; 216,0; 18,6; 5\"; 44,4; 330,0; 186,0; 267,0; 30,8; 6\"; 12; 47,6; 356,0; 292,0; 39,0; 8\"; 55,6; 419,0; 270,0; 349,0; 10\"; 16; 508,0; 324,0; 432,0; 104,0; 12\"; 20; 559,0; 381,0; 489,0; 134,0; 14\"; 69,8; 603,0; 413,0; 527,0; 161,0; 16\"; 76,2; 686,0; 470,0; 41,3; 225,0; 18\"; 743,0; 533,0; 654,0; 286,0; 20\"; 24; 813,0; 584,0; 724,0; 367,0; 22\"; 870,0; 641,3; 778,0; 467,0; 24\"; 102,0; 940,0; 692,0; 838,0; 567,0; 26\"; (2); 28; 107,9; 1016,0; 749,3; 914,4"
          },
          {
            "label": "Dados 2",
            "value": "28\"; 111,1; 1073,1; 800,1; 965,2; 54,0; 794,0; 30\"; 114,3; 1130,3; 857,2; 1022,3; 908,0; 32\"; 117,5; 1193,8; 1079,5; 60,3; 1044,0; 34\"; 120,6; 1244,6; 1169,0; 36\"; 123,8; 1314,4; 1339,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 34,9; 82,5; 1,8; 3/4\"; 25,4; 130; 42,9; 88,9; 2,7; 1\"; 28,6; 149; 50,8; 101,6; 3,6; 1.1/4\"; 159; 63,5; 111,1; 4,1; 1.1/2\"; 31,8; 178; 73,0; 123,8; 5,9; 2\"; 38,1; 216; 92,1; 165,1; 11,3; 2.1/2\"; 41,3; 244; 104,8; 190,0; 15,9; 3\"; 241; 127,0; 13,2; 4\"; 44,4; 292; 157,0; 235,0; 24,5; 5\"; 349; 186,0; 279,0; 39,5; 6\"; 12; 55,6; 381; 216,0; 318,0; 52,2; 8\"; 470; 270,0; 394,0; 90,7; 10\"; 16; 69,8; 546; 324,0; 470,0; 132,0; 12\"; 20; 79,4; 610; 381,0; 533,0; 188,0; 14\"; 85,7; 641; 413,0; 559,0; 236,0; 16\"; 705; 616,0; 272,0; 18\"; 102,0; 787; 686,0; 386,0; 20\"; 108,0; 857; 584,0; 749,0; 54,0; 488,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 918,0; 26\"; (2); 28; 139,7; 1085,8; 742,9; 952,5; 999,0; 28\"; 142,9; 1168,4; 793,7; 1022,3; 1169,0; 30\"; 149,2; 1231,9; 857,2; 1373,0; 32\"; 158,7"
          },
          {
            "label": "Dados 2",
            "value": "1314,4; 908,0; 1155,7; 1657,0; 34\"; 1397,0; 958,8; 1225,5; 1941,0; 36\"; 171,4; 1460,5; 1289,0; 2225,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 34,9; 82,6; 1,8; 3/4\"; 25,4; 130; 42,9; 88,9; 2,7; 1\"; 28,6; 149; 50,8; 102,0; 3,6; 1.1/4\"; 159; 63,5; 111,0; 4,1; 1.1/2\"; 31,8; 178; 73,0; 124,0; 5,9; 2\"; 38,1; 216; 92,1; 165,0; 11,3; 2.1/2\"; 41,3; 244; 104,8; 190,0; 15,9; 3\"; 47,6; 267; 127,0; 203,0; 21,8; 4\"; 54,0; 311; 157,0; 241,0; 33,1; 5\"; 375; 186,0; 292,0; 6\"; 12; 394; 216,0; 318,0; 72,6; 8\"; 483; 270,0; 394,0; 44,5; 136; 10\"; 108,0; 584; 324,0; 483,0; 231; 12\"; 16; 673; 381,0; 572,0; 313; 14\"; 133,0; 749; 413,0; 635,0; 60,3; 442; 16\"; 146,0; 826; 470,0; 705,0; 66,7; 590; 18\"; 162,0; 914; 533,0; 775,0; 794; 20\"; 178,0; 984; 584,0; 832,0; 79,4; 1010; 24\"; 1168; 692,0; 991,0; 1644"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 133,35; 35,05; 88,90; 22,35; 3/4\"; 31,75; 139,70; 42,93; 95,25; 10; 1\"; 158,75; 50,80; 107,95; 25,40; 12; 1.1/4\"; 38,10; 184,15; 63,50; 130,30; 28,70; 18; 1.1/2\"; 44,45; 203,20; 73,15; 146,05; 25; 2\"; 234,95; 92,20; 171,45; 39; 2.1/2\"; 57,15; 266,70; 104,90; 196,85; 56; 3\"; 66,80; 304,80; 127,00; 228,60; 86; 4\"; 76,20; 355,60; 157,23; 273,05; 41,40; 133; 5\"; 419,10; 185,67; 323,85; 47,75; 223; 6\"; 482,60; 215,90; 368,30; 54,10; 345; 8\"; 552,45; 270,00; 438,15; 533; 10\"; 165,10; 673,10; 539,75; 1025; 12\"; 762,00; 381,00; 619,25; 1464"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-AWWA-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA.html",
    "sourcePages": [
      {
        "title": "Flange Cego AWWA C207-07 Tabela 1 Classe B 86 PSI aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_86psi.html"
      },
      {
        "title": "Flange Cego AWWA C207-07 Tabela 2 Classe D 175 - 150 PSI em aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_175-150psi.html"
      },
      {
        "title": "Flange Cego AWWA C207-07 Tabela 5 Classe E 275 PSI em aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_275psi.html"
      },
      {
        "title": "Flange Cego AWWA C207-07 Tabela 6 Classe F 300 PSI aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_300psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concên...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "4"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 1 - Classe B (86 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 190,50; 15,88; 19,05; 4,11; 254,00; 215,90; 22,23; 5,23; 279,40; 241,30; 17,48; 7,09; 342,90; 298,45; 10,45; 10; 12; 406,40; 361,95; 25,40; 14,56; 482,60; 431,80; 21,65; 14; 533,40; 476,25; 28,58; 29,11; 16; 596,90; 539,75; 41,06; 18; 635,00; 577,85; 31,75; 49,27; 20; 698,50; 65,32; 22; 749,30; 692,15; 34,93; 81,74; 24; 812,80; 103,39; 26; 869,95; 806,45; 20,62; 127,28; 28; 927,10; 863,60; 154,52; 30; 984,25; 914,40; 184,01; 32; 1060,45; 977,90; 23,75; 41,28; 38,10; 228,80; 34; 1111,25; 1028,70; 263,88; 36; 1168,40; 1085,85; 307,55; 38; 1238,25; 1149,35; 365,78; 40; 1289,05; 1200,15; 413,55; 42; 1346,20; 1257,30; 471,78; 44; 1403,35; 1314,45; 535,98; 46; 1454,15; 1365,25; 597,19; 48; 1511,30; 1422,40; 671,84; 50; 1568,45; 1479,55; 47,63; 44,45; 752,83; 52; 1625,60; 1536,70; 839,42"
          },
          {
            "label": "Dados 2",
            "value": "54; 1682,75; 1593,85; 932,73; 60; 1854,20; 1758,95; 1248,12; 66; 2032,00; 1930,40; 1643,38; 72; 2197,10; 2095,50; 2083,44"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 86 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência"
          },
          {
            "label": "Dados 2",
            "value": "à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 190,50; 15,88; 19,05; 4,11; 254,00; 215,90; 22,23; 5,23; 279,40; 241,30; 17,48; 7,09; 342,90; 298,45; 12,32; 10; 12; 406,40; 361,95; 25,40; 20,16; 482,60; 431,80; 20,62; 33,59; 14; 533,40; 476,25; 23,82; 28,58; 41,43; 16; 596,90; 539,75; 57,85; 18; 635,00; 577,85; 26,97; 31,75; 69,05; 20; 698,50; 91,07; 22; 749,30; 692,15; 30,18; 34,93; 113,47; 24; 812,80; 141,09; 26; 869,95; 806,45; 33,32; 173,93; 28; 927,10; 863,60; 210,88; 30; 984,25; 914,40; 250,45; 32; 1060,45; 977,90; 38,10; 41,28; 311,28; 34; 1111,25; 1028,70; 357,94; 36; 1168,40; 1085,85; 416,54; 38; 1238,25; 1149,35; 494,55; 40; 1289,05; 1200,15; 536,72; 42; 1346,20; 1257,30; 44,45; 636,75; 44; 1403,35; 1314,45; 722,22; 46; 1454,15; 1365,25; 803,59; 48; 1511,30; 1422,40; 47,63; 903,24; 50; 1568,45; 1479,55; 50,80; 1012,23"
          },
          {
            "label": "Dados 2",
            "value": "52; 1625,60; 1536,70; 1127,56; 54; 1682,75; 1593,85; 53,98; 1252,23; 60; 1854,20; 1758,95; 57,15; 1672,50; 66; 2032,00; 1930,40; 63,50; 2198,39; 72; 2197,10; 2095,50; 66,68; 2783,64"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica para flanges de 4\" a 12\" é de 175 PSI e para flanges de 14\" a 144\" é de 150 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8."
          },
          {
            "label": "Dados 2",
            "value": "Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 5 - Classe E (275 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 190,50; 28,58; 19,05; 15,88; 7,46; 254,00; 215,90; 30,18; 22,23; 9,70; 279,40; 241,30; 33,35; 13,06; 342,90; 298,45; 38,10; 22,77; 10; 12; 406,40; 361,95; 39,70; 25,40; 33,22; 482,60; 431,80; 44,45; 52,63; 14; 533,40; 476,25; 47,63; 68,68; 16; 596,90; 539,75; 50,80; 91,82; 18; 635,00; 577,85; 53,98; 31,75; 110,48; 20; 698,50; 60,33; 149,30; 22; 749,30; 692,15; 63,50; 34,93; 180,65; 24; 812,80; 66,68; 223,20; 26; 869,95; 806,45; 69,85; 267,99; 28; 927,10; 863,60; 304,19; 30; 984,25; 914,40; 73,03; 358,69; 32; 1060,45; 977,90; 76,20; 41,28; 434,08; 34; 1111,25; 1028,70; 484,84; 36; 1168,40; 1085,85; 79,38; 563,97; 38; 1238,25; 1149,35; 669,97; 40; 1289,05; 1200,15; 82,55; 755,81; 42; 1346,20; 1257,30; 85,73; 861,82; 44; 1403,35; 1314,45; 1013,35; 46; 1454,15; 1365,25; 87,33; 1049,93"
          },
          {
            "label": "Dados 2",
            "value": "48; 1511,30; 1422,40; 88,90; 1222,74; 50; 1568,45; 1479,55; 1370,17; 52; 1625,60; 1536,70; 92,07; 1526,93; 54; 1682,75; 1593,85; 95,25; 1695,26; 60; 1854,20; 1758,95; 98,43; 2264,08; 66; 2032,00; 1930,40; 107,95; 2976,98; 72; 2197,10; 2095,50; 111,13; 3769,37"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 275 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência"
          },
          {
            "label": "Dados 2",
            "value": "à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 6 - Classe F (300 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 254,00; 200,15; 28,70; 22,23; 19,05; 9,33; 279,40; 234,95; 30,73; 12,32; 12; 317,50; 269,75; 33,27; 17,17; 381,00; 330,20; 25,40; 24,63; 10; 16; 444,50; 387,35; 38,10; 28,58; 38,07; 520,70; 450,85; 41,40; 31,75; 56,73; 14; 20; 584,20; 514,35; 49,28; 85,10; 647,70; 571,50; 54,36; 34,93; 115,70; 18; 24; 711,20; 628,65; 57,15; 146,31; 774,70; 685,80; 59,18; 179,90; 22; 838,20; 742,95; 63,50; 226,18; 914,40; 812,80; 68,33; 41,28; 289,64; 26; 28; 971,55; 876,30; 76,20; 47,63; 44,45; 364,66; 1035,05; 939,80; 79,50; 431,47; 30; 1092,20; 996,95; 80,01; 486,33; 32; 1149,35; 1054,10; 82,55; 566,58; 34; 1206,50; 1104,90; 85,85; 651,31; 36; 1270,00; 1168,40; 87,88; 53,98; 50,80; 762,16; 38; 1327,15; 1219,20; 88,90; 864,80; 40; 1377,95; 1276,35; 92,20; 973,41; 42; 1447,80; 1339,85; 96,77; 1125,32; 44"
          },
          {
            "label": "Dados 2",
            "value": "1504,95; 1397,00; 101,60; 1264,54; 46; 1562,10; 1454,15; 104,90; 1414,96; 48; 1651,00; 1543,05; 114,30; 1677,35"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 300 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 250lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência"
          },
          {
            "label": "Dados 2",
            "value": "à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN.html",
    "sourcePages": [
      {
        "title": "Flange Cego - DIN",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN.html"
      }
    ],
    "summary": "de Pressão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JIS-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JIS.html",
    "sourcePages": [
      {
        "title": "Flange Cego - JIS",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JIS.html"
      }
    ],
    "summary": "de Pressão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Cego 150 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 88,9; 34,9; 60,3; 15,9; 0,5; 3/4\"; 12,7; 98,4; 42,9; 69,8; 0,9; 1\"; 14,3; 108,0; 50,8; 79,4; 1.1/4\"; 117,0; 63,5; 1,4; 1.1/2\"; 17,5; 127,0; 73,0; 1,8; 2\"; 19,0; 152,0; 92,1; 121,0; 2,3; 2.1/2\"; 22,2; 178,0; 104,8; 140,0; 3,2; 3\"; 23,8; 190,0; 4,1; 3.1/2\"; 216,0; 5,9; 4\"; 229,0; 157,0; 7,7; 5\"; 254,0; 186,0; 22,0; 9,1; 6\"; 25,4; 279,0; 241,0; 11,8; 8\"; 28,6; 343,0; 270,0; 298,0; 20,4; 10\"; 12; 30,2; 406,0; 324,0; 362,0; 31,8; 12\"; 483,0; 381,0; 432,0; 49,9; 14\"; 533,0; 413,0; 476,0; 16\"; 16; 36,5; 597,0; 470,0; 540,0; 81,6; 18\"; 39,7; 635,0; 578,0; 99,8; 20\"; 20; 698,0; 584,0; 129,0; 22\"; 46,0; 749,3; 641,3; 692,1; 151,0; 24\"; 47,6; 813,0; 692,0; 749,0; 195,0; 26\"; (2); 24; 869,9; 742,9; 806,4; 238,0; 28\"; 28; 52,4; 927,1; 793,7; 863,6; 281,0; 30\"; 54,0; 984,2; 857,2; 914,4; 327,0"
          },
          {
            "label": "Dados 2",
            "value": "32\"; 57,1; 1060,4; 908,0; 977,9; 41,3; 395,0; 34\"; 32; 58,7; 1111,2; 958,8; 1028,7; 449,0; 36\"; 1168,4; 1022,3; 1085,8; 511,0; 42\"; 36; 66,7; 1346,2; 1193,8; 1257,3; 738,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( H ); do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Cego 300 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 124,0; 50,8; 88,9; 1.1/4\"; 133,0; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 156,0; 73,0; 114,0; 22,2; 2,7; 2\"; 165,0; 92,1; 127,0; 3,6; 2.1/2\"; 25,4; 190,0; 104,8; 149,0; 5,4; 3\"; 28,6; 210,0; 168,0; 7,3; 3.1/2\"; 30,2; 229,0; 140,0; 184,0; 9,5; 4\"; 31,8; 254,0; 157,0; 200,0; 12,2; 5\"; 279,0; 186,0; 235,0; 6\"; 12; 38,5; 318,0; 216,0; 270,0; 22,7; 8\"; 41,3; 381,0; 330,0; 36,7; 10\"; 16; 47,6; 444,0; 324,0; 387,0; 56,7; 12\"; 521,0; 451,0; 83,9; 14\"; 20; 54,0; 584,0; 413,0; 514,0; 113,0; 16\"; 57,2; 648,0; 470,0; 572,0; 134,0; 18\"; 24; 60,3; 711,0; 533,0; 629,0; 179,0; 20\"; 775,0; 686,0; 22\"; 66,8; 838,2; 641,3; 742,9; 24\"; 69,8; 914,0; 692,0; 813,0; 358,0; 26\"; (2); 28; 79,4; 971,5; 749,3; 876,3; 44,4; 477,0; 28\"; 85,7"
          },
          {
            "label": "Dados 2",
            "value": "1035,0; 800,1; 939,8; 579,0; 30\"; 1092,2; 857,2; 996,9; 681,0; 32\"; 1149,3; 914,4; 1054,1; 806,0; 34\"; 101,6; 1206,5; 965,2; 1104,9; 919,0; 36\"; 32; 1270,0; 1022,3; 1168,4; 1033,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Cego 600 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 124,0; 50,8; 88,9; 1,8; 1.1/4\"; 20,6; 133,0; 63,5; 98,4; 2,3; 1.1/2\"; 22,2; 156,0; 73,0; 114,0; 3,6; 2\"; 25,4; 165,0; 92,1; 127,0; 4,5; 2.1/2\"; 28,6; 190,0; 104,8; 149,0; 6,8; 3\"; 31,8; 210,0; 168,0; 9,1; 3.1/2\"; 229,0; 140,0; 184,0; 13,2; 4\"; 38,1; 273,0; 157,0; 216,0; 18,6; 5\"; 44,4; 330,0; 186,0; 267,0; 30,8; 6\"; 12; 47,6; 356,0; 292,0; 39,0; 8\"; 55,6; 419,0; 270,0; 349,0; 10\"; 16; 508,0; 324,0; 432,0; 104,0; 12\"; 20; 559,0; 381,0; 489,0; 134,0; 14\"; 69,8; 603,0; 413,0; 527,0; 161,0; 16\"; 76,2; 686,0; 470,0; 41,3; 225,0; 18\"; 743,0; 533,0; 654,0; 286,0; 20\"; 24; 813,0; 584,0; 724,0; 367,0; 22\"; 870,0; 641,3; 778,0; 467,0; 24\"; 102,0; 940,0; 692,0; 838,0; 567,0; 26\"; (2); 28; 107,9; 1016,0; 749,3; 914,4"
          },
          {
            "label": "Dados 2",
            "value": "28\"; 111,1; 1073,1; 800,1; 965,2; 54,0; 794,0; 30\"; 114,3; 1130,3; 857,2; 1022,3; 908,0; 32\"; 117,5; 1193,8; 1079,5; 60,3; 1044,0; 34\"; 120,6; 1244,6; 1169,0; 36\"; 123,8; 1314,4; 1339,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Cego 900 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 34,9; 82,5; 1,8; 3/4\"; 25,4; 130; 42,9; 88,9; 2,7; 1\"; 28,6; 149; 50,8; 101,6; 3,6; 1.1/4\"; 159; 63,5; 111,1; 4,1; 1.1/2\"; 31,8; 178; 73,0; 123,8; 5,9; 2\"; 38,1; 216; 92,1; 165,1; 11,3; 2.1/2\"; 41,3; 244; 104,8; 190,0; 15,9; 3\"; 241; 127,0; 13,2; 4\"; 44,4; 292; 157,0; 235,0; 24,5; 5\"; 349; 186,0; 279,0; 39,5; 6\"; 12; 55,6; 381; 216,0; 318,0; 52,2; 8\"; 470; 270,0; 394,0; 90,7; 10\"; 16; 69,8; 546; 324,0; 470,0; 132,0; 12\"; 20; 79,4; 610; 381,0; 533,0; 188,0; 14\"; 85,7; 641; 413,0; 559,0; 236,0; 16\"; 705; 616,0; 272,0; 18\"; 102,0; 787; 686,0; 386,0; 20\"; 108,0; 857; 584,0; 749,0; 54,0; 488,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 918,0; 26\"; (2); 28; 139,7; 1085,8; 742,9; 952,5; 999,0; 28\"; 142,9; 1168,4; 793,7; 1022,3; 1169,0; 30\"; 149,2; 1231,9; 857,2; 1373,0; 32\"; 158,7"
          },
          {
            "label": "Dados 2",
            "value": "1314,4; 908,0; 1155,7; 1657,0; 34\"; 1397,0; 958,8; 1225,5; 1941,0; 36\"; 171,4; 1460,5; 1289,0; 2225,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Cego 1500 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 34,9; 82,6; 1,8; 3/4\"; 25,4; 130; 42,9; 88,9; 2,7; 1\"; 28,6; 149; 50,8; 102,0; 3,6; 1.1/4\"; 159; 63,5; 111,0; 4,1; 1.1/2\"; 31,8; 178; 73,0; 124,0; 5,9; 2\"; 38,1; 216; 92,1; 165,0; 11,3; 2.1/2\"; 41,3; 244; 104,8; 190,0; 15,9; 3\"; 47,6; 267; 127,0; 203,0; 21,8; 4\"; 54,0; 311; 157,0; 241,0; 33,1; 5\"; 375; 186,0; 292,0; 6\"; 12; 394; 216,0; 318,0; 72,6; 8\"; 483; 270,0; 394,0; 44,5; 136; 10\"; 108,0; 584; 324,0; 483,0; 231; 12\"; 16; 673; 381,0; 572,0; 313; 14\"; 133,0; 749; 413,0; 635,0; 60,3; 442; 16\"; 146,0; 826; 470,0; 705,0; 66,7; 590; 18\"; 162,0; 914; 533,0; 775,0; 794; 20\"; 178,0; 984; 584,0; 832,0; 79,4; 1010; 24\"; 1168; 692,0; 991,0; 1644"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Cego 2500 lbs aço ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 133,35; 35,05; 88,90; 22,35; 3/4\"; 31,75; 139,70; 42,93; 95,25; 10; 1\"; 158,75; 50,80; 107,95; 25,40; 12; 1.1/4\"; 38,10; 184,15; 63,50; 130,30; 28,70; 18; 1.1/2\"; 44,45; 203,20; 73,15; 146,05; 25; 2\"; 234,95; 92,20; 171,45; 39; 2.1/2\"; 57,15; 266,70; 104,90; 196,85; 56; 3\"; 66,80; 304,80; 127,00; 228,60; 86; 4\"; 76,20; 355,60; 157,23; 273,05; 41,40; 133; 5\"; 419,10; 185,67; 323,85; 47,75; 223; 6\"; 482,60; 215,90; 368,30; 54,10; 345; 8\"; 552,45; 270,00; 438,15; 533; 10\"; 165,10; 673,10; 539,75; 1025; 12\"; 762,00; 381,00; 619,25; 1464"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-AWWA-86psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_86psi.html",
    "sourcePages": [
      {
        "title": "Flange Cego AWWA C207-07 Tabela 1 Classe B 86 PSI aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_86psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concên...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 1 - Classe B (86 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 190,50; 15,88; 19,05; 4,11; 254,00; 215,90; 22,23; 5,23; 279,40; 241,30; 17,48; 7,09; 342,90; 298,45; 10,45; 10; 12; 406,40; 361,95; 25,40; 14,56; 482,60; 431,80; 21,65; 14; 533,40; 476,25; 28,58; 29,11; 16; 596,90; 539,75; 41,06; 18; 635,00; 577,85; 31,75; 49,27; 20; 698,50; 65,32; 22; 749,30; 692,15; 34,93; 81,74; 24; 812,80; 103,39; 26; 869,95; 806,45; 20,62; 127,28; 28; 927,10; 863,60; 154,52; 30; 984,25; 914,40; 184,01; 32; 1060,45; 977,90; 23,75; 41,28; 38,10; 228,80; 34; 1111,25; 1028,70; 263,88; 36; 1168,40; 1085,85; 307,55; 38; 1238,25; 1149,35; 365,78; 40; 1289,05; 1200,15; 413,55; 42; 1346,20; 1257,30; 471,78; 44; 1403,35; 1314,45; 535,98; 46; 1454,15; 1365,25; 597,19; 48; 1511,30; 1422,40; 671,84; 50; 1568,45; 1479,55; 47,63; 44,45; 752,83; 52; 1625,60; 1536,70; 839,42"
          },
          {
            "label": "Dados 2",
            "value": "54; 1682,75; 1593,85; 932,73; 60; 1854,20; 1758,95; 1248,12; 66; 2032,00; 1930,40; 1643,38; 72; 2197,10; 2095,50; 2083,44"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 86 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência"
          },
          {
            "label": "Dados 2",
            "value": "à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-AWWA-175-150psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_175-150psi.html",
    "sourcePages": [
      {
        "title": "Flange Cego AWWA C207-07 Tabela 2 Classe D 175 - 150 PSI em aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_175-150psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concên...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 190,50; 15,88; 19,05; 4,11; 254,00; 215,90; 22,23; 5,23; 279,40; 241,30; 17,48; 7,09; 342,90; 298,45; 12,32; 10; 12; 406,40; 361,95; 25,40; 20,16; 482,60; 431,80; 20,62; 33,59; 14; 533,40; 476,25; 23,82; 28,58; 41,43; 16; 596,90; 539,75; 57,85; 18; 635,00; 577,85; 26,97; 31,75; 69,05; 20; 698,50; 91,07; 22; 749,30; 692,15; 30,18; 34,93; 113,47; 24; 812,80; 141,09; 26; 869,95; 806,45; 33,32; 173,93; 28; 927,10; 863,60; 210,88; 30; 984,25; 914,40; 250,45; 32; 1060,45; 977,90; 38,10; 41,28; 311,28; 34; 1111,25; 1028,70; 357,94; 36; 1168,40; 1085,85; 416,54; 38; 1238,25; 1149,35; 494,55; 40; 1289,05; 1200,15; 536,72; 42; 1346,20; 1257,30; 44,45; 636,75; 44; 1403,35; 1314,45; 722,22; 46; 1454,15; 1365,25; 803,59; 48; 1511,30; 1422,40; 47,63; 903,24; 50; 1568,45; 1479,55; 50,80; 1012,23"
          },
          {
            "label": "Dados 2",
            "value": "52; 1625,60; 1536,70; 1127,56; 54; 1682,75; 1593,85; 53,98; 1252,23; 60; 1854,20; 1758,95; 57,15; 1672,50; 66; 2032,00; 1930,40; 63,50; 2198,39; 72; 2197,10; 2095,50; 66,68; 2783,64"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica para flanges de 4\" a 12\" é de 175 PSI e para flanges de 14\" a 144\" é de 150 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8."
          },
          {
            "label": "Dados 2",
            "value": "Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-AWWA-275psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_275psi.html",
    "sourcePages": [
      {
        "title": "Flange Cego AWWA C207-07 Tabela 5 Classe E 275 PSI em aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_275psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concên...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 5 - Classe E (275 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 190,50; 28,58; 19,05; 15,88; 7,46; 254,00; 215,90; 30,18; 22,23; 9,70; 279,40; 241,30; 33,35; 13,06; 342,90; 298,45; 38,10; 22,77; 10; 12; 406,40; 361,95; 39,70; 25,40; 33,22; 482,60; 431,80; 44,45; 52,63; 14; 533,40; 476,25; 47,63; 68,68; 16; 596,90; 539,75; 50,80; 91,82; 18; 635,00; 577,85; 53,98; 31,75; 110,48; 20; 698,50; 60,33; 149,30; 22; 749,30; 692,15; 63,50; 34,93; 180,65; 24; 812,80; 66,68; 223,20; 26; 869,95; 806,45; 69,85; 267,99; 28; 927,10; 863,60; 304,19; 30; 984,25; 914,40; 73,03; 358,69; 32; 1060,45; 977,90; 76,20; 41,28; 434,08; 34; 1111,25; 1028,70; 484,84; 36; 1168,40; 1085,85; 79,38; 563,97; 38; 1238,25; 1149,35; 669,97; 40; 1289,05; 1200,15; 82,55; 755,81; 42; 1346,20; 1257,30; 85,73; 861,82; 44; 1403,35; 1314,45; 1013,35; 46; 1454,15; 1365,25; 87,33; 1049,93"
          },
          {
            "label": "Dados 2",
            "value": "48; 1511,30; 1422,40; 88,90; 1222,74; 50; 1568,45; 1479,55; 1370,17; 52; 1625,60; 1536,70; 92,07; 1526,93; 54; 1682,75; 1593,85; 95,25; 1695,26; 60; 1854,20; 1758,95; 98,43; 2264,08; 66; 2032,00; 1930,40; 107,95; 2976,98; 72; 2197,10; 2095,50; 111,13; 3769,37"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 275 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência"
          },
          {
            "label": "Dados 2",
            "value": "à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-AWWA-300psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_300psi.html",
    "sourcePages": [
      {
        "title": "Flange Cego AWWA C207-07 Tabela 6 Classe F 300 PSI aço",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_AWWA_300psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concên...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 6 - Classe F (300 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (11); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 254,00; 200,15; 28,70; 22,23; 19,05; 9,33; 279,40; 234,95; 30,73; 12,32; 12; 317,50; 269,75; 33,27; 17,17; 381,00; 330,20; 25,40; 24,63; 10; 16; 444,50; 387,35; 38,10; 28,58; 38,07; 520,70; 450,85; 41,40; 31,75; 56,73; 14; 20; 584,20; 514,35; 49,28; 85,10; 647,70; 571,50; 54,36; 34,93; 115,70; 18; 24; 711,20; 628,65; 57,15; 146,31; 774,70; 685,80; 59,18; 179,90; 22; 838,20; 742,95; 63,50; 226,18; 914,40; 812,80; 68,33; 41,28; 289,64; 26; 28; 971,55; 876,30; 76,20; 47,63; 44,45; 364,66; 1035,05; 939,80; 79,50; 431,47; 30; 1092,20; 996,95; 80,01; 486,33; 32; 1149,35; 1054,10; 82,55; 566,58; 34; 1206,50; 1104,90; 85,85; 651,31; 36; 1270,00; 1168,40; 87,88; 53,98; 50,80; 762,16; 38; 1327,15; 1219,20; 88,90; 864,80; 40; 1377,95; 1276,35; 92,20; 973,41; 42; 1447,80; 1339,85; 96,77; 1125,32; 44"
          },
          {
            "label": "Dados 2",
            "value": "1504,95; 1397,00; 101,60; 1264,54; 46; 1562,10; 1454,15; 104,90; 1414,96; 48; 1651,00; 1543,05; 114,30; 1677,35"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 300 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 250lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência"
          },
          {
            "label": "Dados 2",
            "value": "à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão;; 11."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN6-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN6.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 6 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN6.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 6 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 9 máx.; Forma B; (kg) (2); Forma T; 3/8\"; 10; M10; 11; 75; 12; 50; 0,38; 1/2\"; 15; 80; 55; 0,44; 3/4\"; 20; 90; 14; 65; 0,65; 1\"; 25; 100; 0,82; 1.1/4\"; 32; M12; 120; 1,17; 1.1/2\"; 40; 130; 1,39; 2\"; 140; 110; 1,62; 2.1/2\"; 160; 2,44; 2,48; 3\"; M16; 18; 190; 16; 150; 70; 3,43; 3,49; 4\"; 210; 170; 4,76; 4,86; 5\"; 125; 240; 200; 115; 6,11; 6,28; 6\"; 265; 225; 7,51; 7,75; 7\"; ( 175 ); 295; 255; 165; 10,4; 10,7; 8\"; 320; 280; 12,3; 12,7; 10\"; 250; 375; 22; 335; 235; 18,3; 19,0; 12\"; 300; M20; 440; 395; 285; 25,3; 26,3; 14\"; 350; 490; 445; 330; 31,6; 32,9; 16\"; 400; 540; 495; 380; 38,4; 40,2; 20\"; 500; 645; 24; 600; 475; 60,4; 63,2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 6 bar (87 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Valor aproximado em polegadas;; 5.; Forma T é utilizada somente em flanges maiores de 2.1/2\" (65mm);; 6.; Veja Tabela; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN10-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN10.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 10 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN10.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 10 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 9 máx.; Forma B; (kg) (2); Forma T; 3/8\"; 10"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a classe de pressão PN 16",
        "rows": [
          {
            "label": "Dados",
            "value": "1/2\"; 15; 3/4\"; 20; 1\"; 25; 1.1/4\"; 32; 1.1/2\"; 40; 2\"; 50; 2.1/2\"; 65; 3\"; 80; 4\"; 100; 5\"; 125; 6\"; 150; 7\"; ( 175 ); 8\"; 200; M20; 22; 340; 24; 295; 190; 16,5; 16,9; 10\"; 250; 12; 395; 26; 350; 235; 24,0; 24,7; 12\"; 300; 445; 400; 285; 30,9; 31,9; 14\"; 16; 505; 460; 330; 40,6; 41,9; 16\"; M24; 565; 515; 380; 49,4; 51,2; 20\"; 500; 670; 28; 620; 475; 75,0; 77,8"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 bar (145 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Valor aproximado em polegadas;; 5.; Forma T é utilizada somente em flanges maiores de 2.1/2\" (65mm);; 6.; Veja Tabela; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN16-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN16.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 16 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN16.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 16 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 9 máx.; Forma B; (kg) (2); Forma T; 3/8\"; 10; M 12; 14; 90; 60; 0,63; 1/2\"; 15; 95; 65; 0,72; 3/4\"; 20; 105; 16; 75; 1,01; 1\"; 25; 115; 85; 1,23; 1.1/4\"; 32; M 16; 18; 140; 100; 1,80; 1.1/2\"; 40; 150; 110; 2,09; 2\"; 50; 165; 125; 2,88; 2.1/2\"; 185; 145; 55; 3,66; 3,70; 3\"; 80; 200; 160; 70; 4,77; 4,83; 4\"; 220; 180; 5,65; 5,75; 5\"; 250; 22; 210; 8,42; 8,59; 6\"; M 20; 285; 240; 10,4; 10,6; 7\"; ( 175 ); 315; 24; 270; 14,0; 14,3; 8\"; 12; 340; 295; 190; 16,1; 16,5; 10\"; M 24; 26; 405; 355; 235; 24,9; 25,6; 12\"; 300; 460; 28; 410; 35,1; 36,1; 14\"; 350; 520; 30; 470; 330; 47,8; 49,1; 16\"; 400; M 27; 580; 525; 380; 63,5; 65,3; 20\"; 500; M 30; 33; 715; 36; 650; 475; 102"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 16 bar (232 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Forma T é utilizada somente em flanges maiores de 2.1/2\" (65mm);; 6.; Veja Tabela; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN25-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN25.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 25 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN25.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 25 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 9 máx.; Forma B; (kg) (2); Forma T; 3/8\"; 10"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a classe de pressão PN 40",
        "rows": [
          {
            "label": "Dados",
            "value": "1/2\"; 15; 3/4\"; 20; 1\"; 25; 1.1/4\"; 32; 1.1/2\"; 40; 2\"; 50; 2.1/2\"; 65; 3\"; 80; 4\"; 100; 5\"; 125; 6\"; 150; 7\"; ( 175 ); 12; M 24; 26; 330; 28; 280; 165; 17,3; 17,6; 8\"; 200; 360; 30; 310; 190; 22,3; 22,7; 10\"; 250; M 27; 425; 370; 237; 33,5; 34,5; 12\"; 300; 16; 485; 34; 430; 285; 46,3; 47,3; 14\"; 350; M 30; 33; 555; 38; 490; 332; 68,0; 69,3; 16\"; 400; M 33; 36; 620; 550; 380; 89,7; 91,5; 20\"; 500; 730; 45; 660; 475; 138; 141"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 25 bar (362,5 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Forma T é utilizada somente em flanges maiores de 2.1/2\" (65mm);; 6.; Veja Tabela; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN40-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN40.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 40 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN40.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 40 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 9 máx.; Forma B; (kg) (2); Forma T; 3/8\"; 10; M 12; 14; 90; 16; 60; 0,72; 1/2\"; 15; 95; 65; 0,81; 3/4\"; 20; 105; 18; 75; 1,24; 1\"; 25; 115; 85; 1,38; 1.1/4\"; 32; M 16; 140; 100; 2,03; 1.1/2\"; 40; 150; 110; 2,35; 2\"; 50; 165; 125; 3,20; 2.1/2\"; 185; 22; 145; 55; 4,29; 4,33; 3\"; 80; 200; 24; 160; 70; 5,88; 5,94; 4\"; M 20; 235; 190; 7,54; 7,64; 5\"; M 24; 26; 270; 220; 10,8; 11,0; 6\"; 300; 28; 250; 14,5; 14,7; 7\"; ( 175 ); 12; M 27; 30; 350; 295; 22,1; 22,4; 8\"; 375; 34; 320; 27,2; 27,6; 10\"; M 30; 33; 450; 38; 385; 43,8; 44,5; 12\"; 515; 42; 285; 63,3; 64,3; 14\"; M 33; 36; 580; 46; 510; 330; 89,5; 90,8; 16\"; 400; M 36; 39; 660; 585; 380; 127,0; 129; 20\"; 500; M 39; 755; 56; 670; 475; 172,0; 175"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 bar (580 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Forma T é utilizada somente em flanges maiores de 2.1/2\" (65mm);; 6.; Veja Tabela; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN64-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN64.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 64 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN64.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 64 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "Forma E; (kg) (2); (pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 3; d 4; d 9; 3/8\"; 10"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a classe de pressão PN 100",
        "rows": [
          {
            "label": "Dados",
            "value": "1/2\"; 15; 3/4\"; 20; 1\"; 25; 1.1/4\"; 32; 1.1/2\"; 40; 2\"; 50; M 20; 22; 180; 26; 135; 82; 102; 4,51; 2.1/2\"; 65; 205; 160; 98; 122; 45; 5,71; 3\"; 80; 215; 28; 170; 112; 138; 60; 6,92; 4\"; 100; M 24; 250; 30; 200; 162; 10,1; 5\"; 125; M 27; 295; 34; 240; 168; 188; 105; 16,1; 6\"; 150; M 30; 33; 345; 36; 280; 202; 218; 130; 23,5; 7\"; ( 175 ); 12; 375; 310; 228; 260; 155; 30,8; 8\"; M 33; 415; 42; 256; 285; 39,7; 10\"; 470; 46; 400; 316; 220; 57,4; 12\"; 300; 16; 530; 52; 460; 372; 410; 270; 81,0; 14\"; 350; M 36; 39; 600; 56; 525; 420; 465; 114; 16\"; M 39; 670; 585; 475; 535; 360; 153"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 64 bar (928 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-DIN2527-PN100-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN100.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma DIN 2527 Classe PN 100 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_DIN2527_PN100.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2527; - Classe de pressão PN 100 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aproximado",
        "rows": [
          {
            "label": "Dados",
            "value": "Forma E; (kg) (2); (pol.) (4); (mm); N°; de; Furos; Tipo da Rosca do Parafuso; d 2; d 3; d 4; d 9; 3/8\"; 10; M 12; 14; 100; 20; 70; 32; 40; 1,00; 1/2\"; 15; 105; 75; 34; 45; 1,22; 1\"; 25; M 16; 18; 140; 24; 52; 68; 2,65; 1.1/4\"; M 20; 22; 155; 110; 62; 78; 3,24; 1.1/2\"; 170; 26; 125; 88; 4,09; 2\"; 50; M 24; 195; 28; 145; 90; 102; 5,84; 2.1/2\"; 65; 220; 30; 108; 122; 8,03; 3\"; 80; 230; 180; 120; 138; 60; 9,43; 4\"; M 27; 265; 36; 210; 150; 162; 14,3; 5\"; M 30; 33; 315; 250; 188; 22,6; 6\"; 12; 355; 44; 290; 218; 130; 31,8; 7\"; ( 175 ); 385; 48; 320; 245; 260; 41,3; 8\"; 200; M 33; 430; 360; 278; 285; 56,1; 10\"; M 36; 39; 505; 340; 345; 89,6; 12\"; 300; 16; M 39; 42; 585; 500; 400; 410; 119; 14\"; 350; M 45; 655; 74; 560; 460; 465; 175"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 100 bar (1450 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2220-5K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_5K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2220-1995 B2238-1996 Classe 5K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_5K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 5k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 5k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 750mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 3/8\"; (10); 75; 3 9; 55; 12; M10; 0,28; 1/2\"; 15; 80; 44; 60; 0,32; 3/4\"; (20); 85; 10; 49; 65; 0,41; 1\"; 25; 95; 59; 0,52; 1.1/4\"; (32); 115; 70; 90; M12; 0,91; 1.1/2\"; 40; 120; 1,00; 2\"; 50; 130; 14; 105; 1,38; 2.1/2\"; 155; 110; 2,00; 3\"; 180; 121; 145; 19; M16; 2,67; 3.1/2\"; (90); 190; 131; 2,99; 4\"; 100; 200; 16; 141; 165; 3,66; 5\"; 125; 235; 176; 5,16; 6\"; 150; 265; 18; 206; 230; 7,47; 7\"; (175); 300; 232; 260; 23; M20; 9,52; 8\"; 320; 20; 252; 280; 12,1; 9\"; (225); 345; 277; 305; 13,9; 10\"; 250; 385; 22; 317; 19,2; 12\"; 430; 360; 390; 24,2; 14\"; 350; 480; 24; 403; 435; M22; 33,0; 16\"; 400; 540; 463; 495; 41,7; 18\"; 450; 605; 523; 555; 52,7; 20\"; 500; 655; 573; 61,6; 22\"; 550; 720; 26; 630; 665; 27; M24; 80,8; 24\"; 600; 770; 680"
          },
          {
            "label": "Dados 2",
            "value": "715; 92,7; 26\"; 650; 825; 735; 106; 28\"; 700; 875; 785; 820; 30\"; 750; 945; 28; 840; 880; 33; M30; 32\"; 800; 995; 890; 930; 167,4; 34\"; 850; 1045; 940; 980; 185,1; 36\"; 900; 1095; 30; 990; 1030; 218,1; 40\"; 1000; 1195; 32; 1090; 1130; 277,3"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 5 kg/cm 2 (71 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2220-10K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_10K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2220-1995 B2238-1996 Classe 10K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_10K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 10k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 10k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 800mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 3/8\"; (10); 90; 12; 46; 65; 15; M12; 0,53; 1/2\"; 95; 51; 70; 0,60; 3/4\"; (20); 100; 14; 56; 75; 0,76; 1\"; 25; 125; 67; 19; M16; 1,22; 1.1/4\"; (32); 135; 16; 76; 1,66; 1.1/2\"; 40; 140; 81; 105; 1,79; 2\"; 50; 155; 96; 120; 2,23; 2.1/2\"; 175; 18; 116; 3,24; 3\"; 80; 185; 126; 150; 3,48; 3.1/2\"; (90); 195; 136; 160; 3,90; 4\"; 210; 151; 4,57; 5\"; 250; 20; 182; 23; M20; 7,18; 6\"; 280; 22; 212; 240; 10,1; 7\"; (175); 305; 237; 265; 11,8; 8\"; 200; 330; 262; 290; 13,9; 9\"; (225); 350; 282; 310; 15,85; 10\"; 400; 24; 324; 355; 22,6; 12\"; 300; 445; 368; M22; 27,8; 14\"; 490; 26; 413; 36,9; 16\"; 560; 28; 475; 510; 27; M24; 52,1; 18\"; 450; 620; 30; 530; 565; 68,4; 20\"; 500; 675; 585; 81,6; 22\"; 550; 745; 32; 640; 680; 33; M30; 24\"; 600; 795; 690; 730"
          },
          {
            "label": "Dados 2",
            "value": "26\"; 650; 845; 34; 740; 780; 144; 28\"; 700; 905; 36; 800; 840; 176; 30\"; 750; 970; 38; 855; 900; 214; 32\"; 1020; 950; 249; 34\"; 850; 1070; 955; 1000; 248,8; 36\"; 1120; 1005; 1050; 288,4; 40\"; 1235; 1110; 1160; 39; M36; 367,7"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 kg/cm 2 (142,2 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2220-16K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_16K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2220-1995 B2238-1996 Classe 16K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_16K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 16k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 16k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 750mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 3/8\"; (10); 90; 12; 46; 65; 15; M12; 0,53; 1/2\"; 95; 51; 70; 0,60; 3/4\"; (20); 100; 14; 56; 75; 0,79; 1\"; 25; 125; 67; 19; M16; 1,22; 1.1/4\"; (32); 135; 16; 76; 1,66; 1.1/2\"; 40; 140; 81; 105; 1,79; 2\"; 50; 155; 96; 120; 2,09; 2.1/2\"; 175; 18; 116; 3,08; 3\"; 80; 200; 20; 132; 160; 23; M20; 4,41; 3.1/2\"; (90); 210; 145; 170; 4,92; 4\"; 225; 22; 185; 6,29; 5\"; 270; 195; M22; 9,21; 6\"; 150; 305; 24; 230; 260; 12,7; 8\"; 350; 26; 275; 18,4; 10\"; 250; 430; 28; 345; 380; 27; M24; 30,4; 12\"; 300; 480; 30; 395; 40,5; 14\"; 540; 34; 440; 33; M30&times;3; 57,5; 16\"; 400; 605; 38; 495; 81,7; 18\"; 450; 675; 560; 107; 20\"; 500; 730; 42; 615; 660; 22\"; 550; 795; 44; 670; 720; 39; M36&times;3; 163; 24\"; 600; 845; 770; 192; 26\"; 650; 895; 48; 820; 227,5"
          },
          {
            "label": "Dados 2",
            "value": "28\"; 700; 960; 875; 272,6; 30\"; 750; 1020; 52; 880; 935; 321,9; 32\"; 800; 1085; 54; 930; 990; M45&times;3; 375,6; 34\"; 850; 1135; 980; 1040; 428,1; 36\"; 900; 1185; 58; 1030; 1090; 481,8; 40\"; 1000; 1320; 62; 1140; 1210; M52&times;3; 636,0; 44\"; 1100; 1420; 66; 1240; 1310; 32; 784,0; 48\"; 1200; 1530; 1350; 972,4"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 16 kg/cm 2 (227,52 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2220-20K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_20K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2220-1995 B2238-1996 Classe 20K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_20K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 20k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 20k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 600mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 3/8\"; (10); 90; 14; 46; 65; 15; M12; 0,59; 1/2\"; 95; 51; 70; 0,67; 3/4\"; (20); 100; 16; 56; 75; 0,86; 1\"; 25; 125; 67; 19; M16; 1,34; 1.1/4\"; (32); 135; 18; 76; 1,73; 1.1/2\"; 40; 140; 81; 105; 1,87; 2\"; 50; 155; 96; 120; 2,20; 2.1/2\"; 175; 20; 116; 3,24; 3\"; 80; 200; 22; 132; 160; 23; M20; 4,63; 3.1/2\"; (90); 210; 24; 145; 170; 5,67; 4\"; 225; 185; 6,61; 5\"; 270; 26; 195; M22; 10,5; 6\"; 150; 305; 28; 230; 260; 12; 14,4; 8\"; 350; 30; 275; 20,8; 10\"; 250; 430; 34; 345; 380; 27; M24; 36,2; 12\"; 300; 480; 36; 395; 47,4; 14\"; 540; 440; 33; M30&times;3; 66,1; 16\"; 400; 605; 495; 97,0; 18\"; 450; 675; 48; 560; 126; 20\"; 500; 730; 615; 660; 22\"; 550; 795; 52; 670; 720; 39; M36&times;3; 190; 24\"; 600; 845; 54; 770; 223; 26\"; 650; 945; 60; 790"
          },
          {
            "label": "Dados 2",
            "value": "850; M45&times;3; 311,6; 28\"; 700; 995; 64; 840; 900; 370,9; 30\"; 750; 1080; 68; 970; M52&times;3; 460,1; 32\"; 800; 1140; 72; 960; 1030; 546,5; 34\"; 1200; 74; 1020; 1090; 626,2; 36\"; 1250; 1070; 694,2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 20 kg/cm 2 (284,40 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2220-30K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_30K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2220-1995 B2238-1996 Classe 30K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2220_30K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 1/2\"; 15; 115; 18; 55; 80; 19; M16; 1,25; 3/4\"; (20); 120; 60; 85; 1,38; 1\"; 25; 130; 20; 70; 95; 1,84; 1.1/4\"; (32); 140; 22; 105; 2,32; 1.1/2\"; 40; 160; 90; 23; M20; 3,00; 2\"; 50; 165; 3,14; 2.1/2\"; 65; 200; 26; 5,50; 3\"; 210; 28; 170; 6,63; 3.1/2\"; (90); 230; 30; 150; 185; M22; 8,55; 4\"; 100; 240; 32; 195; 10,0; 5\"; 125; 275; 36; 15,3; 6\"; 325; 38; 235; 12; 27; M24; 22,2; 8\"; 370; 42; 280; 320; 32,6; 10\"; 250; 450; 48; 345; 390; 33; M30x3; 55,2; 12\"; 300; 515; 52; 405; 16; 77,9; 14\"; 350; 560; 54; 495; 96,9; 16\"; 400; 630; 510; 39; M36x3; 136"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 30 kg/cm 2 (426,6 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2238-40K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2238_40K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2238-1996 Classe 40K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2238_40K.html"
      }
    ],
    "summary": "- B2238-1996; - Classe de pressão 40k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2238-1996; - Classe de pressão 40k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 1/2\"; 15; 115; 20; 55; 80; 19; M16; 1,4; 3/4\"; (20); 120; 60; 85; 1,6; 1\"; 25; 130; 22; 70; 95; 2,1; 1.1/4\"; (32); 140; 24; 105; 2,7; 1.1/2\"; 40; 160; 90; 23; M20; 3,5; 2\"; 50; 165; 26; 3,9; 2.1/2\"; 65; 200; 30; 6,6; 3\"; 210; 32; 170; 8,0; 3.1/2\"; (90); 230; 34; 150; 185; M22; 10,1; 4\"; 100; 250; 36; 205; 12,9; 5\"; 125; 300; 27; M24; 20,8; 6\"; 355; 44; 240; 295; 12; 33; M30x3; 30,8; 8\"; 405; 290; 345; 46,8; 10\"; 475; 56; 410; 73,8; 12\"; 540; 470; 16; 39; M36x3; 99,4; 14\"; 350; 585; 64; 455; 515; 126,1; 16\"; 400; 645; 570; 170,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 kg/cm 2 (568,8 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-cego-JISB2238-63K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2238_63K.html",
    "sourcePages": [
      {
        "title": "Flange Cego norma JIS B2238-1996 Classe 63K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_cego_JISB2238_63K.html"
      }
    ],
    "summary": "- B2238-1996; - Classe de pressão 63k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F300"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2238-1996; - Classe de pressão 63k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Nominal; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 1/2\"; 15; 120; 23; 55; 85; 19; M16; 1,9; 3/4\"; (20); 135; 25; 60; 95; M20; 2,5; 1\"; 140; 27; 70; 100; 2,9; 1.1/4\"; (32); 150; 30; 80; 110; 3,8; 1.1/2\"; 40; 175; 32; 90; 130; M22; 5,6; 2\"; 50; 185; 34; 105; 145; 6,3; 2.1/2\"; 65; 220; 38; 7,2; 3\"; 230; 11,9; 3.1/2\"; (90); 255; 42; 205; M24; 15,4; 4\"; 270; 44; 165; 18,3; 5\"; 125; 325; 200; 265; 33; M30x3; 30,0; 6\"; 365; 54; 240; 305; 12; 40,2; 8\"; 425; 290; 360; 62,3; 10\"; 250; 500; 68; 355; 430; 39; M36x3; 97,7; 12\"; 300; 560; 77; 410; 485; 16; 138,1; 14\"; 350; 615; 81; 455; 530; 46; M49x3; 172,9; 16\"; 400; 680; 89; 515; 590; 236,5"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 63 kg/cm 2 (895,86 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_150.html"
      },
      {
        "title": "Flange Com Pescoço (Welding Neck) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_300.html"
      },
      {
        "title": "Flange Com Pescoço (Welding Neck) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_600.html"
      },
      {
        "title": "Flange Com Pescoço (Welding Neck) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_900.html"
      },
      {
        "title": "Flange Com Pescoço (Welding Neck) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_1500.html"
      },
      {
        "title": "Flange Com Pescoço (Welding Neck) 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "150 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 11.1; 88,9; 34,9; 47,6; 15,7; 60,3; 15,9; 30,2; 0,9; 3/4\"; 26,7; 12,7; 98,4; 42,9; 52,4; 20,8; 69,8; 38,1; 1\"; 33,5; 14,3; 108,0; 50,8; 55,6; 79,4; 49,2; 1,4; 1.1/4\"; 42,2; 117,0; 63,5; 57,2; 35,1; 58,7; 1.1/2\"; 48,3; 17,5; 127,0; 73,0; 61,9; 40,9; 65,1; 1,8; 2\"; 60,5; 19,0; 152,0; 92,1; 52,6; 121,0; 77,8; 2,7; 2.1/2\"; 73,2; 22,2; 178,0; 104,8; 62,7; 140,0; 90,5; 3,6; 3\"; 23,8; 190,0; 78,0; 4,5; 3.1/2\"; 102,0; 216,0; 71,4; 90,2; 122,0; 5,4; 4\"; 114,0; 229,0; 157,0; 76,2; 135,0; 6,8; 5\"; 141,0; 254,0; 186,0; 128,0; 22,0; 164,0; 8,6; 6\"; 168,0; 25,4; 279,0; 154,0; 241,0; 192,0; 10,9; 8\"; 219,0; 28,6; 343,0; 270,0; 203,0; 298,0; 246,0; 17,7; 10\"; 12; 273,0; 406,0; 324,0; 255,0; 362,0; 305,0; 23,6; 12\"; 31,8; 483,0; 381,0; 432,0; 365,0; 36,3; 14\"; 356,0; 533,0; 413,0; 336,5; 476,0"
          },
          {
            "label": "Dados 2",
            "value": "400,0; 50,0; 16\"; 16; 36,5; 597,0; 470,0; 387,0; 540,0; 457,0; 64,0; 18\"; 39,7; 635,0; 438,0; 578,0; 505,0; 68,0; 20\"; 20; 508,0; 698,0; 584,0; 144,0; 489,0; 559,0; 81,6; 22\"; 558,8; 46,0; 749,3; 641,3; 149,3; 539,7; 692,1; 616,0; 24\"; 610,0; 813,0; 692,0; 590,5; 749,0; 664,0; 118,0; 26\"; (2); 24; 660,0; 869,9; 742,9; 806,4; 723,9; 136,0; 28\"; 28; 711,2; 927,1; 793,7; 128,6; 863,6; 781,0; 143,0; 30\"; 762,0; 54,0; 984,2; 857,2; 130,2; 914,4; 831,8; 163,0; 32\"; 812,8; 57,1; 1060,4; 908,0; 133,3; 977,9; 41,3; 889,0; 197,0; 34\"; 32; 1111,2; 958,8; 134,9; 1028,7; 939,8; 211,0; 36\"; 1168,4; 1022,3; 136,5; 1085,8; 996,9; 236,0; 42\"; 36; 1066,8; 66,7; 1346,2; 1193,8; 142,9; 1257,3; 340,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( H ); do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "300 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 14,3; 95,2; 34,9; 52,40; 15,7; 66,7; 15,9; 38,1; 0,9; 3/4\"; 26,7; 117,0; 42,9; 57,20; 20,8; 82,6; 19,0; 47,6; 1,4; 1\"; 33,4; 17,5; 124,0; 50,8; 61,90; 88,9; 54,0; 1,8; 1.1/4\"; 42,2; 133,0; 63,5; 65,10; 35,1; 98,4; 2,3; 1.1/2\"; 48,3; 20,6; 156,0; 73,0; 68,30; 40,9; 114,0; 22,2; 69,8; 3,2; 2\"; 60,3; 165,0; 92,1; 69,80; 52,6; 127,0; 84,1; 4,1; 2.1/2\"; 25,4; 190,0; 104,8; 76,20; 62,7; 149,0; 100,0; 5,4; 3\"; 28,6; 210,0; 79,40; 78,0; 168,0; 6,8; 3.1/2\"; 102,0; 30,2; 229,0; 140,0; 81,00; 90,2; 184,0; 8,2; 4\"; 31,8; 254,0; 157,0; 85,70; 200,0; 146,0; 11,3; 5\"; 141,0; 279,0; 186,0; 98,40; 128,0; 235,0; 178,0; 14,5; 6\"; 12; 38,5; 318,0; 216,0; 154,0; 270,0; 206,0; 8\"; 219,0; 41,3; 381,0; 111,00; 203,0; 330,0; 260,0; 30,4; 10\"; 16; 273,0; 444,0; 324,0; 117,00; 255,0; 387,0; 321,0; 12\""
          },
          {
            "label": "Dados 2",
            "value": "521,0; 130,00; 305,0; 451,0; 375,0; 14\"; 20; 356,0; 584,0; 413,0; 143,00; 336,5; 514,0; 425,0; 81,6; 16\"; 406,0; 57,2; 648,0; 470,0; 146,00; 572,0; 483,0; 113,0; 18\"; 24; 457,0; 711,0; 533,0; 159,00; 438,0; 629,0; 145,0; 20\"; 508,0; 775,0; 162,00; 489,0; 686,0; 587,0; 181,0; 22\"; 558,8; 66,8; 838,2; 641,2; 165,10; 539,7; 742,9; 641,3; 197,0; 24\"; 610,0; 914,0; 692,0; 168,00; 590,5; 813,0; 702,0; 263,0; 26\"; (2); 28; 666,7; 79,4; 971,5; 749,3; 184,15; 876,3; 44,4; 720,7; 304,0; 28\"; 717,5; 85,7; 1035,0; 800,1; 196,85; 939,8; 774,7; 367,0; 30\"; 768,3; 1092,2; 857,2; 209,55; 996,9; 827,1; 422,0; 32\"; 819,1; 1149,3; 914,4; 222,25; 1054,1; 881,0; 465,0; 34\"; 871,5; 101,6; 1206,5; 965,2; 231,80; 1104,9; 936,6; 545,0; 36\"; 32; 922,3; 1270,0; 1022,3; 241,30; 1168,4; 990,6; 590,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( H ); do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "600 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 14,3; 95,2; 34,9; 52,4; 14,0; 66,7; 15,9; 38,1; 0,9; 3/4\"; 26,7; 117,0; 42,9; 57,2; 18,8; 82,6; 19,0; 47,6; 1,8; 1\"; 33,4; 17,5; 124,0; 50,8; 61,9; 24,4; 88,9; 54,0; 1.1/4\"; 42,2; 20,6; 133,0; 63,5; 32,5; 98,4; 2,7; 1.1/2\"; 48,3; 22,2; 156,0; 73,0; 69,8; 114,0; 3,6; 2\"; 60,3; 25,4; 165,0; 92,1; 49,3; 127,0; 84,1; 5,4; 2.1/2\"; 28,6; 190,0; 104,8; 79,4; 58,9; 149,0; 100,0; 8,2; 3\"; 31,8; 210,0; 73,7; 168,0; 10,4; 3.1/2\"; 102,0; 229,0; 140,0; 85,7; 85,3; 184,0; 11,8; 4\"; 273,0; 157,0; 97,3; 216,0; 152,0; 5\"; 141,0; 44,4; 330,0; 186,0; 122,2; 267,0; 189,0; 31,0; 6\"; 12; 356,0; 146,3; 292,0; 222,0; 36,7; 8\"; 219,0; 55,6; 419,0; 270,0; 193,8; 349,0; 54,4; 10\"; 16; 508,0; 324,0; 247,6; 432,0; 343,0; 86,2; 12\"; 20; 559,0; 381,0; 298,4; 489,0; 400,0; 14\"; 603,0; 413,0; 527,0; 16\"; 406,0"
          },
          {
            "label": "Dados 2",
            "value": "76,2; 686,0; 470,0; 178,0; 41,3; 495,0; 177,0; 18\"; 457,0; 743,0; 533,0; 654,0; 546,0; 215,0; 20\"; 24; 813,0; 584,0; 724,0; 610,0; 268,0; 22\"; 558,8; 870,0; 641,3; 196,8; 778,0; 666,7; 322,0; 24\"; 940,0; 692,0; 203,0; 838,0; 718,0; 376,0; 26\"; (2); 28; 671,5; 107,9; 1016,0; 749,3; 222,2; 914,4; 747,7; 465,0; 28\"; 723,9; 111,1; 1073,1; 800,1; 234,9; 965,2; 803,3; 30\"; 774,7; 114,3; 1130,3; 857,2; 1022,3; 862,0; 590,0; 32\"; 825,5; 117,5; 1193,8; 260,3; 1079,5; 917,6; 681,0; 34\"; 877,9; 120,6; 1244,6; 269,9; 973,1; 749,0; 36\"; 928,7; 123,8; 1314,4; 282,6; 1031,9; 795,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "900 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 22,2; 121; 34,9; 60,3; 82,5; 38,1; 2,3; 3/4\"; 26,7; 25,4; 130; 42,9; 69,8; 88,9; 44,4; 2,7; 1\"; 33,5; 28,6; 149; 50,8; 73,0; 101,6; 52,4; 4,1; 1.1/4\"; 42,2; 159; 63,5; 111,1; 4,5; 1.1/2\"; 48,3; 31,8; 178; 123,8; 5,9; 2\"; 60,5; 216; 92,1; 102,0; 165,1; 104,8; 11,3; 2.1/2\"; 73,2; 41,3; 244; 105,0; 190,0; 16,3; 3\"; 241; 127,0; 14,0; 4\"; 114,0; 292; 157,0; 235,0; 159,0; 23,0; 5\"; 141,0; 349; 186,0; 279,0; 39,0; 6\"; 12; 168,0; 55,6; 381; 216,0; 140,0; 318,0; 50,0; 8\"; 219,0; 470; 270,0; 162,0; 394,0; 298,0; 79,4; 10\"; 16; 273,0; 546; 324,0; 184,0; 470,0; 368,0; 118,0; 12\"; 20; 610; 381,0; 200,0; 533,0; 419,0; 147,0; 14\"; 356,0; 85,7; 641; 413,0; 213,0; 559,0; 451,0; 181,0; 16\"; 406,0; 705; 616,0; 508,0; 225,0; 18\"; 457,0; 787; 229,0; 686,0; 565,0; 308,0; 20\"; 108,0; 857; 584,0; 248,0"
          },
          {
            "label": "Dados 2",
            "value": "749,0; 54,0; 622,0; 376,0; 24\"; 610,0; 1041; 692,0; 292,0; 902,0; 66,7; 680,0; 26\"; (2); 28; 676,3; 139,7; 1085,8; 742,9; 285,7; 952,5; 774,7; 715,0; 28\"; 728,6; 142,9; 1168,4; 793,7; 298,4; 1022,3; 831,8; 840,0; 30\"; 781,0; 149,2; 1231,9; 857,2; 311,1; 889,0; 976,0; 32\"; 158,7; 1314,4; 908,0; 330,2; 1155,7; 946,1; 1169,0; 34\"; 884,2; 1397,0; 958,8; 349,2; 1225,5; 1006,5; 1373,0; 36\"; 936,6; 171,4; 1460,5; 361,9; 1289,0; 1063,6; 1566,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "1.500 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 22,2; 121; 34,9; 60,3; 82,6; 38,1; 2,3; 3/4\"; 26,7; 25,4; 130; 42,9; 69,8; 88,9; 44,4; 2,7; 1\"; 33,4; 28,6; 149; 50,8; 73,0; 102,0; 52,4; 4,1; 1.1/4\"; 42,2; 159; 63,5; 111,0; 4,5; 1.1/2\"; 48,3; 31,8; 178; 124,0; 5,9; 2\"; 216; 92,1; 165,0; 105,0; 11,3; 2.1/2\"; 41,3; 244; 104,8; 190,0; 16,3; 3\"; 47,6; 267; 127,0; 117,0; 203,0; 133,0; 21,8; 4\"; 114,0; 54,0; 311; 157,0; 241,0; 162,0; 33,0; 5\"; 141,0; 375; 186,0; 156,0; 292,0; 197,0; 59,0; 6\"; 12; 168,0; 394; 216,0; 171,0; 318,0; 229,0; 75,0; 8\"; 219,0; 483; 270,0; 213,0; 394,0; 44,5; 125; 10\"; 273,0; 108,0; 584; 324,0; 254,0; 483,0; 368,0; 206; 12\"; 16; 673; 381,0; 283,0; 572,0; 451,0; 313; 14\"; 356,0; 749; 413,0; 298,0; 635,0; 495,0; 426; 16\"; 406,0; 146,0; 826; 470,0; 311,0; 705,0; 66,7; 552,0; 567; 18\"; 457,0; 914; 533,0; 327,0"
          },
          {
            "label": "Dados 2",
            "value": "775,0; 597,0; 737; 20\"; 508,0; 178,0; 984; 584,0; 832,0; 79,4; 641,0; 930; 24\"; 610,0; 1168; 692,0; 991,0; 762,0; 1510"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 3.; Veja detalhamento da face biselada para solda; de topo;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "2.500 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,34; 30,23; 133,35; 35,05; 73,15; 88,90; 22,35; 42,93; 3/4\"; 26,67; 31,75; 139,70; 79,50; 95,25; 50,80; 1\"; 33,53; 158,75; 107,95; 25,40; 57,15; 13; 1.1/4\"; 42,16; 38,10; 184,15; 63,50; 130,30; 28,70; 20; 1.1/2\"; 48,26; 44,45; 203,20; 111,25; 146,05; 28; 2\"; 60,45; 234,95; 92,20; 127,00; 171,45; 42; 2.1/2\"; 266,70; 104,90; 143,00; 196,85; 114,30; 52; 3\"; 66,80; 304,80; 168,40; 228,60; 94; 4\"; 76,20; 355,60; 157,23; 190,50; 273,05; 41,40; 165,10; 146; 5\"; 141,22; 419,10; 185,67; 323,85; 47,75; 244; 6\"; 482,60; 215,90; 368,30; 54,10; 378; 8\"; 12; 219,20; 552,45; 270,00; 317,50; 438,15; 576; 10\"; 673,10; 539,75; 374,65; 1068; 12\"; 762,00; 381,00; 463,55; 619,25; 441,45; 1608"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 3.; Veja detalhamento da face biselada para solda; de topo;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "150 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 11.1; 88,9; 34,9; 47,6; 15,7; 60,3; 15,9; 30,2; 0,9; 3/4\"; 26,7; 12,7; 98,4; 42,9; 52,4; 20,8; 69,8; 38,1; 1\"; 33,5; 14,3; 108,0; 50,8; 55,6; 79,4; 49,2; 1,4; 1.1/4\"; 42,2; 117,0; 63,5; 57,2; 35,1; 58,7; 1.1/2\"; 48,3; 17,5; 127,0; 73,0; 61,9; 40,9; 65,1; 1,8; 2\"; 60,5; 19,0; 152,0; 92,1; 52,6; 121,0; 77,8; 2,7; 2.1/2\"; 73,2; 22,2; 178,0; 104,8; 62,7; 140,0; 90,5; 3,6; 3\"; 23,8; 190,0; 78,0; 4,5; 3.1/2\"; 102,0; 216,0; 71,4; 90,2; 122,0; 5,4; 4\"; 114,0; 229,0; 157,0; 76,2; 135,0; 6,8; 5\"; 141,0; 254,0; 186,0; 128,0; 22,0; 164,0; 8,6; 6\"; 168,0; 25,4; 279,0; 154,0; 241,0; 192,0; 10,9; 8\"; 219,0; 28,6; 343,0; 270,0; 203,0; 298,0; 246,0; 17,7; 10\"; 12; 273,0; 406,0; 324,0; 255,0; 362,0; 305,0; 23,6; 12\"; 31,8; 483,0; 381,0; 432,0; 365,0; 36,3; 14\"; 356,0; 533,0; 413,0; 336,5; 476,0"
          },
          {
            "label": "Dados 2",
            "value": "400,0; 50,0; 16\"; 16; 36,5; 597,0; 470,0; 387,0; 540,0; 457,0; 64,0; 18\"; 39,7; 635,0; 438,0; 578,0; 505,0; 68,0; 20\"; 20; 508,0; 698,0; 584,0; 144,0; 489,0; 559,0; 81,6; 22\"; 558,8; 46,0; 749,3; 641,3; 149,3; 539,7; 692,1; 616,0; 24\"; 610,0; 813,0; 692,0; 590,5; 749,0; 664,0; 118,0; 26\"; (2); 24; 660,0; 869,9; 742,9; 806,4; 723,9; 136,0; 28\"; 28; 711,2; 927,1; 793,7; 128,6; 863,6; 781,0; 143,0; 30\"; 762,0; 54,0; 984,2; 857,2; 130,2; 914,4; 831,8; 163,0; 32\"; 812,8; 57,1; 1060,4; 908,0; 133,3; 977,9; 41,3; 889,0; 197,0; 34\"; 32; 1111,2; 958,8; 134,9; 1028,7; 939,8; 211,0; 36\"; 1168,4; 1022,3; 136,5; 1085,8; 996,9; 236,0; 42\"; 36; 1066,8; 66,7; 1346,2; 1193,8; 142,9; 1257,3; 340,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( H ); do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "300 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 14,3; 95,2; 34,9; 52,40; 15,7; 66,7; 15,9; 38,1; 0,9; 3/4\"; 26,7; 117,0; 42,9; 57,20; 20,8; 82,6; 19,0; 47,6; 1,4; 1\"; 33,4; 17,5; 124,0; 50,8; 61,90; 88,9; 54,0; 1,8; 1.1/4\"; 42,2; 133,0; 63,5; 65,10; 35,1; 98,4; 2,3; 1.1/2\"; 48,3; 20,6; 156,0; 73,0; 68,30; 40,9; 114,0; 22,2; 69,8; 3,2; 2\"; 60,3; 165,0; 92,1; 69,80; 52,6; 127,0; 84,1; 4,1; 2.1/2\"; 25,4; 190,0; 104,8; 76,20; 62,7; 149,0; 100,0; 5,4; 3\"; 28,6; 210,0; 79,40; 78,0; 168,0; 6,8; 3.1/2\"; 102,0; 30,2; 229,0; 140,0; 81,00; 90,2; 184,0; 8,2; 4\"; 31,8; 254,0; 157,0; 85,70; 200,0; 146,0; 11,3; 5\"; 141,0; 279,0; 186,0; 98,40; 128,0; 235,0; 178,0; 14,5; 6\"; 12; 38,5; 318,0; 216,0; 154,0; 270,0; 206,0; 8\"; 219,0; 41,3; 381,0; 111,00; 203,0; 330,0; 260,0; 30,4; 10\"; 16; 273,0; 444,0; 324,0; 117,00; 255,0; 387,0; 321,0; 12\""
          },
          {
            "label": "Dados 2",
            "value": "521,0; 130,00; 305,0; 451,0; 375,0; 14\"; 20; 356,0; 584,0; 413,0; 143,00; 336,5; 514,0; 425,0; 81,6; 16\"; 406,0; 57,2; 648,0; 470,0; 146,00; 572,0; 483,0; 113,0; 18\"; 24; 457,0; 711,0; 533,0; 159,00; 438,0; 629,0; 145,0; 20\"; 508,0; 775,0; 162,00; 489,0; 686,0; 587,0; 181,0; 22\"; 558,8; 66,8; 838,2; 641,2; 165,10; 539,7; 742,9; 641,3; 197,0; 24\"; 610,0; 914,0; 692,0; 168,00; 590,5; 813,0; 702,0; 263,0; 26\"; (2); 28; 666,7; 79,4; 971,5; 749,3; 184,15; 876,3; 44,4; 720,7; 304,0; 28\"; 717,5; 85,7; 1035,0; 800,1; 196,85; 939,8; 774,7; 367,0; 30\"; 768,3; 1092,2; 857,2; 209,55; 996,9; 827,1; 422,0; 32\"; 819,1; 1149,3; 914,4; 222,25; 1054,1; 881,0; 465,0; 34\"; 871,5; 101,6; 1206,5; 965,2; 231,80; 1104,9; 936,6; 545,0; 36\"; 32; 922,3; 1270,0; 1022,3; 241,30; 1168,4; 990,6; 590,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( H ); do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "600 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 14,3; 95,2; 34,9; 52,4; 14,0; 66,7; 15,9; 38,1; 0,9; 3/4\"; 26,7; 117,0; 42,9; 57,2; 18,8; 82,6; 19,0; 47,6; 1,8; 1\"; 33,4; 17,5; 124,0; 50,8; 61,9; 24,4; 88,9; 54,0; 1.1/4\"; 42,2; 20,6; 133,0; 63,5; 32,5; 98,4; 2,7; 1.1/2\"; 48,3; 22,2; 156,0; 73,0; 69,8; 114,0; 3,6; 2\"; 60,3; 25,4; 165,0; 92,1; 49,3; 127,0; 84,1; 5,4; 2.1/2\"; 28,6; 190,0; 104,8; 79,4; 58,9; 149,0; 100,0; 8,2; 3\"; 31,8; 210,0; 73,7; 168,0; 10,4; 3.1/2\"; 102,0; 229,0; 140,0; 85,7; 85,3; 184,0; 11,8; 4\"; 273,0; 157,0; 97,3; 216,0; 152,0; 5\"; 141,0; 44,4; 330,0; 186,0; 122,2; 267,0; 189,0; 31,0; 6\"; 12; 356,0; 146,3; 292,0; 222,0; 36,7; 8\"; 219,0; 55,6; 419,0; 270,0; 193,8; 349,0; 54,4; 10\"; 16; 508,0; 324,0; 247,6; 432,0; 343,0; 86,2; 12\"; 20; 559,0; 381,0; 298,4; 489,0; 400,0; 14\"; 603,0; 413,0; 527,0; 16\"; 406,0"
          },
          {
            "label": "Dados 2",
            "value": "76,2; 686,0; 470,0; 178,0; 41,3; 495,0; 177,0; 18\"; 457,0; 743,0; 533,0; 654,0; 546,0; 215,0; 20\"; 24; 813,0; 584,0; 724,0; 610,0; 268,0; 22\"; 558,8; 870,0; 641,3; 196,8; 778,0; 666,7; 322,0; 24\"; 940,0; 692,0; 203,0; 838,0; 718,0; 376,0; 26\"; (2); 28; 671,5; 107,9; 1016,0; 749,3; 222,2; 914,4; 747,7; 465,0; 28\"; 723,9; 111,1; 1073,1; 800,1; 234,9; 965,2; 803,3; 30\"; 774,7; 114,3; 1130,3; 857,2; 1022,3; 862,0; 590,0; 32\"; 825,5; 117,5; 1193,8; 260,3; 1079,5; 917,6; 681,0; 34\"; 877,9; 120,6; 1244,6; 269,9; 973,1; 749,0; 36\"; 928,7; 123,8; 1314,4; 282,6; 1031,9; 795,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "900 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 22,2; 121; 34,9; 60,3; 82,5; 38,1; 2,3; 3/4\"; 26,7; 25,4; 130; 42,9; 69,8; 88,9; 44,4; 2,7; 1\"; 33,5; 28,6; 149; 50,8; 73,0; 101,6; 52,4; 4,1; 1.1/4\"; 42,2; 159; 63,5; 111,1; 4,5; 1.1/2\"; 48,3; 31,8; 178; 123,8; 5,9; 2\"; 60,5; 216; 92,1; 102,0; 165,1; 104,8; 11,3; 2.1/2\"; 73,2; 41,3; 244; 105,0; 190,0; 16,3; 3\"; 241; 127,0; 14,0; 4\"; 114,0; 292; 157,0; 235,0; 159,0; 23,0; 5\"; 141,0; 349; 186,0; 279,0; 39,0; 6\"; 12; 168,0; 55,6; 381; 216,0; 140,0; 318,0; 50,0; 8\"; 219,0; 470; 270,0; 162,0; 394,0; 298,0; 79,4; 10\"; 16; 273,0; 546; 324,0; 184,0; 470,0; 368,0; 118,0; 12\"; 20; 610; 381,0; 200,0; 533,0; 419,0; 147,0; 14\"; 356,0; 85,7; 641; 413,0; 213,0; 559,0; 451,0; 181,0; 16\"; 406,0; 705; 616,0; 508,0; 225,0; 18\"; 457,0; 787; 229,0; 686,0; 565,0; 308,0; 20\"; 108,0; 857; 584,0; 248,0"
          },
          {
            "label": "Dados 2",
            "value": "749,0; 54,0; 622,0; 376,0; 24\"; 610,0; 1041; 692,0; 292,0; 902,0; 66,7; 680,0; 26\"; (2); 28; 676,3; 139,7; 1085,8; 742,9; 285,7; 952,5; 774,7; 715,0; 28\"; 728,6; 142,9; 1168,4; 793,7; 298,4; 1022,3; 831,8; 840,0; 30\"; 781,0; 149,2; 1231,9; 857,2; 311,1; 889,0; 976,0; 32\"; 158,7; 1314,4; 908,0; 330,2; 1155,7; 946,1; 1169,0; 34\"; 884,2; 1397,0; 958,8; 349,2; 1225,5; 1006,5; 1373,0; 36\"; 936,6; 171,4; 1460,5; 361,9; 1289,0; 1063,6; 1566,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 4.; Veja detalhamento da face biselada para solda; de topo;; 5.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 6.; de Teste de Pressão Hidrostática;; 7.; de Pressão e Temperatura de Serviço;; 8.; de Dimensões dos Prisioneiros;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "1.500 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,3; 22,2; 121; 34,9; 60,3; 82,6; 38,1; 2,3; 3/4\"; 26,7; 25,4; 130; 42,9; 69,8; 88,9; 44,4; 2,7; 1\"; 33,4; 28,6; 149; 50,8; 73,0; 102,0; 52,4; 4,1; 1.1/4\"; 42,2; 159; 63,5; 111,0; 4,5; 1.1/2\"; 48,3; 31,8; 178; 124,0; 5,9; 2\"; 216; 92,1; 165,0; 105,0; 11,3; 2.1/2\"; 41,3; 244; 104,8; 190,0; 16,3; 3\"; 47,6; 267; 127,0; 117,0; 203,0; 133,0; 21,8; 4\"; 114,0; 54,0; 311; 157,0; 241,0; 162,0; 33,0; 5\"; 141,0; 375; 186,0; 156,0; 292,0; 197,0; 59,0; 6\"; 12; 168,0; 394; 216,0; 171,0; 318,0; 229,0; 75,0; 8\"; 219,0; 483; 270,0; 213,0; 394,0; 44,5; 125; 10\"; 273,0; 108,0; 584; 324,0; 254,0; 483,0; 368,0; 206; 12\"; 16; 673; 381,0; 283,0; 572,0; 451,0; 313; 14\"; 356,0; 749; 413,0; 298,0; 635,0; 495,0; 426; 16\"; 406,0; 146,0; 826; 470,0; 311,0; 705,0; 66,7; 552,0; 567; 18\"; 457,0; 914; 533,0; 327,0"
          },
          {
            "label": "Dados 2",
            "value": "775,0; 597,0; 737; 20\"; 508,0; 178,0; 984; 584,0; 832,0; 79,4; 641,0; 930; 24\"; 610,0; 1168; 692,0; 991,0; 762,0; 1510"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 3.; Veja detalhamento da face biselada para solda; de topo;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "COM PESCOÇO (WELDING NECK) - ANSI B 16.5 -",
        "rows": [
          {
            "label": "Dados",
            "value": "2.500 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 21,34; 30,23; 133,35; 35,05; 73,15; 88,90; 22,35; 42,93; 3/4\"; 26,67; 31,75; 139,70; 79,50; 95,25; 50,80; 1\"; 33,53; 158,75; 107,95; 25,40; 57,15; 13; 1.1/4\"; 42,16; 38,10; 184,15; 63,50; 130,30; 28,70; 20; 1.1/2\"; 48,26; 44,45; 203,20; 111,25; 146,05; 28; 2\"; 60,45; 234,95; 92,20; 127,00; 171,45; 42; 2.1/2\"; 266,70; 104,90; 143,00; 196,85; 114,30; 52; 3\"; 66,80; 304,80; 168,40; 228,60; 94; 4\"; 76,20; 355,60; 157,23; 190,50; 273,05; 41,40; 165,10; 146; 5\"; 141,22; 419,10; 185,67; 323,85; 47,75; 244; 6\"; 482,60; 215,90; 368,30; 54,10; 378; 8\"; 12; 219,20; 552,45; 270,00; 317,50; 438,15; 576; 10\"; 673,10; 539,75; 374,65; 1068; 12\"; 762,00; 381,00; 463,55; 619,25; 441,45; 1608"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( H ) do flange;; 3.; Veja detalhamento da face biselada para solda; de topo;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) - DIN",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN.html"
      }
    ],
    "summary": "(Welding Neck) - DIN",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Flange Com Pescoço (Welding Neck) - DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "(Welding Neck) - DIN"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2631-PN6-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2631_PN6.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço Welding Neck norma DIN 2631 Classe PN 6 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2631_PN6.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2631; - Classe de pressão PN 6 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20; 80; 12; 55; 30; 28; 40; M 10; 11; 0,392; 21,3; 3/4\"; 25; 90; 14; 65; 32; 35; 2,3; 50; 0,592; 26,9; 38; 1\"; 100; 75; 2,6; 60; 0,747; 33,7; 42; 1.1/4\"; 120; 70; M 12; 1,05; 42,4; 1.1/2\"; 44,5; 130; 58; 1,18; 48,3; 62; 2\"; 57; 140; 110; 2,9; 1,34; 60,3; 74; 2.1/2\"; 76,1; 160; 88; 1,67; 3\"; 88,9; 190; 16; 150; 102; 3,2; 10; 128; M 16; 18; 2,71; 4\"; 108; 210; 170; 45; 122; 3,6; 148; 3,24; 114; 5\"; 125; 133; 240; 200; 48; 178; 4,49; 139,7; 155; 6\"; 159; 265; 225; 172; 4,5; 202; 5,15; 168,3; 184; 8\"; 219,1; 320; 280; 236; 5,9; 258; 7,78; 10\"; 250; 267; 375; 22; 335; 282; 6,3; 312; 10,8; 273; 290; 12\"; 300; 323,9; 440; 395; 342; 7,1; 365; M 20; 14\"; 350"
          },
          {
            "label": "Dados 2",
            "value": "355,6; 490; 445; 385; 415; 18,5; 368; 16,7; 16\"; 400; 406,4; 540; 495; 438; 465; 21,2; 419; 19; 20\"; 500; 508; 645; 24; 600; 68; 538; 570; 28,6; 24\"; 610; 755; 705; 640; 670; M 24; 26; 31,5; 28\"; 700; 711; 860; 810; 740; 775; 37,4; 32\"; 800; 813; 975; 920; 842; 880; M 27; 46,1; 36\"; 900; 914; 1075; 1020; 942; 980; 55,6; 40\"; 1000; 1016; 1175; 1120; 1045; 1080; 61,9; 48\"; 1200; 1220; 1405; 1340; 1248; 1295; M 30; 33; 56\"; 1400; 1420; 1630; 1560; 1452; 1510; 36; M 33; 149; 64\"; 1600; 1620; 1830; 34; 1760; 1655; 1710; 180; 72\"; 1800; 1820; 2045; 1970; 1855; 1920; 44; M 36; 39; 80\"; 2000; 2020; 2265; 2180; 2058; 2125; M 39; 295; 88\"; 2200; 2220; 2475; 2390; 115; 2260; 2335; 52; 361; 96\"; 2400; 2420; 2685; 2600; 2462; 13; 2545; 56; 104\"; 2620; 2905; 46; 2810; 2665; 2750; M 45; 530; 112\"; 2800; 2820; 3115; 3020"
          },
          {
            "label": "Dados 3",
            "value": "135; 2865; 2960; 64; 643; 120\"; 3000; 3315; 3220; 3068; 3160; 777; 128\"; 3200; 3525; 54; 3430; 3272; 3370; 72; 851; 136\"; 3400; 3420; 3735; 3640; 3475; 3580; 76; 993; 144\"; 3600; 3620; 3970; 3860; 165; 3678; 3790; M 52; 1001"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 6 bar (87 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2632-PN10-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2632_PN10.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço Welding Neck norma DIN 2632 Classe PN 10 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2632_PN10.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2632; - Classe de pressão PN 10 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a norma DIN 2633 classe de pressão PN 16",
        "rows": [
          {
            "label": "Dados",
            "value": "21,3; 3/4\"; 25; 26,9; 1\"; 30; 33,7; 1.1/4\"; 32; 38; 42,4; 1.1/2\"; 40; 44,5; 48,3; 2\"; 50; 57; 60,3; 2.1/2\"; 65; 76,1; 3\"; 80; 88,9; 4\"; 100; 108; 114,3; 5\"; 125; 133; 139,7; 6\"; 150; 159; 168,3; (mm; 8\"; 200; 219,1; 340; 24; 295; 62; 235; 5,9; 10; 16; 268; M 20; 22; 11,3; 10\"; 250; 267; 395; 26; 350; 68; 285; 6,3; 12; 320; 14,7; 273; 292; 12\"; 300; 323,9; 445; 400; 344; 7,1; 370; 17,4; 14\"; 355,6; 505; 460; 385; 430; 23,6; 368; 21,6; 16\"; 406,4; 565; 515; 72; 440; 482; M 24; 28,6; 419; 26,2; 18\"; (450); 457; 615; 28; 488; 532; 31,5; 20\"; 500; 508; 670; 620; 75; 542; 585; 38,1; 24\"; 600; 610; 780; 725; 642; 18; 685; M 27; 44,6; 28\"; 700; 711; 895; 840; 745; 800; 62,4; 32\"; 813; 1015; 950; 90; 850; 905; M 30; 33; 84,1; 36\"; 900; 914; 1115; 34; 1050; 95; 1005; 98,5; 40\"; 1000; 1016; 1230; 1160; 1052; 1110; M 33"
          },
          {
            "label": "Dados 2",
            "value": "36; 115; 48\"; 1200; 1220; 1455; 1380; 1255; 11; 1330; M 36; 39; 182; 56\"; 1400; 1420; 1675; 42; 1590; 120; 1460; 1535; M 39; 248; 64\"; 1600; 1620; 1915; 46; 1820; 130; 1665; 14; 1760; M 45; 48; 347; 72\"; 1800; 2115; 2020; 140; 1868; 1960; 44; 80\"; 2000; 2325; 54; 2230; 2072; 2170; 539; 88\"; 2200; 2220; 2550; 58; 2440; 160; 2275; 35; 2370; 52; M 52; 56; 658; 96\"; 2400; 2420; 2760; 2650; 170; 2478; 2570; 825; 104\"; 2600; 2620; 2960; 66; 2850; 180; 2680; 2780; 60; 979; 112\"; 2800; 2820; 3180; 70; 3070; 190; 2882; 3000; 64; 1156; 120\"; 3020; 3405; 3290; 3085; 45; 3210; M 56; 1402"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 bar (145 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2633-PN16-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2633_PN16.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) - DIN » DIN 2633 - PN 16",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2633_PN16.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2633; - Classe de pressão PN 16 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20; 95; 14; 65; 35; 30; 45; M 12; 0,648; 21,3; 32; 3/4\"; 25; 105; 16; 75; 38; 2,3; 58; 0,952; 26,9; 40; 1\"; 115; 85; 42; 2,6; 68; 1,14; 33,7; 1.1/4\"; 140; 100; 52; 78; M 16; 18; 1,69; 42,4; 56; 1.1/2\"; 44,5; 150; 110; 60; 88; 1,86; 48,3; 64; 2\"; 50; 57; 165; 125; 72; 2,9; 102; 2,53; 60,3; 2.1/2\"; 76,1; 185; 145; 90; 10; 122; 3,06; 3\"; 80; 88,9; 200; 160; 3,2; 138; 3,7; 4\"; 108; 220; 180; 3,6; 12; 158; 4,62; 114,3; 131; 5\"; 133; 250; 22; 210; 55; 188; 6,3; 139,7; 156; 6\"; 159; 285; 240; 175; 4,5; 212; M 20; 7,75; 168,3; 184; 7\"; (175); 193,7; 315; 24; 270; 5,4; 242; 9,85; 8\"; 219,1; 340; 295; 62; 235; 5,9; 268; 11; 10\"; 267; 405; 26; 355; 70; 320; M 24"
          },
          {
            "label": "Dados 2",
            "value": "15,6; 273; 292; 12\"; 300; 323,9; 460; 28; 410; 344; 7,1; 378; 14\"; 350; 355,6; 520; 470; 82; 390; 438; 31,2; 368; 28,8; 16\"; 400; 406,4; 580; 525; 445; 490; M 27; 39,3; 419; 36,3; 18\"; (450); 457; 640; 34; 585; 550; 44,3; 20\"; 500; 508; 715; 650; 548; 610; M 30; 33; 61; 24\"; 600; 840; 36; 770; 652; 8,8; 725; M 33; 75,4; 28\"; 700; 711; 910; 755; 795; 77; 32\"; 800; 813; 1025; 950; 855; 900; M 36; 39; 101; 36\"; 914; 1125; 1050; 955; 1000; 40\"; 1016; 1255; 1170; 120; 1058; 1115; M 39; 162; 48\"; 1200; 1220; 1485; 48; 1390; 130; 1262; 13; 1330; M 45; 243; 56\"; 1400; 1420; 1685; 1590; 1465; 1530; 323; 64\"; 1600; 1620; 1930; 1820; 1668; 1750; M 52; 479; 72\"; 1800; 2130; 2020; 170; 1870; 1950; 44; 599; 80\"; 2000; 2345; 66; 2230; 2072; 2150; M 56; 719"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 16 bar (232 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2634-PN25-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2634_PN25.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço Welding Neck norma DIN 2634 Classe PN 25 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2634_PN25.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2634; - Classe de pressão PN 25 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a norma DIN 2635 classe de pressão PN 40",
        "rows": [
          {
            "label": "Dados",
            "value": "21,3; 3/4\"; 25; 26,9; 1\"; 30; 33,7; 1.1/4\"; 32; 38; 42,4; 1.1/2\"; 40; 44,5; 48,3; 2\"; 50; 57; 60,3; 2.1/2\"; 65; 76,1; 3\"; 80; 88,9; 4\"; 100; 108; 114,3; 5\"; 125; 133; 139,7; 6\"; 150; 159; 168,3; (mm; 7\"; (175); 193,7; 350; 28; 280; 75; 218; 5,6; 10; 248; 12; M 24; 26; 13,4; 8\"; 200; 219,1; 360; 310; 244; 6,3; 16; 278; 17; 10\"; 250; 267; 425; 370; 88; 292; 7,1; 18; 335; M 27; 24,4; 273; 298; 12\"; 300; 323,9; 485; 34; 430; 92; 352; 395; 31,2; 14\"; 355,6; 555; 490; 398; 450; M 30; 33; 47,2; 368; 44,2; 16\"; 400; 406,4; 620; 550; 110; 452; 8,8; 505; M 33; 36; 61,7; 419; 57,9; 18\"; (450); 457; 670; 42; 600; 500; 71,9; 20\"; 508; 730; 44; 660; 558; 615; 89,6; 24\"; 610; 845; 46; 770; 11; 720; M 36; 39; 104; 28\"; 700; 711; 960; 875; 760; 13; 24; 820; M 39; 136; 32\"; 800; 813; 1085; 990; 135; 865; 14; 22; 930; M 45; 48"
          },
          {
            "label": "Dados 2",
            "value": "186; 36\"; 900; 914; 1185; 54; 1090; 145; 968; 1030; 236; 40\"; 1000; 1016; 1320; 58; 1210; 155; 1070; 1140; M 52; 56; 307"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 25 bar (635 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2635-PN40-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2635_PN40.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço Welding Neck norma DIN 2635 Classe PN 40 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2635_PN40.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2635; - Classe de pressão PN 40 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20; 95; 16; 65; 38; 30; 45; M 12; 14; 0,746; 21,3; 32; 3/4\"; 25; 105; 18; 75; 40; 2,3; 58; 1,06; 26,9; 1\"; 115; 85; 42; 2,6; 68; 1,29; 33,7; 1.1/4\"; 140; 100; 52; 78; M 16; 1,88; 42,4; 56; 1.1/2\"; 44,5; 150; 110; 60; 88; 2,33; 48,3; 64; 2\"; 50; 57; 165; 125; 48; 72; 2,9; 102; 2,82; 60,3; 2.1/2\"; 76,1; 185; 22; 145; 90; 10; 122; 3,74; 3\"; 80; 88,9; 200; 24; 160; 3,2; 12; 138; 4,75; 4\"; 108; 235; 190; 128; 3,6; 162; M 20; 6,52; 114,3; 134; 5\"; 133; 270; 26; 220; 155; 188; M 24; 9,07; 139,7; 6\"; 159; 300; 28; 250; 182; 4,5; 218; 11,8; 168,3; 192; 7\"; (175); 193,7; 350; 295; 82; 5,6; 260; M 27; 18,2; 8\"; 219,1; 375; 34; 320; 244; 6,3; 285; 21,5; 10\"; 267"
          },
          {
            "label": "Dados 2",
            "value": "450; 385; 298; 7,1; 345; M 30; 33; 34,9; 273; 306; 12\"; 323,9; 515; 362; 410; 49,7; 14\"; 355,6; 580; 46; 510; 408; 8,8; 465; M 33; 36; 68,1; 368; 16\"; 400; 406,4; 660; 585; 135; 462; 11; 535; M 36; 39; 96,5; 419; 18\"; (450); 457; 685; 610; 500; 12,5; 560; 99,7; 20\"; 508; 755; 670; 562; 14,2; 615; M 39; 117"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 bar (580 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2636-PN64-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2636_PN64.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço Welding Neck norma DIN 2636 classe PN 64 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2636_PN64.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2636; - Classe de pressão PN 64 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a norma DIN 2637 classe de pressão PN 100",
        "rows": [
          {
            "label": "Dados",
            "value": "21,3; 3/4\"; 25; 26,9; 1\"; 30; 33,7; 1.1/4\"; 32; 38; 42,4; 1.1/2\"; 40; 44,5; 48,3; (mm; 2\"; 50; 57; 180; 26; 135; 62; 78; 2,9; 10; 102; M 20; 22; 4,55; 60,3; 82; 2.1/2\"; 65; 76,1; 205; 160; 68; 98; 3,2; 12; 122; 5,73; 3\"; 80; 88,9; 215; 28; 170; 72; 112; 3,6; 138; 6,69; 4\"; 100; 108; 250; 200; 132; 162; M 24; 9,66; 114,3; 5\"; 125; 133; 295; 34; 240; 88; 4,5; 188; M 27; 15,1; 139,7; 168; 6\"; 150; 159; 345; 36; 280; 95; 192; 5,6; 218; M 30; 33; 21,9; 168,3; 202; 7\"; (175); 193,7; 375; 310; 105; 228; 6,3; 16; 260; 23,7; 8\"; 219,1; 415; 42; 110; 256; 7,1; 285; M 33; 34,9; 10\"; 267; 470; 46; 400; 8,8; 18; 49,6; 273; 316; 12\"; 300; 323,9; 530; 52; 460; 140; 372; 11; 410; 68,7; 14\"; 350; 355,6; 600; 56; 525; 420; 12,5; 465; M 36; 39; 94,6; 368; 16\"; 406,4; 670; 60; 585; 475; 14,2; 535; M 39; 124; 419"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 64 bar (928 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-WN-DIN2637-PN100-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2637_PN100.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço Welding Neck norma DIN 2637 classe PN 100 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_WN_DIN2637_PN100.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2637; - Classe de pressão PN 100 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; - Macho"
          }
        ]
      },
      {
        "title": "(DIN 2512 / DIN 2513);",
        "rows": [
          {
            "label": "Dados",
            "value": "- Fêmea; - Macho/Fêmea para anel o'ring (DIN 2514); Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Biselamento para solda no pescoço ( S ):; - Conforme DIN 2559."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); h 1; d 3; h 2; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO Série 1; DIN Série 2; 3/8\"; 10; 14,0; 100,0; 20; 70; 45,0; 28; 1,8; 40; M 12; 14; 1,09; 17,2; 32; 1/2\"; 15; 20,0; 105,0; 75; 45; 1,19; 21,3; 34; 1\"; 25; 30,0; 140,0; 24; 100; 58,0; 48; 2,6; 68; M 16; 18; 2,66; 33,7; 52; 1.1/2\"; 44,5; 170,0; 26; 125; 62,0; 65; 2,9; 88; M 20; 22; 4,09; 48,3; 2\"; 50; 57,0; 195,0; 145; 68,0; 86; 3,2; 102; M 24; 5,98; 60,3; 90; 2.1/2\"; 76,1; 220,0; 30; 170; 76,0; 108; 3,6; 12; 122; 7,91; 3\"; 80; 88,9; 230,0; 180; 78,0; 120; 138; 8,95; 4\"; 108,0; 265,0; 36; 210; 90,0; 162; M 27; 13,7; 114,3; 150; 5\"; 133,0; 315,0; 250; 6,3; 188; M 30; 33; 22,7; 139,7; 6\"; 159,0; 355,0; 44; 290; 115,0; 7,1; 218; 30,2; 168,3; 8\"; 200; 219,1; 430,0; 360; 130,0; 278; 16; 285"
          },
          {
            "label": "Dados 2",
            "value": "M 33; 52,8; 10\"; 267,0; 505,0; 60; 430; 157,0; 340; 12,5; 345; M 36; 39; 81,4; 273,0; 12\"; 300; 323,9; 585,00; 500,0; 170,00; 400; 14,2; 410; M 39; 42; 14\"; 350; 355,6; 655,00; 74,0; 560,0; 189,00; 460; 465; M 45; 165; 368"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 100 bar (1450 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-JIS-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JIS.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) - JIS",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JIS.html"
      }
    ],
    "summary": "(Welding Neck) - JIS",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Flange Com Pescoço (Welding Neck) - JIS",
        "rows": [
          {
            "label": "Dados",
            "value": "(Welding Neck) - JIS"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-JISB2220-30K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JISB2220_30K.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) norma JIS B2220-1995 B2238-1996 Classe 30K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JISB2220_30K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 15 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; Diâmetro; Nominal; OD; Nr.; Furos; Tam.; Para-; fuso; (rsc); (pol) (4); (mm); (kg) (2); 1/2\"; 15; 21.7; 115; 18; 45; 16,1; 22.0; 40; 55; 80; 20; 19; M16; 1.33; 3/4\"; (20); 27.2; 120; 21,4; 27.5; 44; 60; 85; 1.47; 1\"; 25; 34.0; 130; 48; 27,2; 34.4; 52; 70; 95; 1.95; 1.1/4\"; (32); 42.7; 140; 22; 35,5; 43.1; 62; 105; 30; 2.43; 1.1/2\"; 48.6; 160; 54; 41,2; 49.1; 90; 23; M20; 3.16; 2\"; 50; 60.5; 165; 57; 52,7; 61.0; 84; 3.33; 2.1/2\"; 65; 76.3; 200; 26; 69; 65,9; 76.9; 104; 5.91; 3\"; 89.1; 210; 28; 73; 78,1; 89.7; 118; 170; 7.05; 3.1/2\"; (90); 101.6; 230; 74; 90,2; 102.3; 150; 185; M22; 8.54; 4\"; 100; 114.3; 240; 32; 76; 102,3; 115.1; 142; 195; 9.72; 5\"; 125; 139.8; 275; 36; 86; 126,6; 140.7; 172; 10; 14.4; 6\"; 165.2; 325; 38; 151,0; 166.2; 202; 235; 12; 27; M24; 20.6; 8\"; 216.3; 370; 42; 102; 199,9; 217.5"
          },
          {
            "label": "Dados 2",
            "value": "254; 280; 320; 28.7; 10\"; 250; 267.4; 450; 248,8; 268.7; 312; 345; 390; 33; M30x3; 47.3; 12\"; 300; 318.5; 515; 127; 297,9; 320.0; 366; 405; 16; 62.8; 14\"; 350; 355.5; 560; 134; 333,4; 357.2; 406; 495; 77.0; 16\"; 400; 406.4; 630; 149; 381,0; 408.3; 462; 510; 39; M36x3; 108.0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 30 kg/cm 2 (426,6 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-JISB2238-40K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JISB2238_40K.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) norma JIS B2238-1996 Classe 40K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JISB2238_40K.html"
      }
    ],
    "summary": "- B2238-1996; - Classe de pressão 40k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2238-1996; - Classe de pressão 40k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 15 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; Diâmetro; Nominal; OD; Nr.; Furos; Tam.; Para-; fuso; (rsc); (pol) (4); (mm); (kg) (2); 1/2\"; 15; 21.7; 115; 20; 53; 15,8; 21,7; 40; 55; 80; 19; M16; 1,5; 3/4\"; (20); 27.2; 120; 58; 21,1; 27,2; 45; 60; 85; 1,7; 1\"; 25; 34.0; 130; 22; 63; 26,8; 34,0; 54; 70; 95; 2,2; 1.1/4\"; (32); 42.7; 140; 24; 69; 35,1; 42,7; 62; 105; 2,8; 1.1/2\"; 48.6; 160; 72; 40,7; 48,6; 90; 23; M20; 3,5; 2\"; 50; 60.5; 165; 26; 75; 52,2; 60,5; 88; 4,1; 2.1/2\"; 65; 76.3; 200; 30; 81; 65,3; 76,3; 108; 6,9; 3\"; 89.1; 210; 32; 76,4; 89,1; 119; 170; 7,9; 3.1/2\"; (90); 101.6; 230; 34; 89,5; 101,6; 150; 185; M22; 9,4; 4\"; 100; 114.3; 250; 36; 104; 101,5; 114,3; 146; 205; 12,3; 5\"; 125; 139.8; 300; 27; M24; 6\"; 165.2; 355; 44; 150,0; 165,2; 215; 240; 295; 12; 33; M30x3; 30,6; 8\"; 216.3; 405; 135; 198,7; 216,3; 270; 290; 345; 41,6; 10\""
          },
          {
            "label": "Dados 2",
            "value": "267.4; 475; 56; 154; 247,5; 267,4; 333; 410; 68,1; 12\"; 318.5; 540; 159; 296,4; 318,5; 400; 470; 16; 39; M36x3; 96,0; 14\"; 350; 355.5; 585; 64; 168; 331,8; 355,6; 432; 455; 515; 115,0; 16\"; 406.4; 645; 181; 379,1; 406,4; 466; 570; 143,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 kg/cm 2 (568,8 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-wn-JISB2238-63K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JISB2238_63K.html",
    "sourcePages": [
      {
        "title": "Flange Com Pescoço (Welding Neck) norma JIS B2238-1996 Classe 63K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_wn_JISB2238_63K.html"
      }
    ],
    "summary": "- B2238-1996; - Classe de pressão 63k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F301"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2238-1996; - Classe de pressão 63k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 15 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; Diâmetro; Nominal; OD; Nr.; Furos; Tam.; Para-; fuso; (rsc); (pol) (4); (mm); (kg) (2); 1/2\"; 15; 21.7; 120; 23; 61; 15,8; 21,7; 42; 55; 85; 19; M16; 1,9; 3/4\"; (20); 27.2; 135; 25; 71; 21,1; 27,2; 46; 60; 95; M20; 2,5; 1\"; 34.0; 140; 27; 74; 26,8; 34,0; 56; 70; 100; 3,5; 1.1/4\"; (32); 42.7; 150; 30; 75; 35,1; 42,7; 80; 110; 3,7; 1.1/2\"; 40; 48.6; 175; 32; 40,7; 48,6; 90; 130; M22; 5,5; 2\"; 50; 60.5; 185; 34; 104; 52,2; 60,5; 92; 105; 145; 6,5; 2.1/2\"; 65; 76.3; 220; 38; 107; 65,3; 76,3; 118; 10,3; 3\"; 89.1; 230; 76,4; 89,1; 12,4; 3.1/2\"; (90); 101.6; 255; 126; 89,5; 101,6; 205; M24; 15,2; 4\"; 114.3; 270; 44; 101,5; 114,3; 154; 165; 17,7; 5\"; 125; 139.8; 325; 200; 265; 33; M30x3; 6\"; 165.2; 365; 54; 173; 150,0; 165,2; 240; 305; 12; 39,4; 8\"; 216.3; 425; 215; 198,7; 216,3; 280; 290; 360; 60,1; 10\"; 250"
          },
          {
            "label": "Dados 2",
            "value": "267.4; 500; 68; 256; 247,5; 267,4; 348; 355; 430; 39; M36x3; 114,0; 12\"; 300; 318.5; 560; 77; 286; 296,4; 318,5; 402; 410; 485; 16; 154,0; 14\"; 350; 355.5; 615; 81; 301; 331,8; 355,6; 438; 455; 530; M49x3; 191,0; 16\"; 400; 406.4; 680; 89; 314; 379,1; 406,9; 490; 515; 590; 247,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 63 kg/cm 2 (895,86 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_150.html"
      },
      {
        "title": "Flange Sobreposto com Reforço 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_300.html"
      },
      {
        "title": "Flange Sobreposto com Reforço 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_600.html"
      },
      {
        "title": "Flange Sobreposto com Reforço 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_900.html"
      },
      {
        "title": "Flange Sobreposto com Reforço 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_1500.html"
      },
      {
        "title": "Flange Sobreposto com Reforço Slip On 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 22,4; 88,9; 34,9; 60,3; 15,9; 30,2; 0,5; 3/4\"; 12,7; 27,7; 98,4; 42,9; 69,8; 38,1; 0,9; 1\"; 14,3; 34,5; 108,0; 50,8; 79,4; 49,2; 17,5; 1.1/4\"; 43,2; 117,0; 63,5; 58,7; 20,6; 1,4; 1.1/2\"; 49,5; 127,0; 73,0; 65,1; 22,2; 2\"; 19,0; 62,0; 152,0; 92,1; 121,0; 77,8; 25,4; 2,3; 2.1/2\"; 74,7; 178,0; 104,8; 140,0; 90,5; 28,6; 3,2; 3\"; 23,8; 90,7; 190,0; 3,6; 3.1/2\"; 103,0; 216,0; 122,0; 31,8; 5,0; 4\"; 116,0; 229,0; 157,0; 135,0; 33,3; 5,9; 5\"; 144,0; 254,0; 186,0; 22,0; 164,0; 36,5; 6,8; 6\"; 171,0; 279,0; 241,0; 192,0; 39,7; 8,6; 8\"; 221,0; 343,0; 270,0; 298,0; 246,0; 44,4; 13,6; 10\"; 12; 276,0; 406,0; 324,0; 362,0; 305,0; 19,5; 12\"; 327,0; 483,0; 381,0; 432,0; 365,0; 55,6; 29,0; 14\"; 359,0; 533,0; 413,0; 476,0; 400,0; 57,2; 41,0; 16\"; 16; 410,0; 597,0; 470,0; 540,0; 457,0; 44,5; 18\""
          },
          {
            "label": "Dados 2",
            "value": "462,0; 635,0; 578,0; 505,0; 68,3; 59,0; 20\"; 20; 513,0; 693,0; 584,0; 559,0; 75,0; 22\"; 46,0; 564,4; 749,3; 641,3; 692,1; 616,0; 79,5; 82,0; 24\"; 47,6; 813,0; 692,0; 749,0; 664,0; 82,6; 99,8; 26\"; (2); 24; 666,75; 869,9; 742,9; 806,4; 723,9; 85,7; 113,0; 28\"; 28; 52,4; 717,55; 927,1; 793,7; 863,6; 781,0; 87,3; 129,0; 30\"; 54,0; 768,35; 984,2; 857,2; 914,4; 831,8; 143,0; 32\"; 57,1; 819,15; 1060,4; 908,0; 977,9; 41,3; 889,0; 179,0; 34\"; 32; 869,95; 1111,2; 958,8; 1028,7; 939,8; 93,7; 36\"; 920,75; 1168,4; 1022,3; 1085,8; 996,9; 95,2; 218,0; 42\"; 36; 66,7; 1073,15; 1346,2; 1193,8; 1257,3; 101,6; 308,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 38,1; 22,2; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 47,6; 25,4; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 54,0; 27,0; 1.1/4\"; 43,2; 133,0; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 49,5; 156,0; 73,0; 114,0; 69,8; 30,2; 2,7; 2\"; 62,0; 165,0; 92,1; 127,0; 84,1; 33,3; 3,2; 2.1/2\"; 74,7; 190,0; 104,8; 149,0; 100,0; 4,5; 3\"; 28,6; 90,7; 210,0; 168,0; 5,9; 3.1/2\"; 103,0; 229,0; 140,0; 184,0; 44,4; 7,7; 4\"; 31,8; 116,0; 254,0; 157,0; 200,0; 146,0; 10,0; 5\"; 144,0; 279,0; 186,0; 235,0; 178,0; 12,7; 6\"; 12; 38,5; 171,0; 318,0; 216,0; 270,0; 206,0; 52,4; 17,7; 8\"; 41,3; 221,0; 381,0; 330,0; 260,0; 61,9; 26,3; 10\"; 16; 276,0; 444,0; 324,0; 387,0; 321,0; 36,7; 12\"; 327,0; 521,0; 451,0; 375,0; 52,2; 14\"; 20; 359,0; 584,0; 413,0; 514,0; 425,0; 76,2; 74,8; 16\"; 57,2; 410,0"
          },
          {
            "label": "Dados 2",
            "value": "648,0; 470,0; 572,0; 483,0; 86,2; 18\"; 24; 60,3; 462,0; 711,0; 533,0; 629,0; 113,0; 20\"; 513,0; 775,0; 686,0; 587,0; 143,0; 22\"; 66,8; 564,4; 838,2; 641,3; 742,9; 101,6; 179,0; 24\"; 616,0; 914,0; 692,0; 813,0; 702,0; 106,0; 215,0; 26\"; (2); 28; 79,4; 666,75; 971,5; 749,3; 876,3; 720,7; 184,15; 259,0; 28\"; 85,7; 717,55; 1035,0; 800,1; 939,8; 774,7; 196,85; 30\"; 768,35; 1092,2; 857,2; 996,9; 827,1; 209,55; 368,0; 32\"; 819,15; 1149,3; 914,4; 1054,1; 881,0; 222,25; 404,0; 34\"; 869,95; 1206,5; 965,2; 1104,9; 936,6; 231,80; 488,0; 36\"; 32; 920,75; 1270,0; 1022,3; 1168,4; 990,6; 241,30; 545,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 38,1; 22,2; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 47,6; 25,4; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 54,0; 27,0; 1,8; 1.1/4\"; 20,6; 43,2; 133,0; 63,5; 98,4; 28,6; 2,3; 1.1/2\"; 49,5; 156,0; 73,0; 114,0; 69,8; 31,8; 3,1; 2\"; 62,0; 165,0; 92,1; 127,0; 84,1; 36,5; 4,1; 2.1/2\"; 74,7; 190,0; 104,8; 149,0; 100,0; 41,3; 5,9; 3\"; 90,7; 210,0; 168,0; 46,0; 7,3; 3.1/2\"; 103,0; 229,0; 140,0; 184,0; 49,2; 9,5; 4\"; 116,0; 273,0; 157,0; 216,0; 152,0; 16,8; 5\"; 44,4; 144,0; 330,0; 186,0; 267,0; 189,0; 60,3; 6\"; 12; 171,0; 356,0; 292,0; 222,0; 36,3; 8\"; 55,6; 221,0; 419,0; 270,0; 349,0; 76,2; 52,2; 10\"; 16; 276,0; 508,0; 324,0; 432,0; 343,0; 85,7; 77,1; 12\"; 20; 327,0; 559,0; 381,0; 489,0; 400,0; 14\"; 359,0; 603,0; 413,0; 527,0; 93,7; 104,0; 16\"; 410,0; 686,0"
          },
          {
            "label": "Dados 2",
            "value": "470,0; 495,0; 106,0; 150,0; 18\"; 462,0; 743,0; 533,0; 654,0; 546,0; 181,0; 20\"; 24; 513,0; 813,0; 584,0; 724,0; 610,0; 231,0; 22\"; 564,4; 870,0; 641,3; 778,0; 666,7; 133,3; 281,0; 24\"; 102,0; 616,0; 940,0; 692,0; 838,0; 718,0; 331,0; 26\"; (2); 28; 107,9; 666,75; 1016,0; 749,3; 914,4; 747,7; 222,2; 431,0; 28\"; 111,1; 717,55; 1073,1; 800,1; 965,2; 803,3; 234,9; 488,0; 30\"; 114,3; 768,35; 1130,3; 857,2; 1022,3; 862,0; 247,6; 32\"; 117,5; 819,15; 1193,8; 1079,5; 917,6; 260,3; 624,0; 34\"; 120,6; 869,95; 1244,6; 973,1; 269,9; 681,0; 36\"; 123,8; 920,75; 1314,4; 1031,9; 282,6; 726,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,3; 121; 34,9; 82,5; 38,1; 31,7; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 44,4; 2,3; 1\"; 28,6; 35,0; 149; 50,8; 101,6; 52,4; 41,3; 3,6; 1.1/4\"; 43,7; 159; 63,5; 111,1; 4,1; 1.1/2\"; 31,8; 50,3; 178; 73,0; 123,8; 69,8; 5,4; 2\"; 62,0; 216; 92,1; 165,1; 104,8; 57,1; 11,3; 2.1/2\"; 74,7; 244; 190,0; 16,3; 3\"; 90,7; 241; 127,0; 54,0; 11,8; 4\"; 116,0; 292; 157,0; 235,0; 159,0; 24,0; 5\"; 144,0; 349; 186,0; 279,0; 79,4; 37,6; 6\"; 12; 55,6; 171,0; 381; 216,0; 318,0; 85,7; 49,9; 8\"; 221,0; 470; 270,0; 394,0; 298,0; 102,0; 77,1; 10\"; 16; 276,0; 546; 324,0; 470,0; 368,0; 108,0; 111,0; 12\"; 20; 327,0; 610; 381,0; 533,0; 419,0; 117,0; 147,0; 14\"; 359,0; 641; 413,0; 559,0; 451,0; 130,0; 181,0; 16\"; 410,0; 705; 616,0; 508,0; 133,0; 193,0; 18\"; 462,0; 787; 686,0; 565,0; 152,0; 272,0; 20\"; 513,0"
          },
          {
            "label": "Dados 2",
            "value": "857; 584,0; 749,0; 622,0; 331,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 203,0; 635,0; 26\"; (2); 28; 139,7; 666,75; 1085,8; 742,9; 952,5; 774,7; 285,7; 28\"; 142,9; 717,55; 1168,4; 793,7; 1022,3; 831,8; 298,4; 817,0; 30\"; 149,2; 768,35; 1231,9; 857,2; 889,0; 311,1; 942,0; 32\"; 158,7; 819,15; 1314,4; 908,0; 1155,7; 946,1; 330,2; 1135,0; 34\"; 869,95; 1397,0; 958,8; 1225,5; 1006,5; 349,2; 1339,0; 36\"; 171,4; 920,75; 1460,5; 1289,0; 1063,6; 361,9; 1521,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,4; 121; 34,9; 82,6; 38,1; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 44,4; 2,3; 1\"; 28,6; 34,5; 149; 50,8; 102,0; 52,4; 3,6; 1.1/4\"; 43,2; 159; 63,5; 111,0; 4,1; 1.1/2\"; 31,8; 49,5; 178; 73,0; 124,0; 69,8; 5,4; 2\"; 62,0; 216; 92,1; 165,0; 105,0; 11,3; 2.1/2\"; 41,3; 74,7; 244; 104,8; 190,0; 16,3; 3\"; 47,6; 90,4; 267; 127,0; 203,0; 133,0; 21,8; 4\"; 54,0; 115,8; 311; 157,0; 241,0; 162,0; 33,1; 5\"; 143,8; 375; 186,0; 292,0; 197,0; 59,0; 6\"; 12; 170,7; 394; 216,0; 318,0; 229,0; 74,8; 8\"; 221,5; 483; 270,0; 394,0; 44,5; 118,0; 10\"; 108,0; 276,3; 584; 324,0; 483,0; 368,0; 12\"; 16; 327,1; 673; 381,0; 572,0; 451,0; 263,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 22,35; 133,35; 35,05; 88,90; 42,93; 39,62; 3/4\"; 31,75; 27,69; 139,70; 95,25; 50,80; 1\"; 34,54; 158,75; 107,95; 25,40; 57,15; 47,75; 12; 1.1/4\"; 38,10; 43,18; 184,15; 63,50; 130,30; 28,70; 73,15; 52,32; 17; 1.1/2\"; 44,45; 49,53; 203,20; 146,05; 79,50; 60,45; 24; 2\"; 61,98; 234,95; 92,20; 171,45; 69,85; 37; 2.1/2\"; 74,68; 266,70; 104,90; 196,85; 114,30; 53; 3\"; 66,80; 90,68; 304,80; 127,00; 228,60; 80; 4\"; 76,20; 116,08; 355,60; 157,23; 273,05; 41,40; 165,10; 112; 5\"; 91,90; 143,76; 419,10; 185,67; 323,85; 204; 6\"; 108,00; 170,69; 482,60; 215,90; 368,30; 54,10; 152,40; 314; 8\"; 221,49; 552,45; 270,00; 438,15; 177,80; 471; 10\"; 276,35; 673,10; 539,75; 374,65; 897; 12\"; 184,20; 327,15; 762,00; 381,00; 619,25; 441,45; 254,00; 1262"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 22,4; 88,9; 34,9; 60,3; 15,9; 30,2; 0,5; 3/4\"; 12,7; 27,7; 98,4; 42,9; 69,8; 38,1; 0,9; 1\"; 14,3; 34,5; 108,0; 50,8; 79,4; 49,2; 17,5; 1.1/4\"; 43,2; 117,0; 63,5; 58,7; 20,6; 1,4; 1.1/2\"; 49,5; 127,0; 73,0; 65,1; 22,2; 2\"; 19,0; 62,0; 152,0; 92,1; 121,0; 77,8; 25,4; 2,3; 2.1/2\"; 74,7; 178,0; 104,8; 140,0; 90,5; 28,6; 3,2; 3\"; 23,8; 90,7; 190,0; 3,6; 3.1/2\"; 103,0; 216,0; 122,0; 31,8; 5,0; 4\"; 116,0; 229,0; 157,0; 135,0; 33,3; 5,9; 5\"; 144,0; 254,0; 186,0; 22,0; 164,0; 36,5; 6,8; 6\"; 171,0; 279,0; 241,0; 192,0; 39,7; 8,6; 8\"; 221,0; 343,0; 270,0; 298,0; 246,0; 44,4; 13,6; 10\"; 12; 276,0; 406,0; 324,0; 362,0; 305,0; 19,5; 12\"; 327,0; 483,0; 381,0; 432,0; 365,0; 55,6; 29,0; 14\"; 359,0; 533,0; 413,0; 476,0; 400,0; 57,2; 41,0; 16\"; 16; 410,0; 597,0; 470,0; 540,0; 457,0; 44,5; 18\""
          },
          {
            "label": "Dados 2",
            "value": "462,0; 635,0; 578,0; 505,0; 68,3; 59,0; 20\"; 20; 513,0; 693,0; 584,0; 559,0; 75,0; 22\"; 46,0; 564,4; 749,3; 641,3; 692,1; 616,0; 79,5; 82,0; 24\"; 47,6; 813,0; 692,0; 749,0; 664,0; 82,6; 99,8; 26\"; (2); 24; 666,75; 869,9; 742,9; 806,4; 723,9; 85,7; 113,0; 28\"; 28; 52,4; 717,55; 927,1; 793,7; 863,6; 781,0; 87,3; 129,0; 30\"; 54,0; 768,35; 984,2; 857,2; 914,4; 831,8; 143,0; 32\"; 57,1; 819,15; 1060,4; 908,0; 977,9; 41,3; 889,0; 179,0; 34\"; 32; 869,95; 1111,2; 958,8; 1028,7; 939,8; 93,7; 36\"; 920,75; 1168,4; 1022,3; 1085,8; 996,9; 95,2; 218,0; 42\"; 36; 66,7; 1073,15; 1346,2; 1193,8; 1257,3; 101,6; 308,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 38,1; 22,2; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 47,6; 25,4; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 54,0; 27,0; 1.1/4\"; 43,2; 133,0; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 49,5; 156,0; 73,0; 114,0; 69,8; 30,2; 2,7; 2\"; 62,0; 165,0; 92,1; 127,0; 84,1; 33,3; 3,2; 2.1/2\"; 74,7; 190,0; 104,8; 149,0; 100,0; 4,5; 3\"; 28,6; 90,7; 210,0; 168,0; 5,9; 3.1/2\"; 103,0; 229,0; 140,0; 184,0; 44,4; 7,7; 4\"; 31,8; 116,0; 254,0; 157,0; 200,0; 146,0; 10,0; 5\"; 144,0; 279,0; 186,0; 235,0; 178,0; 12,7; 6\"; 12; 38,5; 171,0; 318,0; 216,0; 270,0; 206,0; 52,4; 17,7; 8\"; 41,3; 221,0; 381,0; 330,0; 260,0; 61,9; 26,3; 10\"; 16; 276,0; 444,0; 324,0; 387,0; 321,0; 36,7; 12\"; 327,0; 521,0; 451,0; 375,0; 52,2; 14\"; 20; 359,0; 584,0; 413,0; 514,0; 425,0; 76,2; 74,8; 16\"; 57,2; 410,0"
          },
          {
            "label": "Dados 2",
            "value": "648,0; 470,0; 572,0; 483,0; 86,2; 18\"; 24; 60,3; 462,0; 711,0; 533,0; 629,0; 113,0; 20\"; 513,0; 775,0; 686,0; 587,0; 143,0; 22\"; 66,8; 564,4; 838,2; 641,3; 742,9; 101,6; 179,0; 24\"; 616,0; 914,0; 692,0; 813,0; 702,0; 106,0; 215,0; 26\"; (2); 28; 79,4; 666,75; 971,5; 749,3; 876,3; 720,7; 184,15; 259,0; 28\"; 85,7; 717,55; 1035,0; 800,1; 939,8; 774,7; 196,85; 30\"; 768,35; 1092,2; 857,2; 996,9; 827,1; 209,55; 368,0; 32\"; 819,15; 1149,3; 914,4; 1054,1; 881,0; 222,25; 404,0; 34\"; 869,95; 1206,5; 965,2; 1104,9; 936,6; 231,80; 488,0; 36\"; 32; 920,75; 1270,0; 1022,3; 1168,4; 990,6; 241,30; 545,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 38,1; 22,2; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 47,6; 25,4; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 54,0; 27,0; 1,8; 1.1/4\"; 20,6; 43,2; 133,0; 63,5; 98,4; 28,6; 2,3; 1.1/2\"; 49,5; 156,0; 73,0; 114,0; 69,8; 31,8; 3,1; 2\"; 62,0; 165,0; 92,1; 127,0; 84,1; 36,5; 4,1; 2.1/2\"; 74,7; 190,0; 104,8; 149,0; 100,0; 41,3; 5,9; 3\"; 90,7; 210,0; 168,0; 46,0; 7,3; 3.1/2\"; 103,0; 229,0; 140,0; 184,0; 49,2; 9,5; 4\"; 116,0; 273,0; 157,0; 216,0; 152,0; 16,8; 5\"; 44,4; 144,0; 330,0; 186,0; 267,0; 189,0; 60,3; 6\"; 12; 171,0; 356,0; 292,0; 222,0; 36,3; 8\"; 55,6; 221,0; 419,0; 270,0; 349,0; 76,2; 52,2; 10\"; 16; 276,0; 508,0; 324,0; 432,0; 343,0; 85,7; 77,1; 12\"; 20; 327,0; 559,0; 381,0; 489,0; 400,0; 14\"; 359,0; 603,0; 413,0; 527,0; 93,7; 104,0; 16\"; 410,0; 686,0"
          },
          {
            "label": "Dados 2",
            "value": "470,0; 495,0; 106,0; 150,0; 18\"; 462,0; 743,0; 533,0; 654,0; 546,0; 181,0; 20\"; 24; 513,0; 813,0; 584,0; 724,0; 610,0; 231,0; 22\"; 564,4; 870,0; 641,3; 778,0; 666,7; 133,3; 281,0; 24\"; 102,0; 616,0; 940,0; 692,0; 838,0; 718,0; 331,0; 26\"; (2); 28; 107,9; 666,75; 1016,0; 749,3; 914,4; 747,7; 222,2; 431,0; 28\"; 111,1; 717,55; 1073,1; 800,1; 965,2; 803,3; 234,9; 488,0; 30\"; 114,3; 768,35; 1130,3; 857,2; 1022,3; 862,0; 247,6; 32\"; 117,5; 819,15; 1193,8; 1079,5; 917,6; 260,3; 624,0; 34\"; 120,6; 869,95; 1244,6; 973,1; 269,9; 681,0; 36\"; 123,8; 920,75; 1314,4; 1031,9; 282,6; 726,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,3; 121; 34,9; 82,5; 38,1; 31,7; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 44,4; 2,3; 1\"; 28,6; 35,0; 149; 50,8; 101,6; 52,4; 41,3; 3,6; 1.1/4\"; 43,7; 159; 63,5; 111,1; 4,1; 1.1/2\"; 31,8; 50,3; 178; 73,0; 123,8; 69,8; 5,4; 2\"; 62,0; 216; 92,1; 165,1; 104,8; 57,1; 11,3; 2.1/2\"; 74,7; 244; 190,0; 16,3; 3\"; 90,7; 241; 127,0; 54,0; 11,8; 4\"; 116,0; 292; 157,0; 235,0; 159,0; 24,0; 5\"; 144,0; 349; 186,0; 279,0; 79,4; 37,6; 6\"; 12; 55,6; 171,0; 381; 216,0; 318,0; 85,7; 49,9; 8\"; 221,0; 470; 270,0; 394,0; 298,0; 102,0; 77,1; 10\"; 16; 276,0; 546; 324,0; 470,0; 368,0; 108,0; 111,0; 12\"; 20; 327,0; 610; 381,0; 533,0; 419,0; 117,0; 147,0; 14\"; 359,0; 641; 413,0; 559,0; 451,0; 130,0; 181,0; 16\"; 410,0; 705; 616,0; 508,0; 133,0; 193,0; 18\"; 462,0; 787; 686,0; 565,0; 152,0; 272,0; 20\"; 513,0"
          },
          {
            "label": "Dados 2",
            "value": "857; 584,0; 749,0; 622,0; 331,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 203,0; 635,0; 26\"; (2); 28; 139,7; 666,75; 1085,8; 742,9; 952,5; 774,7; 285,7; 28\"; 142,9; 717,55; 1168,4; 793,7; 1022,3; 831,8; 298,4; 817,0; 30\"; 149,2; 768,35; 1231,9; 857,2; 889,0; 311,1; 942,0; 32\"; 158,7; 819,15; 1314,4; 908,0; 1155,7; 946,1; 330,2; 1135,0; 34\"; 869,95; 1397,0; 958,8; 1225,5; 1006,5; 349,2; 1339,0; 36\"; 171,4; 920,75; 1460,5; 1289,0; 1063,6; 361,9; 1521,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,4; 121; 34,9; 82,6; 38,1; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 44,4; 2,3; 1\"; 28,6; 34,5; 149; 50,8; 102,0; 52,4; 3,6; 1.1/4\"; 43,2; 159; 63,5; 111,0; 4,1; 1.1/2\"; 31,8; 49,5; 178; 73,0; 124,0; 69,8; 5,4; 2\"; 62,0; 216; 92,1; 165,0; 105,0; 11,3; 2.1/2\"; 41,3; 74,7; 244; 104,8; 190,0; 16,3; 3\"; 47,6; 90,4; 267; 127,0; 203,0; 133,0; 21,8; 4\"; 54,0; 115,8; 311; 157,0; 241,0; 162,0; 33,1; 5\"; 143,8; 375; 186,0; 292,0; 197,0; 59,0; 6\"; 12; 170,7; 394; 216,0; 318,0; 229,0; 74,8; 8\"; 221,5; 483; 270,0; 394,0; 44,5; 118,0; 10\"; 108,0; 276,3; 584; 324,0; 483,0; 368,0; 12\"; 16; 327,1; 673; 381,0; 572,0; 451,0; 263,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 22,35; 133,35; 35,05; 88,90; 42,93; 39,62; 3/4\"; 31,75; 27,69; 139,70; 95,25; 50,80; 1\"; 34,54; 158,75; 107,95; 25,40; 57,15; 47,75; 12; 1.1/4\"; 38,10; 43,18; 184,15; 63,50; 130,30; 28,70; 73,15; 52,32; 17; 1.1/2\"; 44,45; 49,53; 203,20; 146,05; 79,50; 60,45; 24; 2\"; 61,98; 234,95; 92,20; 171,45; 69,85; 37; 2.1/2\"; 74,68; 266,70; 104,90; 196,85; 114,30; 53; 3\"; 66,80; 90,68; 304,80; 127,00; 228,60; 80; 4\"; 76,20; 116,08; 355,60; 157,23; 273,05; 41,40; 165,10; 112; 5\"; 91,90; 143,76; 419,10; 185,67; 323,85; 204; 6\"; 108,00; 170,69; 482,60; 215,90; 368,30; 54,10; 152,40; 314; 8\"; 221,49; 552,45; 270,00; 438,15; 177,80; 471; 10\"; 276,35; 673,10; 539,75; 374,65; 897; 12\"; 184,20; 327,15; 762,00; 381,00; 619,25; 441,45; 254,00; 1262"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-AWWA-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma AWWA C207-07 Tabela 3 Classe D 175 - 150 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA_175-150psi.html"
      },
      {
        "title": "Flange Sobreposto com Reforço Slip On norma AWWA C207-07 Tabela 4 Classe E 275 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA_275psi.html"
      }
    ],
    "summary": "C207-07 Tabela 3 - Classe D (175-150 PSI ) (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 3 - Classe D (175-150 PSI ) (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 134,92; 22,23; 12,70; 19,05; 15,88; 2,61; 254,00; 143,76; 215,90; 160,32; 31,75; 14,27; 3,36; 279,40; 170,69; 241,30; 192,07; 4,11; 342,90; 221,49; 298,45; 246,08; 5,60; 10; 12; 406,40; 276,35; 361,95; 304,80; 17,48; 25,40; 8,21; 482,60; 327,15; 431,80; 365,13; 12,32; 14; 533,40; 360,43; 476,25; 400,05; 28,58; 16,05; 16; 596,90; 411,23; 539,75; 457,20; 19,41; 18; 635,00; 462,03; 577,85; 504,83; 20; 698,50; 512,83; 558,80; 22,77; 22; 749,30; 563,63; 692,15; 615,95; 44,45; 34,93; 34,34; 24; 812,80; 614,43; 663,58; 39,19; 26; 869,95; 665,23; 806,45; 723,90; 44,42; 28; 927,10; 716,03; 863,60; 774,70; 48,52; 30; 984,25; 766,83; 914,40; 825,50; 53,75; 32; 1060,45; 817,63; 977,90; 882,65; 41,28; 38,10; 67,93; 34; 1111,25; 868,43; 1028,70; 933,45; 71,29; 36; 1168,40; 919,23"
          },
          {
            "label": "Dados 2",
            "value": "1085,85; 77,26; 38; 1238,25; 970,03; 1149,35; 1035,05; 88,46; 40; 1289,05; 1020,83; 1200,15; 1092,20; 92,94; 42; 1346,20; 1071,63; 1257,30; 1143,00; 107,12; 44; 1403,35; 1122,43; 1314,45; 1193,80; 57,15; 124,66; 46; 1454,15; 1173,23; 1365,25; 1244,60; 129,89; 48; 1511,30; 1224,03; 1422,40; 1295,40; 63,50; 151,91; 50; 1568,45; 1274,83; 1479,55; 47,63; 157,13; 52; 1625,60; 1325,63; 1536,70; 1397,00; 167,21; 54; 1682,75; 1376,43; 1593,85; 1447,80; 177,29; 60; 1854,20; 1528,83; 1758,95; 1600,20; 69,85; 225,81; 66; 2032,00; 1681,23; 1930,40; 1752,60; 267,99; 72; 2197,10; 1833,63; 2095,50; 1905,00; 299,71; 78; 64; 2362,20; 1986,03; 2260,60; 2063,75; 76,20; 53,98; 50,80; 376,97; 84; 2533,65; 2138,43; 2425,70; 2222,50; 432,96; 90; 68; 2705,10; 2290,83; 2590,80; 2381,25; 82,55; 61,93; 533,74; 96; 2876,55; 2443,23"
          },
          {
            "label": "Dados 3",
            "value": "2755,90; 2540,00; 603,91"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica para flanges de 4\" a 12\" é de 175 PSI e para flanges de 14\" a 144\" é de 150 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8."
          },
          {
            "label": "Dados 2",
            "value": "Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 4 - Classe E (275 PSI )"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 134,92; 33,32; 23,83; 19,05; 15,88; 4,85; 254,00; 143,76; 215,90; 163,53; 36,53; 22,23; 5,23; 279,40; 170,69; 241,30; 192,07; 39,67; 25,40; 6,35; 342,90; 221,49; 298,45; 246,08; 44,45; 28,58; 10,45; 10; 12; 406,40; 276,35; 361,95; 304,80; 49,23; 30,18; 13,81; 482,60; 327,15; 431,80; 365,13; 55,58; 31,75; 22,02; 14; 533,40; 360,43; 476,25; 400,05; 57,15; 34,93; 29,11; 16; 596,90; 411,23; 539,75; 457,20; 63,50; 37,70; 18; 635,00; 462,03; 577,85; 504,83; 68,28; 41,06; 20; 698,50; 512,83; 558,80; 73,03; 42,88; 51,88; 22; 749,30; 563,63; 692,15; 609,60; 79,38; 46,02; 60,47; 24; 812,80; 614,43; 663,58; 82,55; 47,63; 73,53; 26; 869,95; 665,23; 806,45; 723,90; 85,73; 50,80; 87,71; 28; 927,10; 716,03; 863,60; 781,05; 87,33; 52,37; 100,40; 30; 984,25; 766,83; 914,40; 831,85"
          },
          {
            "label": "Dados 2",
            "value": "88,90; 53,98; 113,09; 32; 1060,45; 817,63; 977,90; 889,00; 92,08; 41,28; 38,10; 139,97; 34; 1111,25; 868,43; 1028,70; 939,80; 93,68; 58,72; 149,67; 36; 1168,40; 919,23; 1085,85; 996,95; 95,25; 60,33; 168,71; 38; 1238,25; 970,03; 1149,35; 197,07; 40; 1289,05; 1020,83; 1200,15; 98,43; 213,87; 42; 1346,20; 1071,63; 1257,30; 101,60; 66,68; 241,86; 44; 1403,35; 1122,43; 1314,45; 1219,20; 256,79; 46; 1454,15; 1173,23; 1365,25; 1270,00; 103,17; 273,59; 48; 1511,30; 1224,03; 1422,40; 1327,15; 104,78; 69,85; 298,22; 50; 1568,45; 1274,83; 1479,55; 1377,95; 308,67; 52; 1625,60; 1325,63; 1536,70; 1435,10; 107,95; 344,13; 54; 1682,75; 1376,43; 1593,85; 1492,25; 111,13; 76,20; 382,20; 60; 1854,20; 1528,83; 1758,95; 1657,35; 114,30; 467,67; 66; 2032,00; 1681,23; 1930,40; 1816,10; 123,83; 605,77; 72; 2197,10; 1833,63"
          },
          {
            "label": "Dados 3",
            "value": "2095,50; 1993,90; 127,00; 717,37; 78; 64; 2362,20; 1986,03; 2260,60; 2146,30; 136,53; 850,62; 84; 2533,65; 2138,43; 2425,70; 2298,70; 965,20; 90; 68; 2705,10; 2290,83; 2590,80; 2457,45; 146,05; 61,93; 1142,49; 96; 2876,55; 2443,23; 2755,90; 2609,85; 1280,97"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 275 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; A espessura de um flange 150 PSI cujo resalto tenha sido removido não poderá ser menor que a dimensão T subtraída de 1,524 mm;; 8.; Veja Procedimento"
          },
          {
            "label": "Dados 2",
            "value": "para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-AWWA-175-150psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA_175-150psi.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma AWWA C207-07 Tabela 3 Classe D 175 - 150 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA_175-150psi.html"
      }
    ],
    "summary": "C207-07 Tabela 3 - Classe D (175-150 PSI ) (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 3 - Classe D (175-150 PSI ) (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 134,92; 22,23; 12,70; 19,05; 15,88; 2,61; 254,00; 143,76; 215,90; 160,32; 31,75; 14,27; 3,36; 279,40; 170,69; 241,30; 192,07; 4,11; 342,90; 221,49; 298,45; 246,08; 5,60; 10; 12; 406,40; 276,35; 361,95; 304,80; 17,48; 25,40; 8,21; 482,60; 327,15; 431,80; 365,13; 12,32; 14; 533,40; 360,43; 476,25; 400,05; 28,58; 16,05; 16; 596,90; 411,23; 539,75; 457,20; 19,41; 18; 635,00; 462,03; 577,85; 504,83; 20; 698,50; 512,83; 558,80; 22,77; 22; 749,30; 563,63; 692,15; 615,95; 44,45; 34,93; 34,34; 24; 812,80; 614,43; 663,58; 39,19; 26; 869,95; 665,23; 806,45; 723,90; 44,42; 28; 927,10; 716,03; 863,60; 774,70; 48,52; 30; 984,25; 766,83; 914,40; 825,50; 53,75; 32; 1060,45; 817,63; 977,90; 882,65; 41,28; 38,10; 67,93; 34; 1111,25; 868,43; 1028,70; 933,45; 71,29; 36; 1168,40; 919,23"
          },
          {
            "label": "Dados 2",
            "value": "1085,85; 77,26; 38; 1238,25; 970,03; 1149,35; 1035,05; 88,46; 40; 1289,05; 1020,83; 1200,15; 1092,20; 92,94; 42; 1346,20; 1071,63; 1257,30; 1143,00; 107,12; 44; 1403,35; 1122,43; 1314,45; 1193,80; 57,15; 124,66; 46; 1454,15; 1173,23; 1365,25; 1244,60; 129,89; 48; 1511,30; 1224,03; 1422,40; 1295,40; 63,50; 151,91; 50; 1568,45; 1274,83; 1479,55; 47,63; 157,13; 52; 1625,60; 1325,63; 1536,70; 1397,00; 167,21; 54; 1682,75; 1376,43; 1593,85; 1447,80; 177,29; 60; 1854,20; 1528,83; 1758,95; 1600,20; 69,85; 225,81; 66; 2032,00; 1681,23; 1930,40; 1752,60; 267,99; 72; 2197,10; 1833,63; 2095,50; 1905,00; 299,71; 78; 64; 2362,20; 1986,03; 2260,60; 2063,75; 76,20; 53,98; 50,80; 376,97; 84; 2533,65; 2138,43; 2425,70; 2222,50; 432,96; 90; 68; 2705,10; 2290,83; 2590,80; 2381,25; 82,55; 61,93; 533,74; 96; 2876,55; 2443,23"
          },
          {
            "label": "Dados 3",
            "value": "2755,90; 2540,00; 603,91"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica para flanges de 4\" a 12\" é de 175 PSI e para flanges de 14\" a 144\" é de 150 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8."
          },
          {
            "label": "Dados 2",
            "value": "Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-AWWA-275psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA_275psi.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma AWWA C207-07 Tabela 4 Classe E 275 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_AWWA_275psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concên...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 4 - Classe E (275 PSI )"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 134,92; 33,32; 23,83; 19,05; 15,88; 4,85; 254,00; 143,76; 215,90; 163,53; 36,53; 22,23; 5,23; 279,40; 170,69; 241,30; 192,07; 39,67; 25,40; 6,35; 342,90; 221,49; 298,45; 246,08; 44,45; 28,58; 10,45; 10; 12; 406,40; 276,35; 361,95; 304,80; 49,23; 30,18; 13,81; 482,60; 327,15; 431,80; 365,13; 55,58; 31,75; 22,02; 14; 533,40; 360,43; 476,25; 400,05; 57,15; 34,93; 29,11; 16; 596,90; 411,23; 539,75; 457,20; 63,50; 37,70; 18; 635,00; 462,03; 577,85; 504,83; 68,28; 41,06; 20; 698,50; 512,83; 558,80; 73,03; 42,88; 51,88; 22; 749,30; 563,63; 692,15; 609,60; 79,38; 46,02; 60,47; 24; 812,80; 614,43; 663,58; 82,55; 47,63; 73,53; 26; 869,95; 665,23; 806,45; 723,90; 85,73; 50,80; 87,71; 28; 927,10; 716,03; 863,60; 781,05; 87,33; 52,37; 100,40; 30; 984,25; 766,83; 914,40; 831,85"
          },
          {
            "label": "Dados 2",
            "value": "88,90; 53,98; 113,09; 32; 1060,45; 817,63; 977,90; 889,00; 92,08; 41,28; 38,10; 139,97; 34; 1111,25; 868,43; 1028,70; 939,80; 93,68; 58,72; 149,67; 36; 1168,40; 919,23; 1085,85; 996,95; 95,25; 60,33; 168,71; 38; 1238,25; 970,03; 1149,35; 197,07; 40; 1289,05; 1020,83; 1200,15; 98,43; 213,87; 42; 1346,20; 1071,63; 1257,30; 101,60; 66,68; 241,86; 44; 1403,35; 1122,43; 1314,45; 1219,20; 256,79; 46; 1454,15; 1173,23; 1365,25; 1270,00; 103,17; 273,59; 48; 1511,30; 1224,03; 1422,40; 1327,15; 104,78; 69,85; 298,22; 50; 1568,45; 1274,83; 1479,55; 1377,95; 308,67; 52; 1625,60; 1325,63; 1536,70; 1435,10; 107,95; 344,13; 54; 1682,75; 1376,43; 1593,85; 1492,25; 111,13; 76,20; 382,20; 60; 1854,20; 1528,83; 1758,95; 1657,35; 114,30; 467,67; 66; 2032,00; 1681,23; 1930,40; 1816,10; 123,83; 605,77; 72; 2197,10; 1833,63"
          },
          {
            "label": "Dados 3",
            "value": "2095,50; 1993,90; 127,00; 717,37; 78; 64; 2362,20; 1986,03; 2260,60; 2146,30; 136,53; 850,62; 84; 2533,65; 2138,43; 2425,70; 2298,70; 965,20; 90; 68; 2705,10; 2290,83; 2590,80; 2457,45; 146,05; 61,93; 1142,49; 96; 2876,55; 2443,23; 2755,90; 2609,85; 1280,97"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 275 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7.; A espessura de um flange 150 PSI cujo resalto tenha sido removido não poderá ser menor que a dimensão T subtraída de 1,524 mm;; 8.; Veja Procedimento"
          },
          {
            "label": "Dados 2",
            "value": "para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-JIS-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_JIS.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço - JIS",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_JIS.html"
      }
    ],
    "summary": "- JIS",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Flange Sobreposto com Reforço - JIS",
        "rows": [
          {
            "label": "Dados",
            "value": "- JIS"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-JISB2220-5K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_5K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma JIS B2220-1995 B2238-1996 Classe 5K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_5K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 5k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 5k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 450 a 1000mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Solda"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprx; (kg); (2); Diâmetro; Nominal; OD; (mm); do; Nr.; de; Fur.; Tam.; Par.; (rsc); W1; W2; (pol.); (4); 18\"; 450; 457.2; 460.0; 605; 24; 40; 495; 500; 523; 555; 16; 25; M22; 12; 24,9; 20\"; 508.0; 511.0; 655; 546; 552; 573; 20; 27,0; 22\"; 550; 558.8; 562.0; 720; 26; 42; 597; 603; 630; 665; 27; M24; 34,5; 24\"; 600; 609.6; 613.0; 770; 44; 648; 654; 680; 715; 37,8; 26\"; 650; 660.4; 664.0; 825; 48; 702; 708; 735; 43,2; 28\"; 700; 711.2; 715.0; 875; 751; 758; 785; 820; 45,9; 30\"; 750; 762.0; 766.0; 945; 28; 52; 802; 810; 840; 880; 33; M30; 57,7; 32\"; 800; 812.8; 817.0; 995; 854; 862; 890; 930; 13; 61,3; 34\"; 850; 863.6; 868.0; 1045; 54; 904; 912; 940; 980; 65,3; 36\"; 900; 914.4; 919.0; 1095; 30; 56; 956; 964; 990; 1030; 73,1; 40\"; 1000; 1016.0; 1021.0; 1195; 32; 60; 1058; 1066; 1090; 1130; 14; 84,8"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 5 kg/cm 2 (71 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6."
          }
        ]
      },
      {
        "title": "Dimensões acima de 40\" (1000mm) variam de acordo com padrão do fabricante;",
        "rows": [
          {
            "label": "Dados",
            "value": "7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-JISB2220-10K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_10K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma JIS B2220-1995 B2238-1996 Classe 10K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_10K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 10k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 10k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 250 a 1000mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Soldagem"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); Diâmetro Nominal; OD (mm); do; Nr.; de; Fur.; (mm); Tam.; Par.; (rsc); W1; W2; (pol.) (4); 10\"; 250; 267.4; 269.5; 400; 24; 36; 288; 292; 324; 355; 12; 25; M20; 10; 12.7; 12\"; 300; 318.5; 321.0; 445; 38; 340; 346; 368; 16; M22; 13.8; 14\"; 350; 355.5; 358.1; 490; 26; 42; 380; 386; 413; 18.2; 16\"; 406.4; 409.0; 560; 28; 44; 436; 442; 475; 510; 27; M24; 25.2; 18\"; 450; 457.2; 460.0; 620; 30; 48; 496; 502; 530; 565; 20; 14; 33; 20\"; 500; 508.0; 511.0; 675; 548; 554; 585; 37.6; 22\"; 550; 558.8; 562.0; 745; 32; 52; 604; 610; 640; 680; M30; 15; 49.7; 24\"; 600; 609.6; 613.0; 795; 656; 662; 690; 730; 52.6; 26\"; 650; 660.4; 664.0; 845; 34; 56; 706; 712; 740; 780; 60.6; 28\"; 700; 711.2; 715.0; 905; 58; 762; 770; 800; 840; 17; 70.6; 30\"; 750; 762.0; 766.0; 970; 62; 816; 824; 855; 900; 18; 11; 85.8; 32\""
          },
          {
            "label": "Dados 2",
            "value": "812.8; 817.0; 1020; 40; 64; 868; 876; 950; 19; 91.2; 34\"; 850; 863.6; 868.0; 1070; 66; 920; 928; 955; 1000; 98.6; 36\"; 914.4; 919.0; 1120; 70; 971; 979; 1005; 1050; 22; 109; 40\"; 1016.0; 1021.0; 1235; 74; 1073; 1081; 1110; 1160; 39; M36; 133"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 kg/cm 2 (142,2 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6."
          }
        ]
      },
      {
        "title": "Dimensões acima de 40\" (1000mm) variam de acordo com padrão do fabricante;",
        "rows": [
          {
            "label": "Dados",
            "value": "7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-JISB2220-16K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_16K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma JIS B2220-1995 B2238-1996 Classe 16K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_16K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 16k (1); Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202).",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 16k (1); Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;"
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 1200mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; OD (mm); do; (mm); Nr.; de; Furos; Tam.; Para-; fuso; (rosca); (pol.) (4); 3/8\"; (10); 17.3; 17.8; 90; 12; 16; 26; 28; 46; 65; 15; M12; 0.52; 1/2\"; 21.7; 22.2; 95; 30; 32; 51; 70; 0.58; 3/4\"; (20); 27.2; 27.7; 100; 14; 20; 38; 42; 56; 75; 0.75; 1\"; 25; 34.0; 34.5; 125; 50; 67; 19; M16; 1.16; 1.1/4\"; (32); 42.7; 43.2; 135; 22; 60; 76; 1.53; 1.1/2\"; 40; 48.6; 49.1; 140; 24; 62; 66; 81; 105; 1.64; 2\"; 60.5; 61.1; 155; 80; 96; 120; 1.83; 2.1/2\"; 76.3; 77.1; 175; 18; 94; 98; 116; 2.58; 3\"; 89.1; 90.0; 200; 108; 112; 132; 160; 23; M20; 3.66; 3.1/2\"; (90); 101.6; 102.6; 210; 124; 145; 170; 3.95; 4\"; 114.3; 115.4; 225; 34; 134; 138; 185; 4.94; 5\"; 139.8; 141.2; 270; 164; 195; M22; 7.00; 6\"; 150; 165.2; 166.6; 305; 196; 202; 230; 260; 9.62; 8\"; 216.3; 218.0; 350; 244; 252; 275; 12.1; 10\""
          },
          {
            "label": "Dados 2",
            "value": "250; 267.4; 269.5; 430; 44; 304; 312; 345; 380; 27; M24; 20.0; 12\"; 300; 318.5; 321.0; 480; 48; 354; 364; 395; 24.4; 14\"; 355.5; 358.1; 540; 52; 398; 408; 440; 33; M30&times;3; 35.0; 16\"; 400; 406.4; 409.0; 605; 446; 456; 10; 495; 46.2; 18\"; 450; 457.2; 460.0; 675; 64; 504; 514; 560; 61.9; 20\"; 500; 508.0; 511.0; 730; 68; 558; 568; 615; 660; 73.25; 22\"; 550; 558.8; 562.0; 795; 612; 622; 670; 720; 39; M36&times;3; 88.1; 24\"; 600; 609.6; 613.0; 845; 74; 666; 676; 770; 98.8; 26\"; 650; 660.4; 664.0; 895; 77; 704; 726; 820; 101; 28\"; 700; 711.2; 715.0; 960; 754; 776; 875; 30\"; 750; 762.0; 766.0; 1020; 83; 806; 832; 880; 935; 141; 32\"; 800; 812.8; 817.0; 1085; 54; 86; 865; 885; 930; 990; M45&times;3; 161; 34\"; 850; 863.6; 868.0; 1135; 89; 916; 936; 980; 1040; 177; 36\"; 900; 914.4; 919.0; 1185; 58; 93; 968; 986"
          },
          {
            "label": "Dados 3",
            "value": "1030; 1090; 191; 40\"; 1000; 1016.0; 1021.0; 1320; 99; 1070; 1098; 1140; 1210; M52&times;3; 44\"; 1100; 1117.6; 1123.0; 1420; 1180; 1200; 1240; 1310; 289; 48\"; 1219.2; 1225.0; 1530; 1282; 1302; 1350; 348"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 16 kg/cm 2 (227,5 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-JISB2220-20K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_20K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma JIS B2220-1995 B2238-1996 Classe 20K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_20K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 20k (1); Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202).",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 20k (1); Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;"
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Tipo A: de 10 a 1200mm;; - Tipo B: de 10 a 50mm;; - Tipo C: de 65 a 600mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; Diâmetro; Nominal; OD; do; S 1; S 2; y°; Nr.; Furos; Tam.; Para-; fuso; (rsc); (pol) (4); (mm); (kg) (2); 3/8\"; (10); 17.3; 17.8; 90; 14; 20; 30; 32; 46; 65; 27; 15; M12; 0.59; 1/2\"; 21.7; 22.2; 95; 34; 36; 51; 70; 31; 0.65; 3/4\"; (20); 27.2; 27.7; 100; 16; 22; 40; 42; 56; 75; 37; 0.81; 1\"; 25; 34.0; 34.5; 125; 24; 48; 50; 67; 44; 4.5; 19; M16; 1.29; 1.1/4\"; (32); 42.7; 43.2; 135; 18; 26; 60; 76; 52; 53; 1.60; 1.1/2\"; 48.6; 49.1; 140; 62; 66; 81; 105; 58; 59; 5.5; 1.69; 2\"; 60.5; 61.1; 155; 80; 96; 120; 72; 1.89; 2.1/2\"; 76.3; 77.1; 175; 104; 116; 94; 65.9; 20°; 2.60; 3\"; 89.1; 90.0; 200; 113; 117; 132; 160; 107; 78.1; 23; M20; 3.93; 3.1/2\"; (90); 101.6; 102.6; 210; 126; 130; 145; 170; 90.2; 4.56; 4\"; 114.3; 115.4; 225; 138; 142; 185; 102.3; 5.13; 5\"; 139.8; 141.2; 270; 166; 172; 195; 126.6; 30°; M22"
          },
          {
            "label": "Dados 2",
            "value": "8.30; 6\"; 150; 165.2; 166.6; 305; 28; 196; 202; 230; 260; 186; 151.0; 12; 10.6; 8\"; 216.3; 218.0; 350; 244; 252; 275; 237; 199.9; 13.3; 10\"; 250; 267.4; 269.5; 430; 304; 312; 345; 380; 290; 10; 248.8; M24; 23.4; 12\"; 300; 318.5; 321.0; 480; 354; 364; 395; 11; 297.9; 14\"; 355.5; 358.1; 540; 398; 408; 440; 384; 333.4; 35°; 33; M30&times;3; 39.2; 16\"; 400; 406.4; 409.0; 605; 446; 456; 495; 437; 13; 381.0; 54.2; 18\"; 450; 457.2; 460.0; 675; 78; 504; 514; 560; 490; 431.8; 71.1; 20\"; 500; 508.0; 511.0; 730; 84; 558; 568; 615; 660; 544; 482.6; 86.2; 22\"; 550; 558.8; 562.0; 795; 612; 622; 670; 720; 595; 533.4; 39; M36&times;3; 24\"; 600; 609.6; 613.0; 845; 54; 666; 676; 770; 646; 584.2; 119"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 20 kg/cm 2 (284,4 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-JISB2220-30K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_30K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto com Reforço Slip On norma JIS B2220-1995 B2238-1996 Classe 30K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_JISB2220_30K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1); Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202).",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F302"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1); Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;"
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Tipo B: de 10 a 50mm;; - Tipo C: de 65 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; Diâmetro; Nominal; OD; do; S 1; S 2; y°; Nr.; Furos; Tam.; Para-; fuso; (rsc); (pol) (4); (mm); (kg) (2); 1/2\"; 15; 21.7; 21,7; 115; 18; 45; 22.0; 40; 55; 80; 31; 27; 16,1; 19; M16; 1,22; 3/4\"; (20); 27.2; 27,2; 120; 27.5; 44; 60; 85; 37; 21,4; 1,34; 1\"; 25; 34.0; 34,0; 130; 20; 48; 34.4; 52; 70; 95; 1,75; 1.1/4\"; (32); 42.7; 42,7; 140; 22; 43.1; 62; 105; 35,5; 2,15; 1.1/2\"; 48.6; 48,6; 160; 54; 49.1; 90; 58; 41,2; 23; M20; 2,79; 2\"; 50; 60.5; 60,5; 165; 57; 61.0; 84; 66; 6,5; 52,7; 29; 2,86; 2.1/2\"; 65; 76.3; 76,3; 200; 26; 69; 76.9; 104; 96; 78; 9,5; 65,9; 20°; 4,96; 3\"; 89.1; 89,1; 210; 28; 73; 89.7; 118; 170; 109; 78,1; 5,80; 3.1/2\"; (90); 101.6; 101,6; 230; 30; 74; 102.3; 150; 185; 122; 90,2; M22; 7,25; 4\"; 100; 114.3; 114,3; 240; 32; 76; 115.1; 142; 195; 135; 102,3; 8,16; 5\"; 125; 139.8; 139,8"
          },
          {
            "label": "Dados 2",
            "value": "275; 36; 86; 140.7; 172; 10; 126,6; 11,9; 6\"; 165.2; 165,2; 325; 38; 166.2; 202; 235; 186; 151,0; 12; M24; 17,3; 8\"; 216.3; 216,3; 370; 42; 102; 217.5; 254; 280; 320; 237; 199,9; 22,6; 10\"; 250; 267.4; 267,4; 450; 268.7; 312; 345; 390; 290; 248,8; 33; M30x3; 37,5; 12\"; 300; 318.5; 318,5; 515; 127; 320.0; 366; 405; 297,9; 30°; 16; 50,0; 14\"; 350; 355.5; 355,6; 560; 134; 357.2; 406; 495; 383; 13; 333,4; 61,5; 16\"; 400; 406.4; 406,4; 630; 149; 408.3; 462; 510; 435; 14; 381,0; 39; M36x3; 83,7"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 30 kg/cm 2 (426,6 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-sw-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Com Encaixe (Socketwelding) 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_150.html"
      },
      {
        "title": "Flange Com Encaixe (Socketwelding) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_300.html"
      },
      {
        "title": "Flange Com Encaixe (Socketwelding) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_600.html"
      },
      {
        "title": "Flange Com Encaixe (Socketwelding) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_900.html"
      },
      {
        "title": "Flange Com Encaixe (Socketwelding) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "5"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 22,4; 88,9; 15,7; 34,9; 60,3; 15,9; 30,2; 9,5; 0,5; 3/4\"; 12,7; 27,7; 98,4; 20,8; 42,9; 69,8; 38,1; 11,1; 0,9; 1\"; 14,3; 34,5; 108,0; 26,7; 50,8; 79,4; 49,2; 17,5; 1.1/4\"; 43,2; 117,0; 35,1; 63,5; 58,7; 20,6; 1,4; 1.1/2\"; 49,5; 127,0; 40,9; 73,0; 65,1; 22,2; 2\"; 19,0; 62,0; 152,0; 52,6; 92,1; 121,0; 77,8; 25,4; 2,3; 2.1/2\"; 74,7; 178,0; 62,7; 104,8; 140,0; 90,5; 28,6; 3,2; 3\"; 23,8; 90,7; 190,0; 78,0; 3,6; 3.1/2\"; 103,0; 216,0; 90,0; 122,0; 31,8; 5,0; 4\"; 116,0; 229,0; 102,4; 157,0; 135,0; 33,3; 5,9; 5\"; 144,0; 254,0; 128,3; 186,0; 22,0; 164,0; 36,5; 6,8; 6\"; 171,0; 279,0; 154,2; 241,0; 192,0; 39,7; 27,0; 8,6; 8\"; 221,0; 343,0; 202,7; 270,0; 298,0; 246,0; 44,4; 31,7; 13,6; 10\"; 12; 276,0; 406,0; 254,5; 324,0; 362,0; 305,0; 19,5; 12\"; 327,0; 483,0; 304,8; 381,0; 432,0; 365,0; 55,6"
          },
          {
            "label": "Dados 2",
            "value": "29,0; 14\"; 359,0; 533,0; 336,5; 413,0; 476,0; 400,0; 57,2; 41,3; 41,0; 16\"; 16; 410,0; 597,0; 387,0; 470,0; 540,0; 457,0; 44,5; 18\"; 462,0; 635,0; 438,1; 578,0; 505,0; 68,3; 59,0; 20\"; 20; 513,0; 693,0; 488,9; 584,0; 559,0; 54,0; 75,0; 22\"; 46,0; 564,4; 749,3; 539,7; 641,3; 692,1; 616,0; 79,5; 60,4; 87,0; 24\"; 47,6; 813,0; 590,5; 692,0; 749,0; 664,0; 82,6; 99,8"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 15,7; 34,9; 66,7; 15,9; 38,1; 22,2; 9,52; 0,9; 3/4\"; 27,7; 117,0; 20,8; 42,9; 82,6; 19,0; 47,6; 25,4; 11,1; 1,4; 1\"; 17,5; 34,5; 124,0; 26,7; 50,8; 88,9; 54,0; 27,0; 12,7; 1.1/4\"; 43,2; 133,0; 35,1; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 49,5; 156,0; 40,9; 73,0; 114,0; 69,8; 30,2; 2,7; 2\"; 62,0; 165,0; 52,6; 92,1; 127,0; 84,1; 33,3; 3,2; 2.1/2\"; 74,7; 190,0; 62,7; 104,8; 149,0; 100,0; 4,5; 3\"; 28,6; 90,7; 210,0; 78,0; 168,0; 5,9; 3.1/2\"; 103,0; 229,0; 90,2; 140,0; 184,0; 44,4; 7,7; 4\"; 31,8; 116,0; 254,0; 102,4; 157,0; 200,0; 146,0; 23,8; 10,0; 5\"; 144,0; 279,0; 186,0; 235,0; 178,0; 6\"; 12; 38,5; 171,0; 318,0; 216,0; 270,0; 206,0; 52,4; 17,7; 8\"; 41,3; 221,0; 381,0; 330,0; 260,0; 61,9; 26,3; 10\"; 16; 276,0; 444,0; 324,0; 387,0; 321,0; 36,7; 12\"; 327,0; 521,0; 451,0; 375,0"
          },
          {
            "label": "Dados 2",
            "value": "52,2; 14\"; 20; 359,0; 584,0; 413,0; 514,0; 425,0; 76,2; 74,8; 16\"; 57,2; 410,0; 648,0; 470,0; 572,0; 483,0; 86,2; 18\"; 24; 60,3; 462,0; 711,0; 533,0; 629,0; 113,0; 20\"; 513,0; 775,0; 686,0; 587,0; 143,0; 22\"; 66,8; 564,4; 838,2; 641,3; 742,9; 101,6; 179,0; 24\"; 616,0; 914,0; 692,0; 813,0; 702,0; 106,0; 215,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 15,75; 34,9; 66,7; 15,9; 38,1; 22,2; 9,52; 0,9; 3/4\"; 27,7; 117,0; 20,80; 42,9; 82,6; 19,0; 47,6; 25,4; 11,1; 1,4; 1\"; 17,5; 34,5; 124,0; 26,70; 50,8; 88,9; 54,0; 27,0; 12,7; 1,8; 1.1/4\"; 20,6; 43,2; 133,0; 35,05; 63,5; 98,4; 28,6; 2,3; 1.1/2\"; 49,5; 156,0; 40,90; 73,0; 114,0; 69,8; 31,8; 3,1; 2\"; 62,0; 165,0; 52,60; 92,1; 127,0; 84,1; 36,5; 4,1; 2.1/2\"; 74,7; 190,0; 62,70; 104,8; 149,0; 100,0; 41,3; 5,9; 3\"; 90,7; 210,0; 78,00; 168,0; 46,0; 7,3; 3.1/2\"; 103,0; 229,0; 90,20; 140,0; 184,0; 49,2; 9,5; 4\"; 116,0; 273,0; 102,4; 157,0; 216,0; 152,0; 23,8; 16,8; 5\"; 44,4; 144,0; 330,0; 186,0; 267,0; 189,0; 60,3; 6\"; 12; 171,0; 356,0; 292,0; 222,0; 36,3; 8\"; 55,6; 221,0; 419,0; 270,0; 349,0; 76,2; 52,2; 10\"; 16; 276,0; 508,0; 324,0; 432,0; 343,0; 85,7; 77,1; 12\"; 20; 327,0"
          },
          {
            "label": "Dados 2",
            "value": "559,0; 381,0; 489,0; 400,0; 14\"; 359,0; 603,0; 413,0; 527,0; 93,7; 104,0; 16\"; 410,0; 686,0; 470,0; 495,0; 106,0; 150,0; 18\"; 462,0; 743,0; 533,0; 654,0; 546,0; 181,0; 20\"; 24; 513,0; 813,0; 584,0; 724,0; 610,0; 231,0; 22\"; 564,4; 870,0; 641,3; 778,0; 666,7; 133,3; 281,0; 24\"; 102,0; 616,0; 940,0; 692,0; 838,0; 718,0; 331,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,3; 121; 15,75; 34,9; 82,5; 38,1; 31,7; 9,52; 1,8; 3/4\"; 25,4; 27,7; 130; 20,80; 42,9; 88,9; 44,4; 11,1; 2,3; 1\"; 28,6; 35,0; 149; 26,70; 50,8; 101,6; 52,4; 41,3; 12,7; 3,6; 1.1/4\"; 43,7; 159; 35,05; 63,5; 111,1; 14,3; 4,1; 1.1/2\"; 31,8; 50,3; 178; 40,90; 73,0; 123,8; 69,8; 15,9; 5,4; 2\"; 62,0; 216; 52,60; 92,1; 165,1; 104,8; 57,1; 17,5; 11,3; 2.1/2\"; 74,7; 244; 62,70; 190,0; 19,0; 16,3; 3\"; 90,7; 241; 78,00; 127,0; 54,0; 20,6; 11,8; 4\"; 116,0; 292; 102,4; 157,0; 235,0; 159,0; 23,8; 24,0; 5\"; 144,0; 349; 186,0; 279,0; 79,4; 37,6; 6\"; 12; 55,6; 171,0; 381; 216,0; 318,0; 85,7; 49,9; 8\"; 221,0; 470; 270,0; 394,0; 298,0; 102,0; 77,1; 10\"; 16; 276,0; 546; 324,0; 470,0; 368,0; 108,0; 111,0; 12\"; 20; 327,0; 610; 381,0; 533,0; 419,0; 117,0; 147,0; 14\"; 359,0; 641; 413,0; 559,0; 451,0"
          },
          {
            "label": "Dados 2",
            "value": "130,0; 181,0; 16\"; 410,0; 705; 616,0; 508,0; 133,0; 193,0; 18\"; 462,0; 787; 686,0; 565,0; 152,0; 272,0; 20\"; 513,0; 857; 584,0; 749,0; 622,0; 331,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 203,0; 635,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,4; 121; 34,9; 82,6; 38,1; 31,8; 9,52; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 44,4; 11,1; 2,3; 1\"; 28,6; 34,5; 149; 50,8; 102,0; 52,4; 41,3; 12,7; 3,6; 1.1/4\"; 43,2; 159; 63,5; 111,0; 14,3; 4,1; 1.1/2\"; 49,5; 178; 73,0; 124,0; 69,8; 15,9; 5,4; 2\"; 62,0; 216; 92,1; 165,0; 105,0; 57,2; 17,5; 11,3; 2.1/2\"; 74,7; 244; 104,8; 190,0; 19,0; 16,3; 3\"; 47,6; 90,4; 267; 127,0; 203,0; 133,0; 21,8; 4\"; 54,0; 115,8; 311; 157,0; 241,0; 162,0; 90,5; 33,1; 5\"; 143,8; 375; 186,0; 292,0; 197,0; 59,0; 6\"; 12; 170,7; 394; 216,0; 318,0; 229,0; 119,0; 74,8; 8\"; 221,5; 483; 270,0; 394,0; 44,5; 144,0; 118,0; 10\"; 108,0; 276,3; 584; 324,0; 483,0; 368,0; 159,0; 12\"; 16; 327,1; 673; 381,0; 572,0; 451,0; 181,0; 263,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-sw-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Com Encaixe (Socketwelding) 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 22,4; 88,9; 15,7; 34,9; 60,3; 15,9; 30,2; 9,5; 0,5; 3/4\"; 12,7; 27,7; 98,4; 20,8; 42,9; 69,8; 38,1; 11,1; 0,9; 1\"; 14,3; 34,5; 108,0; 26,7; 50,8; 79,4; 49,2; 17,5; 1.1/4\"; 43,2; 117,0; 35,1; 63,5; 58,7; 20,6; 1,4; 1.1/2\"; 49,5; 127,0; 40,9; 73,0; 65,1; 22,2; 2\"; 19,0; 62,0; 152,0; 52,6; 92,1; 121,0; 77,8; 25,4; 2,3; 2.1/2\"; 74,7; 178,0; 62,7; 104,8; 140,0; 90,5; 28,6; 3,2; 3\"; 23,8; 90,7; 190,0; 78,0; 3,6; 3.1/2\"; 103,0; 216,0; 90,0; 122,0; 31,8; 5,0; 4\"; 116,0; 229,0; 102,4; 157,0; 135,0; 33,3; 5,9; 5\"; 144,0; 254,0; 128,3; 186,0; 22,0; 164,0; 36,5; 6,8; 6\"; 171,0; 279,0; 154,2; 241,0; 192,0; 39,7; 27,0; 8,6; 8\"; 221,0; 343,0; 202,7; 270,0; 298,0; 246,0; 44,4; 31,7; 13,6; 10\"; 12; 276,0; 406,0; 254,5; 324,0; 362,0; 305,0; 19,5; 12\"; 327,0; 483,0; 304,8; 381,0; 432,0; 365,0; 55,6"
          },
          {
            "label": "Dados 2",
            "value": "29,0; 14\"; 359,0; 533,0; 336,5; 413,0; 476,0; 400,0; 57,2; 41,3; 41,0; 16\"; 16; 410,0; 597,0; 387,0; 470,0; 540,0; 457,0; 44,5; 18\"; 462,0; 635,0; 438,1; 578,0; 505,0; 68,3; 59,0; 20\"; 20; 513,0; 693,0; 488,9; 584,0; 559,0; 54,0; 75,0; 22\"; 46,0; 564,4; 749,3; 539,7; 641,3; 692,1; 616,0; 79,5; 60,4; 87,0; 24\"; 47,6; 813,0; 590,5; 692,0; 749,0; 664,0; 82,6; 99,8"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-sw-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Com Encaixe (Socketwelding) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 15,7; 34,9; 66,7; 15,9; 38,1; 22,2; 9,52; 0,9; 3/4\"; 27,7; 117,0; 20,8; 42,9; 82,6; 19,0; 47,6; 25,4; 11,1; 1,4; 1\"; 17,5; 34,5; 124,0; 26,7; 50,8; 88,9; 54,0; 27,0; 12,7; 1.1/4\"; 43,2; 133,0; 35,1; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 49,5; 156,0; 40,9; 73,0; 114,0; 69,8; 30,2; 2,7; 2\"; 62,0; 165,0; 52,6; 92,1; 127,0; 84,1; 33,3; 3,2; 2.1/2\"; 74,7; 190,0; 62,7; 104,8; 149,0; 100,0; 4,5; 3\"; 28,6; 90,7; 210,0; 78,0; 168,0; 5,9; 3.1/2\"; 103,0; 229,0; 90,2; 140,0; 184,0; 44,4; 7,7; 4\"; 31,8; 116,0; 254,0; 102,4; 157,0; 200,0; 146,0; 23,8; 10,0; 5\"; 144,0; 279,0; 186,0; 235,0; 178,0; 6\"; 12; 38,5; 171,0; 318,0; 216,0; 270,0; 206,0; 52,4; 17,7; 8\"; 41,3; 221,0; 381,0; 330,0; 260,0; 61,9; 26,3; 10\"; 16; 276,0; 444,0; 324,0; 387,0; 321,0; 36,7; 12\"; 327,0; 521,0; 451,0; 375,0"
          },
          {
            "label": "Dados 2",
            "value": "52,2; 14\"; 20; 359,0; 584,0; 413,0; 514,0; 425,0; 76,2; 74,8; 16\"; 57,2; 410,0; 648,0; 470,0; 572,0; 483,0; 86,2; 18\"; 24; 60,3; 462,0; 711,0; 533,0; 629,0; 113,0; 20\"; 513,0; 775,0; 686,0; 587,0; 143,0; 22\"; 66,8; 564,4; 838,2; 641,3; 742,9; 101,6; 179,0; 24\"; 616,0; 914,0; 692,0; 813,0; 702,0; 106,0; 215,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-sw-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Com Encaixe (Socketwelding) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 15,75; 34,9; 66,7; 15,9; 38,1; 22,2; 9,52; 0,9; 3/4\"; 27,7; 117,0; 20,80; 42,9; 82,6; 19,0; 47,6; 25,4; 11,1; 1,4; 1\"; 17,5; 34,5; 124,0; 26,70; 50,8; 88,9; 54,0; 27,0; 12,7; 1,8; 1.1/4\"; 20,6; 43,2; 133,0; 35,05; 63,5; 98,4; 28,6; 2,3; 1.1/2\"; 49,5; 156,0; 40,90; 73,0; 114,0; 69,8; 31,8; 3,1; 2\"; 62,0; 165,0; 52,60; 92,1; 127,0; 84,1; 36,5; 4,1; 2.1/2\"; 74,7; 190,0; 62,70; 104,8; 149,0; 100,0; 41,3; 5,9; 3\"; 90,7; 210,0; 78,00; 168,0; 46,0; 7,3; 3.1/2\"; 103,0; 229,0; 90,20; 140,0; 184,0; 49,2; 9,5; 4\"; 116,0; 273,0; 102,4; 157,0; 216,0; 152,0; 23,8; 16,8; 5\"; 44,4; 144,0; 330,0; 186,0; 267,0; 189,0; 60,3; 6\"; 12; 171,0; 356,0; 292,0; 222,0; 36,3; 8\"; 55,6; 221,0; 419,0; 270,0; 349,0; 76,2; 52,2; 10\"; 16; 276,0; 508,0; 324,0; 432,0; 343,0; 85,7; 77,1; 12\"; 20; 327,0"
          },
          {
            "label": "Dados 2",
            "value": "559,0; 381,0; 489,0; 400,0; 14\"; 359,0; 603,0; 413,0; 527,0; 93,7; 104,0; 16\"; 410,0; 686,0; 470,0; 495,0; 106,0; 150,0; 18\"; 462,0; 743,0; 533,0; 654,0; 546,0; 181,0; 20\"; 24; 513,0; 813,0; 584,0; 724,0; 610,0; 231,0; 22\"; 564,4; 870,0; 641,3; 778,0; 666,7; 133,3; 281,0; 24\"; 102,0; 616,0; 940,0; 692,0; 838,0; 718,0; 331,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-sw-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Com Encaixe (Socketwelding) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,3; 121; 15,75; 34,9; 82,5; 38,1; 31,7; 9,52; 1,8; 3/4\"; 25,4; 27,7; 130; 20,80; 42,9; 88,9; 44,4; 11,1; 2,3; 1\"; 28,6; 35,0; 149; 26,70; 50,8; 101,6; 52,4; 41,3; 12,7; 3,6; 1.1/4\"; 43,7; 159; 35,05; 63,5; 111,1; 14,3; 4,1; 1.1/2\"; 31,8; 50,3; 178; 40,90; 73,0; 123,8; 69,8; 15,9; 5,4; 2\"; 62,0; 216; 52,60; 92,1; 165,1; 104,8; 57,1; 17,5; 11,3; 2.1/2\"; 74,7; 244; 62,70; 190,0; 19,0; 16,3; 3\"; 90,7; 241; 78,00; 127,0; 54,0; 20,6; 11,8; 4\"; 116,0; 292; 102,4; 157,0; 235,0; 159,0; 23,8; 24,0; 5\"; 144,0; 349; 186,0; 279,0; 79,4; 37,6; 6\"; 12; 55,6; 171,0; 381; 216,0; 318,0; 85,7; 49,9; 8\"; 221,0; 470; 270,0; 394,0; 298,0; 102,0; 77,1; 10\"; 16; 276,0; 546; 324,0; 470,0; 368,0; 108,0; 111,0; 12\"; 20; 327,0; 610; 381,0; 533,0; 419,0; 117,0; 147,0; 14\"; 359,0; 641; 413,0; 559,0; 451,0"
          },
          {
            "label": "Dados 2",
            "value": "130,0; 181,0; 16\"; 410,0; 705; 616,0; 508,0; 133,0; 193,0; 18\"; 462,0; 787; 686,0; 565,0; 152,0; 272,0; 20\"; 513,0; 857; 584,0; 749,0; 622,0; 331,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 203,0; 635,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-sw-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Com Encaixe (Socketwelding) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_sw_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F303"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,4; 121; 34,9; 82,6; 38,1; 31,8; 9,52; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 44,4; 11,1; 2,3; 1\"; 28,6; 34,5; 149; 50,8; 102,0; 52,4; 41,3; 12,7; 3,6; 1.1/4\"; 43,2; 159; 63,5; 111,0; 14,3; 4,1; 1.1/2\"; 49,5; 178; 73,0; 124,0; 69,8; 15,9; 5,4; 2\"; 62,0; 216; 92,1; 165,0; 105,0; 57,2; 17,5; 11,3; 2.1/2\"; 74,7; 244; 104,8; 190,0; 19,0; 16,3; 3\"; 47,6; 90,4; 267; 127,0; 203,0; 133,0; 21,8; 4\"; 54,0; 115,8; 311; 157,0; 241,0; 162,0; 90,5; 33,1; 5\"; 143,8; 375; 186,0; 292,0; 197,0; 59,0; 6\"; 12; 170,7; 394; 216,0; 318,0; 229,0; 119,0; 74,8; 8\"; 221,5; 483; 270,0; 394,0; 44,5; 144,0; 118,0; 10\"; 108,0; 276,3; 584; 324,0; 483,0; 368,0; 159,0; 12\"; 16; 327,1; 673; 381,0; 572,0; 451,0; 181,0; 263,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-rsc-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_rsc_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Roscado - ANSI",
        "url": "http://www.valaco.com.br/produtos/conexoes_rsc_ANSI.html"
      }
    ],
    "summary": "de Pressão; 150; Lbs; 300; 600; 900; 1500; 2500",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; 150; Lbs; 300; 600; 900; 1500; 2500"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Roscado 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 88,9; 34,9; 60,3; 15,9; 30,2; 0,5; 3/4\"; 12,7; 98,4; 42,9; 69,8; 38,1; 0,9; 1\"; 14,3; 108,0; 50,8; 79,4; 49,2; 17,5; 1.1/4\"; 117,0; 63,5; 58,7; 20,6; 1,4; 1.1/2\"; 127,0; 73,0; 65,1; 22,2; 2\"; 19,0; 152,0; 92,1; 121,0; 77,8; 25,4; 2,3; 2.1/2\"; 178,0; 104,8; 140,0; 90,5; 28,6; 3,2; 3\"; 23,8; 190,0; 3,6; 3.1/2\"; 216,0; 122,0; 31,8; 5,0; 4\"; 229,0; 157,0; 135,0; 33,3; 5,9; 5\"; 254,0; 186,0; 22,0; 164,0; 36,5; 6,8; 6\"; 279,0; 241,0; 192,0; 39,7; 8,6; 8\"; 343,0; 270,0; 298,0; 246,0; 44,4; 13,6"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Roscado 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 23,6; 34,9; 66,7; 15,9; 38,1; 22,2; 0,9; 3/4\"; 117,0; 29,0; 42,9; 82,6; 19,0; 47,6; 25,4; 1,4; 1\"; 17,5; 124,0; 35,8; 50,8; 88,9; 54,0; 27,0; 1.1/4\"; 133,0; 44,4; 63,5; 98,4; 20,6; 1,8; 1.1/2\"; 156,0; 50,5; 73,0; 114,0; 69,8; 30,2; 2,7; 2\"; 165,0; 92,1; 127,0; 84,1; 33,3; 28,6; 3,2; 2.1/2\"; 190,0; 76,2; 104,8; 149,0; 100,0; 31,8; 4,5; 3\"; 210,0; 92,2; 168,0; 5,9; 3.1/2\"; 229,0; 105,0; 140,0; 184,0; 36,5; 7,7; 4\"; 254,0; 118,0; 157,0; 200,0; 146,0; 10,0; 5\"; 279,0; 145,0; 186,0; 235,0; 178,0; 12,7; 6\"; 12; 38,5; 318,0; 171,0; 216,0; 270,0; 206,0; 52,4; 46,0; 17,7; 8\"; 41,3; 381,0; 222,0; 330,0; 260,0; 61,9; 26,3"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) e na altura ( N ); do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Roscado 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 23,6; 34,9; 66,7; 15,9; 38,1; 22,2; 0,9; 3/4\"; 117,0; 29,0; 42,9; 82,6; 19,0; 47,6; 25,4; 1,4; 1\"; 17,5; 124,0; 35,8; 50,8; 88,9; 54,0; 27,0; 1,8; 1.1/4\"; 20,6; 133,0; 44,4; 63,5; 98,4; 28,6; 2,3; 1.1/2\"; 156,0; 50,5; 73,0; 114,0; 69,8; 31,8; 3,1; 2\"; 165,0; 92,1; 127,0; 84,1; 36,5; 4,1; 2.1/2\"; 190,0; 76,2; 104,8; 149,0; 100,0; 41,3; 5,9; 3\"; 210,0; 92,2; 168,0; 46,0; 7,3; 3.1/2\"; 229,0; 105,0; 140,0; 184,0; 49,2; 39,7; 9,5; 4\"; 273,0; 118,0; 157,0; 216,0; 152,0; 16,8; 5\"; 330,0; 145,0; 186,0; 267,0; 189,0; 60,3; 6\"; 12; 356,0; 171,0; 292,0; 222,0; 36,3; 8\"; 55,6; 419,0; 270,0; 349,0; 57,2; 52,2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Roscado 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 23,6; 34,9; 82,5; 38,1; 31,7; 1,8; 3/4\"; 25,4; 130; 29,0; 42,9; 88,9; 44,4; 2,3; 1\"; 28,6; 149; 35,8; 50,8; 101,6; 52,4; 41,3; 3,6; 1.1/4\"; 159; 63,5; 111,1; 30,2; 4,1; 1.1/2\"; 31,8; 178; 50,5; 73,0; 123,8; 69,8; 5,4; 2\"; 216; 92,1; 165,1; 104,8; 57,1; 11,3; 2.1/2\"; 244; 76,2; 190,0; 47,6; 16,3; 3\"; 241; 92,2; 127,0; 54,0; 11,8; 4\"; 292; 118,0; 157,0; 235,0; 159,0; 24,0; 5\"; 349; 145,0; 186,0; 279,0; 79,4; 37,6; 6\"; 12; 55,6; 381; 171,0; 216,0; 318,0; 85,7; 57,2; 49,9; 8\"; 470; 222,0; 270,0; 394,0; 298,0; 102; 77,1"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Roscado 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 23,6; 34,9; 82,6; 38,1; 31,8; 1,8; 3/4\"; 25,4; 130; 29,0; 42,9; 88,9; 44,4; 24,5; 2,3; 1\"; 28,6; 149; 35,8; 50,8; 102,0; 52,4; 41,3; 3,6; 1.1/4\"; 159; 63,5; 111,0; 30,2; 4,1; 1.1/2\"; 178; 50,5; 73,0; 124,0; 69,8; 5,4; 2\"; 216; 92,1; 165,0; 105,0; 57,2; 11,3; 2.1/2\"; 244; 76,2; 104,8; 190,0; 47,6; 16,3; 3\"; 267; 92,2; 127,0; 203,0; 133,0; 21,8; 4\"; 54,0; 311; 118,0; 157,0; 241,0; 162,0; 90,5; 33,1; 5\"; 375; 145,0; 186,0; 292,0; 197,0; 59,0; 6\"; 12; 394; 171,0; 216,0; 318,0; 229,0; 119,0; 74,8; 8\"; 483; 222,0; 270,0; 394,0; 44,5; 144,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Roscado NPT e BSP 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 133,35; 22,35; 35,05; 88,90; 42,93; 39,62; 28,70; 3/4\"; 31,75; 139,70; 27,69; 95,25; 50,80; 1\"; 158,75; 34,54; 107,95; 25,40; 57,15; 47,75; 12; 1.1/4\"; 38,10; 184,15; 43,18; 63,50; 130,30; 73,15; 52,32; 18; 1.1/2\"; 44,45; 203,20; 49,53; 146,05; 79,50; 60,45; 25; 2\"; 234,95; 61,98; 92,20; 171,45; 69,85; 38; 2.1/2\"; 266,70; 74,68; 104,90; 196,85; 114,30; 55; 3\"; 66,80; 304,80; 90,68; 127,00; 228,60; 83; 4\"; 76,20; 355,60; 116,08; 157,23; 273,05; 41,40; 165,10; 127; 5\"; 419,10; 143,76; 185,67; 323,85; 210; 6\"; 482,60; 170,69; 215,90; 368,30; 54,10; 152,40; 82,55; 323; 8\"; 552,45; 221,49; 270,00; 438,15; 177,80; 485"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) e na altura; ( N ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-DIN-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN.html",
    "sourcePages": [
      {
        "title": "Flange Roscado - DIN",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN.html"
      }
    ],
    "summary": "de Pressão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-DIN2565-PN6-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2565_PN6.html",
    "sourcePages": [
      {
        "title": "Flange Roscado NPT e BSP norma DIN 2565 Classe PN 6 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2565_PN6.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2565; - Classe de pressão PN 6 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); Rosca; DIN 2999; h 1; d 3; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); 1/2\"; 15; 21,3; R 1/2; 80; 12; 55; 20; 30; 40; M 10; 11; 0,373; 3/4\"; 26,9; R 3/4; 90; 14; 65; 24; 50; 0,59; 1\"; 25; 33,7; R 1; 100; 75; 60; 0,743; 1.1/4\"; 32; 42,4; R 1 1/4; 120; 26; 70; M 12; 1,05; 1.1/2\"; 48,3; R 1 1/2; 130; 1,2; 2\"; 60,3; R 2; 140; 110; 28; 1,37; 2.1/2\"; 76,1; R 2 1/2; 160; 1,92; 3\"; 88,9; R 3; 190; 16; 150; 34; 128; M 16; 18; 2,82; 4\"; 114,3; R 4; 210; 170; 38; 148; 3,19; 5\"; 125; 139,7; R 5; 240; 200; 178; 4,47; 6\"; 165,1; R 6; 265; 225; 44; 185; 202; 5,3"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 6 bar (87 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-DIN2566-PN10PN16-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2566_PN10PN16.html",
    "sourcePages": [
      {
        "title": "Flange Roscado NPT e BSP norma DIN 2566 Classe PN 10 / PN 16 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2566_PN10PN16.html"
      }
    ],
    "summary": "2566; - Classe de pressão PN 10 / PN 16 (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2566; - Classe de pressão PN 10 / PN 16 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); Rosca; DIN 2999; h 1; d 3; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); 1/2\"; 15; 21,3; R 1/2; 95; 14; 65; 20; 35; 45; M 12; 0,613; 3/4\"; 26,9; R 3/4; 105; 16; 75; 24; 58; 0,91; 1\"; 25; 33,7; R 1; 115; 85; 52; 68; 1,1; 1.1/4\"; 32; 42,4; R 1 1/4; 140; 100; 26; 60; 78; M 16; 18; 1,6; 1.1/2\"; 40; 48,3; R 1 1/2; 150; 110; 70; 88; 1,78; 2\"; 50; 60,3; R 2; 165; 125; 28; 102; 2,43; 2.1/2\"; 76,1; R 2 1/2; 185; 145; 122; 3,18; 3\"; 80; 88,9; R 3; 200; 160; 34; 118; 138; 4,12; 4\"; 114,3; R 4; 220; 180; 38; 158; 4,47; 5\"; 139,7; R 5; 250; 22; 210; 168; 188; 6,13; 6\"; 165,1; R 6; 285; 240; 44; 195; 212; M 20; 7,92"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 16 bar (232 psi) e (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-DIN2567-PN25PN40-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2567_PN25PN40.html",
    "sourcePages": [
      {
        "title": "Flange Roscado NPT e BSP norma DIN 2567 Classe PN 25 / PN 40 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2567_PN25PN40.html"
      }
    ],
    "summary": "2567; - Classe de pressão PN 25 / PN 40 (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2567; - Classe de pressão PN 25 / PN 40 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); Rosca; DIN 2999; h 1; d 3; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); 1/2\"; 15; 21,3; R 1/2; 95; 16; 65; 22; 35; 45; M 12; 14; 0,71; 3/4\"; 20; 26,9; R 3/4; 105; 18; 75; 26; 58; 1,03; 1\"; 25; 33,7; R 1; 115; 85; 28; 52; 68; 1,28; 1.1/4\"; 32; 42,4; R 1 1/4; 140; 100; 30; 60; 78; M 16; 1,87; 1.1/2\"; 40; 48,3; R 1 1/2; 150; 110; 70; 88; 2,14; 2\"; 50; 60,3; R 2; 165; 125; 34; 102; 2,85; 2.1/2\"; 76,1; R 2 1/2; 185; 145; 38; 122; 3,85; 3\"; 80; 88,9; R 3; 200; 24; 160; 118; 138; 4,80; 4\"; 114,3; R 4; 235; 190; 44; 162; M 20; 6,43; 5\"; 139,7; R 5; 270; 220; 48; 170; 188; M 24; 8,77; 6\"; 165,1; R 6; 300; 250; 218; 10,5"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 bar (580 psi) e (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-DIN2568-PN64-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2568_PN64.html",
    "sourcePages": [
      {
        "title": "Flange Roscado NPT e BSP norma DIN 2568 Classe PN 64 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2568_PN64.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2568; - Classe de pressão PN 64 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); Rosca; DIN 2999; h 1; d 3; d 5; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); 1/2\"; 15; 21,3"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a norma DIN 2569 classe de pressão PN 100",
        "rows": [
          {
            "label": "Dados",
            "value": "3/4\"; 20; 26,9; 1\"; 25; 33,7; 1.1/4\"; 32; 42,4; 1.1/2\"; 40; 48,3; 2\"; 50; 60,3; R 2; 180; 26; 135; 36; 90; 61; 108; M 20; 22; 4,29; 2.1/2\"; 65; 76,1; R 2 1/2; 205; 160; 112; 77; 132; 5,48; 3\"; 80; 88,9; R 3; 215; 28; 170; 44; 125; 142; 6,42; 4\"; 100; 114; R 4; 250; 30; 200; 52; 152; 116; M 24; 9,25; 5\"; 140; R 5; 295; 34; 240; 56; 185; 141; M 27; 14,4; 6\"; 150; 165; R 6; 345; 280; 60; 167; M 30; 33; 20,7"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 64 bar (928 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-rsc-DIN2569-PN100-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2569_PN100.html",
    "sourcePages": [
      {
        "title": "Flange Roscado NPT e BSP norma DIN 2569 Classe PN 100 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_rsc_DIN2569_PN100.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F304"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2569; - Classe de pressão PN 100 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526).; Tipos de acabamento da face de junção para flanges de faceamento com ressalto:; - Forma C: Rz=160 (não mais fino que 40&micro;);; - Forma D: Rz=40;; - Forma E: Rz=16.; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Pescoço; Ressalto; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); Rosca; DIN 2999; h 1; d 3; d 5; d 4; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); 1/2\"; 15; 21,3; R 1/2; 105; 20; 75; 28; 43; 22; 55; M 12; 14; 1,19; 3/4\"; 26,9; R 3/4; 130; 90; 30; 52; 68; M 16; 18; 1\"; 25; 33,7; R 1; 140; 24; 100; 32; 60; 35; 78; 2,54; 1.1/4\"; 42,4; R 1 1/4; 155; 110; 85; M 20; 2,99; 1.1/2\"; 40; 48,3; R 1 1/2; 170; 26; 125; 34; 80; 49; 98; 3,87; 2\"; 50; 60,3; R 2; 195; 145; 36; 95; 61; 115; M 24; 5,42; 2.1/2\"; 65; 76,1; R 2 1/2; 220; 118; 77; 7,11; 3\"; 88,9; R 3; 230; 180; 44; 150; 8,21; 4\"; 114; R 4; 265; 210; 158; 116; 175; M 27; 12,1; 5\"; R 5; 315; 250; 56; 188; 141; M 30; 33; 18,6; 6\"; 165; R 6; 355; 290; 225; 167; 12; 25,1"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 100 bar (1450 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_150.html"
      },
      {
        "title": "Flange Solto (Lap Joint) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_300.html"
      },
      {
        "title": "Flange Solto (Lap Joint) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_600.html"
      },
      {
        "title": "Flange Solto (Lap Joint) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_900.html"
      },
      {
        "title": "Flange Solto (Lap Joint) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_1500.html"
      },
      {
        "title": "Flange Solto (Lap Joint) 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 88,9; 60,3; 15,9; 30,2; 3,18; 22,9; 0,5; 3/4\"; 12,7; 98,4; 69,8; 38,1; 28,2; 0,9; 1\"; 14,3; 108,0; 79,4; 49,2; 17,5; 35,1; 1.1/4\"; 117,0; 58,7; 20,6; 4,76; 43,7; 1,4; 1.1/2\"; 127,0; 65,1; 22,2; 6,35; 50,0; 2\"; 19,0; 152,0; 121,0; 77,8; 25,4; 7,94; 62,5; 2,3; 2.1/2\"; 178,0; 140,0; 90,5; 28,6; 75,4; 3,2; 3\"; 23,8; 190,0; 9,52; 91,4; 3,6; 3.1/2\"; 216,0; 122,0; 31,8; 104,0; 5,0; 4\"; 229,0; 135,0; 33,3; 11,10; 5,9; 5\"; 254,0; 22,0; 164,0; 36,5; 145,0; 6,8; 6\"; 279,0; 241,0; 192,0; 39,7; 12,70; 171,0; 8,6; 8\"; 343,0; 298,0; 246,0; 44,4; 222,0; 13,6; 10\"; 12; 406,0; 362,0; 305,0; 277,0; 19,5; 12\"; 483,0; 432,0; 365,0; 55,6; 328,0; 29,0; 14\"; 34,9; 533,0; 476,0; 400,0; 360,0; 47,6; 16\"; 16; 597,0; 540,0; 457,0; 87,3; 411,0; 63,5; 18\"; 635,0; 578,0; 505,0; 96,8; 462,0; 72,6; 20\"; 20; 42,9"
          },
          {
            "label": "Dados 2",
            "value": "693,0; 559,0; 103,0; 514,0; 88,5; 22\"; 46,0; 749,3; 692,1; 616,0; 107,9; 565,1; 100,0; 24\"; 813,0; 749,0; 664,0; 111,0; 125,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 66,7; 15,9; 38,1; 22,2; 3,18; 22,9; 0,9; 3/4\"; 117,0; 82,6; 19,0; 47,6; 25,4; 28,2; 1,4; 1\"; 17,5; 124,0; 88,9; 54,0; 27,0; 35,1; 1.1/4\"; 133,0; 98,4; 63,5; 4,76; 43,7; 1,8; 1.1/2\"; 20,6; 156,0; 114,0; 69,8; 30,2; 6,35; 50,0; 2,7; 2\"; 165,0; 127,0; 84,1; 33,3; 7,94; 62,5; 3,2; 2.1/2\"; 190,0; 149,0; 100,0; 75,4; 4,5; 3\"; 28,6; 210,0; 168,0; 42,9; 9,52; 91,4; 5,9; 3.1/2\"; 229,0; 184,0; 44,4; 104,0; 7,7; 4\"; 31,8; 254,0; 200,0; 146,0; 11,10; 10,0; 5\"; 34,9; 279,0; 235,0; 178,0; 50,8; 145,0; 12,7; 6\"; 12; 38,5; 318,0; 270,0; 206,0; 52,4; 12,70; 171,0; 17,7; 8\"; 41,3; 381,0; 330,0; 260,0; 61,9; 222,0; 26,3; 10\"; 16; 444,0; 387,0; 321,0; 277,0; 12\"; 521,0; 451,0; 375,0; 102,0; 328,0; 14\"; 20; 584,0; 514,0; 425,0; 111,0; 360,0; 86,2; 16\"; 57,2; 648,0; 572,0; 483,0; 121,0; 411,0"
          },
          {
            "label": "Dados 2",
            "value": "113,0; 18\"; 24; 60,3; 711,0; 629,0; 533,0; 130,0; 462,0; 134,0; 20\"; 775,0; 686,0; 587,0; 140,0; 22\"; 66,8; 838,2; 742,9; 641,3; 565,1; 208,5; 24\"; 914,0; 813,0; 702,0; 152,0; 616,0; 249,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 66,7; 15,9; 38,1; 22,2; 3,18; 22,9; 0,9; 3/4\"; 117,0; 82,6; 19,0; 47,6; 25,4; 28,2; 1,4; 1\"; 17,5; 124,0; 88,9; 54,0; 27,0; 35,1; 1,8; 1.1/4\"; 20,6; 133,0; 98,4; 63,5; 28,6; 4,76; 43,7; 2,3; 1.1/2\"; 156,0; 114,0; 69,8; 31,8; 6,35; 50,0; 3,2; 2\"; 165,0; 127,0; 84,1; 36,5; 7,94; 62,5; 4,1; 2.1/2\"; 190,0; 149,0; 100,0; 41,3; 75,4; 5,4; 3\"; 210,0; 168,0; 46,0; 9,52; 91,4; 6,8; 3.1/2\"; 34,9; 229,0; 184,0; 49,2; 104,0; 9,1; 4\"; 273,0; 216,0; 152,0; 11,10; 16,3; 5\"; 44,4; 330,0; 267,0; 189,0; 60,3; 145,0; 27,7; 6\"; 12; 356,0; 292,0; 222,0; 12,70; 171,0; 35,4; 8\"; 55,6; 419,0; 349,0; 76,2; 49,9; 10\"; 16; 508,0; 432,0; 343,0; 111,0; 277,0; 77,1; 12\"; 20; 559,0; 489,0; 400,0; 328,0; 90,7; 14\"; 603,0; 527,0; 360,0; 113,0; 16\"; 686,0; 495,0; 140,0; 411,0; 166,0; 18\"; 743,0; 654,0"
          },
          {
            "label": "Dados 2",
            "value": "546,0; 462,0; 197,0; 20\"; 24; 813,0; 724,0; 610,0; 514,0; 259,0; 22\"; 870,0; 778,0; 666,7; 174,7; 565,1; 313,0; 24\"; 102,0; 940,0; 838,0; 50,8; 718,0; 616,0; 367,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 82,5; 38,1; 31,7; 3,18; 22,9; 1,8; 3/4\"; 25,4; 130; 88,9; 44,4; 34,9; 28,2; 2,3; 1\"; 28,6; 149; 101,6; 52,4; 41,3; 35,1; 3,6; 1.1/4\"; 159; 111,1; 63,5; 4,76; 43,7; 4,1; 1.1/2\"; 31,8; 178; 123,8; 69,8; 6,35; 50,0; 5,4; 2\"; 216; 165,1; 104,8; 57,1; 7,94; 62,5; 11,3; 2.1/2\"; 244; 190,0; 75,4; 16,0; 3\"; 241; 127,0; 54,0; 9,52; 91,4; 4\"; 292; 235,0; 159,0; 11,10; 117,0; 23,1; 5\"; 50,8; 349; 279,0; 79,4; 145,0; 36,7; 6\"; 12; 55,6; 381; 318,0; 85,7; 12,70; 171,0; 47,6; 8\"; 470; 394,0; 298,0; 114,0; 222,0; 86,2; 10\"; 16; 546; 470,0; 368,0; 277,0; 125,0; 12\"; 20; 610; 533,0; 419,0; 143,0; 328,0; 168,0; 14\"; 641; 559,0; 451,0; 156,0; 360,0; 188,0; 16\"; 705; 616,0; 508,0; 165,0; 411,0; 211,0; 18\"; 102,0; 787; 686,0; 565,0; 462,0; 295,0; 20\"; 108,0; 857; 749,0; 622,0; 210,0; 514,0"
          },
          {
            "label": "Dados 2",
            "value": "367,0; 24\"; 140,0; 1041; 902,0; 66,7; 267,0; 703,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 82,6; 38,1; 31,8; 3,18; 22,9; 1,8; 3/4\"; 25,4; 130; 88,9; 44,4; 34,9; 28,2; 2,3; 1\"; 28,6; 149; 102,0; 52,4; 41,3; 35,1; 3,6; 1.1/4\"; 159; 111,0; 63,5; 4,76; 43,7; 4,1; 1.1/2\"; 178; 124,0; 69,8; 6,35; 50,0; 5,4; 2\"; 216; 165,0; 105,0; 57,2; 7,94; 62,5; 11,3; 2.1/2\"; 244; 190,0; 75,4; 16,0; 3\"; 47,6; 267; 203,0; 133,0; 73,0; 9,52; 91,4; 21,3; 4\"; 54,0; 311; 241,0; 162,0; 90,5; 11,10; 117,0; 34,0; 5\"; 375; 292,0; 197,0; 145,0; 6\"; 12; 394; 318,0; 229,0; 119,0; 12,70; 171,0; 77,1; 8\"; 92,1; 483; 394,0; 44,5; 143,0; 222,0; 129,0; 10\"; 108,0; 584; 483,0; 50,8; 368,0; 178,0; 277,0; 220,0; 12\"; 16; 673; 572,0; 451,0; 219,0; 328,0; 286,0; 14\"; 749; 635,0; 60,3; 495,0; 360,0; 404,0; 16\"; 146,0; 826; 705,0; 66,7; 552,0; 260,0; 411,0; 522,0; 18\"; 914; 775,0; 597,0; 276,0; 462,0; 669,0"
          },
          {
            "label": "Dados 2",
            "value": "20\"; 984; 832,0; 79,4; 641,0; 514,0; 805,0; 24\"; 1168; 991,0; 762,0; 330,0; 616,0; 1326,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 133,35; 88,90; 22,35; 42,93; 39,62; 3,30; 22,86; 3/4\"; 31,75; 139,70; 95,25; 50,80; 28,19; 1\"; 35,05; 158,75; 107,95; 25,40; 57,15; 47,75; 12; 1.1/4\"; 38,10; 184,15; 130,30; 28,70; 73,15; 52,32; 4,57; 43,69; 17; 1.1/2\"; 44,45; 203,20; 146,05; 79,50; 60,45; 6,35; 50,04; 24; 2\"; 234,95; 171,45; 69,85; 7,87; 62,48; 37; 2.1/2\"; 266,70; 196,85; 114,30; 75,44; 53; 3\"; 66,80; 304,80; 228,60; 92,20; 9,40; 91,44; 80; 4\"; 76,20; 355,60; 273,05; 41,40; 165,10; 11,18; 116,84; 112; 5\"; 419,10; 323,85; 144,53; 204; 6\"; 482,60; 368,30; 54,10; 152,40; 12,70; 314; 8\"; 127,00; 552,45; 438,15; 177,80; 222,25; 471; 10\"; 673,10; 539,75; 374,65; 277,37; 897; 12\"; 762,00; 619,25; 441,45; 254,00; 328,17; 1262"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 88,9; 60,3; 15,9; 30,2; 3,18; 22,9; 0,5; 3/4\"; 12,7; 98,4; 69,8; 38,1; 28,2; 0,9; 1\"; 14,3; 108,0; 79,4; 49,2; 17,5; 35,1; 1.1/4\"; 117,0; 58,7; 20,6; 4,76; 43,7; 1,4; 1.1/2\"; 127,0; 65,1; 22,2; 6,35; 50,0; 2\"; 19,0; 152,0; 121,0; 77,8; 25,4; 7,94; 62,5; 2,3; 2.1/2\"; 178,0; 140,0; 90,5; 28,6; 75,4; 3,2; 3\"; 23,8; 190,0; 9,52; 91,4; 3,6; 3.1/2\"; 216,0; 122,0; 31,8; 104,0; 5,0; 4\"; 229,0; 135,0; 33,3; 11,10; 5,9; 5\"; 254,0; 22,0; 164,0; 36,5; 145,0; 6,8; 6\"; 279,0; 241,0; 192,0; 39,7; 12,70; 171,0; 8,6; 8\"; 343,0; 298,0; 246,0; 44,4; 222,0; 13,6; 10\"; 12; 406,0; 362,0; 305,0; 277,0; 19,5; 12\"; 483,0; 432,0; 365,0; 55,6; 328,0; 29,0; 14\"; 34,9; 533,0; 476,0; 400,0; 360,0; 47,6; 16\"; 16; 597,0; 540,0; 457,0; 87,3; 411,0; 63,5; 18\"; 635,0; 578,0; 505,0; 96,8; 462,0; 72,6; 20\"; 20; 42,9"
          },
          {
            "label": "Dados 2",
            "value": "693,0; 559,0; 103,0; 514,0; 88,5; 22\"; 46,0; 749,3; 692,1; 616,0; 107,9; 565,1; 100,0; 24\"; 813,0; 749,0; 664,0; 111,0; 125,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 66,7; 15,9; 38,1; 22,2; 3,18; 22,9; 0,9; 3/4\"; 117,0; 82,6; 19,0; 47,6; 25,4; 28,2; 1,4; 1\"; 17,5; 124,0; 88,9; 54,0; 27,0; 35,1; 1.1/4\"; 133,0; 98,4; 63,5; 4,76; 43,7; 1,8; 1.1/2\"; 20,6; 156,0; 114,0; 69,8; 30,2; 6,35; 50,0; 2,7; 2\"; 165,0; 127,0; 84,1; 33,3; 7,94; 62,5; 3,2; 2.1/2\"; 190,0; 149,0; 100,0; 75,4; 4,5; 3\"; 28,6; 210,0; 168,0; 42,9; 9,52; 91,4; 5,9; 3.1/2\"; 229,0; 184,0; 44,4; 104,0; 7,7; 4\"; 31,8; 254,0; 200,0; 146,0; 11,10; 10,0; 5\"; 34,9; 279,0; 235,0; 178,0; 50,8; 145,0; 12,7; 6\"; 12; 38,5; 318,0; 270,0; 206,0; 52,4; 12,70; 171,0; 17,7; 8\"; 41,3; 381,0; 330,0; 260,0; 61,9; 222,0; 26,3; 10\"; 16; 444,0; 387,0; 321,0; 277,0; 12\"; 521,0; 451,0; 375,0; 102,0; 328,0; 14\"; 20; 584,0; 514,0; 425,0; 111,0; 360,0; 86,2; 16\"; 57,2; 648,0; 572,0; 483,0; 121,0; 411,0"
          },
          {
            "label": "Dados 2",
            "value": "113,0; 18\"; 24; 60,3; 711,0; 629,0; 533,0; 130,0; 462,0; 134,0; 20\"; 775,0; 686,0; 587,0; 140,0; 22\"; 66,8; 838,2; 742,9; 641,3; 565,1; 208,5; 24\"; 914,0; 813,0; 702,0; 152,0; 616,0; 249,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 95,2; 66,7; 15,9; 38,1; 22,2; 3,18; 22,9; 0,9; 3/4\"; 117,0; 82,6; 19,0; 47,6; 25,4; 28,2; 1,4; 1\"; 17,5; 124,0; 88,9; 54,0; 27,0; 35,1; 1,8; 1.1/4\"; 20,6; 133,0; 98,4; 63,5; 28,6; 4,76; 43,7; 2,3; 1.1/2\"; 156,0; 114,0; 69,8; 31,8; 6,35; 50,0; 3,2; 2\"; 165,0; 127,0; 84,1; 36,5; 7,94; 62,5; 4,1; 2.1/2\"; 190,0; 149,0; 100,0; 41,3; 75,4; 5,4; 3\"; 210,0; 168,0; 46,0; 9,52; 91,4; 6,8; 3.1/2\"; 34,9; 229,0; 184,0; 49,2; 104,0; 9,1; 4\"; 273,0; 216,0; 152,0; 11,10; 16,3; 5\"; 44,4; 330,0; 267,0; 189,0; 60,3; 145,0; 27,7; 6\"; 12; 356,0; 292,0; 222,0; 12,70; 171,0; 35,4; 8\"; 55,6; 419,0; 349,0; 76,2; 49,9; 10\"; 16; 508,0; 432,0; 343,0; 111,0; 277,0; 77,1; 12\"; 20; 559,0; 489,0; 400,0; 328,0; 90,7; 14\"; 603,0; 527,0; 360,0; 113,0; 16\"; 686,0; 495,0; 140,0; 411,0; 166,0; 18\"; 743,0; 654,0"
          },
          {
            "label": "Dados 2",
            "value": "546,0; 462,0; 197,0; 20\"; 24; 813,0; 724,0; 610,0; 514,0; 259,0; 22\"; 870,0; 778,0; 666,7; 174,7; 565,1; 313,0; 24\"; 102,0; 940,0; 838,0; 50,8; 718,0; 616,0; 367,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 82,5; 38,1; 31,7; 3,18; 22,9; 1,8; 3/4\"; 25,4; 130; 88,9; 44,4; 34,9; 28,2; 2,3; 1\"; 28,6; 149; 101,6; 52,4; 41,3; 35,1; 3,6; 1.1/4\"; 159; 111,1; 63,5; 4,76; 43,7; 4,1; 1.1/2\"; 31,8; 178; 123,8; 69,8; 6,35; 50,0; 5,4; 2\"; 216; 165,1; 104,8; 57,1; 7,94; 62,5; 11,3; 2.1/2\"; 244; 190,0; 75,4; 16,0; 3\"; 241; 127,0; 54,0; 9,52; 91,4; 4\"; 292; 235,0; 159,0; 11,10; 117,0; 23,1; 5\"; 50,8; 349; 279,0; 79,4; 145,0; 36,7; 6\"; 12; 55,6; 381; 318,0; 85,7; 12,70; 171,0; 47,6; 8\"; 470; 394,0; 298,0; 114,0; 222,0; 86,2; 10\"; 16; 546; 470,0; 368,0; 277,0; 125,0; 12\"; 20; 610; 533,0; 419,0; 143,0; 328,0; 168,0; 14\"; 641; 559,0; 451,0; 156,0; 360,0; 188,0; 16\"; 705; 616,0; 508,0; 165,0; 411,0; 211,0; 18\"; 102,0; 787; 686,0; 565,0; 462,0; 295,0; 20\"; 108,0; 857; 749,0; 622,0; 210,0; 514,0"
          },
          {
            "label": "Dados 2",
            "value": "367,0; 24\"; 140,0; 1041; 902,0; 66,7; 267,0; 703,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 121; 82,6; 38,1; 31,8; 3,18; 22,9; 1,8; 3/4\"; 25,4; 130; 88,9; 44,4; 34,9; 28,2; 2,3; 1\"; 28,6; 149; 102,0; 52,4; 41,3; 35,1; 3,6; 1.1/4\"; 159; 111,0; 63,5; 4,76; 43,7; 4,1; 1.1/2\"; 178; 124,0; 69,8; 6,35; 50,0; 5,4; 2\"; 216; 165,0; 105,0; 57,2; 7,94; 62,5; 11,3; 2.1/2\"; 244; 190,0; 75,4; 16,0; 3\"; 47,6; 267; 203,0; 133,0; 73,0; 9,52; 91,4; 21,3; 4\"; 54,0; 311; 241,0; 162,0; 90,5; 11,10; 117,0; 34,0; 5\"; 375; 292,0; 197,0; 145,0; 6\"; 12; 394; 318,0; 229,0; 119,0; 12,70; 171,0; 77,1; 8\"; 92,1; 483; 394,0; 44,5; 143,0; 222,0; 129,0; 10\"; 108,0; 584; 483,0; 50,8; 368,0; 178,0; 277,0; 220,0; 12\"; 16; 673; 572,0; 451,0; 219,0; 328,0; 286,0; 14\"; 749; 635,0; 60,3; 495,0; 360,0; 404,0; 16\"; 146,0; 826; 705,0; 66,7; 552,0; 260,0; 411,0; 522,0; 18\"; 914; 775,0; 597,0; 276,0; 462,0; 669,0"
          },
          {
            "label": "Dados 2",
            "value": "20\"; 984; 832,0; 79,4; 641,0; 514,0; 805,0; 24\"; 1168; 991,0; 762,0; 330,0; 616,0; 1326,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Solto (Lap Joint) 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipo de faceamento:; - Lap Joint;; Tipo de acabamento da face de Junção:; - Liso."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,23; 133,35; 88,90; 22,35; 42,93; 39,62; 3,30; 22,86; 3/4\"; 31,75; 139,70; 95,25; 50,80; 28,19; 1\"; 35,05; 158,75; 107,95; 25,40; 57,15; 47,75; 12; 1.1/4\"; 38,10; 184,15; 130,30; 28,70; 73,15; 52,32; 4,57; 43,69; 17; 1.1/2\"; 44,45; 203,20; 146,05; 79,50; 60,45; 6,35; 50,04; 24; 2\"; 234,95; 171,45; 69,85; 7,87; 62,48; 37; 2.1/2\"; 266,70; 196,85; 114,30; 75,44; 53; 3\"; 66,80; 304,80; 228,60; 92,20; 9,40; 91,44; 80; 4\"; 76,20; 355,60; 273,05; 41,40; 165,10; 11,18; 116,84; 112; 5\"; 419,10; 323,85; 144,53; 204; 6\"; 482,60; 368,30; 54,10; 152,40; 12,70; 314; 8\"; 127,00; 552,45; 438,15; 177,80; 222,25; 471; 10\"; 673,10; 539,75; 374,65; 277,37; 897; 12\"; 762,00; 619,25; 441,45; 254,00; 328,17; 1262"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 3.; de Teste de Pressão Hidrostática;; 4.; de Pressão e Temperatura de Serviço;; 5.; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN.html",
    "sourcePages": [
      {
        "title": "Flanges Solto - DIN",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN.html"
      }
    ],
    "summary": "de Pressão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN2641-PN6-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2641_PN6.html",
    "sourcePages": [
      {
        "title": "Flange Solto norma DIN 2641 Classe PN 6 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2641_PN6.html"
      }
    ],
    "summary": "- Classe de pressão PN 6 (1); Tipos de faceamento:; - Forma F: flange solto (representado pelo tubo rebordeado);; - Forma B: colar plano;; - Forma G: borda para solda de topo.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN 2641",
        "rows": [
          {
            "label": "Dados",
            "value": "- Classe de pressão PN 6 (1); Tipos de faceamento:; - Forma F: flange solto (representado pelo tubo rebordeado);; - Forma B: colar plano;; - Forma G: borda para solda de topo."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Anel"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 6; Nr.; de; Furos; Tipo da Rosca do Para-; fuso; d 2; d 5; h 3; d 4; (mm) máx.; h 4; s 1; (mm) mín.; s 2; (pol.); (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20; 80; 22; 10; 55; M 10; 11; 21; 40; 0,337; 0,063; 21,3; 24; 3/4\"; 25; 90; 28; 65; 26; 50; 12; 0,418; 0,116; 26,9; 30; 27,6; 1\"; 100; 33; 75; 31; 60; 0,62; 0,166; 33,7; 36; 34,4; 1.1/4\"; 32; 38; 120; 42; M 12; 14; 39; 70; 2,6; 3,5; 0,874; 0,213; 42,4; 46; 43,1; 1.1/2\"; 44,5; 130; 45,5; 17; 1,01; 0,273; 48,3; 54; 49; 2\"; 57; 140; 62; 110; 58,1; 23; 1,12; 0,359; 60,3; 61,1; 2.1/2\"; 76,1; 160; 81; 77,1; 1,35; 0,468; 3\"; 88,9; 190; 94; 150; M 16; 18; 90,3; 128; 3,2; 2,24; 0,73; 4\"; 108; 210; 113; 170; 109,6; 148; 2,59; 0,884; 114,3; 119; 115,9; 5\"; 125; 133; 240; 138; 200; 134,8; 178; 3,1; 1,21; 139,7; 145; 141,6; 6\""
          },
          {
            "label": "Dados 2",
            "value": "159; 265; 164; 225; 161,1; 202; 3,52; 1,34; 168,3; 173; 170,5; 8\"; 219,1; 320; 16; 280; 221,8; 258; 4,98; 10\"; 250; 267; 375; 273; 335; 270,2; 312; 7,67; 2,89; 279; 276,2; 12\"; 300; 323,9; 440; 329; 395; M 20; 327,6; 365; 35; 12,3; 3,56; 14\"; 350; 355,6; 490; 362; 445; 359,7; 415; 15,1; 4,08; 368; 374; 372,2; 16\"; 400; 406,4; 540; 413; 495; 411; 465; 17,7; 4,91; 419; 426; 423,7; 20\"; 500; 508; 645; 517; 600; 513,6; 570; 25,4; 7,39; 24\"; 610; 755; 618; 705; M 24; 616,6; 670; 36,3; 8,6; 28\"; 700; 711; 860; 721; 810; 718,6; 775; 48,1; 32\"; 800; 813; 975; 824; 44; 920; M 27; 821,5; 880; 66,5; 16,8; 36\"; 900; 914; 1075; 926; 48; 1020; 923,5; 980; 81,3; 20,1; 40\"; 1000; 1016; 1175; 1028; 52; 1120; 1027; 1080; 96,4; 21,5; 48\"; 1200; 1220; 1405; 1232; 1340; M 30; 1233; 1295; 158; 32,6"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 6 bar (87 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN2642-PN10-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2642_PN10.html",
    "sourcePages": [
      {
        "title": "Flange Solto norma DIN 2642 Classe PN 10 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2642_PN10.html"
      }
    ],
    "summary": "- Classe de pressão PN 10 (1); Tipos de faceamento:; - Forma F: flange solto (representado pelo tubo rebordeado);; - Forma B: colar plano;; - Forma G: borda para solda de topo.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN 2642",
        "rows": [
          {
            "label": "Dados",
            "value": "- Classe de pressão PN 10 (1); Tipos de faceamento:; - Forma F: flange solto (representado pelo tubo rebordeado);; - Forma B: colar plano;; - Forma G: borda para solda de topo."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Anel"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 6; Nr.; de; Furos; Tipo da Rosca do Para-; fuso; d 2; d 5; h 3; d 4; (mm) máx.; h 4; s 1; (mm) mín.; s 2; (pol.); (4); ISO Série 1; DIN Série 2; 1/2\"; 15; 20; 95; 22; 14; 65; M 12; 21; 10; 45; 0,689; 0,105; 21,3; 24; 3/4\"; 25; 105; 28; 75; 26; 12; 58; 0,806; 0,203; 26,9; 30; 27,6; 1\"; 115; 33; 16; 85; 31; 68; 1,11; 0,276; 33,7; 36; 34,4; 1.1/4\"; 32; 38; 140; 42; 100; M 16; 18; 39; 78; 2,6; 3,5; 1,64; 0,343; 42,4; 46; 43,1; 1.1/2\"; 40; 44,5; 150; 50; 110; 45,5; 88; 17; 1,86; 0,426; 48,3; 54; 49; 2\"; 57; 165; 62; 125; 58,1; 102; 23; 2,2; 0,618; 60,3; 61,1; 2.1/2\"; 76,1; 185; 81; 145; 77,1; 122; 2,62; 0,786; 3\"; 80; 88,9; 200; 94; 160; 90,3; 138; 3,2; 3,32; 1,1; 4\"; 108; 220; 113; 180; 109,6; 158; 3,67; 1,31; 114,3; 119; 115,9; 5\"; 133; 250; 210; 134,8; 188; 4,54; 1,96"
          },
          {
            "label": "Dados 2",
            "value": "139,7; 141,6; 6\"; 159; 285; 164; 240; M 20; 161,1; 212; 5,6; 2,18; 168,3; 173; 170,5; 8\"; 219,1; 340; 225; 295; 221,8; 268; 7,46; 3,1; 10\"; 267; 395; 273; 350; 270,2; 320; 10,3; 4,22; 279; 276,2; 12\"; 300; 323,9; 445; 329; 400; 327,6; 370; 35; 4,85; 14\"; 355,6; 505; 362; 460; 359,7; 430; 18,5; 6,71; 368; 374; 372,2; 16\"; 406,4; 565; 413; 515; M 24; 411; 482; 8,28; 419; 426; 423,7; 20\"; 500; 508; 670; 517; 620; 513,6; 585; 37; 11,5; 24\"; 600; 610; 780; 618; 44; 725; M 27; 616,6; 685; 56,3; 15,6; 28\"; 700; 711; 895; 721; 840; 718,6; 800; 80,4; 23,2; 32\"; 813; 1015; 824; 56; 950; M 30; 821,5; 905; 113,2; 29,2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 bar (145 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN2652-PN6-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2652_PN6.html",
    "sourcePages": [
      {
        "title": "Flange Solto norma DIN 2652 Classe PN 6 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2652_PN6.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2652; - Classe de pressão PN 6 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Anel"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 6; Nr.; de; Furos; Tipo da; Rosca; do; Parafuso; d 2; d 4; d 5; h 3; (pol.); (4); ISO; Série 1; DIN; Série 2; 1/2\"; 15; 20; 80; 22; 10; 55; M 10; 11; 40; 21; 0,337; 0,063; 21,3; 24; 3/4\"; 25; 90; 28; 65; 50; 26; 0,418; 0,116; 26,9; 30; 27,6; 1\"; 100; 33; 12; 75; 60; 31; 0,62; 0,166; 33,7; 36; 34,4; 1.1/4\"; 32; 38; 120; 42; M 12; 14; 70; 39; 0,874; 0,213; 42,4; 46; 43,1; 1.1/2\"; 44,5; 130; 45,5; 1,01; 0,273; 48,3; 54; 49; 2\"; 57; 140; 62; 110; 58,1; 1,12; 0,359; 60,3; 61,1; 2.1/2\"; 76,1; 160; 81; 77,1; 1,35; 0,468; 3\"; 88,9; 190; 94; 150; M 16; 18; 128; 90,3; 2,24; 0,73; 4\"; 108; 210; 113; 170; 148; 109,6; 2,59; 0,884; 114,3; 119; 115,9; 5\"; 125; 133; 240; 138; 200; 178; 134,8; 3,1; 1,21; 139,7; 145; 141,6; 6\"; 159; 265; 164; 225; 202; 161,1; 3,52; 1,34; 168,3; 173"
          },
          {
            "label": "Dados 2",
            "value": "170,5; 8\"; 219,1; 320; 16; 280; 258; 221,8; 4,98; 10\"; 250; 267; 375; 273; 335; 312; 270,2; 7,67; 2,89; 279; 276,2; 12\"; 300; 323,9; 440; 329; 395; M 20; 365; 327,6; 12,3; 3,56; 14\"; 350; 355,6; 490; 362; 445; 415; 359,7; 15,1; 4,08; 368; 374; 372,2; 16\"; 400; 406,4; 540; 413; 495; 465; 411; 17,7; 4,91; 419; 426; 423,7; 20\"; 500; 508; 645; 517; 600; 570; 513,6; 25,4; 7,39"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 6 bar (87 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN2653-PN10-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2653_PN10.html",
    "sourcePages": [
      {
        "title": "Flange Solto norma DIN 2653 Classe PN 10 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2653_PN10.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2653; - Classe de pressão PN 10 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Anel"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 6; Nr.; de; Furos; Tipo da; Rosca; do; Parafuso; d 2; d 4; d 5; h 3; (pol.); (4); ISO; Série 1; DIN; Série 2; 1/2\"; 15; 20; 95; 22; 14; 65; M 12; 45; 21; 10; 0,689; 0,105; 21,3; 24; 3/4\"; 25; 105; 28; 75; 58; 26; 12; 0,806; 0,203; 26,9; 30; 27,6; 1\"; 115; 33; 16; 85; 68; 31; 1,11; 0,276; 33,7; 36; 34,4; 1.1/4\"; 32; 38; 140; 42; 100; M 16; 18; 78; 39; 1,64; 0,343; 42,4; 46; 43,1; 1.1/2\"; 40; 44,5; 150; 50; 110; 88; 45,5; 1,86; 0,426; 48,3; 54; 49; 2\"; 57; 165; 62; 125; 102; 58,1; 2,2; 0,618; 60,3; 61,1; 2.1/2\"; 76,1; 185; 81; 145; 122; 77,1; 2,62; 0,786; 3\"; 80; 88,9; 200; 94; 160; 138; 90,3; 3,32; 1,1; 4\"; 108; 220; 113; 180; 158; 109,6; 3,67; 1,31; 114,3; 119; 115,9; 5\"; 133; 250; 210; 188; 134,8; 4,54; 1,96; 139,7; 141,6; 6\"; 159; 285; 164; 240; M 20; 212; 161,1; 5,6"
          },
          {
            "label": "Dados 2",
            "value": "2,18; 168,3; 173; 170,5; 8\"; 219,1; 340; 225; 295; 268; 221,8; 7,46; 3,1; 10\"; 267; 395; 273; 350; 320; 270,2; 10,3; 4,22; 279; 276,2; 12\"; 300; 323,9; 445; 329; 400; 370; 327,6; 4,85; 14\"; 355,6; 505; 362; 460; 430; 359,7; 18,5; 6,71; 368; 374; 372,2; 16\"; 406,4; 565; 413; 515; M 24; 482; 411; 8,28; 419; 426; 423,7; 20\"; 500; 508; 670; 517; 620; 585; 513,6; 37; 11,5"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 bar (145 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN2655-PN25-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2655_PN25.html",
    "sourcePages": [
      {
        "title": "Flange Solto norma DIN 2655 Classe PN 25 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2655_PN25.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2655; - Classe de pressão PN 25 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Anel"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 6; Nr.; de; Furos; Tipo da; Rosca; do; Parafuso; d 2; d 4; d 5; h 3; (pol.); (4); ISO; Série 1; DIN; Série 2; 1/2\"; 15; 20"
          }
        ]
      },
      {
        "title": "Dimensões de acordo com a norma DIN 2656 classe de pressão PN 40",
        "rows": [
          {
            "label": "Dados",
            "value": "21,3; 3/4\"; 25; 26,9; 1\"; 30; 33,7; 1.1/4\"; 32; 38; 42,4; 1.1/2\"; 40; 44,5; 48,3; 2\"; 50; 57; 60,3; 2.1/2\"; 65; 76,1; 3\"; 80; 88,9; 4\"; 100; 108; 114,3; 5\"; 125; 133; 139,7; 6\"; 150; 159; 168,3; 8\"; 200; 219,1; 360; 225; 26; 310; 12; M 24; 278; 221,8; 24; 11,7; 4,53; 10\"; 250; 267; 425; 273; 370; M 27; 335; 270,2; 17,9; 6,56; 279; 276,2; 12\"; 300; 323,9; 485; 329; 34; 430; 16; 395; 327,6; 28; 24,7; 8,8; 14\"; 350; 355,6; 555; 362; 490; M 30; 33; 450; 359,7; 35,6; 13,2; 368; 374; 372,2; 16\"; 400; 406,4; 620; 413; 42; 550; M 33; 36; 505; 411; 47,5; 16,5; 419; 426; 423,7; 20\"; 500; 508; 730; 517; 660; 615; 513,6; 71,1; 25,3"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 25 bar (362,5 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-solto-DIN2656-PN40-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2656_PN40.html",
    "sourcePages": [
      {
        "title": "Flange Solto norma DIN 2656 Classe PN 40 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_solto_DIN2656_PN40.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F305"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2656; - Classe de pressão PN 40 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Forma F: flange solto;; - Forma B: colar plano."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Anel"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 6; Nr.; de; Furos; Tipo da; Rosca; do; Parafuso; d 2; d 4; d 5; h 3; (pol.); (4); ISO; Série 1; DIN; Série 2; 1/2\"; 15; 20; 95; 22; 16; 65; M 12; 14; 45; 21; 12; 0,773; 0,126; 21,3; 24; 3/4\"; 25; 105; 28; 75; 58; 26; 0,934; 0,236; 26,9; 30; 27,6; 1\"; 115; 33; 18; 85; 68; 31; 1,26; 0,321; 33,7; 36; 34,4; 1.1/4\"; 32; 38; 140; 42; 100; M 16; 78; 39; 1,85; 0,401; 42,4; 46; 43,1; 1.1/2\"; 40; 44,5; 150; 50; 110; 88; 45,5; 2,1; 0,498; 48,3; 54; 49; 2\"; 57; 165; 62; 125; 102; 58,1; 2,75; 0,706; 60,3; 61,1; 2.1/2\"; 76,1; 185; 81; 145; 122; 77,1; 3,11; 0,898; 3\"; 80; 88,9; 200; 94; 160; 138; 90,3; 3,88; 1,23; 4\"; 108; 235; 113; 190; M 20; 162; 109,6; 5,23; 1,8; 114,3; 119; 115,9; 5\"; 133; 270; 220; M 24; 188; 134,8; 7,23; 2,4; 139,7; 141,6; 6\"; 159; 300; 164; 250; 218; 161,1"
          },
          {
            "label": "Dados 2",
            "value": "8,6; 3,02; 168,3; 173; 170,5; 8\"; 219,1; 375; 225; 320; M 27; 285; 221,8; 15,2; 5,54; 10\"; 267; 450; 273; 385; M 30; 345; 270,2; 25,7; 8,83; 279; 276,2; 12\"; 323,9; 515; 329; 410; 327,6; 34; 33,5; 14\"; 350; 355,6; 580; 362; 510; M 33; 465; 359,7; 50,2; 18,9; 368; 374; 372,2; 16\"; 400; 406,4; 660; 413; 585; M 36; 535; 411; 71,2; 28,4; 419; 426; 423,7"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 bar (580 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_150.html"
      },
      {
        "title": "Flange Sobreposto Plano 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_300.html"
      },
      {
        "title": "Flange Sobreposto Plano 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_600.html"
      },
      {
        "title": "Flange Sobreposto Plano 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_900.html"
      },
      {
        "title": "Flange Sobreposto Plano 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_1500.html"
      },
      {
        "title": "Flange Sobreposto Plano 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 22,4; 88,9; 34,9; 60,3; 15,9; 0,5; 3/4\"; 12,7; 27,7; 98,4; 42,9; 69,8; 0,9; 1\"; 14,3; 34,5; 108,0; 50,8; 79,4; 1.1/4\"; 43,2; 117,0; 63,5; 1,4; 1.1/2\"; 17,5; 49,5; 127,0; 73,0; 2\"; 19,0; 62,0; 152,0; 92,1; 121,0; 2,3; 2.1/2\"; 22,2; 74,7; 178,0; 104,8; 140,0; 3,2; 3\"; 23,8; 90,7; 190,0; 3,6; 3.1/2\"; 103,0; 216,0; 5,0; 4\"; 116,0; 229,0; 157,0; 5,9; 5\"; 144,0; 254,0; 186,0; 22,0; 6,8; 6\"; 25,4; 171,0; 279,0; 241,0; 8,6; 8\"; 28,6; 221,0; 343,0; 270,0; 298,0; 13,6; 10\"; 12; 30,2; 276,0; 406,0; 324,0; 362,0; 19,5; 12\"; 31,8; 327,0; 483,0; 381,0; 432,0; 29,0; 14\"; 359,0; 533,0; 413,0; 476,0; 41,0; 16\"; 16; 36,5; 410,0; 597,0; 470,0; 540,0; 44,5; 18\"; 39,7; 462,0; 635,0; 578,0; 59,0; 20\"; 20; 513,0; 693,0; 584,0; 75,0; 22\"; 46,0; 564,4; 749,3; 641,3; 692,1; 71,0; 24\"; 47,6; 616,0; 813,0"
          },
          {
            "label": "Dados 2",
            "value": "692,0; 749,0; 99,8; 26\"; (2); 24; 666,75; 869,9; 742,9; 806,4; 113,0; 28\"; 28; 52,4; 717,55; 927,1; 793,7; 863,6; 129,0; 30\"; 54,0; 768,35; 984,2; 857,2; 914,4; 143,0; 32\"; 57,1; 819,15; 1060,4; 908,0; 977,9; 41,3; 179,0; 34\"; 32; 58,7; 869,95; 1111,2; 958,8; 1028,7; 36\"; 920,75; 1168,4; 1022,3; 1085,8; 218,0; 42\"; 36; 66,7; 1073,15; 1346,2; 1193,8; 1257,3; 308,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 1.1/4\"; 43,2; 133,0; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 49,5; 156,0; 73,0; 114,0; 22,2; 2,7; 2\"; 62,0; 165,0; 92,1; 127,0; 3,2; 2.1/2\"; 25,4; 74,7; 190,0; 104,8; 149,0; 4,5; 3\"; 28,6; 90,7; 210,0; 168,0; 5,9; 3.1/2\"; 30,2; 103,0; 229,0; 140,0; 184,0; 7,7; 4\"; 31,8; 116,0; 254,0; 157,0; 200,0; 10,0; 5\"; 144,0; 279,0; 186,0; 235,0; 12,7; 6\"; 12; 38,5; 171,0; 318,0; 216,0; 270,0; 17,7; 8\"; 41,3; 221,0; 381,0; 330,0; 26,3; 10\"; 16; 47,6; 276,0; 444,0; 324,0; 387,0; 36,7; 12\"; 327,0; 521,0; 451,0; 52,2; 14\"; 20; 54,0; 359,0; 584,0; 413,0; 514,0; 74,8; 16\"; 57,2; 410,0; 648,0; 470,0; 572,0; 86,2; 18\"; 24; 60,3; 462,0; 711,0; 533,0; 629,0; 113,0; 20\"; 513,0; 775,0; 686,0; 143,0"
          },
          {
            "label": "Dados 2",
            "value": "22\"; 66,8; 564,4; 838,2; 641,3; 742,9; 179,0; 24\"; 69,8; 616,0; 914,0; 692,0; 813,0; 215,0; 26\"; (2); 28; 79,4; 666,75; 971,5; 749,3; 876,3; 44,4; 259,0; 28\"; 85,7; 717,55; 1035,0; 800,1; 939,8; 30\"; 768,35; 1092,2; 857,2; 996,9; 368,0; 32\"; 819,15; 1149,3; 914,4; 1054,1; 404,0; 34\"; 101,6; 869,95; 1206,5; 965,2; 1104,9; 488,0; 36\"; 32; 920,75; 1270,0; 1022,3; 1168,4; 545,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 1,8; 1.1/4\"; 20,6; 43,2; 133,0; 63,5; 98,4; 2,3; 1.1/2\"; 22,2; 49,5; 156,0; 73,0; 114,0; 3,1; 2\"; 25,4; 62,0; 165,0; 92,1; 127,0; 4,1; 2.1/2\"; 28,6; 74,7; 190,0; 104,8; 149,0; 5,9; 3\"; 31,8; 90,7; 210,0; 168,0; 7,3; 3.1/2\"; 103,0; 229,0; 140,0; 184,0; 9,5; 4\"; 38,1; 116,0; 273,0; 157,0; 216,0; 16,8; 5\"; 44,4; 144,0; 330,0; 186,0; 267,0; 6\"; 12; 47,6; 171,0; 356,0; 292,0; 36,3; 8\"; 55,6; 221,0; 419,0; 270,0; 349,0; 52,2; 10\"; 16; 276,0; 508,0; 324,0; 432,0; 77,1; 12\"; 20; 327,0; 559,0; 381,0; 489,0; 14\"; 69,8; 359,0; 603,0; 413,0; 527,0; 104,0; 16\"; 76,2; 410,0; 686,0; 470,0; 41,3; 150,0; 18\"; 462,0; 743,0; 533,0; 654,0; 181,0; 20\"; 24; 513,0; 813,0; 584,0; 724,0; 231,0"
          },
          {
            "label": "Dados 2",
            "value": "22\"; 564,4; 870,0; 641,3; 778,0; 281,0; 24\"; 102,0; 616,0; 940,0; 692,0; 838,0; 331,0; 26\"; (2); 28; 107,9; 666,75; 1016,0; 749,3; 914,4; 431,0; 28\"; 111,1; 717,55; 1073,1; 800,1; 965,2; 54,0; 488,0; 30\"; 114,3; 768,35; 1130,3; 857,2; 1022,3; 32\"; 117,5; 819,15; 1193,8; 1079,5; 60,3; 624,0; 34\"; 120,6; 869,95; 1244,6; 681,0; 36\"; 123,8; 920,75; 1314,4; 726,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,3; 121; 34,9; 82,5; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 2,3; 1\"; 28,6; 35,0; 149; 50,8; 101,6; 3,6; 1.1/4\"; 43,7; 159; 63,5; 111,1; 4,1; 1.1/2\"; 31,8; 50,3; 178; 73,0; 123,8; 5,4; 2\"; 38,1; 62,0; 216; 92,1; 165,1; 11,3; 2.1/2\"; 41,3; 74,7; 244; 104,8; 190,0; 16,3; 3\"; 90,7; 241; 127,0; 11,8; 4\"; 44,4; 116,0; 292; 157,0; 235,0; 24,0; 5\"; 144,0; 349; 186,0; 279,0; 37,6; 6\"; 12; 55,6; 171,0; 381; 216,0; 318,0; 49,9; 8\"; 221,0; 470; 270,0; 394,0; 77,1; 10\"; 16; 69,8; 276,0; 546; 324,0; 470,0; 111,0; 12\"; 20; 79,4; 327,0; 610; 381,0; 533,0; 147,0; 14\"; 85,7; 359,0; 641; 413,0; 559,0; 181,0; 16\"; 410,0; 705; 616,0; 193,0; 18\"; 102,0; 462,0; 787; 686,0; 272,0; 20\"; 108,0; 513,0; 857; 584,0; 749,0; 54,0; 331,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 635,0; 26\"; (2); 28; 139,7"
          },
          {
            "label": "Dados 2",
            "value": "666,75; 1085,8; 742,9; 952,5; 28\"; 142,9; 717,55; 1168,4; 793,7; 1022,3; 817,0; 30\"; 149,2; 768,35; 1231,9; 857,2; 942,0; 32\"; 158,7; 819,15; 1314,4; 908,0; 1155,7; 1135,0; 34\"; 869,95; 1397,0; 958,8; 1225,5; 1339,0; 36\"; 171,4; 920,75; 1460,5; 1289,0; 1521,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,4; 121; 34,9; 60,3; 82,6; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 69,8; 88,9; 2,3; 1\"; 28,6; 34,5; 149; 50,8; 73,0; 102,0; 3,6; 1.1/4\"; 43,2; 159; 63,5; 111,0; 4,1; 1.1/2\"; 31,8; 49,5; 178; 124,0; 5,4; 2\"; 38,1; 62,0; 216; 92,1; 165,0; 11,3; 2.1/2\"; 41,3; 74,7; 244; 104,8; 105,0; 190,0; 16,3; 3\"; 47,6; 90,4; 267; 127,0; 117,0; 203,0; 21,8; 4\"; 54,0; 115,8; 311; 157,0; 241,0; 33,1; 5\"; 143,8; 375; 186,0; 156,0; 292,0; 59,0; 6\"; 12; 170,7; 394; 216,0; 171,0; 318,0; 74,8; 8\"; 221,5; 483; 270,0; 213,0; 394,0; 118,0; 10\"; 108,0; 276,3; 584; 324,0; 254,0; 483,0; 197,0; 12\"; 16; 327,1; 673; 381,0; 283,0; 572,0; 263,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,20; 22,35; 133,40; 35,05; 88,90; 22,40; 3/4\"; 31,75; 27,69; 139,70; 42,93; 95,30; 1\"; 35,10; 34,54; 158,80; 50,80; 108,00; 25,40; 12; 1.1/4\"; 38,10; 43,18; 184,20; 63,50; 130,30; 28,70; 17; 1.1/2\"; 44,50; 49,53; 203,20; 73,15; 146,10; 24; 2\"; 61,98; 235,00; 92,20; 171,50; 28,40; 37; 2.1/2\"; 57,15; 74,68; 266,70; 104,90; 196,90; 53; 3\"; 66,55; 90,68; 304,80; 127,00; 228,60; 80; 4\"; 76,20; 116,08; 355,60; 157,23; 273,10; 41,10; 112; 5\"; 91,90; 143,76; 419,10; 185,67; 323,90; 47,80; 204; 6\"; 170,69; 482,60; 215,90; 368,30; 53,80; 314; 8\"; 221,49; 552,50; 270,00; 438,20; 471; 10\"; 165,10; 276,35; 673,10; 323,85; 539,80; 897; 12\"; 327,15; 762,00; 381,00; 619,30; 1262"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-150-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_150.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 150 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_150.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 11.1; 22,4; 88,9; 34,9; 60,3; 15,9; 0,5; 3/4\"; 12,7; 27,7; 98,4; 42,9; 69,8; 0,9; 1\"; 14,3; 34,5; 108,0; 50,8; 79,4; 1.1/4\"; 43,2; 117,0; 63,5; 1,4; 1.1/2\"; 17,5; 49,5; 127,0; 73,0; 2\"; 19,0; 62,0; 152,0; 92,1; 121,0; 2,3; 2.1/2\"; 22,2; 74,7; 178,0; 104,8; 140,0; 3,2; 3\"; 23,8; 90,7; 190,0; 3,6; 3.1/2\"; 103,0; 216,0; 5,0; 4\"; 116,0; 229,0; 157,0; 5,9; 5\"; 144,0; 254,0; 186,0; 22,0; 6,8; 6\"; 25,4; 171,0; 279,0; 241,0; 8,6; 8\"; 28,6; 221,0; 343,0; 270,0; 298,0; 13,6; 10\"; 12; 30,2; 276,0; 406,0; 324,0; 362,0; 19,5; 12\"; 31,8; 327,0; 483,0; 381,0; 432,0; 29,0; 14\"; 359,0; 533,0; 413,0; 476,0; 41,0; 16\"; 16; 36,5; 410,0; 597,0; 470,0; 540,0; 44,5; 18\"; 39,7; 462,0; 635,0; 578,0; 59,0; 20\"; 20; 513,0; 693,0; 584,0; 75,0; 22\"; 46,0; 564,4; 749,3; 641,3; 692,1; 71,0; 24\"; 47,6; 616,0; 813,0"
          },
          {
            "label": "Dados 2",
            "value": "692,0; 749,0; 99,8; 26\"; (2); 24; 666,75; 869,9; 742,9; 806,4; 113,0; 28\"; 28; 52,4; 717,55; 927,1; 793,7; 863,6; 129,0; 30\"; 54,0; 768,35; 984,2; 857,2; 914,4; 143,0; 32\"; 57,1; 819,15; 1060,4; 908,0; 977,9; 41,3; 179,0; 34\"; 32; 58,7; 869,95; 1111,2; 958,8; 1028,7; 36\"; 920,75; 1168,4; 1022,3; 1085,8; 218,0; 42\"; 36; 66,7; 1073,15; 1346,2; 1193,8; 1257,3; 308,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 42\" as dimensões são baseadas na; Norma ANSI; B 16.1;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_300.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 1.1/4\"; 43,2; 133,0; 63,5; 98,4; 1,8; 1.1/2\"; 20,6; 49,5; 156,0; 73,0; 114,0; 22,2; 2,7; 2\"; 62,0; 165,0; 92,1; 127,0; 3,2; 2.1/2\"; 25,4; 74,7; 190,0; 104,8; 149,0; 4,5; 3\"; 28,6; 90,7; 210,0; 168,0; 5,9; 3.1/2\"; 30,2; 103,0; 229,0; 140,0; 184,0; 7,7; 4\"; 31,8; 116,0; 254,0; 157,0; 200,0; 10,0; 5\"; 144,0; 279,0; 186,0; 235,0; 12,7; 6\"; 12; 38,5; 171,0; 318,0; 216,0; 270,0; 17,7; 8\"; 41,3; 221,0; 381,0; 330,0; 26,3; 10\"; 16; 47,6; 276,0; 444,0; 324,0; 387,0; 36,7; 12\"; 327,0; 521,0; 451,0; 52,2; 14\"; 20; 54,0; 359,0; 584,0; 413,0; 514,0; 74,8; 16\"; 57,2; 410,0; 648,0; 470,0; 572,0; 86,2; 18\"; 24; 60,3; 462,0; 711,0; 533,0; 629,0; 113,0; 20\"; 513,0; 775,0; 686,0; 143,0"
          },
          {
            "label": "Dados 2",
            "value": "22\"; 66,8; 564,4; 838,2; 641,3; 742,9; 179,0; 24\"; 69,8; 616,0; 914,0; 692,0; 813,0; 215,0; 26\"; (2); 28; 79,4; 666,75; 971,5; 749,3; 876,3; 44,4; 259,0; 28\"; 85,7; 717,55; 1035,0; 800,1; 939,8; 30\"; 768,35; 1092,2; 857,2; 996,9; 368,0; 32\"; 819,15; 1149,3; 914,4; 1054,1; 404,0; 34\"; 101,6; 869,95; 1206,5; 965,2; 1104,9; 488,0; 36\"; 32; 920,75; 1270,0; 1022,3; 1168,4; 545,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 1,6mm está incluso na espessura; ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_600.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 14,3; 22,4; 95,2; 34,9; 66,7; 15,9; 0,9; 3/4\"; 27,7; 117,0; 42,9; 82,6; 19,0; 1,4; 1\"; 17,5; 34,5; 124,0; 50,8; 88,9; 1,8; 1.1/4\"; 20,6; 43,2; 133,0; 63,5; 98,4; 2,3; 1.1/2\"; 22,2; 49,5; 156,0; 73,0; 114,0; 3,1; 2\"; 25,4; 62,0; 165,0; 92,1; 127,0; 4,1; 2.1/2\"; 28,6; 74,7; 190,0; 104,8; 149,0; 5,9; 3\"; 31,8; 90,7; 210,0; 168,0; 7,3; 3.1/2\"; 103,0; 229,0; 140,0; 184,0; 9,5; 4\"; 38,1; 116,0; 273,0; 157,0; 216,0; 16,8; 5\"; 44,4; 144,0; 330,0; 186,0; 267,0; 6\"; 12; 47,6; 171,0; 356,0; 292,0; 36,3; 8\"; 55,6; 221,0; 419,0; 270,0; 349,0; 52,2; 10\"; 16; 276,0; 508,0; 324,0; 432,0; 77,1; 12\"; 20; 327,0; 559,0; 381,0; 489,0; 14\"; 69,8; 359,0; 603,0; 413,0; 527,0; 104,0; 16\"; 76,2; 410,0; 686,0; 470,0; 41,3; 150,0; 18\"; 462,0; 743,0; 533,0; 654,0; 181,0; 20\"; 24; 513,0; 813,0; 584,0; 724,0; 231,0"
          },
          {
            "label": "Dados 2",
            "value": "22\"; 564,4; 870,0; 641,3; 778,0; 281,0; 24\"; 102,0; 616,0; 940,0; 692,0; 838,0; 331,0; 26\"; (2); 28; 107,9; 666,75; 1016,0; 749,3; 914,4; 431,0; 28\"; 111,1; 717,55; 1073,1; 800,1; 965,2; 54,0; 488,0; 30\"; 114,3; 768,35; 1130,3; 857,2; 1022,3; 32\"; 117,5; 819,15; 1193,8; 1079,5; 60,3; 624,0; 34\"; 120,6; 869,95; 1244,6; 681,0; 36\"; 123,8; 920,75; 1314,4; 726,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_900.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,3; 121; 34,9; 82,5; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 88,9; 2,3; 1\"; 28,6; 35,0; 149; 50,8; 101,6; 3,6; 1.1/4\"; 43,7; 159; 63,5; 111,1; 4,1; 1.1/2\"; 31,8; 50,3; 178; 73,0; 123,8; 5,4; 2\"; 38,1; 62,0; 216; 92,1; 165,1; 11,3; 2.1/2\"; 41,3; 74,7; 244; 104,8; 190,0; 16,3; 3\"; 90,7; 241; 127,0; 11,8; 4\"; 44,4; 116,0; 292; 157,0; 235,0; 24,0; 5\"; 144,0; 349; 186,0; 279,0; 37,6; 6\"; 12; 55,6; 171,0; 381; 216,0; 318,0; 49,9; 8\"; 221,0; 470; 270,0; 394,0; 77,1; 10\"; 16; 69,8; 276,0; 546; 324,0; 470,0; 111,0; 12\"; 20; 79,4; 327,0; 610; 381,0; 533,0; 147,0; 14\"; 85,7; 359,0; 641; 413,0; 559,0; 181,0; 16\"; 410,0; 705; 616,0; 193,0; 18\"; 102,0; 462,0; 787; 686,0; 272,0; 20\"; 108,0; 513,0; 857; 584,0; 749,0; 54,0; 331,0; 24\"; 140,0; 1041; 692,0; 902,0; 66,7; 635,0; 26\"; (2); 28; 139,7"
          },
          {
            "label": "Dados 2",
            "value": "666,75; 1085,8; 742,9; 952,5; 28\"; 142,9; 717,55; 1168,4; 793,7; 1022,3; 817,0; 30\"; 149,2; 768,35; 1231,9; 857,2; 942,0; 32\"; 158,7; 819,15; 1314,4; 908,0; 1155,7; 1135,0; 34\"; 869,95; 1397,0; 958,8; 1225,5; 1339,0; 36\"; 171,4; 920,75; 1460,5; 1289,0; 1521,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Para os diâmetros de 26\"; a 36\" as dimensões são baseadas na; Norma MSS; SP 44;; 3.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 4.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 5.; de Teste de Pressão Hidrostática;; 6.; de Pressão e Temperatura de Serviço;; 7.; de Dimensões dos Prisioneiros;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_1500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 22,2; 22,4; 121; 34,9; 60,3; 82,6; 1,8; 3/4\"; 25,4; 27,7; 130; 42,9; 69,8; 88,9; 2,3; 1\"; 28,6; 34,5; 149; 50,8; 73,0; 102,0; 3,6; 1.1/4\"; 43,2; 159; 63,5; 111,0; 4,1; 1.1/2\"; 31,8; 49,5; 178; 124,0; 5,4; 2\"; 38,1; 62,0; 216; 92,1; 165,0; 11,3; 2.1/2\"; 41,3; 74,7; 244; 104,8; 105,0; 190,0; 16,3; 3\"; 47,6; 90,4; 267; 127,0; 117,0; 203,0; 21,8; 4\"; 54,0; 115,8; 311; 157,0; 241,0; 33,1; 5\"; 143,8; 375; 186,0; 156,0; 292,0; 59,0; 6\"; 12; 170,7; 394; 216,0; 171,0; 318,0; 74,8; 8\"; 221,5; 483; 270,0; 213,0; 394,0; 118,0; 10\"; 108,0; 276,3; 584; 324,0; 254,0; 483,0; 197,0; 12\"; 16; 327,1; 673; 381,0; 283,0; 572,0; 263,0"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_ANSI_2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões baseadas na Norma ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1/2\"; 30,20; 22,35; 133,40; 35,05; 88,90; 22,40; 3/4\"; 31,75; 27,69; 139,70; 42,93; 95,30; 1\"; 35,10; 34,54; 158,80; 50,80; 108,00; 25,40; 12; 1.1/4\"; 38,10; 43,18; 184,20; 63,50; 130,30; 28,70; 17; 1.1/2\"; 44,50; 49,53; 203,20; 73,15; 146,10; 24; 2\"; 61,98; 235,00; 92,20; 171,50; 28,40; 37; 2.1/2\"; 57,15; 74,68; 266,70; 104,90; 196,90; 53; 3\"; 66,55; 90,68; 304,80; 127,00; 228,60; 80; 4\"; 76,20; 116,08; 355,60; 157,23; 273,10; 41,10; 112; 5\"; 91,90; 143,76; 419,10; 185,67; 323,90; 47,80; 204; 6\"; 170,69; 482,60; 215,90; 368,30; 53,80; 314; 8\"; 221,49; 552,50; 270,00; 438,20; 471; 10\"; 165,10; 276,35; 673,10; 323,85; 539,80; 897; 12\"; 327,15; 762,00; 381,00; 619,30; 1262"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 6,35mm não está; incluso na espessura ( B ) do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-AWWA-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 1 Classe B 86 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_86psi.html"
      },
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 2 Classe D 175 - 150 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_175-150psi.html"
      },
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 5 Classe E 275 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_275psi.html"
      },
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 6 Classe F 300 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_300psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "4"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 1 - Classe B (86 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 15,88; 19,05; 2,99; 254,00; 143,76; 215,90; 22,23; 3,36; 279,40; 170,69; 241,30; 17,48; 4,11; 342,90; 221,49; 298,45; 5,60; 10; 12; 406,40; 276,35; 361,95; 25,40; 7,09; 482,60; 327,15; 431,80; 10,45; 14; 533,40; 360,43; 476,25; 28,58; 12,69; 16; 596,90; 411,23; 539,75; 15,30; 18; 635,00; 462,03; 577,85; 31,75; 20; 698,50; 512,83; 18,29; 22; 749,30; 563,63; 692,15; 34,93; 21,27; 24; 812,80; 614,43; 25,01; 26; 869,95; 665,23; 806,45; 20,62; 29,86; 28; 927,10; 716,03; 863,60; 35,08; 30; 984,25; 766,83; 914,40; 39,19; 32; 1060,45; 817,63; 977,90; 23,75; 41,28; 38,10; 49,27; 34; 1111,25; 868,43; 1028,70; 51,13; 36; 1168,40; 919,23; 1085,85; 60,09; 38; 1238,25; 970,03; 1149,35; 69,05; 40; 1289,05; 1020,83; 1200,15; 72,04; 42; 1346,20; 1071,63; 1257,30; 87,34; 44; 1403,35"
          },
          {
            "label": "Dados 2",
            "value": "1122,43; 1314,45; 92,94; 46; 1454,15; 1173,23; 1365,25; 97,04; 48; 1511,30; 1224,03; 1422,40; 114,21; 50; 1568,45; 1274,83; 1479,55; 47,63; 44,45; 118,32; 52; 1625,60; 1325,63; 1536,70; 126,53; 54; 1682,75; 1376,43; 1593,85; 148,18; 60; 1854,20; 1528,83; 1758,95; 189,61; 66; 2032,00; 1681,23; 1930,40; 247,83; 72; 2197,10; 1833,63; 2095,50; 299,34; 78; 64; 2362,20; 1986,03; 2260,60; 50,80; 53,98; 373,24; 84; 2533,65; 2138,43; 2425,70; 427,36; 90; 68; 2705,10; 2290,83; 2590,80; 57,15; 60,32; 524,03; 96; 2876,55; 2443,23; 2755,90; 591,96; 102; 3048,00; 2595,63; 2908,30; 63,50; 66,68; 713,64; 108; 3219,45; 2748,03; 3067,05; 797,24; 114; 76; 3390,90; 2900,43; 69,85; 73,02; 942,44; 120; 3562,35; 3052,83; 3371,85; 1043,21; 126; 80; 3733,80; 3205,23; 3536,95; 76,20; 79,38; 1213,78; 132; 3905,25; 3357,63; 3702,05"
          },
          {
            "label": "Dados 3",
            "value": "1333,22; 138 (8); 4076,70; 3510,03; 3860,80; 82,55; 85,62; 1530,66; 144; 4248,15; 3662,43; 4019,55; 1670,26"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 86 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 144\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Os valores dimensionais para flange de diâmetro nominal de 138\" constam apenas na norma AWWA C207-94;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 15,88; 19,05; 2,99; 254,00; 143,76; 215,90; 22,23; 3,36; 279,40; 170,69; 241,30; 17,48; 4,11; 342,90; 221,49; 298,45; 5,60; 10; 12; 406,40; 276,35; 361,95; 25,40; 7,09; 482,60; 327,15; 431,80; 20,62; 12,32; 14; 533,40; 360,43; 476,25; 23,82; 28,58; 17,54; 16; 596,90; 411,23; 539,75; 22,39; 18; 635,00; 462,03; 577,85; 26,97; 31,75; 23,89; 20; 698,50; 512,83; 29,49; 22; 749,30; 563,63; 692,15; 30,18; 34,93; 33,59; 24; 812,80; 614,43; 41,80; 26; 869,95; 665,23; 806,45; 33,32; 48,15; 28; 927,10; 716,03; 863,60; 52,63; 30; 984,25; 766,83; 914,40; 61,21; 32; 1060,45; 817,63; 977,90; 38,10; 41,28; 78,75; 34; 1111,25; 868,43; 1028,70; 82,11; 36; 1168,40; 919,23; 1085,85; 97,42; 38; 1238,25; 970,03; 1149,35; 112,35; 40; 1289,05; 1020,83; 1200,15; 116,82; 42; 1346,20; 1071,63"
          },
          {
            "label": "Dados 2",
            "value": "1257,30; 44,45; 135,86; 44; 1403,35; 1122,43; 1314,45; 144,44; 46; 1454,15; 1173,23; 1365,25; 150,79; 48; 1511,30; 1224,03; 1422,40; 47,63; 171,69; 50; 1568,45; 1274,83; 1479,55; 50,80; 189,23; 52; 1625,60; 1325,63; 1536,70; 202,30; 54; 1682,75; 1376,43; 1593,85; 53,98; 229,17; 60; 1854,20; 1528,83; 1758,95; 57,15; 284,78; 66; 2032,00; 1681,23; 1930,40; 63,50; 381,08; 72; 2197,10; 1833,63; 2095,50; 66,68; 449,01; 78; 64; 2362,20; 1986,03; 2260,60; 69,85; 84; 2533,65; 2138,43; 2425,70; 73,03; 614,36; 90; 68; 2705,10; 2290,83; 2590,80; 76,20; 60,32; 698,71; 96; 2876,55; 2443,23; 2755,90; 82,55; 855,10; 102; 3048,00; 2595,63; 2908,30; 66,67; 927,51; 108; 3219,45; 2748,03; 3067,05; 85,73; 1076,43; 114; 76; 3390,90; 2900,43; 88,90; 73,02; 1199,60; 120; 3562,35; 3052,83; 3371,85; 1327,99; 126; 80; 3733,80; 3205,23"
          },
          {
            "label": "Dados 3",
            "value": "3536,95; 95,25; 79,37; 1517,23; 132; 3905,25; 3357,63; 3702,05; 98,43; 1722,14; 138 (8); 4076,70; 3510,03; 3860,80; 101,60; 85,72; 1883,75; 144; 4248,15; 3662,43; 4019,55; 104,78; 2120,01"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica para flanges de 4\" a 12\" é de 175 PSI e para flanges de 14\" a 144\" é de 150 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 144\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Os valores dimensionais para flange de diâmetro nominal de 138\" constam apenas na norma AWWA C207-94;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 5 - Classe E (275 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 28,58; 19,05; 15,88; 5,23; 254,00; 143,76; 215,90; 30,18; 22,23; 5,97; 279,40; 170,69; 241,30; 33,35; 7,46; 342,90; 221,49; 298,45; 38,10; 12,32; 10; 12; 406,40; 276,35; 361,95; 39,70; 25,40; 16,42; 482,60; 327,15; 431,80; 44,45; 26,50; 14; 533,40; 360,43; 476,25; 47,63; 35,08; 16; 596,90; 411,23; 539,75; 50,80; 44,79; 18; 635,00; 462,03; 577,85; 53,98; 31,75; 47,40; 20; 698,50; 512,83; 60,33; 62,70; 22; 749,30; 563,63; 692,15; 63,50; 34,93; 70,54; 24; 812,80; 614,43; 66,68; 87,34; 26; 869,95; 665,23; 806,45; 69,85; 100,78; 28; 927,10; 716,03; 863,60; 110,85; 30; 984,25; 766,83; 914,40; 73,03; 128,40; 32; 1060,45; 817,63; 977,90; 76,20; 41,28; 157,51; 34; 1111,25; 868,43; 1028,70; 164,60; 36; 1168,40; 919,23; 1085,85; 79,38; 187,37; 38; 1238,25; 970,03; 1149,35"
          },
          {
            "label": "Dados 2",
            "value": "216,48; 40; 1289,05; 1020,83; 1200,15; 82,55; 233,65; 42; 1346,20; 1071,63; 1257,30; 85,73; 261,64; 44; 1403,35; 1122,43; 1314,45; 278,81; 46; 1454,15; 1173,23; 1365,25; 87,33; 296,35; 48; 1511,30; 1224,03; 1422,40; 88,90; 320,24; 50; 1568,45; 1274,83; 1479,55; 331,07; 52; 1625,60; 1325,63; 1536,70; 92,08; 366,52; 54; 1682,75; 1376,43; 1593,85; 95,25; 404,22; 60; 1854,20; 1528,83; 1758,95; 98,43; 490,07; 66; 2032,00; 1681,23; 1930,40; 107,95; 647,95; 72; 2197,10; 1833,63; 2095,50; 111,13; 748,35; 78; 64; 2362,20; 1986,03; 2260,60; 120,65; 886,08; 84; 2533,65; 2138,43; 2425,70; 1014,84; 90; 68; 2705,10; 2290,83; 2590,80; 130,18; 61,93; 57,15; 1193,25; 96; 2876,55; 2443,23; 2755,90; 1348,52; 102; 3048,00; 2595,63; 2908,30; 139,70; 68,28; 1569,85; 108; 3219,45; 2748,03; 3067,05; 1754,24; 114; 76; 3390,90"
          },
          {
            "label": "Dados 3",
            "value": "2900,43; 149,23; 74,63; 2013,64; 120; 3562,35; 3052,83; 3371,85; 2229,00; 126; 80; 3733,80; 3205,23; 3536,95; 158,75; 80,98; 2528,71; 132; 3905,25; 3357,63; 3702,05; 2777,66; 138 (8); 4076,70; 3510,03; 3860,80; 171,45; 3178,90; 144; 4248,15; 3662,43; 4019,55; 3469,28"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 275 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 144\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Os valores dimensionais para flange de diâmetro nominal de 138\" constam apenas na norma AWWA C207-94;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 6 - Classe F (300 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 254,00; 116,08; 200,15; 28,70; 22,23; 19,05; 6,72; 279,40; 143,76; 234,95; 30,73; 8,21; 12; 317,50; 170,94; 269,75; 33,27; 11,20; 381,00; 221,74; 330,20; 25,40; 14,93; 10; 16; 444,50; 276,35; 387,35; 38,10; 28,58; 20,90; 520,70; 327,15; 450,85; 41,40; 31,75; 30,98; 14; 20; 584,20; 360,43; 514,35; 49,28; 47,77; 647,70; 411,23; 571,50; 54,36; 34,93; 62,33; 18; 24; 711,20; 462,03; 628,65; 57,15; 76,14; 774,70; 512,83; 685,80; 59,18; 92,19; 22; 838,20; 563,63; 742,95; 63,50; 114,59; 914,40; 614,43; 812,80; 68,33; 41,28; 144,82; 26; 28; 971,55; 666,75; 876,30; 76,20; 47,63; 44,45; 168,33; 1035,05; 717,55; 939,80; 79,50; 198,56; 30; 1092,20; 768,35; 996,95; 80,01; 218,72; 32; 1149,35; 819,15; 1054,10; 82,55; 245,22; 34; 1206,50; 869,95; 1104,90; 85,85; 276,57; 36; 1270,00; 920,75; 1168,40; 87,88"
          },
          {
            "label": "Dados 2",
            "value": "53,98; 50,80; 299,34; 38; 1327,15; 1219,20; 88,90; 326,21; 40; 1377,95; 1022,35; 1276,35; 92,20; 349,73; 42; 1447,80; 1073,15; 1339,85; 96,77; 411,69; 44; 1504,95; 1123,95; 1397,00; 101,60; 461,70; 46; 1562,10; 1174,75; 1454,15; 104,90; 501,64; 48; 1651,00; 1225,55; 1543,05; 114,30; 641,23"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 300 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 250lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 48\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-AWWA-86psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_86psi.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 1 Classe B 86 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_86psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 1 - Classe B (86 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 15,88; 19,05; 2,99; 254,00; 143,76; 215,90; 22,23; 3,36; 279,40; 170,69; 241,30; 17,48; 4,11; 342,90; 221,49; 298,45; 5,60; 10; 12; 406,40; 276,35; 361,95; 25,40; 7,09; 482,60; 327,15; 431,80; 10,45; 14; 533,40; 360,43; 476,25; 28,58; 12,69; 16; 596,90; 411,23; 539,75; 15,30; 18; 635,00; 462,03; 577,85; 31,75; 20; 698,50; 512,83; 18,29; 22; 749,30; 563,63; 692,15; 34,93; 21,27; 24; 812,80; 614,43; 25,01; 26; 869,95; 665,23; 806,45; 20,62; 29,86; 28; 927,10; 716,03; 863,60; 35,08; 30; 984,25; 766,83; 914,40; 39,19; 32; 1060,45; 817,63; 977,90; 23,75; 41,28; 38,10; 49,27; 34; 1111,25; 868,43; 1028,70; 51,13; 36; 1168,40; 919,23; 1085,85; 60,09; 38; 1238,25; 970,03; 1149,35; 69,05; 40; 1289,05; 1020,83; 1200,15; 72,04; 42; 1346,20; 1071,63; 1257,30; 87,34; 44; 1403,35"
          },
          {
            "label": "Dados 2",
            "value": "1122,43; 1314,45; 92,94; 46; 1454,15; 1173,23; 1365,25; 97,04; 48; 1511,30; 1224,03; 1422,40; 114,21; 50; 1568,45; 1274,83; 1479,55; 47,63; 44,45; 118,32; 52; 1625,60; 1325,63; 1536,70; 126,53; 54; 1682,75; 1376,43; 1593,85; 148,18; 60; 1854,20; 1528,83; 1758,95; 189,61; 66; 2032,00; 1681,23; 1930,40; 247,83; 72; 2197,10; 1833,63; 2095,50; 299,34; 78; 64; 2362,20; 1986,03; 2260,60; 50,80; 53,98; 373,24; 84; 2533,65; 2138,43; 2425,70; 427,36; 90; 68; 2705,10; 2290,83; 2590,80; 57,15; 60,32; 524,03; 96; 2876,55; 2443,23; 2755,90; 591,96; 102; 3048,00; 2595,63; 2908,30; 63,50; 66,68; 713,64; 108; 3219,45; 2748,03; 3067,05; 797,24; 114; 76; 3390,90; 2900,43; 69,85; 73,02; 942,44; 120; 3562,35; 3052,83; 3371,85; 1043,21; 126; 80; 3733,80; 3205,23; 3536,95; 76,20; 79,38; 1213,78; 132; 3905,25; 3357,63; 3702,05"
          },
          {
            "label": "Dados 3",
            "value": "1333,22; 138 (8); 4076,70; 3510,03; 3860,80; 82,55; 85,62; 1530,66; 144; 4248,15; 3662,43; 4019,55; 1670,26"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 86 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 144\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Os valores dimensionais para flange de diâmetro nominal de 138\" constam apenas na norma AWWA C207-94;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-AWWA-175-150psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_175-150psi.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 2 Classe D 175 - 150 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_175-150psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 15,88; 19,05; 2,99; 254,00; 143,76; 215,90; 22,23; 3,36; 279,40; 170,69; 241,30; 17,48; 4,11; 342,90; 221,49; 298,45; 5,60; 10; 12; 406,40; 276,35; 361,95; 25,40; 7,09; 482,60; 327,15; 431,80; 20,62; 12,32; 14; 533,40; 360,43; 476,25; 23,82; 28,58; 17,54; 16; 596,90; 411,23; 539,75; 22,39; 18; 635,00; 462,03; 577,85; 26,97; 31,75; 23,89; 20; 698,50; 512,83; 29,49; 22; 749,30; 563,63; 692,15; 30,18; 34,93; 33,59; 24; 812,80; 614,43; 41,80; 26; 869,95; 665,23; 806,45; 33,32; 48,15; 28; 927,10; 716,03; 863,60; 52,63; 30; 984,25; 766,83; 914,40; 61,21; 32; 1060,45; 817,63; 977,90; 38,10; 41,28; 78,75; 34; 1111,25; 868,43; 1028,70; 82,11; 36; 1168,40; 919,23; 1085,85; 97,42; 38; 1238,25; 970,03; 1149,35; 112,35; 40; 1289,05; 1020,83; 1200,15; 116,82; 42; 1346,20; 1071,63"
          },
          {
            "label": "Dados 2",
            "value": "1257,30; 44,45; 135,86; 44; 1403,35; 1122,43; 1314,45; 144,44; 46; 1454,15; 1173,23; 1365,25; 150,79; 48; 1511,30; 1224,03; 1422,40; 47,63; 171,69; 50; 1568,45; 1274,83; 1479,55; 50,80; 189,23; 52; 1625,60; 1325,63; 1536,70; 202,30; 54; 1682,75; 1376,43; 1593,85; 53,98; 229,17; 60; 1854,20; 1528,83; 1758,95; 57,15; 284,78; 66; 2032,00; 1681,23; 1930,40; 63,50; 381,08; 72; 2197,10; 1833,63; 2095,50; 66,68; 449,01; 78; 64; 2362,20; 1986,03; 2260,60; 69,85; 84; 2533,65; 2138,43; 2425,70; 73,03; 614,36; 90; 68; 2705,10; 2290,83; 2590,80; 76,20; 60,32; 698,71; 96; 2876,55; 2443,23; 2755,90; 82,55; 855,10; 102; 3048,00; 2595,63; 2908,30; 66,67; 927,51; 108; 3219,45; 2748,03; 3067,05; 85,73; 1076,43; 114; 76; 3390,90; 2900,43; 88,90; 73,02; 1199,60; 120; 3562,35; 3052,83; 3371,85; 1327,99; 126; 80; 3733,80; 3205,23"
          },
          {
            "label": "Dados 3",
            "value": "3536,95; 95,25; 79,37; 1517,23; 132; 3905,25; 3357,63; 3702,05; 98,43; 1722,14; 138 (8); 4076,70; 3510,03; 3860,80; 101,60; 85,72; 1883,75; 144; 4248,15; 3662,43; 4019,55; 104,78; 2120,01"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica para flanges de 4\" a 12\" é de 175 PSI e para flanges de 14\" a 144\" é de 150 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 144\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Os valores dimensionais para flange de diâmetro nominal de 138\" constam apenas na norma AWWA C207-94;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-AWWA-275psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_275psi.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 5 Classe E 275 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_275psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 5 - Classe E (275 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 228,60; 116,08; 190,50; 28,58; 19,05; 15,88; 5,23; 254,00; 143,76; 215,90; 30,18; 22,23; 5,97; 279,40; 170,69; 241,30; 33,35; 7,46; 342,90; 221,49; 298,45; 38,10; 12,32; 10; 12; 406,40; 276,35; 361,95; 39,70; 25,40; 16,42; 482,60; 327,15; 431,80; 44,45; 26,50; 14; 533,40; 360,43; 476,25; 47,63; 35,08; 16; 596,90; 411,23; 539,75; 50,80; 44,79; 18; 635,00; 462,03; 577,85; 53,98; 31,75; 47,40; 20; 698,50; 512,83; 60,33; 62,70; 22; 749,30; 563,63; 692,15; 63,50; 34,93; 70,54; 24; 812,80; 614,43; 66,68; 87,34; 26; 869,95; 665,23; 806,45; 69,85; 100,78; 28; 927,10; 716,03; 863,60; 110,85; 30; 984,25; 766,83; 914,40; 73,03; 128,40; 32; 1060,45; 817,63; 977,90; 76,20; 41,28; 157,51; 34; 1111,25; 868,43; 1028,70; 164,60; 36; 1168,40; 919,23; 1085,85; 79,38; 187,37; 38; 1238,25; 970,03; 1149,35"
          },
          {
            "label": "Dados 2",
            "value": "216,48; 40; 1289,05; 1020,83; 1200,15; 82,55; 233,65; 42; 1346,20; 1071,63; 1257,30; 85,73; 261,64; 44; 1403,35; 1122,43; 1314,45; 278,81; 46; 1454,15; 1173,23; 1365,25; 87,33; 296,35; 48; 1511,30; 1224,03; 1422,40; 88,90; 320,24; 50; 1568,45; 1274,83; 1479,55; 331,07; 52; 1625,60; 1325,63; 1536,70; 92,08; 366,52; 54; 1682,75; 1376,43; 1593,85; 95,25; 404,22; 60; 1854,20; 1528,83; 1758,95; 98,43; 490,07; 66; 2032,00; 1681,23; 1930,40; 107,95; 647,95; 72; 2197,10; 1833,63; 2095,50; 111,13; 748,35; 78; 64; 2362,20; 1986,03; 2260,60; 120,65; 886,08; 84; 2533,65; 2138,43; 2425,70; 1014,84; 90; 68; 2705,10; 2290,83; 2590,80; 130,18; 61,93; 57,15; 1193,25; 96; 2876,55; 2443,23; 2755,90; 1348,52; 102; 3048,00; 2595,63; 2908,30; 139,70; 68,28; 1569,85; 108; 3219,45; 2748,03; 3067,05; 1754,24; 114; 76; 3390,90"
          },
          {
            "label": "Dados 3",
            "value": "2900,43; 149,23; 74,63; 2013,64; 120; 3562,35; 3052,83; 3371,85; 2229,00; 126; 80; 3733,80; 3205,23; 3536,95; 158,75; 80,98; 2528,71; 132; 3905,25; 3357,63; 3702,05; 2777,66; 138 (8); 4076,70; 3510,03; 3860,80; 171,45; 3178,90; 144; 4248,15; 3662,43; 4019,55; 3469,28"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 275 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 125lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 144\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Os valores dimensionais para flange de diâmetro nominal de 138\" constam apenas na norma AWWA C207-94;; 9.; Veja Procedimento; para Aperto dos Parafusos;; 10.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 11.; Veja Resistência; à Corrosão dos materiais da conexão;; 12.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-AWWA-300psi-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_300psi.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma AWWA C207-07 Tabela 6 Classe F 300 PSI em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_AWWA_300psi.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma AWWA",
        "rows": [
          {
            "label": "Dados",
            "value": "C207-07 Tabela 6 - Classe F (300 PSI)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 283 Gr. C;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Plano; (FF - Flat Face);; Tipos de acabamento da face de Junção:; - Sobreposto Plano;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); (mm) (7); (mm) (5); Diâmetro do Parafuso; (mm) (6)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); 254,00; 116,08; 200,15; 28,70; 22,23; 19,05; 6,72; 279,40; 143,76; 234,95; 30,73; 8,21; 12; 317,50; 170,94; 269,75; 33,27; 11,20; 381,00; 221,74; 330,20; 25,40; 14,93; 10; 16; 444,50; 276,35; 387,35; 38,10; 28,58; 20,90; 520,70; 327,15; 450,85; 41,40; 31,75; 30,98; 14; 20; 584,20; 360,43; 514,35; 49,28; 47,77; 647,70; 411,23; 571,50; 54,36; 34,93; 62,33; 18; 24; 711,20; 462,03; 628,65; 57,15; 76,14; 774,70; 512,83; 685,80; 59,18; 92,19; 22; 838,20; 563,63; 742,95; 63,50; 114,59; 914,40; 614,43; 812,80; 68,33; 41,28; 144,82; 26; 28; 971,55; 666,75; 876,30; 76,20; 47,63; 44,45; 168,33; 1035,05; 717,55; 939,80; 79,50; 198,56; 30; 1092,20; 768,35; 996,95; 80,01; 218,72; 32; 1149,35; 819,15; 1054,10; 82,55; 245,22; 34; 1206,50; 869,95; 1104,90; 85,85; 276,57; 36; 1270,00; 920,75; 1168,40; 87,88"
          },
          {
            "label": "Dados 2",
            "value": "53,98; 50,80; 299,34; 38; 1327,15; 1219,20; 88,90; 326,21; 40; 1377,95; 1022,35; 1276,35; 92,20; 349,73; 42; 1447,80; 1073,15; 1339,85; 96,77; 411,69; 44; 1504,95; 1123,95; 1397,00; 101,60; 461,70; 46; 1562,10; 1174,75; 1454,15; 104,90; 501,64; 48; 1651,00; 1225,55; 1543,05; 114,30; 641,23"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho à temperatura atmosférica é de 300 PSI;; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 283, Gr. C;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegada);; 4.; Estes flanges tem a mesma medida OD (dimensão A ) e número de furos de parafusos que os flanges norma ANSI B16.1classe 250lbs;; 5.; A medida M descrita nesta tabela está em conformidade com a norma AWWA C207-94, para obter o valor de acordo com a revisão AWWA C207-07 veja a nota 6;; 6.; De acordo com a norma AWWA C207-07, o furo do parafuso (dimensão M ) deve ser 1/8 de polegada ( 3,175 mm ) maior que o diâmetro do parafuso;; 7."
          },
          {
            "label": "Dados 2",
            "value": "Conforme a revisão AWWA C207-07, a dimensão B deve ser especificada pelo cliente sempre que o Diâmetro Nominal do flange for superior a 24\", e não poderá exceder 6,35mm do diâmetro OD do tubo. Os valores da medida B descritos nesta tabela para flanges de 26\" a 48\" referem-se à norma AWWA C207-94 e poderão ser utilizados como referência;; 8.; Veja Procedimento; para Aperto dos Parafusos;; 9.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 10.; Veja Resistência; à Corrosão dos materiais da conexão;; 11.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-DIN-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_DIN.html",
    "sourcePages": [
      {
        "title": "Flanges Sobreposto Plano - DIN",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_DIN.html"
      }
    ],
    "summary": "de Pressão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-DIN2573-PN6-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_DIN2573_PN6.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma DIN 2573 Classe PN 6 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_DIN2573_PN6.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; Tipos de acabamento da face de junção para flanges de face...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2573; - Classe de pressão PN 6 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 5; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO; Série 1; DIN; Série 2; 1/2\"; 15; 20; 21; 80; 12; 55; M 10; 11; 0,41; 21,3; 22; 3/4\"; 25; 26; 90; 14; 65; 0,6; 26,9; 27,6; 1\"; 30; 31; 100; 75; 0,74; 33,7; 34,4; 1.1/4\"; 32; 38; 39; 120; 16; M 12; 1,19; 42,4; 43,1; 1.1/2\"; 40; 44,5; 45,5; 130; 1,39; 48,3; 49; 2\"; 50; 57; 58,1; 140; 110; 1,53; 60,3; 61,1; 2.1/2\"; 76,1; 77,1; 160; 1,89; 3\"; 88,9; 90,3; 190; 18; 150; M 16; 2,98; 4\"; 108; 109,6; 210; 170; 3,46; 114,3; 115,9; 5\"; 125; 133; 134,8; 240; 200; 4,6; 139,7; 141,6; 6\"; 159; 161,1; 265; 225; 5,22; 168,3; 170,5; 8\"; 219,1; 221,8; 320; 280; 7,15; 10\"; 250; 267; 270,2; 375; 24; 335; 9,61; 273; 276,2; 12\"; 300; 323,9; 327,6; 440; 395; M 20; 12,6; 14\"; 350; 355,6; 359,7; 490; 445; 15,6; 368; 372,2"
          },
          {
            "label": "Dados 2",
            "value": "16\"; 400; 406,4; 411; 540; 28; 495; 18,4; 419; 423,7; 18\"; (450); 457; 462,5; 595; 550; 21,4; 20\"; 500; 508; 513,6; 645; 600; 24,6"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 6 bar (87 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-DIN2576-PN10-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_DIN2576_PN10.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma DIN 2576 Classe PN 10 em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_DIN2576_PN10.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; Tipos de acabamento da face de junção para flanges de face...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma DIN",
        "rows": [
          {
            "label": "Dados",
            "value": "2576; - Classe de pressão PN 10 (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (DIN 2526);; - Plano; (DIN 2526);; Tipos de acabamento da face de junção para flanges de faceamento plano:; - Forma A: liso (sem ranhura);; - Forma B: Rz=160 (não mais fino que 40&micro;)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; d 1; (mm); d 5; Número; de; Furos; Tipo da Rosca do Parafuso; d 2; (pol.) (4); ISO; Série 1; DIN; Série 2; 1/2\"; 15; 20; 21; 95; 14; 65; M 12; 0,675; 21,3; 22; 0,669; 3/4\"; 25; 26; 105; 16; 75; 0,749; 26,9; 27,6; 0,936; 1\"; 30; 31; 115; 85; 1,14; 33,7; 34,4; 1,11; 1.1/4\"; 32; 38; 39; 140; 100; M 16; 18; 1,66; 42,4; 43,1; 1,62; 1.1/2\"; 40; 44,5; 45,5; 150; 110; 1,89; 48,3; 49; 1,86; 2\"; 50; 57; 58,1; 165; 125; 2,51; 60,3; 61,1; 2,47; 2.1/2\"; 76,1; 77,1; 185; 145; 3\"; 80; 88,9; 90,3; 200; 160; 3,79; 4\"; 108; 109,6; 220; 180; 4,2; 114,3; 115,9; 4,03; 5\"; 133; 134,8; 250; 210; 5,71; 139,7; 141,6; 5,46; 6\"; 159; 161,1; 285; 240; M 20; 6,72; 168,3; 170,5; 6,57; 8\"; 219,1; 221,8; 340; 24; 295; 9,31; 10\"; 267; 270,2; 395; 350; 12; 12,5; 273; 276,2; 11,9; 12\"; 300; 323,9; 327,6; 445; 400"
          },
          {
            "label": "Dados 2",
            "value": "13,8; 14\"; 355,6; 359,7; 505; 28; 460; 20,6; 368; 372,2; 19; 16\"; 406,4; 411; 565; 515; M 24; 27,9; 419; 423,7; 25,9; 18\"; 450; 457; 462,5; 615; 35,6; 20\"; 500; 508; 513,6; 670; 620; 41,1"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 bar (145 psi) (1 bar = 14,5 psi);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Veja Tabela; de Dimensões dos Prisioneiros;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JIS-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JIS.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano - JIS",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JIS.html"
      }
    ],
    "summary": "de Pressão",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão"
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2220-5K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_5K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JIS B2220-1995 B2238-1996 Classe 5K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_5K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 5k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 5k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 1000mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Solda"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (2); Diâmetro; Nominal; OD (mm); do; (mm); Nr.; de; Furos; Tamanho; Parafuso; (rosca); W1; W2; (pol.) (4); 3/8\"; (10); 17.3; 17.8; 75; 39; 55; 12; M10; 2.5; 0.27; 1/2\"; 15; 21.7; 22.2; 80; 44; 60; 0.30; 3/4\"; (20); 27.2; 27.7; 85; 10; 49; 65; 0.37; 1\"; 25; 34.0; 34.5; 95; 59; 0.45; 1.1/4\"; (32); 42.7; 43.2; 115; 70; 90; M12; 0.78; 1.1/2\"; 40; 48.6; 49.1; 120; 0.83; 2\"; 50; 60.5; 61.1; 130; 14; 105; 1.07; 2.1/2\"; 76.3; 77.1; 155; 110; 1.49; 3\"; 89.1; 90.0; 180; 121; 145; 19; M16; 1.99; 3.1/2\"; (90); 101.6; 102.6; 190; 131; 2.09; 4\"; 100; 114.3; 115.4; 200; 16; 141; 165; 2.39; 5\"; 125; 139.8; 141.2; 235; 176; 3.23; 6\"; 150; 165.2; 166.6; 265; 18; 206; 230; 4.41; 7\"; (175); 190.7; 192.1; 300; 232; 260; 23; M20; 7.5; 5.51; 8\"; 216.3; 218.0; 320; 20; 252; 280; 8.5; 6.33; 9\"; (225); 241.8; 243.7; 345"
          },
          {
            "label": "Dados 2",
            "value": "277; 305; 6.64; 10\"; 250; 267.4; 269.5; 385; 22; 317; 9.45; 12\"; 318.5; 321.0; 430; 360; 390; 10.30; 14\"; 350; 355.5; 358.1; 480; 24; 403; 435; M22; 14.00; 16\"; 400; 406.4; 409.0; 540; 463; 495; 16.90; 18\"; 450; 457.2; 460.0; 605; 523; 555; 24.80; 20\"; 500; 508.0; 511.0; 655; 573; 26.90; 22\"; 550; 558.8; 562.0; 720; 26; 630; 665; 27; M24; 34.10; 24\"; 600; 609.6; 613.0; 770; 680; 715; 37.50; 26\"; 650; 660.4; 664.0; 825; 735; 42.80; 28\"; 700; 711.2; 715.0; 875; 785; 820; 45.40; 30\"; 750; 762.0; 766.0; 945; 28; 840; 880; 33; M30; 57.40; 32\"; 800; 812.8; 817.0; 995; 890; 930; 13; 60.80; 34\"; 850; 863.6; 868.0; 1045; 940; 980; 63.50; 36\"; 900; 914.4; 919.0; 1095; 30; 990; 1030; 75.30; 40\"; 1000; 1016.0; 1021.0; 1195; 32; 1090; 1130; 88.50"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 5 kg/cm 2 (71 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2220-10K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_10K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JIS B2220-1995 B2238-1996 Classe 10K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_10K.html"
      }
    ],
    "summary": "Sobreposto Plano - JIS B2220-1995 B2238-1996 - CLASSE 10K",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FLANGE",
        "rows": [
          {
            "label": "Dados",
            "value": "Sobreposto Plano - JIS B2220-1995 B2238-1996 - CLASSE 10K"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 10k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 800mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação; Solda"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro; Nominal; OD (mm); do; (mm); Nr.; de; Furos; Tamanho; Parafuso; (rosca); W1; W2; (pol.) (4); 3/8\"; (10); 17.3; 17.8; 90; 12; 46; 65; 15; M12; 2.5; 0.52; 1/2\"; 21.7; 22.2; 95; 51; 70; 0.57; 3/4\"; (20); 27.2; 27.7; 100; 14; 56; 75; 0.73; 1\"; 25; 34.0; 34.5; 125; 67; 19; M16; 1.13; 1.1/4\"; (32); 42.7; 43.2; 135; 16; 76; 1.48; 1.1/2\"; 40; 48.6; 49.1; 140; 81; 105; 1.56; 2\"; 50; 60.5; 61.1; 155; 96; 120; 1.88; 2.1/2\"; 76.3; 77.1; 175; 18; 116; 6.5; 2.6; 3\"; 80; 89.1; 90.0; 185; 126; 150; 2.61; 3.1/2\"; (90); 101.6; 102.6; 195; 136; 160; 2.76; 4\"; 114.3; 115.4; 210; 151; 3.14; 5\"; 139.8; 141.2; 250; 20; 182; 23; M20; 7.5; 4.77; 6\"; 165.2; 166.6; 280; 22; 212; 240; 6.34; 7\"; (175); 190.7; 192.1; 305; 237; 265; 6.82; 8\"; 200; 216.3; 218.0; 330; 262; 290; 7.53; 9\"; (225); 241.8; 243.7; 350; 282; 310"
          },
          {
            "label": "Dados 2",
            "value": "7.74; 10\"; 267.4; 269.5; 400; 24; 324; 355; 10; 12.7; 12\"; 300; 318.5; 321.0; 445; 368; M22; 13.8; 14\"; 355.5; 358.1; 490; 26; 413; 18.2; 16\"; 406.4; 409.0; 560; 28; 475; 510; 27; M24; 25.2; 18\"; 450; 457.2; 460.0; 620; 30; 530; 565; 33; 20\"; 500; 508.0; 511.0; 675; 585; 37.6; 22\"; 550; 558.8; 562.0; 745; 32; 640; 680; M30; 49.7; 24\"; 600; 609.6; 613.0; 795; 690; 730; 52.6; 26\"; 650; 660.4; 664.0; 845; 34; 740; 780; 60.6; 28\"; 700; 711.2; 715.0; 905; 36; 800; 840; 17; 70.6; 30\"; 750; 762.0; 766.0; 970; 38; 855; 900; 11; 85.8; 32\"; 812.8; 817.0; 1020; 950; 91.2; 34\"; 850; 863.6; 868.0; 1070; 955; 1000; 98.6; 36\"; 914.4; 919.0; 1120; 1005; 1050; 109; 40\"; 1016.0; 1021.0; 1235; 1110; 1160; 39; M36; 133"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 10 kg/cm 2 (142,2 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2220-16K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_16K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JIS B2220-1995 B2238-1996 Classe 16K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_16K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 16k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 16k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 1000mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; OD (mm); do; (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 3/8\"; (10); 17.3; 17.8; 90; 12; 46; 65; 15; M12; 0,51; 1/2\"; 21.7; 22.2; 95; 51; 70; 0,58; 3/4\"; (20); 27.2; 27.7; 100; 14; 56; 75; 0,75; 1\"; 25; 34.0; 34.5; 125; 67; 19; M16; 1,13; 1.1/4\"; (32); 42.7; 43.2; 135; 16; 76; 1,46; 1.1/2\"; 40; 48.6; 49.1; 140; 81; 105; 1,56; 2\"; 50; 60.5; 61.1; 155; 96; 120; 1,7; 2.1/2\"; 76.3; 77.1; 175; 18; 116; 2,4; 3\"; 80; 89.1; 90.0; 200; 20; 132; 160; 23; M20; 3,5; 3.1/2\"; (90); 101.6; 102.6; 210; 145; 170; 3,7; 4\"; 114.3; 115.4; 225; 22; 185; 4,5; 5\"; 139.8; 141.2; 270; 195; M22; 6,5; 6\"; 150; 165.2; 166.6; 305; 24; 230; 260; 8,7; 8\"; 216.3; 218.0; 350; 26; 275; 10,9; 10\"; 250; 267.4; 269.5; 430; 28; 345; 380; 27; M24; 18,0; 12\"; 300; 318.5; 321.0; 480; 30; 395; 21,5"
          },
          {
            "label": "Dados 2",
            "value": "14\"; 355.5; 358.1; 540; 34; 440; 33; M30&times;3; 30,8; 16\"; 400; 406.4; 409.0; 605; 38; 495; 42,8; 18\"; 450; 457.2; 460.0; 675; 560; 55,1; 20\"; 500; 508.0; 511.0; 730; 42; 615; 660; 65,1; 22\"; 550; 558.8; 562.0; 795; 44; 670; 720; 39; M36&times;3; 77,9; 24\"; 600; 609.6; 613.0; 845; 770; 86,0; 26\"; 650; 660.4; 664.0; 895; 48; 820; 96,3; 28\"; 700; 711.2; 715.0; 960; 875; 114,1; 30\"; 750; 762.0; 766.0; 1020; 52; 880; 935; 132,7; 32\"; 800; 812.8; 817.0; 1085; 54; 930; 990; M45&times;3; 152,1; 34\"; 850; 863.6; 868.0; 1135; 980; 1040; 166,5; 36\"; 900; 914.4; 919.0; 1185; 58; 1030; 1090; 178,1; 40\"; 1000; 1016.0; 1021.0; 1320; 62; 1140; 1210; M52&times;3; 235,3; 44\"; 1100; 1117.6; 1123.0; 1420; 66; 1240; 1310; 32; 267,9; 48\"; 1200; 1219.2; 1225.0; 1530; 1350; 321,1"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 16 kg/cm 2 (227,5 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2220-20K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_20K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JIS B2220-1995 B2238-1996 Classe 20K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_20K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 20k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 20k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 900mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; OD (mm); do; (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 3/8\"; (10); 17.3; 17.8; 90; 14; 46; 65; 15; M12; 0,6; 1/2\"; 21.7; 22.2; 95; 51; 70; 0,7; 3/4\"; (20); 27.2; 27.7; 100; 16; 56; 75; 0,8; 1\"; 25; 34.0; 34.5; 125; 67; 19; M16; 1,3; 1.1/4\"; (32); 42.7; 43.2; 135; 18; 76; 1,6; 1.1/2\"; 40; 48.6; 49.1; 140; 81; 105; 1,7; 2\"; 50; 60.5; 61.1; 155; 96; 120; 1,9; 2.1/2\"; 76.3; 77.1; 175; 20; 116; 2,6; 3\"; 80; 89.1; 90.0; 200; 22; 132; 160; 23; M20; 3,8; 3.1/2\"; (90); 101.6; 102.6; 210; 24; 145; 170; 4,4; 4\"; 114.3; 115.4; 225; 185; 4,9; 5\"; 139.8; 141.2; 270; 26; 195; M22; 7,8; 6\"; 150; 165.2; 166.6; 305; 28; 230; 260; 12; 10,1; 8\"; 216.3; 218.0; 350; 30; 275; 12,6; 10\"; 250; 267.4; 269.5; 430; 34; 345; 380; 27; M24; 21,9; 12\"; 300; 318.5; 321.0; 480; 36; 395; 25,8"
          },
          {
            "label": "Dados 2",
            "value": "14\"; 355.5; 358.1; 540; 440; 33; M30&times;3; 36,2; 16\"; 400; 406.4; 409.0; 605; 495; 51,7; 18\"; 450; 457.2; 460.0; 675; 48; 560; 66,1; 20\"; 500; 508.0; 511.0; 730; 615; 660; 77,4; 22\"; 550; 558.8; 562.0; 795; 52; 670; 720; 39; M36&times;3; 92,2; 24\"; 600; 609.6; 613.0; 845; 54; 770; 101,1; 26\"; 650; 660.4; 664,0; 945; 60; 790; 850; M45&times;3; 147,6; 28\"; 700; 711.2; 715,0; 995; 64; 840; 900; 168,0; 30\"; 750; 762.0; 766,0; 1080; 68; 970; M52&times;3; 212,7; 32\"; 800; 812.8; 817,0; 1140; 72; 960; 1030; 248,5; 34\"; 863.6; 868,0; 1200; 74; 1020; 1090; 280,5; 36\"; 914.4; 919,0; 1250; 1070; 296,9"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 20 kg/cm 2 (284,40 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2220-30K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_30K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JIS B2220-1995 B2238-1996 Classe 30K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2220_30K.html"
      }
    ],
    "summary": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2220-1995 B2238-1996; - Classe de pressão 30k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; OD (mm); do; (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 1/2\"; 15; 21.7; 22,2; 115; 18; 55; 80; 19; M16; 1,2; 3/4\"; (20); 27.2; 27,7; 120; 60; 85; 1,3; 1\"; 25; 34.0; 34,5; 130; 20; 70; 95; 1,7; 1.1/4\"; (32); 42.7; 43,2; 140; 22; 105; 2,25; 1.1/2\"; 40; 48.6; 49,1; 160; 90; 23; M20; 2,9; 2\"; 50; 60.5; 61,1; 165; 2,8; 2.1/2\"; 65; 76.3; 77,1; 200; 26; 4,8; 3\"; 89.1; 90,0; 210; 28; 170; 5,6; 3.1/2\"; (90); 101.6; 102,6; 230; 30; 150; 185; M22; 7,0; 4\"; 100; 114.3; 115,4; 240; 32; 195; 7,8; 5\"; 125; 139.8; 141,2; 275; 36; 11,4; 6\"; 165.2; 166,6; 325; 38; 235; 12; 27; M24; 16,3; 8\"; 216.3; 218,0; 370; 42; 280; 320; 21,1; 10\"; 250; 267.4; 269,5; 450; 48; 345; 390; 33; M30x3; 35,0; 12\"; 300; 318.5; 321,0; 515; 52; 405; 16; 47,0; 14\"; 350; 355.5; 358,1; 560; 54; 495; 56,6"
          },
          {
            "label": "Dados 2",
            "value": "16\"; 400; 406.4; 409,0; 630; 510; 39; M36x3; 76,9"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 30 kg/cm 2 (426,6 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2238-40K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2238_40K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JISB2238-1996 Classe 40K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2238_40K.html"
      }
    ],
    "summary": "- B2238-1996; - Classe de pressão 40k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2238-1996; - Classe de pressão 40k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; OD (mm); do; (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 1/2\"; 15; 21.7; 22,2; 20; 53; 55; 80; 19; M16; 1,3; 3/4\"; (20); 27.2; 27,7; 58; 60; 85; 1,5; 1\"; 25; 34.0; 34,5; 22; 63; 70; 95; 1,9; 1.1/4\"; (32); 42.7; 43,2; 24; 69; 105; 2,4; 1.1/2\"; 40; 48.6; 49,1; 72; 90; 120; 23; M20; 3,1; 2\"; 50; 60.5; 61,1; 26; 75; 130; 3,3; 2.1/2\"; 65; 76.3; 77,1; 30; 81; 160; 5,5; 3\"; 89.1; 90,0; 32; 140; 170; 6,4; 3.1/2\"; (90); 101.6; 102,6; 34; 88; 150; 185; M22; 7,9; 4\"; 100; 114.3; 115,4; 36; 104; 165; 205; 9,9; 5\"; 125; 139.8; 141,2; 200; 250; 27; M24; 15,9; 6\"; 165.2; 166,6; 44; 240; 295; 12; 33; M30x3; 23,2; 8\"; 216.3; 218,0; 135; 290; 345; 32,1; 10\"; 267.4; 269,5; 56; 154; 355; 410; 48,6; 12\"; 300; 318.5; 321,0; 159; 470; 16; 39; M36x3; 14\"; 350; 355.5; 358,1; 64; 168"
          },
          {
            "label": "Dados 2",
            "value": "455; 515; 75,2; 16\"; 400; 406.4; 409,0; 181; 570; 97,4"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 40 kg/cm 2 (568,8 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-so-plano-JISB2238-63K-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2238_63K.html",
    "sourcePages": [
      {
        "title": "Flange Sobreposto Plano norma JISB2238-1996 Classe 63K em aço e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_so_plano_JISB2238_63K.html"
      }
    ],
    "summary": "- B2238-1996; - Classe de pressão 63k (1)",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F310"
          }
        ]
      },
      {
        "title": "Dimensões conforme Norma JIS:",
        "rows": [
          {
            "label": "Dados",
            "value": "- B2238-1996; - Classe de pressão 63k (1)"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano (FF - Flat Face );; Tipos de acabamento da face de junção:; - Conforme KS B1519 (JIS B2202)."
          }
        ]
      },
      {
        "title": "Dimensões:",
        "rows": [
          {
            "label": "Dados",
            "value": "- De 10 a 400mm."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tubo; Furação"
          }
        ]
      },
      {
        "title": "Peso Aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) (2); Diâmetro Nominal; OD (mm); do; (mm); Número; de; Furos; Tamanho; Parafuso; (rosca); (pol.) (4); 1/2\"; 15; 21.7; 22,2; 120; 23; 55; 85; 19; M16; 1,8; 3/4\"; (20); 27.2; 27,7; 135; 25; 60; 95; M20; 2,4; 1\"; 34.0; 34,5; 140; 27; 70; 100; 2,7; 1.1/4\"; (32); 42.7; 43,2; 150; 30; 80; 110; 3,4; 1.1/2\"; 40; 48.6; 49,1; 175; 32; 90; 130; M22; 5,1; 2\"; 50; 60.5; 61,1; 185; 34; 105; 145; 5,5; 2.1/2\"; 65; 76.3; 77,1; 220; 38; 5,8; 3\"; 89.1; 90,0; 230; 9,9; 3.1/2\"; (90); 101.6; 102,6; 255; 42; 205; M24; 12,7; 4\"; 114.3; 115,4; 270; 44; 165; 14,7; 5\"; 125; 139.8; 141,2; 325; 200; 265; 33; M30x3; 23,8; 6\"; 165.2; 166,6; 365; 54; 240; 305; 12; 30,9; 8\"; 216.3; 218,0; 425; 290; 360; 44,6; 10\"; 250; 267.4; 269,5; 500; 68; 355; 430; 39; M36x3; 67,1; 12\"; 300; 318.5; 321,0; 560; 77; 410; 485; 16; 88,9; 14\"; 350; 355.5"
          },
          {
            "label": "Dados 2",
            "value": "358,1; 615; 81; 455; 530; 46; M49x3; 108,5; 16\"; 400; 406.4; 409,0; 680; 89; 515; 590; 144,2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A pressão nominal de trabalho é de 63 kg/cm 2 (895,86 PSI) (1 kg/cm 2 = 14,22 PSI);; 2.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 3.; Todas dimensões estão em milímetros, exceto D iâmetro N ominal (em polegadas);; 4.; Valor aproximado em polegadas;; 5.; Os flanges de diâmetro nominal entre parêntesis não são comumente utilizados;; 6.; Veja Procedimento; para Aperto dos Parafusos;; 7.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 8.; Veja Resistência; à Corrosão dos materiais da conexão;; 9.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_300.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_600.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 600 lbs RTJ canal O'ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_600_rtj.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_900.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 900 lbs RTJ canal O'Ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_900_rtj.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_1500.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) - 1.500 lbs RTJ canal O'Ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_1500_rtj.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_2500.html"
      },
      {
        "title": "Flange Orifício Com Pescoço (WN) 2.500 lbs RTJ canal para O'Ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_2500_rtj.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "9"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.36;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124; 50,8; 53,9; 38,1; 17,5; 88,9; 82,6; 33,5; 1.1/2\"; 155,5; 73,2; 69,9; 20,6; 114,3; 85,9; 48,3; 13; 2\"; 165,1; 92; 84,1; 127,0; 60,5; 15; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 20; 3\"; 209,6; 127; 117,4; 168,2; 22; 4\"; 254; 157,2; 146,1; 200,2; 92,0; 31; 6\"; 12; 317,5; 215,9; 206,3; 22,4; 269,8; 168,4; 45; 8\"; 381; 260,4; 41,2; 25,4; 330,2; 111,3; 219,2; 71; 10\"; 16; 444,5; 323,9; 320,6; 47,8; 28,5; 387,4; 273,1; 100; 12\"; 520,7; 374,7; 31,8; 450,9; 130,1; 150; 14\"; 584,2; 412,8; 425,5; 514,4; 142,8; 355,6; 193; 16\"; 647,7; 469,9; 482,6; 57,2; 35,1; 571,5; 406,4; 268; 18\"; 24; 711,2; 533,4; 628,7; 158,8; 457,2; 341; 20\"; 774,7; 587,3; 63,5; 685,8; 162,1; 508,0; 413; 24\"; 914,4; 692,2; 701,6; 812,8; 609,6; 613"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; B e na altura H; do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124,0; 50,8; 53,9; 38,1; 19,1; 88,9; 82,6; 35,5; 1,6; 1.1/2\"; 155,5; 73,2; 69,9; 22,4; 114,3; 85,9; 48,3; 12; 2\"; 165,1; 92,0; 84,1; 127,0; 60,5; 15; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 16; 3\"; 209,6; 117,4; 168,2; 20; 4\"; 273,1; 157,2; 152,4; 25,4; 215,9; 101,6; 6,4; 47; 6\"; 355,6; 222,3; 47,8; 28,4; 292,1; 168,4; 89; 8\"; 419,1; 269,8; 55,6; 31,8; 349,3; 133,4; 219,2; 126; 10\"; 508,0; 323,9; 342,9; 63,5; 35,1; 431,8; 206; 12\"; 558,8; 381,0; 400,1; 66,6; 489,0; 251; 14\"; 603,3; 412,8; 527,1; 370; 16\"; 685,8; 469,9; 495,3; 76,2; 41,1; 177,8; 406,4; 505; 18\"; 743,0; 533,4; 546,1; 44,5; 654,1; 184,2; 457,2; 592; 20\"; 24; 812,8; 584,2; 609,6; 723,9; 736; 24\"; 939,8; 692,2; 717,7; 838,2; 203,2; 1052"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 600LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124,0; 53,9; 38,1; 19,1; 88,9; 82,6; 35,5; 50,8; 8,7; 6,4; 0,8; 1.1/2\"; 155,5; 69,9; 22,4; 114,3; 85,9; 48,3; 68,28; 11; 2\"; 165,1; 84,1; 127,0; 60,5; 82,55; 11,9; 7,9; 14; 2.1/2\"; 190,5; 100,1; 149,4; 73,2; 101,60; 21; 3\"; 209,6; 117,4; 168,2; 123,83; 25; 4\"; 273,1; 152,4; 25,4; 215,9; 101,6; 149,23; 45; 6\"; 12; 355,6; 222,3; 47,8; 28,4; 292,1; 168,4; 211,12; 89; 8\"; 419,1; 55,6; 31,8; 349,3; 133,4; 219,2; 269,88; 129; 10\"; 16; 508,0; 342,9; 63,5; 35,1; 431,8; 323,85; 214; 12\"; 20; 558,8; 400,1; 66,6; 489,0; 323,9; 381,00; 259; 14\"; 603,3; 527,1; 419,10; 377; 16\"; 685,8; 495,3; 76,2; 41,1; 177,8; 406,4; 469,90; 515; 18\"; 743,0; 546,1; 44,5; 654,1; 184,2; 457,2; 533,40; 604; 20\"; 24; 812,8; 609,6; 723,9; 584,20; 13,5; 9,5; 1,6; 754; 24\"; Veja nota 2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Flange com junta de anel de 24\", não está incluído na relação pois não existe parede suficiente entre o canal e os furos;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; Para bitolas até 2.1/2' usar classe 1500 libras; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 241,3; 127,0; 38,1; 25,4; 190,5; 101,5; 88,9; 1,6; 34; 4\"; 292,1; 157,2; 158,8; 44,5; 31,8; 235,0; 114,3; 57; 6\"; 12; 381,0; 215,9; 55,6; 317,5; 139,7; 168,4; 118; 8\"; 469,9; 269,8; 298,5; 63,5; 393,7; 162,1; 219,2; 190; 10\"; 16; 546,1; 323,9; 368,3; 69,9; 184,2; 273,1; 277; 12\"; 20; 609,6; 419,1; 79,3; 533,4; 200,2; 345; 14\"; 641,4; 412,8; 450,9; 85,9; 41,2; 558,8; 212,9; 355,6; 441; 16\"; 704,9; 508,0; 616,0; 406,4; 545; 18\"; 787,4; 565,2; 101,6; 50,8; 685,8; 228,6; 457,2; 761; 20\"; 857,3; 584,2; 622,3; 108,0; 53,9; 749,3; 247,7; 927; 24\"; 1041,4; 292,2; 66,6; 901,7; 1697"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 900LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; Para bitolas até 2.1/2' usar classe 1500 libras; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 241,3; 127,0; 38,1; 25,4; 190,5; 101,6; 88,9; 123,83; 11,9; 7,9; 0,8; 38; 4\"; 292,1; 158,8; 44,5; 31,8; 235,0; 114,3; 149,23; 64; 6\"; 12; 381,0; 55,6; 317,5; 139,7; 168,4; 211,13; 131; 8\"; 469,9; 298,5; 63,5; 393,7; 162,1; 219,2; 269,88; 204; 10\"; 16; 546,1; 368,3; 69,9; 184,2; 273,1; 323,85; 300; 12\"; 20; 609,6; 419,1; 79,3; 533,4; 200,2; 323,9; 381,00; 372; 14\"; Veja nota 2; 16\"; 18\"; 20\"; 24\""
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Os flanges com junta de anel superiores a 12\", não estão incluídos na relação pois existe interferência ou a parede entre o canal e os furos é muito pequena;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 149,4; 50,8; 52,3; 38,1; 25,4; 101,6; 82,6; 33,5; 6,4; 12; 1.1/2\"; 177,8; 73,2; 69,9; 28,5; 124,0; 88,9; 48,3; 16; 2\"; 215,9; 92; 104,7; 165,1; 60,5; 29; 2.1/2\"; 244,4; 41,2; 190,5; 90; 3\"; 266,7; 127,0; 133,4; 47,8; 31,8; 203,2; 117,4; 55; 4\"; 311,2; 157,2; 162,1; 53,9; 35,1; 241,3; 114,3; 82; 6\"; 393,7; 228,6; 317,5; 171,5; 168,4; 184; 8\"; 482,6; 269,8; 292,1; 92,0; 44,5; 212,9; 219,2; 286; 10\"; 584,2; 323,9; 368,3; 108,0; 254,0; 273,1; 498; 12\"; 673,1; 381,0; 450,9; 571,5; 282,5; 760; 14\"; 749,3; 412,8; 495,3; 635,0; 298,5; 355,6; 1053; 16\"; 825,5; 469,9; 552,5; 146,1; 66,6; 704,9; 406,4; 1406; 18\"; 914,4; 533,4; 596,9; 774,7; 327,2; 457,2; 1836; 20\"; 984,3; 641,4; 79,3; 831,9; 508,00; 2324; 24\"; 1168,4; 692,2; 762,0; 990,6; 609,6; 3749"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 1500LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 149,4; 52,3; 38,1; 25,4; 101,6; 82,6; 33,5; 50,80; 8,7; 6,4; 0,8; 12; 1.1/2\"; 177,8; 69,9; 28,5; 124,0; 88,9; 48,3; 68,28; 19; 2\"; 215,9; 104,7; 165,1; 60,5; 95,25; 11,9; 7,9; 32; 2.1/2\"; 244,4; 41,2; 190,5; 73,2; 107,95; 45; 3\"; 266,7; 133,4; 47,8; 31,8; 203,2; 117,4; 136,53; 59; 4\"; 311,2; 162,1; 53,9; 35,1; 241,3; 114,3; 161,93; 91; 6\"; 393,7; 228,6; 317,5; 171,5; 168,4; 211,12; 13,5; 9,7; 1,6; 197"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Os flanges com junta de anel superiores a 6\", não estão incluídos na relação pois existe interferência ou a parede entre o canal e os furos é muito pequena;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 158,8; 50,8; 57,15; 35,10; 25,4; 108,0; 88,90; 33,5; 6,35; 13; 1.1/2\"; 203,2; 73,15; 79,25; 44,5; 31,75; 146,1; 111,3; 48,3; 28; 2\"; 235,0; 91,9; 95,3; 28,40; 171,5; 127,0; 60,45; 40; 2.1/2\"; 266,7; 104,6; 114,3; 196,9; 142,8; 50; 3\"; 304,8; 133,4; 66,55; 228,6; 168,1; 88,9; 104; 4\"; 355,6; 157,2; 165,1; 76,2; 41,10; 273,1; 190,5; 161; 6\"; 482,6; 215,9; 53,80; 368,3; 168,4; 414; 8\"; 12; 552,5; 269,7; 438,2; 317,5; 219,2; 636; 10\"; 673,1; 323,8; 374,7; 539,8; 419,1; 1189; 12\"; 762,0; 381,0; 441,5; 184,2; 619,2; 463,6; 1667"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 2500LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 158,8; 57,15; 35,10; 25,4; 108,0; 88,90; 33,5; 60,33; 8,7; 6,4; 0,8; 14; 1.1/2\"; 203,2; 79,25; 44,50; 31,8; 146,1; 111,30; 48,3; 82,55; 11,9; 7,9; 31; 2\"; 235,0; 95,3; 50,80; 28,4; 171,5; 127,00; 60,5; 101,60; 44; 2.1/2\"; 266,7; 114,3; 31,75; 196,9; 142,70; 73,2; 111,13; 13,5; 9,7; 1,6; 58; 3\"; 304,8; 133,4; 66,55; 35,1; 228,6; 168,10; 88,9; 114"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Os flanges com junta de anel superiores a 3\", não estão incluídos na relação pois existe interferência ou a parede entre o canal e os furos é muito pequena;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_300.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.36;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124; 50,8; 53,9; 38,1; 17,5; 88,9; 82,6; 33,5; 1.1/2\"; 155,5; 73,2; 69,9; 20,6; 114,3; 85,9; 48,3; 13; 2\"; 165,1; 92; 84,1; 127,0; 60,5; 15; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 20; 3\"; 209,6; 127; 117,4; 168,2; 22; 4\"; 254; 157,2; 146,1; 200,2; 92,0; 31; 6\"; 12; 317,5; 215,9; 206,3; 22,4; 269,8; 168,4; 45; 8\"; 381; 260,4; 41,2; 25,4; 330,2; 111,3; 219,2; 71; 10\"; 16; 444,5; 323,9; 320,6; 47,8; 28,5; 387,4; 273,1; 100; 12\"; 520,7; 374,7; 31,8; 450,9; 130,1; 150; 14\"; 584,2; 412,8; 425,5; 514,4; 142,8; 355,6; 193; 16\"; 647,7; 469,9; 482,6; 57,2; 35,1; 571,5; 406,4; 268; 18\"; 24; 711,2; 533,4; 628,7; 158,8; 457,2; 341; 20\"; 774,7; 587,3; 63,5; 685,8; 162,1; 508,0; 413; 24\"; 914,4; 692,2; 701,6; 812,8; 609,6; 613"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; B e na altura H; do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-600-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_600.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 600 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_600.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124,0; 50,8; 53,9; 38,1; 19,1; 88,9; 82,6; 35,5; 1,6; 1.1/2\"; 155,5; 73,2; 69,9; 22,4; 114,3; 85,9; 48,3; 12; 2\"; 165,1; 92,0; 84,1; 127,0; 60,5; 15; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 16; 3\"; 209,6; 117,4; 168,2; 20; 4\"; 273,1; 157,2; 152,4; 25,4; 215,9; 101,6; 6,4; 47; 6\"; 355,6; 222,3; 47,8; 28,4; 292,1; 168,4; 89; 8\"; 419,1; 269,8; 55,6; 31,8; 349,3; 133,4; 219,2; 126; 10\"; 508,0; 323,9; 342,9; 63,5; 35,1; 431,8; 206; 12\"; 558,8; 381,0; 400,1; 66,6; 489,0; 251; 14\"; 603,3; 412,8; 527,1; 370; 16\"; 685,8; 469,9; 495,3; 76,2; 41,1; 177,8; 406,4; 505; 18\"; 743,0; 533,4; 546,1; 44,5; 654,1; 184,2; 457,2; 592; 20\"; 24; 812,8; 584,2; 609,6; 723,9; 736; 24\"; 939,8; 692,2; 717,7; 838,2; 203,2; 1052"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-900-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_900.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 900 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_900.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; Para bitolas até 2.1/2' usar classe 1500 libras; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 241,3; 127,0; 38,1; 25,4; 190,5; 101,5; 88,9; 1,6; 34; 4\"; 292,1; 157,2; 158,8; 44,5; 31,8; 235,0; 114,3; 57; 6\"; 12; 381,0; 215,9; 55,6; 317,5; 139,7; 168,4; 118; 8\"; 469,9; 269,8; 298,5; 63,5; 393,7; 162,1; 219,2; 190; 10\"; 16; 546,1; 323,9; 368,3; 69,9; 184,2; 273,1; 277; 12\"; 20; 609,6; 419,1; 79,3; 533,4; 200,2; 345; 14\"; 641,4; 412,8; 450,9; 85,9; 41,2; 558,8; 212,9; 355,6; 441; 16\"; 704,9; 508,0; 616,0; 406,4; 545; 18\"; 787,4; 565,2; 101,6; 50,8; 685,8; 228,6; 457,2; 761; 20\"; 857,3; 584,2; 622,3; 108,0; 53,9; 749,3; 247,7; 927; 24\"; 1041,4; 292,2; 66,6; 901,7; 1697"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-1500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_1500.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 1.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_1500.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 149,4; 50,8; 52,3; 38,1; 25,4; 101,6; 82,6; 33,5; 6,4; 12; 1.1/2\"; 177,8; 73,2; 69,9; 28,5; 124,0; 88,9; 48,3; 16; 2\"; 215,9; 92; 104,7; 165,1; 60,5; 29; 2.1/2\"; 244,4; 41,2; 190,5; 90; 3\"; 266,7; 127,0; 133,4; 47,8; 31,8; 203,2; 117,4; 55; 4\"; 311,2; 157,2; 162,1; 53,9; 35,1; 241,3; 114,3; 82; 6\"; 393,7; 228,6; 317,5; 171,5; 168,4; 184; 8\"; 482,6; 269,8; 292,1; 92,0; 44,5; 212,9; 219,2; 286; 10\"; 584,2; 323,9; 368,3; 108,0; 254,0; 273,1; 498; 12\"; 673,1; 381,0; 450,9; 571,5; 282,5; 760; 14\"; 749,3; 412,8; 495,3; 635,0; 298,5; 355,6; 1053; 16\"; 825,5; 469,9; 552,5; 146,1; 66,6; 704,9; 406,4; 1406; 18\"; 914,4; 533,4; 596,9; 774,7; 327,2; 457,2; 1836; 20\"; 984,3; 641,4; 79,3; 831,9; 508,00; 2324; 24\"; 1168,4; 692,2; 762,0; 990,6; 609,6; 3749"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_2500.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 2.500 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_2500.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 158,8; 50,8; 57,15; 35,10; 25,4; 108,0; 88,90; 33,5; 6,35; 13; 1.1/2\"; 203,2; 73,15; 79,25; 44,5; 31,75; 146,1; 111,3; 48,3; 28; 2\"; 235,0; 91,9; 95,3; 28,40; 171,5; 127,0; 60,45; 40; 2.1/2\"; 266,7; 104,6; 114,3; 196,9; 142,8; 50; 3\"; 304,8; 133,4; 66,55; 228,6; 168,1; 88,9; 104; 4\"; 355,6; 157,2; 165,1; 76,2; 41,10; 273,1; 190,5; 161; 6\"; 482,6; 215,9; 53,80; 368,3; 168,4; 414; 8\"; 12; 552,5; 269,7; 438,2; 317,5; 219,2; 636; 10\"; 673,1; 323,8; 374,7; 539,8; 419,1; 1189; 12\"; 762,0; 381,0; 441,5; 184,2; 619,2; 463,6; 1667"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; A medida R não está incluída nas dimensões H e B;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-600-rtj-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_600_rtj.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 600 lbs RTJ canal O'ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_600_rtj.html"
      }
    ],
    "summary": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 600LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124,0; 53,9; 38,1; 19,1; 88,9; 82,6; 35,5; 50,8; 8,7; 6,4; 0,8; 1.1/2\"; 155,5; 69,9; 22,4; 114,3; 85,9; 48,3; 68,28; 11; 2\"; 165,1; 84,1; 127,0; 60,5; 82,55; 11,9; 7,9; 14; 2.1/2\"; 190,5; 100,1; 149,4; 73,2; 101,60; 21; 3\"; 209,6; 117,4; 168,2; 123,83; 25; 4\"; 273,1; 152,4; 25,4; 215,9; 101,6; 149,23; 45; 6\"; 12; 355,6; 222,3; 47,8; 28,4; 292,1; 168,4; 211,12; 89; 8\"; 419,1; 55,6; 31,8; 349,3; 133,4; 219,2; 269,88; 129; 10\"; 16; 508,0; 342,9; 63,5; 35,1; 431,8; 323,85; 214; 12\"; 20; 558,8; 400,1; 66,6; 489,0; 323,9; 381,00; 259; 14\"; 603,3; 527,1; 419,10; 377; 16\"; 685,8; 495,3; 76,2; 41,1; 177,8; 406,4; 469,90; 515; 18\"; 743,0; 546,1; 44,5; 654,1; 184,2; 457,2; 533,40; 604; 20\"; 24; 812,8; 609,6; 723,9; 584,20; 13,5; 9,5; 1,6; 754; 24\"; Veja nota 2"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Flange com junta de anel de 24\", não está incluído na relação pois não existe parede suficiente entre o canal e os furos;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-900-rtj-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_900_rtj.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 900 lbs RTJ canal O'Ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_900_rtj.html"
      }
    ],
    "summary": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 900LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; Para bitolas até 2.1/2' usar classe 1500 libras; 1.1/2\"; 2\"; 2.1/2\"; 3\"; 241,3; 127,0; 38,1; 25,4; 190,5; 101,6; 88,9; 123,83; 11,9; 7,9; 0,8; 38; 4\"; 292,1; 158,8; 44,5; 31,8; 235,0; 114,3; 149,23; 64; 6\"; 12; 381,0; 55,6; 317,5; 139,7; 168,4; 211,13; 131; 8\"; 469,9; 298,5; 63,5; 393,7; 162,1; 219,2; 269,88; 204; 10\"; 16; 546,1; 368,3; 69,9; 184,2; 273,1; 323,85; 300; 12\"; 20; 609,6; 419,1; 79,3; 533,4; 200,2; 323,9; 381,00; 372; 14\"; Veja nota 2; 16\"; 18\"; 20\"; 24\""
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Os flanges com junta de anel superiores a 12\", não estão incluídos na relação pois existe interferência ou a parede entre o canal e os furos é muito pequena;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-1500-rtj-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_1500_rtj.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) - 1.500 lbs RTJ canal O'Ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_1500_rtj.html"
      }
    ],
    "summary": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 1500LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 149,4; 52,3; 38,1; 25,4; 101,6; 82,6; 33,5; 50,80; 8,7; 6,4; 0,8; 12; 1.1/2\"; 177,8; 69,9; 28,5; 124,0; 88,9; 48,3; 68,28; 19; 2\"; 215,9; 104,7; 165,1; 60,5; 95,25; 11,9; 7,9; 32; 2.1/2\"; 244,4; 41,2; 190,5; 73,2; 107,95; 45; 3\"; 266,7; 133,4; 47,8; 31,8; 203,2; 117,4; 136,53; 59; 4\"; 311,2; 162,1; 53,9; 35,1; 241,3; 114,3; 161,93; 91; 6\"; 393,7; 228,6; 317,5; 171,5; 168,4; 211,12; 13,5; 9,7; 1,6; 197"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Os flanges com junta de anel superiores a 6\", não estão incluídos na relação pois existe interferência ou a parede entre o canal e os furos é muito pequena;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-wn-ANSI-2500-rtj-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_2500_rtj.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Com Pescoço (WN) 2.500 lbs RTJ canal para O'Ring em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_wn_ANSI_2500_rtj.html"
      }
    ],
    "summary": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ORIFÍCIO COM PESCOÇO (WELDING NECK) - ANSI B 16.36 - 2500LBS",
        "rows": [
          {
            "label": "Dados",
            "value": "- RTJ"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F309; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; (Ring Type Joint)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 158,8; 57,15; 35,10; 25,4; 108,0; 88,90; 33,5; 60,33; 8,7; 6,4; 0,8; 14; 1.1/2\"; 203,2; 79,25; 44,50; 31,8; 146,1; 111,30; 48,3; 82,55; 11,9; 7,9; 31; 2\"; 235,0; 95,3; 50,80; 28,4; 171,5; 127,00; 60,5; 101,60; 44; 2.1/2\"; 266,7; 114,3; 31,75; 196,9; 142,70; 73,2; 111,13; 13,5; 9,7; 1,6; 58; 3\"; 304,8; 133,4; 66,55; 35,1; 228,6; 168,10; 88,9; 114"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; Os flanges com junta de anel superiores a 3\", não estão incluídos na relação pois existe interferência ou a parede entre o canal e os furos é muito pequena;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-so-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_so_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Tipo Sobreposto Com Reforço Slip On 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_so_ANSI_300.html"
      }
    ],
    "summary": "F307; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F307; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.36;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124; 50,8; 53,9; 38,1; 17,5; 88,9; 34,5; 47,8; 1.1/2\"; 155,5; 73,2; 69,9; 20,6; 114,3; 49,5; 13; 2\"; 165,1; 92; 84,1; 127,0; 62,0; 49,3; 15; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 74,7; 20; 3\"; 209,6; 127; 117,4; 168,2; 90,7; 52,3; 22; 4\"; 254; 157,2; 146,1; 200,2; 116,1; 31; 6\"; 12; 317,5; 215,9; 206,3; 22,4; 269,8; 170,7; 45; 8\"; 381; 260,4; 41,2; 25,4; 330,2; 221,5; 71; 10\"; 16; 444,5; 323,9; 320,6; 28,5; 387,4; 276,4; 66,6; 100; 12\"; 520,7; 374,7; 31,8; 450,9; 327,2; 150; 14\"; 584,2; 412,8; 425,5; 514,4; 359,2; 76,2; 193; 16\"; 647,7; 469,9; 482,6; 57,2; 35,1; 571,5; 410,5; 82,6; 268; 18\"; 24; 711,2; 533,4; 60,5; 628,7; 461,8; 341; 20\"; 774,7; 587,3; 63,5; 685,8; 513,1; 95,3; 413; 24\"; 914,4; 692,2; 701,6; 812,8; 616,0; 106,4; 613"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; B e na altura N; do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-so-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_so_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Tipo Sobreposto Com Reforço Slip On 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_so_ANSI_300.html"
      }
    ],
    "summary": "F307; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F307; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.36;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124; 50,8; 53,9; 38,1; 17,5; 88,9; 34,5; 47,8; 1.1/2\"; 155,5; 73,2; 69,9; 20,6; 114,3; 49,5; 13; 2\"; 165,1; 92; 84,1; 127,0; 62,0; 49,3; 15; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 74,7; 20; 3\"; 209,6; 127; 117,4; 168,2; 90,7; 52,3; 22; 4\"; 254; 157,2; 146,1; 200,2; 116,1; 31; 6\"; 12; 317,5; 215,9; 206,3; 22,4; 269,8; 170,7; 45; 8\"; 381; 260,4; 41,2; 25,4; 330,2; 221,5; 71; 10\"; 16; 444,5; 323,9; 320,6; 28,5; 387,4; 276,4; 66,6; 100; 12\"; 520,7; 374,7; 31,8; 450,9; 327,2; 150; 14\"; 584,2; 412,8; 425,5; 514,4; 359,2; 76,2; 193; 16\"; 647,7; 469,9; 482,6; 57,2; 35,1; 571,5; 410,5; 82,6; 268; 18\"; 24; 711,2; 533,4; 60,5; 628,7; 461,8; 341; 20\"; 774,7; 587,3; 63,5; 685,8; 513,1; 95,3; 413; 24\"; 914,4; 692,2; 701,6; 812,8; 616,0; 106,4; 613"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura; B e na altura N; do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-rsc-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_rsc_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Tipo Roscado NPT e BSP 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_rsc_ANSI_300.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.36;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); Q B; Q F"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124; 50,8; 53,9; 38,1; 17,5; 88,9; 35,8; 33; 36,6; 19,1; 1.1/2\"; 155,5; 73,2; 69,9; 20,6; 114,3; 50,6; 48,1; 37,3; 18,3; 11; 2\"; 165,1; 92; 84,1; 127,0; 63,5; 60; 12; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 76,2; 72,1; 44,5; 14,2; 16; 3\"; 209,6; 127; 117,4; 168,2; 92,2; 87,9; 46; 19; 4\"; 254; 157,2; 146,1; 200,2; 117,6; 113; 47,8; 27; 6\"; 317,5; 215,9; 206,3; 22,4; 269,8; 171,5; 166,9; 7,9; 43; 8\"; 381; 260,4; 41,2; 25,4; 330,2; 222,3; 217,2; 55,6; 11,2; 61"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura B e na altura N; do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-orificio-rsc-ANSI-300-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_rsc_ANSI_300.html",
    "sourcePages": [
      {
        "title": "Flange Orifício Tipo Roscado NPT e BSP 300 lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_orificio_rsc_ANSI_300.html"
      }
    ],
    "summary": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "F306; • Rosca NPT 1/2\";; • 12,7mm de furo para diâmetro nominal 4\" e maior;; • 9,5mm de furo para diâmetro nominal 3\"; • 6,4mm de furo para diâmetro nominal 2.1/2\" e menor."
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.36;"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica;; Tipos de rosca:; - NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN; (pol.); N°; de; Furos; (mm); Q B; Q F"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aprox.; (kg) (1); 1\"; 124; 50,8; 53,9; 38,1; 17,5; 88,9; 35,8; 33; 36,6; 19,1; 1.1/2\"; 155,5; 73,2; 69,9; 20,6; 114,3; 50,6; 48,1; 37,3; 18,3; 11; 2\"; 165,1; 92; 84,1; 127,0; 63,5; 60; 12; 2.1/2\"; 190,5; 104,7; 100,1; 149,4; 76,2; 72,1; 44,5; 14,2; 16; 3\"; 209,6; 127; 117,4; 168,2; 92,2; 87,9; 46; 19; 4\"; 254; 157,2; 146,1; 200,2; 117,6; 113; 47,8; 27; 6\"; 317,5; 215,9; 206,3; 22,4; 269,8; 171,5; 166,9; 7,9; 43; 8\"; 381; 260,4; 41,2; 25,4; 330,2; 222,3; 217,2; 55,6; 11,2; 61"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para flange; em Aço Carbono ASTM A 105;; 2.; O ressalto da face de 1,6mm está incluso na espessura B e na altura N; do flange;; 3.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 4.; de Teste de Pressão Hidrostática;; 5.; de Pressão e Temperatura de Serviço;; 6.; de Dimensões dos Prisioneiros;; 7.; Veja Procedimento; para Aperto dos Parafusos;; 8.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 9.; Veja Resistência; à Corrosão dos materiais da conexão;; 10.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-reducao-ANSI-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_reducao_ANSI.html",
    "sourcePages": [
      {
        "title": "Flange De Redução 150-2500 Lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_reducao_ANSI_150-2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F3XX"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN"
          }
        ]
      },
      {
        "title": "REFERÊNCIAS SOBRE DIMENSÕES",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.); (mm)"
          }
        ]
      },
      {
        "title": "DIÂMETRO EXTERNO, ESPESSURA, FACEAMENTO E GABARITO DE FURAÇÃO",
        "rows": [
          {
            "label": "Dados",
            "value": "Todas estas dimensôes correspondem exatamente com as mesmas do flange normal do qual a redução é feita"
          }
        ]
      },
      {
        "title": "DIÂMETRO E ALTURA DO PESCOÇO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para flanges de redução tipo sobreposto e roscado, independente do grau de redução, o diâmetro do pescoço na base (m) e a altura do mesmo (h 1 ) são as mesmas de um flange normal do mesmo tipo e para a mesma pressão, porém um diâmetro nominal menor do que o diâmetro do qual a redução será feita. Para flange de redução de pescoço de solda de topo as dimensões do pescoço são as mesmas de um flange normal da mesma classe de pressão, do diâmetro nominal para o qual a redução é feita."
          }
        ]
      },
      {
        "title": "FURO CENTRAL",
        "rows": [
          {
            "label": "Dados",
            "value": "O diâmetro interno de flanges de redução tipo sobreposto é igual ao diâmetro interno de flanges normais do diâmetro nominal para o qual a redução é feita.; Flanges de redução com rosca da classe 150 lbs, não necessitam encaixe. Nas classes 300 lbs e mais a profundidade do encaixe é de 1/4\" para roscas até 2\", e 3/8\" para roscas de 2.1/2\" e maior. Os diâmetros dos encaixes correspondem com os dos flanges normais."
          }
        ]
      },
      {
        "title": "MENOR FURO CENTRAL",
        "rows": [
          {
            "label": "Dados",
            "value": "Os menores diâmetros nominais para os quais flanges com pescoço podem ser furados, constam na tabela ao lado. Para reduções para diâmetro menor fornecemos FLANGES CEGOS com furo central ou rosca correspondente ao diâmetro nominal para o qual a redução é feita.; 1/2\"; 11.1; 3/4\"; 12,7; 1\"; 14,3; 1.1/4\"; 15,9; 1.1/2\"; 17,5; 2\"; 19,0; 2.1/2\"; 22,2; 3\"; 23,8; 3.1/2\"; 4\"; 5\"; 6\"; 25,4; 8\"; 28,6; 10\"; 12; 30,2; 12\"; 31,8; 14\"; 34,9; 16\"; 16; 36,5; 18\"; 39,7; 20\"; 20; 42,9; 22\"; 46,0; 24\"; 47,6"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 2.; de Teste de Pressão Hidrostática;; 3.; de Pressão e Temperatura de Serviço;; 4.; de Dimensões dos Prisioneiros;; 5.; Veja Procedimento; para Aperto dos Parafusos;; 6.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 7.; Veja Resistência; à Corrosão dos materiais da conexão;; 8.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "flanges-conexoes-flg-reducao-ANSI-150-2500-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_flg_reducao_ANSI_150-2500.html",
    "sourcePages": [
      {
        "title": "Flange De Redução 150-2500 Lbs em aço e ligas norma ANSI B16.5",
        "url": "http://www.valaco.com.br/produtos/conexoes_flg_reducao_ANSI_150-2500.html"
      }
    ],
    "summary": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea ...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "F3XX"
          }
        ]
      },
      {
        "title": "Materiais:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Aço; Carbono ASTM A 181 Gr. I;; Carbono ASTM A 105;; - Outras; Ligas Sob Consulta;; Tipos de faceamento:; - Com; Ressalto (RF - Raised Face);; - Plano; (FF - Flat Face);; - RTJ; (Ring Type Joint);; - Macho; e Fêmea Pequeno;; e Fêmea Grande;; Duplo e Canal Pequeno;; Duplo e Canal Grande;; Tipos de acabamento da face de Junção:; - Liso;; - Ranhura; Standard;; Espiral;; Tipo 125 RMS;; Concêntrica."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "DN"
          }
        ]
      },
      {
        "title": "REFERÊNCIAS SOBRE DIMENSÕES",
        "rows": [
          {
            "label": "Dados",
            "value": "(pol.); (mm)"
          }
        ]
      },
      {
        "title": "DIÂMETRO EXTERNO, ESPESSURA, FACEAMENTO E GABARITO DE FURAÇÃO",
        "rows": [
          {
            "label": "Dados",
            "value": "Todas estas dimensôes correspondem exatamente com as mesmas do flange normal do qual a redução é feita"
          }
        ]
      },
      {
        "title": "DIÂMETRO E ALTURA DO PESCOÇO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para flanges de redução tipo sobreposto e roscado, independente do grau de redução, o diâmetro do pescoço na base (m) e a altura do mesmo (h 1 ) são as mesmas de um flange normal do mesmo tipo e para a mesma pressão, porém um diâmetro nominal menor do que o diâmetro do qual a redução será feita. Para flange de redução de pescoço de solda de topo as dimensões do pescoço são as mesmas de um flange normal da mesma classe de pressão, do diâmetro nominal para o qual a redução é feita."
          }
        ]
      },
      {
        "title": "FURO CENTRAL",
        "rows": [
          {
            "label": "Dados",
            "value": "O diâmetro interno de flanges de redução tipo sobreposto é igual ao diâmetro interno de flanges normais do diâmetro nominal para o qual a redução é feita.; Flanges de redução com rosca da classe 150 lbs, não necessitam encaixe. Nas classes 300 lbs e mais a profundidade do encaixe é de 1/4\" para roscas até 2\", e 3/8\" para roscas de 2.1/2\" e maior. Os diâmetros dos encaixes correspondem com os dos flanges normais."
          }
        ]
      },
      {
        "title": "MENOR FURO CENTRAL",
        "rows": [
          {
            "label": "Dados",
            "value": "Os menores diâmetros nominais para os quais flanges com pescoço podem ser furados, constam na tabela ao lado. Para reduções para diâmetro menor fornecemos FLANGES CEGOS com furo central ou rosca correspondente ao diâmetro nominal para o qual a redução é feita.; 1/2\"; 11.1; 3/4\"; 12,7; 1\"; 14,3; 1.1/4\"; 15,9; 1.1/2\"; 17,5; 2\"; 19,0; 2.1/2\"; 22,2; 3\"; 23,8; 3.1/2\"; 4\"; 5\"; 6\"; 25,4; 8\"; 28,6; 10\"; 12; 30,2; 12\"; 31,8; 14\"; 34,9; 16\"; 16; 36,5; 18\"; 39,7; 20\"; 20; 42,9; 22\"; 46,0; 24\"; 47,6"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela; de Tolerâncias para Flanges ANSI;; 2.; de Teste de Pressão Hidrostática;; 3.; de Pressão e Temperatura de Serviço;; 4.; de Dimensões dos Prisioneiros;; 5.; Veja Procedimento; para Aperto dos Parafusos;; 6.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 7.; Veja Resistência; à Corrosão dos materiais da conexão;; 8.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "conexoes-conexoes-ap-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_ap.html",
    "sourcePages": [
      {
        "title": "Conexões com extremidade para solda Socketwelding (SW) para Alta Pressão norma ANSI B16.11",
        "url": "http://www.valaco.com.br/produtos/conexoes_ap_sw.html"
      },
      {
        "title": "Conexões para Alta Pressão Rosca NPT e BSP | Rosca",
        "url": "http://www.valaco.com.br/produtos/conexoes_ap_rsc.html"
      }
    ],
    "summary": "Tê; 90°; 90° de Redução; 45°; Propriedades; 3.000; lbs; 6.000; Cruzeta; Luva; Luva de Redução; Meia Luva; Cap; União; Cotovelo 90°; Cotovelo 45°",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "Conexões com extremidade para solda Socketwelding (SW) para Alta Pressão norma ANSI B16.11",
        "rows": [
          {
            "label": "Dados",
            "value": "(SW)"
          }
        ]
      },
      {
        "title": "SOCKETWELDING (SW) PARA ALTA PRESSÃO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tê; 90°; 90° de Redução; 45°; Propriedades; 3.000; lbs; 6.000; Cruzeta; Luva; Luva de Redução; Meia Luva; Cap; União; Cotovelo 90°; Cotovelo 45°"
          }
        ]
      },
      {
        "title": "ROSCADAS PARA ALTA PRESSÃO",
        "rows": [
          {
            "label": "Dados",
            "value": "Tê; 90°; 90° de Redução; 45°; Propriedades; 2.000; lbs; 3.000; 6.000; Cruzeta; Luva; Luva de Redução; Meia Luva; Cap; Cotovelo 90; ° Macho-Fêmea; Cotovelo 90°; Cotovelo 45°; Bucha de Redução; Bujão; com Cabeça Sextavada; com Cabeça Quadrada; Niple Sextavado; União"
          }
        ]
      }
    ]
  },
  "conexoes-conexoes-fm-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_fm.html",
    "sourcePages": [
      {
        "title": "Curva 90 Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_curva_90_femea.html"
      },
      {
        "title": "Curva 90 Fêmea Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_curva_90_femea.html"
      },
      {
        "title": "Curva 90 Macho Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_curva_90_macho_femea.html"
      },
      {
        "title": "Curva 90 Macho Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_curva_90_macho.html"
      },
      {
        "title": "Curva 45 FêmeaTupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_curva_45_femea.html"
      },
      {
        "title": "Curva 45 Macho-Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_curva_45_macho_femea.html"
      },
      {
        "title": "Curva de Retorno Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_curva_retorno.html"
      },
      {
        "title": "Cotovelo 90 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_cotovelo_90.html"
      },
      {
        "title": "Cotovelo 90 Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_cotovelo_90.html"
      },
      {
        "title": "Cotovelo 90 Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_cotovelo_90.html"
      },
      {
        "title": "Cotovelo 90 Macho Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_cotovelo_90_macho_femea.html"
      },
      {
        "title": "Cotovelo 90 Macho Fêmea Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_cotovelo_90_macho_femea.html"
      },
      {
        "title": "Cotovelo 90 Macho Fêmea Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_cotovelo_90_macho_femea.html"
      },
      {
        "title": "Cotovelo 45 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_cotovelo_45.html"
      },
      {
        "title": "Cotovelo 45 Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_cotovelo_45.html"
      },
      {
        "title": "Cotovelo 45 Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_cotovelo_45.html"
      },
      {
        "title": "Tampão Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_tampao.html"
      },
      {
        "title": "Tampão Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_tampao.html"
      },
      {
        "title": "Tampão Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_tampao.html"
      },
      {
        "title": "Flange com Sextavado Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_flange.html"
      },
      {
        "title": "União Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_uniao.html"
      },
      {
        "title": "União Assento em Bronze Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_uniao.html"
      },
      {
        "title": "União Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_uniao.html"
      },
      {
        "title": "Tê 90 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_te_90.html"
      },
      {
        "title": "Tê 90 Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_te_90.html"
      },
      {
        "title": "Tê 90 Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_te_90.html"
      },
      {
        "title": "Tê 90 de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_te_90_reducao.html"
      },
      {
        "title": "Tê 90 de Redução Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_te_90_reducao.html"
      },
      {
        "title": "Tê 90 de Redução Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_te_90_reducao.html"
      },
      {
        "title": "Tê 45 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_te_45.html"
      },
      {
        "title": "Cruzeta Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_cruzeta.html"
      },
      {
        "title": "Cruzeta Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_cruzeta.html"
      },
      {
        "title": "Niple Duplo Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_niple.html"
      },
      {
        "title": "Niple Duplo Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_niple.html"
      },
      {
        "title": "Niple Duplo de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_niple_reducao.html"
      },
      {
        "title": "Luva Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_luva.html"
      },
      {
        "title": "Luva Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_luva.html"
      },
      {
        "title": "Luva Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_luva.html"
      },
      {
        "title": "Luva de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_luva_reducao.html"
      },
      {
        "title": "Luva de Redução Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_luva_reducao.html"
      },
      {
        "title": "Luva de Redução Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptap_luva_reducao.html"
      },
      {
        "title": "Luva Macho-Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_luva_macho_femea.html"
      },
      {
        "title": "Luva de Redução Macho-Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_luva_reducao_macho_femea.html"
      },
      {
        "title": "Bucha de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_bucha.html"
      },
      {
        "title": "Bucha de Redução Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_bucha.html"
      },
      {
        "title": "Bujão Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_bsp_bujao.html"
      },
      {
        "title": "Bujão Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "url": "http://www.valaco.com.br/produtos/conexoes_fm_nptmp_bujao.html"
      }
    ],
    "summary": "Galvanizado; Polegada; Milímetro; 3/8\"; 10; 48; 0,102; 1/2\"; 15; 55; 0,150; 3/4\"; 20; 69; 0,268; 1\"; 25; 58; 0,493; 1.1/4\"; 32; 105; 0,737; 1.1/2\"; 40; 116; 0,915; 2\"; 50; 140; 1,469; 2.1/2\"; 65; 176; 2,329; 3\"; 80; 2...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "47"
      }
    ],
    "technicalSections": [
      {
        "title": "Curva 90 Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Fêmea - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2; Diâmetro Nominal"
          }
        ]
      },
      {
        "title": "Peso Unitário (kg)",
        "rows": [
          {
            "label": "Dados",
            "value": "Galvanizado; Polegada; Milímetro; 3/8\"; 10; 48; 0,102; 1/2\"; 15; 55; 0,150; 3/4\"; 20; 69; 0,268; 1\"; 25; 58; 0,493; 1.1/4\"; 32; 105; 0,737; 1.1/2\"; 40; 116; 0,915; 2\"; 50; 140; 1,469; 2.1/2\"; 65; 176; 2,329; 3\"; 80; 205; 3,724; 4\"; 100; 260; 6,680"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Curva 90 Fêmea Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Fêmea - NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2033; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 55; 0,333; 3/4\"; 20; 69; 0,537; 1\"; 25; 85; 0,833; 1.1/4\"; 32; 105; 1,382; 1.1/2\"; 40; 116; 1,845; 2\"; 50; 140; 2,960; 2.1/2\"; 65; 176; 5,112; 3\"; 80; 205; 8,068; 4\"; 100; 260; 14,890"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Curva 90 Macho Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Macho Fêmea - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 40; 36; 0,056; 1/8\"; 10; 48; 42; 0,101; 1/2\"; 15; 55; 0,138; 3/4\"; 20; 69; 60; 0,210; 1\"; 25; 58; 75; 0,341; 1.1/4\"; 32; 105; 95; 0,658; 1.1/2\"; 116; 0,752; 2\"; 50; 140; 130; 1,224; 2.1/2\"; 65; 176; 165; 2,320; 3\"; 80; 205; 190; 3,306; 4\"; 100; 260; 245; 5,718"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Curva 90 Macho Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Macho - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T3; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 3/8\"; 10; 42; 0,065; 1/2\"; 15; 48; 0,109; 3/4\"; 20; 60; 0,170; 1\"; 25; 75; 0,360; 1.1/4\"; 32; 95; 0,607; 1.1/2\"; 40; 105; 0,780; 2\"; 50; 130; 1,375; 2.1/2\"; 65; 165; 2,400; 3\"; 80; 190; 3,215; 4\"; 100; 245; 5,842; 6\"; 150; 290; 14,276"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Curva 45 FêmeaTupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "45° Fêmea- BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T41; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 36; 0,145; 3/4\"; 20; 43; 0,230; 1\"; 25; 51; 0,369; 1.1/4\"; 32; 64; 0,651; 1.1/2\"; 40; 68; 0,824; 2\"; 50; 81; 1,499"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Curva 45 Macho-Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "45° Macho-Fêmea - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T40; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 36; 30; 0,110; 3/4\"; 20; 43; 0,183; 1\"; 25; 51; 42; 0,275; 1.1/4\"; 32; 64; 54; 0,433; 1.1/2\"; 40; 68; 58; 0,528; 2\"; 50; 81; 70; 0,827; 2.1/2\"; 65; 99; 86; 1,314; 3\"; 80; 113; 100; 2,078"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Curva de Retorno Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Retorno - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T60; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 38; 0,164; 3/4\"; 20; 50; 0,326; 1\"; 25; 64; 0,550; 1.1/4\"; 32; 76; 0,846; 1.1/2\"; 40; 89; 1,244; 2\"; 102; 1,801"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 90 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T90; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 21; 0,049; 3/8\"; 10; 25; 0,065; 1/2\"; 15; 28; 0,099; 3/4\"; 20; 33; 0,153; 1\"; 38; 0,209; 1.1/4\"; 32; 45; 0,336; 1.1/2\"; 40; 50; 0,440; 2\"; 58; 0,658; 2.1/2\"; 65; 69; 1,246; 3\"; 80; 78; 1,617; 4\"; 100; 96; 2,816; 6\"; 150; 131; 8,359"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 90 Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° - NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1015; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 28,5; 0,116; 3/4\"; 20; 33,3; 0,205"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 90 Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° - NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2015; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 23,9; 0,094; 3/8\"; 10; 26,9; 0,131; 1/2\"; 15; 31,8; 0,225; 3/4\"; 20; 36,6; 0,333; 1\"; 25; 41,4; 0,496; 1.1/4\"; 32; 49,3; 0,828; 1.1/2\"; 40; 54,1; 1,044; 2\"; 50; 63,5; 1,847; 2.1/2\"; 65; 74,7; 2,625; 3\"; 80; 85,9; 4,196; 4\"; 100; 114,0; 8,152; 6\"; 150; 159,0; 18,650"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 90 Macho Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Macho Fêmea - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T92; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 21; 28; 0,043; 3/8\"; 10; 25; 32; 0,059; 1/2\"; 15; 37; 0,102; 3/4\"; 20; 33; 43; 0,146; 1\"; 38; 52; 0,244; 1.1/4\"; 45; 60; 0,371; 1.1/2\"; 40; 50; 65; 0,436; 2\"; 58; 74; 0,682; 2.1/2\"; 69; 88; 1,242; 3\"; 80; 78; 98; 1,754; 4\"; 100; 96; 118; 2,470"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 90 Macho Fêmea Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Macho Fêmea - NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1030; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 28,5; 41,2; 0,122; 3/4\"; 20; 33,3; 48,0; 0,179"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 90 Macho Fêmea Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° Macho Fêmea - NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2030; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 3/8\"; 10; 26,9; 41,4; 0,119; 1/2\"; 15; 31,8; 50,8; 0,173; 3/4\"; 20; 36,6; 55,6; 0,286; 1\"; 25; 65,0; 0,449; 1.1/4\"; 32; 49,3; 73,2; 0,682; 1.1/2\"; 40; 54,1; 79,5; 0,926; 2\"; 50; 63,5; 93,7; 1,475; 2.1/2\"; 65; 74,7; 114,3; 2,568; 3\"; 80; 85,9; 130,3; 4,021"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 45 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "45° - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T120; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 3/8\"; 10; 20; 0,050; 1/2\"; 15; 22; 0,067; 3/4\"; 25; 0,114; 1\"; 28; 0,170; 1.1/4\"; 32; 33; 0,267; 1.1/2\"; 40; 36; 0,339; 2\"; 50; 43; 0,477; 2.1/2\"; 65; 0,835; 3\"; 80; 55; 1,160; 4\"; 100; 66; 2,369; 6\"; 150; 85; 5,863"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 45 Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "45° - NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1025; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 22,4; 0,133; 3/4\"; 20; 24,9; 0,185"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cotovelo 45 Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "45° - NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2025; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 20,6; 0,080; 3/8\"; 10; 22,4; 0,125; 1/2\"; 15; 25,4; 0,206; 3/4\"; 20; 28,7; 0,302; 1\"; 25; 33,3; 0,458; 1.1/4\"; 32; 38,1; 0,705; 1.1/2\"; 40; 42,9; 0,974; 2\"; 50; 50,8; 1,504; 2.1/2\"; 65; 57,2; 2,354; 3\"; 80; 63,5; 3,686; 4\"; 100; 72,0; 6,000; 6\"; 150; 90,0; 12,974"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tampão Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T301; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 18; 0,022; 1/8\"; 10; 0,030; 1/2\"; 15; 23; 0,045; 3/4\"; 20; 25; 0,078; 1\"; 29; 0,100; 1.1/4\"; 32; 31; 0,154; 1.1/2\"; 40; 0,210; 2\"; 50; 38; 0,301; 2.1/2\"; 65; 42; 0,479; 3\"; 80; 46; 0,736; 4\"; 100; 56; 1,372"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tampão Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1055; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 22,1; 0,070; 3/4\"; 20; 24,6; 0,095"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tampão Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2055; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 19,8; 0,045; 1/8\"; 10; 21,1; 0,069; 1/2\"; 15; 24,9; 0,107; 3/4\"; 20; 27,4; 0,171; 1\"; 25; 32,0; 0,279; 1.1/4\"; 32; 35,1; 0,420; 1.1/2\"; 40; 36,3; 0,509; 2\"; 50; 42,7; 0,818; 2.1/2\"; 65; 52,3; 1,396; 3\"; 80; 55,1; 2,157; 4\"; 100; 61,2; 3,630; 6\"; 150; 69,0; 7,243"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Flange com Sextavado Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "com Sextavado - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T321; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensões",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "Galvanizado; Polegada; Milímetro; 1/4\"; 70; 11; 18; 0,144; 3/8\"; 10; 75; 22; 0,165; 1/2\"; 15; 80; 26; 0,186; 3/4\"; 20; 90; 16; 32; 0,273; 1\"; 25; 100; 19; 39; 0,340; 1.1/4\"; 120; 21; 49; 0,533; 1.1/2\"; 40; 130; 55; 0,667; 2\"; 50; 140; 69; 0,891; 2.1/2\"; 65; 160; 30; 84; 1,319; 3\"; 190; 33; 98; 1,975; 4\"; 210; 124; 2,780; 6\"; 150; 265; 43; 13; 177; 4,853"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "União Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T330; / T340 / T342; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg) Galvanizado; Assento; Plano; Cônico; Polegada; Milímetro; S(máx.); S1; Ferro; Bronze; 1/4\"; 42; 27; 17; 0,038; 0,067; 0,071; 1/8\"; 10; 45; 32; 20; 0,107; 0,100; 0,103; 1/2\"; 15; 48; 41; 25; 0,169; 0,160; 0,175; 3/4\"; 52; 50; 0,268; 0,269; 0,282; 1\"; 58; 55; 39; 0,352; 0,350; 0,354; 1.1/4\"; 65; 70; 49; 0,674; 0,628; 0,638; 1.1/2\"; 40; 75; 0,696; 0,734; 2\"; 78; 90; 69; 1,132; 1,136; 1,191; 2.1/2\"; 85; 110; 1,708; 1,717; 1,790; 3\"; 80; 95; 130; 98; 2,584; 2,553; 2,575; 4\"; 100; 150; 124; 3,577; 3,494; 3,680"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP;; Figura T330: Assento; Plano de Ferro;; Figura T340: Assento; Cônico de Ferro;; Figura T342: Assento; Cônico de Bronze.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "União Assento em Bronze Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "UNIÃO",
        "rows": [
          {
            "label": "Dados",
            "value": "- 150 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1070; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Unitário (kg); Galvanizado; Polegada; Milímetro; (mín.); S1; 1/2\"; 15; 43,5; 37,0; 25,4; 0,180; 3/4\"; 20; 49,5; 31,6; 0,294"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT;; Assento Cônico de Bronze.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "União Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "UNIÃO",
        "rows": [
          {
            "label": "Dados",
            "value": "- 300 LBS"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2070; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Unitário (kg); Galvanizado; Polegada; Milímetro; S(máx.); S1; 1/4\"; 39,5; 34,0; 19,0; 0,144; 1/8\"; 10; 43,5; 38,0; 23,0; 0,204; 1/2\"; 15; 46,0; 44,5; 27,0; 0,281; 3/4\"; 20; 54,0; 54,5; 0,523; 1\"; 25; 58,5; 63,0; 41,0; 0,645; 1.1/4\"; 32; 67,5; 76,5; 50,0; 0,941; 1.1/2\"; 40; 72,5; 83,5; 57,0; 1,375; 2\"; 50; 82,0; 100,5; 70,0; 1,897; 2.1/2\"; 65; 84,5; 120,0; 85,0; 3,142; 3\"; 80; 104,0; 136,5; 4,471; 4\"; 100; 113,5; 178,0; 132,0; 8,481"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT;; Assento Cônico de Bronze.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 90 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° - BSP; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T130; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 21; 0,071; 3/8\"; 10; 25; 0,094; 1/2\"; 15; 28; 0,138; 3/4\"; 20; 33; 0,197; 1\"; 38; 0,311; 1.1/4\"; 32; 45; 0,442; 1.1/2\"; 40; 50; 0,542; 2\"; 58; 0,960; 2.1/2\"; 65; 69; 1,693; 3\"; 80; 78; 2,241; 4\"; 100; 96; 4,141; 6\"; 150; 131; 10,687"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 90 Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° - NPT 150 Lbs; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1060; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 28,5; 0,177; 3/4\"; 20; 33,3; 0,285"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 90 Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° - NPT 300 Lbs; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2060; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 23,9; 0,119; 3/8\"; 10; 26,9; 0,183; 1/2\"; 15; 31,8; 0,313; 3/4\"; 20; 36,6; 0,484; 1\"; 25; 41,4; 0,714; 1.1/4\"; 32; 49,3; 1,077; 1.1/2\"; 40; 54,1; 1,375; 2\"; 50; 63,5; 2,431; 2.1/2\"; 65; 74,7; 3,821; 3\"; 80; 85,9; 5,599; 4\"; 100; 114,0; 10,445; 6\"; 150; 159,0; 25,300"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 90 de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° de Redução - BSP; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T130R; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; (1) x (2); Milímetro; 3/8\"; x 1/4\"; 10 x 8; 23; 24; 0,070; 1/2\"; 15 x 8; 0,090; x 3/8\"; 15 x 10; 26; 0,117; 3/4\"; 20 x 10; 28; 0,155; x 1/2\"; 20 x 15; 30; 31; 0,174; 1\"; 25 x 10; 32; 0,192; 25 x 15; 34; 0,226; x 3/4\"; 25 x 20; 35; 36; 0,273; 1.1/4\"; 32 x 15; 38; 0,275; 32 x 20; 41; 0,322; x 1\"; 32 x 25; 40; 42; 0,364; 1.1/2\"; 40 x 15; 0,365; 40 x 20; 44; 40 x 25; 46; 0,446; x 1.1/4\"; 40 x 32; 48; 0,540; 2\"; 50 x 15; 0,523; 50 x 20; 50; 0,524; 50 x 25; 52; 0,621; 50 x 32; 54; 0,659; x 1.1/2\"; 50 x 40; 55; 0,806; 2.1/2\"; 65 x 25; 47; 60; 0,924; 65 x 32; 62; 1,152; 65 x 40; 63; 1.248; x 2\"; 65 x 50; 61; 66; 1,443; 3\"; 80 x 25; 51; 67; 1,247; 80 x 32; 70; 1,368; 80 x 40; 58; 71; 1,444; 80 x 50; 64; 73; 1,683; x 2.1/2\"; 80 x 65; 72; 76; 1.876; 4\"; 100 x 50; 86; 2,268; x 3\"; 100 x 80"
          },
          {
            "label": "Dados 2",
            "value": "84; 92; 3,248"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 90 de Redução Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° de Redução - NPT 150 Lbs; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1065R; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; (1) x (2); Milímetro; 3/4\"; x 1/2\"; 20 x 15; 30,5; 31,0; 0,247"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 90 de Redução Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "90° de Redução - NPT 300 Lbs; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2065R; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; (1) x (2); Milímetro; 1/2\"; x 1/4\"; 15 x 8; 28,0; 29,0; 0,230; x 3/8\"; 15 x 10; 30,2; 0,257; 3/4\"; 20 x 10; 30,0; 34,0; 0,347; x 1/2\"; 20 x 15; 33,3; 35,1; 0,393; 1\"; 25 x 15; 36,6; 38,1; 0,561; x 3/4\"; 25 x 20; 39,6; 0,590; 1.1/4\"; 32 x 20; 41,4; 44,5; 0,855; x 1\"; 32 x 25; 46,0; 0,923; 1.1/2\"; 40 x 25; 50,8; 1,128; x 1.1/4\"; 40 x 32; 52,3; 1,289; 2\"; 50 x 32; 54,1; 58,7; 1,809; x 1.1/2\"; 50 x 40; 57,2; 60,5; 1,939; 2.1/2\"; 65 x 40; 62,0; 66,8; 2,863; x 2\"; 65 x 50; 68,3; 70,0; 3,132; 3\"; 80 x 50; 71,4; 79,5; 4,347; x 2.1/2\"; 80 x 65; 77,7; 84,1; 4,781; 4\"; 100 x 50; 86,0; 97,0; 7,462; x 3\"; 100 x 80; 92,0; 100,0; 7,983; 6\"; X 4\"; 150 X 100; 112,0; 125,4; 16,650"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Tê 45 Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "45° - BSP; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T165; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 59; 43; 0,146; 3/4\"; 20; 70; 52; 0,240; 1\"; 25; 83; 61; 0,388; 1.1/4\"; 32; 100; 74; 0,558; 1.1/2\"; 40; 111; 0,789; 2\"; 50; 131; 1,220; 2.1/2\"; 65; 161; 123; 1,806; 3\"; 80; 184; 145; 2,852; 4\"; 228; 182; 5,053"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cruzeta Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T180; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 21; 0,077; 3/8\"; 10; 25; 0,101; 1/2\"; 15; 28; 0,175; 3/4\"; 20; 33; 0,232; 1\"; 38; 0,385; 1.1/4\"; 32; 45; 0,557; 1.1/2\"; 40; 50; 0,761; 2\"; 58; 1,057; 2.1/2\"; 65; 69; 1,850; 3\"; 80; 78; 2.515; 4\"; 100; 97; 4.980"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Cruzeta Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1068; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 28,5; 0,231; 3/4\"; 20; 33,3; 0,373"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Niple Duplo Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "Duplo - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T280; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; S (máx.); 1/4\"; 36; 19; 0,031; 1/8\"; 10; 38; 22; 0,042; 1/2\"; 15; 44; 27; 0,065; 3/4\"; 20; 47; 32; 0,104; 1\"; 25; 53; 41; 0,175; 1.1/4\"; 57; 50; 0,232; 1.1/2\"; 40; 59; 55; 0,263; 2\"; 68; 70; 0,467; 2.1/2\"; 65; 75; 85; 0,726; 3\"; 80; 83; 100; 1,058; 4\"; 95; 130; 1,961; 6\"; 150; 110; 180; 4,220"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Niple Duplo Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "Duplo - NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2001; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; S (máx.); 1/4\"; 41,0; 19,0; 0,039; 1/8\"; 10; 42,0; 22,0; 0,056; 1/2\"; 15; 53,0; 27,0; 0,099; 3/4\"; 20; 32,0; 0,134; 1\"; 25; 64,0; 0,265; 1.1/4\"; 32; 65,0; 50,0; 0,371; 1.1/2\"; 40; 67,0; 55,0; 0,474; 2\"; 50; 70,0; 0,757; 2.1/2\"; 65; 100,0; 85,0; 1,415; 3\"; 80; 102,0; 2,156; 4\"; 100; 110,0; 130,0; 3,602; 6\"; 150; 125,0; 180,0; 7,297"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Niple Duplo de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "Duplo de Redução - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T245; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; S (máx.); 3/8\"; x 1/4\"; 10 x 8; 38; 19; 0,037; 1/2\"; 15 x 8; 44; 22; 0,052; x 3/8\"; 15 x 10; 0,053; 3/4\"; 20 x 10; 47; 30; 0,085; x 1/2\"; 20 x 15; 0,089; 1\"; 25 x 15; 56; 36; 0,129; x 3/4\"; 25 x 20; 53; 0,126; 1.1/4\"; 32 x 20; 57; 46; 0,213; x 1\"; 32 x 25; 0,208; 1.1/2\"; 40 x 20; 59; 50; 0,224; 40 x 25; 0,232; x 1.1/4\"; 40 x 32; 0,246; 2\"; 50 x 25; 68; 65; 0,402; 50 x 32; 0,412; x 1.1/2\"; 50 x 40; 0,415; 2.1/2\"; x 2\"; 65 x 50; 75; 80; 0,612; 3\"; 80 x 50; 83; 95; 0,937; x 2.1/2\"; 80 x 65; 1,113"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T270; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 27; 0,030; 3/8\"; 10; 30; 0,042; 1/2\"; 15; 36; 0,058; 3/4\"; 20; 39; 0,090; 1\"; 25; 45; 0,140; 1.1/4\"; 32; 50; 0,195; 1.1/2\"; 40; 55; 0,255; 2\"; 65; 0,378; 2.1/2\"; 74; 0,720; 3\"; 80; 1,067; 4\"; 100; 94; 1,662; 6\"; 150; 120; 4,275"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1045; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 34,0; 0,100; 3/4\"; 20; 38,6; 0,157"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2045; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/4\"; 35,1; 0,073; 3/8\"; 10; 41,4; 0,114; 1/2\"; 15; 47,8; 0,200; 3/4\"; 20; 54,1; 0,286; 1\"; 25; 60,5; 0,533; 1.1/4\"; 32; 73,2; 0,687; 1.1/2\"; 40; 0,855; 2\"; 50; 92,2; 1,421; 2.1/2\"; 65; 104,9; 2,303; 3\"; 80; 3,120; 4\"; 100; 120,0; 5,408; 6\"; 150; 150,0; 11,980"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T240; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 3/8\"; x 1/4\"; 10 x 8; 30; 0,036; 1/2\"; 15 x 8; 36; 0,055; x 3/8\"; 15 x 10; 0,063; 3/4\"; 20 x 10; 39; 0,090; x 1/2\"; 20 x 15; 0,091; 1\"; 25 x 15; 45; 0,128; x 3/4\"; 25 x 20; 0,139; 1.1/4\"; 32 x 15; 50; 0,200; 32 x 20; 0,205; x 1\"; 32 x 25; 0,213; 1.1/2\"; 40 x 20; 55; 0,268; 40 x 25; 0,239; x 1.1/4\"; 40 x 32; 0,260; 2\"; 50 x 25; 65; 0,348; 50 x 32; 0,387; x 1.1/2\"; 50 x 40; 0,401; 2.1/2\"; 65 x 32; 74; 0,659; 65 x 40; 0,611; x 2\"; 65 x 50; 0,573; 3\"; 80 x 40; 80; 0,816; 80 x 50; 0,900; x 2.1/2\"; 80 x 65; 0,899; 4\"; 100 x 50; 94; 1,516; 100 x 65; 1,539; x 3\"; 100 x 80; 1,656"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva de Redução Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução - NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1050R; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 3/4\"; x 1/2\"; 20 x 15; 36,6; 0,143"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva de Redução Tupy Rosca NPT 300 Lbs para Alta Pressão em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução - NPT 300 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T2050R; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; x 1/4\"; 15 x 8; 42,9; 0,133; x 3/8\"; 15 x 10; 0,146; 3/4\"; 20 x 10; 44,5; 0,188; x 1/2\"; 20 x 15; 0,210; 1\"; 25 x 15; 50,8; 0,306; x 3/4\"; 25 x 20; 0,325; 1.1/4\"; 32 x 20; 60,5; 0,490; x 1\"; 32 x 25; 0,528; 1.1/2\"; 40 x 25; 68,3; 0,646; x 1.1/4\"; 40 x 32; 0,733; 2\"; 50 x 32; 81,0; 1,090; x 1.1/2\"; 50 x 40; 1,160; 2.1/2\"; 65 x 40; 93,7; 1,693; x 2\"; 65 x 50; 1,909; 3\"; 80 x 50; 103,1; 2,447; x 2.1/2\"; 80 x 65; 2,793; 4\"; 100 x 65; 117,0; 3,964; x 3\"; 100 x 80; 4,486; 6\"; x 4\"; 150 x 100; 137,0; 9,175"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva Macho-Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "Macho-Fêmea - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T529a; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 1/2\"; 15; 43; 0,061; 3/4\"; 20; 48; 0,100; 1\"; 25; 55; 0,165; 1.1/4\"; 32; 60; 0,245"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Luva de Redução Macho-Fêmea Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução Macho-Fêmea - BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T246; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão em",
        "rows": [
          {
            "label": "Dados",
            "value": "mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; 3/8\"; x 1/4\"; 10 x 8; 35; 0,036; 1/2\"; 15 x 8; 43; 0,060; x 3/8\"; 15 x 10; 3/4\"; 20 x 10; 48; 0,085; x 1/2\"; 20 x 15; 0,090; 1\"; 25 x 15; 55; 0,140; x 3/4\"; 25 x 20; 0,137; 1.1/4\"; 32 x 20; 60; 0,203; x 1\"; 32 x 25; 0,215; 1.1/2\"; 40 x 25; 63; 0,266; x 1.1/4\"; 40 x 32; 0,273"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Bucha de Redução Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução - BSP; Bucha"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T241; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; S (máx.); 3/8\"; x 1/4\"; 10 x 8; 20; 19; 0,019; 1/2\"; 15 x 8; 24; 22; 0,034; x 3/8\"; 15 x 10; 0,024; 3/4\"; 20 x 8; 26; 30; 0,081; 20 x 10; 0,064; x 1/2\"; 20 x 15; 0,055; 1\"; 25 x 10; 29; 36; 0,120; 25 x 15; 0,103; x 3/4\"; 25 x 20; 0,086; 1.1/4\"; 32 x 15; 31; 46; 0,193; 32 x 20; 0,184; x 1\"; 32 x 25; 0,142; 1.1/2\"; 40 x 15; 50; 0,251; 40 x 20; 0,248; 40 x 25; 0,202; x 1.1/4\"; 40 x 32; 0,128; 2\"; 50 x 15; 35; 65; 0,387; 50 x 25; 0,410; 50 x 32; 0,351; x 1.1/2\"; 50 x 40; 0,290; 2.1/2\"; 65 x 25; 40; 80; 0,627; 65 x 32; 0,654; 65 x 40; x 2\"; 65 x 50; 0,482; 3\"; 80 x 40; 44; 95; 0,935; 80 x 50; 0,921; x 2.1/2\"; 80 x 65; 0,584; 4\"; 100 x 50; 51; 120; 1,653; 100 x 65; 1,687; x 3\"; 100 x 80; 1,436; 6\"; x 4\"; 150 x 100; 58; 175; 3,869"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Bucha de Redução Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução - NPT 150 Lbs; Bucha"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T1002R; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; C (mín.); S (mín.); 3/8\"; x 1/4\"; 10 x 8; 16,3; 17,3; 0,018; 1/2\"; 15 x 8; 19,0; 22,1; 0,035; x 3/8\"; 15 x 10; 0,029; 3/4\"; 20 x 10; 21,6; 29,2; 0,062; x 1/2\"; 20 x 15; 0,050; 1\"; 25 x 15; 25,5; 36,1; 0,105; x 3/4\"; 25 x 20; 0,083; 1.1/4\"; 32 x 20; 27,4; 44,7; 0,177; x 1\"; 32 x 25; 0,141; 1.1/2\"; 40 x 20; 30,5; 41,4; 0,216; 40 x 25; 29,0; 50,8; 0,228; x 1.1/4\"; 40 x 32; 0,147; 2\"; 50 x 25; 32,8; 49,5; 0,350; 50 x 32; 31,0; 63,0; 0,384; x 1.1/2\"; 50 x 40; 0,333; 2.1/2\"; 65 x 40; 38,4; 68,1; 0,587; x 2\"; 65 x 50; 36,6; 75,7; 0,479; 3\"; 80 x 50; 40,9; 83,3; 0,881; x 2.1/2\"; 80 x 65; 38,9; 98,0; 0,841; 4\"; 100 x 65; 46,2; 1,446; x 3\"; 100 x 80; 43,7; 117,3; 1,493; 6\"; x 4\"; 150 x 100; 60,0; 147,1; 3,668"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Bujão Tupy Rosca BSP 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- BSP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T291; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; S (máx.); 1/4\"; 20; 0,016; 3/8\"; 10; 0,018; 1/2\"; 15; 24; 11; 0,031; 3/4\"; 27; 17; 0,052; 1\"; 25; 30; 19; 0,087; 1.1/4\"; 32; 35; 22; 0,140; 1.1/2\"; 40; 36; 0,179; 2\"; 50; 45; 0,300; 2.1/2\"; 65; 51; 0,550; 3\"; 80; 57; 0,837; 4\"; 100; 71; 41; 1,722"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR; 6943, ISO; 49 e DIN; 2950;; Corpo em Ferro Maleável preto conforme; ISO"
          }
        ]
      },
      {
        "title": "5922 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ABNT; 6323;; Rosca BSP; conforme ISO; 7-1, DIN"
          }
        ]
      },
      {
        "title": "2999 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6414;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; BSP.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Bujão Tupy Rosca NPT 150 Lbs em Ferro Maleável Galvanizado ou Preto para água óleo gás",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT 150 Lbs"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "T291; Diâmetro; Nominal"
          }
        ]
      },
      {
        "title": "Dimensão",
        "rows": [
          {
            "label": "Dados",
            "value": "em mm"
          }
        ]
      },
      {
        "title": "Peso Unitário",
        "rows": [
          {
            "label": "Dados",
            "value": "(kg); Galvanizado; Polegada; Milímetro; S (máx.); 1/4\"; 20,0; 9,5; 0,015; 3/8\"; 10; 21,0; 11,0; 0,027; 1/2\"; 15; 26,0; 14,3; 0,046; 3/4\"; 20; 28,0; 16,0; 0,070; 1\"; 25; 34,0; 20,7; 0,127; 1.1/4\"; 32; 36,0; 23,8; 0,185; 1.1/2\"; 40; 38,0; 28,6; 0,259; 2\"; 50; 42,0; 33,4; 0,421; 2.1/2\"; 65; 54,0; 0,740; 3\"; 80; 58,0; 43,0; 1,358; 4\"; 100; 66,0; 50,0; 2,090; 6\"; 150; 76,0; 70,0; 5,355"
          }
        ]
      },
      {
        "title": "Dimensões conforme ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "NBR"
          }
        ]
      },
      {
        "title": "B 16.3 e ASME / ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.39;; Corpo em Ferro Maleável preto conforme"
          }
        ]
      },
      {
        "title": "A 197 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6590;; Proteção superficial por; galvanização; conforme ASTM"
          }
        ]
      },
      {
        "title": "A 153 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "6323;; Rosca NPT; conforme ANSI / ASME"
          }
        ]
      },
      {
        "title": "B1.20.1 e ABNT",
        "rows": [
          {
            "label": "Dados",
            "value": "12912;"
          }
        ]
      },
      {
        "title": "Pressão de trabalho conforme tabela",
        "rows": [
          {
            "label": "Dados",
            "value": "de pressões para conexões; NPT.; Nota:; 1.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "conexoes-conexoes-colares-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_colares.html",
    "sourcePages": [
      {
        "title": "Colar de Solda de Topo BW em aço weldolet",
        "url": "http://www.valaco.com.br/produtos/conexoes_colares_bw.html"
      },
      {
        "title": "Colar de Redução de Solda de Topo BW em aço weldolet",
        "url": "http://www.valaco.com.br/produtos/conexoes_colares_bw_reducao.html"
      },
      {
        "title": "Colar de Encaixe SW solda em aço sockolet",
        "url": "http://www.valaco.com.br/produtos/conexoes_colares_sw.html"
      },
      {
        "title": "Colar de Redução de Encaixe SW solda aço sockolet",
        "url": "http://www.valaco.com.br/produtos/conexoes_colares_sw_reducao.html"
      },
      {
        "title": "Colar de Rosca NPT e BSP em aço thredolet",
        "url": "http://www.valaco.com.br/produtos/conexoes_colares_rsc.html"
      },
      {
        "title": "Colar de Redução Rosca NPT e BSP em aço thredolet",
        "url": "http://www.valaco.com.br/produtos/conexoes_colares_rsc_reducao.html"
      }
    ],
    "summary": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "6"
      }
    ],
    "technicalSections": [
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CLR230"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Standard; Extra-Forte; Schedule 160; Linha; Derivação"
          }
        ]
      },
      {
        "title": "Peso aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "Pol.; mm; kg; 1/2\"; 19,05; 0,068; 28,97; 0,117; 3/4\"; 22,22; 0,113; 40,48; 0,322; 1\"; 25,40; 0,181; 37,30; 1.1/4\"; 28,57; 0,317; 44,45; 0,616; 1.1/2\"; 31,75; 0,362; 0,408; 58,73; 1,206; 2\"; 38,10; 0,680; 0,725; 53,97; 2.1/2\"; 43,86; 1,020; 1,134; 59,13; 1,982; 3\"; 50,80; 1,701; 1,859; 73,02; 3,238; 3.1/2\"; 52,38; 2,268; 2,299; 4\"; 55,56; 3,039; 3,402; 84,13; 5,601; 5\"; 3,855; 69,85; 4,309; 84,53; 8,069; 6\"; 60,32; 5,579; 4,717; 104,80; 13,72; 8\"; 63,50; 9,525; 14,51; 114,30; 24,49; 10\"; 76,20; 15,87; 92,07; 20,86; 136,50; 43,09; 12\"; 86,72; 26,30; 99,21; 27,66; 158,80; 70,11; 14\"; 88,90; 103,10; 34,02; 16\"; 93,66; 41,73; 112,70; 52,16; 18\"; 102,40; 56,70; 119,10; 58,96; 20\"; 117,5; 79,38; 126,20; 84,82; 24\"; 138,10; 133,80; 138,90; 143,30; DN; Tb; Dim; Diâmetro Nominal da Derivação (polegadas); 1/8\"; 1/4\""
          },
          {
            "label": "Dados 2",
            "value": "3/8\"; S-40; L1; 24,60; X-80; L2; 26,60; 31,35; 160; L3; 41,28; 29,36; 34,13; 32,54; 37,31; 43,65; 47,62; 57,94; 36,90; 41,67; 44,84; 49,42; 51,19; 49,62; 51,99; 63,10; 60,72; 67,07; 40,08; 48,02; 52,78; 57,54; 55,16; 66,27; 63,89; 71,04; 46,03; 65,08; 61,11; 72,23; 76,99; 85,72; 57,15; 71,43; 81,75; 67,46; 78,58; 83,34; 96,83; 98,02; 68,26; 77,78; 79,37; 88,10; 97,63; 75,40; 86,51; 91,28; 101,60; 108,70; 119,90; 66,67; 74,61; 90,48; 94,45; 105,60; 80,96; 100,80; 104,0; 107,1; 115,9; 114,3; 121,4; 132,6; 144,5; 105,6; 110,3; 120,7; 123,8; 143,7; 101,6; 112,7; 130,9; 127,8; 134,9; 146,1; 158,0; 158,4; 100,0; 104,8; 107,9; 119,0; 131,0; 134,1; 137,3; 147,6; 115,1; 126,2; 141,3; 148,4; 159,5; 171,5; 177,8; 192,1; 125,4; 130,2; 133,4; 138,1; 142,9; 149,2; 153,2; 156,4; 162,7; 169,9; 176,2; 177,0; 197,6; 140,5"
          },
          {
            "label": "Dados 3",
            "value": "151,6; 166,7; 173,8; 185,0; 196,9; 203,2; 217,5; 227,8; 152,4; 157,2; 160,3; 165,1; 171,4; 180,2; 183,4; 186,5; 189,7; 210,3; 216,7; 224,6; 232,6; 167,5; 178,6; 193,7; 200,8; 211,9; 223,8; 230,8; 244,5; 251,6; 277,0; 182,6; 185,7; 190,5; 195,3; 201,6; 205,6; 208,8; 215,1; 222,2; 228,6; 235,7; 243,7; 250,0; 254,8; 265,4; 192,9; 204,0; 222,3; 219,0; 226,2; 237,3; 249,2; 255,6; 269,9; 291,3; 324,6; 198,4; 206,4; 211,1; 212,7; 221,4; 231,0; 238,1; 259,5; 267,5; 270,7; 265,9; 277,8; 285,8; 219,1; 223,9; 227,0; 231,8; 236,5; 242,9; 246,9; 253,2; 256,4; 263,5; 285,0; 292,0; 296,0; 300,8; 303,2; 307,2; 319,9; 252,4; 257,2; 261,9; 268,3; 272,3; 275,4; 278,6; 281,8; 288,9; 295,3; 302,4; 310,3; 318,3; 321,5; 326,2; 335,0; 316,7; 328,6; 332,6; 338,9; 352,4; 274,6; 282,6; 287,3; 293,7; 297,7; 304,0; 314,3; 320,7; 327,8"
          },
          {
            "label": "Dados 4",
            "value": "335,8; 343,7; 346,9; 351,6; 355,6; 376,2; 342,1; 354,0; 358,0; 364,3; 370,7; 385,0; 325,4; 333,4; 338,1; 339,7; 344,5; 348,5; 354,8; 365,1; 371,5; 378,5; 386,6; 394,5; 397,7; 402,4; 406,4; 410,4; 447,7; 392,9; 404,8; 408,8; 415,1; 421,5; 428,6; 448,5; Dist. p/soldar (1); 1,58; 2,38; 3,17; 3,96; 4,76"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A distância para solda é incluída na dimensão L;; 2.; Veja a correlação; da classe de pressão da conexão com número; do schedule do tubo;; 3.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 4.; Veja Resistência; à Corrosão dos materiais da conexão;; 5.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CLR231"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Standard; Extra-Forte; Schedule 160; Duplo Extra Forte; Linha; Deriv."
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "aprox.; Pol.; mm; kg; 3/8 a 36; 1/8\"; 14,28; 0,036; 0,045; 3/4 a 12; 1/2\"; 29,36; 0,117; 1 a 8; 0,124; 1/4\"; 1.1/4 a 12; 3/4\"; 40,48; 0,322; 1.1/4 a 8; 0,598; 1/2 a 36; 3/8\"; 19,05; 0,068; 1\"; 38,10; 0,453; 3/4 a 36; 0,081; 0,090; 1.1/2 a 12; 1.1/4\"; 45,24; 0,616; 2 a 8; 0,752; 1 a 36; 22,22; 0,113; 0,140; 2.1/2 a 12; 1.1/2\"; 58,73; 1,206; 2.1/2 a 8; 1,388; 1.1/4 a 36; 26,98; 0,266; 0,213; 2\"; 55,56; 57,15; 1,192; 1.1/2 a 36; 31,75; 0,362; 0,408; 3 a 12; 2.1/2\"; 61,91; 1,982; 3 a 8; 2,086; 2 a 36; 1.1/2; 33,33; 0,498; 4 a 12; 3\"; 73,02; 3,238; 4 a 8; 3,515; 2.1/2 a 36; 0,793; 5 a 12; 4\"; 84,13; 14,67; 5 a 8; 6,123; 3 a 36; 41,27; 1,134; 1,179; 6 a 12; 5\"; 90,48; 8,069; 6 a 8; 8,618; 3.1/2 a 36; 44,45; 1,814; 1,859; 8 a 12; 6\"; 104,80; 13,72; 14,74; 4 a 36; 3.1/2\"; 47,62; 2,494; 2,540; 10 a 12; 8\"; 111,10"
          },
          {
            "label": "Dados 2",
            "value": "24,26; 5 a 36; 50,00; 2,857; 2,903; 12; 10\"; 125,40; 6 a 36; 4,649; 4,717; 8 a 36; 63,50; 6,441; 6,940; 10 a 36; 69,85; 10,65; 16,78; 12 a 36; 77,78; 17,68; 88,90; 20,86; 14 a 36; 12\"; 85,72; 26,76; 66,04; 27,66; 16 a 36; 14\"; 29,93; 100,00; 18 a 36; 16\"; 93,66; 34,02; 106,40; 46,26; 20 a 36; 18\"; 96,83; 43,99; 111,90; 58,96; 22 a 36; 20\"; 92,86; 53,52; 119,10; 71,66; DN; Tb; Dim; Diâmetro Nominal da Derivação (polegadas); 24\"; S-40; L1; 24,60; X-80; L2; 26,60; 31,35; 160; L3; 41,28; 34,13; 37,30; 32,54; 37,31; 43,65; 57,94; 36,90; 41,67; 44,84; 49,42; 51,19; 49,62; 51,99; 63,10; 60,72; 67,07; 40,08; 48,02; 52,78; 57,54; 55,16; 66,27; 63,89; 71,04; 84,53; 46,03; 50,80; 53,97; 65,08; 61,11; 72,23; 76,99; 52,38; 60,32; 71,43; 76,20; 81,75; 67,46; 78,58; 83,34; 98,02; 68,26; 79,37; 88,10; 97,63; 75,40; 86,51"
          },
          {
            "label": "Dados 3",
            "value": "91,28; 101,60; 108,70; 119,90; 66,67; 74,61; 94,45; 105,60; 80,96; 92,07; 100,80; 104,0; 107,1; 115,9; 99,21; 117,5; 114,3; 121,4; 132,6; 144,5; 105,6; 110,3; 120,7; 123,8; 143,7; 101,6; 112,7; 130,9; 127,8; 134,9; 146,1; 158,0; 158,4; 100,0; 104,8; 107,9; 119,0; 131,0; 134,1; 137,3; 147,6; 115,1; 126,2; 141,3; 148,4; 159,5; 171,5; 177,8; 192,1; 125,4; 130,2; 133,4; 138,1; 142,9; 149,2; 153,2; 156,4; 162,7; 169,9; 176,2; 177,0; 197,6; 140,5; 151,6; 166,7; 173,8; 185,0; 196,9; 203,2; 217,5; 227,8; 152,4; 157,2; 160,3; 165,1; 171,4; 180,2; 183,4; 186,5; 189,7; 210,3; 216,7; 224,6; 232,6; 167,5; 178,6; 193,7; 200,8; 211,9; 223,8; 230,8; 244,5; 251,6; 277,0; 182,6; 185,7; 190,5; 195,3; 201,6; 205,6; 208,8; 215,1; 222,2; 228,6; 235,7; 243,7; 250,0; 254,8; 265,4; 192,9; 204,0; 222,3; 219,0; 226,2; 237,3; 249,2"
          },
          {
            "label": "Dados 4",
            "value": "255,6; 269,9; 291,3; 324,6; 198,4; 206,4; 211,1; 212,7; 221,4; 231,0; 238,1; 259,5; 267,5; 270,7; 265,9; 277,8; 285,8; 219,1; 223,9; 227,0; 231,8; 236,5; 242,9; 246,9; 253,2; 256,4; 263,5; 285,0; 292,0; 296,0; 300,8; 303,2; 307,2; 319,9; 252,4; 257,2; 261,9; 268,3; 272,3; 275,4; 278,6; 281,8; 288,9; 295,3; 302,4; 310,3; 318,3; 321,5; 326,2; 335,0; 316,7; 328,6; 332,6; 338,9; 352,4; 274,6; 282,6; 287,3; 293,7; 297,7; 304,0; 314,3; 320,7; 327,8; 335,8; 343,7; 346,9; 351,6; 355,6; 376,2; 342,1; 354,0; 358,0; 364,3; 370,7; 385,0; 325,4; 333,4; 338,1; 339,7; 344,5; 348,5; 354,8; 365,1; 371,5; 378,5; 386,6; 394,5; 397,7; 402,4; 406,4; 410,4; 447,7; 392,9; 404,8; 408,8; 415,1; 421,5; 428,6; 448,5; Dist. p/soldar (1); 1,58; 2,38; 3,17; 3,96; 4,76"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A distância para solda é incluída na dimensão L;; 2.; Veja a correlação; da classe de pressão da conexão com número; do schedule do tubo;; 3.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 4.; Veja Resistência; à Corrosão dos materiais da conexão;; 5.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CLR234"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Standard; Linha; Derivação"
          }
        ]
      },
      {
        "title": "Peso aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "Pol.; mm; kg; 1/2\"; 21,82; 0,063; 3/4\"; 26,59; 0,113; 1\"; 29,36; 0,199; 1.1/4\"; 30,55; 0,290; 1.1/2\"; 32,59; 0,385; 2\"; 33,33; 0,621; 2.1/2\"; 46,03; 1,020; 3\"; 50,80; 1,701; 3.1/2\"; 52,38; 1,950; 4\"; 55,56; 2,993; 5\"; 61,91; 4,082; 6\"; 65,08; 7,030; 8\"; 69,85; 9,979; 10\"; 76,20; 16,32; Diâm. nom.; Tubos; Tipos; Dim. L; Diâmetro nominal da derivação em polegada; 1/8\"; 1/4\"; 3/8\"; S-40; L6; 17,46; 160; L8; 19,44; 24,20; 22,62; 22,22; 26,98; 25,40; 30,16; 28,57; 27,78; 30,95; 36,51; 38,89; 29,76; 34,52; 32,94; 32,14; 39,29; 35,32; 43,23; 44,45; 37,70; 36,11; 42,46; 41,67; 40,08; 38,49; 47,62; 47,22; 42,86; 42,06; 41,27; 48,41; 49,21; 53,18; 45,24; 50,00; 54,76; 53,97; 57,15; 58,73; 54,37; 59,53; 71,43; 57,94; 56,34; 62,70; 60,32; 64,29; 69,05; 63,50; 62,30; 79,37; 68,26; 66,67; 70,64; 74,61; 80,16; 65,09; 68,65"
          },
          {
            "label": "Dados 2",
            "value": "65,90; 75,40; 73,02; 76,99; 80,96; 84,13; 84,93; 75,00; 77,78; 82,55; 81,75; 88,90; 88,16; 86,51; 91,28; 90,48; 94,45; 97,63; 99,21; 89,69; 88,50; 96,10; 92,86; 96,04; 95,25; 102,40; 101,60; 100,00; 104,80; 104,00; 107,90; 111,10; 118,30; 113,50; 98,42; 103,20; 102,00; 109,50; 123,00; 121,40; 120,60; 127,80; 127,00; 125,40; 130,20; 129,40; 133,40; 136,50; 143,70; 139,70; 123,80; 128,60; 127,40; 134,90; 145,20; 150,00; 148,40; 147,60; 154,80; 154,00; 152,40; 157,20; 156,40; 160,30; 163,50; 170,70; 166,70; 167,50; 161,10; 150,80; 155,60; 154,40; 161,90; 12\"; 175,40; 173,80; 173,00; 180,20; 179,40; 177,80; 182,60; 181,80; 185,70; 188,90; 196,00; 192,10; 192,90; 176,20; 181,00; 179,80; 187,30; 14\"; 186,50; 191,30; 189,70; 196,10; 195,30; 193,70; 198,40; 197,60; 201,60; 204,80; 211,90; 208,00; 208,80; 192,00"
          },
          {
            "label": "Dados 3",
            "value": "196,80; 195,60; 203,20; 16\"; 216,70; 215,10; 214,30; 221,50; 220,70; 219,10; 223,90; 223,00; 227,00; 230,20; 237,30; 233,40; 234,20; 217,50; 222,20; 221,00; 228,60; 18\"; 242,10; 240,50; 239,70; 246,90; 246,10; 244,50; 249,20; 248,40; 252,40; 255,60; 262,70; 258,80; 259,60; 242,90; 247,70; 246,40; 249,2; 254,0; 20\"; 267,50; 265,90; 265,10; 272,30; 271,50; 269,90; 274,60; 273,80; 277,80; 281,00; 288,10; 284,20; 285,00; 268,30; 273,10; 271,80; 279,40; 24\"; 313,50; 318,30; 316,70; 315,90; 323,10; 322,30; 320,70; 325,40; 324,60; 328,60; 331,80; 338,90; 335,00; 335,80; 319,10; 323,90; 322,60; 330,20; Distância para a solda (1); 1,58; 2,38; 3,17; 3,96"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A distância para solda é incluída na dimensão L;; 2.; Veja a correlação; da classe de pressão da conexão com número; do schedule do tubo;; 3.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 4.; Veja Resistência; à Corrosão dos materiais da conexão;; 5.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CLR235"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Standard; Schedule 160; Linha; Derivação"
          }
        ]
      },
      {
        "title": "Peso aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "Pol.; mm; kg; 3/8\" a 36\"; 1/8\"; 16,66; 0,045; 1.1/4\" a 36\"; 1/2\"; 26,59; 0,136; 1/4\"; 1.1/2\" a 36\"; 3/4\"; 32,54; 0,254; 1/2\" a 36\"; 3/8\"; 20,63; 0,086; 2\" a 36\"; 1\"; 33,73; 0,453; 3/4\" x 36\"; 25,00; 2.1/4\" a 36\"; 1.1/4\"; 34,52; 0,544; 1\" a 36\"; 0,154; 3\" a 36\"; 1.1/2\"; 38,10; 0,834; 0,272; 4\" a 36\"; 2\"; 46,03; 1,496; 0,385; 0,471; 2.1/2\" a 36\"; 0,725; 2.1/2\"; 1,247; 3.1/2\" a 36\"; 3\"; 50,80; 1,723; 3.1/2\"; 53,97; 1,950; 5\" a 36\"; 4\"; 57,15; 3,288; 6\" a 36\"; 5\"; 66,67; 5,443; 8\" a 36\"; 6\"; 68,26; 6,577; 10\" a 36\"; 8\"; 69,85; 11,790; 12\" a 36\"; 10\"; 77,78; 15,870; Diâm. nom.; Tubos; Tipos; Dim. L; Diâmetro nominal da derivação em polegada; S-40; L6; 17,46; 160; L8; 19,44; 24,20; 22,62; 22,22; 26,98; 25,40; 33,33; 30,16; 28,57; 27,78; 30,95; 36,51; 38,89; 29,76; 32,94; 32,14; 39,29; 35,32; 43,23; 44,45; 37,70"
          },
          {
            "label": "Dados 2",
            "value": "36,11; 42,46; 41,67; 40,08; 38,49; 47,62; 47,22; 42,86; 42,06; 41,27; 48,41; 49,21; 53,18; 45,24; 50,00; 54,76; 52,38; 58,73; 55,56; 54,37; 59,53; 71,43; 57,94; 56,34; 62,70; 61,91; 60,32; 65,08; 64,29; 69,05; 63,50; 62,30; 79,37; 70,64; 74,61; 80,16; 65,09; 68,65; 65,90; 75,40; 73,02; 76,99; 80,96; 84,13; 84,93; 76,20; 75,00; 82,55; 81,75; 88,90; 88,16; 86,51; 91,28; 90,48; 94,45; 97,63; 99,21; 89,69; 88,50; 96,10; 92,86; 96,04; 95,25; 102,40; 101,60; 100,00; 104,80; 104,00; 107,90; 111,10; 118,30; 113,50; 98,42; 103,20; 102,00; 109,50; 123,00; 121,40; 120,60; 127,80; 127,00; 125,40; 130,20; 129,40; 133,40; 136,50; 143,70; 139,70; 123,80; 128,60; 127,40; 134,90; 145,20; 150,00; 148,40; 147,60; 154,80; 154,00; 152,40; 157,20; 156,40; 160,30; 163,50; 170,70; 166,70; 167,50; 161,10; 150,80; 155,60; 154,40"
          },
          {
            "label": "Dados 3",
            "value": "161,90; 12\"; 175,40; 173,80; 173,00; 180,20; 179,40; 177,80; 182,60; 181,80; 185,70; 188,90; 196,00; 192,10; 192,90; 176,20; 181,00; 179,80; 187,30; 14\"; 186,50; 191,30; 189,70; 196,10; 195,30; 193,70; 198,40; 197,60; 201,60; 204,80; 211,90; 208,00; 208,80; 192,00; 196,80; 195,60; 203,20; 16\"; 216,70; 215,10; 214,30; 221,50; 220,70; 219,10; 223,90; 223,00; 227,00; 230,20; 237,30; 233,40; 234,20; 217,50; 222,20; 221,00; 228,60; 18\"; 242,10; 240,50; 239,70; 246,90; 246,10; 244,50; 249,20; 248,40; 252,40; 255,60; 262,70; 258,80; 259,60; 242,90; 247,70; 246,40; 249,2; 254,0; 20\"; 267,50; 265,90; 265,10; 272,30; 271,50; 269,90; 274,60; 273,80; 277,80; 281,00; 288,10; 284,20; 285,00; 268,30; 273,10; 271,80; 279,40; 24\"; 313,50; 318,30; 316,70; 315,90; 323,10; 322,30; 320,70; 325,40; 324,60; 328,60; 331,80; 338,90"
          },
          {
            "label": "Dados 4",
            "value": "335,00; 335,80; 319,10; 323,90; 322,60; 330,20; Distância para a solda (1); 1,58; 2,38; 3,17; 3,96"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A distância para solda é incluída na dimensão L;; 2.; Veja a correlação; da classe de pressão da conexão com número; do schedule do tubo;; 3.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 4.; Veja Resistência; à Corrosão dos materiais da conexão;; 5.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CLR232"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades Rosca",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Standard e 3000Lbs; Linha; Derivação"
          }
        ]
      },
      {
        "title": "Peso aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "Pol.; mm; kg; 1/2\"; 24,60; 0,068; 3/4\"; 28,17; 0,113; 1\"; 30,95; 0,204; 1.1/4\"; 32,54; 0,317; 1.1/2\"; 34,13; 0,408; 2\"; 0,635; 2.1/2\"; 46,03; 1,134; 3\"; 50,80; 1,950; 3.1/2\"; 52,38; 2,041; 4\"; 55,56; 3,084; 5\"; 61,91; 4,173; 6\"; 65,08; 7,121; 8\"; 69,85; 10,20; 10\"; 76,20; 16,55; Diâm. Nom.; Tubo; Sched.; Libras; Dim. L; Diâmetro nominal da derivação em polegada; 1/8\"; 1/4\"; 3/8\"; Std. e 3000; L4; 26,98; 600; L5; 28,97; 32,94; 36,90; 40,87; 31,75; 35,71; 40,08; 43,25; 34,92; 38,89; 44,84; 49,21; 54,76; 39,29; 47,62; 55,16; 61,51; 42,46; 46,43; 58,34; 59,53; 59,92; 63,50; 48,41; 56,75; 64,29; 65,48; 66,27; 65,88; 73,82; 58,73; 63,10; 64,69; 70,64; 71,83; 72,62; 84,93; 96,83; 62,70; 66,67; 71,04; 78,58; 79,77; 80,56; 84,13; 92,86; 97,63; 73,03; 77,39; 78,97; 86,12; 86,91; 90,48; 99,21; 104,0; 105,6; 70,6; 73,0"
          },
          {
            "label": "Dados 2",
            "value": "77,4; 79,0; 84,9; 86,1; 86,9; 90,5; 99,2; 75,40; 79,37; 79,80; 85,32; 91,28; 92,47; 93,26; 110,3; 113,5; 115,9; 6000; 83,74; 88,90; 97,23; 98,80; 104,8; 106,0; 106,8; 119,1; 123,8; 127,0; 131,0; 135,7; 102,4; 106,4; 110,7; 112,3; 118,3; 119,5; 120,2; 132,5; 137,3; 140,5; 144,5; 154,0; 152,4; 127,8; 131,8; 136,1; 137,7; 143,7; 144,8; 145,7; 149,2; 157,9; 162,7; 165,9; 169,9; 179,4; 181,0; 183,3; 154,8; 158,8; 163,1; 164,7; 170,7; 171,8; 172,6; 176,2; 184,9; 189,7; 192,9; 196,9; 206,4; 208,0; 210,3; 216,7; 12\"; 180,2; 184,1; 188,5; 190,1; 196,0; 197,2; 198,0; 201,6; 315,1; 218,3; 222,2; 231,8; 233,4; 235,7; 243,7; 14\"; 200,0; 204,4; 206,0; 211,9; 213,1; 213,9; 217,5; 226,2; 231,0; 234,2; 238,1; 247,7; 249,2; 251,6; 259,6; 16\"; 221,4; 225,4; 229,8; 231,4; 237,4; 238,5; 239,3; 242,9; 256,4; 263,5; 273,0; 274,6"
          },
          {
            "label": "Dados 3",
            "value": "277,0; 285,0; 237,3; 18\"; 246,9; 250,8; 255,2; 256,8; 262,7; 263,9; 264,7; 268,3; 281,8; 288,9; 298,4; 300,0; 302,4; 310,4; 20\"; 272,2; 276,2; 280,6; 282,2; 288,1; 289,3; 290,1; 293,7; 307,2; 314,3; 323,9; 325,4; 327,8; 335,7; 290,2; 24\"; 323,0; 327,0; 331,4; 333,0; 338,9; 350,0; 340,9; 344,5; 353,2; 358,0; 361,2; 365,1; 374,6; 376,2; 378,6; 386,5; 351,6; Distância para a solda (1); 1,58; 2,38; 3,17; 3,96"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A distância para solda é incluída na dimensão L;; 2.; Veja a correlação; da classe de pressão da conexão com número; do schedule do tubo;; 3.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 4.; Veja Resistência; à Corrosão dos materiais da conexão;; 5.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CLR233"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 105;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades Rosca",
        "rows": [
          {
            "label": "Dados",
            "value": "- NPT;; - BSP."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro Nominal; Standard e 3000Lbs; 6000Lbs; Especial 6000Lbs; Linha; Derivação"
          }
        ]
      },
      {
        "title": "Peso aprox.",
        "rows": [
          {
            "label": "Dados",
            "value": "Pol.; mm; kg; 1/2\"; 24,60; 0,068; 3/8\" a 36\"; 1/8\"; 16,66; 0,086; 3/8\"; 28,57; 0,136; 3/4\"; 28,17; 0,113; 1/2\" a 36\"; 1/4\"; 20,63; 30,95; 0,204; 1\"; 3/4\" a 36\"; 25,00; 36,51; 0,340; 1.1/4\"; 32,54; 0,317; 1\" a 36\"; 26,59; 0,158; 38,89; 0,557; 1.1/2\"; 34,13; 0,408; 1.1/4\" a 36\"; 0,249; 40,48; 0,712; 2\"; 0,635; 1.1/2\" a 36\"; 33,73; 0,498; 42,06; 0,889; 2.1/2\"; 46,03; 1,134; 2\" a 36\"; 34,52; 0,544; 58,73; 2,304; 3\"; 50,80; 1,950; 2.1/2\" a 36\"; 38,10; 0,839; 3.1/2\"; 52,38; 2,041; 3\" a 36\"; 1,542; 4\"; 55,56; 3,084; 3.1/2\" a 36\"; 2,336; 5\"; 61,91; 4,173; 4\" a 36\"; 53,97; 3,175; 6\"; 65,08; 7,121; 5\" a 36\"; 57,15; 3,311; 8\"; 69,85; 10,20; 6\" a 36\"; 66,67; 4,808; 10\"; 76,20; 16,55; Diâm. Nom.; Tubo; Sched.; Libras; Dim. L; Diâmetro nominal da derivação em polegada; Std. e 3000; L4; 26,98; 600; L5; 28,97; 32,94; 36,90"
          },
          {
            "label": "Dados 2",
            "value": "40,87; 31,75; 35,71; 40,08; 43,25; 34,92; 44,84; 49,21; 54,76; 39,29; 47,62; 55,16; 61,51; 42,46; 46,43; 58,34; 59,53; 59,92; 63,50; 48,41; 56,75; 64,29; 65,48; 66,27; 65,88; 73,82; 63,10; 64,69; 70,64; 71,83; 72,62; 84,93; 96,83; 62,70; 71,04; 78,58; 79,77; 80,56; 84,13; 92,86; 97,63; 73,03; 77,39; 78,97; 86,12; 86,91; 90,48; 99,21; 104,0; 105,6; 70,6; 73,0; 77,4; 79,0; 84,9; 86,1; 86,9; 90,5; 99,2; 75,40; 79,37; 79,80; 85,32; 91,28; 92,47; 93,26; 110,3; 113,5; 115,9; 6000; 83,74; 88,90; 97,23; 98,80; 104,8; 106,0; 106,8; 119,1; 123,8; 127,0; 131,0; 135,7; 102,4; 106,4; 110,7; 112,3; 118,3; 119,5; 120,2; 132,5; 137,3; 140,5; 144,5; 154,0; 152,4; 127,8; 131,8; 136,1; 137,7; 143,7; 144,8; 145,7; 149,2; 157,9; 162,7; 165,9; 169,9; 179,4; 181,0; 183,3; 154,8; 158,8; 163,1; 164,7; 170,7; 171,8; 172,6; 176,2"
          },
          {
            "label": "Dados 3",
            "value": "184,9; 189,7; 192,9; 196,9; 206,4; 208,0; 210,3; 216,7; 12\"; 180,2; 184,1; 188,5; 190,1; 196,0; 197,2; 198,0; 201,6; 315,1; 218,3; 222,2; 231,8; 233,4; 235,7; 243,7; 14\"; 200,0; 204,4; 206,0; 211,9; 213,1; 213,9; 217,5; 226,2; 231,0; 234,2; 238,1; 247,7; 249,2; 251,6; 259,6; 16\"; 221,4; 225,4; 229,8; 231,4; 237,4; 238,5; 239,3; 242,9; 256,4; 263,5; 273,0; 274,6; 277,0; 285,0; 237,3; 18\"; 246,9; 250,8; 255,2; 256,8; 262,7; 263,9; 264,7; 268,3; 281,8; 288,9; 298,4; 300,0; 302,4; 310,4; 20\"; 272,2; 276,2; 280,6; 282,2; 288,1; 289,3; 290,1; 293,7; 307,2; 314,3; 323,9; 325,4; 327,8; 335,7; 290,2; 24\"; 323,0; 327,0; 331,4; 333,0; 338,9; 350,0; 340,9; 344,5; 353,2; 358,0; 361,2; 365,1; 374,6; 376,2; 378,6; 386,5; 351,6; Distância para a solda (1); 1,58; 2,38; 3,17; 3,96"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; A distância para solda é incluída na dimensão L;; 2.; Veja a correlação; da classe de pressão da conexão com número; do schedule do tubo;; 3.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 4.; Veja Resistência; à Corrosão dos materiais da conexão;; 5.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "conexoes-conexoes-tb-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/conexoes_tb.html",
    "sourcePages": [
      {
        "title": "Curva 45 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_curva_45.html"
      },
      {
        "title": "Curva 90 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_curva_90.html"
      },
      {
        "title": "Curva 180 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_curva_180.html"
      },
      {
        "title": "Cap norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_cap.html"
      },
      {
        "title": "Tê 90 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_te_90.html"
      },
      {
        "title": "Tê 90 de Redução norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_te_90_reducao.html"
      },
      {
        "title": "Pestana Curta / Longa para Flange Solto Lap Joint norma ANSI B16.9 MSS SP 43 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_pestana.html"
      },
      {
        "title": "Tê 45 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_te_45.html"
      },
      {
        "title": "Tê 45 graus de Redução norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_te_45_reducao.html"
      },
      {
        "title": "Redução Concêntrica norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_reducao_concentrica.html"
      },
      {
        "title": "Redução Excêntrica norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_reducao_excentrica.html"
      },
      {
        "title": "Niple Concentrico Rosca NPT e BSP e Solda de Topo norma ANSI B16.9 schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_niple_concentrico.html"
      },
      {
        "title": "Niple Excentrico Rosca NPT e BSP e Solda de topo norma ANSI B16.9 schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "url": "http://www.valaco.com.br/produtos/conexoes_tb_niple_excentrico.html"
      }
    ],
    "summary": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "13"
      }
    ],
    "technicalSections": [
      {
        "title": "CURVA",
        "rows": [
          {
            "label": "Dados",
            "value": "45°"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT108"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Centro; a Face; B (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado (kg); *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); OD; (mm); Standard; 40; XS; 80; Std.; Sch.; 1/2\"; 21,30; 2,77; 3,73; 15,87; 0,04; 0,05; 3/4\"; 26,67; 2,87; 3,91; 11,91; 1\"; 33,40; 3,38; 4,55; 15,91; 0,08; 0,10; 1.1/4\"; 42,16; 3,56; 4,85; 19,84; 0,13; 0,18; 1.1/2\"; 48,26; 3,68; 5,08; 23,83; 0,19; 0,25; 2\"; 60,32; 5,54; 31,80; 0,34; 0,47; 2.1/2\"; 73,02; 5,16; 7,01; 39,76; 0,68; 0,90; 3\"; 88,90; 5,49; 7,62; 47,60; 1,06; 1,44; 4\"; 114,30; 6,02; 8,56; 63,50; 2,02; 2,81; 5\"; 141,30; 6,55; 9,52; 79,40; 3,42; 6\"; 168,30; 7,11; 10,97; 95,30; 5,30; 8,03; 8\"; 219,10; 8,18; 12,70; 127,00; 10,70; 16,20; 10\"; 273,00; 9,27; 15,10; 158,80; 18,90; 25,40; 30,00; 12\"; 323,80; 10,30; 17,50; 190,50; 27,90; 36,70; 50,00; 14\"; 355,60; 11,10; 19,00; 222,20; 35,80; 41,30; 47,20; 70,00; 16\"; 406,40; 21,40"
          },
          {
            "label": "Dados 2",
            "value": "254,00; 62,20; 62,10; 102,20; 18\"; 457,20; 14,30; 23,80; 285,80; 59,90; 88,60; 78,90; 144,00; 20\"; 508,00; 26,30; 317,50; 73,50; 115,00; 97,10; 195,90; 22\"; 558,80; 28,60; 349,30; 89,00; 118,00; 24\"; 609,60; 31,00; 381,00; 106,00; 192,20; 141,00; 334,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Curvas de Aço para Solda de Topo;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CURVA",
        "rows": [
          {
            "label": "Dados",
            "value": "90°"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CT109"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo;; Modelos disponíveis:; - Raio Curto;; - Raio Longo;; - Raio N x DN (Sob consulta)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Centro; a Face; A (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado (kg); *Ver Notas; (1); Nominal; Externo; Schedule; DN; (pol.); OD; (mm); Standard; 40; XS; 80; Raio; Longo; Curto; Std.; Sch.; 1/2\"; 21,30; 2,77; 3,73; 38,10; 0,08; 0,09; 3/4\"; 26,67; 2,87; 3,91; 0,10; 1\"; 33,40; 3,38; 4,55; 25,40; 0,15; 0,20; 1.1/4\"; 42,16; 3,56; 4,85; 47,60; 31,75; 0,26; 0,35; 1.1/2\"; 48,26; 3,68; 5,08; 57,30; 0,38; 0,51; 2\"; 60,32; 5,54; 76,20; 50,80; 0,68; 0,94; 2.1/2\"; 73,02; 5,16; 7,01; 95,20; 63,50; 1,35; 1,79; 3\"; 88,90; 5,49; 7,62; 114,30; 2,12; 4\"; 6,02; 8,56; 152,40; 101,60; 4,04; 5,62; 5\"; 141,30; 6,55; 9,52; 190,50; 127,00; 6,85; 9,71; 6\"; 168,30; 7,11; 10,97; 228,60; 10,70; 16,00; 8\"; 219,10; 8,18; 12,70; 304,80; 203,20; 32,20; 10\"; 273,00; 9,27; 15,10; 381,00; 254,00; 37,60; 60,00; 12\"; 323,80; 10,30; 17,50; 457,20; 55,80; 73,50; 100,00; 14\"; 355,60; 11,10; 19,00"
          },
          {
            "label": "Dados 2",
            "value": "533,40; 71,70; 82,60; 94,30; 140,00; 16\"; 406,40; 21,40; 609,60; 93,90; 124,40; 124,00; 204,40; 18\"; 14,30; 23,80; 685,80; 119,00; 177,20; 157,00; 288,00; 20\"; 508,00; 26,30; 762,00; 147,00; 230,00; 194,00; 391,80; 22\"; 558,80; 28,60; 838,20; 178,00; 236,00; 24\"; 31,00; 914,40; 212,00; 384,40; 282,00; 668,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB para curvas 90°; de Raio Longo;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Curvas de Aço para Solda de Topo;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CURVA",
        "rows": [
          {
            "label": "Dados",
            "value": "180°"
          }
        ]
      },
      {
        "title": "FIGURA",
        "rows": [
          {
            "label": "Dados",
            "value": "CT110"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo;; Modelos disponíveis:; - Raio Curto;; - Raio Longo;; - Raio N x DN (Sob consulta)."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Centro; a Face; A (mm); a Centro; O (mm); Altura; do Arco; K (mm); Nominal; Externo; Schedule; DN; (pol.); OD; (mm); Standard; 40; XS; 80; Raio; Longo; Curto; 1/2\"; 21,30; 2,77; 3,73; 38,10; 76,20; 47,62; 3/4\"; 26,67; 2,87; 3,91; 42,90; 1\"; 33,40; 3,38; 4,55; 25,40; 50,80; 55,60; 41,30; 1.1/4\"; 42,16; 3,56; 4,85; 47,60; 31,75; 95,20; 63,50; 69,80; 52,40; 1.1/2\"; 48,26; 3,68; 5,08; 57,30; 114,30; 82,60; 61,90; 2\"; 60,32; 5,54; 152,40; 101,60; 106,40; 81,00; 2.1/2\"; 73,02; 5,16; 7,01; 190,50; 127,00; 131,80; 100,00; 3\"; 88,90; 5,49; 7,62; 228,60; 158,80; 120,70; 4\"; 6,02; 8,56; 304,80; 203,20; 209,60; 5\"; 141,30; 6,55; 9,52; 381,00; 254,00; 261,90; 196,80; 6\"; 168,30; 7,11; 10,97; 457,20; 312,70; 236,50; 8\"; 219,10; 8,18; 12,70; 103,20; 609,60; 406,40; 414,30; 10\"; 273,00"
          },
          {
            "label": "Dados 2",
            "value": "9,27; 15,10; 762,00; 508,00; 517,50; 390,50; 12\"; 323,80; 10,30; 17,50; 914,40; 619,10; 466,70; 14\"; 355,60; 11,10; 19,00; 533,40; 1067,00; 711,20; 16\"; 21,40; 1219,00; 812,80; 609,50; 18\"; 14,30; 23,80; 685,80; 1372,00; 20\"; 26,30; 1524,00; 1016,00; 22\"; 558,80; 28,60; 838,20; 1676,00; 1181,00; 24\"; 31,00; 1829,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja os Materiais; Permitidos para Conexões Tubulares;; 2.; Veja a Tolerância; para Curvas de Aço para Solda de Topo;; 3.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 4.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 5.; Veja Resistência; à Corrosão dos materiais da conexão;; 6.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Cap norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "CAP"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT106"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Comprimento; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado (kg); *Ver Notas; (1); Nominal; Externo; Schedule; DN; (pol.); OD; Standard; 40; XS; 80; 1/2\"; 21,30; 2,77; 3,73; 25,4; 0,032; 0,045; 3/4\"; 26,67; 2,87; 3,91; 0,059; 0,086; 1\"; 33,40; 3,38; 4,55; 38,1; 0,099; 0,127; 1.1/4\"; 42,16; 3,56; 4,85; 0,141; 1,810; 1.1/2\"; 48,26; 3,68; 5,08; 0,168; 0,222; 2\"; 60,32; 5,54; 0,231; 0,313; 2.1/2\"; 73,02; 5,16; 7,01; 0,367; 0,467; 3\"; 88,90; 5,49; 7,62; 50,8; 0,664; 0,853; 4\"; 114,30; 6,02; 8,56; 63,5; 1,150; 1,570; 5\"; 141,30; 6,55; 9,52; 76,2; 1,900; 2,650; 6\"; 168,30; 7,11; 10,97; 88,9; 2,920; 4,280; 8\"; 219,10; 8,18; 12,70; 101,6; 5,080; 7,580; 10\"; 273,00; 9,27; 15,10; 127,0; 9,070; 12,00; 12\"; 323,80; 10,30; 17,50; 152,4; 13,38; 17,20; 14\"; 355,60; 11,10; 19,00; 165,1; 16,06; 20,50; 16\"; 406,40; 21,40; 177,8; 20,32; 26,20; 18\"; 457,20; 14,30; 23,80; 203,2"
          },
          {
            "label": "Dados 2",
            "value": "25,90; 33,60; 20\"; 508,00; 26,30; 228,6; 32,21; 42,60; 22\"; 558,80; 28,60; 254,0; 37,60; 49,90; 24\"; 609,60; 31,00; 266,7; 46,27; 59,40; 26\"; 660,40; 28\"; 711,20; 30\"; 762,00; 32\"; 812,80; 34\"; 863,60; 36\"; 914,40; 19,05; 38\"; 965,20; 304,8; 40\"; 1116,00; 42\"; 1066,80; 44\"; 1117,60; 342,9; 46\"; 1168,40; 48\"; 1219,20"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Tê 90 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "TÊ; 90°"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT100"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Centro; a Face"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado (kg); *Ver Notas; (1); Nominal; Externo; Schedule; DN; (pol.); OD; (mm); Standard; 40; XS; 80; 1/2\"; 21,30; 2,77; 3,73; 25,40; 0,159; 0,204; 3/4\"; 26,67; 2,87; 3,91; 28,58; 0,272; 1\"; 33,40; 3,38; 4,55; 38,10; 0,286; 0,354; 1.1/4\"; 42,16; 3,56; 4,85; 47,62; 0,526; 0,653; 1.1/2\"; 48,26; 3,68; 5,08; 57,15; 0,771; 0,962; 2\"; 60,32; 5,54; 63,50; 1,890; 1,870; 2.1/2\"; 73,02; 5,16; 7,01; 76,20; 2,680; 3,080; 3\"; 88,90; 5,49; 7,62; 85,72; 3,820; 4,500; 4\"; 114,30; 6,02; 8,56; 104,78; 5,990; 8,440; 5\"; 141,30; 6,55; 9,52; 123,83; 9,930; 12,90; 6\"; 168,30; 7,11; 10,97; 142,90; 16,50; 19,30; 8\"; 219,10; 8,18; 12,70; 177,80; 27,70; 34,50; 10\"; 273,00; 9,27; 15,10; 215,90; 41,30; 58,50; 12\"; 323,80; 10,30; 17,50; 254,00; 66,70; 84,80; 14\"; 355,60; 11,10; 19,00; 279,40; 102,00; 127,00; 16\"; 406,40; 21,40"
          },
          {
            "label": "Dados 2",
            "value": "304,80; 110,00; 167,00; 18\"; 457,20; 14,30; 23,80; 342,90; 151,00; 193,00; 20\"; 508,00; 26,30; 381,00; 228,00; 264,00; 22\"; 558,80; 28,60; 419,10; 252,00; 368,00; 24\"; 609,60; 31,00; 431,80; 347,00; 423,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Tê 90 de Redução norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT101"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Centro; a Face"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado (kg); *Ver Notas; (1); Nominal; (DN); Externo; Schedule; Linha; (pol.); Derivação; OD; (mm); Standard; 40; XS; 80; 1/2\"; 3/8\"; 21,30; 2,77; 3,73; 25,40; 0,113; 0,127; 1/4\"; 3/4\"; 26,67; 2,87; 3,91; 28,58; 0,227; 1\"; 33,40; 3,38; 4,55; 38,10; 0,263; 0,331; 0,258; 0,322; 0,254; 0,310; 1.1/4\"; 42,16; 3,56; 4,85; 47,62; 0,485; 0,603; 0,476; 0,590; 0,467; 0,576; 1.1/2\"; 48,26; 3,68; 5,08; 57,15; 0,712; 0,907; 0,703; 0,875; 0,689; 0,857; 0,676; 0,844; 2\"; 60,32; 5,54; 63,50; 1,890; 1,870; 50,80; 44,45; 2.1/2\"; 73,02; 5,16; 7,01; 76,20; 69,85; 2,680; 3,080; 66,68; 3\"; 88,90; 5,49; 7,62; 85,72; 82,55; 3,820; 4,500; 66,62; 4\"; 114,30; 6,02; 8,56; 104,78; 98,42; 5,990; 8,440; 95,25; 8,390; 5\"; 141,30; 6,55; 9,52; 123,83; 117,48; 9,930; 12,90; 111,13; 107,95; 6\"; 168,30; 7,11; 10,97; 142,90; 136,50; 16,50"
          },
          {
            "label": "Dados 2",
            "value": "19,30; 130,20; 14,90; 120,65; 8\"; 219,10; 8,18; 12,70; 177,80; 27,70; 34,50; 174,90; 155,60; 152,40; 10\"; 273,00; 9,27; 15,10; 215,90; 203,20; 39,90; 52,60; 193,70; 190,50; 184,20; 12\"; 323,80; 10,30; 17,50; 254,00; 66,70; 84,80; 64,90; 81,60; 14\"; 355,60; 11,10; 19,00; 279,40; 269,90; 102,00; 127,00; 257,20; 98,40; 122,00; 247,60; 238,10; 16\"; 406,40; 21,40; 304,80; 110,00; 167,00; 295,30; 162,00; 282,60; 106,00; 160,00; 263,50; 18\"; 457,20; 14,30; 23,80; 342,90; 151,00; 193,00; 330,20; 320,70; 154,00; 308,00; 145,00; 146,00; 298,50; 20\"; 508,00; 26,30; 381,00; 368,30; 220,00; 228,00; 224,00; 346,10; 333,40; 219,00; 22\"; 558,80; 28,60; 419,10; 252,00; 368,00; 393,70; 239,00; 304,00; 202,00; 234,00; 371,50; 358,80; 24\"; 609,60; 31,00; 431,80; 272,00; 309,00; 229,00; 231,00; 396,90; 384,20; 192,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Pestana Curta / Longa para Flange Solto Lap Joint norma ANSI B16.9 MSS SP 43 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "para"
          }
        ]
      },
      {
        "title": "B 16.9 e MSS",
        "rows": [
          {
            "label": "Dados",
            "value": "SP 43;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;; Modelos disponíveis:; - Curta Estampada (Figura CT107-C );; - MSS SP 43 (Figura CT107-M );; - Longa - ANSI B 16 (Figura CT107-L )."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Altura; Raio de; Concordância \" R \"; Nominal; Externo; Schedule; DN; (pol.); OD; (mm); A1; A2; Standard; 40; XS; 80; H1; H2; H3; Tipo; \"A\"; \"B\"; 1/2\"; 21,30; 34,9; 35,1; 2,77; 3,73; 7,9; 50,8; 76,2; 3,0; 0,8; 3/4\"; 26,67; 42,9; 2,87; 3,91; 1\"; 33,40; 55,0; 3,38; 4,55; 8,0; 101,6; 1.1/4\"; 42,16; 62,0; 63,5; 3,56; 4,85; 9,0; 4,8; 1.1/2\"; 48,26; 72,0; 73,2; 3,68; 5,08; 10,0; 6,4; 2\"; 60,32; 85,0; 91,9; 5,54; 12,0; 152,4; 2.1/2\"; 73,02; 100,0; 104,6; 5,16; 7,01; 13,0; 3\"; 88,90; 118,0; 127,0; 5,49; 7,62; 14,0; 9,7; 4\"; 114,30; 150,0; 157,2; 6,02; 8,56; 16,0; 11,2; 5\"; 141,30; 175,0; 185,7; 6,55; 9,52; 20,0; 203,2; 1,5; 6\"; 168,30; 200,0; 215,9; 7,11; 10,97; 22,0; 88,9; 12,7; 8\"; 219,10; 260,0; 269,7; 8,18; 12,70; 26,0; 10\"; 273,00; 312,0; 323,9; 9,27; 15,10; 254,0; 12\""
          },
          {
            "label": "Dados 2",
            "value": "323,80; 365,0; 381,0; 10,30; 17,50; 28,0; 14\"; 355,60; 420,0; 412,8; 11,10; 19,00; 30,0; 304,8; 16\"; 406,40; 470,0; 469,9; 21,40; 18\"; 457,20; 520,0; 533,4; 14,30; 23,80; 20\"; 508,00; 570,0; 584,2; 26,30; 24\"; 609,60; 675,0; 692,2; 31,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Tipo \"A\" para flange; Solto (lap Joint);; 2.; Tipo \"B\" para flange Sobreposto; (Slip On);; 3.; Veja os Materiais; Permitidos para Conexões Tubulares;; 4.; Veja a Tolerância; para Curvas de Aço para Solda de Topo;; 5.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 6.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 7.; Veja Resistência; à Corrosão dos materiais da conexão;; 8.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Tê 45 graus norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "TÊ; 45°"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT102"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo;; Com costura aparente ou removida."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Centro; a Face"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado; (kg) *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); OD; (mm); Standard; 40; XS; 80; e Y (mm); 1\"; 33,40; 3,38; 4,55; 146,1; 165,1; 44,5; 50,8; 0,77; 1,14; 1.1/4\"; 42,16; 3,56; 4,85; 158,8; 184,2; 57,2; 1,10; 1,75; 1.1/2\"; 48,26; 3,68; 5,08; 177,8; 215,9; 63,5; 1,48; 2,47; 2\"; 60,32; 3,91; 5,54; 203,2; 228,6; 2,29; 3,52; 2.1/2\"; 73,02; 5,16; 7,01; 241,3; 266,7; 4,19; 6,12; 3\"; 88,90; 5,49; 7,62; 254,0; 279,4; 76,2; 5,71; 8,53; 4\"; 114,30; 6,02; 8,56; 304,8; 342,9; 9,43; 14,88; 5\"; 141,30; 6,55; 9,52; 381,0; 88,9; 14,24; 22,59; 6\"; 168,30; 7,11; 10,97; 368,3; 444,5; 101,6; 19,23; 35,83; 8\"; 219,10; 8,18; 12,70; 520,7; 114,3; 127,0; 34,65; 63,50; 10\"; 273,00; 9,27; 15,10; 609,6; 139,7; 56,24; 91,63; 12\"; 323,80; 10,30; 17,50; 622,3; 698,5; 152,4; 81,64; 123,83; 14\"; 355,60; 11,10; 19,00"
          },
          {
            "label": "Dados 2",
            "value": "658,8; 787,4; 98,88; 154,22; 16\"; 406,40; 21,40; 762,0; 876,3; 124,74; 196,41; 18\"; 457,20; 14,30; 23,80; 812,8; 952,5; 147,87; 238,59; 20\"; 508,00; 26,30; 889,0; 1028,7; 179,62; 284,86; 24\"; 609,60; 31,00; 1206,5; 246,76; 400,07"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Tê 45 graus de Redução norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "de Redução; TÊ"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT103"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo;; Com costura aparente ou removida."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; da Linha; Espessura; da Parede T (mm); Centro; a Face"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado; (kg) *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); OD; (mm); Standard; 40; XS; 80; e Y (mm); 1\"; 33,40; 3,38; 4,55; 146,1; 165,1; 44,5; 50,8; 0,77; 1,14; 1.1/4\"; 42,16; 3,56; 4,85; 158,8; 184,2; 57,2; 1,10; 1,75; 1.1/2\"; 48,26; 3,68; 5,08; 177,8; 215,9; 63,5; 1,48; 2,47; 2\"; 60,32; 3,91; 5,54; 203,2; 228,6; 2,29; 3,52; 2.1/2\"; 73,02; 5,16; 7,01; 241,3; 266,7; 4,19; 6,12; 3\"; 88,90; 5,49; 7,62; 254,0; 279,4; 76,2; 5,71; 8,53; 4\"; 114,30; 6,02; 8,56; 304,8; 342,9; 9,43; 14,88; 5\"; 141,30; 6,55; 9,52; 381,0; 88,9; 14,24; 22,59; 6\"; 168,30; 7,11; 10,97; 368,3; 444,5; 101,6; 19,23; 35,83; 8\"; 219,10; 8,18; 12,70; 520,7; 114,3; 127,0; 34,65; 63,50; 10\"; 273,00; 9,27; 15,10; 609,6; 139,7; 56,24; 91,63; 12\"; 323,80; 10,30; 17,50; 622,3; 698,5; 152,4; 81,64; 123,83; 14\"; 355,60; 11,10; 19,00"
          },
          {
            "label": "Dados 2",
            "value": "658,8; 787,4; 98,88; 154,22; 16\"; 406,40; 21,40; 762,0; 876,3; 124,74; 196,41; 18\"; 457,20; 14,30; 23,80; 812,8; 952,5; 147,87; 238,59; 20\"; 508,00; 26,30; 889,0; 1028,7; 179,62; 284,86; 24\"; 609,60; 31,00; 1206,5; 246,76; 400,07"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Redução Concêntrica norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "Concêntrica"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT104"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Compr.; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado; (kg) *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); OD; Standard; 40; XS; 80; 3/4\"; 1/2\"; 3/8\"; 26,67; 2,87; 3,91; 38,10; 0,068; 0,100; 1\"; 33,40; 3,38; 4,55; 50,80; 0,127; 0,163; 1.1/4\"; 42,16; 3,56; 4,85; 0,172; 0,227; 1.1/2\"; 48,26; 3,68; 5,08; 63,50; 0,258; 0,345; 2\"; 60,32; 5,54; 76,20; 0,408; 0,567; 2.1/2\"; 73,02; 5,16; 7,01; 88,90; 0,771; 1,010; 3\"; 5,49; 7,62; 1,000; 1,360; 4\"; 114,30; 6,02; 8,56; 101,60; 1,630; 2,270; 5\"; 141,30; 6,55; 9,52; 127,00; 2,770; 3,920; 6\"; 168,30; 7,11; 10,97; 139,70; 3,950; 5,940; 8\"; 219,10; 8,18; 12,70; 152,40; 6,490; 9,840; 10\"; 273,00; 9,27; 15,10; 177,80; 10,70; 14,50; 12\"; 323,80; 10,30; 17,50; 203,20; 15,00; 19,80; 14\"; 355,60; 11,10; 19,00; 330,20; 26,80; 35,50; 16\"; 406,40; 21,40; 33,10; 44,00; 18\"; 457,20; 14,30; 23,80; 381,00; 39,90; 53,10"
          },
          {
            "label": "Dados 2",
            "value": "20\"; 508,00; 26,30; 59,40; 78,90; 22\"; 558,80; 28,60; 65,30; 86,60; 24\"; 609,60; 31,00; 71,70; 95,22"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "Redução Excêntrica norma ANSI B16.9 solda de topo schedule sch standard std 40 80 XS 160 XXS em aço carbono ASTM A234 Gr. WPB inox AISI 304 304L 316 316L e ligas",
        "rows": [
          {
            "label": "Dados",
            "value": "Excêntrica"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT105"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades biseladas",
        "rows": [
          {
            "label": "Dados",
            "value": "para solda de topo;"
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Compr.; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado; (kg) *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); OD; Standard; 40; XS; 80; 3/4\"; 1/2\"; 3/8\"; 26,67; 2,87; 3,91; 38,10; 0,068; 0,100; 1\"; 33,40; 3,38; 4,55; 50,80; 0,127; 0,163; 1.1/4\"; 42,16; 3,56; 4,85; 0,172; 0,227; 1.1/2\"; 48,26; 3,68; 5,08; 63,50; 0,258; 0,345; 2\"; 60,32; 5,54; 76,20; 0,408; 0,567; 2.1/2\"; 73,02; 5,16; 7,01; 88,90; 0,771; 1,010; 3\"; 5,49; 7,62; 1,000; 1,360; 4\"; 114,30; 6,02; 8,56; 101,60; 1,630; 2,270; 5\"; 141,30; 6,55; 9,52; 127,00; 2,770; 3,920; 6\"; 168,30; 7,11; 10,97; 139,70; 3,950; 5,940; 8\"; 219,10; 8,18; 12,70; 152,40; 6,490; 9,840; 10\"; 273,00; 9,27; 15,10; 177,80; 10,70; 14,50; 12\"; 323,80; 10,30; 17,50; 203,20; 15,00; 19,80; 14\"; 355,60; 11,10; 19,00; 330,20; 26,80; 35,50; 16\"; 406,40; 21,40; 33,10; 44,00; 18\"; 457,20; 14,30; 23,80; 381,00; 39,90; 53,10"
          },
          {
            "label": "Dados 2",
            "value": "20\"; 508,00; 26,30; 59,40; 78,90; 22\"; 558,80; 28,60; 65,30; 86,60; 24\"; 609,60; 31,00; 71,70; 95,22"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT112"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- biseladas; para solda de topo;; - plana;; - rosca ( BSP; / NPT; )."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Compr.; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado; (kg) *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); Redução; OD; Standard; 40; XS; 80; 3/4\"; 1/4\"; a 1/2\"; 26,67; 2,87; 3,91; 76,2; 0,23; 1\"; a 3/4\"; 33,40; 3,38; 4,55; 88,9; 0,30; 1.1/4\"; a 1\"; 42,16; 3,56; 4,85; 101,6; 0,45; 1.1/2\"; a 1.1/4\"; 48,26; 3,68; 5,08; 114,3; 0,53; 2\"; a 1.1/2\"; 60,32; 5,54; 165,1; 0,90; 1,06; 2.1/2\"; a 2\"; 73,02; 5,16; 7,01; 177,8; 1,36; 1,58; 3\"; a 2.1/2\"; 88,90; 5,49; 7,62; 203,2; 2,04; 2,72; 4\"; a 3\"; 114,30; 6,02; 8,56; 228,6; 3,40; 4,53; 5\"; 1/2\"; a 4\"; 141,30; 6,55; 9,52; 279,4; 5,66; 7,70; 6\"; a 5\"; 168,30; 7,11; 10,97; 304,8; 8,15; 11,40; 8\"; a 6\"; 219,10; 8,18; 12,70; 330,2; 20,00; 10\"; a 8\"; 273,00; 9,27; 15,10; 381,0; 21,80; 31,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "CT113"
          }
        ]
      },
      {
        "title": "Dimensões conforme ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.9;"
          }
        ]
      },
      {
        "title": "Material conforme indicações",
        "rows": [
          {
            "label": "Dados",
            "value": "de materiais para conexões:; - Aço; Carbono ASTM A 234 Gr. WPB;; Inoxidável AISI 304 ou 304L;; Inoxidável AISI 316 ou 316L;; - Outras; Ligas;"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- biseladas; para solda de topo;; - plana;; - rosca ( BSP; / NPT; )."
          }
        ]
      },
      {
        "title": "E PESO APROXIMADO",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro; Espessura; da Parede T (mm); Compr.; (mm)"
          }
        ]
      },
      {
        "title": "Peso",
        "rows": [
          {
            "label": "Dados",
            "value": "Aproximado; (kg) *Ver Notas (1); Nominal; Externo; Schedule; DN; (pol.); Redução; OD; Standard; 40; XS; 80; 3/4\"; 1/4\"; a 1/2\"; 26,67; 2,87; 3,91; 76,2; 0,23; 1\"; a 3/4\"; 33,40; 3,38; 4,55; 88,9; 0,30; 1.1/4\"; a 1\"; 42,16; 3,56; 4,85; 101,6; 0,45; 1.1/2\"; a 1.1/4\"; 48,26; 3,68; 5,08; 114,3; 0,53; 2\"; a 1.1/2\"; 60,32; 5,54; 165,1; 0,90; 1,06; 2.1/2\"; a 2\"; 73,02; 5,16; 7,01; 177,8; 1,36; 1,58; 3\"; a 2.1/2\"; 88,90; 5,49; 7,62; 203,2; 2,04; 2,72; 4\"; a 3\"; 114,30; 6,02; 8,56; 228,6; 3,40; 4,53; 5\"; 1/2\"; a 4\"; 141,30; 6,55; 9,52; 279,4; 5,66; 7,70; 6\"; a 5\"; 168,30; 7,11; 10,97; 304,8; 8,15; 11,40; 8\"; a 6\"; 219,10; 8,18; 12,70; 330,2; 20,00; 10\"; a 8\"; 273,00; 9,27; 15,10; 381,0; 21,80; 31,00"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; O peso aproximado é para conexões; em Aço Carbono ASTM A 234 Gr. WPB;; 2.; Veja os Materiais; Permitidos para Conexões Tubulares;; 3.; Veja a Tolerância; para Conexões de Solda;; 4.; Veja a Tabela; de Espessura de Tubos e Conexões Tubulares;; 5.; Para converter unidades de medida acesse a seção; de Conversão; de Medidas;; 6.; Veja Resistência; à Corrosão dos materiais da conexão;; 7.; Veja Composição; Química e Propriedades; Mecânicas dos materiais da conexão."
          }
        ]
      }
    ]
  },
  "filtros-filtro-cesto-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/filtro_cesto.html",
    "sourcePages": [
      {
        "title": "Filtro Tipo Cesto Simples classe 125 150 250 300 lbs flangeado padrão ANSI B16.5 em aço carbono ferro fundido inox e ligas elemento filtrante 304 316",
        "url": "http://www.valaco.com.br/produtos/filtro_cesto_simples.html"
      },
      {
        "title": "Filtros Tipo Cesto Duplo classe 250 300 lbs flangeado padrão ANSI B16.5 em aço carbono ferro fundido inox e ligas elemento filtrante 304 316",
        "url": "http://www.valaco.com.br/produtos/filtro_cesto_duplo.html"
      }
    ],
    "summary": "Dispensa ferramentas para manutenção;; Elemento; filtrante substituível;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Dispensa ferramentas para manutenção;; Elemento; filtrante substituível;"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5.; Não há vazameto; ou perda de líquido na remoção; da tampa;; Não possui peças; pequenas ou frágeis."
          }
        ]
      },
      {
        "title": "Descrição",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão (lbs); 125; 150; 250; 300; tipo Cesto, Corpo em Aço; Inoxidável ASTM A 351 Gr. CF8.; V2316; V2317; tipo Cesto, Corpo em; Aço Inoxidável ASTM A 351"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V2318; V2319; Carbono ASTM A 216 Gr. WCB.; V2320; V2321; tipo Cesto, Corpo em Ferro; Fundido ASTM A 126.; V2322; V2323; Flangeada"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Volante; 2 - Tampa móvel; 3 - Copilha; 4 - Eixo; 5 - Tampa; 6 - Guarnição; 7 - Corpo; 8 - Cesto; 9 - Bujão (plug); Filtrante; Aço; Inoxidável AISI 304; Inoxidável AISI 316"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo; do filtro;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo;; 3.; Para converter unidades de temperatura e"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "DOS ELEMENTOS FILTRANTES",
        "rows": [
          {
            "label": "Dados",
            "value": "Mesh; 500; 400; 325; 200; 100; 80; 60; 40; 20; 16; 10; Milímetros; 0,025; 0,036; 0,043; 0,061; 0,073; 0,104; 0,152; 0,178; 0,229; 0,397; 0,794; 1,191; 1,588; 1,984; 3,175; 5,159; Polegadas; 0,001; 0,0014; 0,0017; 0,0024; 0,0029; 0,0041; 0,006; 0,007; 0,009; 1/64; 1/32; 3/64; 1/16; 5/64; 1/8; 13/64; Microns; 25; 36; 43; 61; 73; 104; 152; 178; 229; 397; 794; 1191; 1588; 1984; 3175; 5159; Tipo; da malha; Chapa; de Aço Inoxidável, com reforço.; de Aço Inoxidável, perfurada."
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Dispensa ferramentas para manutenção;; Elemento; filtrante substituível;"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5;; Não há vazameto; ou perda de líquido na remoção; da tampa;; Indicadas para linhas em serviço; contínuo;; Duas câmeras de filtragem; com válvulas internas permitem; a limpeza do filtro sem interrupção; do fluxo;; Ausência de choque hidrâulico; na mudança de câmara;; É impossível interromper; o fluxo através do filtro."
          }
        ]
      },
      {
        "title": "Descrição",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão (lbs); 250; 300; tipo Duplo Cesto, Corpo em Aço; Inoxidável ASTM A 351 Gr. CF8.; V2324; tipo Duplo Cesto, Corpo em; Aço Inoxidável ASTM A 351"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V2325; Carbono ASTM A 216 Gr. WCB.; V2326; tipo Duplo Cesto, Corpo em Ferro; Nodular ASTM A 536 Gr. 65-45-12.; V2327; Flangeada; Filtrante; Aço; Inoxidável AISI 304; Inoxidável AISI 316"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo; do filtro;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo do filtro;; 3.; Para converter unidades de temperatura e"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "DOS ELEMENTOS FILTRANTES",
        "rows": [
          {
            "label": "Dados",
            "value": "Mesh; 500; 400; 325; 200; 150; 100; 80; 60; 40; 20; 16; 10; Milímetros; 0,025; 0,036; 0,043; 0,061; 0,073; 0,104; 0,152; 0,178; 0,229; 0,397; 0,794; 1,191; 1,588; 1,984; 3,175; 5,159; Polegadas; 0,001; 0,0014; 0,0017; 0,0024; 0,0029; 0,0041; 0,006; 0,007; 0,009; 1/64; 1/32; 3/64; 1/16; 5/64; 1/8; 13/64; Microns; 25; 36; 43; 61; 73; 104; 152; 178; 229; 397; 794; 1191; 1588; 1984; 3175; 5159; Tipo; da malha; Chapa; de Aço Inoxidável, com reforço.; de Aço Inoxidável, perfurada."
          }
        ]
      }
    ]
  },
  "filtros-filtro-y-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/filtro_y.html",
    "sourcePages": [
      {
        "title": "Filtros » Tipo \"Y\" » Rosca e SW",
        "url": "http://www.valaco.com.br/produtos/filtro_y_rscsw.html"
      },
      {
        "title": "Filtro Tipo Y classe 125 150 300 600 lbs flangeado padrão ANSI B16.5 em aço carbono ferro fundido inox e ligas elemento filtrante 304 316",
        "url": "http://www.valaco.com.br/produtos/filtro_y_flg.html"
      }
    ],
    "summary": "Em Aço Forjado e Ferro; Fundido; • Em; Bronze",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "Filtros » Tipo \"Y\" » Rosca e SW",
        "rows": [
          {
            "label": "Dados",
            "value": "Em Aço Forjado e Ferro; Fundido; • Em; Bronze"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Para uso em linhas de vapor, gases; ou líquidos;; À pedido pode ser fornecida; com rosca \"C\";; Elemento; filtrante substituível;"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "B 16.5."
          }
        ]
      },
      {
        "title": "Descrição",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão (lbs); 125; 150; 300; 600; tipo \"Y\", Corpo em Aço; Inoxidável ASTM A 351 Gr. CF8.; V2306; V2307; V2308; tipo \"Y\", Corpo em; Aço Inoxidável ASTM A 351"
          }
        ]
      },
      {
        "title": "Gr. CF8M.",
        "rows": [
          {
            "label": "Dados",
            "value": "V2309; V2310; V2311; Carbono ASTM A 216 Gr. WCB.; V2312; V2313; V2314; tipo \"Y\", Corpo em Ferro; Fundido ASTM A 126.; V2315"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1 - Corpo; 2 - Elemento Filtrante; 3 - Tampa; Filtrante; Aço; Inoxidável AISI 304; Inoxidável AISI 316"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo do filtro;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "DOS ELEMENTOS FILTRANTES",
        "rows": [
          {
            "label": "Dados",
            "value": "Mesh; 500; 400; 325; 250; 200; 100; 80; 60; 40; 20; 16; 10; Milímetros; 0,025; 0,036; 0,043; 0,061; 0,073; 0,104; 0,152; 0,178; 0,229; 0,397; 0,794; 1,191; 1,588; 1,984; 3,175; 5,159; Polegadas; 0,001; 0,0014; 0,0017; 0,0024; 0,0029; 0,0041; 0,006; 0,007; 0,009; 1/64; 1/32; 3/64; 1/16; 5/64; 1/8; 13/64; Microns; 25; 36; 43; 61; 73; 104; 152; 178; 229; 397; 794; 1191; 1588; 1984; 3175; 5159; Tipo da malha; Chapa; de Aço Inoxidável, com reforço.; de Aço Inoxidável, perfurada."
          }
        ]
      }
    ]
  },
  "purgadores-purg-bimetalico-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/purg_bimetalico.html",
    "sourcePages": [
      {
        "title": "Purgador Bimetálico",
        "url": "http://www.valaco.com.br/produtos/purg_bimetalico.html"
      }
    ],
    "summary": "Indicado como opção para; drenagens de linhas de vapor e traceamentos; onde não se justifica a instalação; de linha de retorno de condensado; Pode ser instalado em equipamentos sem; a necessidade de controle preciso d...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Indicado como opção para; drenagens de linhas de vapor e traceamentos; onde não se justifica a instalação; de linha de retorno de condensado; Pode ser instalado em equipamentos sem; a necessidade de controle preciso de temperatura;; Fabricado em aço inoxidável; e possui internamente um elemento composto; por discos bimetálicos também; fabricados em aço inoxidável;; Trabalha à pressão de até; 45 Kgf/cm²; e temperatura de até 300°C;; Fabricado no diâmetro de 1/2\";"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "purgadores-purg-balde-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/purg_balde.html",
    "sourcePages": [
      {
        "title": "Purgador De Balde Invertido",
        "url": "http://www.valaco.com.br/produtos/purg_balde.html"
      }
    ],
    "summary": "Extremamente robustos e resistente a golpes; de aríete;; Largamente utilizado para a remoção; de condensado de cilindros secadores em; indústrias de papel e celulose e; linhas gerais de vapor em petroquímicas; e refin...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Extremamente robustos e resistente a golpes; de aríete;; Largamente utilizado para a remoção; de condensado de cilindros secadores em; indústrias de papel e celulose e; linhas gerais de vapor em petroquímicas; e refinarias;; Corpo fabricado em ferro nodular, aço; carbono ou aço inoxidável; com internos totalmente em aço inoxidável;; Trabalha à pressão de até; 30 kgf/cm²; e temperatura de até 250°C;; Fabricado nos diâmetros de 1/2\"; até 1\";"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; - Encaixe para Solda (SW);; - Solda de Topo ( BW );; - Conexão Universal;; Fornecido com válvula de retenção; incorporada;; Pode ser fornecido com filtro incorporado;; Disponível com opção; de eliminador de vapor preso, que é; recomendado para cilindros secadores de; grande vazão e a conexão universal; que permite que o purgador seja instalado; em qualquer posição e facilita; a sua manutenção."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "purgadores-purg-boia-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/purg_boia.html",
    "sourcePages": [
      {
        "title": "Purgador De Bóia",
        "url": "http://www.valaco.com.br/produtos/purg_boia.html"
      }
    ],
    "summary": "Por possuírem descarga contínua,; são indicados como melhor opção; para remoção de condensado; de equipamentos que utilizam vapor, como; tanques, serpentinas, trocadores de calor,; digestores, secadores, cilindros, et...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Por possuírem descarga contínua,; são indicados como melhor opção; para remoção de condensado; de equipamentos que utilizam vapor, como; tanques, serpentinas, trocadores de calor,; digestores, secadores, cilindros, etc;; Pode ser utilizado para drenagem de umidade; de redes e pulmões de ar comprimido; onde não exista excesso de óleo;; Corpos e tampas em ferro nodular e aço; carbono com internos de aço inoxidável;; Trabalha à pressão de até; 17,6 kgf/cm²; e temperatura de 300°C (ferro nodular); e pressão de até 32 kgf/cm²; e temperatura de 400°C (aço carbono).;; Fabricado nos diâmetros de 1/2\"; até 6\";"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; - Flangeada;; Fornecido com eliminador termostático; de ar, podendo ser substituídos ou; acrescidos de elemento eliminador de vapor; preso, necessário quando utilizado; em cilindro secador, eixo de digestor e; outros equipamentos."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "purgadores-purg-eletronico-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/purg_eletronico.html",
    "sourcePages": [
      {
        "title": "Purgador Eletrônico",
        "url": "http://www.valaco.com.br/produtos/purg_eletronico.html"
      }
    ],
    "summary": "Indicado para a remoção; de água e óleo de redes e; pulmões de ar comprimido e outros; gases inertes;; Possui alta capacidade de descarga impedindo; o entupimento normalmente ocasionado por; sujeira ou óleo;; Fabricad...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Indicado para a remoção; de água e óleo de redes e; pulmões de ar comprimido e outros; gases inertes;; Possui alta capacidade de descarga impedindo; o entupimento normalmente ocasionado por; sujeira ou óleo;; Fabricado com corpo em polipropileno e; possui temporizador eletrônico com; ajuste do tempo de descarga e duração; do ciclo;; Possui grau de proteção; IP55;; Trabalha à pressão de até; 8 kgf/cm²; e temperatura de até 40°C;; Fabricado no diâmetro de 1/2\";"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; Tensão de alimentação; é de 220 Votls."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "purgadores-purg-termodinamico-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/purg_termodinamico.html",
    "sourcePages": [
      {
        "title": "Purgador Termodinâmico",
        "url": "http://www.valaco.com.br/produtos/purg_termodinamico.html"
      }
    ],
    "summary": "Recomendado para remoção; de condensado de linhas gerais de distribuição; de vapor e linhas de traceamento;; Pode ser utilizado para a remoção; de umidade de linhas de ar comprimido;; Fabricado em aço inoxidável; para...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Recomendado para remoção; de condensado de linhas gerais de distribuição; de vapor e linhas de traceamento;; Pode ser utilizado para a remoção; de umidade de linhas de ar comprimido;; Fabricado em aço inoxidável; para pressões de até 42; kgf/cm²; e em aço cromo para pressões; de até 62 kgf/cm²;; Trabalha à temperatura máxima; e 450°C;; Fabricado nos diâmetros de 3/8\"; até 1\";"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; - Encaixe para Solda (SW);; - Solda de Topo ( BW );; - Flangeadas;; Pode ser fornecido com filtro e válvula; de dreno incorporados."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Para instalação sujeita a intempéries; recomenda-se a utilização de capa protetora; em alumínio;; 2.; Veja Tabela de Resistência; à Corrosão;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "purgadores-purg-termostatico-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/purg_termostatico.html",
    "sourcePages": [
      {
        "title": "Purgador Termostático",
        "url": "http://www.valaco.com.br/produtos/purg_termostatico.html"
      }
    ],
    "summary": "Indicado para remoção de; ar de finais de linhas de distribuição; de vapor ou equipamentos encamisados;; Pode ser utilizado para drenagem de condensado; de linhas de vapor e traceamentos com descarga; para a atmosfera...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Indicado para remoção de; ar de finais de linhas de distribuição; de vapor ou equipamentos encamisados;; Pode ser utilizado para drenagem de condensado; de linhas de vapor e traceamentos com descarga; para a atmosfera;; Corpo fabricado em aço inoxidável;; Possui internamente uma cápsula; termostática de pressão balanceada; fabricada em aço inoxidável;; Trabalha à pressão de até; 22 kgf/cm²; e temperatura de até 250°C;; Fabricado nos diâmetros de 3/8\"; até 1\";"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; Fornecido com tela de filtragem incorporada; Passagens: reta-vertical, reta-horizontal; ou angular."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "vedacoes-ved-anel-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/ved_anel.html",
    "sourcePages": [
      {
        "title": "Anel O'Ring",
        "url": "http://www.valaco.com.br/produtos/ved_anel.html"
      }
    ],
    "summary": "Para obter informações sobre Anel O'Ring,; entre em contato com nosso departamento comercial através; do telefone 031 3361-6106 ou por e-mail: vendas@valaco.com.br.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ENTRE EM CONTATO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para obter informações sobre Anel O'Ring,; entre em contato com nosso departamento comercial através; do telefone 031 3361-6106 ou por e-mail: vendas@valaco.com.br."
          }
        ]
      }
    ]
  },
  "vedacoes-ved-fita-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/ved_fita.html",
    "sourcePages": [
      {
        "title": "Fita PTFE Veda Rosca",
        "url": "http://www.valaco.com.br/produtos/ved_fita.html"
      }
    ],
    "summary": "Facilidade de manuseio, economia de; tempo e acabamento mais limpo;; Completa vedação no aperto; das roscas;; Facilidade de desmontagem após; vários anos de utilização;; Proteção contra oxidações,; ferrugens, etc.;; R...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Facilidade de manuseio, economia de; tempo e acabamento mais limpo;; Completa vedação no aperto; das roscas;; Facilidade de desmontagem após; vários anos de utilização;; Proteção contra oxidações,; ferrugens, etc.;; Resistência à corrosão,; quando em contato direto com a maioria; dos agentes químicos;; Resistência à pressões; e à temperaturas de até; 240&ordm; C.; Medidas; Largura; 12 mm; 18 mm; 24 mm; Comprimento; 5 m; 10 m; 25 m; 50 m; Instruções de Uso; 1. Enrole a fita em volta da rosca girando o rolo no sentido horário, matendo a fita tensionada;; 2. Aplicar de 4 a 6 camadas, cobrindo todos os filetes da rosca e evitando sobras que cubram a passagem do tubo;; 3. Romper e assentar a fita."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão para PTFE;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "vedacoes-ved-gaxeta-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/ved_gaxeta.html",
    "sourcePages": [
      {
        "title": "Gaxeta",
        "url": "http://www.valaco.com.br/produtos/ved_gaxeta.html"
      }
    ],
    "summary": "Para obter informações sobre Gaxeta, entre; em contato com nosso departamento comercial através; do telefone 031 3361-6106 ou por e-mail: vendas@valaco.com.br.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ENTRE EM CONTATO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para obter informações sobre Gaxeta, entre; em contato com nosso departamento comercial através; do telefone 031 3361-6106 ou por e-mail: vendas@valaco.com.br."
          }
        ]
      }
    ]
  },
  "vedacoes-ved-junta-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/ved_junta.html",
    "sourcePages": [
      {
        "title": "Junta de Vedação",
        "url": "http://www.valaco.com.br/produtos/ved_junta.html"
      }
    ],
    "summary": "Para obter informações sobre Junta de Vedação,; entre em contato com nosso departamento comercial através; do telefone 031 3361-6106 ou por e-mail: vendas@valaco.com.br.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "ENTRE EM CONTATO",
        "rows": [
          {
            "label": "Dados",
            "value": "Para obter informações sobre Junta de Vedação,; entre em contato com nosso departamento comercial através; do telefone 031 3361-6106 ou por e-mail: vendas@valaco.com.br."
          }
        ]
      }
    ]
  },
  "instrumentos-instr-manometro-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/instr_manometro.html",
    "sourcePages": [
      {
        "title": "Manômetros",
        "url": "http://www.valaco.com.br/produtos/instr_manometro.html"
      }
    ],
    "summary": "Comuns; Industriais; Com; Caixa Hermético ou C/Glicerina; Propriedades; Especificações; De Aço; Inoxidável; Petroquímicos; De Aferição; (Teste); De Baixa Pressão; (mmCA); De Mostrador; Quadrado; De Dupla Ação; Diferen...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "MANÔMETROS",
        "rows": [
          {
            "label": "Dados",
            "value": "Comuns; Industriais; Com; Caixa Hermético ou C/Glicerina; Propriedades; Especificações; De Aço; Inoxidável; Petroquímicos; De Aferição; (Teste); De Baixa Pressão; (mmCA); De Mostrador; Quadrado; De Dupla Ação; Diferencial; Digital; Com Selo Sanitário; Com Transmissão; Mecânica; Com Limitador; de Pressão; Com Selo de; Diafragma e Protetor; Com Contato; Elétrico"
          }
        ]
      }
    ]
  },
  "instrumentos-instr-termometro-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/instr_termometro.html",
    "sourcePages": [
      {
        "title": "Termômetros",
        "url": "http://www.valaco.com.br/produtos/instr_termometro.html"
      }
    ],
    "summary": "Bimetálico; Comum; em Aço Inoxidável; de Ângulo Ajustável; Propriedades; Especificações; de Motores Marítimos; Motores Navais; De Expansão; à Gás; Para Transformador; Elétrico; Digital",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "TERMÔMETROS",
        "rows": [
          {
            "label": "Dados",
            "value": "Bimetálico; Comum; em Aço Inoxidável; de Ângulo Ajustável; Propriedades; Especificações; de Motores Marítimos; Motores Navais; De Expansão; à Gás; Para Transformador; Elétrico; Digital"
          }
        ]
      }
    ]
  },
  "acessorios-amortecedor-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/amortecedor.html",
    "sourcePages": [
      {
        "title": "Amortecedor de Vibração",
        "url": "http://www.valaco.com.br/produtos/amortecedor.html"
      }
    ],
    "summary": "Destinadas a absorver vibrações; mecânicas originadas em fontes; como: bombas, turbinas, compressores,; motores, etc. evitando a propagação; destas para o restante da tubulação;; Fole em aço inoxidável;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Destinadas a absorver vibrações; mecânicas originadas em fontes; como: bombas, turbinas, compressores,; motores, etc. evitando a propagação; destas para o restante da tubulação;; Fole em aço inoxidável;"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Biselada para solda de topo BW;; - Flanges fixos padrão ANSI; ou DIN;; - Flanges giratórios padrão"
          }
        ]
      },
      {
        "title": "ANSI",
        "rows": [
          {
            "label": "Dados",
            "value": "Temperatura de trabalho: de -40°C; até + 500°C;; Também disponível; versão com tirante;; Pode ser fornecida com dois ou; mais foles, sob consulta."
          }
        ]
      },
      {
        "title": "Descrição",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura; Junta; de Expansão Axial com Fole em Aço; Inoxidável AISI 304, extremidades; flangeadas.; AM01; biseladas para solda de topo.; AM02"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da junta;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "acessorios-aces-eliminador-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/aces_eliminador.html",
    "sourcePages": [
      {
        "title": "Eliminador de Ar para Liquidos",
        "url": "http://www.valaco.com.br/produtos/aces_eliminador.html"
      }
    ],
    "summary": "Indicado para remoção; de \"bolsões\" de ar em; tubulações que impedem o; fluxo normal e causam bloqueio;; Fabricado em ferro fundido nodular e; aço inoxidável;; Trabalha à pressões de; até 22 kgf/cm²; e 250°C de temper...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Indicado para remoção; de \"bolsões\" de ar em; tubulações que impedem o; fluxo normal e causam bloqueio;; Fabricado em ferro fundido nodular e; aço inoxidável;; Trabalha à pressões de; até 22 kgf/cm²; e 250°C de temperatura;"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; Recomendado para água e outros; fluidos (sob consulta)."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja também opção de ventosa; para remoção de ar na linha;; 2.; Veja Tabela de Resistência; à Corrosão;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4."
          }
        ]
      }
    ]
  },
  "acessorios-aces-grampou-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/aces_grampou.html",
    "sourcePages": [
      {
        "title": "Grampo U Galvanizado",
        "url": "http://www.valaco.com.br/produtos/aces_grampou.html"
      }
    ],
    "summary": "Fabricado em Aço Galvanizado, Aço Inoxidável 304L ou 316L, com porcas e arruela; de pressão para fixação; de tubulação em diversos; ângulos;; Diâmetros de 3/8\" à; 48\";; Diâmetro da Rosca pode ser fabricado de acordo c...",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "GRAMPO",
        "rows": [
          {
            "label": "Dados",
            "value": "\"U\""
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Fabricado em Aço Galvanizado, Aço Inoxidável 304L ou 316L, com porcas e arruela; de pressão para fixação; de tubulação em diversos; ângulos;; Diâmetros de 3/8\" à; 48\";; Diâmetro da Rosca pode ser fabricado de acordo com a necessidade do cliente;; Polido, Gavanizado; eletrolítico, (Zincado) Branco, Bicromatizado ou Galvanizado à Fogo."
          }
        ]
      },
      {
        "title": "APROXIMADAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Diâmetro &Oslash;; Interno A (mm); Compri. Rosca B (mm); Altura C (mm); Diâm. Rosca D (Polegada); 3/8\"; 19; 25; 44; Sob Consulta; 1/2\"; 24; 35; 53; 3/4\"; 29; 63; 1\"; 40; 68; 1.1/4\"; 73; 1.1/2\"; 51; 81; 2\"; 62; 50; 100; 2.1/2\"; 75; 109; 3\"; 91; 130; 3.1/2\"; 106; 55; 150; 4\"; 118; 60; 158; 5\"; 144; 80; 198; 6\"; 172; 238; 8\"; 222; 287; 10\"; 276; 105; 355; 12\"; 328; 110; 382; 14\"; 359; 120; 430; 16\"; 420; 510; 18\"; 463; 574; 20\"; 514; 585; 22\"; 570; 665; 24\"; 615; 705; 26\"; 662; 743; 28\"; 715; 807; 30\"; 675; 856; 32\"; 815; 905; 34\"; 870; 963; 36\"; 920; 1014; 40\"; 1020; 1111; 48\"; 1230; 180; 1380"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "acessorios-indicador-nivel-brz-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/indicador_nivel_brz.html",
    "sourcePages": [
      {
        "title": "Indicador de Nível para Líquidos",
        "url": "http://www.valaco.com.br/produtos/indicador_nivel_brz.html"
      }
    ],
    "summary": "( BSP; / NPT; Para uso em tanques, reservatórios,; caldeiras, autoclaves e outras instalações; similares;; Vedação tipo agulha;; Válvula de purga de 1/8 BSPT;; Extremidade com rosca;; Diâmetro nominal de 3/8\" a; 2\".",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M081"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT; Para uso em tanques, reservatórios,; caldeiras, autoclaves e outras instalações; similares;; Vedação tipo agulha;; Válvula de purga de 1/8 BSPT;; Extremidade com rosca;; Diâmetro nominal de 3/8\" a; 2\"."
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "ASTM B62 C836",
        "rows": [
          {
            "label": "Dados",
            "value": "150 s (300 WOG ); / PN 20"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      }
    ]
  },
  "acessorios-prod-junta-expansao-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/prod_junta_expansao.html",
    "sourcePages": [
      {
        "title": "Junta de Expansão",
        "url": "http://www.valaco.com.br/produtos/prod_junta_expansao.html"
      }
    ],
    "summary": "• Axial; Fole; • De Borracha",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "Junta de Expansão",
        "rows": [
          {
            "label": "Dados",
            "value": "• Axial; Fole; • De Borracha"
          }
        ]
      }
    ]
  },
  "acessorios-aces-separador-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/aces_separador.html",
    "sourcePages": [
      {
        "title": "Separador de Umidade",
        "url": "http://www.valaco.com.br/produtos/aces_separador.html"
      }
    ],
    "summary": "Indicado para remoção; da umidade e gotículas d'água; em suspensão de sistemas de vapor; e ar comprimido;; Fabricado em ferro fundido nodular e; aço carbono;; Trabalha à pressões de; até 21 kgf/cm²;",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Indicado para remoção; da umidade e gotículas d'água; em suspensão de sistemas de vapor; e ar comprimido;; Fabricado em ferro fundido nodular e; aço carbono;; Trabalha à pressões de; até 21 kgf/cm²;"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Rosca BSP;; - Rosca; NPT;; - Flangeada;; Pode ser fornecido para montagem na; posição vertical ou horizontal."
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Tabela de Resistência; à Corrosão;; 2.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "acessorios-acessorios-ventosa-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/acessorios_ventosa.html",
    "sourcePages": [
      {
        "title": "Ventosa Simples",
        "url": "http://www.valaco.com.br/produtos/acessorios_ventosa_simples.html"
      },
      {
        "title": "Ventosa Tríplice Função",
        "url": "http://www.valaco.com.br/produtos/acessorios_ventosa_triplice.html"
      }
    ],
    "summary": "Destinada à canalizações; de pequenas vazões, pois; a admissão ou vazão; máxima de ar é de; 2 litros por segundo para um diferencial; de pressão de 5 métros; de coluna d'água.",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "2"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Destinada à canalizações; de pequenas vazões, pois; a admissão ou vazão; máxima de ar é de; 2 litros por segundo para um diferencial; de pressão de 5 métros; de coluna d'água."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de serviço: 16kgf/cm²"
          }
        ]
      },
      {
        "title": "Extremidades:",
        "rows": [
          {
            "label": "Dados",
            "value": "- Roscada ( BSP; / NPT; );; - Flangeada conforme; padrão NBR; 7675 e ISO; 2531."
          }
        ]
      },
      {
        "title": "Descrição",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura"
          }
        ]
      },
      {
        "title": "Classe de",
        "rows": [
          {
            "label": "Dados",
            "value": "PN10; PN16; PN25; simples, Corpo em Ferro Fundido Nodular; NBR FE 42012, extremidade flangeada.; V2400; V2401; V2402; simples, Corpo em Aço; Inoxidável ASTM A 351 Gr. CF8M,; extremidade flangeada.; V2403; V2404; V2405; NBR FE 42012, extremidade roscada.; V2406; extremidade roscada.; V2407"
          }
        ]
      },
      {
        "title": "FLANGEADA",
        "rows": [
          {
            "label": "Dados",
            "value": "COM"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "5 - Tampa; 6 - Respiro; 7 - Tampa; 8 - Flutuador; 9 - Corpo"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo da ventosa;; 2.; Veja Resistência; à Corrosão dos materiais; do; corpo da ventosa;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas."
          }
        ]
      },
      {
        "title": "Ventosa Tríplice Função",
        "rows": [
          {
            "label": "Dados",
            "value": "Função"
          }
        ]
      },
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "Destinada à tubulações; de grandes vazões ou admissões; de ar até 150 litros por; segundo para DN 50, e 500 litros; por segundo para DN 100, com um; diferencial de pressão de; 5 metros de coluna d'água;"
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de serviço: 16kgf/cm²;"
          }
        ]
      },
      {
        "title": "Extremidades flangeada",
        "rows": [
          {
            "label": "Dados",
            "value": "conforme padrão NBR; 7675 e ISO; 2531."
          }
        ]
      },
      {
        "title": "Descrição",
        "rows": [
          {
            "label": "Dados",
            "value": "Figura"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; PN10; PN16; PN25; simples, Corpo em Ferro Fundido Nodular; NBR FE 42012, extremidade flangeada.; V2408; V2409; V2410; simples, Corpo em Aço; Inoxidável ASTM A 351 Gr. CF8M,; extremidade flangeada.; V2411; V2412; V2413"
          }
        ]
      },
      {
        "title": "Componentes",
        "rows": [
          {
            "label": "Dados",
            "value": "1- Sobretampa; 2 - Tampa principal; 3 - Vedação; 4 - Flutuador; 5 - Tampa; 6 - Respiro; 7 - Tampa; 8 - Flutuador; 9 - Corpo"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais; do corpo;; 2.; Veja Resistência; à Corrosão dos materiais; do corpo da ventosa;; 3.; Para converter unidades de temperatura"
          }
        ]
      },
      {
        "title": "pressão acesse a seção",
        "rows": [
          {
            "label": "Dados",
            "value": "de Conversão; de Medidas."
          }
        ]
      }
    ]
  },
  "acessorios-acessorios-visor-brz-html": {
    "sourceUrl": "http://www.valaco.com.br/produtos/acessorios_visor_brz.html",
    "sourcePages": [
      {
        "title": "Visor de Controle para Vapor",
        "url": "http://www.valaco.com.br/produtos/acessorios_visor_brz.html"
      }
    ],
    "summary": "( BSP; / NPT; Corpo de bronze e visor de vidro temperado; de alta resistência, para usos em; linhas de vapor condensado;; Diâmetro nominal de 3/8\" a; 2\".",
    "specs": [
      {
        "label": "Paginas tecnicas",
        "value": "1"
      }
    ],
    "technicalSections": [
      {
        "title": "CARACTERÍSTICAS",
        "rows": [
          {
            "label": "Dados",
            "value": "M088"
          }
        ]
      },
      {
        "title": "Extremidades Roscadas",
        "rows": [
          {
            "label": "Dados",
            "value": "( BSP; / NPT; Corpo de bronze e visor de vidro temperado; de alta resistência, para usos em; linhas de vapor condensado;; Diâmetro nominal de 3/8\" a; 2\"."
          }
        ]
      },
      {
        "title": "Pressão",
        "rows": [
          {
            "label": "Dados",
            "value": "de Serviço; Vapor; condensado; 50 PSI (3,5 Bar); Líquidos até; 60°C; 100 PSI (7 Bar)"
          }
        ]
      },
      {
        "title": "Materiais",
        "rows": [
          {
            "label": "Dados",
            "value": "do Corpo e Tampa"
          }
        ]
      },
      {
        "title": "Classe",
        "rows": [
          {
            "label": "Dados",
            "value": "de Pressão; Bronze"
          }
        ]
      },
      {
        "title": "ASTM B62 C836",
        "rows": [
          {
            "label": "Dados",
            "value": "150 s (300 WOG ); / PN 20"
          }
        ]
      },
      {
        "title": "Notas:",
        "rows": [
          {
            "label": "Dados",
            "value": "1.; Veja Composição; Química e Propriedades; Mecânicas dos materiais do corpo da válvula;; 2.; Veja Resistência; à Corrosão dos materiais do corpo da; válvula;; 3.; Para converter unidades de temperatura e pressão; acesse a seção de Conversão; de Medidas;; 4.; Veja recomendação; para utilização das válvulas mais; usuais."
          }
        ]
      }
    ]
  }
};
