var expresionFuncional = function () {
    console.log('Expresión');
};
// Se invoca con el nombre de la variable que la define.
expresionFuncional();

var numeros = [1, 2, 3, 4, 5];
// Dentro de un forEach se llama auna expresión funcional
numeros.forEach(function (numero) {
    console.log('Número ' + numero);
});

(function () {
    console.log('Hola desde IIFF');
    // Inmediately Invoked Function Expression
    // ( function(){} ) ();
})();