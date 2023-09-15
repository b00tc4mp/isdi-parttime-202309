let counter = 0;

const incrementButton = document.querySelector(".increment-button");
const decrementButton = document.querySelector(".decrement-button");
const restartButton = document.querySelector(".restart-button");

const counterInitNumber = document.querySelector(".counter-init");

incrementButton.addEventListener("click", () => {
    if (counter < 100){
        counter = counter + 1;
        counterInitNumber.textContent = counter;
    }
})


decrementButton.addEventListener("click", () => {

    if (counter > 0){
        counter = counter - 1;
        counterInitNumber.textContent = counter;
    }
 
})



restartButton.addEventListener("click", () => {
    counter = 0;
    counterInitNumber.textContent = counter;
})