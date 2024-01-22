//Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 200,
    disponible: true,
}

// Forma anterior

const productoPrecio = producto.precio;
const productoNombre = producto.nombreProducto;

console.log(productoPrecio);
console.log(productoNombre);

// Destructuring
    //pone el mismo nombre de las propiedades a las variables
const {precio, nombreProducto} = producto;
console.log(precio);
console.log(nombreProducto);