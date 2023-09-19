// //Funcion que permita al usuario entre el 1 y el 10

// // seteamos un numero random entre 0 y 10. Para ello usamos el Math.ceil que redondea hacia arriba, y Math.random() que genera un numero random entre 0 y 1,
// //Despues, multiplicamos ese ese numero random *10 para tener un el numero final.

// // let randomNumber = 5;//Math.floor(Math.random() * 101);
// // parseInt(randomNumber);
// // console.log(typeof(randomNumber));
// // debugger;
// // const getUserNumber = () => {

// // let number = prompt("Whats your number?");
// // parseInt(number);
// // debugger;
// // if (number === randomNumber){

// //     alert("CONGRATULATIONS PUTA!");
// //     return;
// // }
// // if (number !== randomNumber){

// //     alert("FALASTE!");
// //     return;
// // }

// // return number;


// // };
// // getUserNumber();
// //MY CODE//


// const getUserNumber = () => {

// const userNumber = +prompt("Tell me your number!");

// //el numero del user es tipo number
// if(typeof userNumber !== "number" || Number.isNaN(userNumber)){

//     alert("WRONG NUMBER!");
//     return getUserNumber();

// };

// //numero menor que 1
// if(userNumber <= 1){
//     alert("WRONG NUMBER!");
//     return getUserNumber();

// };

// //numero mayor que 100 
// if (userNumber >= 100){
//     alert("WRONG NUMBER!");
//     return getUserNumber();

// };

// //number es integer
// if( !Number.isInteger(userNumber)){
//     alert("WRONG NUMBER!");
//     return getUserNumber();

// };
// return userNumber;

// };

// const compareNumbers = (userNumber, numberToGuess) => {

//     if (userNumber === numberToGuess){

//         alert("CONGRATS, YOU GUESS THE NUMBER!");
//     return true;
//     };

//     if (userNumber != numberToGuess){

//         alert("YOU FAIL!");
//         return false;
//     };


//     };

// const playGuessNumber = () => {
//     alert("Hello user! Wanna play a game?");

//     const numberToGuess = 5;
//     let isCorrect = false;

//     do{
//         const userNumber = getUserNumber();

//         isCorrect = compareNumbers(getUserNumber, numberToGuess);



//     }

//     isCorrect = compareNumbers(getUserNumber, numberToGuess);

//     alert("GOODBYE!");


// };
// playGuessNumber();
// //GUARDAS


// //que pongan letra
// //numero con decimales
// //numero que no este dentro del rango de 0 a 100
const getUserNumber = () => {
    const userNumber = +prompt("Tell me a number!");
    debugger;
    if (typeof userNumber !== "number" || Number.isNaN(userNumber)) {
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
      checkContinue() === true ? playEncrypted() : alert("See you next time!")
    );
  };

  playEncrypted();