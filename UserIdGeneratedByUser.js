import promptSync from 'prompt-sync'
const prompt = promptSync();

function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

function generateCaracter(char, length) {
  return char[randomNumber(length)];
}

function generateId(countId, countChar, char, length) {
  let id = "";
  for (let i = 0; i < countId; i++) {
    id += ' HASH : ' + generateString(countChar, char, length) + '  \n ';
  }
  return id;
}

function generateString(countChar, char, length) {
  let string = ""
  for (let i = 0; i < countChar; i++) {
    string += generateCaracter(char, length);
  }
  return string;
}

function print(data) {
  return console.log(data + '\n');
}
function selectCharacterSet() {
  const generalChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  const numberChar = "0987654321";
  const letterChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const signChar = "\|@#~½¬{[]}\][{} ̣·•ª!·$%&/()=?¿*^Ç¨_:;><,.-ḉ+`¡'º";

  const selectChar = prompt('Ingresa el tipo de caracteres que deseas usar : \n 1 - Números \n 2 - Letras \n 3 - Mayúsculas \n 4 - Minúsculas \n 5 - Signos \n 6 - General \n : ');

  let charSet = "";
  switch (selectChar) {
    case '1':
      charSet = numberChar;
      break;
    case '2':
      charSet = letterChar;
      break;
    case '3':
      charSet = upperChar;
      break;
    case '4':
      charSet = lowerChar;
      break;
    case '5':
      charSet = signChar;
      break;
    case '6':
      charSet = generalChar;
      break;
    default:
      charSet = generalChar;
      break;
  }

  return charSet;
}

function userIdGeneratedByUser() {

  let char = selectCharacterSet();
  let length = char.length;
  let countId;
  let countChar;

  countChar = prompt('Ingresa la cantidad de caracteres : ');

  (typeof(countChar) !== 'number')? console.log("La cantidad ingresada es " + countChar): console.log("La cantidad de caracteres debe ser un numero entero");
  
  countId = prompt('Ingresa la cantidad de Ids : ');
  
  (typeof(countId) !== 'number')? console.log("La cantidad ingresada es " + countId): console.log("La cantidad de Ids debe ser un numero entero");

  print(generateId(countId, countChar, char, length));
}

userIdGeneratedByUser();