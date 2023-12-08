TEST(' Curry - forEach')

let curryItemToUse = new Curry('a', 'b', 'c');
console.log(curryItemToUse)

CASE(' forEach(curryItemToUse.forEach(function (element) {console.log(element)}), return "a", "b", "c"')
curryItemToUse.forEach(function (element) { console.log(element) });

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

let curry2 = new Curry(2, 4, 6);
console.log('CASE newCurry = [], curry2 = [2,4,6] y curry2.forEach( function (x) = newCurry.push(x*2); console.log(newCurry) return [4, 8, 12]')

let newCurry = new Curry()
curry2.forEach(function (element) {
    
    newCurry[newCurry.length] = (element * 2)
    newCurry.length++
})
console.log(newCurry)

// Expected output: [4, 8, 12]
