const flights = [
    { id: 0, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 2, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 3, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 4, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 5, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 7, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 8, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

const getUserName = () => {
    let userName = prompt("Hello babycoder!\n▶\ Tell me what is your name to get started ☺")

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
            console.log(`The flight ID: ${flights[i].id}, with origin: ${flights[i].from}, and destination:  ${flights[i].to} has a cost of ${flights[i].cost}$ and is a direct flight.`);

        } else {
            console.log(`The flight ID: ${flights[i].id}, with origin: ${flights[i].from}, and destination: ${flights[i].to} has a cost of ${flights[i].cost}$ and make layover.`);
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
            console.log(`Id: ${flights[i].id} - Origen: ${flights[i].from}  - Destino:  ${flights[i].to} - Precio: ${flights[i].cost}$.`)
        };
    };
    console.log("************************************************************************************************************************")

    const lastFlights = flights.slice(-5)

    alert("👉 The last 5 flights of the day are those detailed in console:")
    console.log("\nDestinations of today's latest flights:")
    for (let i = 0; i < lastFlights.length; i++) {
        console.log(`The flight with origin: ${lastFlights[i].from} and destination: ${lastFlights[i].to}`)
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
        "Tell me what price you want and I will show you the flights with that price or cheaper!"
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
                    `The flight with origin:${flight.from} and destination: ${flight.to} has a cost of ${flight.cost}$ and ${translateLayover(flight.layover)}`
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
            Object.values(newFlight).some(
                (current) => current === "" || current === 0
            )
        ) {
            console.log(
                "***All fields are required to add a flight***"
            );
            return isAnAdmin();
        }
        flights.push(newFlight);
        console.log("Added flight");
        console.log("Available flights:");

        flights.forEach((flight) => {
            const { to, from, cost, layover } = flight;

            const checkLayover = layover
                ? "make layover"
                : "is a direct flight";
            console.log(
                `The flight with origin:  ${from}  and destination: ${to} has a cost of ${cost}$ and ${checkLayover}`
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
            alert("The indicated flight doesn't exist.");
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
    alert("It has been a pleasure, see you soon!👋🏻");
}

adminOrUser();
