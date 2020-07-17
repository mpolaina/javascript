var mensaje = "Hola que tal";
//alert(mensaje);

// console.log(confirm('Aceptas las cookies'));

var usuario = prompt('Nombre de usuario');
if (usuario && usuario.trim()) {

    var confirmar = confirm('¿Es ' + usuario + ' correcto?');
    if (confirmar) {
        alert('Nombre registrado');
    } else {
        prompt('Introduce tu nombre de nuevo');
        alert('Gracias!!')
    }

} else {
    alert('No has introducido tu nombre');
}

// Operador typeof
var respuesta = 10;
if (typeof respuesta === "string") {
    console.log('Ok!');
} else {
    console.log('Error, el valor es ' + typeof respuesta);
}