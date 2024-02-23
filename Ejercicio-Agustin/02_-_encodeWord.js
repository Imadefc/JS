/*
El objetivo de este ejercicio es convertir una cadena de texto en una nueva cadena 
donde cada carácter en la nueva cadena sea "(" si ese carácter aparece 
solo una vez en la cadena original, o ")" si ese carácter aparece más de una vez en 
la cadena original. Ignora la capitalización al determinar si un carácter es duplicado.

EJEMPLOS:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function encodeWord(palabra) {
  palabra= palabra.toLowerCase();
  let arrPalabras=palabra.split("");
  let resultado="";
    for(let i=0; i<arrPalabras.length;i++){
      if(estaEnArray(arrPalabras,arrPalabras[i], i)){
        resultado+=")";
      }else{
        resultado+="(";
      }
    }
  return resultado;
}
function estaEnArray(arr, letra, pos){
  for(let i=0; i<arr.length; i++){
    if(arr[i]==letra && i!=pos){
      return true;
    }
  }
  return false;
}
/*


let newArray = [];
  let arrayWords = palabra.split("");
  arrayWords.forEach((letter) => {
    const quantity = arrayWords.filter(
      (letter2) => letter.toLowerCase() === letter2.toLowerCase()
    );
    if (quantity.length > 1) {
      newArray.push(")");
    } else {
      newArray.push("(");
    }
  });
  return newArray.join("");


*/

console.log(encodeWord("din")); // => '((('
console.log(encodeWord("recede")); // => '()()()'
console.log(encodeWord("Success")); // => ')())())'
console.log(encodeWord("(( @")); // => '))(('
