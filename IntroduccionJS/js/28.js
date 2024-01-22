// Clases
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
    getPrecio(){
        return this.precio;
    }
}

const producto = new Producto('Monitor', 500);

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} con el isbn: ${this.isbn}`;
    }
    getPrecio(){
        return super.getPrecio();
    }
}

const libro = new Libro('JavaScript', 150, '38834773488');

console.log(producto);
console.log(libro);
console.log(producto.formatearProducto());
console.log(libro.formatearProducto());
console.log(libro.getPrecio());