// Datos de Intangibles Estratégicos para el dashboard IVALOR
// Basado en casos reales de empresas que usan IA para gestionar intangibles

export interface IntangibleCase {
  id: string;
  name: string;
  icon: string;
  description: string;
  company: string;
  tool: string;
  result: string;
  source: string;
  sourceUrl: string;
}

export interface PredictionData {
  intangibleId: string;
  title: string;
  description: string;
  predictions: Array<{
    item: string;
    department: string;
    probability: number;
    impact: string;
    impactAmount: number;
  }>;
  totalImpact: number;
  factors: string[];
  aiTool: string;
  dataSources: string[];
}

export interface AlertData {
  intangibleId: string;
  critical: Array<{
    title: string;
    description: string;
    action: string;
    impact: string;
  }>;
  warnings: Array<{
    title: string;
    description: string;
  }>;
}

export interface RecommendationData {
  intangibleId: string;
  recommendations: Array<{
    priority: "Alta" | "Media" | "Baja";
    title: string;
    actions: string[];
    expectedImpact: {
      metric: string;
      before: string;
      after: string;
      cost: number;
      saving: number;
      roi: number;
    };
  }>;
}

export interface ScenarioData {
  intangibleId: string;
  baseScenario: {
    title: string;
    metrics: Record<string, string | number>;
    totalCost: number;
  };
  scenarios: Array<{
    id: number;
    title: string;
    interventions: string[];
    investment: number;
    results: Record<string, string>;
    saving: number;
    roi: number;
  }>;
}

export interface ComparisonData {
  intangibleId: string;
  interventions: Array<{
    name: string;
    investment: number;
    impact: number;
    roi: number;
    priority: "Alta" | "Media" | "Baja";
  }>;
  recommendation: {
    totalInvestment: number;
    totalImpact: number;
    consolidatedROI: number;
  };
}

// Casos de estudio de los 4 intangibles estratégicos
export const intangibleCases: IntangibleCase[] = [
  {
    id: "talento",
    name: "Talento & Cultura",
    icon: "👥",
    description: "Employer brand, atracción/retención talento, engagement",
    company: "IBM",
    tool: "IBM Watson / Workday Predictive Analytics",
    result: "-30% attrition | Ahorro: €500K/año | ROI: 400%",
    source: "Mokahr.io",
    sourceUrl: "https://www.mokahr.io/myblog/ai-for-turnover-prediction-retention-strategies/",
  },
  {
    id: "reputacion",
    name: "Reputación & Confianza",
    icon: "🛡️",
    description: "Brand reputation, gestión de crisis, stakeholder trust",
    company: "Airline X",
    tool: "Brandwatch / Sprinklr AI",
    result: "-30% tiempo respuesta | +10% loyalty | +12% revenue",
    source: "SuperAGI",
    sourceUrl: "https://superagi.com/from-crisis-to-opportunity-real-world-case-studies-of-ai-sentiment-analysis-in-brand-monitoring/",
  },
  {
    id: "geo",
    name: "GEO & Visibilidad",
    icon: "🔍",
    description: "SEO/GEO, presencia en LLMs, discoverability",
    company: "Go Fish Digital",
    tool: "BrightEdge / MarketMuse",
    result: "+43% tráfico | +83% conversiones | 25X conversion rate",
    source: "Go Fish Digital",
    sourceUrl: "https://gofishdigital.com/blog/generative-engine-optimization-geo-case-study-driving-leads/",
  },
  {
    id: "cx",
    name: "CX & Loyalty",
    icon: "❤️",
    description: "Customer experience, NPS, customer lifetime value",
    company: "Slack",
    tool: "Gainsight / ChurnZero",
    result: "-30% churn | +25% engagement | -90% support queries",
    source: "SuperAGI",
    sourceUrl: "https://superagi.com/case-studies-in-ai-driven-customer-retention-success-stories-from-saas-ecommerce-and-subscription-services/",
  },
];

