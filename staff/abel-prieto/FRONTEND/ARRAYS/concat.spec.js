var array1 = ['Dog', 'Cat', 'Mouse']        // Argument[0] 
var array2 = ['Wolf', 'Tiger', 'Lion']      // Argument[1]
var array3 = ['Snake', 'Bird', 'Spider']    // Argument[2]
var array4 = ['Elephant', 'Monkey', 'Rat']  // Argument[3]

console.log('TEST ARRAYS - Method concat')

console.log('CASE for concat the arrays on in new one')
var totalArray = concat(array1, array2, array3, array4)
console.log(totalArray)
// [[Dog,Cat,Mouse], [Wolf,Tiger,Lion], [Snake,Bird,Spider], [Elephant,Monkey,Rat]]

console.log('CASE for concat the arrays [10,20,30] with the others array in new one')
var totalArray2 = concat([10,20,30], [50,60,70], [100,110,120])
console.log(totalArray2)
// [[10,20,30], [50,60,70], [100,110,120]]

console.log('CASE for concat the arrays ["lion"] with the others array in new one')
var totalArray3 = concat(['lion'], [10,20,30], ['dog', 20])
console.log(totalArray3)


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')