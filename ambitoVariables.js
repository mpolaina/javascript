// Ámbito global
var miNombre = "Manuel";

function nombrar() {
    // Ámbito local de la función
    var miNombre = "Paco";
    console.log(miNombre);
}
nombrar();