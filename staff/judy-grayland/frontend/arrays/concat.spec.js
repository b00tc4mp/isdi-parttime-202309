console.log('TEST concat')
// concat() = The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
var animals = ['sloth', 'llama', 'gecko', 'panda']
var plants = ['daffodil', 'tulip', 'oak', 'snake plant']
var chocolates = ['white', 'black', 'milk']

console.log(
  "CASE for concat animals array and plants array should return the array ['sloth', 'llama', 'gecko', 'panda', 'daffodil', 'tulip', 'oak', 'snake plant']"
)
console.log(concat(animals, plants))
// ['sloth', 'llama', 'gecko', 'panda', 'daffodil', 'tulip', 'oak', 'snake plant']

console.log(
  "CASE for concat plants array and animals array should return the array ['daffodil', 'tulip', 'oak', 'snake plant','sloth', 'llama', 'gecko', 'panda']"
)
console.log(concat(plants, animals))
// ['daffodil', 'tulip', 'oak', 'snake plant','sloth', 'llama', 'gecko', 'panda']

console.log(
  "CASE for concat plants array and animals array and chocolates array should return the array ['daffodil', 'tulip', 'oak', 'snake plant','sloth', 'llama', 'gecko', 'panda', 'white', 'black', 'milk]"
)
console.log(concat(plants, animals, chocolates))
// ['daffodil', 'tulip', 'oak', 'snake plant','sloth', 'llama', 'gecko', 'panda', 'white', 'black', 'milk]

console.log(
  "CASE for concat plants array and colours array should return the array 'ReferenceError: colours is not defined'"
)
console.log(concat(plants, colours))
// ReferenceError: colours is not defined

console.log('------------------------------------------')
