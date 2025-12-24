/*
! Declara una variable nota (0 a 10)

* Si la nota es:
&   Mayor o igual a 7 → "Aprobado"
&   Entre 4 y 6 → "En recuperación"
&   Menor a 4 → "Reprobado"

*Muestra el resultado en consola
*/

let nota = 6;
let numero = Infinity;

if (nota >= 7){
    console.log("Aprobado");
} else if (nota >=4  && nota <=6){
    console.log("En recuperacion", numero);
} else if (nota >=0 && nota <4){
    console.log("Reprobado");
}
