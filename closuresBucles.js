for (var i = 1; i <= 5; i++) {
    function miFuncion() {
        var z = i;
        setTimeout(function () {
            console.log(z);
        }, z * 2000);
    }
    // miFuncion();
}

// se puede usar una expresión funcional ejecutada inmediatamente IIFE

for (var i = 1; i <= 10; i++) {
    (function (z) {
        // var z = i; podemos pasarle z a la primera función e "i" al ejecutarla.
        setTimeout(function () {
            console.log(z)
        }, z * 1000)
    })(i); // este ultimo (); ejecuta la función anónima que hay dentro del anterior ().
}