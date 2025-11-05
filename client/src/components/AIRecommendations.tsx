import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BrainCircuitIcon, SparklesIcon, ChevronDownIcon, CheckCircle2Icon, DownloadIcon } from "lucide-react";
import { useState } from "react";

interface Recommendation {
  priority: number;
  action: string;
  category: string;
  region: string;
  impact: string;
  effort: "Low" | "Medium" | "High";
  confidence: number;
  roi: number;
  details: {
    context: string;
    specificAction: string;
    financial: string;
    timing: string;
    risk: string;
  };
}

const recommendations: Recommendation[] = [
  {
    priority: 1,
    action: "Aumentar inventario Star Wars +20%",
    category: "Star Wars",
    region: "Norteamérica",
    impact: "+€4.2M",
    effort: "Medium",
    confidence: 91,
    roi: 133,
    details: {
      context:
        "Disney+ Ahsoka series launches Nov 15. Historical pattern shows +28% sales during Star Wars content releases. Current inventory: 45K units insufficient for predicted demand spike.",
      specificAction:
        "Order 27K additional units: 75331 Mandalorian Starfighter (12K), 75341 Luke's Landspeeder (8K), 75355 X-Wing (7K).",
      financial:
        "Additional sales €4.2M, Inventory cost €1.8M, Net margin €2.4M, ROI 133%.",
      timing:
        "Order by Nov 5, Production lead time 3 weeks, Arrival Nov 28, Sales window Dec 1-24.",
      risk: "73% probability of stockout if no action. Competitor availability high.",
    },
  },
  {
    priority: 2,
    action: "Lanzar promoción Friends en Europa Central",
    category: "Friends",
    region: "Europa Central",
    impact: "+€1.8M",
    effort: "Low",
    confidence: 84,
    roi: 245,
    details: {
      context:
        "Heartlake Hospital viral on TikTok (2.3M views). Demand spike +65% detected. Stock risk in Germany, Poland, Czech Republic.",
      specificAction:
        "Flash 15% discount + free shipping for 14 days. Target demographics: Girls 6-12, Parents 30-45. Channels: Email, Instagram, TikTok ads.",
      financial:
        "Incremental sales €1.8M, Promo cost €450K, Marketing €280K, Net margin €1.07M, ROI 245%.",
      timing:
        "Launch within 7 days to capture viral momentum. Campaign duration 14 days.",
      risk: "Viral trends decay rapidly. 84% confidence assumes action within 1 week.",
    },
  },
  {
    priority: 3,
    action: "Reducir precio City en Brasil -12%",
    category: "City",
    region: "Brasil",
    impact: "+€950K",
    effort: "Low",
    confidence: 78,
    roi: 156,
    details: {
      context:
        "Brazil economic slowdown + currency devaluation. Price elasticity analysis shows -12% price → +34% volume in emerging markets.",
      specificAction:
        "Tactical price reduction on 8 core City SKUs. Maintain premium positioning on complex sets. Test for 90 days.",
      financial:
        "Volume increase 34% (8.2K→11K units/month), Revenue +€950K, Margin compression offset by volume, Net +€420K, ROI 156%.",
      timing:
        "Implement by Nov 10. Monitor weekly. Adjust if currency stabilizes.",
      risk: "Currency risk if Real appreciates. Exit strategy: gradual price normalization.",
    },
  },
  {
    priority: 4,
    action: "Acelerar producción Botanicals +35%",
    category: "Botanicals",
    region: "Global",
    impact: "+€3.1M",
    effort: "High",
    confidence: 89,
    roi: 744,
    details: {
      context:
        "Explosive growth +156% QoQ. Pinterest searches +240%. Adult women 25-45 segment. Supply constrained.",
      specificAction:
        "Increase production capacity: Bouquet (10192), Orchid (10311), Succulents (10309). Add 2nd shift at Denmark factory.",
      financial:
        "Additional sales €3.1M, Production cost €380K, Tooling €35K, Net margin €2.68M, ROI 744%.",
      timing:
        "Approve by Nov 3. Ramp-up 4 weeks. Full capacity by Dec 1. Critical for Q4.",
      risk: "Trend risk: 89% confidence it's not a fad. Demographic data supports sustained demand.",
    },
  },
  {
    priority: 5,
    action: "Optimizar mix Technic en Asia",
    category: "Technic",
    region: "Asia",
    impact: "+€1.2M",
    effort: "Medium",
    confidence: 76,
    roi: 188,
    details: {
      context:
        "Flagship models (€200+) underperforming in Asia vs Europe. Mid-tier (€50-100) outperforming.",
      specificAction:
        "Shift inventory mix: -30% flagship, +40% mid-tier. Focus on Porsche 911, Liebherr Excavator.",
      financial:
        "Reduced markdown €850K, Increased velocity €350K, Total impact €1.2M, Rebalancing cost €120K, ROI 188%.",
      timing:
        "Execute inventory transfer by Nov 20. Align with Chinese New Year prep.",
      risk: "Logistics cost if air freight needed. Sea freight adds 6 weeks.",
    },
  },
  {
    priority: 6,
    action: "Lanzar bundle Harry Potter + Hogwarts Express",
    category: "Harry Potter",
    region: "UK & Ireland",
    impact: "+€680K",
    effort: "Low",
    confidence: 81,
    roi: 215,
    details: {
      context:
        "HBO Max series announced for 2025. Nostalgia wave among millennials. Bundle strategy proven in Star Wars.",
      specificAction:
        "Create exclusive bundle: Hogwarts Castle + Hogwarts Express. 10% discount vs separate. Limited edition packaging.",
      financial:
        "Bundle sales 2.2K units @ €310, Revenue €682K, Bundling cost €65K, Marketing €120K, Net €497K, ROI 215%.",
      timing:
        "Launch Nov 15 (announcement date). Pre-orders open. Ship by Dec 5.",
      risk: "Low risk. Proven bundle model. High brand affinity in UK market.",
    },
  },
  {
    priority: 7,
    action: "Expandir Creator Expert en Alemania",
    category: "Creator",
    region: "Alemania",
    impact: "+€520K",
    effort: "Medium",
    confidence: 72,
    roi: 142,
    details: {
      context:
        "AFOL (Adult Fans of LEGO) community strong in Germany. Modular Buildings waitlist 8 weeks. Undersupplied market.",
      specificAction:
        "Increase allocation +25% for Assembly Square, Boutique Hotel, Police Station. Partner with specialty retailers.",
      financial:
        "Additional sales €520K, Allocation cost €185K, Retail partnerships €180K, Net €155K, ROI 142%.",
      timing:
        "Negotiate with retailers by Nov 8. Allocate inventory by Nov 22.",
      risk: "Retail partnership risk if terms unfavorable. Mitigate with trial period.",
    },
  },
  {
    priority: 8,
    action: "Descontinuar Marvel slow movers",
    category: "Marvel",
    region: "Global",
    impact: "+€420K",
    effort: "Low",
    confidence: 68,
    roi: 385,
    details: {
      context:
        "5 SKUs with <2 inventory turns/year. Superhero fatigue detected. Opportunity cost of shelf space.",
      specificAction:
        "Clearance sale 40% off: Eternals sets, Shang-Chi sets. Discontinue production. Reallocate capacity.",
      financial:
        "Clearance revenue €280K, Inventory write-off avoided €140K, Total €420K, Clearance cost €45K, ROI 385%.",
      timing:
        "Launch clearance Nov 1. Complete by Nov 30. Free up Q1 2025 capacity.",
      risk: "Brand risk minimal. Sets already underperforming. Focus on Spider-Man, Avengers core.",
    },
  },
];

