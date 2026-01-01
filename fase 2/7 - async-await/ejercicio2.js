const btnCargar = document.getElementById("cargar");
const lista = document.getElementById("lista");

const cargarUsuarios = (usuarios) => {
    lista.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li"); //* crear un elemento li
        if (usuarios[i].id <= 5) {
            li.textContent = `Nombre: ${usuarios[i].name} - ID:  ${usuarios[i].id}`;
            lista.appendChild(li);
        }
    }
}

btnCargar.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await res.json();
  cargarUsuarios(usuarios);
});