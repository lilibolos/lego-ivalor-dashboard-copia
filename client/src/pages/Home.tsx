import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";

import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirigir automáticamente al dashboard
    setLocation("/dashboard");
  }, [setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-3xl">L</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{APP_TITLE}</h1>
        <p className="text-slate-600">Redirigiendo al dashboard...</p>
      </div>
    </div>
  );
}
