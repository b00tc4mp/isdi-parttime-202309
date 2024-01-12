// VALIDATORS REGISTER AND LOGIN

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
import { ContentError } from '../errors'

function text(string, explain = 'text') {
    if (typeof string !== 'string') throw new TypeError(`${string} is not valid`)
    if (!string.trim().length) throw new Error(`${explain} is empty`)
}

function email(email, explain = 'email') {
    text(email, explain)
    if (!EMAIL_REGEX.test(email)) throw new ContentError(`${explain} is not valid`)
}

function password(password, explain = 'password') {
    text(password, explain)
    if (password.length < 8) throw new RangeError(`${explain} length is lower than 8 characters`)
}

function number(number, explain = 'number') {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not valid`)
}

function funktion(funcktion, explain = 'function') {
    if (typeof funcktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

const validate = {
    number,
    email,
    password,
    text,
    function: funktion
}

export default validate

