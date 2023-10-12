console.log('TEST splice')

console.log('CASE replaces one element')

var months = ['Jan', 'Feb', 'March', 'April', 'June']

var removed = splice(months, 4, 1, 'May')

console.log(months)
//['Jan', 'Feb', 'March', 'April', 'June']

console.log(removed)
// ['June']