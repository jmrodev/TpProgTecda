let vueltas = 0;

for (let numero = 0; numero < 500; numero++) {
  let esMultiploDe9 = numero % 9 === 0;
  let esMultiploDe4 = numero % 4 === 0;

  if (esMultiploDe9 && esMultiploDe4) {
    console.log(`El número ${numero} es múltiplo de 4 y 9`);

    vueltas++;

    if (vueltas % 5 === 0 && vueltas !== 0) {
      console.log("-------------------");
      vueltas = 0;
    }
  }
}
