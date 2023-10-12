console.log("TEST Curry concat");

var c = new Curry(10, 20, 30);

var array1 = [40, 50, 60];

var newArray = c.concat(array1);

console.log(newArray);
// (10, 20, 30, 40, 50, 60)
console.log(c);
// Curry { 0: 10, 1: 20, length: 2 }

console.log(
  "CASE for Curry = [10,20,30] and array1 = [40,50,60] results in newArray = [10,20,30,40,50.60]"
);
