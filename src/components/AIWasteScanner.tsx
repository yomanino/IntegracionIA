import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader2, CheckCircle2, AlertCircle, Recycle } from 'lucide-react';
import { analyzeWasteImage } from '../services/geminiService';
import { motion, AnimatePresence } from 'motion/react';

interface AnalysisResult {
  item: string;
  category: string;
  recyclable: boolean;
  instructions: string;
  impact: string;
  points: number;
}

export default function AIWasteScanner() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const analysis = await analyzeWasteImage(image);
      setResult(analysis);
    } catch (err) {
      console.error(err);
      setError("Error al analizar la imagen. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
            <Camera size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Escáner de Residuos IA</h2>
            <p className="text-slate-500">Sube una foto para identificar y clasificar tus residuos automáticamente.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-[2rem] border-4 border-dashed border-emerald-50 bg-emerald-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-colors overflow-hidden relative group"
            >
              {image ? (
                <>
                  <img src={image} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <p className="text-white font-medium">Cambiar imagen</p>
                  </div>
                </>
              ) : (
                <div className="text-center p-6">
                  <Upload className="mx-auto mb-4 text-emerald-400" size={48} />
                  <p className="text-emerald-600 font-medium">Haz clic para subir o arrastra una imagen</p>
                  <p className="text-emerald-400 text-sm mt-2">Formatos: JPG, PNG</p>
                </div>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*"
            />
            
            <button
              onClick={handleScan}
              disabled={!image || loading}
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Analizando con IA...
                </>
              ) : (
                <>
                  <Recycle size={20} />
                  Clasificar Residuo
                </>
              )}
            </button>
          </div>

          <div className="min-h-[300px] flex flex-col">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin" />
                  <p className="text-slate-500 italic">Procesando imagen mediante visión artificial...</p>
                </motion.div>
              ) : result ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 space-y-6"
                >
                  <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                          {result.category}
                        </span>
                        <h3 className="text-3xl font-black text-slate-800 mt-2">{result.item}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 uppercase">Puntos</p>
                        <p className="text-3xl font-black text-emerald-600">+{result.points}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="mt-1">
                          {result.recyclable ? (
                            <CheckCircle2 className="text-emerald-500" size={20} />
                          ) : (
                            <AlertCircle className="text-amber-500" size={20} />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-slate-700">
                            {result.recyclable ? 'Es Reciclable' : 'No es Reciclable'}
                          </p>
                          <p className="text-slate-600 text-sm leading-relaxed">{result.instructions}</p>
                        </div>
                      </div>

                      <div className="p-4 bg-white/60 rounded-2xl border border-emerald-100/50">
                        <p className="text-xs font-bold text-emerald-700 uppercase mb-1">Impacto Ambiental</p>
                        <p className="text-slate-700 text-sm italic">"{result.impact}"</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Validación</p>
                      <p className="text-sm font-bold text-slate-700">IA Verificada</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Estado</p>
                      <p className="text-sm font-bold text-slate-700">Listo para Recolección</p>
                    </div>
                  </div>
                </motion.div>
              ) : error ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-red-50 rounded-[2rem] border border-red-100"
                >
                  <AlertCircle className="text-red-400 mb-4" size={48} />
                  <p className="text-red-800 font-bold">{error}</p>
                </motion.div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-100 rounded-[2rem]">
                  <Recycle className="text-slate-200 mb-4" size={64} />
                  <p className="text-slate-400 font-medium">Los resultados del análisis aparecerán aquí después de escanear.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
