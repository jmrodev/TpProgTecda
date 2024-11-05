let prompt = require("prompt-sync")();

function sumar(num1, num2, num3) {
    console.log(num1 + num2 + num3)
  return num1 + num2 + num3;
}

function multiplicar(num1, num2, num3) {
    console.log(num1* num2* num3)
  return num1 * num2 * num3;
}

function calcular(num1, num2, num3) {
  let multiplo = multiplicar(num1, num2, num3);
  let sumando = sumar(num1, num2, num3);
  if (multiplo < 400 && sumando > 30) {
    console.log("el multiplo y la suma no superan los valores");
  } else {
    console.log("el multiplo y la suma superan los valores");
  }
}

function ingresarDato() {
  let num1 =  parseInt(prompt("ingrese el primer numero: ")) ;
  let num2 = parseInt(prompt("ingrese el segundo numero: "));
  let num3 = parseInt(prompt("ingrese el tercero numero: "));
  console.log(typeof num1)
  calcular(num1, num2, num3);
}

ingresarDato();
