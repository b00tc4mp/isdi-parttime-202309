console.log('TEST slice')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log('CASE for slice (array: animals) index 2, end not defined, results in ["camel", "duck", "elephant"]')
console.log(slice(animals, 2))
//["camel", "duck", "elephant"]


console.log('CASE for slice (array: animals) index 2, end 4, results in ["camel", "duck"]')
console.log(slice(animals, 2, 4))
//["camel", "duck"]


console.log('CASE for slice (array: animals) index 1, end 5, results in ["bison", "camel", "duck", "elephant"]')
console.log(slice(animals, 1, 5))
//["bison", "camel", "duck", "elephant"]


console.log('CASE for slice (array: animals) index -2, end undefinied, results in ["duck", "elephant"]')
console.log(slice(animals, -2))
//["duck", "elephant"]

console.log('CASE for slice (array: animals) index -2, end -1, results in ["camel", "duck"]')
console.log(slice(animals, 2, -1))
//["camel", "duck"]

console.log('CASE for slice (array: animals) index undefined, end undefinied, results in ["ant", "bison", "camel", "duck", "elephant"]')
console.log(slice(animals))
//["ant", "bison", "camel", "duck", "elephant"]
