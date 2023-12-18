class NotFoundError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class SystemError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

module.exports = {
    NotFoundError,
    SystemError
}