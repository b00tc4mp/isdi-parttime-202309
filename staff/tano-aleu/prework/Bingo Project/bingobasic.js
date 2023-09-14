let userName
let bingoCard = []
let firstLine = []
let secondLine = []
let thirdLine = []
let check = []
let checkNum = []
let newBingoCard = false
let numbersOfTurn = 0
let retry
let oneTimeLine = true
const usersScore = []
let totalPoints
const scoreTable = {
  '-20': 100,
  '21-30': 80,
  '31-40': 60,
  '41-50': 50,
  '51-60': 40,
  '+61': 20
}

function showScore () {
  console.log('Sistema de puntuación:')
  for (const prop in scoreTable) {
    console.log(`${prop + ' intentos' + ' = ' + scoreTable[prop] + ' puntos'}`)
  }
}

function welcome () {
  while (!userName) {
    userName = window.prompt('!Bienvenido al Bingo!, ¿Cuál es tu nombre?')
  }
  const start = window.confirm(`Bienvenido ${userName}, ¿quieres ver el sistema de puntuación antes de empezar?`)
  if (start) {
    showScore()

    window.confirm('El sistema de puntuación se basa en el número total de intentos para completar el bingo, a menor número de intentos mejor puntuación. Pulsa Aceptar cuando estes listo!')
  }
}

function showNumbers () {
  bingoCard.sort((a, b) => a.number - b.number)

  bingoCard.forEach((num, i) => {
    if (i < 5) {
      firstLine.push(bingoCard[i].number)
    } else if (i > 4 && i < 10) {
      secondLine.push(bingoCard[i].number)
    } else {
      thirdLine.push(bingoCard[i].number)
    }
  })

  const info = `${newBingoCard ? 'Esta es tu nueva tarjeta de Bingo:' : 'Esta es tu tarjeta de Bingo:'}`
  console.log(info)
  console.log('*************************************')
  console.log(`Primera linea ${firstLine.join('--')} `)
  console.log(`Segunda linea ${secondLine.join('--')} `)
  console.log(`Tercera linea ${thirdLine.join('--')} `)
  console.log('*************************************')

  const confirmUser = window.confirm("¿Quieres comenzar?  'confirmar' para comenzar o 'cancelar' si quieres otra tarjeta ")
  if (!confirmUser) {
    check = []
    firstLine = []
    secondLine = []
    thirdLine = []
    bingoCard = [
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      // next line
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },

      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false },
      { number: getRandomInt(1, 90), matched: false }
    ]
    newBingoCard = true
    return showNumbers()
  }
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  const number = Math.floor(Math.random() * (max - min) + min)

  if (!check.some(num => num === number)) {
    check.push(number)
    return number
  }
  if (check.some(num => num === number)) {
    return getRandomInt(1, 90)
  }
}

function getRandomNumber (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  const number = Math.floor(Math.random() * (max - min) + min)

  if (!checkNum.some(num => num === number)) {
    checkNum.push(number)
    return number
  }
  if (checkNum.some(num => num === number)) {
    return getRandomNumber(1, 90)
  }
}

function turn () {
  numbersOfTurn++
  const randomNumber = getRandomNumber(1, 90)
  let success
  firstLine = []
  secondLine = []
  thirdLine = []

  console.log(`Ha salido el número ${randomNumber}`)

  bingoCard.forEach((current, i) => {
    if (current.number === randomNumber) {
      current.matched = true
      current.number = 'X'
      success = true

      if (i < 5) {
        firstLine.push(current.number)
      } else if (i > 4 && i < 10) {
        secondLine.push(current.number)
      } else {
        thirdLine.push(current.number)
      }
    } else {
      if (i < 5) {
        firstLine.push(current.number)
      } else if (i > 4 && i < 10) {
        secondLine.push(current.number)
      } else {
        thirdLine.push(current.number)
      }
    }
  })

  const line1 = firstLine.every(num => num === 'X')
  const line2 = secondLine.every(num => num === 'X')
  const line3 = thirdLine.every(num => num === 'X')
  const bingo = line1 && line2 && line3
  console.log(firstLine.join('--'))
  console.log(secondLine.join('--'))
  console.log(thirdLine.join('--'))

  if (oneTimeLine) {
    if (line1 || line2 || line3) {
      console.log('HAS CONSEGUIDO LINEA!!!')
      oneTimeLine = false
    }
  }

  console.log(`${bingo ? 'BINGO!!!' : ''}`)

  if (bingo) {
    retry = window.confirm(`Enhorabuena por el BINGO! , numero de intentos: ${numbersOfTurn},
        Puntuacion: ${calculteScore()}, quieres ver el ranking?`)
    usersScore.push({ name: userName, score: totalPoints })
    usersScore.sort((a, b) => b.score - a.score)

    if (retry) {
      console.log('****** RANKING *******')
      usersScore.forEach((user) => {
        console.log(`Nombre: ${user.name} ---- Puntuación: ${user.score}`)
      })
    }
    if (!retry) return window.alert('Hasta pronto !!!')

    retry = window.confirm('Quieres volver a jugar?')
    if (retry) return startBingo()
  }

  const response = `${success ? 'Enhorabuena !! Tienes el numero ganador en tu tarjeta !' : 'Vaya... parece que no tienes el número'}  Continuar`

  const alertUser = window.confirm(response)

  if (!alertUser) return window.alert('Hasta pronto !!')
  if (alertUser) return turn()
}

function calculteScore () {
  if (numbersOfTurn <= 20) {
    totalPoints = scoreTable['-20']
  } else if (numbersOfTurn >= 21 && numbersOfTurn <= 30) {
    totalPoints = scoreTable['21-30']
  } else if (numbersOfTurn >= 31 && numbersOfTurn <= 40) {
    totalPoints = scoreTable['31-40']
  } else if (numbersOfTurn >= 41 && numbersOfTurn <= 50) {
    totalPoints = scoreTable['41-50']
  } else if (numbersOfTurn >= 51 && numbersOfTurn <= 60) {
    totalPoints = scoreTable['51-60']
  } else {
    totalPoints = scoreTable['+61']
  }
  return totalPoints
}

function startBingo () {
  userName = null
  firstLine = []
  secondLine = []
  thirdLine = []
  newBingoCard = false
  check = []
  checkNum = []
  numbersOfTurn = 0
  retry = false
  oneTimeLine = true
  totalPoints = 0

  bingoCard = [
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    // next line
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },

    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false },
    { number: getRandomInt(1, 90), matched: false }
  ]
  welcome()
  showNumbers()
  turn()
}

startBingo()