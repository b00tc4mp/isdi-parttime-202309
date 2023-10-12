console.log("TEST Curry at");

console.log("CASE index 2");

var c = new Curry(10, 20, 30);

var returnedIndex = c.at(2);

console.log(returnedIndex);
console.log("Expected 30");
// 30

console.log("CASE index -2");

var c = new Curry(10, 20, 30);

var returnedIndex = c.at(-2);

console.log(returnedIndex);
console.log("Expected 20");
// 20
