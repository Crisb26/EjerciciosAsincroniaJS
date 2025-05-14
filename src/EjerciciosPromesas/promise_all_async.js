function busquedaSimulada(nombre) {
    const retraso = Math.floor(Math.random() * 2000) + 1000; // Entre 1000 y 3000 ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resultado de ${nombre} después de ${retraso} ms`);
        }, retraso);
    });
}

async function realizarBusquedas() {
    console.log("Iniciando búsquedas...");

    const promesas = [
        busquedaSimulada("búsqueda 1"),
        busquedaSimulada("búsqueda 2"),
        busquedaSimulada("búsqueda 3")
    ];

    const resultados = await Promise.all(promesas);

    console.log("Todas las búsquedas completadas:");
    resultados.forEach((resultado, i) => {
        console.log(`- ${resultado}`);
    });
}

// Ejecutar la función
realizarBusquedas();
