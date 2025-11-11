import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { intangibleCases } from "@/data/intangiblesData";
import { ExternalLink } from "lucide-react";

interface IntangibleSelectorProps {
  selectedIntangible: string;
  onSelect: (intangibleId: string) => void;
}

export default function IntangibleSelector({
  selectedIntangible,
  onSelect,
}: IntangibleSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Seleccione el Intangible Estratégico a Gestionar
        </h2>
        <p className="text-slate-600">
          Cada intangible incluye un caso de estudio real con resultados medibles en P&L
        </p>
      </div>

      {/* Selector de Intangibles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {intangibleCases.map((intangible) => (
          <Card
            key={intangible.id}
            className={`
              p-6 cursor-pointer transition-all duration-200 hover:shadow-lg
              ${
                selectedIntangible === intangible.id
                  ? "border-2 border-blue-500 bg-blue-50 shadow-md"
                  : "border border-slate-200 hover:border-blue-300"
              }
            `}
            onClick={() => onSelect(intangible.id)}
          >
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">{intangible.icon}</div>
              <h3 className="font-bold text-lg text-slate-900">
                {intangible.name}
              </h3>
              <p className="text-sm text-slate-600 min-h-[40px]">
                {intangible.description}
              </p>
              {selectedIntangible === intangible.id && (
                <Badge className="bg-blue-600 text-white">ACTIVO</Badge>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Caso de Estudio del Intangible Seleccionado */}
      {selectedIntangible && (
        <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-blue-500">
          {(() => {
            const selectedCase = intangibleCases.find(
              (c) => c.id === selectedIntangible
            );
            if (!selectedCase) return null;

            return (
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">
                      Caso de Estudio: {selectedCase.company}
                    </h3>
                    <p className="text-sm text-slate-600">
                      <strong>Herramienta:</strong> {selectedCase.tool}
                    </p>
                  </div>
                  <a
                    href={selectedCase.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {selectedCase.source}
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Resultados Medibles:
                  </p>
                  <p className="text-lg font-bold text-blue-700">
                    {selectedCase.result}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Los componentes de IA abajo muestran ejemplos basados en este caso de estudio
                  </span>
                </div>
              </div>
            );
          })()}
        </Card>
      )}
    </div>
  );
}
