let display = document.querySelector(".current-result");
let result = 0;
let nextNumber = 0;
let clearDisplay = false;
let firstNumber = true;
let lastOperator = '';

const clearResult = () => {
    display.textContent = 0;
    result = 0;
    firstNumber = true;
    clearDisplay = true;
} ;

const changeSign = () => {
    if (display.textContent[0] === '-'){
        display.textContent = display.textContent.slice(1) ;
    } else {
        display.textContent = '-' + display.textContent ;
    } ;    
} ;

const getNextDigit = (button) => {
    let buttonValue = button.value ;
    if (display.textContent.length <= 7){
        if (display.textContent === "0" || clearDisplay) {
            display.textContent = buttonValue ;
            clearDisplay = false ;
        } else {
            display.textContent += buttonValue ;
            } ;
        } ;
} ;

const getNextDot = (button) => {
    if (display.textContent.length <= 7){
        if (!display.textContent.includes('.')) {
        display.textContent += button.textContent ;
        clearDisplay = false ;
        } ;
    } ;
} ;

const getNextNumber = () => {
    nextNumber = parseFloat(display.textContent) ;
    return nextNumber ;
} ;

const addNumber = (button) => {
    if (firstNumber) {
        result = 0 ;
        nextNumber = getNextNumber() ;
        lastOperator = button.textContent ;
    } else {
        nextNumber = getNextNumber() ;
    } ;
    updateResult() ;
    lastOperator = button.textContent ;
    firstNumber = false ;
    clearDisplay = true ;
} ;

const multiplyNumber = (button) => {   
    if (firstNumber){
        result = 1 ; 
        nextNumber = getNextNumber() ;
        lastOperator = button.textContent ;
    } else {
        nextNumber = getNextNumber() ;
    } ;
    updateResult() ;
    lastOperator = button.textContent ;
    firstNumber = false ;
    clearDisplay = true ;
} ;

const divideNumber = (button) => {
    if (firstNumber){        
        nextNumber = getNextNumber() ;
        result = nextNumber * nextNumber ;
        lastOperator = button.textContent ;
    } else {
        nextNumber = getNextNumber() ;
    } ; 
    updateResult() ;
    lastOperator = button.textContent ; 
    firstNumber = false ;
    clearDisplay = true ;
} ;

const substractNumber = (button) => {
    if (firstNumber){     
        nextNumber = getNextNumber() ;
        result = nextNumber * 2 ;
        lastOperator = button.textContent ;
    } else {
        nextNumber = getNextNumber() ;
    } ;
    updateResult() ;
    lastOperator = button.textContent ;
    firstNumber = false ;
    clearDisplay = true ;
} ;

const getPercentage = (button) => {
    lastOperator = button.textContent ;
    display.textContent = parseFloat(display.textContent / 100) ;
} ;

const getResult = () => {
    nextNumber = parseFloat(display.textContent) ;
    updateResult() ;
    firstNumber = true ;
} ;

const adjustLengthOfResult = (result) => {
    if (result.toString().length>8) {
        result = parseFloat(result.toString().slice(0, 7));
    } ;
    clearDisplay = true ;
    return result ;
} ;

const showResultOnDisplay = () => {
    display.textContent = adjustLengthOfResult(result);
} ;

const updateResult = () => {
    (lastOperator) {
         'x':
            result *= nextNumber ;
            showResultOnDisplay();
            break ;
         '/':
            if (nextNumber === 0) {
                display.textContent = 'ERR' ;
                result = 0 ;
            } else {
                result /= nextNumber
            } ;
            break ;
         '+':
            result += nextNumber ;
            showResultOnDisplay();
            break ;
         '-':
            result -= nextNumber ;
            showResultOnDisplay();
            break ;
    } ; 
} ;