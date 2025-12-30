const contador = document.getElementById('contador');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const reset = document.getElementById('reset');

let contadorDisplay = 0;

const estadoContador = {
    tema: "Contador: ",
    puntaje: contadorDisplay, //* la uso para cabiarle el color rojo al puntaje si es 0
}

const colorPuntaje =  () => { //! trate de ponerselo solo al contadorDisplay pero no se como
    if (contadorDisplay === 0) {
        contador.style.color = "red";
        
    } else {
        contador.style.color = "black";
    }
}

colorPuntaje();

sumar.addEventListener("click", () => {
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



