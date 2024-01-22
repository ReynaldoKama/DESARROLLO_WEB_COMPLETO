// Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes.. espere.....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    })
}
function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos.. espere.....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 5000);
    })
}

async function app() {
    try {
        /*Estos son de solo un async await*/
        // const resultado = await descargarNuevosClientes();
        // console.log(resultado);

        /*Para 2 async await*/
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}


app();

console.log('Esta parte no se bloquean');
// setTimeout(function() {
//     console.log("Set imeout.....");
// }, 2000);


// setInterval(function() {
//     console.log("Set imeout.....");
// }, 2000);