let atletas = [
    { "nombre": "Isabella", "tiempo": 30 },
    { "nombre": "Valentina", "tiempo": 49 },
    { "nombre": "Sofía", "tiempo": 60 },
    { "nombre": "Camila", "tiempo": 50 },
    { "nombre": "Natalia", "tiempo": 47 },
    { "nombre": "Emilia", "tiempo": 11 },
    { "nombre": "Gabriela", "tiempo": 22 },
    { "nombre": "Lucía", "tiempo": 53 },
    { "nombre": "Victoria", "tiempo": 10 },
    { "nombre": "María", "tiempo": 10 }
];

function getPerson(person, position = 1) {
    let persons = [];
    for (let index = 0; index < atletas.length; index++) {
        if (person.tiempo === atletas[index].tiempo) {
            persons.push(atletas[index]);
        }
    }
    return persons[position - 1]; // Devuelve el atleta en la posición indicada
}

function getMinorTime(array, prop) {
    let minor = [array[0], null]; // `minor[0]` es el menor tiempo, `minor[1]` es el segundo menor

    for (let index = 1; index < array.length; index++) {
        if (array[index][prop] < minor[0][prop]) {
            // Si encontramos un nuevo menor, movemos el antiguo menor a minor[1]
            minor[1] = minor[0];
            minor[0] = array[index];
        } else if (minor[1] === null || array[index][prop] < minor[1][prop]) {
            // Si no es menor que minor[0], pero es menor que minor[1] o minor[1] es null, lo asignamos a minor[1]
            minor[1] = array[index];
        }
    }
    return minor;
}

function getWinner() {
    let [firstPlace, secondPlace] = getMinorTime(atletas, 'tiempo');

    console.log("Primer lugar:", firstPlace);
    console.log("Segundo lugar:", secondPlace);
}

getWinner();
