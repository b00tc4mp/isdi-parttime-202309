TEST(' Curry reverse')
console.log("****************************************************************************************************************************************")
CASE('reverse curry ["one", "two", "three"] mutating the original array')

let cReverse1 = new Curry("one", "two", "three")

// [one, two, three]
// i = 0 [three, two, one]

console.log('Expected output: Curry {0: "three", 1: "two", 2: "one", length: 3 }')
console.log(cReverse1.reverse())