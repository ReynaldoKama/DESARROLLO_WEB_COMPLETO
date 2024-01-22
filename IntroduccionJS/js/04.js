//  Cadenas de texto

const tweet = 'Aprendiendo JavaScript desde cero';
// const producto1 = String("Monitor de 20 pulgadas");
// const producto2 = new String("Monitor de 20 pulgadas");
const email = 'email@gmail.com';
//length es para la extencion o longitud de la cadena
console.log(tweet.length);

//indexOf (Retorna la posición)
console.log(tweet.indexOf('JavaScript'));
console.log(tweet.indexOf('css'));

console.log(email.indexOf('@'));

// includes (Retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(tweet.includes('css'));
