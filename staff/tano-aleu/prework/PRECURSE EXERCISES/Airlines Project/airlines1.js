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

const runCodersAirlinesApp = () => {
    getUserName ();
};

const getUserName = () => {
    const userName = prompt('Welcome to Coders Airlines, what is your name?');
    
    if (userName === null) {
        alert('See you soon.');
        return;
    }
    
    if (userName.length < 2) {
        alert('Your name must contain at least 2 characters. Please try again.');
        return getUserName();
    }
    
    if (!isNaN(userName)) {
        alert('A name cannot be made up of numbers. Please try again.');
        return getUserName();
    }

    console.log(`Hi ${userName}`);
    userFriendlyFlightInfo(flights);
};

const userFriendlyFlightInfo = (flights) => {
    for (let i = 0; i < flights.length; i++) {
        const layoverStatus = flights[i].layover ? "does have a layover" : "does not have a layover";
        console.log(`Flight number ${flights[i].id} to ${flights[i].to} 
        from ${flights[i].from} costs ${flights[i].cost} and ${layoverStatus}.`);
    }
    
    getAverageFlightCost();
};

const getAverageFlightCost = () => {
    let totalCostFlights = 0;
  
    for (let i = 0; i < flights.length; i++) {
        totalCostFlights += flights[i].cost;
    }
    
    const averageCost = totalCostFlights / flights.length;
    console.log(`The average flight cost is ${averageCost}.`);
    getNumberofLayovers();
};

const getNumberofLayovers = () => {
    let totalNumberofLayovers = 0;
    
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].layover) {
            totalNumberofLayovers++;
        }
    }
    
    console.log(`There are ${totalNumberofLayovers} flights with a layover.`);
    getLastFlights();
};

const getLastFlights = () => {
    const lastFlightDestinations = flights.slice(-5).map(flight => flight.to).join(', ');
    console.log(`The last flights of the day go to the following destinations: ${lastFlightDestinations}.`);
    checkIfAdminOrUser();
};

const checkIfAdminOrUser = () => {
    const userStatusQuestion = prompt('Are you a user or admin?');

    if (userStatusQuestion === null) {
        alert('See you soon.');
        return;
    }

    const userStatus = userStatusQuestion.toLowerCase();

    if (userStatus === 'user') {
        console.log('Hi User');
        searchForFlightByPrice();
    } else if (userStatus === 'admin') {
        console.log('Hi Admin person');
        showAdminPrivileges();
    } else {
        alert('Please choose Admin or User.');
        checkIfAdminOrUser();
    }
};

const showAdminPrivileges = () => {
    const selectAnAction = prompt('What would you like to do? Please select a number:\n1. Add a new flight\n2. Delete a flight\n3. View available flights');
    
    if (selectAnAction === null) {
        alert('See you soon.');
        return;
    }
    
    if (selectAnAction === '1') {
        addNewFlight();
    } else if (selectAnAction === '2') {
        deleteFlight();
    } else if (selectAnAction === '3') {
        userFriendlyFlightInfo(flights);
    } else {
        alert('You must select 1, 2, or 3.');
      
        return;
    }
};

const askAdminIfMoreActionsRequired = () => {
    const checkMoreActions = prompt('Would you like to do anything else? (Yes or No)');
    
    if (checkMoreActions === null) {
        alert('See you soon.');
        return;
    }
    
    const checkMoreActionsLowerCase = checkMoreActions.toLowerCase();
    
    if (checkMoreActionsLowerCase === 'yes') {
        checkIfAdminOrUser();
    } else if (checkMoreActionsLowerCase === 'no') {
        alert('See you soon!');
    }  
};

