const fs = require('fs/promises');
const path = require('path');

// Número de archivos a generar
const NUM_ARCHIVOS = 1000;

// Carpeta donde se guardarán los archivos
const carpeta = path.join(__dirname, 'archivos');

async function crearCarpeta() {
  try {
    await fs.mkdir(carpeta, { recursive: true });
    console.log('Carpeta creada.');
  } catch (error) {
    console.error('Error al crear carpeta:', error);
  }
}

async function crearArchivo(index) {
  const contenido = `Este es el archivo número ${index}`;
  const nombreArchivo = path.join(carpeta, `archivo_${index}.txt`);
  return fs.writeFile(nombreArchivo, contenido);
}

async function generarArchivos() {
  await crearCarpeta();

  const tareas = [];

  for (let i = 1; i <= NUM_ARCHIVOS; i++) {
    tareas.push(crearArchivo(i));
  }

  try {
    await Promise.all(tareas);
    console.log(`✅ ${NUM_ARCHIVOS} archivos generados exitosamente.`);
  } catch (error) {
    console.error('Error al generar archivos:', error);
  }
}

generarArchivos();
