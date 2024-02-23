/*
Crea una clase llamada Producto que tenga las siguientes características:

Un constructor que acepte nombre, precio y cantidad como parámetros y los almacene como propiedades.
getters para obtener el nombre, el precio y la cantidad del producto.
setter para modificar el precio y la cantidad del producto.
*/
class Producto {
  constructor(nombre, precio, cantidad) {
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = cantidad;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  set precio(precio) {
    this._precio = precio;
  }
  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }
}

const miProducto = new Producto("Camiseta", 25, 10);

console.log(miProducto.nombre); // Devuelve 'Camiseta'
console.log(miProducto.precio); // Devuelve 25
console.log(miProducto.cantidad); // Devuelve 10

miProducto.precio = 30;
console.log(miProducto.precio); // Devuelve 30

miProducto.cantidad = 15;
console.log(miProducto.cantidad); // Devuelve 15
