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

class RelationalError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class TokenError extends Error {
    constructor(message) {
        super(message)

        this.name = this.contructor.name
    }
}

export {
    NotFoundError,
    SystemError,
    ContentError,
    DuplicityError,
    CredentialsError,
    RelationalError,
    TokenError
}