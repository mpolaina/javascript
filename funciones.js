function saludar(nombre, profesion) {
    console.log('Hola, soy ' + nombre + ', me dedico a ' + profesion);
}
saludar('Manuel', 'Diseño Gráfico');

function mayusculas(texto) {
    return texto.toUpperCase();
}
var nombre = mayusculas('manuel');
console.log(nombre);