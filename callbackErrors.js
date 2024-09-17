function leerArchivo(callback) {
    // Simulamos una operación que puede fallar
    const error = Math.random() > 0.5 ? "Error: El archivo no se pudo leer" : null;
    const contenido = "Este es el contenido del archivo";  // Simulamos el contenido de un archivo

    if (error) {
        callback(error, null);  // Si ocurre un error, lo pasamos como primer argumento
    } else {
        callback(null, contenido);  // Si no hay error, pasamos 'null' en el error y el contenido en el segundo argumento
    }
}

// Ahora llamamos a la función 'leerArchivo'
leerArchivo(function(error, contenido) {
    if (error) {
        console.log("Ocurrió un error:", error);  // Aquí manejamos el error
    } else {
        console.log("Contenido del archivo:", contenido);  // Aquí manejamos el éxito
    }
});

