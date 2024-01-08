console.log('TEST splice')

console.log ('CASE replaces one element')

var months = ['Jan', 'Feb', 'March', 'April', 'June']

var removed = splice(months, 4, 1, 'May')
//['Jan', 'Feb', 'March', 'April', 'June']

console.log(removed)
//['June]

console.log('CASE insert one element')

var months = ['Jan', 'March', 'April']

var removed = splice(months, 1, 0, 'Feb')

console.log(months)
//['Jan', 'Feb, 'March', 'April']

console.log(removed)
//[]