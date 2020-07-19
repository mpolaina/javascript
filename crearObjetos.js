var AC = {
    titulo: 'Assassins Creed',
    genero: 'FPS',
    jugar: function () {
        console.log('Estoy jugando a ' + this.titulo);
    }
};

// crear el objeto AC2 usando como prototipo el objeto AC
var AC2 = Object.create(AC);
AC2.version = 'Assassins Creed 2';
console.log(AC2);
var AC3 = {};
AC3.version = "Assassins Creed Revelations"
console.log(AC3);