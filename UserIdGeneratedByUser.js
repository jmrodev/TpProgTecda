import promptSync from 'prompt-sync'
const prompt = promptSync();


function userIdGeneratedByUser() {
  let countCaract = prompt('Ingresa la cantidad de caracteres : ');
  let countId = prompt('Ingresa la cantidad de Ids : ')
  console.log(countCaract,countId)


  let longitud = 8;
  let rango = [12,56];
   let resultado = '';
    const min = rango[0];
    const max = rango[1];
    for (let i = 0; i < longitud; i++) {
        const codigoAscii = Math.floor(Math.random() * (max - min + 1)) + min;
        resultado += String.fromCharCode(codigoAscii);
       console.log(resultado,codigoAscii) 
    }
 
 }

userIdGeneratedByUser()
