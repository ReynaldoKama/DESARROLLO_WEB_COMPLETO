// Declaración de funciones

function sumar() {
    console.log(10+10);
}

sumar();

// Expresión de la función
const multiplicar = function() {
    console.log(10*10);
}
multiplicar();

//IIFE (son muy útiles para proteger variables)
(function() {
    console.log('Este es una función');
})();

//JavaScript se ejecuta en dos etapas
    //La primera es la de registro o la de creacción (se reg. las funciones)
    //La segunda es la de ejecución se ejecuta el código
