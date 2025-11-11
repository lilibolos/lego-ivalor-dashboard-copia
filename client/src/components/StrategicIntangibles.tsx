import { useState } from "react";
import IntangibleSelector from "./IntangibleSelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  predictionsData,
  alertsData,
  recommendationsData,
  scenariosData,
  comparisonData,
} from "@/data/intangiblesData";
import {
  TrendingUpIcon,
  AlertTriangleIcon,
  LightbulbIcon,
  PlayCircleIcon,
  BarChart3Icon,
} from "lucide-react";

export default function StrategicIntangibles() {
  const [selectedIntangible, setSelectedIntangible] = useState<string>("talento");

  const predictions = predictionsData[selectedIntangible];
  const alerts = alertsData[selectedIntangible];
  const recommendations = recommendationsData[selectedIntangible];
  const scenarios = scenariosData[selectedIntangible];
  const comparison = comparisonData[selectedIntangible];

  return (
    <div className="space-y-8">
      {/* Selector de Intangibles */}
      <IntangibleSelector
        selectedIntangible={selectedIntangible}
        onSelect={setSelectedIntangible}
      />

      {/* AI Predictions */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUpIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              📊 AI Predictions
            </h3>
            <p className="text-sm text-slate-600">{predictions.title}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-slate-700 font-medium">{predictions.description}</p>

          {/* Tabla de Predicciones */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Item
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Departamento
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Probabilidad
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Impacto P&L
                  </th>
                </tr>
              </thead>
              <tbody>
                {predictions.predictions.map((pred, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 text-sm">
                      {pred.item}
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm">
                      {pred.department}
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm">
                      <Badge
                        className={
                          pred.probability >= 70
                            ? "bg-red-600"
                            : pred.probability >= 50
                            ? "bg-orange-500"
                            : "bg-yellow-500"
                        }
                      >
                        {pred.probability}%
                      </Badge>
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm font-semibold text-red-600">
                      -€{(pred.impactAmount / 1000).toFixed(0)}K
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-sm font-semibold text-red-900">
              Impacto Total en P&L: -€{(predictions.totalImpact / 1000).toFixed(0)}K (si no se actúa)
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              Factores Contribuyentes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
              {predictions.factors.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg space-y-1 text-sm">
            <p>
              <strong>Herramienta IA:</strong> {predictions.aiTool}
            </p>
            <p>
              <strong>Fuente de Datos:</strong> {predictions.dataSources.join(", ")}
            </p>
          </div>
        </div>
      </Card>

      {/* AI Alerts */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <AlertTriangleIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">🚨 AI Alerts</h3>
            <p className="text-sm text-slate-600">
              Alertas críticas y warnings detectadas
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Alertas Críticas */}
          <div>
            <h4 className="font-semibold text-red-700 mb-3">
              🚨 CRÍTICO ({alerts.critical.length})
            </h4>
            <div className="space-y-3">
              {alerts.critical.map((alert, index) => (
                <div
                  key={index}
                  className="border-l-4 border-red-500 bg-red-50 p-4 space-y-2"
                >
                  <p className="font-semibold text-slate-900">{alert.title}</p>
                  <p className="text-sm text-slate-700">{alert.description}</p>
                  <p className="text-sm text-slate-600">
                    <strong>Acción:</strong> {alert.action}
                  </p>
                  <p className="text-sm font-semibold text-red-700">
                    <strong>Impacto:</strong> {alert.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Warnings */}
          <div>
            <h4 className="font-semibold text-orange-700 mb-3">
              ⚠️ WARNING ({alerts.warnings.length})
            </h4>
            <div className="space-y-2">
              {alerts.warnings.map((warning, index) => (
                <div
                  key={index}
                  className="border-l-4 border-orange-400 bg-orange-50 p-3"
                >
                  <p className="font-semibold text-slate-900 text-sm">
                    {warning.title}
                  </p>
                  <p className="text-sm text-slate-600">{warning.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* AI Recommendations */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <LightbulbIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              💡 AI Recommendations
            </h3>
            <p className="text-sm text-slate-600">
              Recomendaciones accionables con ROI calculado
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {recommendations.recommendations.map((rec, index) => (
            <Card key={index} className="p-6 border-2 border-slate-200">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge
                      className={
                        rec.priority === "Alta"
                          ? "bg-red-600"
                          : rec.priority === "Media"
                          ? "bg-orange-500"
                          : "bg-yellow-500"
                      }
                    >
                      Prioridad: {rec.priority}
                    </Badge>
                    <h4 className="font-bold text-lg text-slate-900 mt-2">
                      RECOMENDACIÓN #{index + 1}
                    </h4>
                    <p className="text-slate-700">{rec.title}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Acción Sugerida:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
                    {rec.actions.map((action, i) => (
                      <li key={i}>{action}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-700">
                    Impacto Esperado:
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>
                      • {rec.expectedImpact.metric}: {rec.expectedImpact.before} →{" "}
                      {rec.expectedImpact.after}
                    </li>
                    <li>
                      • Costo: €{(rec.expectedImpact.cost / 1000).toFixed(0)}K
                    </li>
                    <li>
                      • Ahorro: €{(rec.expectedImpact.saving / 1000).toFixed(0)}K
                    </li>
                    <li className="font-semibold text-green-700">
                      • ROI: {rec.expectedImpact.roi}%
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Ejecutar Acción
                  </Button>
                  <Button variant="outline">Ver Detalles</Button>
                  <Button variant="ghost">Posponer</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* AI Simulator */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <PlayCircleIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">🎮 AI Simulator</h3>
            <p className="text-sm text-slate-600">
              Simula escenarios y compara impacto en P&L
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Escenario Base */}
          <div className="bg-slate-100 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-3">
              ESCENARIO BASE ({scenarios.baseScenario.title})
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {Object.entries(scenarios.baseScenario.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-slate-600">{key}</p>
                  <p className="font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Escenarios Alternativos */}
          {scenarios.scenarios.map((scenario) => (
            <Card key={scenario.id} className="p-6 border-2 border-purple-200">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-slate-900">
                  ESCENARIO {scenario.id}: {scenario.title}
                </h4>

                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Intervenciones:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                    {scenario.interventions.map((intervention, i) => (
                      <li key={i}>{intervention}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Inversión: €{(scenario.investment / 1000).toFixed(0)}K
                  </p>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Resultados:
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {Object.entries(scenario.results).map(([key, value]) => (
                      <li key={key}>
                        • {key}: {value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Simular
                  </Button>
                  <Button variant="outline">Ver Detalles</Button>
                  <Button variant="ghost">
                    Comparar con Escenario {scenario.id === 1 ? 2 : 1}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* AI Value Comparison */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              📊 AI Value Comparison
            </h3>
            <p className="text-sm text-slate-600">
              Priorización de intervenciones por ROI
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Tabla de Comparación */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Intervención
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Inversión
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Impacto
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    ROI
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">
                    Prioridad
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.interventions.map((intervention, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 text-sm">
                      {intervention.name}
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm">
                      €{(intervention.investment / 1000).toFixed(0)}K
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm font-semibold text-green-600">
                      €{(intervention.impact / 1000).toFixed(0)}K
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm font-bold text-blue-600">
                      {intervention.roi}%
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-sm">
                      <Badge
                        className={
                          intervention.priority === "Alta"
                            ? "bg-red-600"
                            : intervention.priority === "Media"
                            ? "bg-orange-500"
                            : "bg-yellow-500"
                        }
                      >
                        {intervention.priority}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recomendación de Priorización */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 space-y-4">
            <h4 className="font-semibold text-slate-900">
              RECOMENDACIÓN DE PRIORIZACIÓN:
            </h4>
            <ol className="space-y-2 text-sm text-slate-700">
              {comparison.interventions
                .sort((a, b) => b.roi - a.roi)
                .map((intervention, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="font-bold text-blue-600">
                      {index + 1}️⃣
                    </span>
                    <span>
                      {intervention.name} (ROI: {intervention.roi}%)
                    </span>
                  </li>
                ))}
            </ol>

            <div className="bg-white rounded-lg p-4 border border-blue-200 space-y-2">
              <p className="text-sm">
                <strong>INVERSIÓN TOTAL RECOMENDADA:</strong> €
                {(comparison.recommendation.totalInvestment / 1000).toFixed(0)}K
              </p>
              <p className="text-sm">
                <strong>IMPACTO TOTAL EN P&L:</strong> €
                {(comparison.recommendation.totalImpact / 1000).toFixed(0)}K/año
              </p>
              <p className="text-sm font-bold text-blue-700">
                <strong>ROI CONSOLIDADO:</strong>{" "}
                {comparison.recommendation.consolidatedROI}%
              </p>
            </div>

            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Ver Detalles
              </Button>
              <Button variant="outline">Exportar Reporte</Button>
              <Button variant="outline">Presentar a CFO</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
