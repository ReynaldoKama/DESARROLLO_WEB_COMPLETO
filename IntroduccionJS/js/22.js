//Estructuras de control


// === Exactamente igual
// == no diferencia cadena con números
const puntaje = 1000;

if(puntaje === 1000){
    console.log('Si el puntaje es 1000');
}else{
    console.log('El puntaje no es igual');
}


const efectivo = 1000;
const carrito = 800;
if(efectivo > carrito){
    console.log('El usuario puede pagar');
}else{
    console.log('Fondos insuficientes');
}


const rol = 'ADMINISTRADOR';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sitema');
}else if(rol === 'EDITOR') {
    console.log('Acceso limitado');
}else {
    console.log('no tienes acceso');
}
