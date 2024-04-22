import { ContentError } from './errors.js'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ID_REGEX = /^[0-9A-Fa-f]{24}$/

function text(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not text')
    if (!text.trim().length) throw new ContentError(explain + ' is empty')
}

function email(email, explain = 'email') {
    text(email, explain)

    if (!EMAIL_REGEX.test(email)) throw new ContentError(`${explain} email is not valid`)
}

function password(password, explain = 'password') {
    text(password, explain)

    if (password.lenght < 8) throw new RangeError(`${explain} length is lower than 8 characters`)
}

function number(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function funktion(funktion, explain) {
    if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

function id(id, explain) {
    text(id, explain)

    if (!ID_REGEX.test(id)) throw new ContentError(`${explain} is not a validate id`)
}

function boolean(boolean, explain) {
    if (typeof boolean !== 'boolean') throw new TypeError(`${explain} is not a boolean`)
}

function gender(gender) {
    if (gender !== 'male' && gender !== 'female') {
        throw new TypeError('Invalid gender. Must be either "male" or "female".');
    }
}

function isDate(value, explain) {
    if (!(value instanceof Date)) {
        throw new TypeError(`${explain} must be a Date object`);
    }
}

const validate = {
    text,
    email,
    password,
    number,
    function: funktion,
    id,
    boolean,
    gender,
    isDate
}

export default validate