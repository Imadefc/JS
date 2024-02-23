/*
Los lobos han sido reintroducidos en Gran Bretaña. Eres un granjero de ovejas y ahora estás plagado por lobos que pretenden ser ovejas. Afortunadamente, eres bueno detectándolos.

Advierte a la oveja frente al lobo que está a punto de ser comida. Recuerda que estás parado al frente de la fila que está al final del array:

[oveja, oveja, oveja, oveja, oveja, lobo, oveja, oveja] (ESTÁS AQUÍ AL FRENTE DE LA FILA)
   7      6      5      4      3            2      1

Si el lobo es el animal más cercano a ti, devuelve "Por favor, ¡vete y deja de comer mis ovejas!". De lo contrario, devuelve "¡Oye! ¡Oveja número N! ¡Estás a punto de ser comida por un lobo!" donde N es la posición de la oveja en la fila.

Nota: siempre habrá exactamente un lobo en el array.

Ejemplos
Input: ["oveja", "oveja", "oveja", "lobo", "oveja"]
Output: "Oveja número 1! ¡Estás a punto de ser comida por un lobo!"

Input: ["oveja", "oveja", "lobo"]
Output: "Vete y deja de comer mis ovejas!"
*/

const test1 = ["oveja", "oveja", "lobo"];
const test2 = [
  "oveja",
  "oveja",
  "oveja",
  "oveja",
  "oveja",
  "lobo",
  "oveja",
  "oveja",
];
const test3 = ["oveja", "lobo", "oveja", "oveja", "oveja", "oveja", "oveja"];

function encontrarLobo(fila) {
  let result="";
  if(fila[fila.length-1]=="lobo"){
    return "Vete y deja de comer ovejas";
  }else{
    
    for (let i = 0; i < fila.length; i++) {
      if(fila[i]=="lobo"){
        result="Oveja número "+((fila.length)-(i+1))+"! ¡Estás a punto de ser comida por un lobo!";
      }
    }
  }
  return result;
}

console.log(encontrarLobo(test1)); // "Vete y deja de comer mis ovejas!"
console.log(encontrarLobo(test2)); // "Oveja número 2! ¡Estás a punto de ser comida por un lobo!"
console.log(encontrarLobo(test3)); // "Oveja número 5! ¡Estás a punto de ser comida por un lobo!"
