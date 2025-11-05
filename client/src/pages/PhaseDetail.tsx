import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ivalorPhases } from "@/data/legoData";
import { Link, useParams } from "wouter";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  MinusIcon,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

export default function PhaseDetail() {
  const { phaseId } = useParams<{ phaseId: string }>();
  const phase = ivalorPhases.find((p) => p.id === phaseId);

  if (!phase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Fase no encontrada</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard">
              <Button>Volver al Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Preparar datos para el radar chart
  const radarData = phase.metrics.map((metric) => ({
    metric: metric.name,
    value: metric.value,
    target: metric.target,
  }));

  // Preparar datos para el bar chart
  const barData = phase.metrics.map((metric) => ({
    name: metric.name,
    actual: metric.value,
    target: metric.target,
  }));

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUpIcon className="w-4 h-4 text-green-600" />;
      case "down":
        return <TrendingDownIcon className="w-4 h-4 text-red-600" />;
      default:
        return <MinusIcon className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPhaseColor = (id: string) => {
    const colors: Record<string, string> = {
      identificar: "from-red-500 to-red-600",
      valorar: "from-orange-500 to-orange-600",
      activar: "from-blue-500 to-blue-600",
      liderar: "from-purple-500 to-purple-600",
      organizar: "from-indigo-500 to-indigo-600",
      retornar: "from-green-500 to-green-600",
    };
    return colors[id] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div
                className={`px-4 py-2 rounded-lg bg-gradient-to-r ${getPhaseColor(
                  phase.id
                )} text-white`}
              >
                <h1 className="text-2xl font-bold">{phase.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Phase Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Descripción de la Fase</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-slate-700">{phase.description}</p>
          </CardContent>
        </Card>

        {/* Actions and Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Acciones Implementadas
              </CardTitle>
              <CardDescription>
                Pasos concretos ejecutados en esta fase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {phase.actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{action}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Resultados Obtenidos
              </CardTitle>
              <CardDescription>
                Impacto medible de las acciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {phase.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-slate-700">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Métricas de Intangibles</CardTitle>
            <CardDescription>
              Indicadores clave de performance para esta fase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {phase.metrics.map((metric) => (
                <Card key={metric.name} className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{metric.name}</CardTitle>
                      {getTrendIcon(metric.trend)}
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {metric.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-900">
                          {metric.value}
                        </span>
                        <span className="text-sm text-slate-600">
                          / {metric.target} objetivo
                        </span>
                      </div>
                      <Progress
                        value={(metric.value / metric.target) * 100}
                        className="h-2"
                      />
                      <p className="text-xs text-slate-600 mt-2">
                        <strong>Impacto:</strong> {metric.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Vista Radar: Actual vs Objetivo</CardTitle>
              <CardDescription>
                Comparación visual del rendimiento de métricas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Valor Actual"
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Objetivo"
                    dataKey="target"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Progreso por Métrica</CardTitle>
              <CardDescription>
                Comparación directa de valores actuales y objetivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="actual" fill="#3b82f6" name="Actual">
                    {barData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.actual >= entry.target ? "#10b981" : "#3b82f6"}
                      />
                    ))}
                  </Bar>
                  <Bar dataKey="target" fill="#cbd5e1" name="Objetivo" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
              Volver al Dashboard Principal
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

