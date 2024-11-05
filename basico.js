//definir la funcion
function saludar(){
    console.log("Hola Mundo funcion");
}

//llamar la funcion
saludar();

//*************************************************************************//
//declarar variables
var entrada= "Hola Mundo var";
let entrada2= "Hola Mundo let";
const entrada3= "Hola Mundo const";
//definir la funcion

function saludar2(){
    console.log(entrada);
    console.log(entrada2);
    console.log(entrada3);
}

//llamar la funcion
saludar2();

//*************************************************************************//

//funciones con parametros

function saludar3(nombre){
    console.log("Hola "+nombre);
}

saludar3("Mundo");

//*************************************************************************//

//funciones con retorno

function saludar4(nombre){
    return "Hola "+nombre;
}

console.log(saludar4("Mundo"));

//*************************************************************************//

// funcion sumar

function sumar(a,b){
    return a+b;
}

console.log(sumar(5,3));
