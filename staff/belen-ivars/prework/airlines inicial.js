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

const isString = (param) => {
    return isNaN(+param);
}

const askUserContinue = () => {
    const userContinue = confirm(`Do you want to continue?`)
    if (!userContinue) {
        alert(`Okey, goodbye and thanks for your visit!`);
    }
    return userContinue;

}

const getUserName = () => {
    const userName = prompt(`Hello! What's your name?`);

    if (userName === null) {
        const userContinue = askUserContinue();
        if (userContinue) {
            return getUserName();
        } else {
            return false;
        }
    }
    if (!isString(userName)) {
        alert('Please, enter a valid name')
        return getUserName();
    }
    if (userName.length < 3) {
        alert('Please, enter a real name');
        return getUserName();
    }
    if (userName === "") {
        alert('You have to write a name');
        return getUserName();
    }
    alert(`Welcome ${userName}! We're happy to see you! Start looking which flights are available`);
    return userName;
};

const friendlyDisplay = (flights) => {
    console.log(`Let's see available flights`)
    for (let flight of flights) {
        const layover = flight.layover ? `with layover` : `without layover`;
        console.log(` Flight number: ${flight.id}:
        This flight is from ${flight.from} to ${flight.to}, costs ${flight.cost} euros and it's a flight ${layover}`);
    };
};

const getAverageCost = (flights) => {

    let totalCost = 0

    for (let flight of flights) {
        const cost = flight.cost;
        totalCost += cost;
    }

    const averageCost = (totalCost / flights.length)

    return console.log(`The average flight price is ${averageCost} euros`);
};

const filterFlightsByLayover = (flights) => {
    const flightsByLayover = flights.filter((flight) => flight.layover === true);
    console.log(`Only flights with layover will appear below.`)
    return friendlyDisplay(flightsByLayover);
}

const rememberLastFlights = (flights) => {
    const lastFlights = flights.slice(-5).map(f => `${f.to}`);
    console.log(`Let us remember the last flights that will go out today`) //, to ${lastFlights.join(", ")}`);
    console.log(friendlyDisplay(flights.slice(-5)));
};

const getVisitorStatus = () => {
    const response = prompt(`Are you ADMIN or USER?`);

    const visitorStatus = response ? response.toLowerCase() : "";

    if (visitorStatus === "admin" || visitorStatus === "user") {
        return visitorStatus
    } else {
        alert(`You may try one of them`);
        return getVisitorStatus();
    }
}

const displayFunctions = () => {

    const visitorStatus = getVisitorStatus();

    if (visitorStatus === "admin") {
        displayAdminFunctions();
    }
    if (visitorStatus === "user") {
        displayUserFunctions();
    };
};

const getAdminChoice = () => {
    let response;
    do {
        if (flights.length === 15) {
            response = prompt(`You can't add more flights because the limit is 15. Do you want to delete some flights? Write DELETE`);
        } else if (flights.length === 0) {
            response = prompt(`You can't delete any flights. Do you want to add some new flights? Write ADD to do it!`);
        } else {
            response = prompt(`Now you can choice what action to do:
      If you want to add a flight, write ADD;
      if you prefer to delete a flight, write DELETE,`);
        }
        response = response.toLowerCase();

    } while (!(response === "add" || response === "delete"))
    return response;
}

const displayAdminFunctions = () => {
    let choice = getAdminChoice();

    if (choice === "add") {
        addFlight();
    }
    if (choice === "delete") {
        deleteFlight();
    };
};

const getDestination = () => {
    const destination = prompt(`Where's the flight going to?`);
    if (!isString(destination)) {
        alert(`You may write where the flight goes.`);
        return getDestination();
    }
    return destination;
};

const getFrom = () => {
    const from = prompt(`Where's this flight comes from?`);
    if (!isString(from)) {
        alert(`You've to write where the flight comes from.`);
        return getFrom();
    }
    return from;
}

const getCost = () => {
    const price = +prompt(`How much is this flight?`);
    if (isString(price) || price <= 0) {
        alert(`Please, insert the cost of this flight,`);
        return getCost();
    }
    return price;
}

const getLayover = () => {
    const response = prompt(`Does this flight any layover? Answer 'yes' or 'no'`);
    const layover = response.toLowerCase()
    if (layover === "yes") {
        return true;
    }
    if (layover === "no") {
        return false;
    } else {
        alert(`You have to chosse yes or no`);
        return getLayover();
    };
};

const getId = () => {
    let maxId = -1;
    for (let flightPosition = 0; flightPosition < flights.length; flightPosition++) {
        const flight = flights[flightPosition]
        if (flight.id > maxId) {
            maxId = flight.id
        }
    }
    return (maxId + 1);
}


const updateIds = (flights) => {
    for (let flightPosition in flights) {
        flights[flightPosition].id = flightPosition;
    }
}

const addFlight = () => {
    alert(`Now, you can include some flights, but not more than 15!`);

    const flight = {
        to: getDestination(),
        from: getFrom(),
        cost: getCost(),
        layover: getLayover(),
        id: getId(),
    }

    flights.push(flight);
    
    alert(`The flight that comes from ${flight.from} to ${flight.to} has been added`);
    console.log(friendlyDisplay(flights));
    getFinalChoice();
}

const findFlightIndexById = (flights, id) => {
    let flightIndex = -1;
    for (let index = 0; index < flights.length; index++) {

        if (flights[index].id === id) {
            flightIndex = index
        }
    }
    return flightIndex;
}

const deleteFlight = () => {
    alert(`These are the flights availables`);
    friendlyDisplay(flights);

    const numberId = +prompt(`Now, you can eliminate some fligths by their order. What flight's number do you want to delete?`);

    const positionToDelete = findFlightIndexById(flights, numberId)
    if (positionToDelete > -1) {
        flights.splice(positionToDelete, 1);

        alert(`The flight number with the ID ${numberId} has been deleted. See what flights are still there`);
        updateIds(flights); 
        console.log(friendlyDisplay(flights));
    } else {
        alert(`The flight with the ID ${numberId} doesn't exist.`);
    }
    getFinalChoice();
};

const searchFlightsByBudget = (budget) => {

    const flightsByBudget = flights.filter((flight) => flight.cost <= budget);

    if (!flightsByBudget || flightsByBudget.length === 0) {
        alert(`Sorry, but there aren't flights for your budget`)
        getUserChoice();
    } else {
        friendlyDisplay(flightsByBudget);
        getUserChoice();
    }
}

const displayUserFunctions = () => {
    const budget = +prompt(`It's time to search your flight!
  What's your budget? Insert a number`)
    if (isNaN(budget) || budget <= 0) {
        alert(`Please, insert a number greater than 0`);
        return displayUserFunctions();
    } else {
        searchFlightsByBudget(budget);
    }
}

const getUserChoice = () => {

    if (confirm(`Do you want to search flights with another budget?`)) {
        displayUserFunctions();
    } else {
        getFinalChoice();
    }
};

const getFinalChoice = () => {
    if (confirm(`Do you want to do more actions?`)) {
        displayFunctions();
    } else {
        alert(`Thanks for your visit, see you soon!`);
    }
};

const startAirlinesProgram = () => {

    const userName = getUserName();

    if (userName) {
        friendlyDisplay(flights);
        getAverageCost(flights);
        filterFlightsByLayover(flights);
        rememberLastFlights(flights);
        displayFunctions();
    }

}

startAirlinesProgram()