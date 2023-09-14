const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

const getUserName = () => {
    const userName = prompt("Hello coder!\n▶\ Tell me what is your name to get started ☺");

    while (userName === '') {
        userName = prompt("Please enter a valid name");
    };

    alert("Welcome to the airlines project!✈️");

    return userName;
};

const showFlights = () => {
    const userName = getUserName();
    alert(`${userName}, On screen you can see the flights scheduled for today.`);

    for (let i = 0; i < flights.length; i++) {

        if (flights[i].layover === false) {
            console.log(`The flight with origin: ${flights[i].to}, and destination: ${flights[i].from} has a cost of ${flights[i].cost}$ and is a direct flight.`);

        } else {
            console.log(`The flight with origin: ${flights[i].to}, and destination: ${flights[i].from} has a cost of ${flights[i].cost}$ and make layover.`);
        }
    }
}

showFlights();

const showFlightsInfo = () => {
    alert("Useful information for the user:")
    let sumAllCosts = 0;
    for (let i = 0; i < flights.length; i++) {
        sumAllCosts += flights[i].cost

    }

    const average = sumAllCosts / flights.length

    alert(`👉 The average cost of flights today is ${average}$.`)

    let sumAllLayover = 0

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            sumAllLayover += 1
        }
    }

    alert(`👉 There are ${sumAllLayover} flights with layover. They are detailed in console:`);
    console.log("\nFlights with layover:");
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            console.log(`Id: ${flights[i].id} - Origen: ${flights[i].to} - Destino: ${flights[i].from} - Precio: ${flights[i].cost}$.`)
        };
    };
    console.log("************************************************************************************************************************")

    const lastFlights = flights.slice(-5)

    alert("👉 The last 5 flights of the day are those detailed in console:")
    console.log("\nDestinations of today's latest flights:")
    for (let i = 0; i < lastFlights.length; i++) {
        console.log(`The flight with origin:${lastFlights[i].to} and destination: ${lastFlights[i].from}`)
    }
    console.log("************************************************************************************************************************")
}

showFlightsInfo();

const adminOrUser = () => {
    const roleUser = prompt("Welcome,\n▶\ Are you an ADMINISTRATOR or USER? Please write admin or user");

    if (roleUser === null) {
        doExitProgram();
    } else if (roleUser.toLowerCase() === "user") {
        isUser();
    } else if (roleUser.toLowerCase() === "admin") {
        isAnAdmin();
    } else {
        alert("Please write admin or user");
        adminOrUser();
    }
};

const translateLayover = (layover) => {
    return layover
        ? "make layover"
        : "is a direct flight";
};


const isUser = () => {
    const price = prompt(
        "Enter the price and flights that have that price and lower will be displayed"
    );

    if (price <= 0) {
        console.log("Enter a valid price");
        return isUser();
    }

    if (flights.every((flight) => flight.cost > +price)) {
        alert(`No flights available for less than ${price}$`);
    } else {
        alert("I show you by console the flights that have that price or cheaper")
        console.log(`Flights available for a price equal or less than ${price}`);
        flights.filter((flight) =>
            flight.cost <= price
                ? console.log(
                    `The flight with origin: ${flight.to} and destination: ${flight.from} has a cost of ${flight.cost}$ and ${translateLayover(flight.layover)}`
                )
                : ""
        );
    }
    console.log("************************************************************************************************************************")
    doAnswerUser();
}

