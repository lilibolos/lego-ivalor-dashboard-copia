import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const integrationSystems = [
  {
    category: "ERP & Financials",
    systems: ["SAP", "Oracle ERP", "Microsoft Dynamics"],
    data: "Datos financieros, costos, presupuestos",
    color: "blue",
  },
  {
    category: "CRM & Sales",
    systems: ["Salesforce", "HubSpot", "Microsoft Dynamics CRM"],
    data: "Datos de clientes, pipeline, engagement",
    color: "green",
  },
  {
    category: "Brand & Marketing",
    systems: ["Brand24", "Brandwatch", "Meltwater"],
    data: "Brand tracking, sentiment, menciones",
    color: "purple",
  },
  {
    category: "Innovation & R+D",
    systems: ["Jira", "Asana", "Monday.com"],
    data: "Pipeline de innovación, proyectos, ROI",
    color: "orange",
  },
  {
    category: "HR & Talent",
    systems: ["Workday", "SAP SuccessFactors", "BambooHR"],
    data: "Talento, skills, engagement, retención",
    color: "pink",
  },
  {
    category: "Community & Social",
    systems: ["Discourse", "Slack", "Discord"],
    data: "Engagement, co-creación, feedback",
    color: "cyan",
  },
];

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800 border-blue-300",
  green: "bg-green-100 text-green-800 border-green-300",
  purple: "bg-purple-100 text-purple-800 border-purple-300",
  orange: "bg-orange-100 text-orange-800 border-orange-300",
  pink: "bg-pink-100 text-pink-800 border-pink-300",
  cyan: "bg-cyan-100 text-cyan-800 border-cyan-300",
};

export default function IntegrationArchitecture() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Arquitectura de Integración Enterprise</CardTitle>
          <CardDescription>
            Cómo el Dashboard IVALOR se conecta con sistemas existentes para consolidar datos de intangibles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Architecture Diagram */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border-2 border-slate-200">
              <div className="flex flex-col items-center space-y-4">
                {/* Top: External Systems */}
                <div className="w-full">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3 text-center">
                    Sistemas Enterprise Existentes
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {integrationSystems.map((system, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-2 ${colorClasses[system.color]}`}
                      >
                        <p className="font-semibold text-xs mb-1">{system.category}</p>
                        <p className="text-xs opacity-75">{system.systems.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrows Down */}
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Middle: Integration Layer */}
                <div className="w-full max-w-2xl">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-sm font-bold mb-2 text-center">Capa de Integración & ETL</h3>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white/20 rounded p-2 text-center">
                        <p className="font-semibold">API Connectors</p>
                        <p className="text-xs opacity-75">REST, GraphQL, SOAP</p>
                      </div>
                      <div className="bg-white/20 rounded p-2 text-center">
                        <p className="font-semibold">Data Pipeline</p>
                        <p className="text-xs opacity-75">Airflow, Fivetran</p>
                      </div>
                      <div className="bg-white/20 rounded p-2 text-center">
                        <p className="font-semibold">Data Warehouse</p>
                        <p className="text-xs opacity-75">Snowflake, BigQuery</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrows Down */}
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Bottom: IVALOR Dashboard */}
                <div className="w-full max-w-md">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold mb-2 text-center">Dashboard IVALOR</h3>
                    <p className="text-sm text-center opacity-90">
                      Vista consolidada de intangibles con IA predictiva y análisis de ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Stack Tecnológico</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>Frontend:</strong> React + TypeScript</li>
                    <li>• <strong>Backend:</strong> Node.js + Express</li>
                    <li>• <strong>Database:</strong> PostgreSQL / MongoDB</li>
                    <li>• <strong>IA/ML:</strong> Python + TensorFlow</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Protocolos de Integración</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong>APIs:</strong> REST, GraphQL, SOAP</li>
                    <li>• <strong>Autenticación:</strong> OAuth 2.0, JWT</li>
                    <li>• <strong>Seguridad:</strong> TLS 1.3, Encriptación E2E</li>
                    <li>• <strong>Compliance:</strong> GDPR, SOC 2</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Implementation Timeline */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-4">
                <h4 className="font-semibold text-slate-900 mb-3">Timeline de Implementación</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600">Fase 1</Badge>
                    <span className="text-sm text-slate-700">
                      <strong>Semanas 1-4:</strong> Diseño de arquitectura y configuración de conectores
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600">Fase 2</Badge>
                    <span className="text-sm text-slate-700">
                      <strong>Semanas 5-8:</strong> Implementación de pipelines de datos y ETL
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600">Fase 3</Badge>
                    <span className="text-sm text-slate-700">
                      <strong>Semanas 9-12:</strong> Testing, validación y despliegue en producción
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
