// Datos del caso de estudio LEGO para el dashboard IVALOR

export interface IntangibleMetric {
  name: string;
  category: string;
  value: number;
  target: number;
  trend: "up" | "down" | "stable";
  impact: string;
}

export interface FinancialMetric {
  year: number;
  revenue: number; // en millones
  operatingMargin: number; // porcentaje
  debt: number; // en millones
  cashFlow: number; // en millones
}

export interface IvalorPhase {
  id: string;
  name: string;
  description: string;
  actions: string[];
  results: string[];
  metrics: IntangibleMetric[];
  governance?: {
    structure: Array<{
      role: string;
      responsibility: string;
      accountability: string;
    }>;
    decisionFramework: string[];
  };
}

// Datos financieros históricos de LEGO
export const financialData: FinancialMetric[] = [
  { year: 1998, revenue: 1200, operatingMargin: 18.5, debt: 200, cashFlow: 150 },
  { year: 1999, revenue: 1180, operatingMargin: 18.0, debt: 250, cashFlow: 140 },
  { year: 2000, revenue: 1150, operatingMargin: 16.5, debt: 320, cashFlow: 120 },
  { year: 2001, revenue: 1100, operatingMargin: 14.0, debt: 450, cashFlow: 80 },
  { year: 2002, revenue: 1050, operatingMargin: 10.5, debt: 600, cashFlow: 20 },
  { year: 2003, revenue: 735, operatingMargin: 2.4, debt: 800, cashFlow: -160 },
  { year: 2004, revenue: 850, operatingMargin: 5.2, debt: 750, cashFlow: -50 },
  { year: 2005, revenue: 1050, operatingMargin: 10.8, debt: 600, cashFlow: 80 },
  { year: 2006, revenue: 1350, operatingMargin: 15.6, debt: 400, cashFlow: 180 },
  { year: 2007, revenue: 1600, operatingMargin: 17.2, debt: 280, cashFlow: 250 },
  { year: 2008, revenue: 1850, operatingMargin: 18.5, debt: 180, cashFlow: 320 },
  { year: 2009, revenue: 2100, operatingMargin: 19.8, debt: 120, cashFlow: 400 },
  { year: 2010, revenue: 2400, operatingMargin: 21.0, debt: 80, cashFlow: 480 },
  { year: 2011, revenue: 2800, operatingMargin: 22.5, debt: 50, cashFlow: 580 },
  { year: 2012, revenue: 3400, operatingMargin: 24.0, debt: 30, cashFlow: 720 },
  { year: 2013, revenue: 4200, operatingMargin: 25.5, debt: 20, cashFlow: 950 },
  { year: 2014, revenue: 5100, operatingMargin: 27.0, debt: 15, cashFlow: 1200 },
];

