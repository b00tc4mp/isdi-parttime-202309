//El toReversed()método de Array instancias, es la contraparte copiadora del reverse()método. Devuelve una nueva array con los elementos en orden inverso.\

console.log('CASE toReversed')

console.log('CASE toReversed, if we have this curry ["10, 20, 30"], it returns the elements of the curry itself in a reverse order ["30, 20, 10"]')

var c = new Curry('10', '20', '30')

var reversed = c.toReversed()


// [one, two, three]
// i = 3 -1 -2 [three]
// i = 2 -1 -1 [three, two]
// i = 1 -1 -0 [three, two, one]

console.log('Expected output: Curry {0: "30", 1: "20", 2: "10", length: 3 }')
console.log(reversed)
console.log('Expected output: Curry {0: "10", 1: "20", 2: "30", length: 3 }')
console.log(c)