// Datos de predicciones por intangible
export const predictionsData: Record<string, PredictionData> = {
  talento: {
    intangibleId: "talento",
    title: "Predicción de Rotación - Próximos 90 Días",
    description: "5 empleados clave en riesgo de fuga",
    predictions: [
      {
        item: "Juan Pérez",
        department: "Ventas",
        probability: 85,
        impact: "Costo reemplazo",
        impactAmount: 50000,
      },
      {
        item: "María García",
        department: "Tech",
        probability: 75,
        impact: "Costo reemplazo",
        impactAmount: 60000,
      },
      {
        item: "Carlos López",
        department: "Producto",
        probability: 70,
        impact: "Costo reemplazo",
        impactAmount: 55000,
      },
      {
        item: "Ana Martínez",
        department: "Marketing",
        probability: 65,
        impact: "Costo reemplazo",
        impactAmount: 45000,
      },
      {
        item: "Luis Rodríguez",
        department: "Ops",
        probability: 60,
        impact: "Costo reemplazo",
        impactAmount: 40000,
      },
    ],
    totalImpact: 250000,
    factors: [
      "Disminución en engagement score (-20% últimos 60 días)",
      "Menor participación en reuniones (-30%)",
      "Cambios en patrones de trabajo (login tardío, salida temprana)",
      "Búsquedas en LinkedIn aumentadas (+50%)",
    ],
    aiTool: "IBM Watson / Workday Predictive Analytics",
    dataSources: ["HRIS", "Email patterns", "Calendar", "LinkedIn"],
  },
  reputacion: {
    intangibleId: "reputacion",
    title: "Predicción de Crisis de Reputación - Próximos 30 Días",
    description: "3 riesgos potenciales detectados",
    predictions: [
      {
        item: "Sentimiento negativo en redes sociales",
        department: "Marketing",
        probability: 75,
        impact: "Pérdida de brand value",
        impactAmount: 200000,
      },
      {
        item: "Queja viral en Twitter sobre servicio",
        department: "Customer Service",
        probability: 60,
        impact: "Pérdida de clientes",
        impactAmount: 150000,
      },
      {
        item: "Review negativa en Glassdoor",
        department: "HR",
        probability: 55,
        impact: "Dificultad atracción talento",
        impactAmount: 100000,
      },
    ],
    totalImpact: 450000,
    factors: [
      "Aumento de menciones negativas (+40% últimos 30 días)",
      "Sentimiento promedio bajó de 7.5 a 6.2",
      "3 influencers con alcance >100K mencionaron problemas",
      "Tiempo de respuesta a quejas aumentó 50%",
    ],
    aiTool: "Brandwatch / Sprinklr AI",
    dataSources: ["Social media", "Review sites", "News", "Forums"],
  },
  geo: {
    intangibleId: "geo",
    title: "Predicción de Visibilidad en LLMs - Próximos 60 Días",
    description: "Oportunidades de mejora en posicionamiento",
    predictions: [
      {
        item: "Keyword: 'mejor CRM para startups'",
        department: "Marketing",
        probability: 80,
        impact: "Tráfico potencial",
        impactAmount: 50000,
      },
      {
        item: "Keyword: 'software gestión proyectos'",
        department: "Marketing",
        probability: 70,
        impact: "Conversiones potenciales",
        impactAmount: 80000,
      },
      {
        item: "Presencia en ChatGPT/Gemini",
        department: "Marketing",
        probability: 65,
        impact: "Brand awareness",
        impactAmount: 120000,
      },
    ],
    totalImpact: 250000,
    factors: [
      "Contenido actual no optimizado para LLMs",
      "Competidores aparecen 3X más en respuestas de IA",
      "Falta de structured data y schema markup",
      "Bajo engagement en contenido existente",
    ],
    aiTool: "BrightEdge / MarketMuse",
    dataSources: ["Search Console", "LLM APIs", "Competitor analysis", "Content performance"],
  },
  cx: {
    intangibleId: "cx",
    title: "Predicción de Churn - Próximos 90 Días",
    description: "Clientes en riesgo de cancelación",
    predictions: [
      {
        item: "Cliente A (Enterprise)",
        department: "Sales",
        probability: 85,
        impact: "Revenue loss",
        impactAmount: 120000,
      },
      {
        item: "Cliente B (Mid-market)",
        department: "Sales",
        probability: 75,
        impact: "Revenue loss",
        impactAmount: 60000,
      },
      {
        item: "Cliente C (SMB)",
        department: "Sales",
        probability: 70,
        impact: "Revenue loss",
        impactAmount: 30000,
      },
      {
        item: "Cliente D (Enterprise)",
        department: "Sales",
        probability: 65,
        impact: "Revenue loss",
        impactAmount: 100000,
      },
    ],
    totalImpact: 310000,
    factors: [
      "Disminución en uso del producto (-40% últimos 60 días)",
      "NPS bajó de 8.5 a 6.0",
      "Tickets de soporte aumentaron 3X",
      "No han renovado contrato en tiempo esperado",
    ],
    aiTool: "Gainsight / ChurnZero",
    dataSources: ["Product usage", "Support tickets", "NPS surveys", "Billing"],
  },
};

