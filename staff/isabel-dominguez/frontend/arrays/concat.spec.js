console.log('TEST concat')
console.log('***********************************************************************************************')

const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const array4 = ["g", "h", "i"];
const array5 = ["j", "k", "l"];
const array6 = ["m", "n", "o"];

console.log('CASE for arrays array2 = ["a", "b"", "c"] y array3 = ["d", "e", "f"] results in "["a", "b"", "c", d", "e", "f"]"')
console.log(concat(array2, array3));
// ["a", "b"", "c", d", "e", "f"]

console.log('CASE for arrays array4 = ["g", "h", "i"] y array6 = ["m", "n", "o"] results in "["g", "h", "i", "m", "n", "o"]"')
console.log(concat(array4, array6));
// ["g", "h", "i", "m", "n", "o"]

console.log('CASE for arrays array3 = ["d", "e", "f"] y array4 = ["g", "h", "i"] results in "["d", "e", "f", "g", "h", "i"]"')
console.log(concat(array3, array4));
// ["d", "e", "f", "g", "h", "i"]

console.log('CASE for arrays array5 = ["j", "k", "l"] y array2 = ["a", "b", "c"] results in "["j", "k", "l", "a", "b", "c"]"')
console.log(concat(array5, array2));
// ["j", "k", "l", "a", "b", "c"]