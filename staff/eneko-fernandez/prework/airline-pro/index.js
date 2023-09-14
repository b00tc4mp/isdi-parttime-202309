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

function welcome() {
  let userName;
  while (true) {
    userName = prompt("Introduce tu nombre de usuario");
    if (
      userName === "" ||
      typeof userName !== "string" ||
      userName.length <= 3
    ) {
      console.log("Escribe un nombre superior a 3 caracteres");
    } else {
      break;
    }
  }
  console.log(`Bienvenido a AirlinesPro ${userName?.toUpperCase()}!`);
}

function showFligths() {
  const confirmed = confirm("¿Desea ver los vuelos disponibles?");
  if (!confirmed) return false;

  flights.forEach((flight) => {
    const { to, from, cost, layover } = flight;
    const checkLayover = layover ? "realiza escalas" : "no hace ninguna escala";
    console.log(
      `El vuelo con origen: ${from} y destino: ${to} tiene un coste de ${cost}$ y ${checkLayover}`
    );
  });

  showAverageCost();
  flightsWithLayover();
}

function showAverageCost() {
  const averageCost = flights.reduce(
    (total, current) => current.cost + total,
    0
  );
  const cost = averageCost / flights.length;
  console.log(`El coste medio de nuestros vuelos es: ${cost.toFixed(2)}$`);
}

function flightsWithLayover() {
  const totalFlights = flights.reduce(
    (total, current) => (current.layover ? total + 1 : total),
    0
  );
  console.log(`${totalFlights} de nuestros vuelos efectúan escalas`);
}

function lastFiveFlights() {
  const confirmed = confirm(
    "¿Desea ver los destinos de nuestros 5 últimos vuelos del día?"
  );
  if (!confirmed) return false;
  if (confirmed) {
    console.log("Últimos destinos de hoy");
    const lastFlights = flights.slice(flights.length - 5, flights.length);
    lastFlights.map((flight) => console.log(flight.to));
  }
}

function adminOrUser() {
  const typeUser = prompt("¿Eres ADMIN o USER?");

  if (typeUser.toLowerCase() === "user") {
    user();
  } else if (typeUser.toLowerCase() === "admin") {
    admin();
  } else {
    goodbye();
  }
}

function user() {
  const price = prompt(
    "Introduce el precio y se mostrarán los vuelos que tengan ese precio y menor"
  );

  if (price <= 0) {
    console.log("Escribe un precio válido");
    return user();
  }

  if (flights.every((flight) => flight.cost > +price)) {
    console.log(`No hay vuelos disponibles por menos de ${price}$`);
  } else {
    console.log(`Vuelos disponibles por menos de ${price}`);
    flights.filter((flight) =>
      flight.cost <= price
        ? console.log(
            `El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost}$ y ${flight.checkLayover}`
          )
        : ""
    );
  }
  answerUser();
}

function admin() {
  const answer = prompt(
    "Desea añadir o eliminar un vuelo? Escriba Añadir o Eliminar"
  );

  if (answer.toLowerCase() === "añadir") {
    const from = prompt("Ingrese el origen del vuelo");
    let to = prompt("Ingrese el destino del vuelo");
    while (!isNaN(to)) {
      to = prompt("Ingrese el destino del vuelo");
      console.log("No es un destino válido");
    }
    const cost = +prompt("Ingrese el coste del vuelo");
    const layover = confirm("¿El vuelo tiene escalas?");
    const newFlight = { id: Date.now(), from, to, cost, layover };

    if (
      Object.values(newFlight).some(
        (current) => current === "" || current === 0
      )
    ) {
      console.log(
        "***Todos los campos son obligatorios para añadir un vuelo***"
      );
      return admin();
    }

    flights.push(newFlight);
    console.log("Vuelo añadido");
    console.log("Vuelos disponibles:");

    flights.forEach((flight) => {
      const { to, from, cost, layover } = flight;

      const checkLayover = layover
        ? "realiza escalas"
        : "no hace ninguna escala";
      console.log(
        `El vuelo con origen: ${from} y destino: ${to} tiene un coste de ${cost}$ y ${checkLayover}`
      );
    });
    answerUser();
  } else if (answer.toLowerCase() === "eliminar") {
    const flightId = +prompt("Escribe el ID del vuelo que desea eliminar");
    const flightToDelete = flights.filter((flight) => flight.id === flightId);
    const confirmDelete = confirm(
      `Esta seguro de eliminar el vuelo origen ${flightToDelete[0].from} destino ${flightToDelete[0].to}?`
    );
    if (confirmDelete) {
      flights.forEach((flight, i) =>
        flight.id === flightToDelete[0].id ? flights.splice(i, 1) : ""
      );
      console.log(flights);
      console.log("Vuelo eliminado");
      answerUser();
    }
  } else {
    console.log("Escriba una acción válida");
    return admin();
  }
}

function answerUser() {
  const confirmAnswer = confirm("Deseas realizar alguna otra acción?");
  confirmAnswer ? adminOrUser() : goodbye();
}

function goodbye() {
  console.log(`Ha sido un placer, hasta pronto !!`);
}

function app() {
  welcome();

  if (showFligths() === false) {
    return goodbye();
  }

  if (lastFiveFlights() === false) {
    return goodbye();
  }

  adminOrUser();
}

app();
