function sumarCuadrado(a, b) {
    var x = sumar(a * a, b * b);
    return x;

    function sumar(c, d) {
        var a = c + d;
        return a;
    }
};

console.log(sumarCuadrado(2, 4));

function obtenerNumero() {

    function retornaNumero() {
        return 80;
    }
    return retornaNumero();

    function retornaNumero() {
        return 50;
    }
}
console.log(obtenerNumero());

// retorna 50 ya que las funciones declarazas se alzan antes de ejecutarse el return retornaNumero(); 
// la segunda, con el return 50 sobreescribe a la primera.

function obtenerNumeros() {

    var retornaNumeros = function () {
        return 80;
    };
    return retornaNumeros();

    var retornaNumeros = function () {
        return 50;
    }
}
console.log(obtenerNumeros());