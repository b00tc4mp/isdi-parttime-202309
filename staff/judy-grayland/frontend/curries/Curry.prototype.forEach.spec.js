console.log('TEST Curry forEach')

console.log('CASE for each element in [10, 20, 30] print in the console.')

var c = new Curry(10, 20, 30)

c.forEach(function (v) {
  console.log(v)
})

console.log('CASE for each element in [10, 20, 30] multiplied by 10')

var c = new Curry(10, 20, 30)

c.forEach(function (v) {
  console.log(v * 10)
})

console.log('-----------  ---------- ---------')
