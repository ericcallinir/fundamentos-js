
const er = {
    nombre: 'Eric',
    edad: 32,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);//hace referencia al mismo objeto
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 35,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

//er.imprimir();

function Persona( nombre, edad ) {
    console.log('se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);//hace referencia al mismo objeto
    }
    return;
}

const maria = new Persona( 'Maria', 18 );
const melissa = new Persona( 'Melissa', 35 );
console.log( maria );
maria.imprimir();
melissa.imprimir();

