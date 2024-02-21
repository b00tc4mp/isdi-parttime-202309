import { ContentError } from './errors.js'
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ID_REGEX = /^[0-9A-Fa-f]{24}$/

function text(text, explain = 'text') {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not valid')
    if (!text.trim().length) throw new ContentError(explain + ' is empty')
}

function email(email, explain = 'email') {
    text(email, explain)

    if (!EMAIL_REGEX.test(email)) throw new ContentError(`${explain} is not valid`)
}

function number(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function funktion(funktion, explain) {
    if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

function id(id, explain = 'id') {
    text(id, explain)

    if (!ID_REGEX.test(id)) throw new ContentError(`${explain} is not valid`)
}

function password(password, explain = 'password') {
    text(password, explain)

    if (password.length < 8) throw new RangeError(`${explain} length is lower than 8 characters`)
}

function pincode(password, explain = 'pincode') {
    text(password, explain)

    if (password.length !== 4) throw new RangeError(`${explain} pincode must be 4 characters long`)
}

function array(array, explain) {
    if (!Array.isArray(array)) throw new TypeError(`${explain} is not an array`)
}

function date(date, explain) {
    if (!(date instanceof Date)) throw new TypeError(`${explain} is not a date`)
}

function boolean(boolean, explain) {
    if (typeof boolean !== 'boolean') throw new TypeError(`${explain} is not a boolean`)
}

const validate = {
    text,
    email,
    number,
    function: funktion,
    id,
    password,
    pincode,
    array,
    date,
    boolean
}

export default validate