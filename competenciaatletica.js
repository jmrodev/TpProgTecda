let atletas = [
    [1, "Isabella", 15],
    [2, "Sofia", 12],
    [3, "Valentina", 16],
    [4, "Renata", 14],
    [5, "Luciana", 5],
    [6, "Emilia", 6],
    [7, "Mia", 17],
    [8, "Victoria", 18],
    [9, "Maria", 11],
    [10, "Paula", 20],
    [11, "Camila", 21],
    [12, "Sara", 22],
    [13, "Gabriela", 23],
    [14, "Daniela", 4],
    [15, "Alejandra", 2],
    [16, "Laura", 26],
    [17, "Juliana", 2],
    [18, "Antonella", 28],
    [19, "Manuela", 2],
    [20, "Natalia", 30],
    [21, "Valeria", 31],
    [22, "Fernanda", 32],
    [23, "María José", 3],
    [24, "Mariana", 34],
    [25, "Andrea", 35],
    [26, "Carolina", 24],
    [27, "Isabel", undefined],
    [29, "Tatiana", 2],
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


function getWinner(array) {
    let winner = array[0]

    for (let index = 1; index < array.length; index++) {

        array[index].tiempo <= winner.tiempo ? winner.unshift(array[index]) : null;
        console.log(winner);
    }
}


getWinner(cleanArray(atletas))