TEST('Curry - toString')
let curryElement = new Curry(1, 2, 'a', '1a')
console.log('curryElement = ', curryElement)

CASE(' curryElement.toString() returns 12a1a')
console.log(curryElement.toString());
// Expected output: "12a1a"
