function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 1 completo");
            resolve();
        }, 1000);
    });
}

function paso2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 2 completo");
            resolve();
        }, 1000);
    });
}

function paso3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 3 completo");
            resolve();
        }, 1000);
    });
}

// Usando promesas encadenadas
paso1()
    .then(paso2)
    .then(paso3)
    .then(() => {
        console.log("Todos los pasos completos");
    });
