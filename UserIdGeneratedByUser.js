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

function print(data){
  return console.log(data + '\n');
}

function userIdGeneratedByUser() {
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  // let char = "0987654321"
  let length = char.length;
  let countChar = prompt('Ingresa la cantidad de caracteres : ');
  let countId = prompt('Ingresa la cantidad de Ids : ')
  print(generateId(countId, countChar, char, length));
}

userIdGeneratedByUser();