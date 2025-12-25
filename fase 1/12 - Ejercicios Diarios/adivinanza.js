const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10):")); // Solicita al jugador que ingrese un número

console.log("Número secreto:", numeroSecreto);

if (numeroJugador === numeroSecreto){
    console.log("Felicidades has adivinado el numero secreto!");
}else{
    console.log(`Error! el numero secreto era: ${numeroSecreto}`);
}