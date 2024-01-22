// Arreglos o arrays

const numeros = [ 10, 20, 30, 40, 50];


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


const arreglo = ['Hola', 10, true, 'si', null, {nombre:'Reynaldo', trabajo: 'Programador'}, [1, 2, 3]];
// console.log(arreglo);


//Acceder a valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);

// Conocer la extención de un arreglo
console.log(meses.length);

// Acceder a todos los elementos de un array con un iterador
console.log('Mostrar todos los elementos de una lista');
numeros.forEach(function(numero) {
    console.log(numero);
});

// Agregar valores al array
numeros.push(60, 70, 80); // Al final del arreglo
numeros.unshift(-20, -10, 0) // Al inicio del arreglo
console.table(numeros); 


// Eliminar valores del array 
// meses.pop();// El último valor de la lista
// meses.shift();// El primer valor de la lista

// Para eliminar un valor determinado de una lista
// meses.splice(2, 1);
console.table(meses); 

// Rest Operator o Spread Operator (Hace una copia, 'RECOMENDABLE HOY EN DIA')

const nuevoArreglo = [...meses, 'junio']; //Simula push, para unshift cambiar de posición
console.log(nuevoArreglo);
