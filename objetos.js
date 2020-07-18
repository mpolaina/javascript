var opinion = 'Muy buen libro, lo volvería a leer.'
var libro = {
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    genero: 'novela',
    valoracion: 9,
    tags: ['Misterio', 'Historia', 'Iglesia', 'Conspiración'],
    critica: opinion
};

console.log(libro.critica);
delete(libro.genero);
console.log(libro);
//var propiedad = "autor";
//console.log(libro[propiedad]);

for (var propiedad in libro) {
    console.log(propiedad + ': ' + libro[propiedad]);
}