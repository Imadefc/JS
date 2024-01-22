class Person {

  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  function fromJson(str) {
    let per = new Person(str["id"], str["firstName"], str["lastName"], str["age"]);
    return per;
  }
  
  toJson() {
    return JSON.stringify(this);
  }
  
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);