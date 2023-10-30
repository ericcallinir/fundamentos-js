
/* function crearPersona( nombre, apellido ) {
    return {
        nombre,  //no es necesario poner nombre: nombre ya que como tienen el mismo nombre JS lo asume.
        apellido
    }
} */

const crearPersona =  ( nombre, apellido ) => {
    return {nombre,apellido}
}
const crearPersona2 =  ( nombre, apellido ) => ({nombre,apellido});//Forma simplificada de devolver un objeto sin la palabra return pero debe ir entre () para devovler un objeto nuevo

const persona = crearPersona( 'Eric', 'Callinir' );
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

/* const imprimeArgumentos2 = () => { //funciona flecha no crea los argumentos como una funcion normal por ende da error.
    console.log( arguments );
} */

const imprimeArgumentos2 = (edad, ...args ) => { //despues del args(parametro rest) no puede venir nada, pero si antes
    //console.log( { edad, args } );
   return args;
}

imprimeArgumentos( 10,true,false,'Eric','Hola');
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2( 20,true,false,'Eric','Hello');//Edad ya esta separada en la funcion entonces no traera el primer valor en el array
console.log( { casado, vivo, nombre, saludo } );

const { apellido: NuevoApellido } = crearPersona( 'Eric', 'Callinir' ); //Aqui se renombro la propiedad a Nuevo Apeliido
console.log({ NuevoApellido });

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

/* const imprimePropiedades = (  personaje  ) => {
    console.log( personaje.nombre );
    console.log( personaje.codeName );
    console.log( personaje.vivo );
    console.log( personaje.edad );
    console.log( personaje.trajes );

} */

const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes }) => { //15 es valor por defecto en caso que ese parametro venga vacio
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

imprimePropiedades( tony );