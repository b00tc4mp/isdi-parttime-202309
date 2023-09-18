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
 const name = prompt ("Hello ¿What is your name?");
  if (isNaN(name) !== true) {
    alert ("Please enter a valid name");
    return getUserName();
 }
  if (name.length < 3) {
    alert ("Please enter a valid name");
    return getUserName();
 }
 if(name === "") {
    alert ("Please enter a valid name");
    return getUserName();
 }
 if (isNaN(name) === true) {
    alert ("Welcome, nice to see you again"); 
 };
  return name;
  
 };
    getUserName();

for (let i = 0; i < flights.length; i++) {
    if (flights[i].from === 0 && flights[i].to)
    console.log('El vuelo con origen', flights[i].from)
};
function FlightInfo(flight) {
   const layoverText = flight.layover ? "con escalas" : "sin escalas";
   console.log(
     `El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${layoverText}.`
   );
 }
 
 flights.forEach(FlightInfo);
 const totalCost = flights.reduce((sum, flight) => sum + flight.cost, 0);
const averageCost = totalCost / flights.length;
console.log(`El costo promedio de los vuelos es de ${averageCost.toFixed(2)}€.`);
const flightsWithLayovers = flights.filter((flight) => flight.layover === true);
const numberOfFlightsWithLayovers = flightsWithLayovers.length;
console.log(`Hay ${numberOfFlightsWithLayovers} vuelos que efectúan escalas.`);
const last5Flights = flights.slice(-5);
console.log("Los destinos de los últimos 5 vuelos del día son:");
last5Flights.forEach((flight) => {
  console.log(`- Destino: ${flight.to}`);
});
function displayFlightInfo(flight) {
   const layoverText = flight.layover ? "con escalas" : "sin escalas";
   console.log(
     `El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${layoverText}.`
   );
 }
 flights.forEach(displayFlightInfo);
 const userRole = prompt("Eres ADMIN o USER?").toUpperCase();
 function createFlight() {
   if (flights.length >= 10) {
     alert("No puedes agregar más vuelos, se ha alcanzado el límite");
   } else {
     const to = prompt("Introduce el destino:");
     const from = prompt("Introduce el origen:");
     const cost = parseInt(prompt("Introduce el costo:"));
     const layover = prompt("¿Tiene escalas? (Sí/No)").toUpperCase() === "SI";
 
     const newFlight = {
       id: flights.length,
       to,
       from,
       cost,
       layover,
     };
 
     flights.push(newFlight);
     console.log("Nuevo vuelo agregado");
   }
 }
 function deleteFlight() {
   const flightIdToDelete = parseInt(prompt("Introduce el ID del vuelo a eliminar:"));
   const indexToDelete = flights.findIndex((flight) => flight.id === flightIdToDelete);
 
   if (indexToDelete !== -1) {
     flights.splice(indexToDelete, 1);
     console.log("Vuelo eliminado");
   } else {
     console.log("No es un vuelo válido");
   }
 }
 function searchFlightsByPrice() {
   const maxPrice = parseInt(prompt("¿Cuál es el precio máximo que estás dispuesto a pagar?"));
 
   const matchingFlights = flights.filter((flight) => flight.cost <= maxPrice);
 
   if (matchingFlights.length > 0) {
     console.log("Vuelos con precio igual o menor al máximo:");
     matchingFlights.forEach(displayFlightInfo);
   } else {
     console.log("No hay vuelos disponibles dentro de ese valor");
   }
 }
 if (userRole === "ADMIN") {
   const adminAction = prompt("Selecciona una acción: (1) Crear vuelo, (2) Eliminar vuelo");
 
   switch (adminAction) {
     case "1":
       createFlight();
       break;
     case "2":
       deleteFlight();
       break;
     default:
       console.log("Acción no válida.");
   }
 } else if (userRole === "USER") {
   searchFlightsByPrice();
 } else {
   console.log("Rol no válido.");
 }
 