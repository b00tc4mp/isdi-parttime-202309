TEST(' Curry push')
console.log("****************************************************************************************************************************************")

CASE('push 1 element')

let curryPush = new Curry(10, 20, 30)
let length1 = curryPush.push(40)

console.log(length1)
// 4
console.log(curryPush)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, length: 4 }

CASE('push 3 elements')

let curryPush1 = new Curry(10, 20, 30)
let length2 = curryPush1.push(40, 50, 60)

console.log(length2)
// 6
console.log(curryPush1)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6 }

CASE('push no elements')

let curryPush2 = new Curry(10, 20, 30)
let length3 = curryPush2.push()

console.log(length3)
// 3
console.log(curryPush2)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }