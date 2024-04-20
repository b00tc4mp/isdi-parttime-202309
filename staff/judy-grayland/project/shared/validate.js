import { ContentError } from './errors.js'

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// to ensure it's a mongoose id:
const ID_REGEX = /^[0-9A-Fa-f]{24}$/

function text(text, explain) {
  if (typeof text !== 'string') throw new TypeError(explain + ' is not string')
  if (!text.trim().length) throw new ContentError(explain + ' is empty')
}

function id(id, explain) {
  text(id, explain)

  if (!ID_REGEX.test(id)) throw new ContentError(`${explain} is not a valid id`)
}

function email(email, explain) {
  text(email, explain)

  if (!EMAIL_REGEX.test(email))
    throw new ContentError(`The ${explain} provided is not valid`)
}

function password(password, explain = 'password') {
  text(password, explain)
  if (password.length < 8)
    throw new RangeError(`The ${explain} must be at least 8 characters long`)
}

function number(number, explain) {
  if (typeof number !== 'number')
    throw new TypeError(`${explain} is not a number`)
}

function funktion(funktion, explain) {
  if (typeof funktion !== 'function')
    throw new TypeError(`${explain} is not a function`)
}

function resourceType(resourceType, explain) {
  text(resourceType, explain)
  if (
    resourceType !== 'book' &&
    resourceType !== 'activity' &&
    resourceType !== 'specialDate'
  )
    throw new TypeError(`${resourceType} is not a valid resource type`)
}

function tagArray(tags) {
  if (!Array.isArray(tags)) {
    throw new TypeError('Tags must be an array')
  }
  if (tags.some((tag) => typeof tag !== 'string')) {
    throw new TypeError('The tags array must only contain strings')
  }
}

function ageRange(ages) {
  if (!Array.isArray(ages)) {
    throw new TypeError('ageRange must be an array')
  }
  if (ages.some((age) => typeof age !== 'string')) {
    throw new TypeError('The ageRange array must only contain strings')
  }
}

const validate = {
  text,
  id,
  email,
  password,
  number,
  function: funktion,
  resourceType,
  tagArray,
  ageRange,
}

export default validate
