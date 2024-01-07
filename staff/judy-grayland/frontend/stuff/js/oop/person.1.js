function Person(name, gender) {
  this.name = name
  this.gender = gender
}

Person.prototype.eat = function (food) {
  return '👄' + food
}

Person.prototype.brushTeeth = function (paste) {
  return '👄 🪥' + paste
}

Person.prototype.poo = function () {
  return '🚽💩💦'
}

var peter = new Person('Peter', 'male')

peter.eat('🍔')
peter.brushTeeth('🍰')
peter.poo()
