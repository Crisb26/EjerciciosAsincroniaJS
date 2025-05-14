//como lo solicito aqui se crearon 2 promesas con diferentes tiempos de resolucion, asi que usaremos promise_rice para saber cual se resuelve primero.

const promesaRapida = new Promise((resolve) => {
    setTimeout(() => {
        resolve("wow... Promesa rapida resuelta en 2 segundos");
    }, 2000);
});

const promesaLenta = new Promise((resolve) => {
    setTimeout(() => {
        resolve("que mal... Promesa lenta resuelta en 5 segundos");
    }, 5000);
});

//aqui vamos a verificar cual promesa se soluciona primero
Promise.race([promesaRapida, promesaLenta])
    .then((resultado) => {
        console.log("✅ La primera promesa en resolverse fue:", resultado);
    })
    .catch((error) => {
        console.error("❌ Error en la carrera de promesas:", error);
    });