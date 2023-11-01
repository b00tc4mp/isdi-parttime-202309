TEST(' Curry concat')
console.log("****************************************************************************************************************************************")

CASE('merge c1 = new Curry(40, 50, 60) and return Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}')

let concat1 = new Curry(10, 20, 30)
let concat2 = new Curry(40, 50, 60)

let concatenatedCurrys = concat1.concat(concat2);

console.log(concatenatedCurrys);
// Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}


CASE('merge c1 = new Curry(40, 50, 60) and c2 = new Curry(70, 80, 90), return Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, 6: 70, 7:80, 8: 90 length: 9}')

let concat11 = new Curry(10, 20, 30)
let concat22 = new Curry(40, 50, 60)
let concat33 = new Curry(70, 80, 90)

let concatenated = concat11.concat(concat22, concat33);

console.log(concatenated);
// Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, 6: 70, 7:80, 8: 90 length: 9}