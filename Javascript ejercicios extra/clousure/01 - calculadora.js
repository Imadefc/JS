/*
Crea una función calculadora que retorna un objeto con métodos 
para sumar, restar, multiplicar y dividir. 
Además, la calculadora debe tener un método obtener
para recuperar el valor guardado.
Y por ultimo, un metodo reset para resetear el valor de la calculadora.
*/

function calculadora() {
let contador = 10;
    
function sumar(n) {
    contador += n
}
function restar(n) {
    contador -= n
}

function dividir(n) {
    contador /= n
}

function multiplicar(n) {
    contador *= n
}

function reset() {
    contador = 0;
}
function obtener() {
    return contador;
}

return {
    sumar,
    restar,
    dividir,
    multiplicar,
    reset,
    obtener
}
}

const miCalculadora = calculadora();

miCalculadora.sumar(5); // Valor actual: 5
miCalculadora.restar(3); // Valor actual: 2
miCalculadora.multiplicar(4); // Valor actual: 8
miCalculadora.dividir(2); // Valor actual: 4
console.log(miCalculadora.obtener()); // Valor actual: 4
miCalculadora.reset();
console.log(miCalculadora.obtener()); // Valor actual: 4
