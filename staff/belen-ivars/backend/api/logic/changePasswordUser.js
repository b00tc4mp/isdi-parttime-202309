const CSV = require('../utils/CSV')
const { validateText, validateFunction } = require('../utils/validators')

function changePasswordUser(userId, password, newPassword, newPasswordConfirm, callback) {
	validateText(userId, 'user id')
	validateText(password, 'password')
	validateText(newPassword, 'new password')
	validateText(newPasswordConfirm, 'new password confirm')
	validateFunction(callback, 'callback')

	CSV.loadAsObject('./data/users.csv', (error, users) => {
		if (error) {
			callback(error)

			return
		}

		let user = users.find(user => user.id === userId)

		if (!user) {
			callback(new Error('user not found'))

			return
		}

		if (password !== user.password) {
			callback(new Error('wrong credentials'))

			return
		}

		if (newPassword !== newPasswordConfirm) {
			callback(new Error('new password and new password confirm does not match'))

			return
		}

		if (newPassword === user.password) {
			callback(new Error('new password must be different'))

			return
		}

		user.password = newPassword

		CSV.saveFromObject('./data/users.csv', users, error => {
			if (error) {
				callback(error)

				return
			}

			callback(null, user.id)
		})
	})
}

module.exports = changePasswordUser