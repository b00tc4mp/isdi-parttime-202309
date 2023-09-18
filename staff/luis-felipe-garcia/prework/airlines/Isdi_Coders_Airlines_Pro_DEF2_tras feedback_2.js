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
  
const welcomeToAirlines = () => {
    let userName = prompt('¡ Hola !. Bienvenid@ a Isdi Coders Airlines !!\nPor favor introduce tu nombre:');
    while (userName === '') {
        userName = prompt ('No has introducido nada. Por favor escribe tu nombre.')
    };
    alert('¡ Bienvenid@ ' + userName + ' !');
    return userName;
}; 

const showMeTheFlights = (userName) => {
    alert (`${userName}, en pantalla puedes ver los vuelos previstos para hoy :)`);
    let checkLayover = '';
    for (let flight = 0; flight <flights.length; flight++){
        checkLayover = translateLayover(flights[flight])
        console.log (`El vuelo con origen ${flights[flight].from} destino ${flights[flight].to} tiene un precio de ${flights[flight].cost} € y es ${checkLayover}.`)
    };
};

const translateLayover = (flight) => {
    let checkLayover = '';
    if (flight.layover === true){
        checkLayover = 'con escalas'
    } else {
        checkLayover = 'directo'
    } return checkLayover;
};

const showMeCostLayover = () => {
    console.log('\n\n');
    let sumCostFlights = 0;
    let sumLayover = 0;
    for (let flight = 0; flight < flights.length; flight++){
        sumCostFlights += flights[flight].cost
        if (flights[flight].layover === true){
            sumLayover  += 1
        };
    };
    alert((`\nUn par de datos que son útiles:\n\n*\   El coste medio de los vuelos de hoy es de ${(sumCostFlights / flights.length).toFixed(0)} €.\n** Hay ${sumLayover} vuelos con escalas. Se detallan en consola:`));
    console.log(`\nVuelos con escalas:`);
    for (let flight = 0; flight < flights.length; flight++){
        sumCostFlights += flights[flight].cost
        if (flights[flight].layover === true){
            console.log (`Id: ${flights[flight].id} - Origen: ${flights[flight].from} - Destino: ${flights[flight].to} - Precio: ${flights[flight].cost} €.`)
        };
    }; 
};

const showMeLastFlights = () => {
    alert('Te muestro a continuación los Id y destinos de los últimos 5 vuelos del día');
    console.log(`\nDestinos de los últimos vuelos de hoy:`);
    for (let vuelo = flights.length -5; vuelo <flights.length; vuelo++){
        console.log (`ID: ${flights[vuelo].id} To: ${flights[vuelo].to}`)
    };
};

const getUserType = () =>{
    let userType = '';
    const dictUserTypes = {
        A: 'Administrador',
        U: 'Usuario'
    };

    while ((userType in dictUserTypes) != true){
        userType = prompt ('Vayamos a tu interface personalizada !\nSelecciona si eres (A)dministrador o (U)suario').toUpperCase();
        if ((userType in dictUserTypes) != true) { 
        alert ('No has introducido un valor correcto. Pulsa "A" o "U"')
        };
    };

    alert (`Log in completado. Estás accediendo como ${dictUserTypes[userType]}`);
    return userType;
};

