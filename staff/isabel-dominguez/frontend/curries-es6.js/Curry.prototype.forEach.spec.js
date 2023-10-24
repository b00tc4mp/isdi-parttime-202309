TEST(' Curry forEach')
console.log("****************************************************************************************************************************************")

CASE('for each element in [10, 20, 30] print it in the console')

let cForEach = new Curry(10, 20, 30)

function printElements(element) {
    console.log(element);
}

let result = cForEach.forEach(printElements)
console.log(result)
// 10, 20, 30


CASE('for each element in [10, 20, 30] print it multiplied by 10 in the console')

let cForEach = new Curry(10, 20, 30)

function multipliedElements(element) {
    console.log(element * 10);
}

let result = cForEach.forEach(multipliedElements)
console.log(result)
// 100, 200, 300


CASE('for each element in [10, 20, 30] print it divided by 2 ')

let cForEach = new Curry(10, 20, 30)

function dividedElements(element) {
    console.log(element / 2);
}

result = cForEach.forEach(dividedElements)
console.log(result)
// 5, 10, 15