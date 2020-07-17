var premiado = false;

switch (premiado) {
    case true:
        console.log('Has sido premiado');
        break;
    case false:
        console.log('No has sido premiado');
}

var edad = 68;

switch (true) {
    case (edad < 18):
        console.log('Eres menor de edad');
        break;
    case (edad > 65):
        console.log('Eres mayor de 65');
        break;
    default:
        console.log('Edad correcta');
}

var dia = 7;
switch (dia) {
    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
        break;
    case 3:
        console.log('Es miércoles');
        break;
    case 4:
        console.log('Es jueves');
        break;
    case 5:
        console.log('Es viernes');
        break;
    default:
        console.log('Este día no es válido');
}