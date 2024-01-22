const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]

// forEach ==> cuando lo único que quieres hacer es nostrar los elementos

carrito.forEach(producto => console.log(producto.nombre));

// Map  ==> cuando quieras crear un nuevo arreglo de los elementos

const productos = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);


console.log(productos);
