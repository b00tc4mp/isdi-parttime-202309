console.log('TEST Curry.prototype.filter')

console.log('CASE curryItem [1, 4, 9, 16] to new curryItem with elements >5 ')
var curryItemToFilter = new Curry(1, 4, 9, 16)
var filteredCurryItem = curryItemToFilter.filter(isGreaterThan5);
function isGreaterThan5(x) {
    return x > 5
}
console.log(filteredCurryItem);
// Expected output: Curry [9, 16] length: 2

console.log('CASE curryItem [1, 4, 9, 16] to new curryItem with elements <10 ')
var filteredCurryItem = curryItemToFilter.filter(x => x < 10)
console.log(filteredCurryItem);
// Expected output: Curry [1, 4, 9] length: 3

console.log('CASE curryItem [1, 4, 9, 16] to new curryItem with elements >100 ')
var filteredCurryItem = curryItemToFilter.filter(x => x > 100)
console.log(filteredCurryItem);
// Expected output: Curry [] length: 0