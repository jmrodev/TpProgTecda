// mostrar numeros pares desde 100 a 500
//variable para asignar el minimo
let min = 450;
//variable para asignar el maximo
let max = 500;

//ciclo para recorrer los numeros desde el minimo hasta el maximo
for (let numero = min; numero <= max; numero++) {
    //condicion para verificar si el numero es par
  if (numero % 2 == 0) {
    //imprimir el numero par
    console.log(numero + " es par") ;
  }
}
