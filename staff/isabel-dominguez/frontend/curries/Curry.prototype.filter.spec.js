console.log('TEST Curry filter')
console.log("****************************************************************************************************************************************")

console.log('CASE filter "c = new Curry(10, 20, 30)" to new array with even elements ');

var c = new Curry(10, 20, 30);

function evenElements(element) {
    return element % 2 === 0;
}

var result = c.filter(evenElements);

console.log(result);
// Curry {0: 10, 1: 20, length: 2}