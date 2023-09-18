const value = document.querySelector(".counter");
const addition = document.querySelector(".increase");
const subtract = document.querySelector(".decrease");
const reset = document.querySelector(".restart");
let number = 0;
const maxNumber = 10;

addition.addEventListener("click", () => {
  if (number < maxNumber) {
    number++;
    value.innerHTML = number;
  } else if (num >= maxNumber) {
    value.innerHTML = "MAX.";
  }
});

subtract.addEventListener("click", () => {
  if (number > 0) {
    number--;
    value.innerHTML = number;
  } else if (number <= 0) {
    value.innerHTML = 0;
  }
});

reset.addEventListener("click", () => {
  number = 0;
  value.innerHTML = number;
});
