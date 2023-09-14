const getUserNumber = () => {
    const userNumber = +prompt("Tell me a number between 1 and 100");
if (typeof userNumber !== "number" || Number.isNaN(userNumber)) {
    alert("Eso no es un número");
    return getUserNumber();
}
if (userNumber >= 100) {
    alert("Debe ser un número menor que 100");
    return getUserNumber();
}
if (userNumber <= 1){
    alert("Debe ser un número mayor que 1");
    return getUserNumber();
}
if (userNumber === ""){
    alert("Escribe un número, por favor");
    return getUserNumber();
}
if (!Number.isInteger(userNumber)) {
    alert("Debe ser un número entero");
    return getUserNumber();
}
return userNumber;
};

const checkUserGuess = (userNumber, numberToGuess) =>{
    if (userNumber === numberToGuess) {
        alert (`You guessed the number`);
        return true;
    }
    if (userNumber !== numberToGuess) {
        alert (`Ohhhh, you failed!`);
        return false;
    }
};
const checkContinue = ( ) => {
    const continuePlaying = confirm ("Do you want to keep playing");
    return continuePlaying
}
const playGuessNumber = () => {
    alert("Hello, welcome to our game!");
    const numberToGuess =  13;
    let isCorrect = false
do {
    const receivedNumber = getUserNumber();
    isCorrect = checkUserGuess(receivedNumber, numberToGuess);
if (isCorrect){
    alert("Great, you guessed it")
}
 } while (checkContinue()=== true ? getUserNumber(): alert("See you next time!"));

};

playGuessNumber();