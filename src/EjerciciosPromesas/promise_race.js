const promesaRapida = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa rápida (2 segundos) resuelta");
    }, 2000);
});

const promesaLenta = new Promise((resolve) => {
    setTimeout(() => {
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
