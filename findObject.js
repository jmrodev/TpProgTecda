import PromptSync from "prompt-sync"

const prompt = PromptSync()

let personas = [
    {
        id: 1,
        nombre: "juan",
        edad: 65
    }, {
        id: 2,
        nombre: "ana",
        edad: 45
    }, {
        id: 3,
        nombre: "pepe",
        edad: 25
    }, {
        id: 4,
        nombre: "luis",
        edad: 15
    }, {
        id: 5,
        nombre: "maria",
        edad: 35

    }
]
let salir;
do {
    function findObject(personas, id) {
        return personas.find(persona => persona.id === id)
    }
    let id = Number(prompt("Ingrese el id de la persona que desea buscar: "))

    findObject(personas, id) ? console.log(findObject(personas, id)) : console.log("No se encontro la persona con ese id")

    let respuesta = prompt("Desea buscar otra persona? (s/n): ")
    salir = respuesta === "s";
    if (!salir) {
        console.log("Gracias por utilizar nuestro servicio")
    }
} while (salir);
