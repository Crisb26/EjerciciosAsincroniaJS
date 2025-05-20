function promesaConRetraso(nombre, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${nombre} resuelta en ${tiempo / 1000} segundos`);
        }, tiempo);
    });
}

const promesa1 = promesaConRetraso("Promesa 1", 1000); // 1 segundo
const promesa2 = promesaConRetraso("Promesa 2", 2000); // 2 segundos
const promesa3 = promesaConRetraso("Promesa 3", 3000); // 3 segundos

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Todas las promesas resueltas:");
        console.log(resultados); // Muestra los resultados en un arreglo
    })
    .catch((error) => {
        console.error("Error en alguna de las promesas:", error);
    });
