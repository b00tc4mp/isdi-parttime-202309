console.log('TEST Curry forEach')

console.log('CASE for each element print it in the console')

var c = new Curry(10, 20, 30, 40)

var result = c.forEach((v) => console.log(v))

/* 	10
	20
	30
	40 */


console.log('CASE for each element multiplied by 10 in the console')

var result = c.forEach((v) => console.log(v * 10))

/* 	100
	200
	300 */