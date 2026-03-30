import React from 'react';
import { FileText, Database, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';

export default function TechnicalAnalysis() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
            <FileText size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Análisis Técnico de la Integración</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Database size={18} />
                <h3>Entradas de Datos (Inputs)</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                El sistema utiliza datos visuales no estructurados (imágenes en formato JPG/PNG) capturados por la cámara del usuario o cargados desde el almacenamiento local. Estos datos se convierten a formato Base64 para ser procesados por el modelo de IA.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Cpu size={18} />
                <h3>Procesamiento (IA Vision)</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Se implementa el modelo <strong>Gemini 3 Flash</strong> mediante la SDK de Google GenAI. El procesamiento incluye:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 ml-2">
                <li>Reconocimiento de patrones visuales para identificar el objeto.</li>
                <li>Clasificación semántica basada en categorías de reciclaje locales.</li>
                <li>Generación de instrucciones de disposición mediante razonamiento lógico.</li>
                <li>Cálculo de impacto ambiental estimado.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <TrendingUp size={18} />
                <h3>Salidas de Datos (Outputs)</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                El resultado es un objeto JSON estructurado que contiene: nombre del ítem, categoría, estado de reciclabilidad, instrucciones paso a paso, impacto ambiental y puntos de recompensa para el sistema de gamificación.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <ShieldCheck size={18} />
                <h3>Mejora de la Solución</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                La IA elimina la barrera del desconocimiento técnico del usuario. En lugar de forzar al usuario a investigar cómo reciclar, la aplicación proporciona una respuesta inmediata y veraz, aumentando la tasa de éxito en la separación de residuos en la fuente.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <h4 className="font-bold text-slate-800 mb-4">Ventajas y Limitaciones</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-emerald-600 uppercase">Ventajas</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Escalabilidad global mediante APIs.</li>
                <li>• Reducción de errores humanos en la clasificación.</li>
                <li>• Experiencia de usuario (UX) fluida y moderna.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-amber-600 uppercase">Limitaciones</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Dependencia de conectividad a internet.</li>
                <li>• Posibles falsos positivos en objetos ambiguos.</li>
                <li>• Sesgo en el reconocimiento de marcas locales específicas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
