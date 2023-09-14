let userName = "";
let cardNumber = [];
let bomboNumbers = [];
let lastNumber = 0;
let lineSinged = false;
let points = 1000;
let turns = 0;
let userPoints = 0;
let ranking = [];

const getUserName = () => {
    userName = prompt("¡Bienvenido al bingo de ISDI Coders!\nIngresa tu nombre y empieza a jugar ⬇️⬇️⬇️");
    if (userName === "" || userName === null) {
        console.log("Introduzca un nombre válido.");
    } else {
        userName = userName.toUpperCase();  
    }

    return userName;
};

const rulesGame = () => {
    alert(`¡Hola ${userName}! Comenzaremos el juego de Bingo. Pero antes te mostraré algunas normas:\n🔸 Cada jugador empieza con 1000 puntos.\n🔸 Por cada turno que no aciertes el número, se restan 10 puntos de los 1000 puntos iniciales. De está manera entre más turnos necesites para acabar, menos puntos obtendrás!\n🔸 Si haces línea obtendrás 100 puntos y cuando completes el cartón con un bingo obtendrás 500 puntos más.\n🔸 Al final, aparecerán los puntos de cada jugador.\n¡Mucha suerte!🙌😄`);
};


const getDrumNumbers = () => {
    for (let i = 1; i <= 90; i++)
        bomboNumbers.push(i)
    bomboNumbers.sort((a, b) => { return a - b; })
};

const generateNumbers = (cardNumber) => {
    let newNumber = Math.floor(Math.random() * 91);
    if (newNumber === 0) {
        generateCard()
    } else if (!cardNumber.includes(newNumber)) {
        cardNumber.push(newNumber)
    }
};

const generateCard = () => {
    while (cardNumber.length < 15) {
        generateNumbers(cardNumber);
    }
    cardNumber.sort((a, b) => { return a - b; })
    alert("Puedes visualizar tu cartón en consola! 👇");

    printCard();

    let confirmation = confirm("Dale clic en ACEPTAR para usar este cartón o CANCELAR para recibir uno nuevo.");
    if (confirmation === false) {
        restartCard();
        generateCard();
    } else {
        alert("¡Que empiece el juego!");
    }
};

const printCard = () => {
    console.log("********TU CARTÓN********");
    for (let i = 0; i < 3; i++) {
        const row = cardNumber.slice(i * 5, (i + 1) * 5);
        const formattedRow = row.map(number => number.toString().padStart(2, ' ')).join(' | ');
        console.log(`|${formattedRow}|`);
    }
    console.log("*************************");
};

const restartCard = () => {
    cardNumber.splice(0, cardNumber.length)
};


const restartBombo = () => {
    bomboNumbers.splice(0, bomboNumbers.length)
};

const getLine = () => {
    alert("¡LÍNEA! - Has conseguido 100 puntos!🎉🎉🎉");
    console.log("¡LÍNEA! - Has conseguido 100 puntos!🎉🎉🎉");
    userPoints += 100;
};

const getBingo = () => {
    alert("¡BINGO! - Has conseguido 500 puntos!🎉🎉🎉");
    console.log("¡BINGO! - Has conseguido 500 puntos!🎉🎉🎉");
    userPoints += 500;
    getPoints();
};

const newTurn = () => {
    let otherTurn = confirm("¿Quieres empezar un nuevo turno?")
    if (otherTurn === true) {
        getNumberBombo();
        checkCardBingo();
    } else {
        exitBingo();
    }
};

const getNumberBombo = () => {
    let i = Math.floor(Math.random() * bomboNumbers.length);
    lastNumber = bomboNumbers[i];
    bomboNumbers.splice(i, 1);
    countTurn();
};

const checkCard = () => {
    for (let i = 0; i < cardNumber.length; i++) {
        if (lastNumber === cardNumber[i]) {
            cardNumber.splice(i, 1, "X")
        }
    }
};

const countTurn = () => {
    turns = turns + 1
    return turns
};

const checkIfMarked = (currentValue) => currentValue === "X";

const checkCardBingo = () => {
    console.log(`Quedan ${bomboNumbers.length} números en el bombo.`);
    alert(`Turno: ${turns} : Ha aparecido el número ${lastNumber}`);

    if (cardNumber.includes(lastNumber)) {
        alert(`¡Encontraste el número ${lastNumber} en tu cartón!`);
        checkCard();
        printCard();

        if (!lineSinged) {
            if (
                cardNumber.slice(0, 5).every(checkIfMarked) ||
                cardNumber.slice(5, 10).every(checkIfMarked) ||
                cardNumber.slice(10, 15).every(checkIfMarked)
            ) {
                getLine();
                lineSinged = true;
            }
        }

        if (cardNumber.every(checkIfMarked)) {
            getBingo();
        } else {
            newTurn();
        }
    }
};

const getPoints = () => {
    userPoints = points - (turns * 10);
    console.log(`Has hecho ${userPoints} puntos.`);
    addUserRanking();
};

const addUserRanking = () => {
    ranking.push({ name: userName, points: userPoints },)
    ranking.sort((a, b) => b.points - a.points)
    showRanking();
};

const showRanking = () => {
    alert("Te muestro por consola el ranking de puntos 👇");
    for (i = 0; i < ranking.length; i++) {
        console.log(`🎲 ${i + 1}: ${ranking[i].name} ha conseguido: ${ranking[i].points}.`)
    }
    playAgain();
};

const exitBingo = () => {
    alert("¡Gracias por jugar! Hasta la próxima 🙌");
    return;
};

const playAgain = () => {
    let askUser = confirm("¿Quieres volver a jugar?")
    if (askUser === true) {
        restartCard();
        restartBombo();
        turns = 0;
        lineSinged = false;
        playBingo();
    } else {
        exitBingo();
    }
};

const playBingo = () => {
    getUserName();
    rulesGame();
    getDrumNumbers();
    generateCard();
    while (!cardNumber.every(checkIfMarked)) {
        newTurn();
    }
    showRanking();
};

playBingo();



