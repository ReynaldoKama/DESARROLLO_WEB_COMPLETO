// POO


//Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto1 = new Producto('Monitor', 500);
const producto2 = new Producto('Laptop', 300);
console.log(producto1);
console.log(producto2);
console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());