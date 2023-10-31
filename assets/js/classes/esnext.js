
class Rectangulo {

    #area = 0;//declarado como propiedad privada pero aun no se puede usar universalmente

    constructor ( base  = 0, altura = 0 ){
        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);