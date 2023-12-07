console.log('TEST Curry Join')

console.log('CASE for Curry and separator ("-")')

var c = new Curry(10, 20, 30, 40)

var string = c.join('-')

console.log(string)
// '10-20-30-40'

console.log('CASE for Curry without separator')

var c2 = new Curry(10, 20, 30, 40)

var string2 = c2.join()

console.log(string2)
// '10,20,30,40'

console.log('CASE for Curry with separator ("")')

var c3 = new Curry(10, 20, 30, 40)

var string3 = c3.join("")

console.log(string3)
// '10203040'

console.log('CASE for Curry with separator (true)')

var c4 = new Curry(10, 20, 30, 40)

var string4 = c4.join(true)

console.log(string4)
// '10true20true30true40'

