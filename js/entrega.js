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

let opcionesComida = ["Ensalada cesar", "Pizza", "Pastas"];
let comida = prompt("Elige tu comida favorita entre:\n1. Ensalada cesar\n2. Pizza\n3. Pastas");

while (true) {
    switch (comida) {
        case "1":
            comida = "Ensalada cesar";
            break;
        case "2":
            comida = "Pizza";
            break;
        case "3":
            comida = "Pastas";
            break;
        default:
            comida = prompt("Opción no válida. Por favor, elige entre:\n1. Ensalada cesar\n2. Pizza\n3. Pastas");
            continue;
    }
    break;
}
let diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
let diaSemana = prompt("¿En qué día de la semana te gustaría comer " + comida + "? \n1. Lunes\n2. Martes\n3. Miércoles \n4. Jueves \n5. Viernes\n6. Sábado \n7. Domingo");

while (true) {
    switch (diaSemana) {
        case "1":
            diaSemana = "lunes";
            break;
        case "2":
            diaSemana = "martes";
            break;
        case "3":
            diaSemana = "miércoles";
            break;
        case "4":
            diaSemana = "jueves";
            break;
        case "5":
            diaSemana = "viernes";
            break;
        case "6":
            diaSemana = "sábado";
            break;
        case "7":
            diaSemana = "domingo";
            break;
        default:
            diaSemana = prompt("Día no válido. Por favor, elige un día de la semana (de lunes a domingo)");
            continue;
    }
    break;
}
switch (comida.toLowerCase()) {
    case "pizza":
        console.log("¡Buena elección! A disfrutar de la pizza.");
        break;
    case "ensalada cesar":
        console.log("Una elección saludable. Disfruta de la ensalada César.");
        break;
    case "pastas":
        console.log("¡Las pastas son siempre bienvenidas! A disfrutar.");
        break;
    default:
        console.log("Algo salió mal con la elección de comida.");
}

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


