//* EJERCICIO 1
function saludo(nombre){
    console.log(`Hola ${nombre}, Bienvenido!`);
}

saludo("manuel");

//* EJERCICIO 2
const suma = (a,b) => {
    return a + b;
}

let resultado = "la suma es: " + suma(4,4);
console.log(resultado);

//* EJERCICIO 3
function eresMayor(edad){
    let mayor;
    if (edad >= 18) {
        return mayor = true;
    } else {
        return mayor = false;
    }
}

console.log(eresMayor(24));

//* EJERCICIO 4
let estadoNota = "";
function aprobar(nota) {
    if (nota >= 7) return estadoNota = "aprobado";
    else if(nota >= 4) return estadoNota = "Recuperacion";
    else return estadoNota = "Reprobado"
}

console.log(aprobar(7));

//* EJERCICIO 5
const acceso = (edad, activo) => {
    if (edad >= 18 && activo) return  mensaje = "acceso permitido";
    else if (edad < 18 && !activo) return mensaje = "Acceso Denegado";
    else if (edad < 18) return mensaje = "Acceso denegado debido a que tu edad es menor a 18";
    else return mensaje = "Acceso denegado debido a que no estas activo";
}

console.log(acceso(24, true));

