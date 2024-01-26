const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};
let arrReplacer=["id","age"];

const person2 = {...JSON.parse(JSON.stringify(person1, arrReplacer)) };
console.log(person2);