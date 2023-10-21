console.log("TEST Curry splice");

/*
console.log("CASE replace one element");

var months = new Curry("Jan", "Feb", "March", "April", "June");

var removed = months.splice(4, 1, "May");

console.log(months);
console.log("Jan", "Feb", "March", "April", "May");

console.log(removed);
console.log("June");

console.log("____________________________________________________");

console.log("CASE insert one element");

var months1 = new Curry("Jan", "March", "April");

console.log("Jan", "March", "April");

var removed2 = months1.splice(1, 0, "Feb");
console.log("Jan", "Feb", "March", "April");
console.log(months1);
console.log(removed2);

console.log("____________________________________________________");

*/
console.log(
  'CASE remove 0 (zero) elements before index 2, and insert "drum" and "guitar"'
);

var fish = new Curry("angel", "clown", "mandarin", "sturgeon");

var removed3 = fish.splice(2, 0, "drum", "guitar");

console.log(fish);
console.log("angel", "clown", "drum", "guitar", "mandarin", "sturgeon");

console.log(removed3);
// []

console.log("____________________________________________________");

/*
console.log("CASE remove 1 element at index 3");

var fish1 = new Curry("angel", "clown", "drum", "mandarin", "sturgeon");

var removed4 = fish1.splice(3, 1);

console.log(fish1);
console.log("angel", "clown", "drum", "sturgeon"); //este deja repetido el sturgeon (arreglar)

console.log(removed4);
console.log("mandarin");

console.log("____________________________________________________");

console.log("CASE remove 2 elements from index 3");

var fish2 = new Curry(
  "angel",
  "clown",
  "drum",
  "mandarin",
  "sturgeon",
  "sword"
);

var removed5 = fish2.splice(3, 2);

console.log(fish2);
console.log("angel", "clown", "drum", "sturgeon");

console.log(removed5);
console.log("mandarin");
*/
