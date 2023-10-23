var curryItem = new Curry('a', 'b', 'c');
console.log(curryItem)

console.log('CASE forEach(curryItem.forEach(function (element) {console.log(element)}), return "a", "b", "c"')
curryItem.forEach(function (element) { console.log(element) });

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

var array2 = new Curry(2, 4, 6);
console.log('CASE newArray = [] y array2.forEach( function (x) = newArray.push(x*2); console.log(newArray) return [4, 8, 12]')

var newArray = new Curry()
array2.forEach(function (element) {
    newArray.length++
    newArray[i] = (element * 2)
})
console.log(newArray)

// Expected output: [4, 8, 12]
