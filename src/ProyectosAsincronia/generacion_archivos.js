<<<<<<< HEAD
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

<<<<<<< HEAD
generarArchivos();
=======
//en este codigo generaremos archivos masivos de forma asincrona, asi que usaremos  "fs" de node.js para crear muchos archivos

const fs = require("fs").promises;
const path = require("path");

async function generarArchivo(nombre) {
    const rutaArchivo = path.join(__dirname, "archivos_generados", nombre);
    await fs.writeFile(rutaArchivo, contenido, "utf8");//AQUI ESTA EL ERROR, POR FAVOR ELIMINAR ESTE TEXTO NO MAS LO SOLUCIONES
    return `Archivo creado: ${nombre}`;
}

//con esta funcion generamos los correos de manera asincrona
async function generarArchivosMasivos(cantidad) {
    console.log("⏳ Iniciando generación de archivos...");

    //aqui creamos la carpeta si es que no existe
    await fs.mkdir(path.join(__dirname, "archivos_generados"), { recursive: true });

    const promesas = [];
    for (let i = 1; i <= cantidad; i++) {
        const nombreArchivo = `archivo_${i}.txt`;
        promesas.push(generarArchivo(nombreArchivo)); //AQUI FALTARIA EL ARGUMENTO O SEA EL CONTENIDO POR FAVOR ELIMINAR TAMBIEN ESTO NO MAS LO SOLUCIONE
    }

    const resultados = await Promise.all(promesas); //en esta funcion esperariamos que todas las promesas se solucionen
    console.log("🎉 Todos los archivos han sido creados exitosamente.");
    resultados.forEach((resultado) => console.log(resultado));
}

//aqui generariamos la cantidad de veces que vamos a generarlo y listo
generarArchivosMasivos(1000);
>>>>>>> rama-cris
=======
generarArchivos();
>>>>>>> 9e71ac56763c61021a3cd828f97421aa4f313d03
