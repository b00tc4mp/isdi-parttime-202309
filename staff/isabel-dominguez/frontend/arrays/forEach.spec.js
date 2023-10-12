console.log('TEST forEach')
console.log('***********************************************************************************************')

console.log('CASE for each element in [10, 20, 30] print it in the console')

var a = [10, 20, 30]

forEach(a, function (v) {
    console.log(v)
})

console.log('CASE for each element in [10, 20, 30] print it multiplied by 10 in the console')

var a = [10, 20, 30]

forEach(a, function (v) {
    console.log(v * 10)
})

console.log('CASE for each element in [10, 20, 30] print it multiplied by 10 and rest 1 in the console')

var a = [10, 20, 30]

forEach(a, function (v) {
    console.log(v * 10 - 1)
})