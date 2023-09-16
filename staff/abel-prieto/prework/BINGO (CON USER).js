let getUserName = '';               
let randomNumber = 0;              
let anotherRandomNumber = 0;       
let bingoCard = [];                
let repeatNumber = [];              
let cardLength = 15;               
let turn = 0;                       
let score = 50;                     
let totalScore = [];                
let validImput = false;             
let checkLine = false;              
let letsContinue = true;            
let ranking = [];                   


const getGreetings = () => {
    alert('🎲 ¡Bienvenid@s al CODER Bingo! 🎲');
    getUserName = prompt('Por favor, introduzca el nombre del jugador: ');
    if (getUserName === '') {
        alert('Nombre de usuario no válido. Intentalo otra vez');
        getGreetings();
        return;
    };
    alert(`¡Hola, ${getUserName.toUpperCase()}! Comenzamos con el Bingo en 3... 2... 1...!`);
    alert('ATENCIÓN: Reglas en pantalla.');
    getRules();
    createCard();
    getCard();
};


const createCard = () => { 
    generateCard();
    alert('¡Cartón generado!')
};


const getRules = () => { 
    console.log(`                      📝   REGLAS   📝                       `);
    console.log('---------------------------------------------------------------');
    console.log('Empezamos con 100 Puntos. Por cada cartón sin anotar, se restarán 3 puntos por turno y por cada número acertado, sumará 10 puntos.')
    console.log('Al acertar los 5 números se cantará LÍNEA, sumaremos 30 puntos (20 de Línea y 10 de bola).')
    console.log('Una vez hecho BINGO, aparecerá la puntuación TOTAL obtenida.')
    console.log('Máximo 40 turnos por BINGO.')
    console.log('---------------------------------------------------------------');
};


const getCard = () => { 
    let chooseCard = prompt('¿Desea utilizar este cartón? Escriba YES para comenzar con éste, NO para generar otro nuevo o EXIT para salir');
    switch(chooseCard) {
        case 'YES':
            playBingo();
            break
        case 'NO':
            removeNumbers();
            createCard();
            getCard();
            break
        case 'EXIT':
            isExit();
            break
        default:
            alert('Error 404: Not Found! Por favor, introduzca YES, NO o Exit');
            getCard();
    };
};
 

const getRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    return
};


const getAnotherRandomNumber = () => { 
    anotherRandomNumber = Math.floor(Math.random() * 50) + 1;

    while(repeatNumber.includes(anotherRandomNumber)) {
        anotherRandomNumber = Math.floor(Math.random() * 50) + 1;
    };

    repeatNumber.push(anotherRandomNumber);
};


const generateCard = () => { 
    for (let i = 0; i < cardLength; i++) {
        getRandomNumber();

        while (bingoCard.includes(randomNumber)) {
            getRandomNumber();
        };

        bingoCard.push(randomNumber);
        bingoCard.sort((a, b) => { return a - b; })
    };
    console.log(`| ${bingoCard[0]} | ${bingoCard[1]} | ${bingoCard[2]} | ${bingoCard[3]} | ${bingoCard[4]} |`);
    console.log(`| ${bingoCard[5]} | ${bingoCard[6]} | ${bingoCard[7]} | ${bingoCard[8]} | ${bingoCard[9]} |`);
    console.log(`| ${bingoCard[10]} | ${bingoCard[11]} | ${bingoCard[12]} | ${bingoCard[13]} | ${bingoCard[14]} |`);
    console.log('---------------------------------------------------------------');
};


const removeNumbers = () => { 
    bingoCard.splice(0, bingoCard.length); 
};


const restartTurn = () => {
    turn = 0;
    score = 50;
    totalScore.splice(0, totalScore.length);
    repeatNumber.splice(0, repeatNumber.length);
};


