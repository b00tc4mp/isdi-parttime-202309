console.log('TEST splice')

var months3 = ['Jan', 'March', 'April', 'June'];
console.log('months\n', months3)

var months2 = ['Jan', 'Feb', 'March', 'April', 'June']
console.log('months2\n', months2)

console.log("\n\nCASE splice(months, 1, 0, 'Feb') result ['Jan', 'Feb', 'March', 'April', 'June']")
console.log(splice(months3, 1, 0, 'Feb', 'Jan', 'Feb', 'March', 'April', 'June'));
// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

console.log("\n\nCASE splice(months2, 4, 1, 'May') result ['Jan', 'Feb' 'March', 'April', 'May']")
console.log(splice(months2, 4, 1, 'May'));
// Expected output: Array ["camel", "duck"]
/*
console.log('\n\nCASE splice(months, 1, 5) result ["bison", "camel", "duck", "elephant"]')
console.log(splice(months3, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log('\n\nCASE splice(months,-2) result ["duck", "elephant"]')
console.log(splice(months3,-2));
// Expected output: Array ["duck", "elephant"]

console.log('\n\nCASE splice(months,2, -1) result ["camel", "duck"]')
console.log(splice(months3,2, -1));
// Expected output: Array ["camel", "duck"]

console.log('\n\nCASE splice(months) result ["ant", "bison", "camel", "duck", "elephant"]')
console.log(splice(months3));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(`\n\nCASE splice(months, 3, 1) result []`)
console.log(splice(months3, 3, 2))
// Expected output: []

console.log(`\n\nCASE splice(months, 30) result []`)
console.log(splice(months3, 30))
// Expected output: []

console.log(`\n\nCASE splice(months, -30) result ["ant", "bison", "camel", "duck", "elephant"]`)
console.log(splice(months3, -30))
// Expected output: ["ant", "bison", "camel", "duck", "elephant"]
*/