console.log('TEST push')

//push() = The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

console.log('CASE for push moreClothes array to clothes array should return 6')
console.log(push(clothes, moreClothes))
// 6

console.log('CASE for push string "skirt" to clothes array should return 7')
console.log(push(clothes, 'skirt'))
// 7 (and not 5 because the clothes array now has 6 elements because we pushed the moreClothes to it)

console.log('CASE for push string "" to clothes array should return 8')
console.log(push(clothes, ''))
// 8 (and not 5 because the clothes array now has 6 elements because we pushed the moreClothes and 'skirt' to it)
