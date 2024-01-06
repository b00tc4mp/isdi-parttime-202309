const maxNumber = 16;
const cardNumbers = [3, 6, 8, 11, 16];

const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * maxNumber);
    const randomNumber = randomIndex + 1;
    alert(`The random number is ${randomNumber}!`)
    return randomNumber;
};

const startNewTurn = (randomNumber) => {
    const index = cardNumbers.indexOf(randomNumber)
    if (index !== -1) {
        cardNumbers[index] = "X";
        console.table(cardNumbers);
    }
};

const askUserForNewAttempt = () => {
    return confirm(`Do you want another number?`)
};

const bingo = () => {

    alert(`Welcome to our game! Let's see your bingo card`);
    console.table(cardNumbers);
   let newAttempt;
   
   do {
    const randomNumber = getRandomNumber();
    startNewTurn(randomNumber);
    newAttempt = askUserForNewAttempt();
   } while ( newAttempt )
   alert(`See you soon`);
}; 