
const dia = 3; //0: Domingo

switch( dia ) {   //Aqui evalua como si fuera un === se debe tener cuidado con el tipo de valor a evaluar/.
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default:
        console.log('No es lunes,martes o domingo')
}