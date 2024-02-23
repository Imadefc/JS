/*
Escribe una función que tome un string de una o más palabras y devuelva la misma string, 
pero con todas las palabras que tengan cinco letras o más invertidas. 
Las strings proporcionadas consistirán únicamente de letras y espacios. 
Los espacios estarán presentes solo cuando haya más de una palabra.

Ejemplos:

"Hey fellow warriors" --> "Hey wollef sroirraw"
"This is a test" --> "This is a test"
"This is another test" --> "This is rehtona test"
*/

function reverseWord(string) {
  let palabras =string.split(" ");
  let result=[];
  palabras.forEach(palabra => {
    if(palabra.length>4){
      palabra = palabra.toLowerCase().split("");
      palabra =palabra.reverse();
      
      palabra =palabra.join("");
      result.push(palabra);
    }else{
      result.push(palabra);
    }
  });
  return result.join(" ");
}

console.log(reverseWord("Hey fellow Warriors")); // --> "Hey wollef sroirraw"
console.log(reverseWord("This is a test")); // --> "This is a test"
console.log(reverseWord("This is another test")); // --> "This is rehtona test"
