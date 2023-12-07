function validateText(text, explain) {
	if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
	if (!text.trim().length) throw new Error(explain + ' is empty')
}

function validateNumber(number, explain) {
	if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function validateFunction(funktion, explain) {
	if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

module.exports = {
	validateText,
	validateNumber,
	validateFunction
}