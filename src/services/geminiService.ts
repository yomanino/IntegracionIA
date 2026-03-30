import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function analyzeWasteImage(base64Image: string) {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    Actúa como un experto en gestión de residuos y sostenibilidad. 
    Analiza esta imagen de un residuo y proporciona la siguiente información en formato JSON:
    {
      "item": "Nombre del objeto",
      "category": "Orgánico/Plástico/Papel/Vidrio/Metal/No Reciclable",
      "recyclable": true/false,
      "instructions": "Breve instrucción de cómo disponer de él",
      "impact": "Impacto ambiental positivo de reciclarlo",
      "points": 50
    }
  `;

  const result = await ai.models.generateContent({
    model,
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Image.split(",")[1]
            }
          }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(result.text || "{}");
}
