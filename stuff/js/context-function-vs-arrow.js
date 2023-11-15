// demo #1

var car = {
    status: 'off',

    start() {
        setTimeout(function () {
            debugger
            this.status = 'on'
        }, 3000)
    }
}

car.start()

car.status
// off
window.status
// on

// demo #2

var car = {
    status: 'off',

    start() {
        setTimeout(function () {
            debugger
            this.status = 'on'
        }.bind(this), 3000)
    }
}

car.start()

car.status
// on
window.status
// ''

// demo #3

var car = {
    status: 'off',

    start() {
        setTimeout(() => {
            debugger
            this.status = 'on'
        }, 3000)
    }
}

car.start()

car.status
// on
window.status
// ''
