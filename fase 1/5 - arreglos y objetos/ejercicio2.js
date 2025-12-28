let persona = {
    nombre: "Manuel",
    edad: 24,
    activo: true
}

let personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Sofia", edad: 15 }
];

const contadora = (personas) => {
    let numeroMayoresEdad = 0;
    for (let i = 0; i < personas.length; i++) {
        let element = personas[i].edad;
        if (element >= 18) {
            numeroMayoresEdad += 1;
        } 
    }
    return numeroMayoresEdad
}

const mensaje = (personas) => {
    let personasMayores = contadora(personas);
    return `Hay ${personasMayores} personas mayores de edad.`;
}

console.log(mensaje(personas));

// Qué entendí hoy: el uso de objetos que es algo que no sabia como se usaban y que hubiera manera de escribir asi el array, pense que solo un dato se podria escribir en cada bloque
// Qué me confundió: usar especificamente los datos de edad dentro del array 
// Qué ya no me asusta: usar los objetos en un array
