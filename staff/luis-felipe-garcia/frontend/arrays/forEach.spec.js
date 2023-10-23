var array1 = ['a', 'b', 'c'];
console.log(array1)

console.log('CASE forEach(array1, console.log(element), return "a", "b", "c"')
forEach(array1, function (element) { console.log(element) });

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

var array2 = [2, 4, 6];
console.log(array2)

console.log('CASE newArray = forEach(array2, function (x) = newArray.push(x*2) return 4, 8, 12')
//var newArray = forEach(array2, function (element) {newArray.push(element * 2)});

console.log('CASE newArray = forEach(array2, function (x) = newArray.push(x*2) return 4, 8, 12')
var newArray = []
forEach(array2, function (element) { newArray.push(element * 2) })
console.log(newArray)

// Expected output: [4, 8, 12]



