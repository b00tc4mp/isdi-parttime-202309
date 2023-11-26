TEST(' Curry forEach')
console.log("****************************************************************************************************************************************")

CASE('for each element in [10, 20, 30] print it in the console')

let cForEach1 = new Curry(10, 20, 30)

function printElements(element) {
    console.log(element);
}

let result111 = cForEach1.forEach(printElements)
console.log(result111)
// 10, 20, 30


CASE('for each element in [10, 20, 30] print it multiplied by 10 in the console')

let cForEach2 = new Curry(10, 20, 30)

function multipliedElements(element) {
    console.log(element * 10);
}

let result222 = cForEach2.forEach(multipliedElements)
console.log(result222)
// 100, 200, 300


CASE('for each element in [10, 20, 30] print it divided by 2 ')

let cForEach3 = new Curry(10, 20, 30)

function dividedElements(element) {
    console.log(element / 2);
}

result333 = cForEach3.forEach(dividedElements)
console.log(result333)
// 5, 10, 15