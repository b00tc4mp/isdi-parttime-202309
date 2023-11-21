function car(brand, model) {
    this.brand = brand
    this.model = model
    this.year = null
    this.color = null
    this.license = null
    this.status = 'off'

}

car.prototype.start = function () { //nueva instancia objeto en este caso car "prototype"
    this.status = 'on'
}

car.prototype.stop = function () {
    this.status = 'off'
}

var beatle = new car('Volkswagen', 'Beatle') // this y el new

