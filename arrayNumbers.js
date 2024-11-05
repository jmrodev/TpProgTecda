"use strict";

const prompt = require("prompt-sync")();
let array = [];

function getNumber() {
 let number;
  do {
     number= parseInt(prompt("Enter a number: "));
    if (isNaN(number)) {
      printData("ingrese un numero valido ","");
    }
  } while (isNaN(number));

  return number;
}

function printData(message, data) {
  console.log(message + data);
}

function addNumberToArray(number) {
  array.push(number);
  return array;
}

function pushNumberArray() {
  let num;

  do {
    num = getNumber();
    if (num !== 0) {
      array = addNumberToArray(num);
    }
  } while (num !== 0);

  printData("This array have :  ", array);
}
pushNumberArray();
