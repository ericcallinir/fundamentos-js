

let a = 10;  //Todos los valores primitivos se pasan por valor y todos los objetos se pasan por referencia.
let b = a;
a = 30;

console.log( { a,b } );

let juan = { nombre: 'Juan' };//Aqui al asar un valor por referencia esta modificando el original
let ana = {...juan};
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ( {...persona} ) => {//Operador Spread(...) rompe la relacion por referencia
    persona.nombre = 'Tony'
    return persona;
}

let peter =  { nombre: 'Peter'}; //El console.log aqui imprimira Peter ya que es el valor que le esta pasando directo a la variable
let tony = cambiaNombre( peter );//Aca imprime Tony porque al pasar por la funcion se le reasigna el valor "tony" dentro de la misma

console.log( { peter, tony } );

//Arreglos

const frutas = ['Manzana', 'Pera', 'Durazno'];

console.time('slice');
const otrasFrutas = frutas.slice();//OTra forma de romper la referencia pero es mas lente
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];//Aqui creamos un nuevo arreglo con el nuevo valor lo que permite separar ambos arreglos.
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table( { frutas,otrasFrutas } );