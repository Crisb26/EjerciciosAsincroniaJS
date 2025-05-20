import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: 'TU_API_KEY', // 🔒 Guarda esto en un .env en producción
});

// 👉 Divide el texto largo si es necesario
function dividirTexto(texto, maxPalabras = 300) {
  const palabras = texto.split(' ');
  const partes = [];

  for (let i = 0; i < palabras.length; i += maxPalabras) {
    partes.push(palabras.slice(i, i + maxPalabras).join(' '));
  }

  return partes;
}

// 👉 Función que resume un fragmento usando OpenAI
async function resumirFragmento(fragmento) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "Eres un asistente que resume textos de forma concisa." },
      { role: "user", content: `Resume el siguiente contenido:\n\n${fragmento}` }
    ],
    temperature: 0.5,
    max_tokens: 200
  });

  return response.choices[0].message.content.trim();
}

// ✅ Función principal: genera resumen eficiente
async function generarResumen(texto) {
  const partes = dividirTexto(texto);
  const tareas = partes.map(resumirFragmento);

  // Procesa todos los fragmentos en paralelo
  const resúmenes = await Promise.all(tareas);
  return resúmenes.join('\n\n');
}

// 🧪 Ejemplo de uso
const textoLargo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae... (aquí tu texto)`;

// Ejecutar
generarResumen(textoLargo)
  .then(resumenFinal => {
    console.log('🧠 Resumen generado:\n');
    console.log(resumenFinal);
  })
  .catch(err => {
    console.error('❌ Error al generar el resumen:', err.message);
  });
