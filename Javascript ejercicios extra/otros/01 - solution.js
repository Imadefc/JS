/*
    Escribe una función que reciba un número como parámetro y retorne
    "fizz" si el número es divisible por 3, "buzz" si es divisible por 5
    o "fizzbuzz" si es divisible por ambos.
*/

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'fizzbuzz';
    } else if (n % 3 === 0) {
      return 'fizz';
    } else if (n % 5 === 0) {
      return 'buzz';
    } else {
      return n;
    }
  }
  
  console.log(fizzBuzz(12))
  console.log(fizzBuzz(25))
  console.log(fizzBuzz(15))