function Person(name, gender, age) {
    this.name = name 
    this.gender = gender
    this.age = age
};
// Utilizamos el THIS para referirnos a NUESTRA función, "ésta función"

var abel = new Person('Abel', 'Male', '29');
var cristina = new Person('Cristina', 'Female', '29')
// Con el término NEW creamos un nuevo objeto en memoria

abel
// Person {name: Abel; gender: Male; age: 29}

cristina
// Person {name: Cristina; gender: Female; age: 29}

Person.prototype.eat = function(food) {
    return ' come un/una' + food
}
// Con el término 'prototype' podemos asignar/crear métodos a nuestro nuevo objeto 

Person.prototype.brushTeeth = function(paste) {
    return 'se lava los dientes con' + paste
}


abel.eat('manzana')
// Abel come un/una manzana

abel.brushTeeth('colgate')
// Abel se lava los dientes con colgate

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

Person.prototype.procreate = function(person) {
    if (!(person instanceof Person))
        throw new Error(person + '  is not a Person')

    if(person.gender === this.gender)
        throw new Error('person gender ' + person.gender + 'is not complementary with' + this.gender)

    return new Person(null, Math.random() > 0.5 ? 'female' : 'male', null)
}

var child = abel.procreate(cristina)
child.name = child.gender === 'female' ? 'Petra' : 'Wendo'

console.log(child)
// Person { name: 'Wendo', gender: 'male', age: null } // CHICO
// Person { name: 'Petra', gender: 'female', age: null } // CHICA

