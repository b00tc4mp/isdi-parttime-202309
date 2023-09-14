let newBall = Number()
let points = 1000
let counter = 0
let confirmCard = String()
let completedLines = [0, 0, 0]
let totalPoints = 1000
let players = []
let counterTrueBingo
let counterTrueLines


const pointsSystem = `A lo largo de la partida se van obteniendo puntos en base al siguiente sistema:
1.- Se parte de 1.000 puntos.
2.- En cada turno donde no se acierte un número en el cartón se restan 10 puntos.
3.- Al completar una línea se obtienen 10 * (90 - nº turno) puntos. Este sistema hace que
    se obtengan más cuanto antes se complete la línea.
4.- Al completar todo el cartón, 25 * (90 - nº turno).
En cada jugada se muestra la puntuación total, ganando la mayor.`


const getName = () => {
    let userName = ''
    userName = prompt('¡ Hola !. Bienvenid@ al Bingo de Isdi Coders !!\nPor favor introduce tu nombre:')

    while (userName === '') {
        userName = prompt ('No has introducido nada. Por favor escribe tu nombre.')
    }

    alert(`¡ Bienvenid@ ${userName} !\n${pointsSystem}`)
    return userName
} 


const loadBallDrum = () => {
    let ballDrum = []
    alert(`Llenando el bombo de los números\n`)

    for (i = 1; i <= 90; i++) {
        ballDrum.push(i)        
    } 

    console.log(`${ballDrum.slice(0,5)}...................${ballDrum.slice(-5,)}\n\n`)
    alert(`Bombo lleno.\n¡¡ Empecemos !!`)
    return ballDrum
}


const getRandomNumber = (min = 1, max = 90) => {
    let randomNumber = Math.floor(Math.random() * max + min)
    return randomNumber
}


const getNumbersToFeedBingoCard = () => {    
    let numbersToFeedBingoCard = []

    while (numbersToFeedBingoCard.length < 15) {
        number = getRandomNumber()
        if (numbersToFeedBingoCard.includes(number)) {
            continue
        } else {
         numbersToFeedBingoCard.push(number)
        }
    }

    numbersToFeedBingoCard = numbersToFeedBingoCard.sort((a,b) => {return a - b;})
    return numbersToFeedBingoCard
}


const feedBingoCard = () => {
    let bingoCard = [];

    for (i = 0; i < numbersToFeedBingoCard.length; i++){
        bingoCard.push({number : numbersToFeedBingoCard[i], matched : false})
        
    }

    return bingoCard
}


const showBingoCard = () => {
    let tableBingoCard = []
    let numbersOfBingoCard = []

    for (let i = 0; i < bingoCard.length; i++) {
        numbersOfBingoCard.push(bingoCard[i].number)
    }

    for (let i = 0; i < 3; i++ ) {
        tableBingoCard.push(numbersOfBingoCard.slice(i * 5, (i + 1) * 5))
    }

    console.table(tableBingoCard)
} 


const getIndexOfBall = () => {
    let indexOfBall = Number()
    indexOfBall = getRandomNumber(0, ballDrum.length)
    return indexOfBall
}


const getBall = (indexOfBall) => {
    let ballSelected = ballDrum[indexOfBall]
    return ballSelected
}


const playTheBall = (indexOfBall, ballSelected) => {
    counter += 1
    ballDrum.splice(indexOfBall, 1)
    let ballInTheCard = false

    for (let i = 0; i < bingoCard.length; i++){
        if (ballSelected === bingoCard[i].number){
            ballInTheCard = true
            totalPoints += 10
            alert (`¡ Número en la tarjeta !\nTachamos el ${ballSelected}`)
            bingoCard[i].number = 'X'
            bingoCard[i].matched = true
            showBingoCard()
        }
    }

    if (ballInTheCard === false) {
        console.log(`Turno: ${counter} - Bola: ${ballSelected} - No está en la tarjeta - Puntos totales: ${totalPoints}`)
        totalPoints -= 10
    }

    return ballInTheCard
} 


const checkLine = (numerOfLine) => {
    counterTrueBingo = 0
    counterTrueLines = 0
    let numberOfLinesCompleted = completedLines.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    if (numberOfLinesCompleted >= 2){
        for (let i = 0; i < 15; i++){
            if (bingoCard[i].matched === true){
                counterTrueBingo += 1
                if (counterTrueBingo === 15){
                    alert(`¡¡ BINGO !!\nHas conseguido ${50 * (90 - counter +1)} puntos adicionales`)
                    totalPoints += 25 * (90 - counter)
                    playAgain = 'no'
                }
            }
        }
    }

    if (counterTrueBingo != 15) {
        for (let i = numerOfLine * 5; i < (numerOfLine+1) * 5; i++) {
            if (bingoCard[i].matched === true){
                counterTrueLines += 1
                
                if (counterTrueLines === 5) {
                    completedLines[numerOfLine] = 1
                    counterTrueLines = 0
                    alert (`¡¡ LÍNEA !!\nHas conseguido ${10 * (90 - counter)} puntos adicionales`)
                    totalPoints += 10 * (100 - counter)
                }
            }
        }
    }

    return completedLines, counterTrueBingo
}


const continuePlaying = () => {
    let playAgain = prompt (`Teclea "si" para jugar otra vez.\nCualquier otra cosa para salir`).toLowerCase()
    counter = 0
    counterTrueBingo = 0
    counterTrueLines = 0
    completedLines = [0, 0, 0]
    totalPoints = 1000
    confirmCard = ''
    return playAgain
}


const showRanking = () => {
    alert (`En la consola puedes ver el ranking de jugadores`)

    for (i = 0; i < players.length; i++){
        console.log (`${i+1}.- ${players[i].player} - ${players[i].points} puntos.`)
    }
}

const playBingo = () => {
    let playAgain = 'Si'

    while (playAgain.toLowerCase() === 'si'){
        counterTrueBingo = 0

        userName = getName();
        ballDrum = loadBallDrum();
        getRandomNumber();

        while (confirmCard != 'si'){
            numbersToFeedBingoCard = getNumbersToFeedBingoCard();
            bingoCard = feedBingoCard()
            tableBingoCard = showBingoCard()
            confirmCard = prompt(`Escribe "Si" para jugar con este cartón\nEn caso contrario generaremos otro`).toLowerCase()
        }

        let indexOfBall = getIndexOfBall()
        let ballSelected = getBall(indexOfBall)
        
        while (counterTrueBingo != 15) {
            indexOfBall = getIndexOfBall()
            ballSelected = getBall(indexOfBall)
            playTheBall(indexOfBall, ballSelected)

            for (let i = 0; i < 3; i++) {
                if (completedLines[i] === 1) {
                    continue
                } else {
                    completedLines, counterTrueBingo = checkLine(i)
                }
            }

            if (!(confirm(`Pulsa Aceptar para continuar partida\nEscape o cancelar para salir`))){
                playAgain = 'no'
                break
            }          
        }
        
        if (playAgain.toLocaleLowerCase() === 'si') {
            alert(`Has completado el cartón en ${counter} turnos\nPuntos totales conseguidos: ${totalPoints}\n¡¡ Enhorabuena ${userName} !!`)
            players.push({player: userName, points: totalPoints})
            players.sort((a,b) => b.points - a.points)
            showRanking()
            playAgain = continuePlaying()
        } else {
            alert(`Partida cancelada.\n¡¡ Hasta la próxima ${userName} !!`)
        }
    }
}