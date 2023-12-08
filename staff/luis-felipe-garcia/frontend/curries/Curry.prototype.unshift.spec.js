console.log('Curry - unshift')
var curryElement = new Curry(1, 2, 3)

console.log(`curryElement = (1, 2, 3)`)
console.log('CASE curryElement.unshift(4) return "4" and curryElement = [4,1,2,3]')

curryElement.unshift(4);
// Expected output: 4

console.log('New Curry = ', curryElement);
// Expected output: Array [4, 1, 2, 3]

var curryElement = new Curry(1, 2, 3)
console.log('CASE curryElement.unshift(4, 5) return "5" and curryElement = [4,5,1,2,3]')

curryElement.unshift(4, 5);
// Expected output: 5

console.log('New Curry = ', curryElement);
// Expected output: Array [4, 5, 1, 2, 3]
