console.log("TEST curry forEach");

var c = new Curry(10, 20, 30);
console.log("CASE for each element in [10, 20, 30] print it in the console");

c.forEach(function (v) {
  console.log(v);
});

console.log(
  "CASE for each element in [10, 20, 30] print it multiplied by 10 in the console"
);

c.forEach(function (v) {
  console.log(v * 10);
});