// Datos de alertas por intangible
export const alertsData: Record<string, AlertData> = {
  talento: {
    intangibleId: "talento",
    critical: [
      {
        title: "Empleado Juan Pérez: Probabilidad fuga 85%",
        description: "Acción recomendada: Intervención inmediata",
        action: "1-on-1 con manager esta semana",
        impact: "-€50K si no se actúa",
      },
      {
        title: "Engagement Dpto. Ventas: Bajó 15% en 30 días",
        description: "Acción recomendada: Reunión con equipo + pulse survey",
        action: "Implementar pulse surveys semanales",
        impact: "-€120K si continúa tendencia",
      },
      {
        title: "Glassdoor Rating: Bajó de 4.2 → 3.8 en 60 días",
        description: "Acción recomendada: Análisis de reviews + plan de acción",
        action: "Responder reviews y mejorar employer brand",
        impact: "-€200K (dificultad atracción talento)",
      },
    ],
    warnings: [
      {
        title: "Tiempo de contratación: +30% vs trimestre anterior",
        description: "Revisar proceso de selección",
      },
      {
        title: "Diversidad contrataciones: -10% vs objetivo",
        description: "Ajustar sourcing y pipeline",
      },
    ],
  },
  reputacion: {
    intangibleId: "reputacion",
    critical: [
      {
        title: "Sentimiento negativo en Twitter: +40% últimos 30 días",
        description: "Acción recomendada: Respuesta inmediata y plan de comunicación",
        action: "Activar protocolo de crisis",
        impact: "-€200K en brand value",
      },
      {
        title: "Queja viral: 50K retweets en 24 horas",
        description: "Acción recomendada: Statement público + solución al cliente",
        action: "CEO debe responder públicamente",
        impact: "-€150K en pérdida de clientes",
      },
    ],
    warnings: [
      {
        title: "Tiempo respuesta a quejas: +50% vs mes anterior",
        description: "Optimizar equipo de customer service",
      },
      {
        title: "Menciones negativas de influencers: 3 en última semana",
        description: "Monitorear y preparar respuesta",
      },
    ],
  },
  geo: {
    intangibleId: "geo",
    critical: [
      {
        title: "Visibilidad en ChatGPT: 0 menciones en top 10 queries",
        description: "Acción recomendada: Optimizar contenido para LLMs",
        action: "Implementar estrategia GEO",
        impact: "-€120K en tráfico perdido",
      },
      {
        title: "Competidor X aparece 5X más en respuestas de IA",
        description: "Acción recomendada: Análisis competitivo + plan de contenido",
        action: "Crear contenido optimizado para LLMs",
        impact: "-€80K en conversiones perdidas",
      },
    ],
    warnings: [
      {
        title: "Contenido actual: 70% no optimizado para LLMs",
        description: "Auditar y actualizar contenido existente",
      },
      {
        title: "Structured data: Falta en 80% de páginas",
        description: "Implementar schema markup",
      },
    ],
  },
  cx: {
    intangibleId: "cx",
    critical: [
      {
        title: "Cliente A (€120K/año): Probabilidad churn 85%",
        description: "Acción recomendada: Intervención inmediata con CSM",
        action: "Reunión con C-level del cliente",
        impact: "-€120K revenue anual",
      },
      {
        title: "NPS general: Bajó de 8.5 → 6.0 en 60 días",
        description: "Acción recomendada: Análisis de causas + plan de mejora",
        action: "Implementar programa de mejora de CX",
        impact: "-€200K en churn aumentado",
      },
    ],
    warnings: [
      {
        title: "Tickets de soporte: +3X vs trimestre anterior",
        description: "Revisar calidad del producto y documentación",
      },
      {
        title: "Uso del producto: -40% en segmento Enterprise",
        description: "Analizar barreras de adopción",
      },
    ],
  },
};

