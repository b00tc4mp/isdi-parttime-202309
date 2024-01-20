const { User, Post } = require('../data/models')
const validate = require('./helpers/validate')

function changePasswordUser(userId, password, newPassword, newPasswordConfirm, callback) {
	validate.id(userId, 'user id')
	validate.text(password, 'password')
	validate.text(newPassword, 'new password')
	validate.text(newPasswordConfirm, 'new password confirm')
	validate.funktion(callback, 'callback')

	// TODO

}

module.exports = changePasswordUser