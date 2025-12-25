const nombre = "Manuel";
let edad = 24;
const pais = "El Salvador";
let activo = true;
let dia = 4;
let nota = 7.5;
let mensaje = nombre;

console.log(`Hola ${nombre}, tienes ${edad} años, eres de ${pais}`);

if (edad >= 18 && activo) {
    mensaje = mensaje + ", Tu acceso fue permitido";
    
    if (dia > 0 && dia < 6) {
        mensaje = mensaje + ", Hoy es tu dia de Estudio"
    } else if(dia >=6 && dia <= 7){
        mensaje = mensaje + ", Hoy es tu dia de Descanso"
    }else{
        mensaje = mensaje + ", Dia Invalido"
    }

    if (nota >= 7) {
        mensaje = mensaje + " y estas Aprobado."
    } else if(nota >= 4){
        mensaje = mensaje + " y estas en Recuperacion."
    }else if(nota >= 0 && nota < 4){ // lo puse asi y no solo else porque pueden haber usuarios que pongan otro numero por error asi se filtra mejor siento yo pero tu me dices si hice bien esa validacion o no
        mensaje = mensaje + " y estas Reprobado."
    }else{
        mensaje = mensaje + " y la nota no es valida."
    }


} else if (edad < 18 && !activo){ // lo hice asi para las validaciones pero no se si asi es me avisas 
    mensaje = mensaje  + ", Tu acceso fue denegado"
} else if(edad < 18){
    mensaje = mensaje  + "Tu acceso fue denegado porque tu edad es menor a 18"
}else{
    mensaje = mensaje  + ", Tu acceso fue denegado porque no estas Activo"
}

console.log(mensaje); // tarde 23 minutos