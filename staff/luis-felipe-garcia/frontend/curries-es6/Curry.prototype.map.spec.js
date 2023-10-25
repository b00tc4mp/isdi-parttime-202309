TEST(' Curry map')
CASE(' map Curry [1, 4, 9, 16] to new Curry with elements multiplied by two ')

let curryItemToMap = new Curry(1, 4, 9, 16);

let mappedCurryItem = curryItemToMap.map(function (x) { return x * 2 });
console.log(mappedCurryItem)
// Expected output: curryItem [2, 8, 18, 32]