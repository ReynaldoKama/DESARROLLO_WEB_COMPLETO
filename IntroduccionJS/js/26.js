// This

const reservacion = {
    nombre: 'Reynaldo',
    apellido: 'Kama',
    total: 5000,
    pagado: false,
    informacion: function(){ //Si o si debe ser function y no con arroy function 
        console.log(`El cliente ${this.nombre} reservó con un total de ${this.total}`)
    }
}





reservacion.informacion();