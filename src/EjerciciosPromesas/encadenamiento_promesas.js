//con este codigo simularemos un flujo de pasos donde cada paso tarda 1 segundo en completarse... asi que usaremos 3 promesas y las encadenaremos con .then para que se ejecuten en orden.

function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Paso 1 completado");
        }, 1000);
    });
}

function paso2() {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve("✅ Paso 2 completado");
        }, 1000);
    });
}

function paso3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Paso 3 completado");
        }, 1000);
    });
}

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
    });