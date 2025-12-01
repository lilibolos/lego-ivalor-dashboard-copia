import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { TrendingUpIcon, BuildingIcon, ArrowRightIcon, InfoIcon } from "lucide-react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Datos de impacto dual en balance
const balanceImpactData = {
  before: {
    year: 2003,
    assets: 1200, // M$
    equity: 100, // M$
  },
  after: {
    year: 2014,
    assets: 1500, // M$
    equity: 900, // M$
  },
  capitalizedAssets: {
    brand: 150,
    legoIdeas: 80,
    innovation: 70,
    total: 300,
  },
  equityImpact: {
    revenueIncrease: 4365, // +594%
    marginImprovement: 1200, // +1,025%
    debtReduction: 785, // -98%
    total: 800,
  },
};

const capitalizedAssetsChart = [
  { name: "Marca LEGO", value: balanceImpactData.capitalizedAssets.brand, color: "#8b5cf6" },
  { name: "LEGO Ideas", value: balanceImpactData.capitalizedAssets.legoIdeas, color: "#06b6d4" },
  { name: "Innovación R&D", value: balanceImpactData.capitalizedAssets.innovation, color: "#10b981" },
];

const equityImpactChart = [
  { name: "↑ Ingresos +594%", value: 4365, color: "#8b5cf6" },
  { name: "↑ Margen +1,025%", value: 1200, color: "#06b6d4" },
  { name: "↓ Deuda -98%", value: 785, color: "#10b981" },
];

export default function DualImpactBalance() {
  const totalBalanceImpact = balanceImpactData.capitalizedAssets.total + balanceImpactData.equityImpact.total;
  const assetsGrowth = ((balanceImpactData.after.assets - balanceImpactData.before.assets) / balanceImpactData.before.assets) * 100;
  const equityGrowth = ((balanceImpactData.after.equity - balanceImpactData.before.equity) / balanceImpactData.before.equity) * 100;

  return (
    <div className="space-y-6">
      {/* Header explicativo */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BuildingIcon className="w-5 h-5 text-purple-600" />
            Impacto Dual en Balance
          </CardTitle>
          <CardDescription className="text-slate-700">
            Los intangibles generan valor medible en <strong>dos rutas hacia el balance</strong>: 
            (1) <strong>Patrimonio Neto</strong> vía mejora P&L y (2) <strong>Activos Totales</strong> vía capitalización CAPEX bajo NIC 38
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Balance Antes/Después */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ANTES */}
        <Card className="border-2 border-slate-300">
          <CardHeader className="pb-3 bg-slate-50">
            <CardTitle className="text-lg">Balance LEGO ({balanceImpactData.before.year})</CardTitle>
            <CardDescription>Antes de IVALOR™</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-600">Activos Totales</span>
                <span className="text-2xl font-bold text-slate-900">${balanceImpactData.before.assets}M</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full">
                <div className="h-2 bg-slate-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-600">Patrimonio Neto</span>
                <span className="text-2xl font-bold text-slate-900">${balanceImpactData.before.equity}M</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full">
                <div className="h-2 bg-slate-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <Badge variant="outline" className="text-slate-600">
                Intangibles NO en balance
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* DESPUÉS */}
        <Card className="border-2 border-purple-500 shadow-lg">
          <CardHeader className="pb-3 bg-gradient-to-br from-purple-50 to-blue-50">
            <CardTitle className="text-lg flex items-center gap-2">
              Balance LEGO ({balanceImpactData.after.year})
              <Badge className="bg-purple-600">IVALOR™</Badge>
            </CardTitle>
            <CardDescription>Después de IVALOR™</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <TooltipProvider>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm font-medium text-purple-600 flex items-center gap-1 cursor-help">
                        Activos Totales
                        <InfoIcon className="w-3 h-3" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">+${balanceImpactData.capitalizedAssets.total}M intangibles capitalizados bajo NIC 38</p>
                    </TooltipContent>
                  </UITooltip>
                </TooltipProvider>
                <div className="text-right">
                  <span className="text-2xl font-bold text-purple-900">${balanceImpactData.after.assets}M</span>
                  <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                    +{assetsGrowth.toFixed(0)}%
                  </Badge>
                </div>
              </div>
              <div className="h-2 bg-purple-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                +${balanceImpactData.capitalizedAssets.total}M intangibles capitalizados (NIC 38)
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <TooltipProvider>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm font-medium text-blue-600 flex items-center gap-1 cursor-help">
                        Patrimonio Neto
                        <InfoIcon className="w-3 h-3" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">+${balanceImpactData.equityImpact.total}M vía mejora P&L</p>
                    </TooltipContent>
                  </UITooltip>
                </TooltipProvider>
                <div className="text-right">
                  <span className="text-2xl font-bold text-blue-900">${balanceImpactData.after.equity}M</span>
                  <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                    +{equityGrowth.toFixed(0)}%
                  </Badge>
                </div>
              </div>
              <div className="h-2 bg-blue-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                +${balanceImpactData.equityImpact.total}M vía mejora P&L
              </p>
            </div>
            <div className="pt-4 border-t border-purple-200">
              <Badge className="bg-purple-600 text-white">
                +${totalBalanceImpact}M valor total en balance
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ruta 1: Patrimonio Neto */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <TrendingUpIcon className="w-5 h-5" />
            Ruta 1: Patrimonio Neto (vía mejora P&L)
          </CardTitle>
          <CardDescription>
            Intangibles mejoran P&L (↓OpEx, ↑Revenue) → Resultado neto aumenta Patrimonio Neto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={equityImpactChart} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="value" name="Impacto (M$)">
                {equityImpactChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-900">
              <strong>Impacto en Patrimonio Neto:</strong> +${balanceImpactData.equityImpact.total}M vía mejora de P&L. 
              Los intangibles redujeron OpEx, aumentaron Revenue, y mejoraron márgenes, acumulando resultado neto en Patrimonio Neto.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Ruta 2: Activos Totales */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <BuildingIcon className="w-5 h-5" />
            Ruta 2: Activos Totales (vía CAPEX NIC 38)
          </CardTitle>
          <CardDescription>
            Inversión en intangibles (CAPEX) → Capitalización bajo NIC 38 → Activos Totales aumentan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={capitalizedAssetsChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" name="Capitalizado (M$)">
                {capitalizedAssetsChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-xs text-purple-900">
              <strong>Activos Capitalizados:</strong> +${balanceImpactData.capitalizedAssets.total}M bajo NIC 38. 
              Inversión en Marca ($150M), LEGO Ideas ($80M), e Innovación ($70M) registrada como activos en balance.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Resumen Impacto Total */}
      <Card className="bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-300">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-700">Impacto Total en Balance</p>
              <p className="text-4xl font-bold text-purple-900 mt-1">+${totalBalanceImpact}M</p>
              <div className="flex gap-2 mt-3">
                <Badge className="bg-blue-600 text-white">
                  +${balanceImpactData.equityImpact.total}M Patrimonio Neto
                </Badge>
                <Badge className="bg-purple-600 text-white">
                  +${balanceImpactData.capitalizedAssets.total}M Activos Totales
                </Badge>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ArrowRightIcon className="w-12 h-12 text-purple-600" />
              <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                ROI: 520%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
