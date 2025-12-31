let usuarios = [];

const botonCargar = document.getElementById("cargar");
const listaUsuarios = document.getElementById("lista");

const cargarUsuarios = (usuarios) => { //* funcion para cargar los usuarios de la lista usando fetch y for
    listaUsuarios.innerHTML = ""; //* limpiar la lista antes de cargar nuevos usuarios

    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li"); //* crear un elemento li
        li.textContent = usuarios[i].name;   //* agregar el nombre del usuario al li
        listaUsuarios.appendChild(li);
    }
}
botonCargar.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/users') //* usar fetch para obtener los usuarios
    .then(response => response.json())
    .then(usuarios => {
        cargarUsuarios(usuarios);
    });
});

//que fue confuso: no sabia como usar fetch aun sigo sun entender si es asi como lo hice, ademas para crear ese elemento li sigo confundido.
//que aprendui: a crear elemntos en el DOM y a usar eventos.