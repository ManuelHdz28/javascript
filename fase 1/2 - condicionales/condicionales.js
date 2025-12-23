//* condicionales en JavaScript

//& condicionales if

// los AND (&&) y OR (||) se usan para combinar condiciones
// Los AND (&&) requieren que ambas condiciones sean verdaderas
// Los OR (||) requieren que al menos una condición sea verdadera

// Ejemplo 1: Portero en una discoteca
// Escribe un programa que verifique dos cosas: la edad de una persona y si tiene entrada.
//Condición: Si es mayor de 18 Y tiene entrada, imprime "¡Bienvenido!".
// De lo contrario: Imprime "No puedes pasar".
// Pista: Usa el operador lógico && (AND).

let edad = 15; // Cambia este valor para probar diferentes escenarios
let entrada = true; // Cambia este valor para probar diferentes escenarios
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");

if (edad >= 18 && entrada) {
    resultado1.textContent = "¡Bienvenido!, puedes entrar a la discoteca.";
}else {
    resultado1.textContent = "No puedes pasar a la discoteca.";
}

edad = 21;
entrada = true;
if (edad >= 18 && entrada) {
    resultado2.textContent = "¡Bienvenido!, puedes entrar a la discoteca.";
}else {
    resultado2.textContent = "No puedes pasar a la discoteca.";
}
