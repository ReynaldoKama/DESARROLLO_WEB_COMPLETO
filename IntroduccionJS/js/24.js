// For Loop

// for(let i = 0; i <= 10; i+=2) {
//     console.log('*'.repeat(i));
// }

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre, carrito[i].precio);
}

// While Loop

let c = 0;
while (c <= 10){
    if(c % 2 === 0) {
        console.log(`El número ${c} es PAR`);
    }else{
        console.log(`El número ${c} es INPAR`);
    }
    c++;
}

// Do While Loop

let cont = 0;
do{
    console.log(`El número ${cont}`);
    cont++;
}while(cont < 10);