let atletas = [
    { id: 1, nombre: "Isabella", tiempo: 15 },
    { id: 2, nombre: "Sofia", tiempo: 12 },
    { id: 3, nombre: "Valentina", tiempo: 16 },
    { id: 4, nombre: "Renata", tiempo: 14 },
    { id: 5, nombre: "Luciana", tiempo: 5 },
    { id: 6, nombre: "Emilia", tiempo: 6 },
    { id: 7, nombre: "Mia", tiempo: 17 },
    { id: 8, nombre: "Victoria", tiempo: 18 },
    { id: 9, nombre: "Maria", tiempo: 11 },
    { id: 10, nombre: "Paula", tiempo: 20 },
    { id: 11, nombre: "Camila", tiempo: 21 },
    { id: 12, nombre: "Sara", tiempo: 22 },
    { id: 13, nombre: "Gabriela", tiempo: 23 },
    { id: 14, nombre: "Daniela", tiempo: 4 },
    { id: 15, nombre: "Alejandra", tiempo: 2 },
    { id: 16, nombre: "Laura", tiempo: 26 },
    { id: 17, nombre: "Juliana", tiempo: 2 },
    { id: 18, nombre: "Antonella", tiempo: 28 },
    { id: 19, nombre: "Manuela", tiempo: 2 },
    { id: 20, nombre: "Natalia", tiempo: 30 },
    { id: 21, nombre: "Valeria", tiempo: 31 },
    { id: 22, nombre: "Fernanda", tiempo: 32 },
    { id: 23, nombre: "María José", tiempo: 3 },
    { id: 24, nombre: "Mariana", tiempo: 34 },
    { id: 25, nombre: "Andrea", tiempo: 35 },
    { id: 26, nombre: "Carolina", tiempo: 24 },
    { id: 27, nombre: "Isabel", tiempo: undefined },
    { id: 29, nombre: "Tatiana", tiempo: 2 },
];

function cleanArray(array) {
    let newArray = [];
    array.forEach(element => {
        if (!(element.tiempo === undefined || 
            element.tiempo === null || 
            element.tiempo === NaN || 
            element.tiempo === !0)) {
            newArray.push(element);
        }
    });
    return newArray;
}

console.log(cleanArray(atletas));

function getWinner(array) {
    let winner = array[0]
    let duplicate = []

    for (let index = 1; index < array.length; index++) {
        if (array[index].tiempo <= winner.tiempo) {
            if (array[index].tiempo === winner.tiempo) {
                duplicate.push(array[index])
            } else if (!(array[index].tiempo === winner.tiempo)) {
                winner = array[index]
                console.log(winner);
            }
        }

    }
    console.log(duplicate);

}
getWinner(atletas)