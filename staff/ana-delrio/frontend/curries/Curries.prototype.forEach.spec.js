console.log('TEST Curry forEach')
console.log('CASE for each element in [10, 20, 30] print it in the console')

// Crea una instancia de la función Curry con tres elementos
var cForEach = new Curry(10, 20, 30)

// Define una función llamada printElements que imprime un elemento en la consola
function printElements(element) {
    console.log(element)
}

// Llama al método 'forEach' en el objeto 'cForEach' con la función printElements como callback
var result = cForEach.forEach(printElements)

console.log(result)
// 10, 20, 30


console.log('-------------------------------------------------')



console.log('CASE for each element in [10, 20, 30] print it multiplied by 10 in the console')

var cForEach = new Curry(10, 20, 30)

function multipliedElements(element) {
    console.log(element * 10)
}

var result = cForEach.forEach(multipliedElements)
console.log(result)
// 100, 200, 300


console.log('-------------------------------------------------')



console.log('CASE for each element in [10, 20, 30] print it divided by 2 ')

var cForEach = new Curry(10, 20, 30)

function dividedElements(element) {
    console.log(element / 2)
}

result = cForEach.forEach(dividedElements)
console.log(result)
// 5, 10, 15