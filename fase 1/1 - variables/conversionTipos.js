
// ! Conversiones de tipos en JavaScript

// * manera implícita
const numero = 2;
const booleano = true;


console.log(numero + booleano); // Suma: 2 + 1 = 3

// * manera explícita
let booleanToString = booleano.toString(); // Convierte booleano a cadena "true"
console.log(booleanToString); // "true"

let booleanToNumber = Number(booleano); // Convierte booleano a número 1
console.log(booleanToNumber); // 1

// & Explicit Type Casting
console.log("* Explicit Type Casting *"); // "string"
const strNumero = "123";
console.log(typeof strNumero); // "string"
const integer = parseInt(strNumero); // Convierte cadena a entero
console.log(integer); // 123

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal); // Convierte cadena a número decimal
console.log(float, typeof float); // 3.14 "number"