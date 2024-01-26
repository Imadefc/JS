// Destructuring con arrays
const numeros = [1, 2, 3];

// Sin destructuring
let numeroUno = numeros[0];
let numeroDos = numeros[1];
let numeroTres = numeros[2];

numeroDos=8;

console.log(numeroUno, numeroDos, numeroTres);
console.log(numeros[0],numeros[1], numeros[2]);

// Con destructuring

let [uno, dos, tres, cuatro] = numeros;

dos =8;

console.log(uno, dos, tres, cuatro);
console.log(numeros[0],numeros[1], numeros[2], numeros[3]);

//Objeto

let obj ={
    numeros : [1, 2, 3]
}

let refer= obj.numeros;

refer[0]=3;

console.log(refer);
console.log(obj.numeros);