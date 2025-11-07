import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { financialData, ivalorPhases, comparisonData } from "@/data/legoData";
import { Link } from "wouter";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  DollarSignIcon,
  TargetIcon,
  UsersIcon,
  SparklesIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

// Import AI Components
import AIPredictions from "@/components/AIPredictions";
import AIAlerts from "@/components/AIAlerts";
import AIRecommendations from "@/components/AIRecommendations";
import AIValueComparison from "@/components/AIValueComparison";
import AISimulator from "@/components/AISimulator";
import BusinessCase from "@/components/BusinessCase";
import IntegrationArchitecture from "@/components/IntegrationArchitecture";

export default function Dashboard() {
  // Calcular métricas clave
  const latestFinancials = financialData[financialData.length - 1];
  const precrisisFinancials = financialData.find((d) => d.year === 2003)!;
  const revenueGrowth =
    ((latestFinancials.revenue - precrisisFinancials.revenue) /
      precrisisFinancials.revenue) *
    100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  LEGO IVALOR Dashboard
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-pulse">
                    <SparklesIcon className="w-3 h-3 mr-1" />
                    AI Enhanced
                  </Badge>
                </h1>
                <p className="text-sm text-slate-600">
                  Gestión de Intangibles: De la Crisis al Liderazgo
                </p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline">Volver al Inicio</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Educational Simulator Disclaimer */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-900">Simulador Educativo</p>
              <p className="text-xs text-amber-800 mt-0.5">
                Este dashboard es un <strong>simulador educativo</strong> que demuestra el framework IVALOR para gestión estratégica de intangibles. 
                Los datos están basados en patrones reales del caso LEGO, pero los algoritmos de IA son production-ready. 
                Una versión corporativa con diseño personalizado e integración de datos reales puede estar lista en 90 días.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Tabs para organizar contenido */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Visión General</TabsTrigger>
            <TabsTrigger value="ai-insights" className="flex items-center gap-2">
              <SparklesIcon className="w-4 h-4" />
              IA en Acción
            </TabsTrigger>
            <TabsTrigger value="ivalor">Framework IVALOR</TabsTrigger>
            <TabsTrigger value="business-case">Business Case / ROI</TabsTrigger>
            <TabsTrigger value="integration">Arquitectura</TabsTrigger>
          </TabsList>

          {/* Tab: Visión General */}
          <TabsContent value="overview" className="space-y-6">
            {/* KPIs Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                    <TrendingUpIcon className="w-4 h-4" />
                    Crecimiento Ingresos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">
                    +{revenueGrowth.toFixed(0)}%
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    2003-2014: ${precrisisFinancials.revenue}M → $
                    {latestFinancials.revenue}M
                  </p>
                  <Badge className="mt-2 bg-green-100 text-green-800">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    Objetivo superado
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                    <TargetIcon className="w-4 h-4" />
                    Margen Operativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">
                    {latestFinancials.operatingMargin}%
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Recuperación: 2.4% → {latestFinancials.operatingMargin}%
                  </p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +1,025% vs 2003
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                    <DollarSignIcon className="w-4 h-4" />
                    Reducción Deuda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">-98%</div>
                  <p className="text-xs text-slate-600 mt-1">
                    De $800M a ${latestFinancials.debt}M
                  </p>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">
                    <ArrowDownIcon className="w-3 h-3 mr-1" />
                    Deuda bajo control
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                    <UsersIcon className="w-4 h-4" />
                    Comunidad Activa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900">2.5M</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Fans activos en LEGO Ideas
                  </p>
                  <Badge className="mt-2 bg-orange-100 text-orange-800">
                    Co-creación activa
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue & Margin Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Evolución Financiera (1998-2014)</CardTitle>
                  <CardDescription>
                    Ingresos y Margen Operativo - Impacto de la Reestructuración
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={financialData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorMargin" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        name="Ingresos (M$)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="operatingMargin"
                        stroke="#10b981"
                        strokeWidth={2}
                        name="Margen Op. (%)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-xs text-amber-900">
                      <strong>Punto de Inflexión (2004):</strong> Jørgen Vig Knudstorp asume como CEO e inicia la reestructuración basada en intangibles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Comparativa Pre/Post Reestructuración</CardTitle>
                  <CardDescription>
                    Cambio porcentual en métricas clave (2003 vs 2014)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="metric" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="change" fill="#8b5cf6" name="Cambio (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-xs font-semibold text-green-900">
                        Mejoras
                      </p>
                      <p className="text-xs text-green-700 mt-1">
                        Ingresos: +594% | Margen: +1,025%
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs font-semibold text-blue-900">
                        Reducciones
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        Deuda: -98% | Flujo Caja: +850%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: IA en Acción */}
          <TabsContent value="ai-insights" className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6" />
                Capacidades de IA: De Herramienta a Intangible Estratégico
              </h2>
              <p className="text-blue-100">
                Estas secciones demuestran cómo la IA no solo automatiza procesos, sino que
                genera ventaja competitiva sostenible al anticipar tendencias, detectar
                anomalías en tiempo real, recomendar acciones específicas y simular escenarios
                con impacto financiero cuantificable.
              </p>
            </div>

            {/* AI Predictions */}
            <AIPredictions />

            {/* AI Alerts */}
            <AIAlerts />

            {/* AI Recommendations */}
            <AIRecommendations />

            {/* AI Simulator */}
            <AISimulator />

            {/* AI Value Comparison */}
            <AIValueComparison />
          </TabsContent>

          {/* Tab: Framework IVALOR */}
          <TabsContent value="ivalor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Framework IVALOR</CardTitle>
                <CardDescription>
                  6 Fases Estratégicas para la Gestión de Intangibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ivalorPhases.map((phase, index) => (
                    <Link key={phase.id} href={`/phase/${phase.id}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="outline"
                              className="text-lg font-bold px-3 py-1"
                            >
                              {index + 1}
                            </Badge>
                            <Badge
                              className={
                                index < 2
                                  ? "bg-red-100 text-red-800"
                                  : index < 4
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }
                            >
                              {index < 2
                                ? "Diagnóstico"
                                : index < 4
                                ? "Ejecución"
                                : "Resultados"}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg mt-2">{phase.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {phase.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-slate-700">
                              Métricas Clave:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {phase.metrics.slice(0, 3).map((metric) => (
                                <Badge
                                  key={metric.name}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {metric.name}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="w-full mt-3">
                              Ver Detalles →
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">💡 Insight Clave</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800">
                    La gestión estratégica de intangibles (marca, comunidad, cultura) generó un{" "}
                    <strong>retorno del 900%</strong> en ingresos y transformó a LEGO de estar al borde de la quiebra a ser el líder mundial.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">🎯 Lección Principal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800">
                    El <strong>enfoque en el núcleo</strong> y la activación de la comunidad como co-creadores fue más valioso que cualquier diversificación.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900">📊 Aplicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800">
                    Este framework IVALOR es replicable en cualquier organización que busque{" "}
                    <strong>gestionar sus intangibles</strong> con la misma disciplina que sus activos físicos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: Business Case */}
          <TabsContent value="business-case" className="space-y-6">
            <BusinessCase />
          </TabsContent>

          {/* Tab: Integration Architecture */}
          <TabsContent value="integration" className="space-y-6">
            <IntegrationArchitecture />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
