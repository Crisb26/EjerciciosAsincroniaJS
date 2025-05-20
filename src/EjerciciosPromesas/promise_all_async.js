
//aqui nos imaginamos 3 busquedas con tiempos de respuesta aleatorios y utilizaremos promise.all para esperar todas las respuestas en ese caso antes de continuar

function busquedaSimulada(nombre, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resultado de ${nombre} despues de ${tiempo}ms`);
        }, tiempo);
    });
}

//con esta funcion esperaria
async function realizarBusquedas() {
    console.log("iniciando busquedas...");

    const promesas = [
        busquedaSimulada("Consulta 1", Math.floor(Math.random() * 3000) + 1000),
        busquedaSimulada("Consulta 2", Math.floor(Math.random() * 3000) + 1000),
        busquedaSimulada("Consulta 3", Math.floor(Math.random() * 3000) + 1000),
    ];

    const resultados = await Promise.all(promesas); //esperando a que todas las promesas se resuelvan

    console.log("Todas las búsquedas completadas:");
    resultados.forEach((resultado) => console.log(resultado));
}

//por ultimo llamamos a la funcion asincrona para que se ejecute
realizarBusquedas();