const getNewFlight = (flights) => {
    const _numberMaxFlights = 15;
    const meaningKeys = {
        'id': 'identificador',
        'to': 'destino',
        'from': 'aeropuerto de origen',
        'cost': 'precio',
        'layover': 'escalas'
    };
    
    let keyFlights =[];
    for (key of Object.keys(flights[0])){
        keyFlights.push(key)
    };

    let newFlightToRecord ={};
    if (flights.length < _numberMaxFlights){
        for (let i = 0; i < keyFlights.length; i++){
            if (keyFlights[i] === 'id') {
                newFlightToRecord[keyFlights[i]] = flights.length
            } else if (keyFlights[i] === 'cost') {
                newFlightToRecord[keyFlights[i]] = Number(prompt (`Introduce el ${meaningKeys[keyFlights[i]]} del nuevo vuelo: `))
                while (newFlightToRecord[keyFlights[i]] <= 0 || isNaN(newFlightToRecord[keyFlights[i]])) {
                    newFlightToRecord[keyFlights[i]] = Number(prompt (`Valor erróneo\nIntroduce el ${meaningKeys[keyFlights[i]]} del nuevo vuelo: `))
                } ;
            } else if (keyFlights[i] === 'layover') {
                let checkLayover = ''
                checkLayover = prompt (`¿Tiene escalas el vuelo ?: (S)i / (N)o`)
                while (checkLayover.toUpperCase() != 'S' && checkLayover.toUpperCase() != 'N'){
                    alert ('No has introducido un valor correcto.\nSeleccion S en el caso que tenga escalas o N en el contrario')
                    checkLayover = prompt (`Repitamos, ¿tiene escalas el vuelo ?: (S)i / (N)o`)
                };
                if (checkLayover.toUpperCase() === 'S'){
                    newFlightToRecord[keyFlights[i]] = Boolean(true)
                } else if (checkLayover.toUpperCase() === 'N'){
                    newFlightToRecord[keyFlights[i]] = Boolean(false)
                };
            } else {newFlightToRecord[keyFlights[i]] = prompt (`Introduce el ${meaningKeys[keyFlights[i]]} del nuevo vuelo: `);
            while (newFlightToRecord[keyFlights[i]].length === 0){
                newFlightToRecord[keyFlights[i]] = prompt (`Entrada incorrecta.\nIntroduce el ${meaningKeys[keyFlights[i]]} del nuevo vuelo: `)
            };
        };
    };

    flights.push(newFlightToRecord);
    alert(`Vuelo registrado. Puedes comprobarlo en la consola`);
    console.log(`\nQueda registrado el siguiente vuelo:`);
    checkLayover = translateLayover(flights[flights.length-1]);

    console.log (`Id: ${flights[flights.length-1].id} - Origen: ${flights[flights.length-1].from} - Destino: ${flights[flights.length-1].to} - Precio: ${flights[flights.length-1].cost} € - Vuelo ${checkLayover}.`);
    console.log(`\nVuelos activos:`);

    for (let flight = 0; flight < flights.length; flight++){
        let checkLayover = '';
        checkLayover = translateLayover(flights[flight]);
        console.log (`Id: ${flights[flight].id} - Origen: ${flights[flight].from} - Destino: ${flights[flight].to} - Precio: ${flights[flight].cost} € - Vuelo ${checkLayover}.`);
        };
    } else {
        alert(`Se ha excedido el número de vuelos (15)`)
    };
};

const deleteFlight = (flights) => {
    const flightIds = Object.values(flights).map(flight => flight.id);
    console.log(`\nId's de vuelos activos:\n${flightIds}`);

    let idToDelete = Number(prompt (`Introduce el id del vuelo a borrar.\nPuedes consultar los activos en la consola`));
    while (!(flightIds.includes(idToDelete))){
        idToDelete = Number(prompt (`Vuelo inexistente. Introduce un id de vuelo correcto`))
    };

    console.log(`\nVuelo borrado:`);
    checkLayover = translateLayover(flights[flights.length-1]);
    console.log (`Id: ${flights[flightIds.indexOf(idToDelete)].id} - Origen: ${flights[flightIds.indexOf(idToDelete)].from} - Destino: ${flights[flightIds.indexOf(idToDelete)].to} - Precio: ${flights[flightIds.indexOf(idToDelete)].cost} € - Vuelo ${checkLayover}.`);
    flights.splice(flightIds.indexOf(idToDelete),1);
    reorderFligthId();
 
    alert(`En la consola puedes ver el vuelo borrado y los que quedan activos:`);
    console.log('\nVuelos activos:');
    for (let flight = 0; flight < flights.length; flight++){
        checkLayover = translateLayover(flights[flight])
        console.log (`Id: ${flights[flight].id} - Origen: ${flights[flight].from} - Destino: ${flights[flight].to} - Precio: ${flights[flight].cost} € - Vuelo ${checkLayover}.`)
    };
};

