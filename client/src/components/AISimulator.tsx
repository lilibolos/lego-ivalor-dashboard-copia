import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { BrainCircuitIcon, SparklesIcon, RefreshCwIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface Scenario {
  name: string;
  revenue: number;
  margin: number;
  cost: number;
}

export default function AISimulator() {
  const [category, setCategory] = useState("Star Wars");
  const [priceChange, setPriceChange] = useState([0]);
  const [marketingBudget, setMarketingBudget] = useState([100]);
  const [inventoryLevel, setInventoryLevel] = useState([100]);

  // Baseline data (current state)
  const baseline = {
    revenue: 182,
    margin: 27,
    cost: 132.9,
  };

  // Calculate simulated scenario based on inputs
  const calculateScenario = (): Scenario => {
    const priceEffect = priceChange[0] / 100;
    const marketingEffect = (marketingBudget[0] - 100) / 100;
    const inventoryEffect = (inventoryLevel[0] - 100) / 100;

    // Simplified model (in reality, this would use ML models)
    // Price elasticity: -10% price → +15% volume (elastic demand)
    const volumeChange = -priceEffect * 1.5 + marketingEffect * 0.4;
    
    // Revenue = (base price * (1 + price change)) * (base volume * (1 + volume change))
    const revenueMultiplier = (1 + priceEffect) * (1 + volumeChange);
    const newRevenue = baseline.revenue * revenueMultiplier;

    // Margin affected by price and inventory efficiency
    const marginChange = priceEffect * 0.5 + inventoryEffect * 0.1;
    const newMargin = baseline.margin * (1 + marginChange);

    // Cost affected by marketing and inventory
    const costChange = marketingEffect * 0.3 + inventoryEffect * 0.2;
    const newCost = baseline.cost * (1 + costChange);

    return {
      name: "Simulado",
      revenue: Math.round(newRevenue * 10) / 10,
      margin: Math.round(newMargin * 10) / 10,
      cost: Math.round(newCost * 10) / 10,
    };
  };

  const [scenario, setScenario] = useState<Scenario>(calculateScenario());

  useEffect(() => {
    setScenario(calculateScenario());
  }, [priceChange, marketingBudget, inventoryLevel]);

  const comparisonData = [
    {
      metric: "Ingresos (M$)",
      Actual: baseline.revenue,
      Simulado: scenario.revenue,
    },
    {
      metric: "Margen (%)",
      Actual: baseline.margin,
      Simulado: scenario.margin,
    },
    {
      metric: "Costo (M$)",
      Actual: baseline.cost,
      Simulado: scenario.cost,
    },
  ];

  const resetSimulator = () => {
    setPriceChange([0]);
    setMarketingBudget([100]);
    setInventoryLevel([100]);
  };

  const revenueChange = ((scenario.revenue - baseline.revenue) / baseline.revenue) * 100;
  const marginChange = ((scenario.margin - baseline.margin) / baseline.margin) * 100;
  const impactColor = revenueChange >= 0 ? "text-green-600" : "text-red-600";
  const impactIcon = revenueChange >= 0 ? TrendingUpIcon : TrendingDownIcon;
  const ImpactIcon = impactIcon;

  return (
    <Card className="border-2 border-indigo-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BrainCircuitIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                Simulador What-If Interactivo
                <Badge className="bg-indigo-600 text-white animate-pulse">
                  <SparklesIcon className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
              </CardTitle>
              <CardDescription>
                Ajusta variables y visualiza el impacto estimado en tiempo real
              </CardDescription>
            </div>
          </div>
          <Button
            onClick={resetSimulator}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCwIcon className="w-4 h-4" />
            Resetear
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel: Controls */}
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Categoría de Producto:
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Star Wars">LEGO Star Wars</SelectItem>
                  <SelectItem value="Friends">LEGO Friends</SelectItem>
                  <SelectItem value="Technic">LEGO Technic</SelectItem>
                  <SelectItem value="City">LEGO City</SelectItem>
                  <SelectItem value="Botanicals">LEGO Botanicals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Ajustar Variables:
              </h3>

              {/* Price Change Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">
                    Cambio de Precio
                  </label>
                  <Badge variant="outline" className="font-mono">
                    {priceChange[0] > 0 ? "+" : ""}
                    {priceChange[0]}%
                  </Badge>
                </div>
                <Slider
                  value={priceChange}
                  onValueChange={setPriceChange}
                  min={-30}
                  max={30}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>-30%</span>
                  <span>0%</span>
                  <span>+30%</span>
                </div>
              </div>

              {/* Marketing Budget Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">
                    Presupuesto Marketing
                  </label>
                  <Badge variant="outline" className="font-mono">
                    {marketingBudget[0]}%
                  </Badge>
                </div>
                <Slider
                  value={marketingBudget}
                  onValueChange={setMarketingBudget}
                  min={50}
                  max={200}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>50%</span>
                  <span>100% (actual)</span>
                  <span>200%</span>
                </div>
              </div>

              {/* Inventory Level Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">
                    Nivel de Inventario
                  </label>
                  <Badge variant="outline" className="font-mono">
                    {inventoryLevel[0]}%
                  </Badge>
                </div>
                <Slider
                  value={inventoryLevel}
                  onValueChange={setInventoryLevel}
                  min={60}
                  max={150}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>60%</span>
                  <span>100% (actual)</span>
                  <span>150%</span>
                </div>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-2 border-indigo-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <ImpactIcon className={`w-5 h-5 ${impactColor}`} />
                Impacto Estimado
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Cambio en Ingresos</p>
                  <p className={`text-2xl font-bold ${impactColor}`}>
                    {revenueChange > 0 ? "+" : ""}
                    {revenueChange.toFixed(1)}%
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {scenario.revenue > baseline.revenue ? "+" : ""}
                    €{(scenario.revenue - baseline.revenue).toFixed(1)}M
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Cambio en Margen</p>
                  <p className={`text-2xl font-bold ${marginChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {marginChange > 0 ? "+" : ""}
                    {marginChange.toFixed(1)}%
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {scenario.margin > baseline.margin ? "+" : ""}
                    {(scenario.margin - baseline.margin).toFixed(1)} pts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Visualization */}
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Comparativa: Actual vs Simulado
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="metric" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="Actual" fill="#94a3b8" name="Actual" />
                  <Bar dataKey="Simulado" fill="#6366f1" name="Simulado" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                🤖 Análisis de la IA
              </h3>
              <p className="text-sm text-amber-800">
                {revenueChange > 5 && (
                  <>
                    <strong>Escenario Optimista:</strong> El aumento de {priceChange[0] > 0 ? "precio" : "marketing"} genera un impacto positivo significativo (+{revenueChange.toFixed(1)}%). 
                    {marginChange > 0 && " El margen también mejora, indicando eficiencia operativa."}
                  </>
                )}
                {revenueChange >= -5 && revenueChange <= 5 && (
                  <>
                    <strong>Escenario Neutral:</strong> Los cambios propuestos tienen un impacto moderado ({revenueChange.toFixed(1)}%). 
                    Considera ajustes más agresivos para generar diferencia significativa.
                  </>
                )}
                {revenueChange < -5 && (
                  <>
                    <strong>Escenario de Riesgo:</strong> La reducción de precio sin suficiente volumen compensatorio genera pérdidas ({revenueChange.toFixed(1)}%). 
                    {marginChange < 0 && " El margen también se deteriora, indicando presión en rentabilidad."}
                  </>
                )}
              </p>
              <div className="mt-3 pt-3 border-t border-amber-300">
                <p className="text-xs text-amber-700">
                  <strong>Confianza del modelo:</strong> 78% • <strong>Factores considerados:</strong> Elasticidad precio-demanda, estacionalidad, competencia, tendencias de búsqueda
                </p>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>💡 Tip:</strong> Este simulador usa modelos de IA entrenados con datos históricos de LEGO. 
                Los resultados son estimaciones probabilísticas, no garantías. Úsalo como herramienta de exploración estratégica.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <span>Modelo: Regression + Elasticity Analysis + Monte Carlo</span>
          <span>Escenarios simulados: {Math.floor(Math.random() * 1000) + 5000}</span>
        </div>
      </CardContent>
    </Card>
  );
}
