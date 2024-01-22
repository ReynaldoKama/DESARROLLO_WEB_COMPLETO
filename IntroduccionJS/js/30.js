// Promises

const usuarioAutenticado = new Promise((resolve, reject) =>{
    const auth = false;
    if(auth){
        resolve('Usuario autenticado'); // El promise se cumple
    }else{
        reject('NO se pudo iniciar sesión'); //El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//En los promises existen 3 valores
// Pending: No se a cumplido pero tampoco se a rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se a rechazado o no se pudo cumplir