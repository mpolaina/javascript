var persona = {
    nombre: 'Manuel',
    edad: '39',
    ocupacion: 'Creativo',
    color: 'amarillo',
    ciudad: 'córdoba',
    caminar: function () {
        console.log('Volando voy');
    },
    saludar: function () {
        console.log('Hola que tal? Me llamo ' + this.nombre);
        // this hace referencia al objeto donde está este método
    }
};
persona.caminar();
persona.saludar();