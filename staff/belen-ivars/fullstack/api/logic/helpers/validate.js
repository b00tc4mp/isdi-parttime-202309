const { ContentError } = require('../errors')
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ID_REGEX = /^[0-9A-Fa-f]{24}$/

function text(text, explain) {
	if (typeof text !== 'string') throw new TypeError(`${explain} is not a string`)
	if (!text.trim().length) throw new ContentError(`${explain} is empty`)
}

function email(email, explain) {
	text(email, explain)

	if (!EMAIL_REGEX.test(email)) throw new ContentError(`${explain} is not valid`)
}


function number(number, explain) {
	if (typeof number !== 'number') throw new TypeError(`${explain} is not a number`)
}

function funktion(funktion, explain) {
	if (typeof funktion !== 'function') throw new TypeError(`${explain} is not a function`)
}

function id(id, explain) {
	text(id, explain)

	if (!ID_REGEX.test(id)) throw new ContentError(`${explain} is not valid id`)
}

const validate = {
	text,
	email,
	number,
	funktion,
	id
}

module.exports = validate