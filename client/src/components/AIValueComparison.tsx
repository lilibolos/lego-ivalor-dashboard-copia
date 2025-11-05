import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, XIcon, TrendingUpIcon, AlertTriangleIcon } from "lucide-react";

interface ComparisonMetric {
  metric: string;
  withoutAI: string;
  withAI: string;
  improvement: string;
  impact: string;
}

const comparisonData: ComparisonMetric[] = [
  {
    metric: "Precisión de Forecast de Demanda",
    withoutAI: "62% (±18% error)",
    withAI: "89% (±5% error)",
    improvement: "+44%",
    impact: "€8.2M menos en inventario obsoleto/año",
  },
  {
    metric: "Tiempo de Detección de Anomalías",
    withoutAI: "7-14 días (revisión manual)",
    withAI: "15 minutos (tiempo real)",
    improvement: "672x más rápido",
    impact: "€2.3M en pérdidas evitadas/año",
  },
  {
    metric: "Optimización de Precios",
    withoutAI: "Revisión trimestral manual",
    withAI: "Ajuste dinámico diario",
    improvement: "90x más frecuente",
    impact: "+3.2% margen operativo (€12.5M/año)",
  },
  {
    metric: "Identificación de Tendencias",
    withoutAI: "Post-mortem (6-12 meses retraso)",
    withAI: "Predictivo (3 meses anticipación)",
    improvement: "9 meses ventaja",
    impact: "€3.5M en oportunidades capturadas",
  },
  {
    metric: "Personalización de Recomendaciones",
    withoutAI: "Segmentos genéricos (5-10)",
    withAI: "Micro-segmentos (1,000+)",
    improvement: "100x granularidad",
    impact: "+18% conversión cross-sell (€4.8M/año)",
  },
  {
    metric: "Gestión de Riesgos de Inventario",
    withoutAI: "Reactivo (después del problema)",
    withAI: "Proactivo (antes del problema)",
    improvement: "Prevención vs Reacción",
    impact: "€5.1M en write-offs evitados/año",
  },
];

const totalImpact = 8.2 + 2.3 + 12.5 + 3.5 + 4.8 + 5.1; // €36.4M

export default function AIValueComparison() {
  return (
    <Card className="border-2 border-emerald-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">
              La IA como Intangible: Comparativa de Valor
            </CardTitle>
            <CardDescription>
              Impacto cuantificable de las capacidades de IA en operaciones y P&L
            </CardDescription>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">Impacto Total Anual</p>
            <p className="text-3xl font-bold text-emerald-700">+€{totalImpact.toFixed(1)}M</p>
            <Badge className="mt-1 bg-emerald-600">ROI: 520%</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="font-semibold w-1/5">Capacidad</TableHead>
                <TableHead className="font-semibold text-center w-1/5">
                  <div className="flex items-center justify-center gap-2">
                    <XIcon className="w-4 h-4 text-red-500" />
                    Sin IA
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-center w-1/5">
                  <div className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    Con IA
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-center w-1/6">Mejora</TableHead>
                <TableHead className="font-semibold w-1/4">Impacto en P&L</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, idx) => (
                <TableRow key={idx} className="hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-900">{row.metric}</TableCell>
                  <TableCell className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-lg">
                      <XIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{row.withoutAI}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-lg">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{row.withAI}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className="bg-blue-100 text-blue-800 font-semibold">
                      <TrendingUpIcon className="w-3 h-3 mr-1" />
                      {row.improvement}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold text-emerald-700">
                      {row.impact}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangleIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 mb-2">
                  ⚠️ Riesgo de NO Invertir en IA
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Pérdida de ventaja competitiva (competidores ya usan IA)</li>
                  <li>• €36.4M/año en eficiencias no capturadas</li>
                  <li>• Decisiones basadas en datos obsoletos (7-14 días retraso)</li>
                  <li>• Incapacidad de anticipar tendencias emergentes</li>
                  <li>• Experiencia de cliente inferior vs competencia</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-lg">
            <div className="flex items-start gap-3">
              <TrendingUpIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 mb-2">
                  ✅ Valor de la IA como Intangible
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Capacidad organizacional diferenciadora</li>
                  <li>• Ciclo virtuoso: más datos → mejores modelos → más valor</li>
                  <li>• Barrera de entrada para competidores (3-5 años ventaja)</li>
                  <li>• Resiliencia: detección temprana de riesgos</li>
                  <li>• Prima de valoración: empresas AI-first valen 2.3x más</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-900 text-white rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300 mb-1">
                Inversión Total en Capacidades de IA (2020-2024)
              </p>
              <p className="text-2xl font-bold">€7.0M</p>
              <p className="text-xs text-slate-400 mt-1">
                Infraestructura + Talento + Modelos + Integración
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-300 mb-1">Valor Generado Anual</p>
              <p className="text-2xl font-bold text-emerald-400">€36.4M</p>
              <p className="text-xs text-slate-400 mt-1">Impacto directo en P&L</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-300 mb-1">ROI Acumulado</p>
              <p className="text-3xl font-bold text-emerald-400">520%</p>
              <p className="text-xs text-slate-400 mt-1">Payback: 2.3 años</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-900">
            <strong>💡 Mensaje Clave:</strong> La IA no es solo una "herramienta" que automatiza
            procesos. Es un <strong>activo intangible estratégico</strong> que genera ventaja
            competitiva sostenible, mejora la toma de decisiones en tiempo real, y crea un ciclo
            virtuoso de aprendizaje que aumenta su valor con el tiempo. El impacto de €36.4M/año
            representa solo el valor operativo directo—el valor estratégico de largo plazo
            (resiliencia, velocidad, innovación) es aún mayor.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
