console.log('TEST join')

var array1 = ['a','b','c']
separator1 = ''
separator2 = '-'

console.log('CASE for array1 = [a,b,c] and separator1 = (space) results in newArray = [abc]')
console.log(join(array1, separator1))
//[abc]


console.log('CASE for array1 = [a,b,c] and separator1 = (-) results in newArray = [a-b-c]')
console.log(join(array1, separator2))
//[abc]