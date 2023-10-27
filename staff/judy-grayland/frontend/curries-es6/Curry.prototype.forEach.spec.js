TEST('Curry forEach')

CASE('Print each element in the Curry (10, 20, 30) in the console.')

var c = new Curry(10, 20, 30)

c.forEach(function (v) {
  console.log(v)
})

CASE('Print each element in the Curry (10, 20, 30) multiplied by 10 in the console.')

var c = new Curry(10, 20, 30)

c.forEach(function (v) {
  console.log(v * 10)
})

console.log('-----------  ---------- ---------')
