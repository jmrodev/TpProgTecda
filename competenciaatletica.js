let atletas = [
    {
        "nombre": "Isabella",
        "tiempo": 54
    },
    {
        "nombre": "Valentina",
        "tiempo": 49
    },
    {
        "nombre": "Sofía",
        "tiempo": 52
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
        "tiempo": 55
    },
    {
        "nombre": "Gabriela",
        "tiempo": 51
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
        "tiempo": 46
    }
];


function getWinner() {
    let winner = atletas[0]
    let second = atletas[0]
    atletas.forEach(atleta => {
        if (atleta.tiempo > winner.tiempo) {
             let primero = winner
             console.log(winner);
             if (primero > second.tiempo) {
                console.log(second);
             }
         }
        })
}

getWinner()