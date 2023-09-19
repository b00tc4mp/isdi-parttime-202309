let getNumber = '';
let getUserName = '';
let getListNumbers = [];


getUserName = prompt('Introduce tu nombre: ')
alert(`¡Bienvenido a la CODER Calculadora, ${getUserName.toUpperCase()}!`);


const getFirstNumber = () => {
    getNumber = parseFloat(prompt('Introduzca un número:  '));
    if (isNaN(getNumber) || getNumber === '') {
        alert('Por favor, ingrese un número válido');
        getFirstNumber();
        return;
    };
    getListNumbers.push(getNumber);
    getAnotherNumbers();
};


const getAnotherNumbers = () => {
    let getAnotherNumber = confirm('Pulse ACEPTAR si desea introducir otro número o CANCELAR para calcular SOLO la raíz cuadrada del número indicado anteriormente');
    if (getAnotherNumber === true) {
        getRestNumbers();
    } else {
        getSquareRoot();
    };
};


const getRestNumbers = () => {
    getNumber = parseFloat(prompt('Introduzca otro número:  '));
    if (isNaN(getNumber) || getNumber === '') {
        alert('Por favor, ingrese un número válido');
        getRestNumbers();
        return;
    };
    getListNumbers.push(getNumber);
    let askMoreNumbers = confirm('Pulse ACEPTAR para añadir más números o CANCELAR para realizar los cálculos con los números dados')
    if (askMoreNumbers === true) {
        getRestNumbers();
        return;
    } else {
        getCalculator();
    };
};


const getCalculator = () =>{

    alert('Recalculando operaciones... ¡Imprimiendo soluciones!')
    
    console.log('                    🧮   CALCULADORA   🧮                  ');
    console.log('---------------------------------------------------------------');
    getSum();
    console.log('---------------------------------------------------------------');
    getRest();
    console.log('---------------------------------------------------------------');
    getMultiplier();
    console.log('---------------------------------------------------------------');
    getDivision();
    console.log('---------------------------------------------------------------');
    
    getAnotherOperation();
};


const getSquareRoot = () => {
    let doTheSquareRoot = Math.sqrt(getNumber);
    console.log('                    🧮   CALCULADORA   🧮                  ');
    console.log('---------------------------------------------------------------');
    console.log(`La RAIZ CUADRADA del número introducido es: ${doTheSquareRoot.toFixed(3)}`);
    console.log(`Lista: ${getListNumbers.join('|')}`);
    console.log('---------------------------------------------------------------');
    getAnotherOperation();
};


const getSum = () => {
    let totalSum = 0;
    for (let number of getListNumbers) {
        totalSum += parseFloat(number);
    };
    console.log(`La suma es: ${totalSum.toFixed(3)}`);
    console.log(`Lista: ${getListNumbers.join('|')}`);
};


const getRest = () => {
    let totalRest = getListNumbers[0];
    for (let i = 1; i < getListNumbers.length; i++) {
        totalRest -= parseFloat(getListNumbers[i]);
    };
    console.log(`La resta es: ${totalRest.toFixed(3)}`);
    console.log(`Lista: ${getListNumbers.join('|')}`);
};


const getMultiplier = () => {
    let totalMultiplication = 1;
    for (let number of getListNumbers) {
        totalMultiplication *= parseFloat(number);
    };
    console.log(`La multiplicación es: ${totalMultiplication.toFixed(3)}`);
    console.log(`Lista: ${getListNumbers.join('|')}`);
};


const getDivision = () => {
    let totalDivision = getListNumbers[0];
    for (let i = 1; i < getListNumbers.length; i++) {
        totalDivision /= parseFloat(getListNumbers[i]);
    };
    console.log(`La división es: ${totalDivision.toFixed(3)}`);
    console.log(`Lista: ${getListNumbers.join('|')}`);
};


const getAnotherOperation = () => {
    let isAnotherOperation = confirm('Pulse ACEPTAR para más operaciones o CANCELAR para salir')
    if (isAnotherOperation === true) {
        getListNumbers.splice(0)
        getFirstNumber();
    } else {
        isExit();
    };
};


const isExit = () => {
    alert(`¡Hasta la próxima, ${getUserName.toUpperCase()}! 👋`);
};



getFirstNumber();