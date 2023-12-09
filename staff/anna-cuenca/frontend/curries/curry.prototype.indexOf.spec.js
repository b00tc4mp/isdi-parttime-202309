console.log("TEST curry indexOf");

var c = new Curry(2, 5, 7, 2, 8);
var array = [2, 5, 7, 2, 8];

console.log(
  'CASE for curry.indexOf [2, 5, 7, 2, 8] indexOf "2" , index 0, results in 0'
);
console.log(array.indexOf(2, 0));
console.log(c.indexOf(2, 0));
//0

console.log(
  'CASE for curry.indexOf [2, 5, 7, 2, 8] indexOf "7" , index 0, results in 2'
);
console.log(array.indexOf(7, 0));
console.log(c.indexOf(7, 0));
//-1

console.log(
  'CASE for curry.indexOf [2, 5, 7, 2, 8] indexOf "9" , index 2, results in 2'
);
console.log(array.indexOf(9, 2));
console.log(c.indexOf(9, 2));
//2

console.log(
  'CASE for curry.indexOf [2, 5, 7, 2, 8] indexOf "2" , index -1, results in -1'
);
console.log(array.indexOf(2, -1));
console.log(c.indexOf(2, -1));
//-1

console.log(
  'CASE for curry.indexOf [2, 5, 7, 2, 8] indexOf "2" , index -3, results in 0'
);
console.log(array.indexOf(2, -3));
console.log(c.indexOf(2, -3));
//0
