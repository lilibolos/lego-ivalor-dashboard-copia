import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { BrainCircuitIcon, SparklesIcon, TrendingUpIcon, InfoIcon } from "lucide-react";
import { useState } from "react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Datos expandidos de predicciones para 10 categorías
const predictionsData = {
  "Star Wars": [
    { month: "Sep 24", historical: 142, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 145, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 182, lower: 165, upper: 199 },
    { month: "Dec 24", historical: null, predicted: 230, lower: 210, upper: 250 },
    { month: "Jan 25", historical: null, predicted: 108, lower: 98, upper: 118 },
  ],
  "Friends": [
    { month: "Sep 24", historical: 75, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 78, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 82, lower: 75, upper: 89 },
    { month: "Dec 24", historical: null, predicted: 118, lower: 108, upper: 128 },
    { month: "Jan 25", historical: null, predicted: 71, lower: 64, upper: 78 },
  ],
  "Technic": [
    { month: "Sep 24", historical: 108, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 112, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 125, lower: 115, upper: 135 },
    { month: "Dec 24", historical: null, predicted: 165, lower: 152, upper: 178 },
    { month: "Jan 25", historical: null, predicted: 95, lower: 86, upper: 104 },
  ],
  "City": [
    { month: "Sep 24", historical: 94, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 98, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 105, lower: 96, upper: 114 },
    { month: "Dec 24", historical: null, predicted: 148, lower: 136, upper: 160 },
    { month: "Jan 25", historical: null, predicted: 82, lower: 74, upper: 90 },
  ],
  "Creator": [
    { month: "Sep 24", historical: 62, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 65, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 72, lower: 66, upper: 78 },
    { month: "Dec 24", historical: null, predicted: 98, lower: 90, upper: 106 },
    { month: "Jan 25", historical: null, predicted: 64, lower: 58, upper: 70 },
  ],
  "Botanicals": [
    { month: "Sep 24", historical: 38, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 42, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 65, lower: 58, upper: 72 },
    { month: "Dec 24", historical: null, predicted: 88, lower: 80, upper: 96 },
    { month: "Jan 25", historical: null, predicted: 52, lower: 47, upper: 57 },
  ],
  "Ninjago": [
    { month: "Sep 24", historical: 52, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 48, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 54, lower: 48, upper: 60 },
    { month: "Dec 24", historical: null, predicted: 72, lower: 65, upper: 79 },
    { month: "Jan 25", historical: null, predicted: 45, lower: 40, upper: 50 },
  ],
  "Marvel": [
    { month: "Sep 24", historical: 88, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 85, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 82, lower: 74, upper: 90 },
    { month: "Dec 24", historical: null, predicted: 105, lower: 96, upper: 114 },
    { month: "Jan 25", historical: null, predicted: 68, lower: 61, upper: 75 },
  ],
  "Harry Potter": [
    { month: "Sep 24", historical: 68, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 72, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 78, lower: 71, upper: 85 },
    { month: "Dec 24", historical: null, predicted: 112, lower: 102, upper: 122 },
    { month: "Jan 25", historical: null, predicted: 65, lower: 59, upper: 71 },
  ],
  "Architecture": [
    { month: "Sep 24", historical: 45, predicted: null, lower: null, upper: null },
    { month: "Oct 24", historical: 48, predicted: null, lower: null, upper: null },
    { month: "Nov 24", historical: null, predicted: 52, lower: 47, upper: 57 },
    { month: "Dec 24", historical: null, predicted: 68, lower: 62, upper: 74 },
    { month: "Jan 25", historical: null, predicted: 44, lower: 40, upper: 48 },
  ],
};

