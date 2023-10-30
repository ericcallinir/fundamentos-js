

const regresaTrue = () =>  {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);//true
console.log(!true);//false
console.log(!false);//true

console.log(!regresaFalse());

console.warn('And');// true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false );// false

console.log('========');
console.log( regresaFalse() && regresaTrue()); //El orden si importa, si ya la primera funcion retorna falso no sigue la ejecucion.
console.log( regresaTrue() && regresaFalse()); //En este caso ejecuta ambas funciones porque la primera es True entonces continua con la segunda.

console.log('========');
regresaFalse() && regresaTrue();

console.warn( 'OR' );
console.log( true || false );
console.log( false || false );
console.log( regresaTrue() || regresaFalse());

console.warn( 'Asignaciones' );

const soyUndefined = undefined;
const soyNull = null;
const soyFalso= false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;//no se ejecuta el true ya que encontro un valor valido anteriormente.
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;//aqui queda true porque obtiene el valor de la funcion y ya no sigue con el resto.
console.log( { a1 } );
console.log( { a2 } );
console.log( { a3 } );
console.log( { a4 } );
console.log( { a5 } );
