





/*
const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const usedNumbers = [];
const maximumNumbersToPlay = 5;
const cardNumbers = [3, 6, 8, 11, 16];

const getUserName = () => {
    const userName = prompt(`Hello! What's your name?`);

    if (!isString(userName)){
      alert ('Please, enter a valid name')
      return getUserName();
    }
    
    if (userName.length<3){
      alert('Please, enter a real name');
      return getUserName();
    }
    if (userName === "") {
      alert('You have to write a name');
      return getUserName();
    }
    return alert(`Welcome ${userName}! We're happy to see you!`);
};

const getRandomNumber = (possibleNumbers) => {
    const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
    const randomNumber = possibleNumbers[randomIndex];
    
    return randomNumber;
}

/*const printCardboard = () => {
    const cardNumbers = Math.floor(Math.random() * )
    if (cardNumbers.lentgh !== maximumNumbersToPlay)
    

 console.table(cardNumbers)
}

const startNewTurn = (randomNumber) => {
   for (let number of possibleNumbers) {
    if (cardNumbers.includes(randomNumber)) {
      randomNumber = "X";
      console.table(cardNumbers)
    }
   }  
}

const playBingo = () => {
    

    getRandomNumber();
    startNewTurn(randomNumber);
    askUserForNewAttempt();
}

*/