let userName = '';
let totalCost = 0;
let allLayoverFlights = 0;
let allLastFlights = 0;


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


const askUserName = () => {
    userName = prompt('¡Bienvenid@ CODER! Ingresa aquí tu nombre de usuario para visualizar los vuelos: ');
    if (userName === '') {
        alert('ERROR 404: Nombre de usuario no válido. Vuelva a intentarlo');
        return askUserName();
    } else {
        alert(`¡Bienvenido ${userName.toUpperCase()}! ✈️ Welcome to CODER Airlines ✈️`);
    };
};


askUserName();


const showAllFlights = () => {
    alert(`Estos son todos los vuelos que tenemos hoy disponibles en CODER Airlines, ${userName.toUpperCase()}:`);
    console.log('                  ✈️   ALL FLIGHTS   ✈️                       ');
    console.log('---------------------------------------------------------------');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            console.log(`El vuelo CON ESCALA con ID: ${flights[i].id}, de ORIGEN en ${flights[i].from} y DESTINO en ${flights[i].to}, tiene un COSTE de ${flights[i].cost}€`);
        } else {
            console.log(`El vuelo DIRECTO con ID: ${flights[i].id}, de ORIGEN en ${flights[i].from} y DESTINO en ${flights[i].to}, tiene un COSTE de ${flights[i].cost}€`);
        };
    };
    console.log('---------------------------------------------------------------');
};


showAllFlights();


const getAverageCost = () => {
    for (i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost;
    };
    let totalAverageCost = totalCost / flights.length;
    alert(`A modo informativo, comunicar que el precio medio de los vuelos disponibles en el día de hoy es: ${totalAverageCost}€`);
};


getAverageCost();


const getLayoverFlights = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            allLayoverFlights = allLayoverFlights + 1;
        };
    };
    alert(`A continuación, le mostraremos en pantalla los ${allLayoverFlights} vuelos del día que realizan ESCALAS: `);
    console.log('                  🏃   WITH LAYOVER   🏃                      ');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            console.log(`ID: ${flights[i].id}, de ORIGEN en ${flights[i].from} y DESTINO en ${flights[i].to}, con un COSTE de ${flights[i].cost}€`);
        };
    console.log('---------------------------------------------------------------');
    };
};


getLayoverFlights();


const getLastFlights = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id > 4) {
            allLastFlights = allLastFlights + 1;
        };
    };
    alert(`Por último, le indicamos cuáles son los últimos ${allLastFlights} vuelos del día y sus destinos: `);
    console.log('                 ⌛    LAST FLIGHTS    ⌛                      ');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id > 4) {
            console.log(`El vuelo con ID: ${flights[i].id} tiene DESTINO en ${flights[i].to}`);
        };
    };
    console.log('---------------------------------------------------------------');
};


getLastFlights(); 


let askRole = '';
let chooseAdmin = '';
let chooseUser = '';
let newTO = '';
let newFROM = '';
let newCOST = '';
let newLayover = '';
let maxFlights = 15;
let removeOneFlight = '';
let costFlight = '';


const askAdminUser = () => {
    askRole = prompt('Por favor, indíquenos si es ADMIN (🔒) o USER, (🙍️) o si desea SALIR del programa');
    switch(askRole) {
        case "ADMIN":
            isAdmin();
            break
        case "USER": 
            isUser();
            break
        case "SALIR": 
            isExit();
            break
        default:
            alert('Error 404: Not Found! Por favor, introduzca ADMIN USER o SALIR');
            askAdminUser();
    };
};


const isAdmin = () => {
    alert(`ID: Bienvenid@, 🔒 ADMINISTRADOR 🔒`)
    chooseAdmin = prompt('¿Desea CREAR, ELIMINAR algún vuelo o SALIR?');
    switch(chooseAdmin) {
        case "CREAR":
            createFlights();
            break
        case "ELIMINAR":
            deleteFlights();
            break
        case "SALIR":
            isExit();
            break
        default:
            alert('Error 404: Not Found! Por favor, introduzca CREAR, ELIMINAR o SALIR');
            isAdmin();
    };
};


