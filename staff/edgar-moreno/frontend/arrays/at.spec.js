console.log('TEST at')

// at()= The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. 
//Negative integers count back from the last item in the array.

console.log('CASE for countries array at 0 should return "France"')
console.log(at(countries, 0))
// 'France'

console.log('CASE for countries array at 3 should return "United States"')
console.log(at(countries, 3))
// 'United States'

console.log('CASE for countries array at -1 should return "Germany"')
console.log(at(countries, -1))
// 'Germany'

console.log('CASE for countries array at -4 should return "Japan"')
console.log(at(countries, -4))
// 'Japan'

console.log('CASE for countries array at 9 should return undefined')
console.log(at(countries, 9))
// undefined