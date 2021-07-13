/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlesha = (a: number, b: number): number => {
    return a + b
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2) : number {
    return numero * base;
}

//const resultado = sumar(10, 20)
const resultado = multiplicar(5, 10);

console.log(resultado)