const createFlights = () => {
    if (maxFlights === flights.length) {
        alert('Lo sentimos pero ha alcanzado el número máximo de vuelos creados disponibles...');
        isAdmin();
        return;
    };
    alert('¡Empecemos creando un nuevo vuelo!');
    newFROM = prompt(`Vuelo Nº ${flights[flights.length - 1].id + 1}: Indíquenos cuál va a ser el ORIGEN del nuevo vuelo`);
    newTO = prompt(`Vuelo Nº ${flights[flights.length - 1].id + 1}: Ahora, escoja su próximo DESTINO`);
    newCOST = prompt(`Vuelo Nº ${flights[flights.length - 1].id + 1}: Indique el coste de su nuevo vuelo`);
    newLayover = confirm(`¿El vuelo Nº ${flights[flights.length - 1].id + 1} tiene ESCALA (ACEPTAR) o es un vuelo directo (CANCELAR)?`);
    if (newLayover === true) {
        newLayover = true;
    } else {
        newLayover = false;
    };
    flights.push({ id : flights[flights.length - 1].id + 1, to : newTO, from : newFROM, cost : newCOST, layover : newLayover });
    alert('¡El vuelo creado saldrá en pantalla!');
    console.log('¡VUELO CREADO! ✅ : ');
    if (newLayover === true) {
        console.log(`El vuelo "CON ESCALA", con ID: ${flights[flights.length - 1].id}, de ORIGEN en ${newFROM} y DESTINO en ${newTO}, tiene un COSTE de ${newCOST}€`);
    } else {
        console.log(`El vuelo "SIN ESCALA", con ID: ${flights[flights.length - 1].id}, de ORIGEN en ${newFROM} y DESTINO en ${newTO}, tiene un COSTE de ${newCOST}€`);
    };
    console.log('---------------------------------------------------------------');
    let anotherOperation = confirm('Para CREAR otro vuelo pulse "ACEPTAR" o "CANCELAR" para salir');
    if (anotherOperation === true) {
        createFlights();
    } else {
        isAdmin();
    };
};


const deleteFlights = () => {
    const validFlight = flights.map(flight => flight.id);
    removeOneFlight = parseInt(prompt(`Introduce el ID del vuelo que deseas eliminar: `));
    if (isNaN(removeOneFlight) || removeOneFlight === '') {
        alert('Por favor, ingrese un ID de vuelo válido.');
        deleteFlights();
        return;
    };
    if (!validFlight.includes(removeOneFlight)) {
        alert('El vuelo indicado no existe, por favor, introduzca uno de los vuelos disponibles.');
        deleteFlights();
        return;
    };
    const indexDelete = flights.findIndex(flight => flight.id === removeOneFlight);
    flights.splice(indexDelete, 1);
    alert(`El vuelo con ID ${removeOneFlight} ha sido eliminado`);
    showAllFlights();
    let continueRemoveFlights = confirm('Para ELIMINAR otro vuelo pulse "ACEPTAR" o "CANCELAR" para SALIR');
    if (continueRemoveFlights === true) {
        deleteFlights();
    } else {
        isAdmin();
    };
};


const isUser = () => {
    alert(`ID: Bienvenid@, 🙍‍♂️ USUARIO 🙍‍♂️`);
    chooseUser = prompt('¿Desea BUSCAR algún vuelo según su precio o SALIR?')
    switch(chooseUser) {
        case "BUSCAR":
            shearchPrice();
            break
        case "SALIR":
            isExit();
            break
        default:
            alert('Error 404: Not Found! Por favor, introduzca BUSCAR o SALIR');
            isUser();
    };
};


const shearchPrice = () => {
    costFlight = parseInt(prompt('Indíquenos un precio medio para poderle buscar un vuelo: '));
    if (costFlight === '' || isNaN(costFlight)) {
        alert('Por favor, ingrese una cantidad');
        shearchPrice();
        return;
    };
    alert(`Estos son todos los vuelos que tenemos disponibles a ese precio, ${userName.toUpperCase()} : `);
    console.log('                      💵   PRICES   💵                       ');
    console.log('---------------------------------------------------------------');    
    for (i = 0; i < flights.length; i++) {
        if (costFlight >= flights[i].cost) {
            console.log(`El vuelo ${flights[i].from} - ${flights[i].to}, tiene un COSTE de ${flights[i].cost}€`);
        };
    };
    for (k = 0; k < flights.length; k++) {
        if (costFlight < 90) {
            console.log('Lo sentimos, pero no tenemos disponible ningún vuelo con ese precio.');
        };
    };
    console.log('---------------------------------------------------------------');
    let continueShearchFlights = confirm('Para seguir BUSCANDO más vuelos pulse "ACEPTAR" o "CANCELAR" para SALIR');
    if (continueShearchFlights === true) {
        shearchPrice();
    } else {
        isUser();
    };
};


const isExit = () => {
    let sayExit = confirm('Pulse ACEPTAR si desea salir del programa o CANCELAR para realizar alguna otra operación');
    if (sayExit === true) {
        alert(`Gracias por confiar en CODER Airlines. ¡Hasta la próxima, ${userName.toUpperCase()}! 👋`);
    } else {
        askAdminUser();
    };
};


askAdminUser();