console.log('TEST join')

// join() = The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
//separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

console.log(
  'CASE for join elements array with comma and space should return the string "Air, Earth, Water, Fire; Separated by commas and space"'
)
console.log(join(elements, ', '))
// Air, Earth, Water, Fire

console.log(
  'CASE for join elements array with comma and no space should return the string "Air, Earth, Water, Fire; Separated by commas"'
)
console.log(join(elements, ','))
// 'Air,Earth,Water,Fire'

console.log(
  'CASE for join elements array with dash should return the string "Air, Earth, Water, Fire; Separated by dashes (-)"'
)
console.log(join(elements, '-'))
// 'Air-Earth-Water-Fire'

console.log(
  'CASE for join elements array with no space should ßreturn the string "Air, Earth, Water, Fire; With no separation"'
)
console.log(join(elements, ''))
// 'AirEarthWaterFire'