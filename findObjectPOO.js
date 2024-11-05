class Persona {
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}

class GestorPersonas {
    constructor() {
        this.personas = [
            new Persona(1, "juan", 65),
            new Persona(2, "ana", 45),
            new Persona(3, "pepe", 25),
            new Persona(4, "luis", 15),
            new Persona(5, "maria", 35)
        ];
    }

    encontrarPersona(id) {
        return this.personas.find(persona => persona.id === id);
    }

    agregarPersona(id, nombre, edad) {
        const nuevaPersona = new Persona(id, nombre, edad);
        this.personas.push(nuevaPersona);
    }

    listarPersonas() {
        return this.personas;
    }
}

const prompt = require("prompt-sync")();
let salir;
const gestor = new GestorPersonas();

do {
    let id = Number(prompt("Ingrese el id de la persona que desea buscar: "));
    const personaEncontrada = gestor.encontrarPersona(id);
    
    personaEncontrada ? console.log(personaEncontrada) : console.log("No se encontró la persona con ese id");

    let respuesta = prompt("Desea buscar otra persona? (s/n): ");
    salir = respuesta === "s";
    if (!salir) {
        console.log("Gracias por utilizar nuestro servicio");
    }
} while (salir);