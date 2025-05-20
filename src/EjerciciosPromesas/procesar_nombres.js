// Función delay que retorna una promesa que se resuelve tras 1 segundo
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Arreglo de nombres
const nombres = ["Ana", "Luis", "Carlos", "María", "Elena"];

// Función asíncrona que procesa los nombres uno por uno
async function procesarNombres(lista) {
    for (const nombre of lista) {
        await delay(1000); // Espera 1 segundo
        console.log(`Procesando: ${nombre}`);
    }
    console.log("Todos los nombres han sido procesados.");
}

// Ejecutar la función
procesarNombres(nombres);
