console.log('TEST join arrays')

var arrayvegan = ['tomato', 'carrot', 'pumpkin']

console.log('CASE for arrayvegan array with comma and space should return the string "tomatocarrotpumpkin"')
console.log(join(arrayvegan, ','))
//'tomatocarrotpumpkin'

console.log('CASE for arrayvegan array with comma and space should return the string "tomato🍅carrot🍅pumpkin"')
console.log(join(arrayvegan, '🍅'))
//'tomato🍅carrot🍅pumpkin'

console.log('CASE for arrayvegan array with comma and space should return the string "tomato##carrot##pumpkin"')
console.log(join(arrayvegan, '##'))
//'tomato##carrot##pumpkin'

console.log('CASE for arrayvegan array with comma and space should return the string "tomato^-^carrot^-^pumpkin"')
console.log(join(arrayvegan, '^-^'))
//'tomato^-^carrot^-^pumpkin'




