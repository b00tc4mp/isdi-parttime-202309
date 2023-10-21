// es una función de los arrays en JavaScript que se utiliza para buscar el primer elemento en un array 
// que cumple con ciertos criterios definidos en una función de prueba (callback)

console.log('<->-<-><->-<-><->-<-><->-<-><->-<-><->-<-><->-<-')



console.log('TEST Curry find')
console.log('CASE find cFind to the elements > 11')

// Crea una instancia de la función Curry con tres elementos
var cFind = new Curry(10, 20, 30)

// Definición de una función llamada IsGreaterThan11 que toma un elemento y verifica si es mayor que 11
function IsGreaterThan11(element) {
    return element > 11
}

// Llama al método 'filter' en el objeto 'cFind' con la función numbersGreater11 como callback
var result = cFind.find(IsGreaterThan11)

console.log(result)
// Curry {0: 20, 1: 30, length: 2}


console.log('-------------------------------------------------')



console.log('CASE find cFind to the elements < 11')

var cFind = new Curry(10, 20, 30)

function isLessThan11(element) {
    return element < 11;
}

var result = cFind.find(isLessThan11)

console.log(result)
// Curry {0: 10, length: 1}


console.log('<->-<-><->-<-><->-<-><->-<-><->-<-><->-<-><->-<-')