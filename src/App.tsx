import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Recycle, 
  Cpu, 
  History, 
  FileText, 
  MessageSquare, 
  Menu, 
  X,
  ChevronRight,
  Leaf
} from 'lucide-react';
import AIWasteScanner from './components/AIWasteScanner';
import ProjectHistory from './components/ProjectHistory';
import TechnicalAnalysis from './components/TechnicalAnalysis';
import Reflection from './components/Reflection';
import { cn } from './lib/utils';

type Section = 'scanner' | 'history' | 'analysis' | 'reflection';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('scanner');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'scanner', label: 'Escáner IA', icon: <Cpu size={20} /> },
    { id: 'history', label: 'Ejes 1-3', icon: <History size={20} /> },
    { id: 'analysis', label: 'Análisis Técnico', icon: <FileText size={20} /> },
    { id: 'reflection', label: 'Reflexión', icon: <MessageSquare size={20} /> },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'scanner': return <AIWasteScanner />;
      case 'history': return <ProjectHistory />;
      case 'analysis': return <TechnicalAnalysis />;
      case 'reflection': return <Reflection />;
      default: return <AIWasteScanner />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sidebar Navigation */}
      <nav className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-emerald-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-3 mb-12 px-2">
            <div className="p-2 bg-emerald-600 rounded-xl text-white">
              <Leaf size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-800">EcoTrama</h1>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">EcoRed Comunal</p>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id as Section);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
                  activeSection === item.id 
                    ? "bg-emerald-50 text-emerald-700 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "transition-colors",
                    activeSection === item.id ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                {activeSection === item.id && (
                  <motion.div layoutId="active-pill">
                    <ChevronRight size={16} className="text-emerald-400" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-auto p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Proyecto</p>
            <p className="text-xs font-bold text-slate-700">Integración de IA en Soluciones Informáticas</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-600 uppercase">Sistema Activo</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b border-emerald-50 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf size={20} className="text-emerald-600" />
          <span className="font-black text-slate-800">EcoTrama</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen p-6 lg:p-12 pt-24 lg:pt-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em]">Actividad Evaluativa Eje 4</h2>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
                Integración de IA en la <br />
                <span className="text-emerald-600">Solución Informática</span>
              </h1>
            </motion.div>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>

          <footer className="mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <p>© 2026 EcoTrama App - Informe Técnico B-IT Transformador</p>
            <div className="flex gap-6">
              <span>Pereira, Colombia</span>
              <span>Areandina</span>
            </div>
          </footer>
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
