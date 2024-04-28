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

class TypeError extends Error {
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

class RangeError extends Error {
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
class TokenError extends Error {
  constructor(message) {
    super(message)

    this.name = this.constructor.name
  }
}

// this is not an object, it's a bucket. Lo exportamos para destructurar en cualquier parte
export {
  NotFoundError,
  SystemError,
  ContentError,
  TypeError,
  RangeError,
  DuplicityError,
  CredentialsError,
  TokenError,
}
// this is an object
const errors = {
  NotFoundError,
  SystemError,
  ContentError,
  TypeError,
  RangeError,
  DuplicityError,
  CredentialsError,
  TokenError,
}

export default errors

/* 
  Error construction explained:
  
  class NotFoundError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
  }
  - class NotFoundError: a new class that extends the built-in Error class in JS.
  - constructor(message): constructor method of the NotFoundError class which is invoked when new instance of NotFoundError is created.
  - super(message): it calls the constructor of the parent class (in this case Error) and passes the message argument to it. This sets the message property of the error object to the specified message.
  - this.name = this.constructor.name: sets the 'name' property of the error object to the name of the constructor error (NotFoundError). The constructor property of an object refers to the constructor function that created the object and this.constructor.name retrieves the name of the function.
  */
