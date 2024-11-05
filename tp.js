// Realiza un script que pida al usuario cadenas de texto (strings)
//  hasta que escriba “cancelar”.
//  Al salir con “cancelar” deben mostrarse 
// todas las cadenas concatenadas con un guión -.

const prompt= require("prompt-sync");


function getString() {
    let string= prompt("Enter a string: ");
         printData("ingrese un string ",string);
     return number;
   }

   getString()
// Function to print a message with the array
function printData(message, data) {console.log(message + data);}