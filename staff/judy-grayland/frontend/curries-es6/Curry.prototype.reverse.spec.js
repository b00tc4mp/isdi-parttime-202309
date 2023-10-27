TEST('Curry reverse')

CASE('Reverse Curry (1, 2, 3) should return (3, 2, 1)')

var c = new Curry(1, 2, 3)

c.reverse()

console.log(c)
// Curry { 0: 3, 1: 2, 3: 1)

var cd = new Curry(1, 2, 3, 4, 5, 6, 7, 8)

CASE('Reverse Curry (1, 2, 3, 4, 5, 6, 7, 8) should return (8, 7, 6, 5, 4, 3, 2, 1)')

cd.reverse()

console.log(cd)
// Curry { 0: 8, 1: 7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1, 8: 0)
