// * EJERCICIO 1: CALENTAMIENTO

const nombre = "manuel";
const edad = 24;
const pais = "El Salvador";
const aprendiendoJS = true; // variable tipo boolean

if(aprendiendoJS === true){ //& no necesito comparar con === en un booleano 
    console.log(`Hola, mi nombre es ${nombre} tengo ${edad} años, soy de ${pais} y estoy aprendiendo JS`);
} else {
    console.log(`Hola, mi nombre es ${nombre} tengo ${edad} años, soy de ${pais} y NO estoy aprendiendo JS`)
}

//! EL EJERCICIO 1 LE PUSE UN IF SI ERA TRUE ME MECIA QUE SI ESTABA APRENDIENDO JS Y SI NO ME DECIA QUE NO LO ESTABA HACIENDO. (ME TARDE 5 MINUTOS EN HACERLO)

// * EJERCICIO 2: LOGICA BASICA

if(edad < 18){
    console.log(`Eres Menor de Edad ${nombre}`);
}else if(edad >= 18){
    console.log(`Eres Mayor de Edad ${nombre}`);
}

//! ME TARDE 2.30 MINUTOS EN HACERLO

//* EJERCICIO 3: NOTA   

let nota = 3;

if(nota >= 7){
    console.log(`Aprobado ${nombre}`);
}else if(nota > 4 && nota <= 6){
    console.log(`Iras a Recuperacion ${nombre} ${nota}`);
}else if(nota <= 4){
    console.log(`Reprobaste ${nombre}`);
}

//! lo hice en 5 minutos me equivoque con || en realidad eran &&

// * EJERCICIO 4 SWITCH MENTAL

let dia = 4;

switch (dia) {
    case 1:
        console.log(`Hoy es Lunes`);
        break;
    case 2:
        console.log(`Hoy es Martes`);
        break;
    case 3:
        console.log(`Hoy es Miercoles`);
        break;
    case 4:
        console.log(`Hoy es jueves`);
        break;
    case 5:
        console.log(`Hoy es viernes`);
        break;
    case 6:
        console.log(`Hoy es Sabado`);
        break;
    case 7:
        console.log(`Hoy es Domingo`);
        break;

    default:
        console.log(`ERROR: ESE DIA NO EXISTE!`);
        break;
}

//! ME TARDE 5 MINUTOS

//* EJERCICIO 5: MEZCLADO

let activo = false;

if(edad >= 18 && activo === true){
    console.log(`${nombre} tu usuario es valido`);
}else{

    if(edad <= 18 && activo === false){
        console.log(`${nombre} Tu Acceso es denegado porque tu edad es menor de 18 años y tu estado esta inactivo`);
    }else if (edad < 18) {
        console.log(`${nombre} Tu Acceso es denegado porque tu edad es menor de 18 años`);
    } else if(activo === false){
        console.log(`${nombre} Tu Acceso es denegado porque no estas activo`);
    }

    
}


//! me tarde 10 minutos
