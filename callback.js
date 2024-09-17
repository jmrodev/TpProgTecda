import PromptSync from 'prompt-sync';

let prompt = PromptSync();

// Función que saluda al usuario y luego ejecuta el callback para despedirse
function saludarYDespedirse(callback) {
    let nombre = prompt("Por favor, ingresa tu nombre: "); // Solicita el nombre del usuario
    console.log("Hola " + nombre);  // Saluda al usuario
    callback();  // Ejecuta el callback para despedirse
}

// Función que se usa como callback para despedirse
function despedirse() {
    console.log("Adiós, que tengas un buen día!");
}

// Llamada a la función saludarYDespedirse pasando despedirse como callback
saludarYDespedirse(despedirse);
