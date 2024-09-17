function ejecutarAsync(callback) {
    console.log("Inicio");
    setTimeout(callback, 2000);  // El callback se ejecuta después de 2 segundos
    console.log("Fin");
}

ejecutarAsync(function() {
    console.log("Este es un callback asíncrono");
});
