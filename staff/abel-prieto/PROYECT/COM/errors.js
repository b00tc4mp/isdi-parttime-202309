
// TYPE ERRORS

class ContentError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class CredentialsError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class DuplicityError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

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

class UknownCommandError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class TokenError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

export {
    ContentError,
    CredentialsError,
    DuplicityError,
    NotFoundError,
    SystemError,
    UknownCommandError,
    TokenError
}

const errors = {
    ContentError,
    CredentialsError,
    DuplicityError,
    NotFoundError,
    SystemError,
    UknownCommandError,
    TokenError
}

export default errors