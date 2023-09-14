/* const wordToGuess = "patatas";
/* const usedPositions= []; /* ---> no se puede mover a otra
posicion en el codigo por que se necesita todo el tiempo por 
que irá cambiando todo el tiempo*/

/*const charactersToGuess = [{
    letter:"p",
    isGuessed: false,
}];*/

const createCharactersToGuess = (word) =>
    word.split("").map((character) => ({
        letter: character,
        isGuessed: false,
    }));

const generateRandomLetter = (usedPositions) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";/* ---> 
    se puede cambiar de lugar porque el alfabeto 
    va ser el mismo todo el tiempo*/

    const randomNumber = Math.floor(Math.random() * alphabet.length);

    if (usedPositions.includes(randomNumber)) {
        return generateRandomLetter(usedPositions);
    }
    usedPositions.push(randomNumber);
    return alphabet.charAt(randomNumber);

};

const playWheelOfChance = () => {
    const usedPositions = [];
    const wordToGuess = "tanito";
    const charactersToGuess = createCharactersToGuess(wordToGuess);
    let isPlaying = true;
    let hasWon = false;

    alert("Hello! Welcome to the Game! ");

    do {
        isPlaying = confirm("Do you want a letter?");

        if (isPlaying) {
            const randomLetter = generateRandomLetter(usedPositions);
            alert(`Your letter is ${randomLetter}`);

            charactersToGuess.forEach((character) => {
              if (randomLetter === character.letter) {
                character.isGuessed = true;
              }
            });
            hasWon = charactersToGuess.every ((character) => 
            character.isGuessed);

            console.table(charactersToGuess);
        }
        } while (isPlaying && !hasWon);

        if (hasWon) {
            alert(`Congratulations! You won in ${usedPositions.length} rounds.`);

        }

        alert("Goodbye, see you soon!");
    };

    playWheelOfChance()
// createCharactersToGuess("Patatas")


/* SIN CONCATENACION ABAJO // CON CONCATENACION ARRIBA 
                   (funcionan igual)

const createCharactersToGuess = (word) => {
    const characters = word.split("");

   return characters.map((character) => {
        return {
         letter: character,
         isGuessed: false,
        };
    });
};
*/