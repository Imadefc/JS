/*
Crea una función calculadora que retorna un objeto con métodos 
para sumar, restar, multiplicar y dividir. 
Además, la calculadora debe tener un método obtener
para recuperar el valor guardado.
Y por ultimo, un metodo reset para resetear el valor de la calculadora.
*/

function calculadora() {
  // Codigo
}

const miCalculadora = calculadora();

miCalculadora.sumar(5); // Valor actual: 5
miCalculadora.restar(3); // Valor actual: 2
miCalculadora.multiplicar(4); // Valor actual: 8
miCalculadora.dividir(2); // Valor actual: 4
console.log(miCalculadora.obtener()); //  4
miCalculadora.reset();
console.log(miCalculadora.obtener()); // 0
