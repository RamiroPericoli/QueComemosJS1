function nombreYApellido() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    alert(`Bienvenido ${nombre} ${apellido}`);
}

nombreYApellido();

let accesoPermitido = false;

while (!accesoPermitido) {
    //  edad 
    let edad = parseInt(prompt("Ingrese su edad:"));

    // nacionalidad
    let nacionalidad = prompt("Ingrese su nacionalidad (solo aceptamos 'argentina', por favor):");

    // Verificar
    if (edad >= 18 && nacionalidad.toLowerCase() === 'argentina') {
        alert("¡Bienvenido a la página de recetas de cocina!");
        console.log("Acceso permitido");

        accesoPermitido = true;

    } else if (edad >= 18 && nacionalidad.toLowerCase() !== 'argentina') {
        alert("Lo siento, solo permitimos el acceso a personas de nacionalidad argentina.");
        console.log("Acceso denegado: nacionalidad incorrecta");
    } else if (edad < 18 && nacionalidad.toLowerCase() === 'argentina') {
        alert("Lo siento, solo permitimos el acceso a personas mayores de 18 años.");
        console.log("Acceso denegado: edad insuficiente");
    } else {
        alert("Lo siento, no cumples con los requisitos mínimos para ingresar.");
        console.log("Acceso denegado: edad y nacionalidad insuficientes");
    }
}

// Elección de comida
let opcionesComida = ["Ensalada cesar", "Pizza", "Pastas"];
let comida = prompt("Elige tu comida favorita entre: \n1. Ensalada cesar \n2. Pizza \n3. Pastas");

// Validar
while (!opcionesComida.map(opcion => opcion.toLowerCase()).includes(comida.toLowerCase())) {
    comida = prompt("Opción no válida. Por favor, elige entre: \n1. Ensalada cesar \n2. Pizza \n3. Pastas");
}

// Elección de día
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let diaSemana = prompt("¿En qué día de la semana te gustaría comer " + comida + "? (De lunes a domingo)");

// Validar
while (!diasSemana.map(dia => dia.toLowerCase()).includes(diaSemana.toLowerCase())) {
    diaSemana = prompt("Día no válido. Por favor, elige un día de la semana (de lunes a domingo)");
}

// Ciclo comida
switch (comida.toLowerCase()) {
    case "pizza":
        console.log("¡Buena elección! A disfrutar de la pizza.");
        break;
    case "ensalada":
        console.log("Una elección saludable. Disfruta de la ensalada.");
        break;
    case "pastas":
        console.log("¡Las pastas son siempre bienvenidas! A disrutar.");
        break;
    default:
        console.log("Algo salió mal con la elección de comida.");
}

// Ciclo día
switch (diaSemana.toLowerCase()) {
    case "lunes":
        console.log("Comenzando la semana con " + comida + ".");
        break;
    case "martes":
        console.log("Martes de disfrutar " + comida + ".");
        break;
    case "miércoles":
        console.log("Mitad de semana, a disfrutar de " + comida + ".");
        break;
    case "jueves":
        console.log("Jueves es un buen día para " + comida + ".");
        break;
    case "viernes":
        console.log("¡Viernes, día perfecto para " + comida + "!");
        break;
    case "sábado":
        console.log("Sábado relajado con " + comida + ".");
        break;
    case "domingo":
        console.log("Domingo de disfrutar de " + comida + ".");
        break;
    default:
        console.log("Algo salió mal con la elección del día.");
}

