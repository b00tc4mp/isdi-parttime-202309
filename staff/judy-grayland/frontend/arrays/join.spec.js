console.log('TEST join')

// join() = The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

console.log(
  'CASE for join cardinalDirections array with comma and space should return the string "north, east, south, west"'
)
console.log(join(cardinalDirections, ', '))
// 'north, east, south, west'

console.log(
  'CASE for join cardinalDirections array with comma and no space should return the string "north, east, south, west"'
)
console.log(join(cardinalDirections, ','))
// 'northeastsouthwest'

console.log(
  'CASE for join cardinalDirections array with dash should return the string "north, east, south, west"'
)
console.log(join(cardinalDirections, '-'))
// 'north-east-south-west'

console.log(
  'CASE for join cardinalDirections array with no space should ßreturn the string "north, east, south, west"'
)
console.log(join(cardinalDirections, ''))
// 'northeastsouthwest'

console.log('------------------------------------------')
