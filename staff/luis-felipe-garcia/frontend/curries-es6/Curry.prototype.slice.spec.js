TEST(' Curry.slice')

let animals = new Curry('ant', 'bison', 'camel', 'duck', 'elephant');

console.log('ANIMALS\n', animals)
CASE(' animals.slice(2) result ["camel", "duck", "elephant"]')
console.log(animals.slice(2));
// Expected output: Curry ["camel", "duck", "elephant"]

CASE(' animals.slice(2, 4) result ["camel", "duck"]')
console.log(animals.slice(2, 4));
// Expected output: Curry ["camel", "duck"]

CASE(' animals.slice(1, 5) result ["bison", "camel", "duck", "elephant"]')
console.log(animals.slice(1, 5));
// Expected output: Curry ["bison", "camel", "duck", "elephant"]

CASE(' animals.slice(-2) result ["duck", "elephant"]')
console.log(animals.slice(-2));
// Expected output: Curry ["duck", "elephant"]

CASE(' animals.slice(2, -1) result ["camel", "duck"]')
console.log(animals.slice(2, -1));
// Expected output: Curry ["camel", "duck"]

CASE(' animals.slice() result ["ant", "bison", "camel", "duck", "elephant"]')
console.log(animals.slice());
// Expected output: Curry ["ant", "bison", "camel", "duck", "elephant"]

CASE(` animals.slice(3, 1) result []`)
console.log(animals.slice(3, 1))
// Expected output: []

CASE(` animals.slice(30) result []`)
console.log(animals.slice(30))
// Expected output: []

CASE(` animals.slice(-30) result ["ant", "bison", "camel", "duck", "elephant"]`)
console.log(animals.slice(-30))
// Expected output: ["ant", "bison", "camel", "duck", "elephant"]

CASE(` animals.slice(0, -30) result []`)
console.log(animals.slice(0, -30))
// Expected output: []

