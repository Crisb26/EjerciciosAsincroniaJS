async function saludar() {
    return "Hola, Mundo";
}

saludar().then((mensaje) => {
    console.log("Mensaje con .then():", mensaje);
});

async function ejecutarSaludo() {
    const mensaje = await saludar();
    console.log("Mensaje con await:", mensaje);
}

ejecutarSaludo();
