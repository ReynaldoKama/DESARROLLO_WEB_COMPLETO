//Funciones con parámetros y argumentos

//si un parámetro es igualado a algún valor tiene valor por default
function sumar(numero1 = 0, numero2 = 0) { //numero1 y numero2 son parámetros
    console.log(numero1 + numero2);
}

sumar(2, 3); // 2 y 3 son argumentos
sumar(2, 4);
sumar(1);

// Expresión de la función
const multiplicar = function(n1, n2) {
    console.log(n1 * n2);
}
multiplicar(5, 5);