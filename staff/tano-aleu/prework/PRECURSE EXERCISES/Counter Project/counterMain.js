let startValue = 0;
let countMax = 50;

const countElement = document.querySelector(`.counter`);
const incrementButton = document.querySelector(`.increment`);
const decrementButton = document.querySelector(`.decrement`);
const resetButton = document.querySelector(`.reset`);

const countDisplay = () => {
    countElement.textContent = startValue;
}

const getIncrement = () => {
    if (startValue <= countMax - 1) {
        startValue++;
        countDisplay();
    };
};

const getDecrement = () => {
    if (startValue >= 0 + 1) {
        startValue--;
        countDisplay();
    };
}

const getReset = () => {
    startValue = 0;
    countDisplay();
}

incrementButton.addEventListener(`click`, getIncrement);
decrementButton.addEventListener(`click`, getDecrement);
resetButton.addEventListener(`click`, getReset);

countDisplay();
