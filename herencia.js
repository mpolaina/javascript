var persona = {
    nombre: 'Manuel',
};
console.log(persona.hasOwnProperty('nombre'));

// ANTI-PATTERN --- NO ESTÁ BIEN HACERLO ASI
Object.prototype.saludar = function () {
    console.log('Hola soy ' + this.nombre);
};

var manuel = {
    nombre: 'Manuel',
    profesion: 'Creavito',
    ciudad: 'Córdoba',
};
manuel.saludar();

var inma = {
    nombre: 'Inma',
    profesion: 'Química',
    ciudad: 'Córdoba',
};

inma.saludar();
console.log(inma.hasOwnProperty('saludar'));