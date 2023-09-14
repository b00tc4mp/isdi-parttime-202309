let count = 0;
let maxCount = 20;
const reset = document.querySelector(`.reset`);
const further = document.querySelector(`.further`);
const less = document.querySelector(`.less`);
const counter = document.querySelector(`.counter`);


const Display = () => {
    counter.textContent = count;
}


const getReset = () => {
    count = 0;
    Display();
}


const getFurther = () => {
    if (count <= maxCount -1) {
        count++;
        Display();
    };
};


const getLess = () => {
    if (count >= 0 +1 ) {
        count--;
        Display();
    };
}


further.addEventListener(`click`, getFurther); 
less.addEventListener(`click`, getLess);
reset.addEventListener(`click`, getReset);

Display();