//Switch

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'tarjeta': 
        console.log('pagate con tarjeta');
        break;
    case 'cheque': 
        console.log('El usuario va a pagar con cheque');
        break;
    case 'efectivo': 
        console.log('El usuario va a pagar con efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}