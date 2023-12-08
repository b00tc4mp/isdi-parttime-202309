console.log('TEST slice')

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log('ANIMALS\n', animals)
console.log('\n\nCASE slice(animals, 2) result ["camel", "duck", "elephant"]')
console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log('\n\nCASE slice(animals, 2, 4) result ["camel", "duck"]')
console.log(slice(animals, 2, 4));
// Expected output: Array ["camel", "duck"]

console.log('\n\nCASE slice(animals, 1, 5) result ["bison", "camel", "duck", "elephant"]')
console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log('\n\nCASE slice(animals,-2) result ["duck", "elephant"]')
console.log(slice(animals,-2));
// Expected output: Array ["duck", "elephant"]

console.log('\n\nCASE slice(animals,2, -1) result ["camel", "duck"]')
console.log(slice(animals,2, -1));
// Expected output: Array ["camel", "duck"]

console.log('\n\nCASE slice(animals) result ["ant", "bison", "camel", "duck", "elephant"]')
console.log(slice(animals));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(`\n\nCASE slice(animals, 3, 1) result []`)
console.log(slice(animals, 3, 2))
// Expected output: []

console.log(`\n\nCASE slice(animals, 30) result []`)
console.log(slice(animals, 30))
// Expected output: []

console.log(`\n\nCASE slice(animals, -30) result ["ant", "bison", "camel", "duck", "elephant"]`)
console.log(slice(animals, -30))
// Expected output: ["ant", "bison", "camel", "duck", "elephant"]

console.log(`\n\nCASE slice(animals, -30) result []`)
console.log(slice(animals, 0, -30))
// Expected output: []

