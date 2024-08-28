let atletas = [
    {
        "nombre": "Isabella",
        "tiempo": 30
    },
    {
        "nombre": "Valentina",
        "tiempo": 49
    },
    {
        "nombre": "Sofía",
        "tiempo": 60
    },
    {
        "nombre": "Camila",
        "tiempo": 50
    },
    {
        "nombre": "Natalia",
        "tiempo": 47
    },
    {
        "nombre": "Emilia",
        "tiempo": 11
    },
    {
        "nombre": "Gabriela",
        "tiempo": 22
    },
    {
        "nombre": "Lucía",
        "tiempo": 53
    },
    {
        "nombre": "Victoria",
        "tiempo": 48
    },
    {
        "nombre": "María",
        "tiempo": 10
    }
];






function getPerson(person) {
   let winers = []
    for (let index = 0; index < atletas.length; index++) {
        if (person.tiempo === atletas[index].tiempo) {
            winers.push(atletas[index])
            return winers
        }
    }
}

function getMinorTime(array, prop) {
    let minor = array[0]
    for (let index = 1; index < array.length; index++) {
        if (minor.tiempo > array[index].tiempo) {
            minor = array[index]
            return minor
        }
    }
}

function getWinner() {
    let minorTime = getMinorTime(atletas, 'tiempo')
   let win =  getPerson(minorTime)
   console.log(win);
   
}

getWinner()