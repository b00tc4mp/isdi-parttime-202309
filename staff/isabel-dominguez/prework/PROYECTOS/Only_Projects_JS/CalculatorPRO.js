let numberStore = [];

const getNumbers = () => {
    alert("🔹Welcome to the ISDI Coders calculator!");
    let newNumber;
    let addNumber = true;

    while (addNumber) {
        newNumber = parseFloat(prompt("Please enter a number:"));

        if (isNaN(newNumber)) {
            alert("Wrong value entered. Please enter a numeric value");
        } else {
            numberStore.push(newNumber);
        }

        addNumber = addNumbers();
    }
    return numberStore;
}

const addNumbers = () => {
    let addTwoNumber = confirm("Press <ACCEPT> to enter another number or <CANCEL> to exit");
    return addTwoNumber;
}

const getSquareRoot = () => {
    const squareRoot = Math.sqrt(numberStore);
    console.log(`The square root of the number entered is: ${squareRoot.toFixed(3)}`);
    console.log("****************************************************************************************************************************");
};

const getAddition = () => {
    let totalSum = 0;
    for (let number of numberStore) {
        totalSum += parseFloat(number);
    };
    console.log(`Sum result: ${totalSum.toFixed(3)}`);
    console.log("****************************************************************************************************************************");
};

const getSubtraction = () => {
    let totalRest = numberStore[0];
    for (let i = 1; i < numberStore.length; i++) {
        totalRest -= parseFloat(numberStore[i]);
    }
    console.log(`Rest result: ${totalRest.toFixed(3)}`);
    console.log("****************************************************************************************************************************");
};

const getMultiplication = () => {
    let totalMultiplication = 1;
    for (let number of numberStore) {
        totalMultiplication *= parseFloat(number);
    }
    console.log(`Multiplication result: ${totalMultiplication.toFixed(3)}`);
    console.log("****************************************************************************************************************************");
};

const getDivision = () => {
    let totalDivision = numberStore[0];
    for (let i = 1; i < numberStore.length; i++) {
        totalDivision /= parseFloat(numberStore[i]);
    }
    console.log(`Division result: ${totalDivision.toFixed(3)}`);
    console.log("****************************************************************************************************************************");
};

const getAnotherOperation = () => {
    let isAnotherOperation = confirm("Click ACCEPT for more operations or CANCEL to exit");
    if (isAnotherOperation === true) {
        deleteArray();
        getNumbers();
        getCalculator();
    } else {
        exitCalculator();
    }
};

const deleteArray = () => {
    deleteNumberStore = numberStore.splice(0, numberStore.length);
    return deleteNumberStore;
}

const exitCalculator = () => {
    alert("See you soon!👋");
}

const result = getNumbers();

const getCalculator = () => {
    switch (true) {
        case numberStore.length >= 2:
            console.log("Your numbers are ➡", result);
            getAddition();
            getSubtraction();
            getMultiplication();
            getDivision();
            getAnotherOperation();
            break;

        case numberStore.length < 2:
            console.log("Your numbers are ➡", result);
            getSquareRoot();
            getAnotherOperation();
            break;

        default:
            if (!isNaN(numberStore)) {
                alert("Please, enter a valid number");
            }
    }
}

getCalculator();



