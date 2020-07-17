function saludar(nombre) {
    return 'Hola me llamo ' + nombre;
}
console.log(saludar('Juan'));

function sumarCuadrado(a, b) {
    var cuadradoA = a * a;
    var cuadradoB = b * b;
    var suma = cuadradoA + cuadradoB;
    return suma;
}
console.log('La suma del cuadrados es ' +
    sumarCuadrado(2, 5)
);

function sumarCuadrado(a, b) {
    var sumaCuad = (a * a) + (b * b);
    return sumaCuad;
}
console.log('La suma del cuadrados es ' +
    sumarCuadrado(2, 5)
);