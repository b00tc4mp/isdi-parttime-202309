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
  
  
  
  const getName = () => {
    const name = prompt("Hello, what's your name?");
    if (name === null || name === ' ') {
      alert('Please type your name')
      return getName();
      }
  
    if (isNaN(name) === false) {
      alert('Your name must contain letters, Please try again')
      return getName()
    }
    alert(`Welcome ${name}. 👋`)
  }
  /*
  const askUserConfirm = () => {
    const userConfirm = confirm('Do you want to continue?')
    if (!userConfirm) {
      alert('Goodbye!');
    } else {
      getFlightInfo();
    }
  }
  */
  
  const getFlightInfo = () => {
    alert('Here are the available flights')
    console.log('Here are the available flights:')
    for (let i = 0; i < flights.length; i++) {
      if (!flights[i].layover) {
        console.log(`Flight number ${flights[i].id}: \n\nfrom ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost}€\n`)
      } else {
        console.log(`Flight number ${flights[i].id}: \n\nfrom ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost}€ and has a layover\n`)
      }
    }
  }
  
  const getAverageCost = () => {
    let totalCost = 0
    for (let i = 0; i < flights.length; i++) {
      totalCost += flights[i].cost
    }
    const averageCost = totalCost / flights.length
    alert(`The average cost per flight is ${averageCost}$.`);
  }
  
  const getLastFlights = () => {
    const lastFlights = flights.slice(-5);
    alert('The last 5 flights of the day are listed below');
    console.log("Last flights ID's:");
    for (let i = 0; i < lastFlights.length; i++) {
      console.log(`\nFlight number ${lastFlights[i].id} from ${lastFlights[i].from} to ${lastFlights[i].to}\n`)
    }
  }
  
  const askAdminOrUser = () => {
    const role = prompt('Are you an admin or an user? Type your role below'); 
    if (role.toLowerCase() === "admin") {
      adminFunctions();
    } else if (role.toLowerCase() === "user") {
      userFunctions();
    } else {
      alert("Please type admin or user");
      askAdminOrUser();
    }
  }
  
  
  const userFunctions = () => {
    const flightPrice = prompt("Type below your budget to look for suitable flights")
    if (isNaN(flightPrice) || flightPrice <= 0) {
      alert("Please enter a valid price");
      return userFunctions();
    } else {
      userSearchFlight(flightPrice);
    }
  }
  
  const userSearchFlight = (flightPrice) => {
    const suitableFlights = flights.filter((flight) => flight.cost <= flightPrice);
  
    if (suitableFlights.length === 0) {
      alert("There are no flights available for this price");
      return userFunctions();
    } else {
      alert("Available flights will be shown below");
      suitableFlights.forEach((flight) => {
        console.log(`Flight number ${flight.id} from ${flight.from} to ${flight.to} with a price of ${flight.cost}$.`);
      });
      return sayGoodbye();
    }
  }
  
  const userAskConfirm = () => {
    if(confirm("Do you want to search flights with another budget?")) {
      userFunctions();
    } else {
      sayGoodbye();
    }
  }
  
  const adminFunctions = () => {
    const askAction = prompt('You can either add a new flight or delete an existing one \nType "add" or "delete"')
    if (askAction.toLowerCase() === "add") {
      addAdminFlight();
    }
    if (askAction.toLowerCase() === "delete") {
      //deleteAdminFlight();
    } else {
      alert('Please type "add" or "delete"')
      adminFunctions()
    }
    
  }
  
  const getOriginFlight = () => {
    const from = prompt("Where does this flight come from");
    if (!isNaN(from)) {
      alert("Please enter a valid origin for the flight");
      return getOriginFlight();
    }
    return getDestinationFlight();
  }
  
  const getDestinationFlight = () => {
    const destination = prompt("Where is this flight headed to");
    if (!isNaN(destination)) {
      alert("Please enter a valid destination for the flight");
      return getDestinationFlight();
    }
    return getPriceFlight();
  }
  
  const getPriceFlight = () => {
    const price = prompt("How much does the flight cost");
    if (price > 0) {
      getLayoverFlight();
    } else {
      alert("You have to type a positive number")
      return getPriceFlight();
    }
  }
      
  const getLayoverFlight = () => {
    const layover = prompt('Does this flight have a layover? Type "yes" or "no"');
    if (layover.toLowerCase() === "yes") {
      return true;
    }
    if (layover.toLowerCase() === "no") {
      return false;
    } else {
        alert('You have to type "yes" or "no"');
        return getLayoverFlight();
      }
  }
  
  const getIdFlight = () => {
    let id = -1
    for (let i = 0; i < flights.length; i++) {
      const flight = flights[i]
      if (flight.id > id) {
        id = flight.id
      }
    }
    return (id + 1);
  }
  
  const addAdminFlight = () => {
    alert("You can't add more than 15 flights");
    if (flights.length > 15) {
      alert("You can't add more than 15 flights");
      return adminFunctions();
    }
    const newFlight = {
      from: getOriginFlight(),
      to: getDestinationFlight(),
      cost: getPriceFlight(),
      layover: getLayoverFlight(),
      id: getIdFlight(),
    }
    flights.push(newFlight);
    alert("A new flight has been added\nAll available flights will be shown below including the new one");
    console.log(getFlightInfo());
    sayGoodbye();
    return;
    
  }
  
  const sayGoodbye = () => {
    if (confirm(`Do you want to take any further action?`)) {
        askAdminOrUser();
    } else {
        alert(`See you soon! 👋`);
        return;
    }
  }
   = () => {
    getName();
    getFlightInfo();
    getAverageCost();
    getLastFlights();
    askAdminOrUser();
  
  }
  
  startScript();
  
  
   
  
  
  
  
  
  