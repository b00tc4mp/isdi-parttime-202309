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

class ContentError extends Error {
    constructor(message) {

        super(message)

        this.name = this.constructor.name
    }
}

class DuplicityError extends Error {
    constructor(message) {

        super(message) // podemos ponerle el message aqui?

        this.name = this.constructor.name
    }
}

class AuthenticateError extends Error {
    constructor(message) {

        super(message)

        this.name = this.constructor.name
    }
}



module.exports = {
    NotFoundError,
    SystemError,
    ContentError,
    DuplicityError,
    AuthenticateError
}