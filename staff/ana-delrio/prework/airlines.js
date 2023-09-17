let userName = ''
let totalCost = 0
let allLayoverFlights = 0
let allLastFlights = 0

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
  ]

const askUserName = () => {
    userName = prompt('Welcome! 😀 Enter your username to view the flights: ')
    if (userName === '') {
        alert('Mistake 404: Invalid username. Try again')
        return askUserName()
    } else {
        alert(`¡Hello ${userName.toUpperCase()}!   `)
    }
}
askUserName()

const showAllFlights = () => {
    alert(`These are all the flights we have available today on ISDI Airlines, ${userName.toUpperCase()}:`)
    console.log('                     ALL FLIGHTS                        ')
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            console.log(`The flight WITH layover with ID: ${flights[i].id}, of ORIGIN in ${flights[i].from} and DESTINATION in ${flights[i].to}, has a COST of ${flights[i].cost}€`)
        } else {
            console.log(`The DIRECT flight with ID: ${flights[i].id}, of ORIGIN in ${flights[i].from} and DESTINATION in ${flights[i].to}, has a COST of ${flights[i].cost}€`)
        }
    }
}
showAllFlights()

const getAverageCost = () => {
    for (i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost
    }
    let totalAverageCost = totalCost / flights.length
    alert(`Inform you that the average price of the flights available today is: ${totalAverageCost}€`)
}
getAverageCost()

const getLayoverFlights = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            allLayoverFlights = allLayoverFlights + 1
        }
    }
    alert(`We show you on screen the ${allLayoverFlights} flights of the day that make stopovers: `)
    console.log('                       WITH LAYOVER                       ')
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            console.log(`ID: ${flights[i].id}, of ORIGIN in ${flights[i].from} and DESTINATION in ${flights[i].to}, has a COST of ${flights[i].cost}€`)
        }
    }
}
getLayoverFlights()

const getLastFlights = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id > 5) {
            allLastFlights = allLastFlights + 1
        }
    }
    alert(`Finally, we indicate which are the last ${allLastFlights} flights of the day and their destinations: `)
    console.log('                       LAST FLIGHTS                      ')
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id > 5) {
            console.log(`El vuelo con ID: ${flights[i].id} tiene DESTINO en ${flights[i].to}`)
        }
    }
}
getLastFlights() 

let askRole = '';
let chooseAdmin = ''
let chooseUser = ''
let newTO = ''
let newFROM = ''
let newCOST = ''
let newLayover = ''
let maxFlights = 10
let removeOneFlight = ''
let costFlight = ''

const askAdminUser = () => {
    askRole = prompt('Please, tell us if you are ADMIN , USER, or if you want to EXIT the program')
    switch(askRole) {
        case "ADMIN":
            isAdmin()
            break
        case "USER": 
            isUser()
            break
        case "EXIT": 
            isExit()
            break
        default:
            alert('Mistake 404: Not Found! Please, enter ADMIN USER or EXIT')
            askAdminUser()
    }
}
askAdminUser()

const isAdmin = () => {
    alert(`ID: Welcome, ADMINISTRADOR `)
    chooseAdmin = prompt('Do you want to CREATE, DELETE any flight or EXIT?')
    switch(chooseAdmin) {
        case "CREATE":
            createFlights()
            break
        case "DELETE":
            deleteFlights()
            break
        case "EXIT":
            isExit()
            break
        default:
            alert('Mistake 404: Not Found! Please, enter CREATE, DELETE o EXIT')
            isAdmin()
    }
}
isAdmin()

