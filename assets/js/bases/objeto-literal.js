let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'  //se define de esta forma para que no lo tome como operador matematico.

};

console.log( personaje );
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje['edad']);
console.log('Coords:', personaje.coords.lat);
console.log('Numero de Trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x] );

console.log('Ultima Pelicula:', personaje['ultima-pelicula']);

// Mas Detalles

//personaje.edad = null;
delete personaje.edad; //Elimina la propiedad del objeto.
console.log( personaje );

personaje.casado = true

const entriesPares =  Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje );//Permite congelar el objeto pero no necesariamente muestra error en consola, pero no congela los obejetos dentro del objeto principal.
personaje.dinero = 10000000;
console.log( personaje )

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log( { propiedades, valores } );

