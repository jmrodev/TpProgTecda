import fs from 'fs';

fs.readFile('archivo.txt', 'utf8', function(error, data) {
    if (error) {
        console.log("Ocurrió un error:", error);  // Aquí manejamos el error
    } else {
        console.log("Contenido del archivo:", data);  // Aquí manejamos el éxito
    }
});
