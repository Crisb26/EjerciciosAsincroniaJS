//funcion asincrona que espera una promesa para que se desarrolle en 3 segundos

function esperarTresSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("SUPER...  Promesa resuelta despues de 3 segundos");
        }, 3000);
    });
}

//en este paso se definio una funcion asincrona que usa await para que espere a la promesa
async function ejecutarProceso() {
    console.log("iniciando proceso...");
    
    const resultado = await esperarTresSegundos(); 
    
    console.log(resultado); //aqui nos daria el mensaje de la promesa
    console.log("Proceso terminado.");
}

//por ultimo llamamos a la funcion asincrona
ejecutarProceso();