const contador = document.getElementById('contador');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const reset = document.getElementById('reset');

let contadorDisplay = 0;

const estadoContador = { //* esto es un objeto para tener todo mas ordenado
    tema: "Contador: ",
    puntaje: contadorDisplay, 
}

const colorPuntaje =  () => { //* esto es una funcion para cambiar el color del puntaje
    if (contadorDisplay === 0) {
        contador.style.color = "red";

    } else {
        contador.style.color = "black";
    }
}

colorPuntaje();

sumar.addEventListener("click", () => { //* esto es un evento para sumar
    contadorDisplay += 1;
    contador.textContent = estadoContador.tema + contadorDisplay;
    colorPuntaje();
    
});

restar.addEventListener("click", () => {
    if (contadorDisplay > 0) {
       contadorDisplay -= 1; 
    }
    contador.textContent = estadoContador.tema + contadorDisplay;
    colorPuntaje();
});

reset.addEventListener("click", () => {
    contadorDisplay = 0;
    contador.textContent = estadoContador.tema + contadorDisplay;
    colorPuntaje();
});



