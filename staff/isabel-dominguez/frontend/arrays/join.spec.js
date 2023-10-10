console.log('TEST join')

const elements = ["Fire", "Air", "Water"];

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "FireAirWater"')
console.log(join(elements, ''));
// "FireAirWater"

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "Fire-Air-Water"')
console.log(join(elements, '-'));
// "Fire-Air-Water"

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "Fire**Air**Water"')
console.log(join(elements, '**'));
// "Fire**Air**Water"

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "Fire-^-^-^-^-Air-^-^-^-^-Water"')
console.log(join(elements, '-^-^-^-^-'));
// "Fire-^-^-^-^-Air-^-^-^-^-Water"

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "Fire(❁´◡`❁)Air(❁´◡`❁)Water"')
console.log(join(elements, '(❁´◡`❁)'));
// "Fire(❁´◡`❁)Air(❁´◡`❁)Water"

console.log('CASE for array elements = ["Fire", "Air", "Water"] results in "Fire,Air,Water"')
console.log(join(elements));
// "Fire,Air,Water"