export default function AIRecommendations() {
  const [selectedRec, setSelectedRec] = useState<Recommendation | null>(null);

  const exportToExcel = () => {
    // Crear contenido CSV
    const headers = [
      "Prioridad",
      "Acción",
      "Categoría",
      "Región",
      "Impacto",
      "Esfuerzo",
      "Confianza (%)",
      "ROI (%)",
      "Contexto",
      "Acción Específica",
      "Análisis Financiero",
      "Timing",
      "Riesgos",
    ];

    const rows = recommendations.map((rec) => [
      rec.priority,
      rec.action,
      rec.category,
      rec.region,
      rec.impact,
      rec.effort,
      rec.confidence,
      rec.roi,
      rec.details.context,
      rec.details.specificAction,
      rec.details.financial,
      rec.details.timing,
      rec.details.risk,
    ]);

    // Convertir a CSV
    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    // Crear Blob y descargar
    const blob = new Blob(["\ufeff" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `LEGO_AI_Recomendaciones_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalImpact = recommendations.reduce((sum, rec) => {
    const value = parseFloat(rec.impact.replace(/[^0-9.]/g, ""));
    return sum + value;
  }, 0);

  return (
    <Card className="border-2 border-purple-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <BrainCircuitIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                Recomendaciones Prescriptivas
                <Badge className="bg-purple-600 text-white animate-pulse">
                  <SparklesIcon className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
              </CardTitle>
              <CardDescription>
                Acciones priorizadas por impacto financiero con análisis completo
              </CardDescription>
            </div>
          </div>
          <Button
            onClick={exportToExcel}
            className="bg-green-600 hover:bg-green-700 text-white"
            size="sm"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            Exportar a Excel
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-900">
                🎯 Impacto Total Potencial
              </p>
              <p className="text-2xl font-bold text-purple-700">
                +€{totalImpact.toFixed(1)}M
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-purple-900">
                {recommendations.length} Acciones Priorizadas
              </p>
              <p className="text-xs text-purple-700">
                Ordenadas por ROI y confianza
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="w-16 font-bold">#</TableHead>
                <TableHead className="font-bold">Acción Recomendada</TableHead>
                <TableHead className="font-bold">Categoría</TableHead>
                <TableHead className="font-bold">Región</TableHead>
                <TableHead className="font-bold text-right">Impacto</TableHead>
                <TableHead className="font-bold">Esfuerzo</TableHead>
                <TableHead className="font-bold text-right">ROI</TableHead>
                <TableHead className="font-bold text-right">Confianza</TableHead>
                <TableHead className="w-32"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recommendations.map((rec) => (
                <TableRow key={rec.priority} className="hover:bg-slate-50">
                  <TableCell className="font-bold text-purple-600">
                    {rec.priority}
                  </TableCell>
                  <TableCell className="font-medium">{rec.action}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{rec.category}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600">
                    {rec.region}
                  </TableCell>
                  <TableCell className="text-right font-bold text-green-600">
                    {rec.impact}
                  </TableCell>
                  <TableCell>
                    <Badge className={getEffortColor(rec.effort)}>
                      {rec.effort}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-bold text-blue-600">
                    {rec.roi}%
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-12 bg-slate-200 rounded-full h-1.5">
                        <div
                          className="bg-purple-600 h-1.5 rounded-full"
                          style={{ width: `${rec.confidence}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">
                        {rec.confidence}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedRec(rec)}
                        >
                          Ver Detalles
                          <ChevronDownIcon className="w-4 h-4 ml-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl flex items-center gap-2">
                            <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                              {rec.priority}
                            </span>
                            {rec.action}
                          </DialogTitle>
                          <DialogDescription>
                            Análisis completo de la recomendación prescriptiva
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 mt-4">
                          {/* Contexto */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              📊 Contexto
                            </h3>
                            <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200">
                              {rec.details.context}
                            </p>
                          </div>

                          {/* Acción Específica */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              🎯 Acción Específica
                            </h3>
                            <p className="text-sm text-slate-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                              {rec.details.specificAction}
                            </p>
                          </div>

                          {/* Análisis Financiero */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              💰 Análisis Financiero
                            </h3>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <p className="text-sm text-slate-700 mb-3">
                                {rec.details.financial}
                              </p>
                              <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-green-300">
                                <div>
                                  <p className="text-xs text-slate-600">
                                    Impacto
                                  </p>
                                  <p className="text-xl font-bold text-green-600">
                                    {rec.impact}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-xs text-slate-600">ROI</p>
                                  <p className="text-xl font-bold text-blue-600">
                                    {rec.roi}%
                                  </p>
                                </div>
                                <div>
                                  <p className="text-xs text-slate-600">
                                    Confianza
                                  </p>
                                  <p className="text-xl font-bold text-purple-600">
                                    {rec.confidence}%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Timing */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              ⏰ Timing y Ejecución
                            </h3>
                            <p className="text-sm text-slate-700 bg-amber-50 p-4 rounded-lg border border-amber-200">
                              {rec.details.timing}
                            </p>
                          </div>

                          {/* Riesgos */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              ⚠️ Riesgos y Mitigación
                            </h3>
                            <p className="text-sm text-slate-700 bg-red-50 p-4 rounded-lg border border-red-200">
                              {rec.details.risk}
                            </p>
                          </div>

                          {/* Botón de Acción */}
                          <div className="pt-4 border-t border-slate-200">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                              <CheckCircle2Icon className="w-5 h-5 mr-2" />
                              Aprobar y Ejecutar Acción
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>
            Modelo: Multi-Objective Optimization + Monte Carlo Simulation
          </span>
          <span>Última actualización: Hace 1 hora</span>
        </div>
      </CardContent>
    </Card>
  );
}
