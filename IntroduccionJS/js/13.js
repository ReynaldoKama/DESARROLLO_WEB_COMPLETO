//Objetos unir dos o mas objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 200,
    disponible: true,
}

const medidas = {
    peso : "1kg",
    medida : "1m"
}
//NO SE DEBE MODIFICAR LOS DATOS ORIGINALES
//unir dos objetos
const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);