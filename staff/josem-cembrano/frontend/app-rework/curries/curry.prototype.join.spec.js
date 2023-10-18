var c = new Curry('hello', 'world', '=>')
var element = c.join('-')
console.log('CASE for curry "hello world" join (curry, element) should result in new string : hello-world-=>-')
console.log(join(element))
// "hello-world-=>"
