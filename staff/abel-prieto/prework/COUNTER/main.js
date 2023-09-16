let count = 0;
let maxCount = 20;  


const countDisplay = document.querySelector('.counter');
const incrementButton = document.querySelector('.increase-button');
const decrementButton = document.querySelector('.decrease-buttom');
const resetButton = document.querySelector('.restart-butom');


const updateDisplay = () => {
    countDisplay.textContent = count;
}


const getIncrement = () => {
    if (count < maxCount) {
        count++;
        updateDisplay();
    } else {
        countDisplay.textContent = 'Limite'
    }
};


const getDecrement = () => {
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        countDisplay.textContent = 'Limite'
    }
}


const getReset = () => {
    count = 0;
    updateDisplay();
}


incrementButton.addEventListener('click', getIncrement); 
decrementButton.addEventListener('click', getDecrement);
resetButton.addEventListener('click', getReset);


updateDisplay();

