//OBJECT ORIENTED PROGRAMMING  (programacion orientada a objetos)

// •instanceof = verifica si un objeto pertenece a una clase determinada


function Person(name, gender) {
    this.name = name
    this.gender = gender
}


Person.prototype.love = function (kiss) {
    return '👨' + '👩' + kiss
}

Person.prototype.eat = function (food) {
    return '🍴' + '🍔' + food
}

Person.prototype.friend = function (dog) {
    return '🐩' + dog
}

Person.prototype.procreate = function (person) {
    if (!(person instanceof Person))
        throw new Error(person + ' is not a Person')

    if (person.gender === this.gender)
        throw new Error('person gender ' + person.gender + ' is not complementary with ' + this.gender)

    return new Person(null, Math.random() > 0.5 ? 'female' : 'male')
}



var peter = new Person('Peter', 'male')
var wendy = new Person('Wendy', 'female')

wendy.friend('🐶')
peter.love('=👶')
peter.eat('=😬🪥')
wendy.friend('🐶')


var child = wendy.procreate(peter)
child.name = child.gender === 'female' ? 'Petra' : 'Wendo'
console.log(child)

