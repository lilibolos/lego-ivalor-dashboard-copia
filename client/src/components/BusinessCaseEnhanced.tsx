import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { TrendingUpIcon, DollarSignIcon, TargetIcon, SplitIcon, InfoIcon } from "lucide-react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Datos con separación OpEx vs CAPEX
const businessCaseData = {
  investment: {
    total: 500, // M$
    opex: 150, // 30%
    capex: 350, // 70%
  },
  returns: {
    brand: { value: 1200, type: "CAPEX", impactRoute: "Activos Totales" },
    talent: { value: 450, type: "OpEx", impactRoute: "Patrimonio Neto" },
    customers: { value: 800, type: "CAPEX", impactRoute: "Activos Totales" },
    innovation: { value: 650, type: "CAPEX", impactRoute: "Activos Totales" },
  },
  balanceImpact: {
    equity: 800, // M$ (vía P&L)
    assets: 300, // M$ (vía CAPEX NIC 38)
  },
};

const totalReturn = Object.values(businessCaseData.returns).reduce((acc, item) => acc + item.value, 0);
const roi = ((totalReturn - businessCaseData.investment.total) / businessCaseData.investment.total) * 100;

// Datos para tabla de intangibles
const intangiblesTableData = [
  {
    intangible: "Marca",
    investment: 200,
    type: "CAPEX",
    impactRoute: "Activos Totales",
    returns: 1200,
    roi: 500,
  },
  {
    intangible: "Talento",
    investment: 150,
    type: "OpEx",
    impactRoute: "Patrimonio Neto",
    returns: 450,
    roi: 200,
  },
  {
    intangible: "Clientes (LEGO Ideas)",
    investment: 80,
    type: "CAPEX",
    impactRoute: "Activos Totales",
    returns: 800,
    roi: 900,
  },
  {
    intangible: "Innovación (R&D)",
    investment: 70,
    type: "CAPEX",
    impactRoute: "Activos Totales",
    returns: 650,
    roi: 829,
  },
];

// Datos para gráfico de retorno por intangible
const chartData = [
  { name: "Marca", value: businessCaseData.returns.brand.value, type: "CAPEX", color: "#8b5cf6" },
  { name: "Talento", value: businessCaseData.returns.talent.value, type: "OpEx", color: "#06b6d4" },
  { name: "Clientes", value: businessCaseData.returns.customers.value, type: "CAPEX", color: "#10b981" },
  { name: "Innovación", value: businessCaseData.returns.innovation.value, type: "CAPEX", color: "#f59e0b" },
];

// Datos para gráfico de distribución OpEx vs CAPEX
const investmentDistribution = [
  { name: "CAPEX (70%)", value: businessCaseData.investment.capex, color: "#8b5cf6" },
  { name: "OpEx (30%)", value: businessCaseData.investment.opex, color: "#06b6d4" },
];

