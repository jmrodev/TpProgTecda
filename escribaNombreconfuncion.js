//pedir nombre y apellido y mostrar en consola

//nodejs aprendiendo

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cual es tu nombre? ', (nombre) => {
    rl.question('Cual es tu apellido? ', (apellido) => {
        console.log(`Hola ${nombre} ${apellido}`);
        rl.close();
    });
}
);

rl.on('close', () => {
    console.log('Adios');
    process.exit(0);
}
);



