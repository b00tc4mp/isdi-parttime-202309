console.log('TEST join arrays')

var arrayvegan = ['tomato', 'carrot', 'pumpkin']

console.log('CASE for arrayvegan array with comma and space should return "tomatocarrotpumpkin"')
console.log(arrayvegan.join(''))
//'tomatocarrotpumpkin'

console.log('CASE for arrayvegan array with comma and space should return "tomato🍅carrot🍅pumpkin"')
console.log(arrayvegan.join('🍅'))
//'tomato🍅carrot🍅pumpkin'

console.log('CASE for arrayvegan array with comma and space should return"tomato##carrot##pumpkin"')
console.log(arrayvegan.join('##'))
//'tomato##carrot##pumpkin'

console.log('CASE for arrayvegan array with comma and space should return "tomato^-^carrot^-^pumpkin"')
console.log(arrayvegan.join('^-^'))
//'tomato^-^carrot^-^pumpkin'




