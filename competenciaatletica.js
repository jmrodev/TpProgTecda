let atletas = [
   
    { id: 20, nombre: "Natalia", tiempo: 4 },
    { id: 21, nombre: "Valeria", tiempo: 3 },
    { id: 22, nombre: "Fernanda", tiempo: 3 },
    { id: 23, nombre: "María José", tiempo: 3 },
    { id: 24, nombre: "Mariana", tiempo: 34 },
    { id: 25, nombre: "Andrea", tiempo: 35 },
    { id: 26, nombre: "Carolina", tiempo: 4 },
    { id: 27, nombre: "Isabel", tiempo: undefined },
    { id: 29, nombre: "Tatiana", tiempo: 2 },
];

function cleanArray(array) {
    let newArray = [];
    array.forEach(element => {
        if (!(element.tiempo === undefined || 
            element.tiempo === null || 
            element.tiempo === isNaN || 
            element.tiempo === !0)) {
            newArray.push(element);
        }
    });
    return newArray;
}

function getWinner(array) {
    let winner = array[0]
    let duplicate = []
    for (let index = 1; index < array.length; index++) {
        if (array[index].tiempo <= winner.tiempo) {
            if (array[index].tiempo === winner.tiempo) {
                duplicate.push(array[index])
            } else{
                winner = array[index]
                console.log(winner);
            }
        }
    }
    console.log(duplicate);
}

function compareArray(){



  return podium
  }


getWinner(atletas)