// Datos de recomendaciones por intangible
export const recommendationsData: Record<string, RecommendationData> = {
  talento: {
    intangibleId: "talento",
    recommendations: [
      {
        priority: "Alta",
        title: "Intervenir con Empleado Juan Pérez",
        actions: [
          "1-on-1 con manager (esta semana)",
          "Revisión salarial (+15% = €10K/año)",
          "Ofrecer proyecto de alto impacto",
          "Mentorship con C-level",
        ],
        expectedImpact: {
          metric: "Probabilidad de fuga",
          before: "85%",
          after: "20%",
          cost: 10000,
          saving: 50000,
          roi: 400,
        },
      },
      {
        priority: "Alta",
        title: "Implementar Pulse Surveys en Dpto. Ventas",
        actions: [
          "Seleccionar herramienta (Officevibe, Culture Amp)",
          "Configurar surveys semanales",
          "Analizar resultados y actuar",
          "Comunicar cambios al equipo",
        ],
        expectedImpact: {
          metric: "Engagement score",
          before: "6.5",
          after: "7.5",
          cost: 5000,
          saving: 120000,
          roi: 2300,
        },
      },
    ],
  },
  reputacion: {
    intangibleId: "reputacion",
    recommendations: [
      {
        priority: "Alta",
        title: "Activar Protocolo de Crisis",
        actions: [
          "Statement público del CEO en 24h",
          "Solución inmediata al cliente afectado",
          "Monitoreo 24/7 de redes sociales",
          "Plan de comunicación para próximos 30 días",
        ],
        expectedImpact: {
          metric: "Sentimiento de marca",
          before: "6.2",
          after: "7.5",
          cost: 20000,
          saving: 200000,
          roi: 900,
        },
      },
      {
        priority: "Media",
        title: "Implementar Sistema de Monitoreo con IA",
        actions: [
          "Contratar Brandwatch o Sprinklr",
          "Configurar alertas en tiempo real",
          "Entrenar equipo en respuesta rápida",
          "Establecer KPIs de tiempo de respuesta",
        ],
        expectedImpact: {
          metric: "Tiempo de respuesta a crisis",
          before: "48h",
          after: "2h",
          cost: 50000,
          saving: 150000,
          roi: 200,
        },
      },
    ],
  },
  geo: {
    intangibleId: "geo",
    recommendations: [
      {
        priority: "Alta",
        title: "Implementar Estrategia GEO",
        actions: [
          "Auditar contenido existente",
          "Crear contenido optimizado para LLMs",
          "Implementar structured data",
          "Monitorear presencia en ChatGPT/Gemini",
        ],
        expectedImpact: {
          metric: "Tráfico orgánico",
          before: "10K/mes",
          after: "14.3K/mes",
          cost: 30000,
          saving: 120000,
          roi: 300,
        },
      },
      {
        priority: "Alta",
        title: "Optimizar Contenido para LLMs",
        actions: [
          "Contratar BrightEdge o MarketMuse",
          "Crear 50 piezas de contenido optimizado",
          "Actualizar contenido existente",
          "Medir presencia en respuestas de IA",
        ],
        expectedImpact: {
          metric: "Conversiones",
          before: "1.2%",
          after: "2.2%",
          cost: 50000,
          saving: 200000,
          roi: 300,
        },
      },
    ],
  },
  cx: {
    intangibleId: "cx",
    recommendations: [
      {
        priority: "Alta",
        title: "Intervenir con Cliente A",
        actions: [
          "Reunión urgente con C-level del cliente",
          "Análisis de causas de insatisfacción",
          "Plan de mejora personalizado",
          "Descuento o beneficios adicionales",
        ],
        expectedImpact: {
          metric: "Probabilidad de churn",
          before: "85%",
          after: "20%",
          cost: 10000,
          saving: 120000,
          roi: 1100,
        },
      },
      {
        priority: "Alta",
        title: "Implementar Sistema de Predicción de Churn",
        actions: [
          "Contratar Gainsight o ChurnZero",
          "Integrar con CRM y producto",
          "Configurar alertas automáticas",
          "Entrenar equipo de CS en intervenciones",
        ],
        expectedImpact: {
          metric: "Churn rate",
          before: "15%",
          after: "10%",
          cost: 50000,
          saving: 300000,
          roi: 500,
        },
      },
    ],
  },
};

