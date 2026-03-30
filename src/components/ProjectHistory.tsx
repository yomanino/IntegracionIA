import React from 'react';
import { History, Target, Users, Code, Layout, Video, Share2, Database } from 'lucide-react';

export default function ProjectHistory() {
  const axes = [
    {
      id: 'eje1',
      title: 'Eje 1: Definición y Alcance',
      icon: <Target className="text-emerald-500" />,
      content: 'Identificación de la problemática: Ineficiencia en la gestión de residuos sólidos aprovechables y baja cultura de reciclaje en los hogares urbanos. Se definió el objetivo general de implementar un programa social digital para fomentar la economía circular.'
    },
    {
      id: 'eje2',
      title: 'Eje 2: Estrategia y Datos',
      icon: <Database className="text-blue-500" />,
      content: 'Diseño de prompts y análisis visual. Generación de bases de datos maestras sobre instituciones que implementan IA en sostenibilidad. Definición de KPIs estratégicos como el Índice de Desvío de Vertederos (IDV) y la Densidad de Participación Comunal.'
    },
    {
      id: 'eje3',
      title: 'Eje 3: Prototipado',
      icon: <Layout className="text-purple-500" />,
      content: 'Desarrollo del prototipo funcional con gamificación (niveles de "Guardianes"), EcoMercado para intercambio de productos y Modo Mágico para accesibilidad. Implementación de la interfaz "Anti-Estrés" con bordes extra-redondeados.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
            <History size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Recorrido del Proyecto (Ejes 1-3)</h2>
        </div>

        <div className="grid gap-6">
          {axes.map((axis) => (
            <div key={axis.id} className="group p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all">
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  {axis.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">{axis.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{axis.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 p-4 bg-emerald-50 rounded-2xl text-emerald-700 text-xs font-bold uppercase">
            <Users size={16} />
            Yoman Enrique Salcedo Rojas
          </div>
          <div className="flex items-center gap-2 p-4 bg-emerald-50 rounded-2xl text-emerald-700 text-xs font-bold uppercase">
            <Code size={16} />
            Ingeniería de Sistemas
          </div>
          <a 
            href="https://youtu.be/oHI973OAsx0" 
            target="_blank" 
            className="flex items-center gap-2 p-4 bg-emerald-600 rounded-2xl text-white text-xs font-bold uppercase hover:bg-emerald-700 transition-colors"
          >
            <Video size={16} />
            Ver Video Pitch
          </a>
        </div>
      </div>
    </div>
  );
}
