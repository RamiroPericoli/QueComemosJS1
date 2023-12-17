// Funciones globales

const existeElementoId = (array, idReferencia) => {
    let existe = array.some( elemento => elemento.id === idReferencia );
    return existe;
  }
  
  // Sección de usuarios
  
  let userId = 1;
  let usuarios = [];
  
  class Usuario {
    constructor(nombre, apellido, ciudad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.ciudad = ciudad;
      this.id = userId;
    }
  }
  const agregarUsuario = (usuario) => {
      usuarios.push(usuario);
      userId++
  };
  
  const eliminarUsuario = ( id ) => {
  
    if(existeElementoId(usuarios, id)) {
      usuarios = usuarios.filter(usuario => usuario.id !== id);
    } else {
      alert("No existe ningún usuario con ese ID");
    }
  };
  
  const mostrarUsuarios = () => {
      let nombresUsuarios = usuarios.map( usuario => `ID: ${usuario.id} - Nombre: ${usuario.nombre}` );
      // verificar si hay elementos en el array 
      if(nombresUsuarios.length > 0) {
        alert(nombresUsuarios.join("\n"));
      } else {
        alert("No hay usuarios registrados con ese nombre");
      }
  };
  
  // Sección de mascotas
  
  // Sección de Menus
  
  const menuUsuarios = () => {
    let estado = true;
  
    while (estado) {
      let opcion = parseInt(
        prompt(
          `
          Bienvenido a Menú de usuarios
          1 - Veridicar usuarios existentes
          2 - Agregar un usuario
          3 - Modificar datos
          4 - Volver
          `
        )
      );
  
      switch (opcion) {
        case 1:
          mostrarUsuarios();
          break;
        case 2:
          let nombre = prompt("Ingrese el nombre del usuario");
          let apellido = prompt("Ingrese el apellido del usuario");
          let ciudad = prompt("Ingrese ciudad del usuario");
          let usuario = new Usuario(nombre, apellido, ciudad);
          agregarUsuario(usuario);
          break;
        case 3:
          let idUsuario = parseInt(prompt("Ingrese el ID del usuario a eliminar"));
          eliminarUsuario(idUsuario);
          break;
        case 4:
          estado = false;
          menuPrincipal();
          break;
  
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };
  
  let estado = true;
  const menuPrincipal = () => {
    while (estado) {
      let opcion = parseInt(
        prompt(
          `
        Bienvenido a nuestra APP de Recetas
        1 - Agendar Receta
        2 - Buscar Receta
        3 - Contacto
        4 - Salir
        `
        )
      );
      switch (opcion) {
        case 1:
          // Agendar receta
          menuUsuarios();
          break;
        case 2:
          // Buscar receta
          break;
          case 3: 
          //menu de contacto
        break;          ;
        case 4:
          estado = false;
          break;
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };
  
  menuPrincipal();


  //------------------------------------------------------------------

  