//Asi es la forma correcta de inicializar una clase

class Persona {

    static _conteo = 0; //se pueden acceder sin necesidad de instanciar.
    static get conteo() {
        return Persona._conteo + ' instancias'
    }

    static mensaje() {
        console.log( this.nombre );//undefined
        console.log('Hola a todos soy un metodo estatico')
    }

    nombre = ''; //Propiedad de la clase persona
    codigo = ''; //Propiedad de la clase persona
    frase = ''; //Propiedad de la clase persona
    comida = ''; //Propiedad de la clase persona

    constructor( nombre = 'Sin Nombre', codigo = 'Sin codigo', frase = 'sin frase' ) { //Se ponen valores por defecto en el caso que vengan vacios, para no tener undefined o error.

        
        this.nombre = nombre; //primer nombre hace referencia a la propiedad de la clase y el segundo hace referencia al parametro que viene en el constructor.
        this.codigo = codigo; //primer nombre hace referencia a la propiedad de la clase y el segundo hace referencia al parametro que viene en el constructor.
        this.frase = frase; //primer nombre hace referencia a la propiedad de la clase y el segundo hace referencia al parametro que viene en el constructor.
        Persona._conteo++;
    }

    //Getters and Setters
    set setComidaFavorita ( comida ) {
        this.comida = comida.toUpperCase();//This.comida apunta a la propiedad de la persona y comida apunta al parametro del SET
    }

    get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);//This sirve para decir que busque fuera del scope osea dentro de la clase.
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

//Creacion de una nueva instancia de una clase
const spiderman =  new Persona('Peter Parker','Spiderman','Soy tu amigable vecino Spiderman!');//Se envian los parametros para llenar las propiedades de la clase Persona.
const ironman =  new Persona('Tony Stark','Iron Man','Yo soy Iron Man');

console.log(ironman);
spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
console.log( spiderman.getComidaFavorita );
console.log( spiderman );
console.log('Conteo Estatico: ', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();