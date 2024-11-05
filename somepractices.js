'use strict';
const array=[]
array.unshift([20,21],[10,12],[31,30,[40,41]])
console.log(array)
let flattenArray = array.flat(1);
console.log(flattenArray);
let iterator = array.entries();
for (let entry of iterator) {console.log(entry);}

function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

let joinedString = array.reduce(joinStrings);
console.log(joinedString);