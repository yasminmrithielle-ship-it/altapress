import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Building2,
  ChevronRight,
  Filter,
  Image as ImageIcon,
  Info,
  Menu,
  PackageSearch,
  Ruler,
  Search,
  X,
} from 'lucide-react-native';
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

const classes: FlangeClass[] = [
  '150lbs',
  '300lbs',
  '600lbs',
  'PN10',
  'PN16',
  'PN25',
  'PN40',
];

const standards: Standard[] = ['ANSI / ASME B16.5', 'DIN / EN 1092-1'];

type ClassFilter = FlangeClass | 'Todas';
type StandardFilter = Standard | 'Todas';

function formatCode(item: Flange) {
  return `${item.dn ?? '-'}${item.nps ? ` / ${item.nps}` : ''}`;
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

export default function App() {
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const [catalogQuery, setCatalogQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassFilter>('Todas');
  const [selectedStandard, setSelectedStandard] =
    useState<StandardFilter>('Todas');
  const [selected, setSelected] = useState<Flange | null>(FLANGES[0] ?? null);
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

  const catalogGroups = useMemo(() => {
    const q = catalogQuery.trim().toLowerCase();

    return CATALOG_CATEGORIES.map((category) => {
      const items = CATALOG_ITEMS.filter((item) => {
        if (item.category !== category) {
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

      return { category, items };
    }).filter((group) => group.items.length > 0);
  }, [catalogQuery]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return FLANGES.filter((item) => {
      const matchSearch =
        !q ||
        item.nps?.toLowerCase().includes(q) ||
        item.dn?.toLowerCase().includes(q) ||
        item.tipo.toLowerCase().includes(q) ||
        item.classe.toLowerCase().includes(q) ||
        item.standard.toLowerCase().includes(q);

      const matchClass =
        selectedClass === 'Todas' || item.classe === selectedClass;
      const matchStandard =
        selectedStandard === 'Todas' || item.standard === selectedStandard;

      return Boolean(matchSearch && matchClass && matchStandard);
    });
  }, [query, selectedClass, selectedStandard]);

  useEffect(() => {
    if (!filtered.length) {
      setSelected(null);
      return;
    }

    setSelected((current) => {
      if (current && filtered.some((item) => item.id === current.id)) {
        return current;
      }

      return filtered[0];
    });
  }, [filtered]);

  const header = (
    <>
      <View style={styles.heroShell}>
        <View style={[styles.heroGlow, styles.heroGlowRight]} />
        <View style={[styles.heroGlow, styles.heroGlowLeft]} />

        <View style={styles.heroInner}>
          <View style={styles.headerBar}>
            <Pressable
              style={styles.menuButton}
              onPress={() => setMenuOpen(true)}
              accessibilityRole="button"
              accessibilityLabel="Abrir catalogo"
            >
              <Menu color={COLORS.white} size={22} />
            </Pressable>

            <View style={styles.headerBrand}>
              <View style={styles.headerLogoCard}>
                <Image
                  source={require('./assets/alta-press-logo-banner.png')}
                  style={styles.headerLogoImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            <Pressable
              style={styles.headerCta}
              onPress={() =>
                Alert.alert(
                  'ALTA PRESS',
                  'Consulte normas, classes e medidas com rapidez.',
                )
              }
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
              Flanges e conexoes para alta pressao com visual de catalogo
              profissional.
            </Text>
            <Text style={styles.heroText}>
              Pesquise DN, NPS, normas, classes, furacao e parafusos no mesmo
              clima visual do site institucional da ALTA PRESS.
            </Text>

            <View style={styles.highlightRow}>
              <HighlightPill label="ANSI / ASME B16.5" />
              <HighlightPill label="DIN / EN 1092-1" />
              <HighlightPill label="Consulta em campo" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.introWrap}>
        <View style={styles.introCard}>
          <View style={styles.introTop}>
            <View style={styles.introCopy}>
              <Text style={styles.introLabel}>Base tecnica ALTA PRESS</Text>
              <Text style={styles.introTitle}>
                Localize medidas de forma clara no balcao, oficina ou
                manutencao.
              </Text>
              <Text style={styles.introText}>
                O app foi redesenhado para seguir a linguagem da ALTA PRESS:
                grafite intenso, vermelho de impacto, prata metalica e leitura
                limpa.
              </Text>
            </View>

            <View style={styles.metricGrid}>
              <MetricCard label="Normas" value="2" />
              <MetricCard label="Classes" value="7" />
              <MetricCard label="Consulta" value="Rapida" />
            </View>
          </View>

          <View style={styles.searchPanel}>
            <View style={styles.searchBox}>
              <Search color={COLORS.red} size={18} />
              <TextInput
                style={styles.input}
                placeholder="Buscar por DN, NPS, norma, tipo ou classe..."
                placeholderTextColor={COLORS.muted}
                value={query}
                onChangeText={setQuery}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionBlock}>
        <SectionHeading
          icon={<Filter color={COLORS.red} size={18} />}
          title="Filtros tecnicos"
          text="Refine rapidamente por classe e norma."
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipsLine}
        >
          {(['Todas', ...classes] as const).map((value) => (
            <Chip
              key={value}
              label={value}
              active={selectedClass === value}
              onPress={() => setSelectedClass(value)}
            />
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipsLine}
        >
          {(['Todas', ...standards] as const).map((value) => (
            <Chip
              key={value}
              label={value}
              active={selectedStandard === value}
              onPress={() => setSelectedStandard(value)}
            />
          ))}
        </ScrollView>
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
            text="Compare OD, PCD e furacao entre normas e classes."
            onPress={() =>
              Alert.alert(
                'Em breve',
                'Aqui entra a tela de comparacao lado a lado.',
              )
            }
          />
          <ToolCard
            icon={<ImageIcon color={COLORS.red} size={22} />}
            title="Leitura por foto"
            text="Sugestao visual para acelerar a identificacao da peca."
            onPress={() =>
              Alert.alert(
                'Em breve',
                'Integre camera + IA para sugestao da peca.',
              )
            }
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

      {selected ? (
        <View style={styles.sectionBlock}>
          <SectionHeading
            icon={<Building2 color={COLORS.red} size={18} />}
            title="Configuracao selecionada"
            text="Visual tecnico com foco nas medidas principais."
          />
          <DetailsCard item={selected} />
        </View>
      ) : null}

      <View style={styles.sectionBlock}>
        <View style={styles.bannerCard}>
          <Text style={styles.bannerEyebrow}>ALTA PRESS</Text>
          <Text style={styles.bannerTitle}>
            Base visual alinhada ao site institucional.
          </Text>
          <Text style={styles.bannerText}>
            O app agora usa a paleta da marca: preto grafite, vermelho forte e
            tons metalicos para um catalogo tecnico mais fiel a ALTA PRESS.
          </Text>
        </View>
      </View>

      <View style={styles.sectionBlock}>
        <SectionHeading
          icon={<Info color={COLORS.red} size={18} />}
          title="Resultados"
          text={`${filtered.length} item(ns) encontrados para sua consulta.`}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        style={styles.list}
        data={filtered}
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
        ListEmptyComponent={
          <Text style={styles.empty}>
            Nenhuma peca encontrada com esses filtros.
          </Text>
        }
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
              <Text style={styles.drawerTitle}>Catalogo</Text>
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

          <ScrollView
            style={styles.drawerScroll}
            contentContainerStyle={styles.drawerScrollContent}
            showsVerticalScrollIndicator={false}
          >
            {catalogGroups.map((group) => (
              <View key={group.category} style={styles.drawerGroup}>
                <View style={styles.drawerGroupHeader}>
                  <Text style={styles.drawerGroupTitle}>{group.category}</Text>
                  <Text style={styles.drawerGroupCount}>
                    {group.items.length}
                  </Text>
                </View>

                {group.items.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
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

function HighlightPill({ label }: { label: string }) {
  return (
    <View style={styles.highlightPill}>
      <Text style={styles.highlightPillText}>{label}</Text>
    </View>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

function Chip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, active && styles.chipActive]}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>
        {label}
      </Text>
    </Pressable>
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

function getCatalogStatusLabel(status: CatalogItem['status']) {
  switch (status) {
    case 'alta-press':
      return 'Alta Press';
    case 'authorized-ready':
      return 'Pronto para autorizados';
    case 'catalog-placeholder':
      return 'Imagem em breve';
  }
}

function CatalogCard({ item }: { item: CatalogItem }) {
  return (
    <View style={styles.catalogCard}>
      <View style={styles.catalogCardTop}>
        <View style={styles.catalogImageSlot}>
          <ImageIcon color={COLORS.redDeep} size={18} />
        </View>
        <View style={styles.catalogCopy}>
          <Text style={styles.catalogCategory}>{item.category}</Text>
          <Text style={styles.catalogTitle}>{item.title}</Text>
        </View>
        <ChevronRight color={COLORS.muted} size={18} />
      </View>

      <Text style={styles.catalogSummary}>{item.summary}</Text>

      <View style={styles.catalogSpecGrid}>
        {item.specs.slice(0, 3).map((spec) => (
          <View key={`${item.id}-${spec.label}`} style={styles.catalogSpec}>
            <Text style={styles.catalogSpecLabel}>{spec.label}</Text>
            <Text style={styles.catalogSpecValue}>{spec.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.catalogFooter}>
        <Text style={styles.catalogStatus}>
          {getCatalogStatusLabel(item.status)}
        </Text>
      </View>
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
    paddingTop: 16,
    paddingBottom: 112,
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
    width: 280,
    height: 280,
    top: 34,
    right: -110,
  },
  heroGlowLeft: {
    width: 240,
    height: 240,
    top: 210,
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
    marginBottom: 22,
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
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  headerLogoCard: {
    width: 112,
    height: 56,
    borderRadius: 8,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  headerLogoImage: {
    width: '96%',
    height: '96%',
    alignSelf: 'center',
    borderRadius: 8,
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
    borderRadius: 32,
    backgroundColor: COLORS.inkSoft,
    borderWidth: 1,
    borderColor: COLORS.borderOnDark,
    padding: 28,
    alignItems: 'center',
  },
  heroLogoPanel: {
    width: '100%',
    height: 164,
    borderRadius: 10,
    backgroundColor: 'transparent',
    marginBottom: 20,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  heroLogoImage: {
    width: '98%',
    height: '98%',
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
    fontSize: 36,
    lineHeight: 38,
    fontWeight: '900',
    textAlign: 'center',
  },
  heroText: {
    color: COLORS.mutedOnDark,
    fontSize: 15,
    lineHeight: 24,
    marginTop: 16,
    textAlign: 'center',
  },
  highlightRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  highlightPill: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.28)',
  },
  highlightPillText: {
    color: COLORS.textOnDark,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  introWrap: {
    marginTop: -84,
    paddingHorizontal: 18,
  },
  introCard: {
    borderRadius: 32,
    backgroundColor: COLORS.ink,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    padding: 24,
    shadowColor: COLORS.bg,
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },
  introTop: {
    gap: 20,
    alignItems: 'center',
  },
  introCopy: {
    gap: 10,
    alignItems: 'center',
  },
  introLabel: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  introTitle: {
    color: COLORS.textDark,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  introText: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  metricCard: {
    minWidth: '30%',
    flexGrow: 1,
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: COLORS.silverStrong,
    borderWidth: 1,
    borderColor: COLORS.borderSoft,
    alignItems: 'center',
  },
  metricLabel: {
    color: COLORS.redDeep,
    fontSize: 11,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  metricValue: {
    color: COLORS.textDark,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 8,
    textAlign: 'center',
  },
  searchPanel: {
    marginTop: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.silverSoft,
    borderRadius: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },
  input: {
    flex: 1,
    height: 54,
    color: COLORS.textDark,
    fontSize: 15,
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
  chipsLine: {
    marginBottom: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: COLORS.inkSoft,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    marginRight: 8,
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: COLORS.red,
    borderColor: COLORS.red,
  },
  chipText: {
    color: COLORS.textDark,
    fontWeight: '700',
    textAlign: 'center',
  },
  chipTextActive: {
    color: COLORS.white,
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
  drawerLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  drawerScrimButton: {
    ...StyleSheet.absoluteFillObject,
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
    paddingHorizontal: 16,
    shadowColor: COLORS.bg,
    shadowOpacity: 0.22,
    shadowRadius: 22,
    shadowOffset: { width: 10, height: 0 },
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
  drawerScroll: {
    flex: 1,
  },
  drawerScrollContent: {
    paddingBottom: 28,
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
  },
  catalogCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  catalogImageSlot: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(215,25,32,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(215,25,32,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    marginTop: 4,
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
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 12,
  },
  catalogStatus: {
    color: COLORS.silver,
    fontSize: 12,
    fontWeight: '800',
    flex: 1,
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
