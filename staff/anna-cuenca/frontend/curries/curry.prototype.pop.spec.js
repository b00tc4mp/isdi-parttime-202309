console.log("TEST Curry pop");

console.log("CASE Curry pop element");

var c = new Curry(10, 20, 30);

var poppedElement = c.pop();

console.log(poppedElement);
// 30
console.log(c);
// Curry { 0: 10, 1: 20, length: 2 }

console.log("__________________________________");

console.log("CASE Curry pop element with length 0");

var a = new Curry();

var poppedElement = a.pop();

console.log(poppedElement);
// 30
console.log(a);
// Curry { 0: 10, 1: 20, length: 2 }
