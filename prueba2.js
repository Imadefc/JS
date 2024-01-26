// Parametros REST es una forma de decirle a una funcion que va a recibir una cantidad
// indeterminada de parametros, estos llegarán como un array.
function sumar(a, b, ...c) {
    let suma = a + b;
    console.log("a: "+a);
    console.log("b: "+b);
  
    console.log("c: ["+c+"]");
    c.forEach((numero) => (suma += numero));
    //suma+=c;
    return suma;
  }
  
  console.log(sumar(3, 6, 8, 2));