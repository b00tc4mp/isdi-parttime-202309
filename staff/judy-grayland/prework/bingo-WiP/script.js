/* // create Scorecard alternative 

const bingoSpinner = [1,2,3,4,5,6];
const scorecard = []
const squaresInScoreCard = 5;

const createScorecard = (scorecard) => {
  while(scorecard.length<squaresInScoreCard){
    const randomIndex = Math.floor(Math.random() * bingoSpinner.length);
    console.log(randomIndex)
    let scorecardNumber = bingoSpinner[randomIndex]
    if(!scorecard.includes(scorecardNumber)){
      scorecard.push(scorecardNumber)
    }
  }
  console.log(scorecard)
}
createScorecard(scorecard)
*/


/*
0. get the game going => playBingo()
1. get player's name and ask if they want to play => startGame() and getUserName()
2. create scorecard with random numbers [jumbleNumbers()] and display it => createScoreboard()
3. draw a random number => drawNumber()
4. check if number on scorecard and replace with an x if it's there. Then ask player if they want the next number: checkIfNumberIsOnScoreboard()
5.

End game because no numbers left => endGameBlackout()
*/

const bingoNumbers = [1,2,3,4,5,6,7,8,9,10];
const scorecard = []


// Jumble up numbers
const jumbleNumbers = (array) => {
  for (let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

// Fill in scorecard
const createScorecard = (bingoNumbers, scorecard) => {
  const numbersToJumbleForScoreCard = bingoNumbers.map((number) => number);  
  const squaresInScoreCard = 5; 
  const scorecardNumbers = jumbleNumbers(numbersToJumbleForScoreCard);
  
  while(scorecard.length < squaresInScoreCard) {
    let scorecardNumber = scorecardNumbers.pop();
    scorecard.push(scorecardNumber);
  }
  return scorecard
}

// get player's name
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
  return userName 
}

//  Start the game: confirm the player wants to play
const startGame = () => {
  const usernames = getUserName();
  debugger
  if(!usernames) {
    return
  }
  const confirmation = confirm(`Hi ${usernames}! Are you ready to play bingo?`)
  if(!confirmation) {
    alert("Sorry to see you go!")
    return
  }
  createScorecard(bingoNumbers, scorecard);
  drawNumber();
}

// End the game: Strike 




// End the game: no numbers left on scoreboard
const endGameBlackout = () => {
  const confirmation  = confirm(`Congratulations! You\'ve got a blackout! 🎉 \nWould you like to play again?`)
  if(confirmation) {
    playBingo()
  }
  if(confirmation) {
    alert('Come back soon!')
  }
}

const calledNumbers = []

// spin bingospinner and draw a number
const drawNumber = () => {
  const numbersToJumbleForSpinner = bingoNumbers.map((number) => number);  
  const jumbledBingoSpinner = jumbleNumbers(numbersToJumbleForSpinner);
  const calledNumber = jumbledBingoSpinner.pop();
  calledNumbers.push(calledNumber);
  console.log(calledNumber)
}

//  check if drawn number is on scoreboard
// const checkIfNumberIsOnScoreboard =  () => {
//   const drawnNumber = drawNumber()
//   if (!scorecard.contains(drawnNumber)) {
//     confirm(`The number drawn is ${drawnNumber}. It\'s not on your scoreboard. Let\'s try again!`)
//     drawNumber()
//   }
//   if(confirm(`The number drawn is ${drawnNumber}. Do you want to draw another number?`)){
//     // function needed to replace number with an X
//     alert('excellent')
//   }
// }

const playBingo = () => {
 startGame()
}

playBingo()

 