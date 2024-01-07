const CSV = require('../utils/CSV')
const { validateText, validateFunction } = require('../utils/validators')

function changeEmailUser(userId, email, newEmail, newEmailConfirm, callback) {
	validateText(userId, 'user id')
	validateText(email, 'email')
	validateText(newEmail, 'new email')
	validateText(newEmailConfirm, 'new email confirm')
	validateFunction(callback, 'callback')

	CSV.parseFromFile('./data/users.csv', (error, users) => {
		if (error) {
			callback(error)

			return
		}

		let user = users.find(user => user.id === userId)

		if (!user) {
			callback(new Error('user not found'))

			return
		}

		if (email !== user.email) {
			callback(new Error('wrong credentials'))

			return
		}

		if (newEmail !== newEmailConfirm) {
			callback(new Error('new email and new email confirm does not match'))

			return
		}

		if (newEmail === user.email) {
			callback(new Error('new email must be diferent'))

			return
		}

		user.email = newEmail

		CSV.stringifyToFile('./data/users.csv', users, error => {
			if (error) {
				callback(error)

				return
			}

			callback(null, user.id)
		})
	})
}

module.exports = changeEmailUser