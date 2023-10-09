console.log('TEST indexOf')

var array = [2,9,9]

console.log('CASE for array [2,9,9] indexOf "2" , index 0, results in 0')
console.log(indexOf(array, 2, 0))
//0


console.log('CASE for array [2,9,9] indexOf "7" , index 0, results in -1')
console.log(indexOf(array, 7, 0))
//-1


console.log('CASE for array [2,9,9] indexOf "9" , index 2, results in 2')
console.log(indexOf(array, 9, 2))
//2


console.log('CASE for array [2,9,9] indexOf "2" , index -1, results in -1')
console.log(indexOf(array, 2, -1))
//-1

console.log('CASE for array [2,9,9] indexOf "2" , index -3, results in 0')
console.log(indexOf(array, 2, -3))
//0

console.log('caso de indexOf (2,-1)')
console.log(array.indexOf(2,-1))
console.log('caso de indexOf (2,-3)')
console.log(array.indexOf(2,-3))