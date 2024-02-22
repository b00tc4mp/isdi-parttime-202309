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
  DuplicityError,
  CredentialsError,
  TokenError,
}
// this is an object
const errors = {
  NotFoundError,
  SystemError,
  ContentError,
  DuplicityError,
  CredentialsError,
  TokenError,
}

export default errors
