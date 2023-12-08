TEST(' Curry - find')

CASE(' curryItem [1, 4, 9, 16] find the first element >5 ')

let curryItemToSearchIn = new Curry(1, 4, 9, 16);
let foundCurryItem = curryItemToSearchIn.find(isGreaterThan5);
function isGreaterThan5(x) {
    return x > 5
}

console.log(foundCurryItem);
// Expected output: 9


CASE(' curryItem [1, 4, 9, 16] find the first element >50 ')
console.log(curryItemToSearchIn.find(x => x > 50));
// Expected output: undefined