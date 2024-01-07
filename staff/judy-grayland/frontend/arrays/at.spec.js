console.log('TEST at')

var countries = ['France', 'Ghana', 'Peru', 'Australia', 'Canada', 'India']
// at()= The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

console.log('CASE for countries array at 0 should return "France"')
console.log(at(countries, 0))
// 'France'

console.log('CASE for countries array at 3 should return "Australia"')
console.log(at(countries, 3))
// 'Australia'

console.log('CASE for countries array at -2 should return "Canada"')
console.log(at(countries, -2))
// 'Canada'

console.log('CASE for countries array at -4 should return "Peru"')
console.log(at(countries, -4))
// 'Peru'

console.log('CASE for countries array at 9 should return undefined')
console.log(at(countries, 9))
// undefined

console.log('------------------------------------------')
