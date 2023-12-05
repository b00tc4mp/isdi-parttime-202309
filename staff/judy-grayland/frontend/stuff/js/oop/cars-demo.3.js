function Car(brand, model) {
        this.brand = brand
        this.model = model
}

// Note Js does these automatically (on first level)
// Car.prototype = Object.create(Object.prototype)
// Car.prototype.constructor = Car

function Ferrari(model) {
    Car.call(this,'Ferrari', model)
}

Ferrari.prototype.Object.create(Car.prototype)
Ferrari.prototype.constructor = Ferrari

function Lamborghini(model) {
    Car.call(this,'Lamborghini', model)
}

Lamborghini.prototype.Object.create(Car.prototype)
Lamborghini.prototype.constructor = Lamborghini
class Lamborghini extends Car {
    constructor(model) {
        super('Lamborghini', model)
    }
}

const testarossa = new Ferrari('Testarossa')
const f350 = new Ferrari ('F350')
const diablo = new Lamborghini('Diablo')
const aventador = new Lamborghini('Aventador')
const beetle = new Car('Volkswagen')