// Métricas de intangibles por fase IVALOR
export const intangibleMetrics: Record<string, IntangibleMetric[]> = {
  identificar: [
    {
      name: "Valor de Marca",
      category: "Marca",
      value: 85,
      target: 90,
      trend: "up",
      impact: "Alto - Reconocimiento global del 94%",
    },
    {
      name: "Engagement Comunidad",
      category: "Capital Relacional",
      value: 78,
      target: 85,
      trend: "up",
      impact: "Alto - 2.5M fans activos en LEGO Ideas",
    },
    {
      name: "Índice de Innovación",
      category: "Capital Intelectual",
      value: 72,
      target: 80,
      trend: "stable",
      impact: "Medio - 350+ nuevos sets anuales",
    },
    {
      name: "Cultura Organizacional",
      category: "Capital Humano",
      value: 88,
      target: 90,
      trend: "up",
      impact: "Alto - 92% satisfacción empleados",
    },
  ],
  valorar: [
    {
      name: "Coste Dilución Marca",
      category: "Riesgo",
      value: 800,
      target: 0,
      trend: "down",
      impact: "Crítico - $800M deuda por diversificación fallida",
    },
    {
      name: "Valor Potencial Comunidad",
      category: "Oportunidad",
      value: 250,
      target: 500,
      trend: "up",
      impact: "Alto - Potencial de co-creación valorado en $250M+",
    },
    {
      name: "ROI Innovación Digital",
      category: "Oportunidad",
      value: 180,
      target: 300,
      trend: "up",
      impact: "Alto - Videojuegos y plataformas digitales",
    },
  ],
  activar: [
    {
      name: "Productos Co-creados",
      category: "Comunidad",
      value: 45,
      target: 60,
      trend: "up",
      impact: "Alto - 45 sets lanzados vía LEGO Ideas",
    },
    {
      name: "Reducción Complejidad",
      category: "Innovación",
      value: 65,
      target: 80,
      trend: "up",
      impact: "Medio - 65% reducción en piezas únicas",
    },
    {
      name: "Ventas Digitales",
      category: "Marca",
      value: 320,
      target: 500,
      trend: "up",
      impact: "Alto - $320M en videojuegos y contenido digital",
    },
  ],
  liderar: [
    {
      name: "Alineación Estratégica",
      category: "Liderazgo",
      value: 92,
      target: 95,
      trend: "up",
      impact: "Crítico - 92% decisiones alineadas con núcleo",
    },
    {
      name: "Disciplina Financiera",
      category: "Gobierno",
      value: 88,
      target: 90,
      trend: "stable",
      impact: "Alto - Margen operativo del 27%",
    },
  ],
  organizar: [
    {
      name: "Eficiencia Cadena Suministro",
      category: "Operaciones",
      value: 82,
      target: 90,
      trend: "up",
      impact: "Alto - 40% reducción en proveedores",
    },
    {
      name: "Tiempo Desarrollo Producto",
      category: "Procesos",
      value: 75,
      target: 85,
      trend: "up",
      impact: "Medio - De 18 a 12 meses promedio",
    },
  ],
  retornar: [
    {
      name: "Crecimiento Ingresos",
      category: "Financiero",
      value: 900,
      target: 1000,
      trend: "up",
      impact: "Crítico - 900% crecimiento 2004-2014",
    },
    {
      name: "Margen Operativo",
      category: "Rentabilidad",
      value: 27.0,
      target: 30.0,
      trend: "up",
      impact: "Crítico - De 2.4% a 27% en 10 años",
    },
    {
      name: "Liderazgo Mercado",
      category: "Posicionamiento",
      value: 100,
      target: 100,
      trend: "stable",
      impact: "Crítico - #1 fabricante juguetes mundial",
    },
  ],
};

