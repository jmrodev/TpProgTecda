function print(msg) {
    console.log(msg);
    const stdin = process.openStdin();

    stdin.addListener("data", (data) => {
        const salida = data.toString().trim();
        console.log(salida);  // Imprime la entrada recibida
        process.exit(); // Termina el proceso después de recibir la entrada
    });
}

// Llama a la función para comenzar a escuchar
print("Escriba algo:");

