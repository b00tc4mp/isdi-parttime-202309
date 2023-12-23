

console.log('TEST concat arrays')

const arrayGirls = ['ana', 'pilar', 'maria']
const arrayBoys = ['francesco', 'jorge', 'damian']

console.log("CASE for concat arrayGirls and arrayBoys should return the array ['ana', 'pilar', 'maria','francesco','jorge', 'damian']'")
console.log(concat(arrayGirls, arrayBoys))
// ['ana', 'pilar', 'maria','francesco','jorge', 'damian']

console.log("CASE for concat arrayBoys and arrayGirls should return the array ['francesco', 'jorge', 'damian','ana', 'pilar', 'maria']'")
console.log(concat(arrayBoys, arrayGirls))
// ['francesco', 'jorge', 'damian','ana', 'pilar', 'maria']

console.log("CASE for concat arrayGirls and surName should return ReferenceError: surName is not defined")
console.log(concat(arrayGirls, surName))
// ReferenceError: surName is not defined

