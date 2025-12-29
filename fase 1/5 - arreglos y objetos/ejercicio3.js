let usuarios = [
  { nombre: "Ana", edad: 17, activo: true },
  { nombre: "Luis", edad: 22, activo: false },
  { nombre: "Carlos", edad: 30, activo: true },
  { nombre: "Sofia", edad: 15, activo: true },
  { nombre: "Mario", edad: 19, activo: false },
];


const contadora = (usuarios) => {
  let contUserValido = 0;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18 && usuarios[i].activo) {
      contUserValido += 1;
    }
  }
  return contUserValido;
};

const listadoUser = (usuarios) => {
 let usuariosValidos = [];
  if (contadora(usuarios) > 0) {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].edad >= 18 && usuarios[i].activo) usuariosValidos.push(usuarios[i].nombre);
      
    }
    return usuariosValidos;
  }
  else {
    return "No hay usuarios con acceso";
  }
};

const mensaje = (usuarios) => {
    const usuariosValidos = listadoUser(usuarios);
    if (Array.isArray(usuariosValidos)) {
      let mensajeFinal = "Usuarios con acceso: ";
      for (let i = 0; i < usuariosValidos.length; i++) {
        mensajeFinal += usuariosValidos[i]; 
        if (i < usuariosValidos.length - 1) {
          mensajeFinal += ", ";
        }
      }
        mensajeFinal += ` (${usuariosValidos.length})`;
      return mensajeFinal;
    } else {
      return usuariosValidos;
    }
  
};



console.log(mensaje(usuarios));