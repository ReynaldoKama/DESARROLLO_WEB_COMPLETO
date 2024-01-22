// Arrow FunctionsExpresión de la función
const sumar = (n1, n2) => { 
    console.log(n1 + n2);
}
sumar(5, 10);

//si es una sola fila dentro de la función no es necesario las llaves
// y si es un solo parámetro tampoco son necesario los parentecis
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');



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
meses.forEach(mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})


let resultado;

// some para array de objetos
resultado = carrito.some(producto => producto.nombre == 'Celular')


// Reduce para calcular el precio total
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// Filter filtra los valores
resultado = carrito.filter(producto => producto.precio < 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre === 'Celular');
console.log(resultado);
