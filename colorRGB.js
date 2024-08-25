function colorGenerator() {
    return Math.floor(Math.random() * 256);
}

function colorToHexa() {
    let color = colorGenerator();
    let hexa = color.toString(16);
    return hexa.toUpperCase();
}

function createRGB(r, g, b) {
    let color = `rgb(${r},${g},${b})`
    return color
}


function printColor(){
    console.log(createRGB(colorGenerator(), colorGenerator(), colorGenerator()));
    console.log(createRGB(colorToHexa(), colorToHexa(), colorToHexa()));
   

}

printColor();