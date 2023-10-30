
let juegos =  ['Zelda', 'Mario', 'Metroid', 'Need For Speed'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length -1 ];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => { //Recorre cada elemento del arreglo
    console.log({elemento, indice, arr})
});

let nuevaLongitud = juegos.push('F-Zero'); //Agrega un elemento al final del arreglo
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem'); //Agrega un elemento al inicio del arreglo
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop(); //Borrar el ultimo elemento
console.log({ juegoBorrado, juegos });


let pos = 1;

let juegosBorrados = juegos.splice( pos, 2);// elimina dos elementos a partir de la posicion 1 del arreglo
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');// Si no encuentra el elemento lo deja como -1
console.log({metroidIndex, juegos});



