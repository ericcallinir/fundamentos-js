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

class Heroe extends Persona {
    clan = 'sin clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase );

        this.clan = 'Los Avengers';
        super.quienSoy();
    }
}

//Creacion de una nueva instancia de una clase
const spiderman =  new Heroe ('Peter Parker','Spiderman','Soy tu amigable vecino Spiderman!');//Se envian los parametros para llenar las propiedades de la clase Persona.
console.log( spiderman )