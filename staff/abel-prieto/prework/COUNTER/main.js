let count = 0;          // VARIABLE CONTADOR
let maxCount = 20;      // LÍMITE MÁXIMO CONTADOR  


const countDisplay = document.querySelector('.counter'); // DEVUELVE LA CLASE EN '' INDICADO DEL HTML
const incrementButton = document.querySelector('.increase-button');
const decrementButton = document.querySelector('.decrease-buttom');
const resetButton = document.querySelector('.restart-butom');


const updateDisplay = () => {   // ACTUALIZA LA FUNCIÓN DEL CONTENIDO 'COUNT' DEL HTML
    countDisplay.textContent = count;
}


const getIncrement = () => {    // FUNCIÓN INCREMENTO
    if (count < maxCount) {
        count++;
        updateDisplay();
    } else {
        countDisplay.textContent = 'Limite'
    }
};


const getDecrement = () => {    // FUNCIÓN DECRECIMIENTO
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        countDisplay.textContent = 'Limite'
    }
}


const getReset = () => {        // FUNCIÓN REINICIO
    count = 0;
    updateDisplay();
}


incrementButton.addEventListener('click', getIncrement); 
decrementButton.addEventListener('click', getDecrement);
resetButton.addEventListener('click', getReset);


updateDisplay();

