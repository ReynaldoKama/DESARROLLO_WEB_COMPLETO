// Array methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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
// ForEach
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

// Include recomendado para arrays planos
let resultado = meses.includes('Marzo');
console.log(resultado);

// some para array de objetos
let resultado1 = carrito.some(function(producto){
    return producto.nombre == 'Celular';
})
console.log(resultado1);

// Reduce para calcular el precio total
let resultado2 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
console.log(resultado2);
// Esto mismo pero con arrow function
let resultado3 = carrito.reduce((total, producto)=>total + producto.precio, 0);
console.log(resultado3);

// Filter filtra los valores
let resultado4 = carrito.filter(function(producto){
    return producto.precio < 400
})
console.log(resultado4);

let resultado5 = carrito.filter(function(producto){
    return producto.nombre === 'Celular'
})
console.log(resultado5);