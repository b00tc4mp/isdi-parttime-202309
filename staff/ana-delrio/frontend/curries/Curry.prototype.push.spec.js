console.log('<->-<-><->-<-><->-<-><->-<-><->-<-><->-<-><->-<-')


console.log('TEST Curry push')
console.log('CASE push 1 element')

// Crea una instancia de la función Curry con tres elementos
var c = new Curry(10, 20, 30)

// Llama al método 'push' en el objeto 'c' para agregar un elemento (40)
var length = c.push(40)

console.log(length)
// 4
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, length: 4 }


console.log('-------------------------------------------------')


console.log('CASE push 3 elements')

// Crea una instancia de la función Curry con tres elementos iniciales (10, 20, 30)
var c = new Curry(10, 20, 30)

// Llama al método 'push' en el objeto 'c' para agregar tres elementos (40, 50, 60)
var length = c.push(40, 50, 60)

console.log(length)
// 6
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6 }


console.log('-------------------------------------------------')


console.log('CASE push no elements')

// Crea una instancia de la función Curry con tres elementos iniciales (10, 20, 30)
var c = new Curry(10, 20, 30)

// Llama al método 'push' en el objeto 'c' sin pasar ningún elemento
var length = c.push()

console.log(length)
// 3
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }


console.log('<->-<-><->-<-><->-<-><->-<-><->-<-><->-<-><->-<-')