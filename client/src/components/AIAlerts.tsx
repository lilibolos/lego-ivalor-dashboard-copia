import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangleIcon,
  TrendingUpIcon,
  AlertCircleIcon,
  SparklesIcon,
  ChevronRightIcon,
  BrainCircuitIcon,
} from "lucide-react";
import { useState } from "react";

interface Alert {
  id: number;
  type: "Risk" | "Opportunity";
  severity: "Critical" | "Warning" | "High" | "Medium";
  title: string;
  product: string;
  region: string;
  impact: string;
  cause: string;
  action: string;
  confidence: number;
}

const alerts: Alert[] = [
  {
    id: 1,
    type: "Risk",
    severity: "Critical",
    title: "Quiebre de Stock Inminente",
    product: "LEGO Friends - Heartlake City Hospital",
    region: "Europa Central",
    impact: "€2.3M en ventas perdidas",
    cause: "Pico de demanda +65% vs forecast debido a video viral en TikTok",
    action: "Acelerar orden de producción +12K unidades desde fábrica Dinamarca",
    confidence: 91,
  },
  {
    id: 2,
    type: "Risk",
    severity: "Warning",
    title: "Caída Anómala en Ventas",
    product: "LEGO Store Madrid - Gran Vía",
    region: "España",
    impact: "-42% vs promedio últimas 4 semanas",
    cause: "Obras en la calle detectadas vía Google Maps API reduciendo tráfico peatonal",
    action: "Promoción temporal 20% online para códigos postales de Madrid",
    confidence: 84,
  },
  {
    id: 3,
    type: "Opportunity",
    severity: "High",
    title: "Tendencia Emergente Detectada",
    product: "LEGO Botanicals (Flores y Plantas)",
    region: "Global",
    impact: "+€3.5M potencial",
    cause: "Crecimiento +156% en 3 meses. Búsquedas Pinterest +240%. Segmento: Mujeres adultas 25-45",
    action: "Ampliar línea con 3 nuevos sets botánicos. Aumentar presupuesto marketing 40%",
    confidence: 92,
  },
  {
    id: 4,
    type: "Risk",
    severity: "Warning",
    title: "Saturación de Mercado",
    product: "LEGO Marvel Superhero Sets",
    region: "Norteamérica",
    impact: "-€2.2M desaceleración",
    cause: "Crecimiento -15% QoQ. Señales de fatiga de superhéroes detectadas",
    action: "Diversificar portfolio: Reducir SKUs Marvel 20%. Aumentar inversión STEM",
    confidence: 76,
  },
  {
    id: 5,
    type: "Opportunity",
    severity: "Medium",
    title: "Potencial de Cross-Sell",
    product: "Compradores LEGO Ideas - Medieval Castle",
    region: "Europa",
    impact: "+€950K incremental",
    cause: "85% de compradores buscan temas Knights/Fantasy dentro de 30 días",
    action: "Campaña email con recomendaciones personalizadas",
    confidence: 82,
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-red-100 text-red-800 border-red-300";
    case "Warning":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "High":
      return "bg-green-100 text-green-800 border-green-300";
    case "Medium":
      return "bg-blue-100 text-blue-800 border-blue-300";
    default:
      return "bg-slate-100 text-slate-800 border-slate-300";
  }
};

const getSeverityIcon = (type: string, severity: string) => {
  if (type === "Risk") {
    return severity === "Critical" ? (
      <AlertTriangleIcon className="w-5 h-5 text-red-600" />
    ) : (
      <AlertCircleIcon className="w-5 h-5 text-yellow-600" />
    );
  }
  return <TrendingUpIcon className="w-5 h-5 text-green-600" />;
};

export default function AIAlerts() {
  const [expandedAlert, setExpandedAlert] = useState<number | null>(null);

  const toggleAlert = (id: number) => {
    setExpandedAlert(expandedAlert === id ? null : id);
  };

  return (
    <Card className="border-2 border-amber-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
            <BrainCircuitIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              Alertas Inteligentes y Detección de Anomalías
              <Badge className="bg-amber-600 text-white animate-pulse">
                <SparklesIcon className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </CardTitle>
            <CardDescription>
              Monitoreo en tiempo real con recomendaciones accionables
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`border-2 rounded-lg overflow-hidden transition-all ${
                expandedAlert === alert.id ? "shadow-md" : ""
              } ${getSeverityColor(alert.severity)}`}
            >
              <div
                className="p-4 cursor-pointer hover:bg-opacity-80 transition-colors"
                onClick={() => toggleAlert(alert.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-1">{getSeverityIcon(alert.type, alert.severity)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            alert.severity === "Critical"
                              ? "border-red-500 text-red-700"
                              : alert.severity === "Warning"
                              ? "border-yellow-500 text-yellow-700"
                              : alert.severity === "High"
                              ? "border-green-500 text-green-700"
                              : "border-blue-500 text-blue-700"
                          }`}
                        >
                          {alert.severity === "Critical" && "🔴"}
                          {alert.severity === "Warning" && "🟡"}
                          {alert.severity === "High" && "🟢"}
                          {alert.severity === "Medium" && "🔵"}
                          {" "}
                          {alert.severity}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {alert.type}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-1">{alert.title}</h4>
                      <p className="text-sm text-slate-700">
                        <strong>Producto:</strong> {alert.product}
                      </p>
                      <p className="text-sm text-slate-700">
                        <strong>Región:</strong> {alert.region}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 mt-1">
                        <strong>Impacto estimado:</strong> {alert.impact}
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedAlert === alert.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>

              {expandedAlert === alert.id && (
                <div className="px-4 pb-4 bg-white bg-opacity-50 border-t">
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-1">
                        Causa Detectada:
                      </p>
                      <p className="text-sm text-slate-800">{alert.cause}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-1">
                        Acción Recomendada:
                      </p>
                      <p className="text-sm text-slate-800">{alert.action}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-600">
                          Confianza:
                        </span>
                        <div className="w-32 bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              alert.confidence >= 85
                                ? "bg-green-500"
                                : alert.confidence >= 75
                                ? "bg-yellow-500"
                                : "bg-orange-500"
                            }`}
                            style={{ width: `${alert.confidence}%` }}
                          />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {alert.confidence}%
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        Ver Detalles →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>
              <strong>Algoritmo:</strong> Isolation Forest + Z-score + Correlación con datos externos
            </span>
            <span>Actualización: Tiempo real (cada 15 min)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
