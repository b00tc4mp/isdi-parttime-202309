console.log("TEST Curry pop");

console.log("CASE pop element");

var c = new Curry(10, 20, 30);

var poppedElement = c.pop();

console.log(poppedElement);
// 30
console.log(c);
// Curry { 0: 10, 1: 20, length: 2 }
