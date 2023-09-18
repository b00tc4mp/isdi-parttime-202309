let userName = ""
let numbers = []
let bomboNumbers = []
let points = 150
let turns = 0
let userPoints = 0
let ranking = []
let numberBombo = 0
let usedNumbers = []
let lastNumber = 0
let lineSinged = false
let cardLength = 15
ranked = false

const welcomeUser = () => {
    userName = prompt("Welcome to ISDI Coders Bingo. What's your name?", "")
    if (userName === "" || userName === null) {
        userName = "Anonymous Player"
    }
}

const gameRules = () => {
    alert((`Ok ${userName}, here are the rules of the game:
    - You start with 150 points
    - Each turn you will lose 1
    - The maximum score you can get is 100 points.`))
}

const fillBombo = () => {
    for (let i = 1; i <= 100; i++)
        bomboNumbers.push(i)
    bomboNumbers.sort((a, b) => { return a - b; })
}

const generateNumbers = (numbers) => {
    let newNumber = Math.floor(Math.random() * 101);
    if (newNumber === 0) {
        generateCard()
    } else if (!numbers.includes(newNumber)) {
        numbers.push(newNumber)
    }
}

const generateCard = () => {
    console.log(userName + ", this is your Card:");
    while (numbers.length < cardLength) {
        generateNumbers(numbers);
    }
    numbers.sort((a, b) => { return a - b; })

    alert("Printing your numbers on your card.")
    console.log(`${numbers[0]} , ${numbers[1]} , ${numbers[2]} , ${numbers[3]} , ${numbers[4]}`)
    console.log(`${numbers[5]} , ${numbers[6]} , ${numbers[7]} , ${numbers[8]} , ${numbers[9]}`)
    console.log(`${numbers[10]} , ${numbers[11]} , ${numbers[12]} , ${numbers[13]} , ${numbers[14]}`)
    console.log("<<<<<><><><><><><><>>>>>")

    let confirmation = confirm("Accept to use this card or cancel to receive a new one.")

    if (confirmation === false) {
        restartCard()
        generateCard()
    } else {
        alert("This is your Card. The game starts!")
    }
}

const restartCard = () => {
    numbers.splice(0, numbers.length)
}

const restartBombo = () => {
    bomboNumbers.splice(0, bomboNumbers.length)
}

const singLine = () => {
    console.log("¡LINE!")
}

const playTurn = () => {
    let i = confirm("Do you want to start a new shift?")
    if (i === true) {
        getNumberFromBombo()
        compareNumber()
    } else {
        exitGame()
    }
}

const getNumberFromBombo = () => {
    let i = Math.floor(Math.random() * bomboNumbers.length)
    lastNumber = bomboNumbers[i]
    bomboNumbers.splice(i, 1)
}

const putMarkOnCard = () => {
    for (let i = 0; i < numbers.length; i++) {
        if (lastNumber === numbers[i]) {
            numbers.splice(i, 1, "X")
        }
    }
}

const singBingo = () => {
    console.log("¡BINGO!")
    countPoints()
}

const checkIfMarked = (currentValue) => currentValue === "X";

const compareNumber = () => {
    console.log(`Turn: ${turns} - There are ${bomboNumbers.length} numbers left on the Drum.`)
    console.log(`The number ${lastNumber} has been output.`)
    if (numbers.includes(lastNumber)) {
        console.log("Number matches! Crossing out number!")
        putMarkOnCard()
        console.log(`${numbers[0]} , ${numbers[1]} , ${numbers[2]} , ${numbers[3]} , ${numbers[4]}`)
        console.log(`${numbers[5]} , ${numbers[6]} , ${numbers[7]} , ${numbers[8]} , ${numbers[9]}`)
        console.log(`${numbers[10]} , ${numbers[11]} , ${numbers[12]} , ${numbers[13]} , ${numbers[14]}`)
        console.log("<<<<<><><><><><><><>>>>>")
        console.log("<<<<<><>MATCHED!<><>>>>>")
        console.log("<<<<<><><><><><><><>>>>>")
        if (lineSinged === false) {
            if (numbers.slice(0, 5).every(checkIfMarked)) {
                singLine()
                lineSinged = true
            } else if (numbers.slice(5, 10).every(checkIfMarked)) {
                singLine()
                lineSinged = true
            } else if (numbers.slice(10, 15).every(checkIfMarked)) {
                singLine()
                lineSinged = true
            }
        }

        if (numbers.every(checkIfMarked)) {
            singBingo()
        } else {
            countTurn()
            playTurn()
        }

    } else {
        console.log("The number does not match, waiting for the next number")
        console.log(`${numbers[0]} , ${numbers[1]} , ${numbers[2]} , ${numbers[3]} , ${numbers[4]}`)
        console.log(`${numbers[5]} , ${numbers[6]} , ${numbers[7]} , ${numbers[8]} , ${numbers[9]}`)
        console.log(`${numbers[10]} , ${numbers[11]} , ${numbers[12]} , ${numbers[13]} , ${numbers[14]}`)
        console.log("///////////////////////////////")
        countTurn()
        playTurn()
    }
}

const countTurn = () => {
    turns = turns + 1
    return turns
}

const countPoints = () => {
    userPoints = 0
    userPoints = points - turns
    console.log(`You have made ${userPoints} points.`)
    insertUserInRanking()
}

const insertUserInRanking = () => {
    ranking.push({ name: userName, points: userPoints },)
    ranking.sort((a, b) => b.points - a.points)
    showRanking()
}

const showRanking = () => {
    console.log(`This is the ranking of points:`)
    for (i = 0; i < ranking.length; i++) {
        console.log(`
${i + 1}: ${ranking[i].name}...........${ranking[i].points}`)
    }
    playAgain()
}

const exitGame = () => {
    alert("Thank you very much for playing ISDI Coders Bingo!")
}

const playAgain = () => {
    let i = confirm("Do you want to play again?")
    if (i === true) {
        restartCard()
        restartBombo()
        turns = 0
        lineSinged = false
        bingo()
    } else {
        exitGame()
    }
}

const playBingo = () => {
    welcomeUser()
    gameRules()
    fillBombo()
    generateCard()
    playTurn()
}

playBingo()