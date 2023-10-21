console.log('<->-<-><->-<-><->-<-><->-<-><->-<-><->-<-><->-<-')


console.log('TEST Curry indexOf')

console.log('CASE for curry indexOf 20 should return 1')

// Crea una instancia de la función Curry con tres elementos
var cIndexOf = new Curry(10, 20, 30)

// Llama al método 'push' en el objeto 'c' para agregar un elemento (40)
var result = cIndexOf.indexOf(10)

console.log(result)
// 0


console.log('-------------------------------------------------')


console.log('CASE for new Curry(10, 20, 30) indexOf "30" results in 2')

var cIndexOf = new Curry(10, 20, 30)

var result = cIndexOf.indexOf(30)

console.log(result)
// 2


console.log('-------------------------------------------------')


console.log('CASE for new Curry(10, 20, 30) indexOf "40" results in -1')

var cIndexOf = new Curry(10, 20, 30)

var result = cIndexOf.indexOf(40)

console.log(result)
// -1


console.log('<->-<-><->-<-><->-<-><->-<-><->-<-><->-<-><->-<-')