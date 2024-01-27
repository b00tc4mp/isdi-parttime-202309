console.log('TEST pop')

console.log('CASE extract last element from array [10, 20, 30]')

var nums = [10, 20, 30]

var extracted = pop(nums)

console.log(extracted)
// 30

console.log(nums)
// [10, 20]

console.log('CASE extract no element (undefined) from array []')

var empty = []

var extracted = pop(empty)

console.log(extracted)
// undefined

console.log(empty)
// []