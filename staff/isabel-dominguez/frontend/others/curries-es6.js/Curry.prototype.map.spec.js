TEST(' Curry map')
console.log("****************************************************************************************************************************************")

CASE('map new Curry(10, 20, 30) to new array with elements multiplied by 2 ')

let cMap1 = new Curry(10, 20, 30)

function multipliedElements2(elements) {
    return elements * 2
}

let resultMap1 = cMap1.map(multipliedElements2)
console.log(resultMap1)
// 20, 40, 60


CASE('map new Curry(10, 20, 30) to new array with elements multiplied by 62 ')

let cMap2 = new Curry(10, 20, 30)

function multipliedElements62(elements) {
    return elements * 62
}

let resultMap2 = cMap2.map(multipliedElements62)
console.log(resultMap2)
// 620, 1240, 1860
