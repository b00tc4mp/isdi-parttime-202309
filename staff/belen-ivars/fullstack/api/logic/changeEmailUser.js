const { User, Post } = require('../data/models')
const validate = require('./helpers/validate')

function changeEmailUser(userId, email, newEmail, newEmailConfirm, callback) {
	validate.id(userId, 'user id')
	validate.email(email, 'email')
	validate.email(newEmail, 'new email')
	validate.email(newEmailConfirm, 'new email confirm')
	validate.funktion(callback, 'callback')

	// TODO
}

module.exports = changeEmailUser