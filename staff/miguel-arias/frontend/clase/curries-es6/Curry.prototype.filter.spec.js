TEST('Curry filter')

CASE('filter ordered values < 10')

var c = new Curry(1, 3, 4, 7, 11, 18, 29)

function isLessThan10(element) {
    return element < 10
}

var filteredCurry = c.filter(isLessThan10)

expectedOutput('Curry { 0: 1, 1: 3, 2: 4, 3: 7 length: 4')
console.log(filteredCurry)

//

console.log('TEST Curry filter')

CASE('filter unordered values > 10')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

function isGreaterThan10(element) {
    return element > 10
}

var filteredCurry = c.filter(isGreaterThan10)

expectedOutput('Curry { 0: 18, 1: 29, length: 2')
console.log(filteredCurry)

//

console.log('TEST Curry filter ERRORS')

CASE('filter no arguments given')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

expectedOutput('TypeError: undefined is not a function')
try {
    var filteredCurry = c.filter()
} catch (error) {
    console.log(error)
}

//

CASE('filter argument is a string')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

expectedOutput('TypeError: string "hello" is not a function')

try {
    var filteredCurry = c.filter('hello')
} catch (error) {
    console.log(error)
}

//

CASE('filter argument is a number')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

expectedOutput('TypeError: number 2 is not a function')

try {
    var filteredCurry = c.filter(2)
} catch (error) {
    console.log(error)
}

//

CASE('filter argument is null')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

expectedOutput('TypeError: object null is not a function')

try {
    var filteredCurry = c.filter(null)
} catch (error) {
    console.log(error)
}

//

CASE('filter argument is undefined')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

expectedOutput('TypeError: undefined is not a function')

try {
    var filteredCurry = c.filter(undefined)
} catch (error) {
    console.log(error)
}

//

CASE('filter argument is boolean')

var c = new Curry(1, 18, 4, 29, 10, 3, 7)

expectedOutput('TypeError: boolean true is not a function')

try {
    var filteredCurry = c.filter(true)
} catch (error) {
    console.log(error)
}