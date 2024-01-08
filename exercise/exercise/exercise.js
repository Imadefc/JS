const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName="Simon"
//Se editan al mismo tiempo porque es el mismo objeto pero con dos distintos punteros que apuntan al mismo sitio
//Para poder abordar este problema una solucion es utilizar person2=Object.assing({},person1); asi se crea un objeto nuevo.
//O tambien podemos incorporarle todas las propiedades paso a paso con una iteracion

console.log(person1);
console.log(person2);
