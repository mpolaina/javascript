var colores = ['rojo', 'verde', 'blanco', 'azul'];
// colores.push('morado');
// console.log(colores.indexOf('morado'));
function buscarColor(color, matriz) {
    var indice = matriz.indexOf(color);
    if (indice > -1) {
        matriz.splice(indice, 1);
    } else {
        // el color no existe
        alert('El color no existe');
    }
}
buscarColor('blanco', colores);
console.log(colores);