// Fases del framework IVALOR aplicadas a LEGO
export const ivalorPhases: IvalorPhase[] = [
  {
    id: "identificar",
    name: "I - IDENTIFICAR",
    description: "Identificación de los intangibles críticos que definen el valor de LEGO",
    actions: [
      "Auditoría completa de activos intangibles",
      "Diagnóstico de erosión de marca por diversificación",
      "Mapeo de comunidad de fans (AFOLs) como activo latente",
      "Evaluación de cultura organizacional y disciplina financiera",
    ],
    results: [
      "4 intangibles críticos identificados: Marca, Comunidad, Innovación, Cultura",
      "Reconocimiento del ladrillo interconectable como activo central",
      "Identificación de la comunidad de fans como motor de co-creación",
    ],
    metrics: intangibleMetrics.identificar,
  },
  {
    id: "valorar",
    name: "V - VALORAR",
    description: "Cuantificación del impacto financiero de los intangibles",
    actions: [
      "Valoración del coste de la dilución de marca: $800M en deuda",
      "Cuantificación de la caída de ventas: -30% en 2003",
      "Estimación del valor potencial de la comunidad para co-creación",
      "Análisis del impacto del estancamiento de innovación en margen operativo",
    ],
    results: [
      "Coste total de mala gestión: $800M deuda + $160M flujo caja negativo",
      "Margen operativo desplomado de 18% a 2.4%",
      "Valor potencial de comunidad estimado en $250M+ anuales",
    ],
    metrics: intangibleMetrics.valorar,
  },
  {
    id: "activar",
    name: "A - ACTIVAR",
    description: "Conversión de intangibles en acciones estratégicas concretas",
    actions: [
      "Venta de activos no estratégicos (LEGOLAND)",
      "Lanzamiento de LEGO Ideas para co-creación con fans",
      "Reducción drástica de piezas únicas (disciplina innovación)",
      "Expansión digital coherente: videojuegos y Mindstorms",
    ],
    results: [
      "100% foco en el ladrillo como producto central",
      "45 sets exitosos lanzados vía LEGO Ideas",
      "$320M generados en contenido digital alineado con marca",
      "65% reducción en complejidad de piezas",
    ],
    metrics: intangibleMetrics.activar,
  },
  {
    id: "liderar",
    name: "L - LIDERAR",
    description: "Gobierno corporativo y liderazgo del cambio",
    actions: [
      "Nombramiento de Jørgen Vig Knudstorp como CEO (2004)",
      "Implementación de disciplina financiera implacable",
      "Creación de comité ejecutivo para revisión de rentabilidad",
      "Establecimiento de criterio único: ¿Fortalece nuestro núcleo?",
      "Definición de estructura de gobernanza de intangibles",
      "Asignación de roles y responsabilidades claras",
      "Implementación de métricas de accountability",
    ],
    results: [
      "92% de decisiones alineadas con fortalecimiento del núcleo",
      "Margen operativo recuperado al 27%",
      "Cultura de responsabilidad financiera en toda la organización",
      "Estructura de gobernanza cross-funcional operativa",
    ],
    metrics: intangibleMetrics.liderar,
    governance: {
      structure: [
        {
          role: "Chief Intangibles Officer (CIO)",
          responsibility: "Supervisión estratégica de todos los activos intangibles",
          accountability: "ROI consolidado de intangibles",
        },
        {
          role: "Brand & IP Manager",
          responsibility: "Gestión de marca, propiedad intelectual y licencias",
          accountability: "Valor de marca y protección de IP",
        },
        {
          role: "Community & Data Lead",
          responsibility: "Engagement de comunidad y monetización de datos",
          accountability: "Tamaño y valor de comunidad activa",
        },
        {
          role: "Innovation Director",
          responsibility: "I+D, innovación digital y nuevos modelos de negocio",
          accountability: "Pipeline de innovación y ROI de proyectos",
        },
      ],
      decisionFramework: [
        "Todas las inversiones >$1M requieren aprobación del comité de intangibles",
        "Revisión trimestral de KPIs de intangibles en comité ejecutivo",
        "Criterio de decisión único: ¿Fortalece nuestro núcleo?",
        "Veto del CFO en proyectos sin business case claro",
      ],
    },
  },
  {
    id: "organizar",
    name: "O - ORGANIZAR",
    description: "Reestructuración organizacional y de procesos",
    actions: [
      "Simplificación de cadena de suministro: 40% menos proveedores",
      "Optimización de logística y gestión de inventarios",
      "Creación de roles específicos para gestión de comunidad",
      "Implementación de KPIs de rentabilidad por equipo",
    ],
    results: [
      "Tiempo de desarrollo de producto reducido de 18 a 12 meses",
      "Eficiencia operativa mejorada en 82%",
      "Predicción de demanda mejorada en 65%",
    ],
    metrics: intangibleMetrics.organizar,
  },
  {
    id: "retornar",
    name: "R - RETORNAR",
    description: "Retorno de la inversión en intangibles",
    actions: [
      "Medición continua de impacto financiero",
      "Monitorización de métricas de marca y comunidad",
      "Reporte trimestral de ROI de intangibles",
      "Optimización basada en datos de performance",
    ],
    results: [
      "Crecimiento de ingresos del 900% (2004-2014)",
      "Margen operativo de 2.4% a 27%",
      "Liderazgo mundial: #1 fabricante de juguetes en 2014",
      "Deuda reducida de $800M a $15M",
    ],
    metrics: intangibleMetrics.retornar,
  },
];

// Datos para gráfico de comparación pre/post reestructuración
export const comparisonData = [
  {
    metric: "Ingresos (M$)",
    pre2004: 735,
    post2014: 5100,
    change: 594,
  },
  {
    metric: "Margen Op. (%)",
    pre2004: 2.4,
    post2014: 27.0,
    change: 1025,
  },
  {
    metric: "Deuda (M$)",
    pre2004: 800,
    post2014: 15,
    change: -98,
  },
  {
    metric: "Flujo Caja (M$)",
    pre2004: -160,
    post2014: 1200,
    change: 850,
  },
];

// Datos para el mapa de calor de intangibles
export const intangibleHeatmap = [
  { phase: "Identificar", intangible: "Marca", score: 85, impact: "Alto" },
  { phase: "Identificar", intangible: "Comunidad", score: 78, impact: "Alto" },
  { phase: "Identificar", intangible: "Innovación", score: 72, impact: "Medio" },
  { phase: "Identificar", intangible: "Cultura", score: 88, impact: "Alto" },
  { phase: "Valorar", intangible: "Coste Dilución", score: 95, impact: "Crítico" },
  { phase: "Valorar", intangible: "Valor Comunidad", score: 82, impact: "Alto" },
  { phase: "Activar", intangible: "Co-creación", score: 90, impact: "Alto" },
  { phase: "Activar", intangible: "Digital", score: 85, impact: "Alto" },
  { phase: "Liderar", intangible: "Alineación", score: 92, impact: "Crítico" },
  { phase: "Organizar", intangible: "Eficiencia", score: 82, impact: "Alto" },
  { phase: "Retornar", intangible: "ROI", score: 98, impact: "Crítico" },
];

