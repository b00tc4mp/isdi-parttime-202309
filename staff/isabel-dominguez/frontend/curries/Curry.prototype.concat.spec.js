console.log('TEST Curry concat')
console.log("****************************************************************************************************************************************")

console.log('CASE merge c1 = new Curry(40, 50, 60) and return Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}')

var c = new Curry(10, 20, 30)
var c1 = new Curry(40, 50, 60)

var concatenated = c.concat(c1);

console.log(concatenated);
// Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}