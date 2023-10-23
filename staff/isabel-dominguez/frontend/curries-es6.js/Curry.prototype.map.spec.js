TEST(' Curry map')
console.log("****************************************************************************************************************************************")

CASE('map new Curry(10, 20, 30) to new array with elements multiplied by 2 ')

let cMap = new Curry(10, 20, 30)

function multipliedElements2(elements) {
    return elements * 2
}

let result = cMap.map(multipliedElements2)
console.log(result)
// 20, 40, 60


CASE('map new Curry(10, 20, 30) to new array with elements multiplied by 62 ')

let cMap = new Curry(10, 20, 30)

function multipliedElements62(elements) {
    return elements * 62
}

let result = cMap.map(multipliedElements62)
console.log(result)
// 620, 1240, 1860
