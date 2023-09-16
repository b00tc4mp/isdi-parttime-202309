const flights = [
  { id: '00', to: "New York", from: "Barcelona", cost: 700, layover: false },
  { id: '01', to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
  { id: '02', to: "Paris", from: "Barcelona", cost: 210, layover: false },
  { id: '03', to: "Rome", from: "Barcelona", cost: 150, layover: false },
  { id: '04', to: "London", from: "Madrid", cost: 200, layover: false },
  { id: '05', to: "Madrid", from: "Barcelona", cost: 90, layover: false },
  { id: '06', to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
  { id: '07', to: "Shanghai", from: "Barcelona", cost: 800, layover: true },
  { id: '08', to: "Sydney", from: "Barcelona", cost: 150, layover: true },
  { id: '09', to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

const getUserName = () => {
  
  const userName = prompt('What is your name?');
  if(userName === null) {
    alert('Sorry to see you go!');
    return
  }
  if(userName.length <2){
    alert('Your name must contain at least 2 characters. Please try again.');
    return getUserName();
  }
  if(isNaN(userName) === false){
    alert('A name cannot be made up of numbers. Please try again.');
    return getUserName()
  }
  
  console.log (`Hi ${userName}`)
  logUserFriendlyFlightInfo(flights);
}

const logUserFriendlyFlightInfo = (flights) => {
  for(let i=0; i<flights.length; i++) {
    if(!flights[i].layover) {
      console.log (`Flight number ${flights[i].id} from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} and does not have a layover.`)
    }
    if(flights[i].layover) {
      console.log (`Flight number ${flights[i].id} from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} and does have a layover.`)
    }
  }
  getAverageFlightCost();
}

const getAverageFlightCost = () => {
  let totalCostFlights = 0

  for(let i=0; i<flights.length; i++){
    totalCostFlights += Number(flights[i].cost);
  }
  console.log(`The average flight cost is ${totalCostFlights/flights.length}.`);
  getNumberofLayovers();
}


const getNumberofLayovers = () => {
  let totalNumberofLayovers = []
  for(let i=0; i<flights.length; i++){
   if(flights[i].layover) {
    totalNumberofLayovers.push(flights[i].layover)  
   }
  }
  console.log(`There are ${totalNumberofLayovers.length} flights with a layover.`);
  getLastFlights();
}


const getLastFlights = () => {
  let flightDestinations = [];
  for (let i =0; i<flights.length; i++){
    flightDestinations.push(flights[i].to);
  }
  const lastFlightsofDay = flightDestinations.slice(-5).join(', ')
  console.log(`The last flights of the day go to the following destinations: ${lastFlightsofDay}.`);
  checkIfAdminOrUser();
}


const checkIfAdminOrUser = () => {
  const userStatusQuestion = prompt('Are you a user or admin?');
  if(userStatusQuestion === null) {
    alert('Sorry to see you go!');
    return
  }
  const userStatus = userStatusQuestion.toLowerCase();
  if(userStatus !== 'admin' && userStatus !== 'user') {
    alert('Please choose Admin or User');
    checkIfAdminOrUser()
  }
  if(userStatus === 'user') {
    console.log('Hi User');
    searchForFlightByPrice();
  }
  if(userStatus === 'admin') {
    console.log('Hi Admin person');
    showAdminPrivileges()
  }
} 

const askAdminIfMoreActionsRequired = () => {
  const checkMoreActions = prompt('Would you like to do anything else? (Yes or No)');
  if(checkMoreActions === null) {
    alert('Sorry to see you go!')
    return
  }
    if (checkMoreActions.toLowerCase() === 'yes') {
      checkIfAdminOrUser()
    }
    if(checkMoreActions.toLowerCase() === 'no') {
      alert('See you soon!')
      return
    }
    if(!(checkMoreActions.toLowerCase() === 'yes' || checkMoreActions.toLowerCase() === 'no')) {
      askAdminIfMoreActionsRequired()
    }
}

const addNewFlight = () => {
  if(flights.length >= 15) {
    alert('There can only be a maximum of 15 flights')
    logUserFriendlyFlightInfo(flights)
    askAdminIfMoreActionsRequired()
  }
  
  const lastFlightOfArr = flights[flights.length-1];
  const lastFlightOfArrId = Number(lastFlightOfArr.id);
  const newDestination = prompt('What is the destination of the flight?');
  if(newDestination === null) {
    alert('Sorry to see you go!');
    return
  }
  const newFlightId = lastFlightOfArrId + 1;
  const newFlight = {id: newFlightId.toString(), to: newDestination};
  let newFlightFrom = prompt('Where does it fly from?');
  if(newFlightFrom === null) {
    alert('Sorry to see you go!');
    return
  }
  newFlight.from = newFlightFrom
  let newFlightCost = prompt('How much does the flight cost?');
  if(newFlightCost === null) {
    alert('Sorry to see you go!');
    return
  }
  newFlightCost = Number(newFlightCost);
  newFlight.cost = newFlightCost /// STUCK: returning Undefined
  newFlightLayover = prompt ('Does the flight have a layover? (Yes or No)');
  if(newFlightLayover === null) {
    alert('Sorry to see you go!');
    return
  }
  const newFlightLayoverLowerCase = newFlightLayover.toLowerCase()
  if (newFlightLayoverLowerCase === 'yes'){
    newFlight.layover = true;
  }
  if (newFlightLayoverLowerCase === 'no'){
    newFlight.layover = false;
  }
  flights.push(newFlight);
  for(let i=0; i<flights.length; i++) {
    if(!flights[i].layover) {
      console.log (`Flight number ${flights[i].id} from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} and does not have a layover.`)
    }
    if(flights[i].layover) {
      console.log (`Flight number ${flights[i].id} from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} and does have a layover.`)
    }
  }
  askAdminIfMoreActionsRequired()
}

const deleteFlight = () => {
  const getFlightId = prompt('Please provide ID number of flight you wish to delete');
  if(getFlightId === null) {
    alert('Sorry to see you go!');
    return
  }
  let flightYouWishToDelete = null

  for(let i=0; i<flights.length; i++){
    if(getFlightId === flights[i].id) {
      flightYouWishToDelete = flights[i].id;
    } 
  }

  if(flightYouWishToDelete === null) {
    alert('Sorry, that flight does not exist')
  } else {
    flights.splice(flightYouWishToDelete, 1)
    alert('Flight deleted correctly');
  }
  
  for(let i=0; i<flights.length; i++) {
    if(!flights[i].layover) {
      console.log (`Flight number ${flights[i].id} from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} and does not have a layover.`)
    }
    if(flights[i].layover) {
      console.log (`Flight number ${flights[i].id} from ${flights[i].from} to ${flights[i].to} costs ${flights[i].cost} and does have a layover.`)
    }
  }
  askAdminIfMoreActionsRequired()
}

const showAdminPrivileges = () => {
  const selectAnAction = prompt('What would you like to do? Please select a number:\n 1. Add a new flight \n 2. Delete a flight \n 3. View available flights');
  if(selectAnAction === null) {
    alert('Sorry to see you go!');
    return
  }

  if(selectAnAction === '1'){
    addNewFlight()
  }
  if(selectAnAction === '2') {
   deleteFlight()
  }
  if(selectAnAction === '3') {
   logUserFriendlyFlightInfo(flights)
   askAdminIfMoreActionsRequired()
  }
  if(!(selectAnAction === '1' || selectAnAction === '2' || selectAnAction === '3')){
    alert('You must select 1, 2 or 3');
    showAdminPrivileges()
  }
}

const searchForFlightByPrice = () => {
  const getMaxPrice = prompt('What is the maximum amount you would like to pay for a flight?')
  const flightsMatchingPrice = []
  
  if(getMaxPrice === null) {
    alert('Sorry to see you go!');
    return
  }
  for(i=0; i<flights.length; i++){
    const flightPrice = flights[i].cost;
    if(flightPrice <= getMaxPrice ) {
      flightsMatchingPrice.push(flights[i])
    }
  }
  
  if(flightsMatchingPrice.length === 0) {
    alert(`Sorry, there are no flights that match your criteria`)
    searchForFlightByPrice()
  }
  for(let i=0; i<flightsMatchingPrice.length; i++) {
    if(!flightsMatchingPrice[i].layover) {
      console.log (`Flight number ${flightsMatchingPrice[i].id} from ${flightsMatchingPrice[i].from} to ${flightsMatchingPrice[i].to} costs ${flightsMatchingPrice[i].cost} and does not have a layover.`)
    }
    if(flightsMatchingPrice[i].layover) {
      console.log (`Flight number ${flightsMatchingPrice[i].id} from ${flightsMatchingPrice[i].from} to ${flightsMatchingPrice[i].to} costs ${flightsMatchingPrice[i].cost} and does have a layover.`)
    }
  }
  askAdminIfMoreActionsRequired()
}


getUserName();
 




