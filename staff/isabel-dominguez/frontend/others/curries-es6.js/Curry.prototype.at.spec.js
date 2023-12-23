TEST(' Curry at')
console.log("****************************************************************************************************************************************")

CASE('returns the item at that index "0" results in "10"')

let curryObject1 = new Curry(10, 20, 30)
let index1 = curryObject1.at(0)

console.log(index1)
// 10
console.log(curryObject1)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

CASE('returns the item at that index "2" results in "30"')

let curryObject22 = new Curry(10, 20, 30)
let index2 = curryObject22.at(2)

console.log(index2)
// 30
console.log(curryObject22)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

CASE('returns the item at that index "-3" results in "10"')

let curryObject33 = new Curry(10, 20, 30)
let index3 = curryObject33.at(-3)

console.log(index3)
// 10
console.log(curryObject33)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

CASE('returns the item at that index "-1" results in "30"')

let curryObject44 = new Curry(10, 20, 30)
let index4 = curryObject44.at(-1)

console.log(index4)
// 30
console.log(curryObject44)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }