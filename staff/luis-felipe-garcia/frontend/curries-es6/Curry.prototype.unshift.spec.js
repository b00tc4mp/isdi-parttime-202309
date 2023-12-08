TEST('Curry - unshift')
let curryElementToUnshift = new Curry(1, 2, 3)

console.log(`curryElementToUnshift = (1, 2, 3)`)
CASE(' curryElementToUnshift.unshift(4) return "4" and curryElementToUnshift = [4,1,2,3]')

curryElementToUnshift.unshift(4);
// Expected output: 4

console.log('New Curry = ', curryElementToUnshift);
// Expected output: Array [4, 1, 2, 3]

curryElementToUnshift = new Curry(1, 2, 3)
CASE(' curryElementToUnshift.unshift(4, 5) return "5" and curryElementToUnshift = [4,5,1,2,3]')

curryElementToUnshift.unshift(4, 5);
// Expected output: 5

console.log('New Curry = ', curryElementToUnshift);
// Expected output: Array [4, 5, 1, 2, 3]
