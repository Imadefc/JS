const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
function convertir(person){
  let palabras=Object.keys(person);
  palabras.sort();
  let obj={
    id : person[palabras[2]],
    age : person[palabras[0]],
  };
  return obj;
}

const json = JSON.stringify(convertir(person));

console.log(json); // Should return: { id: 1, age: 25 }