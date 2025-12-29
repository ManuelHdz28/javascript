
const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");
const reset = document.getElementById("reset");

const cambiarEstado = {
    iniciado: "has Iniciado!",
    esperando: "Esperando ...",
}

let estado = true;
titulo.textContent = cambiarEstado.esperando;

boton.addEventListener("click", () => {
   
  if (estado) {
    titulo.textContent = cambiarEstado.iniciado;
  } else {
    titulo.textContent = cambiarEstado.esperando;
  }
  estado = !estado;
});

reset.addEventListener("click", () => {
  titulo.textContent = cambiarEstado.esperando;
  estado = true;
});