const createFlights = () => {
    if (maxFlights === flights.length) {
        alert('We are sorry but you have reached the maximum number of created flights available...🙄')
        isAdmin()
        return
    }
    alert('Lets start by creating a new flight!')
    newFROM = prompt(`Flight Nº ${flights[flights.length - 1].id + 1}: Tell us what will be the ORIGIN of the new flight`)
    newTO = prompt(`Flight Nº ${flights[flights.length - 1].id + 1}: Now, choose your next DESTIONATION`)
    newCOST = prompt(`Flight Nº ${flights[flights.length - 1].id + 1}: Indicate the cost of your new flight`)
    newLayover = confirm(`The flight Nº ${flights[flights.length - 1].id + 1}  has a stopover (ACCEPT) or is a direct flight (CANCEL)?`)
    if (newLayover === true) {
        newLayover = true
    } else {
        newLayover = false
    }
    flights.push({ id : flights[flights.length - 1].id + 1, to : newTO, from : newFROM, cost : newCOST, layover : newLayover })
    alert('The created flight will appear on the screen!')
    console.log('Flight created! 😀 : ')
    if (newLayover === true) {
        console.log(`The Flight "CON ESCALA", with ID: ${flights[flights.length - 1].id}, of ORIGIN in ${newFROM} and DESTINATION in ${newTO}, has a COST of ${newCOST}€`)
    } else {
        console.log(`The Flight "CON ESCALA", with ID ${flights[flights.length - 1].id}, of ORIGIN in ${newFROM} and DESTINATION in ${newTO}, has a COST of ${newCOST}€`)
    }
    let anotherOperation = confirm('To CREATE another flight press "OK" or "CANCEL" to exit')
    if (anotherOperation === true) {
        createFlights()
    } else {
        isAdmin()
    }
}

const deleteFlights = () => {
    const validFlight = flights.map(flight => flight.id)
    removeOneFlight = parseInt(prompt(`Enter the ID of the flight you want to delete: `))
    if (isNaN(removeOneFlight) || removeOneFlight === '') {
        alert('Please, enter a valid flight ID.')
        deleteFlights()
        return;
    }
    if (!validFlight.includes(removeOneFlight)) {
        alert('The indicated flight does not exist, please enter one of the available flights')
        deleteFlights()
        return
    }
    const indexDelete = flights.findIndex(flight => flight.id === removeOneFlight)
    flights.splice(indexDelete, 1)
    alert(`The flight with the ID ${removeOneFlight} has been deleted`)
    showAllFlights()
    let continueRemoveFlights = confirm('To DELETE another flight press "OK" or "CANCEL" to EXIT')
    if (continueRemoveFlights === true) {
        deleteFlights()
    } else {
        isAdmin()
    }
}
const isUser = () => {
    alert(`ID: Welcome, USER 😀`)
    chooseUser = prompt('Do you want to SEARCH for a flight according to its price or EXIT?')
    switch(chooseUser) {
        case "SEARCH":
            shearchPrice()
            break
        case "EXIT":
            isExit()
            break
        default:
            alert('Error 404: Not Found! Please, enter SEARCH or EXIT')
            isUser()
    }
}

const shearchPrice = () => {
    costFlight = parseInt(prompt('Tell us an average price so we can find you a flight: '))
    if (costFlight === '' || isNaN(costFlight)) {
        alert('Please, enter an amount')
        shearchPrice()
        return
    }
    alert(`These are all the flights we have available at that price, ${userName.toUpperCase()} : `)
    console.log('                         PRICES                          ')
    
    for (i = 0; i < flights.length; i++) {
        if (costFlight >= flights[i].cost) {
            console.log(`The flight ${flights[i].from} - ${flights[i].to}, has a COST of ${flights[i].cost}€`)
        }
    }
    for (k = 0; k < flights.length; k++) {
        if (costFlight < 100) {
            console.log('We are sorry, but we do not have any flights available for that price.')
        }
    }
    let continueShearchFlights = confirm('To continue SEARCHING for more flights, press "OK" or "CANCEL" to EXIT')
    if (continueShearchFlights === true) {
        shearchPrice()
    } else {
        isUser()
    }
}

const isExit = () => {
    let sayExit = confirm('Press ACCEPT if you want to exit the program or CANCEL to carry out any other operation')
    if (sayExit === true) {
        alert(`GThank you for trusting ISDI Airlines. Until next time, ${userName.toUpperCase()}!`)
    } else {
        askAdminUser()
    }
}
askAdminUser()