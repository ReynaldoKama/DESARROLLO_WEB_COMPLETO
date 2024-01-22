function obtenerEmpleados() {

    const url = 'empleados.json';
    fetch(url)
        .then( resultado => resultado.json())
        .then( datos => {
            const {empleados} = datos;

            console.log(empleados);

            // empleados.forEach(empleado => {
            //     console.log(empleado.id);
            //     console.log(empleado.nombre);
            //     console.log(empleado.puesto);
            // })
        })
}


// Con async await 

async function obtenerEmpleados1() {
    const archivo = 'empleados.json';

    const resul = await fetch(archivo);
    const datos = await resul.json();
    console.log(datos);
}

obtenerEmpleados();
obtenerEmpleados1();