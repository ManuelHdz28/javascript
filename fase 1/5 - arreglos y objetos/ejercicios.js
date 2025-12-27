// dia 1 - funciones y arrays (bloque conciente)
//objetivo: pensar antes de escribir
 
const promedio = (notas) => {
    let  sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
      sumaNotas = sumaNotas + notas[i];
    }

    let notaPromedio = sumaNotas / notas.length;
    
    const notaMaxima = Math.max(...notas);

    if (notaPromedio >= 7) return `Tu nota es ${notaPromedio} has Aprobado, tu nota maxima es ${notaMaxima}.`;
    else if(notaPromedio >= 4) return `Tu nota es ${notaPromedio} vas a Recuperacion, tu nota maxima es ${notaMaxima}.`;
    else return `Tu nota es ${notaPromedio} has Reprobado, tu nota maxima es ${notaMaxima}.`;

    
}
let notas = [8,6,9,4,7]; // * esto es un array

console.log(promedio(notas));

// Qué me costó hoy: me consto el uso del for en la funcion no me mansaba la informacion y es porque hacia return de manera erronea
// Qué entendí mejor que antes:las funciones, como se usan aunque se que hay maneras para optimizarlo y lo lograre
// Qué error no quiero repetir: los mismos errores de ayer





