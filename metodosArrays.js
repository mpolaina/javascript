var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
console.log(dias);
// shift - elimina el primer elemento del array
var diaLibre = dias.shift();
var ultimoDia = dias.pop();
console.log(dias);
console.log('El día libre es el ' + diaLibre);
console.log('El último día es el ' + ultimoDia);
dias.push('Sábado');
console.log(dias);
// splice (numero, deleteCount, 'item1', 'item2...)
// con deleteCount en 0, añadimos los itemos que queramos
dias.splice(0, 0, 'Lunes'); // posición 0 el lunes
console.log(dias);
dias.splice(4, 0, 'Viernes'); // en la posición 4 el viernes
console.log(dias);
dias.splice(6, 0, 'Domingo'); // en la posición 6 el domingo
console.log(dias);

// sin deleteCount a 0, eliminamos en la posición 3, un elemento, el jueves.
dias.splice(3, 1);
console.log(dias);

// elimina en la posición 5, con deleteCount y añade Sunday
dias.splice(5, 1, 'Sunday');
console.log(dias);