const flightsUnderPrice = (flights) => {
    let indexUnderPriceFlights = [];
    let priceMax = Number(prompt ('Introduce el precio máximo por el que deseas buscar'));
    while (isNaN(priceMax) || priceMax.lebgth === 0) {
        priceMax = prompt (`El valor introducido no es correcto. Introduce el precio de búsqueda o "0" para salir`)
    };

    for (let i = 0; i < flights.length; i++){
        if (flights[i].cost <= priceMax){
            indexUnderPriceFlights.push(i)
        };
    };

    switch (true) {        
        case (priceMax === 0):
            break;
        case (indexUnderPriceFlights.length === 0):
            alert (`No existen vuelos por debajo de ${priceMax}. Hasta luego !!`);
            break;

        case (priceMax > 0):
            alert (`En la consola puedes ver los vuelos con un precio menor que ${priceMax}`);
            console.log(`\nVuelos con un precio igual o inferior a ${priceMax}:\n`);
            for (let i = 0; i < indexUnderPriceFlights.length; i++){
                checkLayover = translateLayover(flights[indexUnderPriceFlights[i]])
                console.log (`Id: ${flights[indexUnderPriceFlights[i]].id} - Origen: ${flights[indexUnderPriceFlights[i]].from} - Destino: ${flights[indexUnderPriceFlights[i]].to} - Precio: ${flights[indexUnderPriceFlights[i]].cost} € - Vuelo ${checkLayover}.`)
            };
    };                    
};

const reorderFligthId = () => {
    for (let flight = 0; flight < flights.length; flight++) {
        flights[flight].id = flight
    };
};

const generalInterface = () => {
    let userName = welcomeToAirlines();
    showMeTheFlights(userName);
    showMeCostLayover();
    showMeLastFlights();
    proInterface(userName);
};

const proInterface = (userName) => {
    let userType = getUserType();
    if (userType === 'A') {
        userInterfaceAdmin(userName);
    } else if (userType === 'U'){
        userInterfaceUser(userName);
    };
};

const userInterfaceAdmin = (userName) => {
    let selectOptionAdmin = prompt (`Selecciona una de las opciones disponibles:\n\n(A)lta de nuevo vuelo\n(B)orrar vuelo\n(S)alir`).toUpperCase();
    const optionsAdmin = ['A', 'B', 'S'];
    while (!(optionsAdmin.includes(selectOptionAdmin))){
        selectOptionAdmin = prompt ('Opción incorrecta. Opciones disponibles:\n\n(A)lta de nuevo vuelo\n(B)orrar vuelo\n(S)alir ').toUpperCase()
    };
    switch (selectOptionAdmin){
        case ('A'):
            getNewFlight(flights);
            break;
        case ('B'):
            deleteFlight(flights);
            break;
    };
    let exitOrContinue = confirm ('Pulsa aceptar para volver a la pantalla de inicio o cancelar para salir');
    if (exitOrContinue){        
        proInterface(userName);
    } else {
        alert (`¡¡ Hasta luego ${userName} !!`);
    };
};

const userInterfaceUser = (userName) => {
    let selectOptionUser = prompt (`Selecciona una de las opciones disponibles:\n\n(C)onsultar vuelos por debajo de un precio\n(S)alir`).toUpperCase();
    const optionsUser = ['C', 'S'];
    while (!(optionsUser.includes(selectOptionUser))){
        selectOptionUser = prompt ('Opción incorrecta. Opciones disponibles:\n\n(C)onsultar vuelos por debajo de un precio\n(S)alir').toUpperCase()
    };
    if (selectOptionUser === 'C'){
        flightsUnderPrice(flights);
    };
    let exitOrContinue = confirm ('Pulsa aceptar para volver a la pantalla de inicio o cancelar para salir');
    if (exitOrContinue){        
        proInterface(userName);
    } else {
        alert (`¡¡ Hasta luego ${userName} !!`);
    };
};

generalInterface();