"use strict";

const prompt = require("prompt-sync");

let array = [];

// Function to print a message with the array
const imprimir = (text, a) => console.log(`${text}:`, a);

// Function to load a number with validation
const cargarNumero = (text) => {
  let input;
  let num;
  do {
    input = prompt(text + ": ");
    num = parseInt(input);
    if (isNaN(num)) {
      console.log("Por favor, ingrese un número válido.");
    }
  } while (isNaN(num));
  return num;
};

// Function to input numbers until 0 is entered
function ingreseNumero() {
  let numero;
  do {
    numero = cargarNumero("Ingrese un numero entero (0 para finalizar)");
    if (numero !== 0) {
      array.push(numero);
    }
  } while (numero !== 0);
  return array;
}

// Function to handle the entire process
const arrayDeEnteros = () => {
  ingreseNumero();
  imprimir("La lista de numeros ingresados es", array);
};

// Run the function to start the process
arrayDeEnteros();
