import React from 'react';
import { Quote } from 'lucide-react';

export default function Reflection() {
  return (
    <div className="bg-emerald-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700 rounded-full -ml-32 -mb-32 opacity-30 blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-block p-4 bg-emerald-800/50 rounded-full mb-4">
          <Quote size={32} className="text-emerald-400" />
        </div>
        
        <h2 className="text-3xl font-bold">Reflexión Final: El Papel de la IA en la Sostenibilidad</h2>
        
        <div className="text-lg leading-relaxed text-emerald-50/90 italic">
          <p>
            La integración de la Inteligencia Artificial en la propuesta EcoTrama App representa un salto cualitativo desde una simple herramienta de registro hacia un ecosistema de decisión inteligente. El papel fundamental de la IA aquí no es solo automatizar, sino educar y empoderar al ciudadano. Al reducir la fricción cognitiva que implica clasificar residuos complejos, la tecnología actúa como un puente entre la intención ecológica y la acción efectiva. 
          </p>
          <p className="mt-4">
            Sin embargo, este avance conlleva responsabilidades éticas críticas. La dependencia de modelos centralizados y el manejo de datos visuales de los hogares exigen una arquitectura de privacidad robusta. Además, existe el riesgo de "pereza cognitiva", donde el usuario delega totalmente su juicio a la máquina. Por ello, la IA debe ser vista como un copiloto que fortalece la cultura ambiental, no como un sustituto del criterio humano. En conclusión, la IA es el motor que permite que soluciones informáticas locales escalen a impactos globales, garantizando que la tecnología esté verdaderamente al servicio de la comunidad y el planeta, alineándose con los Objetivos de Desarrollo Sostenible (ODS).
          </p>
        </div>
        
        <div className="pt-8 border-t border-emerald-800">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">Informe Técnico B-IT Transformador</p>
          <p className="text-xs text-emerald-500 mt-2">Fundación del Areandina | Ingeniería de Sistemas | 2026</p>
        </div>
      </div>
    </div>
  );
}
