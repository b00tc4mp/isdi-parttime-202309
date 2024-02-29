import { ContentError } from './errors.js'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function text(string, explain) {
    if (typeof string !== 'string') throw new TypeError(`${explain} +  is not string`)
    if (!string.trim().length) throw new ContentError(`${explain} + is empty`)
}

function email(email, explain) {
    text(email, explain)
    if (!EMAIL_REGEX.test(email)) throw new ContentError(`${explain} is not valid`)
}

function password(password, explain) {
    text(password, explain)
    if (password.length < 8) throw new RangeError(`${explain} length is lower than 8 characters`)
}

const validate = {
    text,
    email,
    password
}

export default validate