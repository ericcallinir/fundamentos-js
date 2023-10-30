//Dias de la semana abrimos a las 11
//Pero los fines de semana abrimos a las 9

//Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 6;//0: Domingo...1:Lunes...
const horaActual = 11;

let horaApertura;
let mensaje;//Esta abierto, Esta cerrado, hoy abrimos a las XX

//if ( dia === 0 || dia === 6){ //Metodo Tradicional
/* if ( [0,6].includes( dia ) ){
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Dia de semana');
    horaApertura = 11;
} */

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11; //Solucion con operador ternario

/* if ( horaActual >= horaApertura ) { //Metodo Tradicional
    mensaje = 'Esta Abierto'
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}` ;
} */

mensaje = ( horaActual >= horaApertura ) ? 'Esta Abierto' : `Esta Cerrado, hoy abrimos a las ${horaApertura}`; //Solucion con operador ternario

console.log( { horaApertura, mensaje } );