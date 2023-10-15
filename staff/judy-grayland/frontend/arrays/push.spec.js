console.log('TEST push')
var clothes = ['jumpers', 'jeans', 'socks', 'shirts']
var moreClothes = ['jackets', 'dresses']

//push() = The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

console.log('CASE for push moreClothes array to clothes array should return 5')
console.log(push(clothes, moreClothes))
// 5 (it adds the entire moreClothes array-not each element separately-so clothes now only has one more element, ie. the moreClothes array)

console.log('CASE for push string "skirt" to clothes array should return 7')
console.log(push(clothes, 'skirt'))
// 6 (and not 5 because the clothes array now has 5 elements because we pushed the moreClothes to it)

console.log('CASE for push string "hat" to clothes array should return 8')
console.log(push(clothes, 'hat'))
// 8

console.log('CASE for push string "" to clothes array should return 9')
console.log(push(clothes, ''))
// 9
