console.log('TEST join')

const elements = ["Fire", "Air", "Water"];

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "["FireAirWater"]"')
console.log(elements.join(''));
// ["FireAirWater"]

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "["Fire-Air-Water"]"')
console.log(elements.join('-'));
// ["Fire-Air-Water"]

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "["Fire**Air**Water"]"')
console.log(elements.join('**'));
// ["Fire**Air**Water"]

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "["Fire-^-^-^-^-Air-^-^-^-^-Water"]"')
console.log(elements.join('-^-^-^-^-'));
// ["Fire-^-^-^-^-Air-^-^-^-^-Water"]

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "["Fire(❁´◡`❁)Air(❁´◡`❁)Water"]"')
console.log(elements.join('(❁´◡`❁)'));
// ["Fire(❁´◡`❁)Air(❁´◡`❁)Water"]