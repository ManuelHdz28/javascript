
const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");


 let estado = true;
titulo.textContent = `Esperando ...`;

boton.addEventListener("click", () => {
   
  if (estado) {
    titulo.textContent = `has Iniciado!`;
    estado = false;
  } else {
    titulo.textContent = `Esperando ...`;
    estado = true;
  }
});