// Datos de escenarios por intangible
export const scenariosData: Record<string, ScenarioData> = {
  talento: {
    intangibleId: "talento",
    baseScenario: {
      title: "Situación Actual",
      metrics: {
        "Attrition Rate": "15%",
        "Empleados": 200,
        "Rotación anual": "30 empleados",
        "Costo promedio reemplazo": "€50K",
        "Costo total anual": "€1.5M",
      },
      totalCost: 1500000,
    },
    scenarios: [
      {
        id: 1,
        title: "Reducir Attrition a 10%",
        interventions: [
          "Implementar IA predictiva (IBM Watson)",
          "Intervenciones proactivas con empleados en riesgo",
          "Pulse surveys semanales",
        ],
        investment: 100000,
        results: {
          "Attrition": "15% → 10% (-33%)",
          "Rotación anual": "30 → 20 empleados",
          "Ahorro": "€500K/año (10 empleados menos)",
          "ROI": "400% (año 1)",
        },
        saving: 500000,
        roi: 400,
      },
      {
        id: 2,
        title: "Reducir Attrition a 5%",
        interventions: [
          "Todo lo de Escenario 1, PLUS:",
          "Programa de desarrollo de carrera",
          "Mejoras en cultura organizacional",
          "Competitividad salarial (+10% promedio)",
        ],
        investment: 300000,
        results: {
          "Attrition": "15% → 5% (-67%)",
          "Rotación anual": "30 → 10 empleados",
          "Ahorro": "€1M/año (20 empleados menos)",
          "ROI": "233% (año 1)",
        },
        saving: 1000000,
        roi: 233,
      },
    ],
  },
  reputacion: {
    intangibleId: "reputacion",
    baseScenario: {
      title: "Situación Actual",
      metrics: {
        "Sentimiento de marca": "6.2/10",
        "Tiempo respuesta crisis": "48h",
        "Menciones negativas": "500/mes",
        "Costo crisis promedio": "€200K",
        "Crisis anuales": "2",
      },
      totalCost: 400000,
    },
    scenarios: [
      {
        id: 1,
        title: "Reducir Tiempo de Respuesta a 2h",
        interventions: [
          "Implementar Brandwatch o Sprinklr",
          "Equipo de respuesta 24/7",
          "Protocolo de crisis automatizado",
        ],
        investment: 50000,
        results: {
          "Tiempo respuesta": "48h → 2h (-96%)",
          "Sentimiento": "6.2 → 7.5 (+21%)",
          "Ahorro": "€150K/año (crisis evitadas)",
          "ROI": "200% (año 1)",
        },
        saving: 150000,
        roi: 200,
      },
      {
        id: 2,
        title: "Prevenir Crisis Proactivamente",
        interventions: [
          "Todo lo de Escenario 1, PLUS:",
          "Análisis predictivo de riesgos",
          "Programa de mejora de reputación",
          "Engagement con stakeholders",
        ],
        investment: 100000,
        results: {
          "Crisis anuales": "2 → 0 (-100%)",
          "Sentimiento": "6.2 → 8.0 (+29%)",
          "Ahorro": "€400K/año (crisis evitadas)",
          "ROI": "300% (año 1)",
        },
        saving: 400000,
        roi: 300,
      },
    ],
  },
  geo: {
    intangibleId: "geo",
    baseScenario: {
      title: "Situación Actual",
      metrics: {
        "Tráfico orgánico": "10K/mes",
        "Conversion rate": "1.2%",
        "Conversiones": "120/mes",
        "Valor promedio conversión": "€500",
        "Revenue mensual": "€60K",
      },
      totalCost: 0,
    },
    scenarios: [
      {
        id: 1,
        title: "Aumentar Tráfico 43%",
        interventions: [
          "Implementar estrategia GEO",
          "Optimizar contenido para LLMs",
          "Structured data y schema markup",
        ],
        investment: 30000,
        results: {
          "Tráfico": "10K → 14.3K/mes (+43%)",
          "Conversiones": "120 → 172/mes (+43%)",
          "Revenue adicional": "€26K/mes = €312K/año",
          "ROI": "940% (año 1)",
        },
        saving: 312000,
        roi: 940,
      },
      {
        id: 2,
        title: "Aumentar Tráfico 43% + Conversion Rate 83%",
        interventions: [
          "Todo lo de Escenario 1, PLUS:",
          "Optimización de landing pages",
          "A/B testing continuo",
          "Personalización con IA",
        ],
        investment: 50000,
        results: {
          "Tráfico": "10K → 14.3K/mes (+43%)",
          "Conversion rate": "1.2% → 2.2% (+83%)",
          "Conversiones": "120 → 315/mes (+162%)",
          "Revenue adicional": "€97.5K/mes = €1.17M/año",
          "ROI": "2,240% (año 1)",
        },
        saving: 1170000,
        roi: 2240,
      },
    ],
  },
  cx: {
    intangibleId: "cx",
    baseScenario: {
      title: "Situación Actual",
      metrics: {
        "Churn rate": "15%",
        "Clientes": 500,
        "Churn anual": "75 clientes",
        "Revenue promedio cliente": "€10K/año",
        "Revenue perdido": "€750K/año",
      },
      totalCost: 750000,
    },
    scenarios: [
      {
        id: 1,
        title: "Reducir Churn a 10%",
        interventions: [
          "Implementar Gainsight o ChurnZero",
          "Intervenciones proactivas con clientes en riesgo",
          "Programa de mejora de CX",
        ],
        investment: 50000,
        results: {
          "Churn": "15% → 10% (-33%)",
          "Churn anual": "75 → 50 clientes",
          "Revenue retenido": "€250K/año",
          "ROI": "400% (año 1)",
        },
        saving: 250000,
        roi: 400,
      },
      {
        id: 2,
        title: "Reducir Churn a 5%",
        interventions: [
          "Todo lo de Escenario 1, PLUS:",
          "Programa de customer success",
          "Onboarding mejorado",
          "Soporte proactivo con IA",
        ],
        investment: 100000,
        results: {
          "Churn": "15% → 5% (-67%)",
          "Churn anual": "75 → 25 clientes",
          "Revenue retenido": "€500K/año",
          "ROI": "400% (año 1)",
        },
        saving: 500000,
        roi: 400,
      },
    ],
  },
};

