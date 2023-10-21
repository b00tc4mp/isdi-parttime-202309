console.log("TEST Curry slice");

var c = new Curry("ant", "bison", "camel", "duck", "elephant");

console.log(
  'CASE for slice (array: animals) index 2, end not defined, results in ["camel", "duck", "elephant"]'
);
console.log(c.slice(2));
//["camel", "duck", "elephant"]

console.log(
  'CASE for slice (array: animals) index 2, end 4, results in ["camel", "duck"]'
);
console.log(c.slice(2, 4));
//["camel", "duck"]

console.log(
  'CASE for slice (array: animals) index 1, end 5, results in ["bison", "camel", "duck", "elephant"]'
);
console.log(c.slice(1, 5));
//["bison", "camel", "duck", "elephant"]

console.log(
  'CASE for slice (array: animals) index -2, end undefinied, results in ["duck", "elephant"]'
);
console.log(c.slice(-2));
//["duck", "elephant"]

console.log(
  'CASE for slice (array: animals) index -2, end -1, results in ["camel", "duck"]'
);
console.log(c.slice(2, -1));
//["camel", "duck"]

console.log(
  'CASE for slice (array: animals) index undefined, end undefinied, results in ["ant", "bison", "camel", "duck", "elephant"]'
);
console.log(c.slice());
//["ant", "bison", "camel", "duck", "elephant"]
