const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa cumplida"); //se resuelve la promesa con el mensaje de promesa cumplida
    }, 2000);
});

//se usa la promesa con .then para que me de el resultado y me lo muestre en consola
miPromesa.then((mensaje) => {
    console.log(mensaje); //debe imprimir promesa cumplida
}).catch((error) => {
    console.error(error); //este no se usaria porque se supone que la promesa se cumplio, si aparece esta es porque tengo error en el codigo
});