<<<<<<< HEAD
function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 1 completado");
            resolve();
=======
//con este codigo simularemos un flujo de pasos donde cada paso tarda 1 segundo en completarse... asi que usaremos 3 promesas y las encadenaremos con .then para que se ejecuten en orden.

function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Paso 1 completado");
>>>>>>> rama-cris
        }, 1000);
    });
}

function paso2() {
    return new Promise((resolve) => {
        setTimeout(() => {
<<<<<<< HEAD
            console.log("Paso 2 completado");
            resolve();
=======
            resolve("✅ Paso 2 completado");
>>>>>>> rama-cris
        }, 1000);
    });
}

function paso3() {
    return new Promise((resolve) => {
        setTimeout(() => {
<<<<<<< HEAD
            console.log("Paso 3 completado");
            resolve();
=======
            resolve("✅ Paso 3 completado");
>>>>>>> rama-cris
        }, 1000);
    });
}

<<<<<<< HEAD
// Encadenamiento de promesas
paso1()
    .then(() => paso2())
    .then(() => paso3())
    .then(() => {
        console.log("Todos los pasos completados");
=======
//aqui las encadenamos
paso1()
    .then((resultado1) => {
        console.log(resultado1); //aqui imprimiria el paso 1 completado
        return paso2(); //pasa a la siguiente promesa
    })
    .then((resultado2) => {
        console.log(resultado2); //aqui imprimiria la 2 promesa
        return paso3(); //pasa a la siguiente promesa
    })
    .then((resultado3) => {
        console.log(resultado3); //y aqui ya imprimiria la 3 promesa
        console.log("todos los pasos han sido completados en su respectivo orden");
    })
    .catch((error) => {
        console.error("❌ Error en el proceso:", error);
>>>>>>> rama-cris
    });