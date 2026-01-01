const boton = document.getElementById("btn");

boton.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await res.json();
  console.log(usuarios);
});