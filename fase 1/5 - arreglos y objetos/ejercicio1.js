let edades = [12, 18, 25, 30, 16, 40];

const promedio = (edades) => {
    let sumaEdades = 0;
    for (let i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];
    }
  return sumaEdades / edades.length;
}

const mayorEdad = (edades) => {
    let edadMayor = edades[0];
    for (let i = 1; i < edades.length; i++) { // se toma el 1 porque tome como base el 0
        if (edades[i] > edadMayor) {
            edadMayor = edades[i];
        }
        
    }
    return edadMayor;
}

const clasificacion = (edades) => {
    const promedioEdades = promedio(edades);

    if (promedioEdades < 18) {
        return "Poblacion Joven";
    } else if (promedioEdades >= 18){
        return "Poblacion adulta"
    }
}

console.log(`El promedio de edad: ${promedio(edades)} - ${clasificacion(edades)} - Edad Mayor: ${mayorEdad(edades)}.`);

// Qué fue más fácil que ayer: el uso de funciones
// Qué me costó menos: el uso de funciones
// Qué ya entendí sin pensar tanto: el uso de funciones y arrays
// aprendi a que se puede llamar una funcion dentro de otra para no hacer el mismo codigo varias veces pero si me costo captar eso y ademas en el console.log me estaba dando un problema de undefined y al final era porque cuando llame una funcion no habia puesto edades debtro de la funcion