// Datos de comparación por intangible
export const comparisonData: Record<string, ComparisonData> = {
  talento: {
    intangibleId: "talento",
    interventions: [
      {
        name: "Reducir attrition 33%",
        investment: 100000,
        impact: 500000,
        roi: 400,
        priority: "Alta",
      },
      {
        name: "Implementar pulse surveys",
        investment: 5000,
        impact: 120000,
        roi: 2300,
        priority: "Alta",
      },
      {
        name: "Mejorar employer brand",
        investment: 50000,
        impact: 200000,
        roi: 300,
        priority: "Media",
      },
      {
        name: "Optimizar proceso selección",
        investment: 30000,
        impact: 150000,
        roi: 400,
        priority: "Alta",
      },
      {
        name: "Programa desarrollo carrera",
        investment: 100000,
        impact: 180000,
        roi: 80,
        priority: "Media",
      },
    ],
    recommendation: {
      totalInvestment: 185000,
      totalImpact: 970000,
      consolidatedROI: 424,
    },
  },
  reputacion: {
    intangibleId: "reputacion",
    interventions: [
      {
        name: "Sistema monitoreo con IA",
        investment: 50000,
        impact: 150000,
        roi: 200,
        priority: "Alta",
      },
      {
        name: "Protocolo de crisis",
        investment: 20000,
        impact: 200000,
        roi: 900,
        priority: "Alta",
      },
      {
        name: "Programa mejora reputación",
        investment: 100000,
        impact: 400000,
        roi: 300,
        priority: "Media",
      },
      {
        name: "Engagement con stakeholders",
        investment: 30000,
        impact: 100000,
        roi: 233,
        priority: "Media",
      },
    ],
    recommendation: {
      totalInvestment: 70000,
      totalImpact: 350000,
      consolidatedROI: 400,
    },
  },
  geo: {
    intangibleId: "geo",
    interventions: [
      {
        name: "Estrategia GEO",
        investment: 30000,
        impact: 312000,
        roi: 940,
        priority: "Alta",
      },
      {
        name: "Optimizar contenido para LLMs",
        investment: 50000,
        impact: 1170000,
        roi: 2240,
        priority: "Alta",
      },
      {
        name: "Structured data",
        investment: 10000,
        impact: 50000,
        roi: 400,
        priority: "Media",
      },
      {
        name: "Monitoreo presencia en IA",
        investment: 5000,
        impact: 30000,
        roi: 500,
        priority: "Media",
      },
    ],
    recommendation: {
      totalInvestment: 80000,
      totalImpact: 1482000,
      consolidatedROI: 1752,
    },
  },
  cx: {
    intangibleId: "cx",
    interventions: [
      {
        name: "Sistema predicción churn",
        investment: 50000,
        impact: 300000,
        roi: 500,
        priority: "Alta",
      },
      {
        name: "Programa customer success",
        investment: 100000,
        impact: 500000,
        roi: 400,
        priority: "Alta",
      },
      {
        name: "Onboarding mejorado",
        investment: 30000,
        impact: 150000,
        roi: 400,
        priority: "Media",
      },
      {
        name: "Soporte proactivo con IA",
        investment: 40000,
        impact: 200000,
        roi: 400,
        priority: "Media",
      },
    ],
    recommendation: {
      totalInvestment: 150000,
      totalImpact: 800000,
      consolidatedROI: 433,
    },
  },
};
