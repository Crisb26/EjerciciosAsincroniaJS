//el ejericcio #2 es el manejo de errores con promesas
//se rechaza si el error es menor a 0.5 o se resuelve si es mayor o igual a 0.5
const miPromesa = new Promise((resolve, reject) => {
    const valor = Math.random(); //con este se genera un num aleatorio entre 0 y 1
    console.log(`Número generado: ${valor}`); //imprime el numero generado
    
    if (valor < 0.5) {
        reject("❌ Promesa rechazada: El número es menor a 0.5");
    } else {
        resolve("✅ Promesa resuelta: El número es mayor o igual a 0.5");
    }
});

//uso la promesa con .then y .catch para manejar el resultado y tambien el error
miPromesa
    .then((mensaje) => {
        console.log(mensaje); //si se puede resolver apareceria el mensaje de correcto
    })
    .catch((error) => {
        console.error(error); //y si no, el de error
    });