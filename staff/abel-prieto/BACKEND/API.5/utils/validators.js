// VALIDATORS REGISTER AND LOGIN

function validateText(string, explain) {
    if (typeof string !== 'string') throw new TypeError(string + ' is not string')
    if (!string.trim().length) throw new Error(explain + ' is empty')
}

function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function validateFunction(funktion, explain) {
    if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

module.exports = {
    validateNumber,
    validateText,
    validateFunction
}