const addNewFlight = () => {
    if (flights.length >= 15) {
        alert('There can only be a maximum of 15 flights.');
        userFriendlyFlightInfo(flights);
        askAdminIfMoreActionsRequired();
    } else {
        const lastFlightOfArr = flights[flights.length - 1];
        const newFlightId = lastFlightOfArr.id + 1;
        


        let newDestination = ""; 

        while (newDestination === "" || !/^[a-zA-Z]+$/.test(newDestination)) {
            newDestination = prompt('What is the destination of the flight?');
            
            if (newDestination === "") {
                alert('Please give me a place.');
                
            } else if (!/^[a-zA-Z]+$/.test(newDestination)) {
                alert('Please enter only letters, no numbers or special characters.');
            
            }else if (newDestination === null) {
                alert('See you soon.');
                return; 
            }
        }

        
        let newFlightFrom = "";
        
        while (newFlightFrom === "" || !/^[a-zA-Z]+$/.test(newFlightFrom)) {
           newFlightFrom = prompt('Where does it fly from?');
        
            if (newFlightFrom === "") {
               alert('Please give me a place.');
               
            } else if (!/^[a-zA-Z]+$/.test(newFlightFrom)) {
                alert('Please enter only letters, no numbers or special characters.');
            
            }else if (newFlightFrom === null) {
               alert('See you soon.');
               return;
            }
        }
        
        let newFlightCost = "";
        
        while (newFlightCost === "" || !/^\d+$/.test(newFlightCost)) {
            newFlightCost = prompt('How much does the flight cost?');
        
        
            if (newFlightCost === "") {
            alert('Please give me a costs.');
            
            }else if (!/^\d+$/.test(newFlightCost)) {
                alert('Please enter only numbers, no letters or special characters.');

            } else if (newFlightCost === null) {
              alert('See you soon.');
            return;
           }
        }
        
        let newFlightLayover = "";
        
        while (newFlightLayover === "") {
            newFlightLayover = prompt('Does the flight have a layover? (Yes or No)');
        
        if (newFlightLayover === "") {
            alert('Please try again, this information will be important for you.');

            }else if (newFlightLayover === null) {
              alert('See you soon.');
            return;
            }
        }
        
        const newFlight = {
            id: newFlightId,
            to: newDestination,
            from: newFlightFrom,
            cost: parseInt(newFlightCost),
            layover: newFlightLayover.toLowerCase() === 'yes'
        };
        
        flights.push(newFlight);
        userFriendlyFlightInfo(flights);
        
    }
};

const deleteFlight = () => {
    const getFlightId = prompt('Please provide ID number of flight you wish to delete');
    
    if (getFlightId === null) {
        alert('See you soon.');
        return;
    }
    
    const flightIdToDelete = parseInt(getFlightId);

    if (isNaN(flightIdToDelete) || flightIdToDelete < 0 || flightIdToDelete >= flights.length) {
        alert('Please enter a valid flight ID.');
        return deleteFlight();
    }

    let flightYouWishToDelete = -1;

    for (let i = 0; i < flights.length; i++) {
        if (flightIdToDelete === flights[i].id) {
            flightYouWishToDelete = i;
            break; 
        }
    }

    if (flightYouWishToDelete === -1) {
        alert('Sorry, that flight does not exist');
    } else {
        flights.splice(flightYouWishToDelete, 1);
        alert('Flight deleted correctly');
    }

    for (let i = flightYouWishToDelete; i < flights.length; i++) {
        flights[i].id--;
    }

    userFriendlyFlightInfo(flights);
};


const searchForFlightByPrice = () => {
    let getMaxPrice;

    do {
        getMaxPrice = prompt('What is the maximum amount you would like to pay for a flight? (Min. Price $90)');
        
        if (getMaxPrice === null) {
            alert('See you soon.');
            return;
        }

        if (parseInt(getMaxPrice) < 90) {
            alert('The minimum price is $90. Please enter a valid amount.');
        }
    } while (parseInt(getMaxPrice) < 90);

    const flightsMatchingPrice = [];

    for (let i = 0; i < flights.length; i++) {
        const flightPrice = flights[i].cost;
        if (flightPrice <= parseInt(getMaxPrice)) {
            flightsMatchingPrice.push(flights[i]);
        }
    }

    if (flightsMatchingPrice.length === 0) {
        alert('Sorry, there are no flights that match your criteria.');
    } else {
        console.log(`Flights that match your criteria (max price: ${getMaxPrice}):`);
        userFriendlyFlightInfo(flightsMatchingPrice);
    }
};

runCodersAirlinesApp();

