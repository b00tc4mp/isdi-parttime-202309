const getNumbers = () => {
    const response = prompt(`Enter your numbers separated by commas`);
    const list = response.split(",");
    const numbersList = [];
    for (let item of list) {
        const number = +item;

        if (isNaN(number)) {
            alert(`${item} is not a number, please try again`)
            return getNumbers();
        } else {
            numbersList.push(number);
            console.log(`Your number is ${number}`);
        }
    }
    return numbersList;
}

const to3Decimals = (number) => {
    return number.toFixed(3)
}

const squareRoot = (number) => {

    const result = to3Decimals(Math.sqrt(number));
    return `The square root of the number you entered is:${result} `;

}

const guessToContinue = () => {
    if (confirm(`Do you want to do more operations?`)) {
        getNumbers();
    } else {
        alert(`It had been a pleasure, see you soon`)
    }
}

const sum = () => {
    let total = 0;

    for (let number of numbersList) {
        const result = number;
        total += result;
    }
    return total;
}

const subst = () => {
    let total = 0;

    for (let number of numbersList) {
        const result = number;
        total -= result;
    }
    return total;
}

const mult = () => {
    let total = 0;

    for (let number of numbersList) {
        const result = number
        total * result;
    }
    return total;
} // esta no funciona

const div = () => {
    let total = 0;

    for (let number of numbersList) {
        const result = number
        total /= result;
    }
    return total;
} // esta no funciona

const calculator = () => {
    alert(`Hello, start calculating!`);
    const numbers = getNumbers();
    const results = [];

    if (numbers.length === 1) {
        results.push(squareRoot(numbers[0]));
    } else {
        results.push(sum(...numbers));
        results.push(subst(...numbers));
        results.push(mult(...numbers));
        results.push(div(...numbers));
    }
    console.log(results.join(".\n"))
}

