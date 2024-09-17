function saludar(nombre, callback) {
    console.log("Hola " + nombre);
    callback(nombre);  // Pasamos el nombre al callback
}

function despedirse(nombre) {
    console.log("Adiós " + nombre);
}

saludar("Juan", despedirse);  // Se saluda y luego se despide usando el mismo nombre
