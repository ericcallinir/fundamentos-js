
/* const elMayor = (a,b) => {  //Modo nomal
    return (a > b) ? a : b;
} */

const elMayor = (a,b) =>  (a > b) ? a : b;   //Modo simplificado

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dolares' : '10 Dolares';


console.log(elMayor(10,20));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,16)
]

console.log( amigosArr );

const nota = 75; //A+ A B+
const grado =   nota >= 95 ? 'A+':
                nota >= 90 ? 'A':
                nota >= 85 ? 'B+':
                nota >= 80 ? 'B':
                nota >= 75 ? 'C+':
                nota >= 70 ? 'C': 'F';
console.log({ nota,grado });