const isAnAdmin = () => {
    const askAnswer = prompt(
        "Want to add or remove a flight? Write Add or Remove"
    );
    if (askAnswer.toLowerCase() === "add") {
        const from = prompt("Enter the origin of the flight");
        while (!isNaN(from)) {
            from = prompt("Enter the origin of the flight");
            console.log("Not a valid origin");
        }
        const to = prompt("Enter your flight destination");
        while (!isNaN(to)) {
            to = prompt("Enter your flight destination");
            console.log("Not a valid destination");
        }
        let cost = +prompt("Enter the cost of the flight");
        while (isNaN(cost)) {
            cost = +prompt("Enter a valid cost for the flight");
            console.log("Not a valid cost");
        }
        const layover = confirm("Does the flight have layover?");
        const newFlight = { id: Date.now(), from, to, cost, layover };

        if (
            Object.values(newFlight).some( //El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
                (current) => current === "" || current === 0
            )
        ) {
            console.log(
                "***All fields are required to add a flight***"
            );
            return isAnAdmin();
        }
        // A continuación, comprueba si alguna de las propiedades del objeto newFlight está vacía o es igual a 0. Si falta algún campo, la función muestra un mensaje de error y se llama a sí misma recursivamente para reiniciar el proceso de añadir un vuelo.
        flights.push(newFlight);
        console.log("Added flight");
        console.log("Available flights:");

        flights.forEach((flight) => {
            const { to, from, cost, layover } = flight;

            const checkLayover = layover
                ? "make layover"
                : "is a direct flight";
            console.log(
                `The flight with origin: ${to} and destination: ${from} has a cost of ${cost}$ and ${checkLayover}`
            );
        });
        console.log("************************************************************************************************************************")
        doAnswerUser();
    } else if (askAnswer.toLowerCase() === "remove") {
        const flightId = +prompt("Enter the flight ID you want to delete,\nExp: 00 to 09")
        if (flightId > 10) {
            alert("The ID entered doesn't exist, please introduce your name and I will show you the current flights again.");
            showFlights();
            isAnAdmin();
        }
        const flightToDelete = flights.filter((flight) => flight.id === flightId);
        const validFlightIds = flights.map(flight => flight.id);
        if (!validFlightIds.includes(flightId)) {
            alert("The indicated flight doesn't exist, please enter another flight");
            doAnswerUser();
        } else {
            const confirmDelete = confirm(
                `Are you sure to delete the origin flight ${flightToDelete[0].from} with destination ${flightToDelete[0].to}?`
            );
            if (confirmDelete) {
                flights.forEach((flight, i) =>
                    flight.id === flightToDelete[0].id ? flights.splice(i, 1) : ""
                );
                alert(`Flight removed!\nEnter your name again and I will show you the updated flight list.`);
                showFlights();
                doAnswerUser();
            }
        }
    } else {
    console.log("Enter a valid action");
    return isAnAdmin();
    }
}

const doAnswerUser = () => {
    const confirmAnswer = confirm("Do you want to take any other action?");
    confirmAnswer ? adminOrUser() : doExitProgram();
}

const doExitProgram = () => {
    alert("It has been a pleasure, see you soon!");
}

adminOrUser();


// Este código JavaScript representa un proyecto de líneas aéreas que interactúa con el usuario a través de avisos y alertas en el entorno del navegador.El programa permite al usuario ver información sobre vuelos, realizar acciones como usuario o administrador, y añadir o eliminar vuelos.Desglosemos las diferentes partes del código:

// Datos: El código comienza con un array llamado flights, que contiene información de vuelos como objetos con propiedades como id, to, from, cost, y layover.

// Función getUserName: Esta función pide al usuario que introduzca su nombre y devuelve el nombre introducido.

// Función showFlights: Esta función muestra la lista de vuelos disponibles para hoy en la consola.Recorre la matriz de vuelos e imprime los detalles del vuelo, indicando si tiene escala o si es un vuelo directo.

// Función showFlightsInfo: Esta función proporciona algunas estadísticas e información sobre los vuelos.Calcula y muestra el coste medio de los vuelos, el número de vuelos con escala y los detalles de los últimos 5 vuelos de hoy.

// Función adminOrUser: Esta función pregunta al usuario si es un "ADMINISTRADOR" o un "USUARIO" y luego redirige a las funciones correspondientes: isAnAdmin para administradores e isUser para usuarios normales.Si la entrada no es ni "admin" ni "user", llama a la función doExitProgram para salir del programa.

// Función translateLayover: La función ahora acepta correctamente el valor de escala como argumento y devuelve la traducción adecuada en función de si el vuelo tiene escala o no.

// Función isUser: Esta función permite al usuario introducir un precio, y muestra los vuelos que tienen un coste igual o inferior al precio introducido.Utiliza los métodos filter y every array para filtrar y mostrar los vuelos relevantes en la consola.

// Función isAnAdmin: Esta función permite a un administrador añadir un nuevo vuelo o eliminar un vuelo existente de la matriz de vuelos basándose en la entrada del usuario.Utiliza prompt, confirm y forEach para interactuar con el administrador.

// Función doAnswerUser: Esta función pregunta al usuario si desea realizar alguna otra acción después de completar su acción anterior.Si el usuario confirma, vuelve a llamar a adminOrUser; en caso contrario, llama a doExitProgram para salir del programa.

// Función doExitProgram: Esta función muestra un mensaje de despedida y finaliza el programa.

// Ten en cuenta que el código utiliza console.log para mostrar información en la consola y alert para mostrar mensajes en ventanas emergentes.



