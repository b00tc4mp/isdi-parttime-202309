function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not string')
    if (!text.trim().length) throw new Error(explain + ' is empty')
}

function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function validateObject(object, explain) {
    if (typeof object !== 'object' && object !== null ) throw new TypeError(`${explain} is not a number`)
}

function validateFunction(funktion, explain) {
    if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

function validateCSVFile(file, explain) {
    if (!file.name.endsWith('.csv')) throw new TypeError(`${explain} is not a CSV file`)
}

module.exports = {
    validateText,
    validateNumber,
    validateObject,
    validateFunction,
    validateCSVFile
}