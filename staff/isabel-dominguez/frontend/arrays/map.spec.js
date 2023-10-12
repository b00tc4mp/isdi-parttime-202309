console.log('TEST map')
console.log('***********************************************************************************************')

var a = [1, 4, 9, 16]

console.log('CASE map array [1, 4, 9, 16] to new array with elements multiplied by 2 in the console')

var mappedArray = map(a, function (x) { return x * 2 })
console.log(mappedArray);

console.log('CASE map array [1, 4, 9, 16] to new array with elements multiplied by 5 in the console')

var mappedArray = map(a, function (x) { return x * 5 })
console.log(mappedArray);

console.log('CASE map array [1, 4, 9, 16] to new array with elements divided by 2 in the console')

var mappedArray = map(a, function (x) { return x / 2 })
console.log(mappedArray);