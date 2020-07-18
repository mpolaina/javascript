function funcion1() {
    var miVariable = 1;

    function funcionInterna() {
        console.log(miVariable);
    }
    return funcionInterna;
}

var variableExterna = funcion1();
// console.log(variableExterna);
variableExterna();



function funcion2() {
    var miVariable = 2;

    function interna() {
        console.log(miVariable);
    }
    externa(interna);
}

function externa(funcion) {
    funcion();
}

//funcion2();

function espera(mensaje) {
    setTimeout(function () {
        console.log(mensaje);
    }, 2000)
}

espera('Hola que tal?');

function externa() {
    var nombre = 'Manuel';

    function interna() {
        console.log(nombre);
    }
    interna();
};
externa();