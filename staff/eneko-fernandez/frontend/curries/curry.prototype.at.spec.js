console.log("TEST curry at")

var c = new Curry(10, 20, 30, 50, 60)

console.log('CASE at 0 results in 10')

var result = c.at(0)

console.log(result)

console.log('CASE at 3 results in 50')

var result = c.at(3)

console.log(result)

console.log('CASE at 7 results in undefined')

var result = c.at(7)

console.log(result)

