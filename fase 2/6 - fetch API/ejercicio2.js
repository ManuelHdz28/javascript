const btnCargar = document.getElementById("cargar");
const listaUsuarios = document.getElementById("lista");

const cargarUserActivos = (usuarios) => {
    let contador = 0;
    listaUsuarios.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li"); //* crear un elemento li
        li.textContent = `${usuarios[i].name} - ${usuarios[i].email}`;
        listaUsuarios.appendChild(li);
        contador += 1;
    }
    return contador;
}

btnCargar.addEventListener("click", () => {
    
     fetch('https://jsonplaceholder.typicode.com/users') //* usar fetch para obtener los usuarios
    .then(response => response.json())
    .then(usuarios => {
        const total = cargarUserActivos(usuarios);
        console.log(`Usuarios Cargados: ${total}`);
    });
});