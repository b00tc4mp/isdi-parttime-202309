let number = document.querySelector(".output");
let btnIncrement = document.querySelector(".increment");
let btnDecrement = document.querySelector(".decrement");
let btnRestart = document.querySelector(".restart");

const increment = () => {
  number.textContent === "50" ? "" : number.textContent++;
};

const decrement = () => {
  number.textContent === "0" ? "" : number.textContent--;
};

const restart = () => {
  number.textContent = 0;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
btnRestart.addEventListener("click", restart);
