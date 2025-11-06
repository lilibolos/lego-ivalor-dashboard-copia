import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUpIcon, DollarSignIcon, TargetIcon } from "lucide-react";

const businessCaseData = {
  investment: 500, // in millions
  returns: {
    brand: 1200,
    talent: 450,
    customers: 800,
    innovation: 650,
  },
};

const totalReturn = Object.values(businessCaseData.returns).reduce((acc, value) => acc + value, 0);
const roi = ((totalReturn - businessCaseData.investment) / businessCaseData.investment) * 100;

const chartData = [
  { name: "Marca", value: businessCaseData.returns.brand },
  { name: "Talento", value: businessCaseData.returns.talent },
  { name: "Clientes", value: businessCaseData.returns.customers },
  { name: "Innovación", value: businessCaseData.returns.innovation },
];

export default function BusinessCase() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4" />
              Inversión Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">${businessCaseData.investment}M</div>
            <p className="text-xs text-slate-600 mt-1">Inversión en iniciativas de intangibles</p>
            <Badge className="mt-2 bg-blue-100 text-blue-800">
              Período 2003-2014
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
            <p className="text-xs text-slate-600 mt-1">Retorno generado por los intangibles</p>
            <Badge className="mt-2 bg-green-100 text-green-800">
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
            <p className="text-xs text-purple-700 mt-1">Retorno de la Inversión</p>
            <Badge className="mt-2 bg-purple-600 text-white">
              Objetivo superado
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Desglose del Retorno por Área de Intangible</CardTitle>
          <CardDescription>Contribución al retorno total por cada área de intangible (en millones de dólares)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8b5cf6" name="Retorno (M$)" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-900">
              <strong>Análisis:</strong> La gestión estratégica de intangibles generó un retorno de ${totalReturn}M sobre una inversión de ${businessCaseData.investment}M, 
              representando un ROI del {roi.toFixed(0)}%. La marca fue el activo intangible de mayor valor, seguido por la innovación y la comunidad de clientes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
