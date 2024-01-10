const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);
let values= Object.values(person);

for(let i=0; i<keys.length; i++){
  console.log(keys[i]+" : "+values[i]);
}

// Print values of person using Object.keys