class Person {
  #firstName;
  #lastName;
  #age;
  fullName = this.getFirstName()+" "+this.getLastName();
  constructor(a,b,c){
    this.#firstName=a;
    this.#lastName=b;
    this.#age=c;
    this.fullName= this.getFirstName()+" "+this.getLastName();
  }
  getFirstName(){
    return this.#firstName;
  }
  getLastName(){
    return this.#lastName;
  }
  #actualizarFullName(){
    return this.getFirstName()+" "+this.getLastName();
  }
  set firstName(valor){
    this.#firstName=valor;
    this.fullName= this.#actualizarFullName();
  }
  set lastName(valor){
    this.#lastName=valor;
    this.fullName= this.#actualizarFullName();
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);