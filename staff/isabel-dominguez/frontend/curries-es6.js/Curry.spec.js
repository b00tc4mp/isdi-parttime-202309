TEST('TEST Curry constructor')
console.log("****************************************************************************************************************************************")

CASE('construct curry with 3 args 10, 20, and 30')

let curryObject = new Curry(10, 20, 30)

console.log(curryObject)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

CASE('construct curry with 1 argument that is a positive integer')

let curryObject2 = new Curry(100)

console.log(curryObject2)
// Curry { length: 100 }

CASE('construct curry with 1 argument that is not a positive integer, but a boolean')

let curryObject3 = new Curry(true)

console.log(curryObject3)
// Curry { 0: true, length: 1 }

CASE('construct curry with 1 argument that is not a positive integer, but a string')

let curryObject4 = new Curry('hello')

console.log(curryObject4)
// Curry { 0: 'hello', length: 1 }

CASE('constructor fails with 1 argument that is a negative integer')

try {
    new Curry(-1)
} catch (error) {
    console.log(error)
    // RangeError: Invalid curry length
}

CASE('constructor fails with 1 argument that is a positive number, not integer')

try {
    new Curry(1.234)
} catch (error) {
    console.log(error)
    // RangeError: Invalid curry length
}