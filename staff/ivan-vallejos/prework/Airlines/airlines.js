getFlights();
function getFlights() {
  const flights = [
    { id: 0, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 1, to: "Los Ángeles", from: "Madrid", cost: 1100, layover: true },
    { id: 2, to: "París", from: "Barcelona", cost: 210, layover: false },
    { id: 3, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 4, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 5, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 7, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 8, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
  ];

  alert("« Bienvenido a McCarran Airlines »");

  const getName = () => {
    const letters = /^[A-zÀ-ú ]+$/;

    let username = "";
    while (username === "" || !username.match(letters)) {
      username = prompt("¿Como se llama usted? ");
      if (username === null) {
        alert("Lo sentimos, no se puede cancelar el proceso.");
        username = "";
      } else if (username === "") {
        alert(
          "No has escrito nada. Por favor, ingresa tu nombre utilizando sólo letras."
        );
      } else if (!username.match(letters)) {
        alert("Por favor, introduce sólo letras.");
      }
    }

    alert(
      `Un gusto de saludarle ${username}.\nMuchas gracias por utilizar nuestros servicios.`
    );
    return username;
  };

  const haveLayover = (flight) => {
    const layoverText = flight.layover
      ? "realiza escala"
      : "no realiza ninguna escala";
    return layoverText;
  };

  const getFlightsOfTheDay = () => {
    const availableFlights = flights.map(
      (flight) =>
        `■ ID: ${flight.id}, Origen: ${flight.from}, Destino: ${
          flight.to
        }, Precio: ${flight.cost}, Escalas: ${haveLayover(flight)}.`
    );
    alert(
      "Estos son los vuelos disponibles para hoy: \n\n" +
        availableFlights.join("\n")
    );
    return flights;
  };

  const getAverageCost = () => {
    function average(flights) {
      let sum = 0;
      for (const data of flights) {
        sum += data.cost;
      }
      return sum / flights.length;
    }
    const averageCost = average(flights);
    alert(
      `■ EL valor promedio de nuestro vuelos son de alderedor de ${averageCost}€ actualmente.`
    );
  };

  const getLayoverFlights = () => {
    const totalLayovers = flights.filter(
      (flight) => flight.layover === true
    ).length;
    alert(`■ Son un total de ${totalLayovers} los vuelos que realizan escala.`);
    return totalLayovers;
  };

  const getLastFlights = () => {
    const lastFlights = flights.slice(-5);
    const destinations = lastFlights.map((flight) => flight.to).join(", ");
    alert(`■ Los últimos 5 vuelos del día son: \n \n ${destinations}.`);
    return destinations;
  };

  const newFlight = () => {
    const letters = /^[A-zÀ-ú ]+$/;

    let originNewFlight = "";
    while (originNewFlight === "" || !originNewFlight.match(letters)) {
      originNewFlight = prompt("Introduzca el origen del vuelo:");
      if (originNewFlight === null) {
        alert("Por el momento no se puede cancelar el proceso.");
        originNewFlight = "";
      } else if (originNewFlight === "") {
        alert(
          "Vaya, no has escrito nada. Pruebe a introducir el origen del vuelo utilizando sólo letras."
        );
      } else if (!originNewFlight.match(letters)) {
        alert("Por favor, introduzca sólo letras.");
      }
    }

    let destinationNewFlight = "";
    while (
      destinationNewFlight === "" ||
      !destinationNewFlight.match(letters)
    ) {
      destinationNewFlight = prompt("Introduzca el destino del vuelo:");
      if (destinationNewFlight === null) {
        alert("Por el momento no se puede cancelar el proceso.");
        destinationNewFlight = "";
      } else if (destinationNewFlight === "") {
        alert(
          "Vaya, no has escrito nada. \n Pruebe a introducir el destino del vuelo utilizando sólo letras."
        );
      } else if (!destinationNewFlight.match(letters)) {
        alert("Por favor, introduce sólo letras.");
      }
    }

    let costNewFlight;
    do {
      costNewFlight = prompt("Introduzca el coste del vuelo:");
      if (isNaN(costNewFlight)) {
        alert("Disculpe, introduzca sólo números.");
      } else if (costNewFlight === "") {
        alert(
          "Vaya, no ha escrito nada. \n Pruebe a introducir el coste del vuelo utilizando sólo números."
        );
      } else if (costNewFlight === null) {
        alert("Por el momento no se puede cancelar el proceso.");
      }
    } while (
      isNaN(costNewFlight) ||
      costNewFlight === "" ||
      costNewFlight === null
    );

    let layoverNewFlight;
    while (layoverNewFlight !== "true" && layoverNewFlight !== "false") {
      layoverNewFlight = prompt(
        "Indiquenos si el vuelo tiene escalas o no mediante:\n■ true: Tiene escalas. \n■ false: No tiene escalas."
      );
      if (layoverNewFlight !== "true" && layoverNewFlight !== "false") {
        alert("Disculpe, responda unicamente con 'true' o 'false'");
      }
    }

    flights.push({
      id: flights.length,
      to: destinationNewFlight,
      from: originNewFlight,
      cost: costNewFlight,
      layover: layoverNewFlight,
    });
    return flights;
  };

  const addFlight = () => {
    const newData = confirm("¿Quieres introducir los datos de un nuevo vuelo?");
    newData === true
      ? newFlight()
      : alert("No hay vuelos a añadir para el día de hoy.");
    if (flights.length > 15) {
      alert("Has alcanzado el número máximo permitido de vuelos.");
    }
    return flights;
  };

  const getIdToDelete = () => {
    let idToDelete;
    let validId = false;
    do {
      idToDelete = prompt("Introduce el ID del vuelo que deseas eliminar.");
      if (isNaN(idToDelete)) {
        alert("Por favor, introduce sólo números.");
      } else if (idToDelete === "") {
        alert(
          "No has escrito nada. Por favor, introduce el ID del vuelo utilizando sólo números."
        );
      } else if (idToDelete === null) {
        alert("Lo sentimos, no se puede cancelar el proceso.");
      } else {
        const deletedFlight = flights.find(
          (flight) => flight.id === Number(idToDelete)
        );
        if (deletedFlight) {
          validId = true;
          flights.splice(flights.indexOf(deletedFlight), 1);
          alert(`El vuelo ${idToDelete} se ha eliminado correctamente.`);
        } else {
          alert("El ID introducido no existe en nuestra base de datos.");
        }
      }
    } while (!validId);
  };

  const deleteFlight = () => {
    const inputDelete = confirm("¿Desea eliminar algún vuelo disponible?");

    switch (inputDelete) {
      case true:
        getIdToDelete();
        getFlightsOfTheDay();
        break;
      case false:
        alert("Perfecto. No se eliminará ningún vuelo programado para hoy.");
        break;
    }
    return inputDelete;
  };

  const searchFlights = () => {
    let maximumPrice;
    do {
      maximumPrice = Number(
        prompt("Indiquenos el monto aproximado que desea invertir:")
      );
      if (isNaN(maximumPrice)) {
        alert("Por favor, introduzca sólo números.");
      } else if (
        maximumPrice === "" ||
        maximumPrice === null ||
        maximumPrice <= 0
      ) {
        alert(" Por favor, introduzca sólo números mayores a 0.");
      } else {
        const filterPrice = flights.filter((flight) => {
          return flight.cost <= maximumPrice;
        });
        const filteredFlights = filterPrice
          .map((flight) => {
            return `■ ID: ${flight.id}, Origen: ${flight.from}, con destino a ${
              flight.to
            }, precio de: ${flight.cost} €, ${haveLayover(flight)}`;
          })
          .join("\n");

        if (filterPrice.length > 0) {
          const hasExactPrice = filterPrice.some((flight) => {
            return flight.cost <= maximumPrice;
          });
          hasExactPrice === true
            ? alert(
                `Los vuelos que se puede costear con ${maximumPrice}€ son los siguientes:\n\n ■ ${filteredFlights}`
              )
            : alert("Ningún vuelo coincide con el precio indicado.");
        }
      }
    } while (
      isNaN(maximumPrice) ||
      maximumPrice === "" ||
      maximumPrice <= 0 ||
      maximumPrice === null
    );
  };

  const getRole = () => {
    let userRole;
    alert(`Para poder efectuar las siguientes funciones en nuestro sistema por favor indiquenos si usted es:\n
     ■ Admin: Podrá añadir o eliminar vuelos, solo se podrá \n      alojar hasta 15 vuelos en el sistema.\n
     ■ User: Podra buscar vuelos según el monto que dispone.`);
    do {
      userRole = prompt("Indiquenos si es:\n ■ [Admin] \n ■ [User]");
      if (userRole !== "Admin" && userRole !== "User") {
        alert("Por favor, responde 'Admin' o 'User'.");
      }
    } while (userRole !== "Admin" && userRole !== "User");

    switch (userRole) {
      case "Admin":
        addFlight();
        deleteFlight();
        break;
      case "User":
        searchFlights();
        break;
    }
    return userRole;
  };

  const askNewOperation = () => {
    const answerQuestion = confirm(
      "¿Le gustaría realizar alguna otra operación?"
    );
    if (answerQuestion === true) {
      return true;
    } else {
      alert(
        `« Gracias por utilizar los servicios de Airlines McCarran »\n« Esperamos que haya tenido una experiencia satisfactoria. » \n«  ¡Que tenga un buen día!  »`
      );
    }
    return answerQuestion;
  };

  const airlinesMcCarran = () => {
    getName();
    getFlightsOfTheDay();
    getAverageCost();
    getLayoverFlights();
    getLastFlights();

    let keepOperating = true;

    while (keepOperating) {
      getRole();
      keepOperating = askNewOperation();
    }
  };
  airlinesMcCarran();
}
