//* tipos de variables en JavaScript

// variable tipo string (cadena de texto)
let nombre = "Manuel";
console.log("Tipo de variable 'nombre':", typeof nombre); // string

let saludo = document.getElementById("saludo");// obtenemos el elemento del DOM

saludo.textContent = "Hola, " + nombre + "! Bienvenido a JavaScript."; // modificamos el contenido del elemento

// variable tipo number (número)
let edad = 30;
console.log("Tipo de variable 'edad':", typeof edad); // number

// variable tipo boolean (verdadero o falso)
let esEstudiante = true;
console.log("Tipo de variable 'esEstudiante':", typeof esEstudiante); // boolean

// variable tipo object (objeto) es una colección de pares clave-valor
let persona = {
    nombre: "Ana",
    edad: 25
};
console.log("Tipo de variable 'persona':", typeof persona); // object

// variable tipo array (arreglo) es una lista ordenada de valores
let colores = ["rojo", "verde", "azul"];
console.log("Tipo de variable 'colores':", typeof colores); // object (los arrays son un tipo de objeto)

// variable tipo undefined (no definida)
let direccion;
console.log("Tipo de variable 'direccion':", typeof direccion); // undefined

// variable tipo null (nulo)
let telefono = null;
console.log("Tipo de variable 'telefono':", typeof telefono); // object (esto es un comportamiento histórico de JavaScript)

// variable tipo symbol (símbolo) se usa para crear identificadores únicos
let id = Symbol("id");
console.log("Tipo de variable 'id':", typeof id); // symbol

// variable tipo bigint (número entero grande)
let granNumero = 9007199254741991n;
console.log("Tipo de variable 'granNumero':", typeof granNumero); // bigint

// Fin del archivo tiposVariables.js

//* variable tipo let sirve para declarar variables que pueden cambiar su valor
let ciudad = "Madrid"; // variable que puede cambiar su valor
console.log("Ciudad:", ciudad);

//* variable tipo const sirve para declarar variables que no pueden cambiar su valor
const pais = "España"; // variable que no puede cambiar su valor
console.log("País:", pais);

const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Hola, " + nombre + " eres de " + pais + ".";

//* variable tipo var (no recomendado en ES6+)
var continente = "Europa"; // variable con alcance global o de función
console.log("Continente:", continente);

// Fin del archivo tiposVariables.js