console.log('TEST indexOf')
console.log('***********************************************************************************************')

const array7 = ["blue", "green", "yellow", "pink", "purple"];

console.log('CASE for array7 ["blue", "green", "yellow", "pink", "purple"] indexOf "green" results in 1')
console.log(indexOf(array7, "green"))
// 1

console.log('CASE for array7 ["blue", "green", "yellow", "pink", "purple"] indexOf "purple" results in 4')
console.log(indexOf(array7, "purple"))
// 4

console.log('CASE for array7 ["blue", "green", "yellow", "pink", "purple"] indexOf "blue" results in 0')
console.log(indexOf(array7, "blue"))
// 0

console.log('CASE for array7 ["blue", "green", "yellow", "pink", "purple"] indexOf "yellow" results in 2')
console.log(indexOf(array7, "yellow"))
// 2

console.log('CASE for array7 ["blue", "green", "yellow", "pink", "purple"] indexOf "red" results in -1')
console.log(indexOf(array7, "red"))
// -1

