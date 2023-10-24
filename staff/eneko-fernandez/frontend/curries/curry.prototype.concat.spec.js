console.log("TEST curry concat")

var c = new Curry(10, 20, 30)

console.log('CASE concat [70,80,90] results in [10,20,30,70,80,90]')

var result = c.concat([70, 80, 90])

console.log(result)

console.log('CASE concat [70,80,90], [100,110,120] results in [10,20,30,70,80,90,100,110,120]')

var result = c.concat([70, 80, 90], [100, 110, 120])

console.log(result)