const insights = {
  "Star Wars": {
    text: "Se espera un aumento del 28% en ventas durante diciembre debido a:",
    factors: [
      "Lanzamiento de nueva serie en Disney+ (15 nov)",
      "Temporada navideña (pico histórico)",
      "Nuevo set exclusivo 'Millennium Falcon UCS'",
    ],
    confidence: 87,
  },
  "Friends": {
    text: "Crecimiento moderado esperado con pico navideño:",
    factors: [
      "Nuevos sets Heartlake populares en TikTok",
      "Temporada de regalos para niñas 6-12 años",
      "Campaña de marketing Q4 planificada",
    ],
    confidence: 79,
  },
  "Technic": {
    text: "Fuerte demanda en segmento adulto coleccionista:",
    factors: [
      "Lanzamiento flagship model (Bugatti Chiron successor)",
      "Crecimiento +22% en adultos 25-45 años",
      "Menos estacionalidad que categorías infantiles",
    ],
    confidence: 82,
  },
  "City": {
    text: "Categoría evergreen con patrón estacional predecible:",
    factors: [
      "Apelación amplia (familias con niños 4-10 años)",
      "Sets de policía y bomberos siempre populares",
      "Compras navideñas de abuelos (precio accesible)",
    ],
    confidence: 81,
  },
  "Creator": {
    text: "Segmento en crecimiento con adultos AFOL (Adult Fans of LEGO):",
    factors: [
      "Modular Buildings muy demandados (€200-300 price point)",
      "Sets de arquitectura icónica (Torre Eiffel, Coliseo)",
      "Comunidad activa en foros y Reddit",
    ],
    confidence: 77,
  },
  "Botanicals": {
    text: "Tendencia emergente con crecimiento explosivo (+156%):",
    factors: [
      "Viral en redes sociales (Pinterest +240%)",
      "Segmento adulto mujeres 25-45 años",
      "Uso como decoración del hogar",
    ],
    confidence: 92,
  },
  "Ninjago": {
    text: "Categoría madura con base de fans leal pero estable:",
    factors: [
      "Nueva temporada TV lanzada en octubre",
      "Competencia con videojuegos (Fortnite, Roblox)",
      "Mercado saturado después de 12 años",
    ],
    confidence: 74,
  },
  "Marvel": {
    text: "Desaceleración detectada por fatiga de superhéroes:",
    factors: [
      "Crecimiento -15% QoQ (trimestre sobre trimestre)",
      "Menos estrenos de películas Marvel en 2024",
      "Competencia con juguetes de acción tradicionales",
    ],
    confidence: 76,
  },
  "Harry Potter": {
    text: "Resurgimiento por nueva generación de fans:",
    factors: [
      "Serie HBO Max anunciada para 2025",
      "Padres millennials comprando para sus hijos",
      "Sets de Hogwarts (€400+) muy demandados",
    ],
    confidence: 83,
  },
  "Architecture": {
    text: "Nicho premium con alta lealtad y margen:",
    factors: [
      "Coleccionistas adultos con alto poder adquisitivo",
      "Regalos corporativos y decoración de oficinas",
      "Lanzamientos limitados generan urgencia",
    ],
    confidence: 80,
  },
};

export default function AIPredictions() {
  const [selectedCategory, setSelectedCategory] = useState("Star Wars");
  const currentData = predictionsData[selectedCategory as keyof typeof predictionsData];
  const currentInsight = insights[selectedCategory as keyof typeof insights];

  return (
    <Card className="border-2 border-blue-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <BrainCircuitIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                Predicción de Demanda con IA
                <Badge className="bg-blue-600 text-white animate-pulse">
                  <SparklesIcon className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
              </CardTitle>
              <CardDescription>
                Forecasting de ventas próximos 3 meses con intervalos de confianza
              </CardDescription>
            </div>
          </div>
          <UITooltip>
            <TooltipTrigger>
              <InfoIcon className="w-5 h-5 text-slate-400 hover:text-slate-600" />
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p className="text-xs">
                <strong>Cómo funciona:</strong> Modelo Prophet (Facebook) analiza patrones históricos,
                estacionalidad, eventos externos y tendencias de búsqueda para predecir demanda futura.
                El área sombreada representa el intervalo de confianza del 85%.
              </p>
            </TooltipContent>
          </UITooltip>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            Categoría de Producto:
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Star Wars">LEGO Star Wars</SelectItem>
              <SelectItem value="Friends">LEGO Friends</SelectItem>
              <SelectItem value="Technic">LEGO Technic</SelectItem>
              <SelectItem value="City">LEGO City</SelectItem>
              <SelectItem value="Creator">LEGO Creator Expert</SelectItem>
              <SelectItem value="Botanicals">LEGO Botanicals</SelectItem>
              <SelectItem value="Ninjago">LEGO Ninjago</SelectItem>
              <SelectItem value="Marvel">LEGO Marvel</SelectItem>
              <SelectItem value="Harry Potter">LEGO Harry Potter</SelectItem>
              <SelectItem value="Architecture">LEGO Architecture</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={currentData}>
            <defs>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" label={{ value: 'Ventas (M$)', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="upper"
              stroke="none"
              fill="#fef3c7"
              fillOpacity={0.4}
              name="Intervalo Superior"
            />
            <Area
              type="monotone"
              dataKey="lower"
              stroke="none"
              fill="#fef3c7"
              fillOpacity={0.4}
              name="Intervalo Inferior"
            />
            <Line
              type="monotone"
              dataKey="historical"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", r: 5 }}
              name="Ventas Históricas"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#f97316"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: "#f97316", r: 5 }}
              name="Predicción IA"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <TrendingUpIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900 mb-2">
                🤖 INSIGHT PREDICTIVO:
              </p>
              <p className="text-sm text-slate-700 mb-2">{currentInsight.text}</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                {currentInsight.factors.map((factor, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {factor}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">
                  Confianza de la predicción:
                </span>
                <div className="flex-1 max-w-xs">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all"
                      style={{ width: `${currentInsight.confidence}%` }}
                    />
                  </div>
                </div>
                <Badge variant="outline" className="bg-white">
                  {currentInsight.confidence}%
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Modelo: Prophet (Facebook) + Factores Externos</span>
          <span>Última actualización: Hace 2 horas</span>
        </div>
      </CardContent>
    </Card>
  );
}
