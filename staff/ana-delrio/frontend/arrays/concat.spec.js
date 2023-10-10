console.log('-------------------------------------------')

console.log('TEST concat arrays')

const array2 = ['a', 'n', 'a']
const array3 = ['e', 'v', 'a']
const array4 = ['l', 'i', 'a']

console.log("CASE for concat array2 and array3 should return the array '['a', 'n', 'a', 'e', 'v', 'a']'")
console.log(array2.concat(array3))
// ['a', 'n', 'a', 'e', 'v', 'a']

console.log("CASE for concat array3 and array2 should return the array '['l', 'i', 'a', 'a', 'n', 'a']'")
console.log(array3.concat(array2))
// ['l', 'i', 'a', 'a', 'n', 'a']

console.log("CASE for concat array3 and array4 should return the array'['e', 'v', 'a', 'l', 'i', 'a']'")
console.log(array3.concat(array4))
// ['e', 'v', 'a', 'l', 'i', 'a']

console.log('-------------------------------------------')