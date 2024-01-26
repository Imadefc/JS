// Destructuring con objetos
const persona = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 25,
    hijos:{
        nombre:"Bartolo",
        apellido:"Garcia"
    }
};
  
// Sin destructuring
const nombrePersona = persona.nombre;
const apellidoPersona = persona.apellido;
const edadPersona = persona.edad;

//Con destructuring

const { edad, nombre, apellido,hijos } = persona;
let objHijo= hijos;
const nombreHijo=objHijo.nombre;
const apellidoHijo=objHijo.apellido;

console.log(nombrePersona, apellidoPersona, edadPersona);
console.log( nombre,apellido, edad, hijos);
console.log(nombreHijo, apellidoHijo);