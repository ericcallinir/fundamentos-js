
let a = 10;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');

} else {
    console.log('A es menor a 10')
}

//console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();//0: Domingo, 1: Lunes, 2: Martes...

console.log( hoy );
console.log( { dia } );

if ( dia === 3 ) {
    console.log('Miercoles');
} else if ( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2) {
    console.log( 'Martes');
} else {
    console.log('No es miercoles, lunes ni martes...');
}

//Sin usar IF Else, o Switch, unicamente objetos
const diasLetras = {  //Como objeto la solucion es asi.
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}
const diaLetras = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']; //Como arreglo
console.log(diaLetras[dia]);//Imprimir desde el arreglo
console.log(diasLetras[dia]); //Imprimir desde el objeto.