console.log('TEST push')

//push() = The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

console.log('CASE for push moreSports array to spots array should return 6')
console.log(push(sports, moreSports))
// 6

console.log('CASE for push string "Climbing" to sports array should return 7')
console.log(push(sports, 'Climbing'))
// 7 (and not 5 because the sports array now has 6 elements because we pushed the moreSports to it)

console.log('CASE for push string "" to clothes array should return 8')
console.log(push(sports, ''))
// 8 (and not 5 because the clothes array now has 6 elements because we pushed the moreSports and 'Climbing' to it)