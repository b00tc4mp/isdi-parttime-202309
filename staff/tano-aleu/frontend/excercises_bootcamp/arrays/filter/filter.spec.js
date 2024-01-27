console.log('TEST filter')
console.log('CASE filter array [1, 4, 9, 16] to new array with elements > 5 ')

var arrayToFilter = [1, 4, 9, 16];

// Pass a function to filter
var filteredArray = filter(arrayToFilter, isGreaterThan5);

function isGreaterThan5(x) {
    return x > 5
}

console.log(filteredArray);
// Expected output: Array [9, 16]

console.log('CASE filter array [1, 4, 9, 16] to new array with elements === 4 ')

var arrayToFilter = [1, 4, 9, 16];

// Pass a function to filter
var filteredArray = filter(arrayToFilter, isEqualThan4);

function isEqualThan4(x) {
    return x === 4
}

console.log(filteredArray);
// Expected output: Array [4]

console.log('CASE filter array [1, 4, 9, 16] to new array with elements === 90 ')

var arrayToFilter = [1, 4, 9, 16];

// Pass a function to filter
var filteredArray = filter(arrayToFilter, isEqualThan90);

function isEqualThan90(x) {
    return x === 90
}

console.log(filteredArray);
// Expected output: []