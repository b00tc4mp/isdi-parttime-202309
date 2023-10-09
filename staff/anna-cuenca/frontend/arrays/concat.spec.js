console.log('TEST concat')

var array1 = ['a','b','c']
var array2 = ['d','e','f']
var array3 = ['g','h']
var array4 = ['i']

console.log('CASE for array1 = [a,b,c] and array2 = [d,e,f] results in newArray = [a,b,c,d,e,f]')
console.log(concat(array1, array2))
//[a,b,c,d,e,f]


console.log('CASE for array1 = [a,b,c] and array2 = [d,e,f] and array3 = [g,h,i] results in newArray = [a,b,c,d,e,f,g,h,i]')
console.log(concat(array1, array2, array3))
//[a,b,c,d,e,f,g,h,i]

console.log('CASE for array1 = [a,b,c] and array4 = [i] results in newArray = [a,b,c,i]')
console.log(concat(array1, array4))
//[a,b,c,i]