export default function BusinessCaseEnhanced() {
  return (
    <div className="space-y-6">
      {/* KPIs principales con nuevas métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4" />
              Inversión Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">${businessCaseData.investment.total}M</div>
            <p className="text-xs text-slate-600 mt-1">Inversión en intangibles</p>
            <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">
              2003-2014
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <SplitIcon className="w-4 h-4" />
              Inversión CAPEX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">${businessCaseData.investment.capex}M</div>
            <p className="text-xs text-slate-600 mt-1">Capitalizable bajo NIC 38</p>
            <Badge className="mt-2 bg-purple-100 text-purple-800 text-xs">
              70% del total
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <SplitIcon className="w-4 h-4" />
              Inversión OpEx
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-cyan-900">${businessCaseData.investment.opex}M</div>
            <p className="text-xs text-slate-600 mt-1">Impacto vía P&L</p>
            <Badge className="mt-2 bg-cyan-100 text-cyan-800 text-xs">
              30% del total
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <TrendingUpIcon className="w-4 h-4" />
              Retorno Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">${totalReturn}M</div>
            <p className="text-xs text-slate-600 mt-1">Valor generado</p>
            <Badge className="mt-2 bg-green-100 text-green-800 text-xs">
              Valor creado
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-900 flex items-center gap-2">
              <TargetIcon className="w-4 h-4" />
              ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">{roi.toFixed(0)}%</div>
            <p className="text-xs text-purple-700 mt-1">Retorno de inversión</p>
            <Badge className="mt-2 bg-purple-600 text-white text-xs">
              Objetivo superado
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Nuevos KPIs: Impacto en Balance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-blue-600 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-blue-900 flex items-center gap-2">
              <TrendingUpIcon className="w-4 h-4" />
              Mejora Patrimonio Neto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">+${businessCaseData.balanceImpact.equity}M</div>
            <p className="text-xs text-blue-700 mt-1">Vía mejora P&L</p>
            <Badge className="mt-2 bg-blue-600 text-white text-xs">
              Ruta 1: P&L → Balance
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-600 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-900 flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4" />
              Activos Capitalizados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">+${businessCaseData.balanceImpact.assets}M</div>
            <p className="text-xs text-purple-700 mt-1">Bajo NIC 38</p>
            <Badge className="mt-2 bg-purple-600 text-white text-xs">
              Ruta 2: CAPEX → Balance
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-600 bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-green-900 flex items-center gap-2">
              <TargetIcon className="w-4 h-4" />
              Valor Total en Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">+${businessCaseData.balanceImpact.equity + businessCaseData.balanceImpact.assets}M</div>
            <p className="text-xs text-green-700 mt-1">Impacto dual</p>
            <Badge className="mt-2 bg-green-600 text-white text-xs">
              Patrimonio + Activos
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribución Inversión OpEx vs CAPEX */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Distribución Inversión: OpEx vs CAPEX
              <TooltipProvider>
                <UITooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">
                      <strong>CAPEX:</strong> Inversión capitalizable bajo NIC 38 (Marca, Innovación, Datos)<br/>
                      <strong>OpEx:</strong> Gasto operativo con impacto en P&L (Talento, Formación)
                    </p>
                  </TooltipContent>
                </UITooltip>
              </TooltipProvider>
            </CardTitle>
            <CardDescription>Separación de inversión total ($500M)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={investmentDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${value}M`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {investmentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex gap-2 justify-center">
              <Badge className="bg-purple-600 text-white">CAPEX: $350M (70%)</Badge>
              <Badge className="bg-cyan-600 text-white">OpEx: $150M (30%)</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Retorno por Área de Intangible */}
        <Card>
          <CardHeader>
            <CardTitle>Retorno por Área de Intangible</CardTitle>
            <CardDescription>Contribución al retorno total (M$)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" name="Retorno (M$)">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex gap-2 justify-center flex-wrap">
              <Badge className="bg-purple-100 text-purple-800 text-xs">Marca: CAPEX</Badge>
              <Badge className="bg-cyan-100 text-cyan-800 text-xs">Talento: OpEx</Badge>
              <Badge className="bg-green-100 text-green-800 text-xs">Clientes: CAPEX</Badge>
              <Badge className="bg-amber-100 text-amber-800 text-xs">Innovación: CAPEX</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla detallada: Separación OpEx vs CAPEX */}
      <Card>
        <CardHeader>
          <CardTitle>Desglose Detallado: Inversión, Tipo y Retorno por Intangible</CardTitle>
          <CardDescription>
            Separación OpEx (Patrimonio Neto vía P&L) vs CAPEX (Activos Totales vía NIC 38)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Intangible</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700">Inversión</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700">Tipo</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Impacto en Balance</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700">Retorno</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700">ROI</th>
                </tr>
              </thead>
              <tbody>
                {intangiblesTableData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-900">{row.intangible}</td>
                    <td className="py-3 px-4 text-right text-slate-700">${row.investment}M</td>
                    <td className="py-3 px-4 text-center">
                      <Badge className={row.type === "CAPEX" ? "bg-purple-100 text-purple-800" : "bg-cyan-100 text-cyan-800"}>
                        {row.type}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-slate-700">{row.impactRoute}</td>
                    <td className="py-3 px-4 text-right font-semibold text-green-700">${row.returns}M</td>
                    <td className="py-3 px-4 text-right font-semibold text-purple-700">{row.roi}%</td>
                  </tr>
                ))}
                <tr className="bg-slate-100 font-bold">
                  <td className="py-3 px-4 text-slate-900">TOTAL</td>
                  <td className="py-3 px-4 text-right text-slate-900">${businessCaseData.investment.total}M</td>
                  <td className="py-3 px-4 text-center">
                    <Badge className="bg-slate-600 text-white">Mixed</Badge>
                  </td>
                  <td className="py-3 px-4 text-slate-900">Dual</td>
                  <td className="py-3 px-4 text-right text-green-900">${totalReturn}M</td>
                  <td className="py-3 px-4 text-right text-purple-900">{roi.toFixed(0)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-xs text-purple-900">
                <strong>CAPEX ($350M, 70%):</strong> Inversión capitalizable en Activos Totales bajo NIC 38. 
                Incluye Marca ($200M), LEGO Ideas ($80M), e Innovación ($70M).
              </p>
            </div>
            <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
              <p className="text-xs text-cyan-900">
                <strong>OpEx ($150M, 30%):</strong> Gasto operativo con impacto en Patrimonio Neto vía P&L. 
                Incluye Talento, Formación, y Gestión de Comunidad.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Análisis final */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="pt-6">
          <p className="text-sm text-slate-900 leading-relaxed">
            <strong>Análisis de Capitalización Dual:</strong> La gestión estratégica de intangibles generó un retorno de ${totalReturn}M sobre una inversión de ${businessCaseData.investment.total}M, 
            representando un ROI del {roi.toFixed(0)}%. El impacto en balance fue dual: <strong>+${businessCaseData.balanceImpact.equity}M en Patrimonio Neto</strong> vía mejora P&L 
            (reducción OpEx, aumento Revenue) y <strong>+${businessCaseData.balanceImpact.assets}M en Activos Totales</strong> vía capitalización CAPEX bajo NIC 38. 
            Esto demuestra que los intangibles no solo mejoran P&L, sino que se capitalizan como activos en balance, fortaleciendo la posición financiera de LEGO.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
