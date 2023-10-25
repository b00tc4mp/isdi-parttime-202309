class Car {
    constructor(brand, model, engine) {
        this.brand = brand
        this.model = model
        this.engine = 'off'
    }

    start() {this.engine = 'on'}
    stop() {this.engine = 'off'}
    maxSpeed = 120
}

class Ferrari extends Car {
    constructor(model){
        super('Ferrari', model)
    }
}