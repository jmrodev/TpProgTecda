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
    id += ' HASH : ' + generateString(countChar, char, length) + '----- \n \n \n';
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

function userIdGeneratedByUser() {
  let generalChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let numberChar = "0987654321"
  let letterChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerChar = "abcdefghijklmnopqrstuvwxyz"
  let signChar = "\|@#~½¬{[]}\][{} ̣·•ª!·$%&/()=?¿*^Ç¨_:;><,.-ḉ+`¡'º"

  let selectChar = prompt('Ingresa el tipo de caracteres que deseas usar : \n 1 - Números \n 2 - Letras \n 3 - Mayúsculas \n 4 - Minúsculas \n 5 - Signos \n 6 - General \n : ');

  let char = "";

  switch (selectChar) {
    case '1':
      char = numberChar;
      break;
    case '2':
      char = letterChar;
      break;
    case '3':
      char = upperChar;
      break;
    case '4':
      char = lowerChar;
      break;
    case '5':
      char = signChar;
      break;
    case '6':
      char = generalChar;
      break;
    default:
      char = generalChar;
      break;
  }
  let length = char.length;
  
  let countChar = prompt('Ingresa la cantidad de caracteres : ');
  let countId = prompt('Ingresa la cantidad de Ids : ')

  print(generateId(countId, countChar, char, length));
}

userIdGeneratedByUser();