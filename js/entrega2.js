// Funciones globales

const existeElementoId = (array, idReferencia) => {
    return array.some(elemento => elemento.id === idReferencia);
  };
  
  // Sección de usuarios
  
  let userId = 1;
  let usuarios = [];
  
  class Usuario {
    constructor(nombre, apellido, ciudad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.ciudad = ciudad;
      this.id = userId;
      userId++;
    }
    
  }
  
  const agregarUsuario = (usuario) => {
    usuarios.push(usuario);
    alert(`¡Bienvenido, ${usuario.nombre}! Tu ID es: ${usuario.id}. Anótalo para futuras referencias.`);
  };
  
  const eliminarUsuario = (id) => {
    if (existeElementoId(usuarios, id)) {
      usuarios = usuarios.filter(usuario => usuario.id !== id);
    } else {
      alert("No existe ningún usuario con ese ID");
    }
  };
  
  const mostrarUsuarios = () => {
    let nombresUnicos = new Set();
  
    usuarios.forEach(usuario => {
      nombresUnicos.add(usuario.nombre);
    });
  
    let nombresUsuarios = Array.from(nombresUnicos);
  
    if (nombresUsuarios.length > 0) {
      alert(nombresUsuarios.join("\n"));
    } else {
      alert("No hay usuarios registrados");
    }
  };
  
  const modificarUsuario = (id) => {
    if (existeElementoId(usuarios, id)) {
      let usuarioAModificar = usuarios.find(usuario => usuario.id === id);
  
      // Mostrar información actual del usuario
      alert(`ID: ${usuarioAModificar.id}\nNombre: ${usuarioAModificar.nombre}\nApellido: ${usuarioAModificar.apellido}\nCiudad: ${usuarioAModificar.ciudad}`);
  
      // Mostrar opciones de modificación
      let opcionModificar = parseInt(
        prompt(
          `
          ¿Qué desea modificar?
          1 - Nombre
          2 - Apellido
          3 - Ciudad
          4 - Volver
          `
        )
      );
  
      switch (opcionModificar) {
        case 1:
          usuarioAModificar.nombre = prompt("Ingrese el nuevo nombre");
          alert("Nombre modificado con éxito.");
          break;
        case 2:
          usuarioAModificar.apellido = prompt("Ingrese el nuevo apellido");
          alert("Apellido modificado con éxito.");
          break;
        case 3:
          usuarioAModificar.ciudad = prompt("Ingrese la nueva ciudad");
          alert("Ciudad modificada con éxito.");
          break;
        case 4:
          break;
        default:
          alert("Ingrese una opción válida");
          break;
      }
    } else {
      alert("No existe ningún usuario con ese ID");
    }
  };
  
  // Sección de Recetas
  
  const buscarRecetas = () => {
    let estado = true;
  
    while (estado) {
      let opcionReceta = parseInt(
        prompt(
          `
          Menú de Recetas
          1 - Carnes Rojas
          2 - Pescado
          3 - Pollo
          4 - Pastas
          5 - Postres
          6 - Volver
          `
        )
      );
  
      switch (opcionReceta) {
        case 1:
          alert("Recetas de Carnes Rojas");
          break;
        case 2:
          alert("Recetas de Pescado");
          break;
        case 3:
          alert("Recetas de Pollo");
          break;
        case 4:
          alert("Recetas de Pastas");
          break;
        case 5:
          alert("Recetas de Postres");
          break;
        case 6:
          estado = false;
          break;
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };
  
  // Sección de Contacto
  
  const mostrarContacto = () => {
    alert("Contacto:\nEmail: quecomemoshot@hotmail.com\nTeléfono: 555-5555");
  };
  
  // Sección de Menús
  
  const menuUsuarios = () => {
    let estado = true;
  
    while (estado) {
      let opcion = parseInt(
        prompt(
          `
          Bienvenido al Menú de Usuarios
          1 - Agregar un usuario
          2 - Verificar usuarios existentes
          3 - Modificar datos
          4 - Volver
          `
        )
      );
  
      switch (opcion) {
        case 1:
          let nombre = prompt("Ingrese su nombre");
          let apellido = prompt("Ingrese su apellido");
          let ciudad = prompt("Ingrese su ciudad");
          let nuevoUsuario = new Usuario(nombre, apellido, ciudad);
          agregarUsuario(nuevoUsuario);
          break;
        case 2:
          mostrarUsuarios();
          break;
        case 3:
          let idUsuarioModificar = parseInt(prompt("Ingrese el ID del usuario a modificar"));
          modificarUsuario(idUsuarioModificar);
          break;
        case 4:
          estado = false;
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
          1 - Ingresar Usuario
          2 - Buscar Recetas
          3 - Contacto
          4 - Salir
          `
        )
      );
      switch (opcion) {
        case 1:
          // Ingresar Usuario
          menuUsuarios();
          break;
          case 2:
            // Buscar recetas
            buscarRecetas();
            break;
          case 3:
            // Menú de contacto
            mostrarContacto();
            break;
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
  
  