class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  miNombre(){
    return this.firstName+" "+this.lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(developer.miNombre());
