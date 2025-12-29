const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");

titulo.textContent = "Manipulando el DOM con JavaScript";
boton.addEventListener("click", () => {
  titulo.textContent = "Hiciste click 🎉";
});

console.log(titulo);
console.log(boton);
