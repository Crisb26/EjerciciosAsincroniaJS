<<<<<<< HEAD
const promesaRapida = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa rápida (2 segundos) resuelta");
=======
//como lo solicito aqui se crearon 2 promesas con diferentes tiempos de resolucion, asi que usaremos promise_rice para saber cual se resuelve primero.

const promesaRapida = new Promise((resolve) => {
    setTimeout(() => {
        resolve("wow... Promesa rapida resuelta en 2 segundos");
>>>>>>> rama-cris
    }, 2000);
});

const promesaLenta = new Promise((resolve) => {
    setTimeout(() => {
<<<<<<< HEAD
        resolve("Promesa lenta (5 segundos) resuelta");
    }, 5000);
});

Promise.race([promesaRapida, promesaLenta])
    .then((resultado) => {
        console.log("Resultado de Promise.race:", resultado);
    })
    .catch((error) => {
        console.error("Error en Promise.race:", error);
    });
=======
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
>>>>>>> rama-cris
