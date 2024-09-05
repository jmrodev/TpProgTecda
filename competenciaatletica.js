// Objeto para almacenar el estado
let state = {
    atletas: [
      { id: 20, nombre: "Natalia", tiempo: 2 },
      { id: 21, nombre: "Valeria", tiempo: 3 },
      { id: 22, nombre: "Fernanda", tiempo: 3 },
      { id: 23, nombre: "María José", tiempo: 3 },
      { id: 24, nombre: "Mariana", tiempo: 1 },
      { id: 25, nombre: "Andrea", tiempo: 35 },
      { id: 26, nombre: "Carolina", tiempo: 4 },
      { id: 27, nombre: "Isabel", tiempo: undefined },
      { id: 29, nombre: "Tatiana", tiempo: 2 },
    ],
    podium: [],
  };
  
  // Función para actualizar el estado
  function setState(newState, callback) {
    state = { ...state, ...newState };
    if (callback) callback();
  }
  
  // Función para limpiar el array de atletas
  function cleanArray(array) {
    return array.filter(
      (element) =>
        element.tiempo !== undefined &&
        element.tiempo !== null &&
        !isNaN(element.tiempo) &&
        element.tiempo > 0
    );
  }
  
  // Función para crear el podio de tres posiciones
  function createPodium() {
    // Limpia y ordena los atletas por tiempo
    const cleanAtletas = cleanArray(state.atletas).sort(
      (a, b) => a.tiempo - b.tiempo
    );
  
    let podium = [];
    let position = 1;
    let lastTime = cleanAtletas[0]?.tiempo;
  
    for (let i = 0; i < cleanAtletas.length; i++) {
      const currentAthlete = cleanAtletas[i];
  
      // Si el tiempo es diferente al último tiempo registrado, aumenta la posición
      if (currentAthlete.tiempo !== lastTime && podium.length < 3) {
        position = podium.length + 1;
      }
  
      // Si el podio tiene menos de 3 posiciones, agrega al atleta
      if (podium.length < 3) {
        // Agrega a la posición actual si el podio ya tiene ese grupo
        if (!podium[position - 1]) {
          podium[position - 1] = [];
        }
        podium[position - 1].push(currentAthlete);
        lastTime = currentAthlete.tiempo;
      }
    }
  
    // Actualiza el estado con el podio y muestra el resultado
    setState({ podium }, () => {
      console.log("Podio actualizado:", state.podium);
    });
  }
  
  // Ejecutar la función para crear el podio
  createPodium();
  