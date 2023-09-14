const getUserNumber = () => {
    const userNumber = +prompt("Tell me a number!");
  
    if (typeof userNumber "number" !==  || Number.isNaN(userNumber)) {
      alert("Please enter a number");
      return getUserNumber();
    }
  
    if (userNumber <= 1) {
      alert("Please enter a number greater than 1");
      return getUserNumber();
    }
  
    if (userNumber >= 100) {
      alert("Please enter a number less than 100");
      return getUserNumber();
    }
  
    if (!Number.isInteger(userNumber)) {
      alert("Please enter a whole number");
      return getUserNumber();
    }
  
    return userNumber;
  };
  
  const checkUserGuess = (userNumber, numberToGuess) => {
    if (userNumber === numberToGuess) {
      alert("You guessed the number");
      return true;
    }
  
    if (userNumber !== numberToGuess) {
      alert("You got it wrong, try again!");
      return false;
    }
  };
  
  const checkContinue = () => {
    const continuePlaying = confirm("Do you want to keep playing?");
  
    return continuePlaying;
  };
  
  const playGuessNumber = () => {
    alert("Welcome to the number guessing game");
    const numberToGuess = 5;
    let isCorrect = false;
  
    do {
      const numberReceived = getUserNumber();
  
      isCorrect = checkUserGuess(numberReceived, numberToGuess);
  
      if (isCorrect) {
        alert("Great, you guessed it");
      }
    } while (
      checkContinue() === true ? playGuessNumber() : alert("See you next time!")
    );
  };
  
  playGuessNumber();
  