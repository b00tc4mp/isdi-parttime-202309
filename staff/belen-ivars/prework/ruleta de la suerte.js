const createCharactersToGuess = (word) =>
word.split("").map((character) => ({
    letter: character,
    isGuessed: false
  }))

const generateRandomLetter = (usedPositions) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const randomNumber = Math.floor(Math.random() * alphabet.length);

  if (usedPositions.includes(randomNumber)) {
   return generateRandomLetter(usedPositions); 
  }

  usedPositions.push(randomNumber)

  return alphabet.charAt(randomNumber)
}

const playWheelOfChance = () => {
  const wordToGuess = "ferrocarril";
  const usedPositions = []; 
  const charactersToGuess = createCharactersToGuess(wordToGuess);
  let isPlaying = true;
  let hasWon = false;
  
  alert(`Hello, welcome to our game!`);
  
  do {
    isPlaying = confirm("Do you want a letter?");

    if (isPlaying){
    const randomLetter = generateRandomLetter(usedPositions);
    alert(`Your letter is ${randomLetter}`);

    charactersToGuess.forEach((character) => {
      if (randomLetter === character.letter) {
        character.isGuessed = true;
      }
    })
    hasWon = charactersToGuess.every((character) => character.isGuessed
    
    );

    console.table(charactersToGuess);
    }

  } while (isPlaying && !hasWon);

  if (hasWon) {
    alert(`Congratulations, you won in ${usedPositions.length} rounds`)
  }

  alert(`Goodbye`)
}