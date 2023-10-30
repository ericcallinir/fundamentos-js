function saludar( nombre ) {
    console.log( arguments )
    console.log('Hola '+ nombre);
    return 1;

    console.log('Esto nunca se va ejecutar');//No se ejecuta
}

const saludar2 = function( nombre ) {
    console.log('Hola '+ nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola '+ nombre )
}



const retornoDeSaludar = saludar('Eric', 40, true, 'Costa Rica');
console.log( {retornoDeSaludar} );
saludarFlecha();
saludarFlecha2('Isaac');
//saludar2('Eric2');

function sumar (a , b) {
    return a + b;
}

const sumar2 = (a,b) => { //Funcion Flecha normal, permite poner mas procedimientos dentro de las llaves
    return a + b;
}
const sumar3 = (a,b) => a + b; //Funcion flecha simplificada, no lleva palabra return, solo sirve si el codigo a retornar es 1 sola linea y usa los mismos valores

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( sumar( 1,2 ) );
console.log( sumar2( 2,2 ) );
console.log( sumar3( 4,4 ) );
console.log( getAleatorio() );
console.log( getAleatorio2() );