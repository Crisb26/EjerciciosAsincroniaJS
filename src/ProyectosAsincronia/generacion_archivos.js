const fs = require('fs/promises');
const path = require('path');

const NUM_ARCHIVOS = 1000;
const carpeta = path.join(__dirname, 'archivos_generados');

async function crearCarpeta() {
    try {
        await fs.mkdir(carpeta, { recursive: true });
        console.log('📂 Carpeta creada correctamente.');
    } catch (error) {
        console.error('❌ Error al crear la carpeta:', error);
    }
}

async function crearArchivo(nombre, contenido) {
    const rutaArchivo = path.join(carpeta, nombre);
    try {
        await fs.writeFile(rutaArchivo, contenido, "utf8");
        console.log(`✅ Archivo creado: ${nombre}`);
    } catch (error) {
        console.error(`❌ Error al crear ${nombre}:`, error);
    }
}

async function generarArchivosMasivos() {
    console.log("⏳ Iniciando generación de archivos...");
    await crearCarpeta();

    const promesas = [];

    for (let i = 1; i <= NUM_ARCHIVOS; i++) {
        const nombreArchivo = `archivo_${i}.txt`;
        const contenido = `Este es el archivo número ${i}`;
        promesas.push(crearArchivo(nombreArchivo, contenido));
    }

    try {
        await Promise.all(promesas);
        console.log("🎉 Todos los archivos han sido creados exitosamente.");
    } catch (error) {
        console.error('❌ Error en la generación masiva de archivos:', error);
    }
}

// Ejecutar la generación de archivos
generarArchivosMasivos();