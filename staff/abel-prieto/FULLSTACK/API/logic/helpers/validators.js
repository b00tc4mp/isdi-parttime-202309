// VALIDATORS REGISTER AND LOGIN

const { isObjectIdOrHexString } = require('mongoose')
const { ContentError } = require('../errors')

function validateText(string, explain) {
    if (typeof string !== 'string') throw new TypeError(string + ' is not string')
    if (!string.trim().length) throw new ContentError(explain + ' is empty')
}

function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function validateFunction(funktion, explain) {
    if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

function validateId(id, explain) {
    if (!isObjectIdOrHexString(id)) throw new ContentError(`${explain} is not a valid id`)
}

module.exports = {
    validateNumber,
    validateText,
    validateFunction,
    validateId
}