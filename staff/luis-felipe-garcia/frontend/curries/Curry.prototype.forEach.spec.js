var curryItem = new Curry('a', 'b', 'c');
console.log(curryItem)

console.log('CASE forEach(curryItem.forEach(function (element) {console.log(element)}), return "a", "b", "c"')
curryItem.forEach(function (element) { console.log(element) });

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

var curry2 = new Curry(2, 4, 6);
console.log('CASE newCurry = [], curry2 = [2,4,6] y curry2.forEach( function (x) = newCurry.push(x*2); console.log(newCurry) return [4, 8, 12]')

var newCurry = new Curry()
curry2.forEach(function (element) {
    newCurry.length++
    newCurry[i] = (element * 2)
})
console.log(newCurry)

// Expected output: [4, 8, 12]
