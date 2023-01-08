// Ejercicio 1

// console.log("HELLO ES6")

// Ejercicio 2
// let namePerson = process.argv[2]

// console.log(`Hello, ${namePerson}!
// Your name lowercased is "${namePerson.toLowerCase()}".`)

// Ejercicio 3

// var inputs = process.argv.slice(2)

// var result = inputs.map( e => e.charAt(0))
//                    .reduce( (ac, value) => ac + value, '')

// console.log( `[${inputs}] becomes "${result}"`)

// Ejercicio 4

// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate( () => console.log(this.yelp) );
//     }
// };
// foot.kick();

// Ejercicio 5

// let userArray = process.argv.slice(2);

// let result = {};

// [, result.username, result.email] = userArray;

// console.log( result )

// Ejercicio 6

// let args = process.argv.slice(2)

// let minValue = Math.min(...args)

// console.log(`The minimum of [${args}] is ${minValue}`)

// Ejercicio 7

// module.exports = function average(...params){
//     let sum = params.reduce( (ac, e) => ac + e, 0 )
//     return sum / params.length
// }

// Ejercicio 8

// module.exports = function midpoint( lowerBound = 0, upperBound = 1){
//     return (lowerBound + upperBound ) / 2
// }

// Ejercicio 9

// module.exports = function makeImportant(cadena, cant = cadena.length ) {
//     return `${cadena}${'!'.repeat(cant)}`
// }

// Ejercicio 10

// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(cadenas, ...params) {
//     var result = cadenas[0];
//     for (var i = 0; i < params.length; ++i) {
//         result += replaceCharacter(params[i]) + cadenas[i + 1];
//     }

//     return result;
// }

// function replaceCharacter(cadena) {
//     return cadena.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
// }
