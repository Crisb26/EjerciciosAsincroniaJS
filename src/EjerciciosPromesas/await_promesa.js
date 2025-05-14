function esperarTresSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa resuelta después de 3 segundos");
        }, 3000);
    });
}

async function ejecutarProceso() {
    console.log("Iniciando proceso...");
    await esperarTresSegundos();
    console.log("Proceso terminado");
}

// Ejecutar la función
ejecutarProceso();
