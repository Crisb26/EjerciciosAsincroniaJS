const promesaConError = new Promise((resolve, reject) => {
    const numero = Math.random(); // Número entre 0 y 1
    if (numero >= 0.5) {
        resolve(`Promesa resuelta con número: ${numero}`);
    } else {
        reject(`Número muy bajo: ${numero}`);
    }
});

promesaConError
    .then((resultado) => {
        console.log("Éxito:", resultado);
    })
    .catch((error) => {
        console.error("Promesa rechazada:", error);
    });
