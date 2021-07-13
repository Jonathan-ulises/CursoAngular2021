/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//Destructuracion de objetos OPCION 1 (RECOMENDADA)
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

//Destructuracion de objetos OPCION 2
//const {volumen, segundo, cancion, detalles: {autor}} = reproductor;
/*
Si tienes otras propiedades con el mismo nombre declaradas antes de la destructuracion,
puedes asignar una especie de alias: autor: autorDetalle. 
*/


console.log('El volumen actual es de: ', volumen)
console.log('El segundo actual es de: ', segundo)
console.log('La canción actual es de: ', cancion)
console.log('El autor actual es: ', autor)