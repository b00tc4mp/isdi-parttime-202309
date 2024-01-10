console.log('TEST Curry map')
console.log('CASE map Curry [1, 4, 9, 16] to new Curry with elements multiplied by two ')

var curryItemToMap = new Curry(1, 4, 9, 16);

var mappedCurryItem = curryItemToMap.map(function (x) { return x * 2 });
console.log(mappedCurryItem)
// Expected output: curryItem [2, 8, 18, 32]