const playBingo = () => {
    getLine();  
    getBingo(); 
    getTurns(); 
    totalScore.push(score);
    console.log(`Turno Nº: ${turn}          🎰   B|I|N|G|O   🎰         Puntos: ${score} `);
    console.log('---------------------------------------------------------------');
    console.log(`| ${bingoCard[0]} | ${bingoCard[1]} | ${bingoCard[2]} | ${bingoCard[3]} | ${bingoCard[4]} |`);
    console.log(`| ${bingoCard[5]} | ${bingoCard[6]} | ${bingoCard[7]} | ${bingoCard[8]} | ${bingoCard[9]} |`);
    console.log(`| ${bingoCard[10]} | ${bingoCard[11]} | ${bingoCard[12]} | ${bingoCard[13]} | ${bingoCard[14]} |`);
    console.log('---------------------------------------------------------------');
    getAnotherRandomNumber();
    
    while (!validImput && letsContinue) { 
        let anotherCard = prompt(`¿Está la bola |${anotherRandomNumber}| en el cartón? Indique (S) de SI para tachar con una 'X', (N) de NO para una nueva tirada o EXIT para salir`);
        switch(anotherCard) {
            case 'S':
                if (!bingoCard.includes(anotherRandomNumber)) {
                    alert('Revise su cartón otra vez...');
                    validImput = false;
                } else {
                    getScore();
                    newCard();
                    playBingo();
                    validImput = true;
                };
                break
            case 'N':
                if (bingoCard.includes(anotherRandomNumber)) {
                    alert('Revise su cartón otra vez...');
                    validImput = false;
                } else {
                    getScore();
                    playBingo();
                    validImput = true;
                };
                break
            case 'EXIT':
                isExit();
                validImput = true;
                break
            default:
                alert('Error 404: Not Found! Por favor, introduzca S, N o EXIT');
        };
    };
};


const newCard = () => { 
    let indexReplace = bingoCard.findIndex(number => number === anotherRandomNumber);
    bingoCard.splice(indexReplace, 1, 'X');
    alert('¡Número tachado!');
};


const getTurns = () => {
    turn += 1;
};


const getScore = () => { 
    score -= 3;
    if (bingoCard.includes(anotherRandomNumber)) {
        score += 13;
    };
};


const stateGeneralCondition = (currentValue) => currentValue === 'X'; 


const getLine = () => { 
    if (checkLine === false) {
        if (bingoCard.slice(0, 5).every(stateGeneralCondition)) {
            score += 20
            singLine();
            checkLine = true;
        } else if (bingoCard.slice(5, 10).every(stateGeneralCondition)) {
            score += 20
            singLine();
            checkLine = true;
        } else if (bingoCard.slice(10, 15).every(stateGeneralCondition)) {
            score += 20
            singLine();
            checkLine = true;
        };
    };
};


const singLine = () => {
    alert('¡LINEA! + 30 PUNTOS');
};


const getBingo = () => { 
    if (bingoCard.every(stateGeneralCondition)) {
        alert('¡Enhorabuena! ¡Ha cantado BINGO!');
        getShowRanking();
        isExit();
    };
};


const getShowRanking = () => {
    ranking.push({name : getUserName, turns : turn, score : totalScore.slice(-1)});
    ranking.sort((a, b) => b.score - a.score);
    console.log(`                    🏆   RANKING   🏆                       `);
    console.log('---------------------------------------------------------------');
    for (i = 0; i < ranking.length; i++) {
        console.log(`${i + 1}º || Usuario: ${ranking[i].name} || Turnos: ${ranking[i].turns} || Puntuación total: ${ranking[i].score}`);
    };
    console.log('---------------------------------------------------------------');
};


const isExit = () => { 
    let playAgain = prompt('¿Desea volver a JUGAR otro Bingo o quiere SALIR del juego?');
    switch(playAgain) {
        case "JUGAR":
            restartTurn();
            removeNumbers();
            getGreetings();
            break
        case "SALIR":
            letsContinue = false; 
            alert(`¡Hasta la próxima, ${getUserName.toUpperCase()}! 👋`);
            break
        default: 
            alert('Error 404: Not Found! Por favor, introduzca JUGAR o SALIR');
            isExit();
    };
};


getGreetings();