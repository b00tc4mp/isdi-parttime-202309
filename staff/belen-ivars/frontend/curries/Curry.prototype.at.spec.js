console.log('TEST curry at')

var c = new Curry(10, 20, 30, 40)

console.log("CASE with index 1")
console.log(c.at(1))
//20

console.log("CASE with index 2")
console.log(c.at(2))
//30

console.log("CASE with index -1")
console.log(c.at(-1))
//40

console.log("CASE with index 4")
console.log(c.at(4))
//'Undefined'