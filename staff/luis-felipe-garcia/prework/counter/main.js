let counter = 0;
let counterUpdated = 0;
const limitCounter = 10;

const updateCounter = () => {
    counterUpdated = document.querySelector(".result");
    counterUpdated.textContent = counter;
  };

const increaseCounter = () => {
  if (counter < limitCounter) {
    counter += 1;
    updateCounter();
  }
}

const decreaseCounter = () => {
  if (counter != 0) {
    counter -= 1;
    updateCounter();
  }
}

const resetCounter = () => {
  counter = 0;
  updateCounter();
}

