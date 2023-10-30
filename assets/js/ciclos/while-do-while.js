
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/* while( i < carros.length ) {
    console.log( carros[i] );
    i++;
} */

console.warn('While');
while( carros[i] ) {  //Forma simplificada, esto se lee que mientras carros en la posicion i tenga un valor, ejecuta el codigo que sigue.
    console.log( carros[i] );
    i++;
}

console.warn('Do While');
let j = 0;

do {
    console.log( carros[j] );
    j++;
} while ( carros[j]);