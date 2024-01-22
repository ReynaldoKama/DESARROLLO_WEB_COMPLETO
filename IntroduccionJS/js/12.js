//Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 200,
    disponible: true,
}

//Object.freeze(producto); //No permite modificar, eliminar ni aumentar
Object.seal(producto);// solo permite modificar elementos.

producto.precio = 'nuevo'

console.log(Object.isSealed(producto)); //verificar seal
console.log(Object.isFrozen(producto)); //verificar freeze
console.log(producto);