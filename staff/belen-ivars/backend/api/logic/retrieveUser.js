const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')
const { SystemError, NotFoundError } = require('../utils/errors')

function retrieveUser(userId, callback) {
	validateText(userId, 'user id')
	validateFunction(callback, 'callback')

	JSON.parseFromFile('./data/users.json', (error, users) => {
		if (error) {
			callback(new SystemError(error.message))

			return
		}

		const user = users.find(user => user.id === userId)

		if (!user) {
			callback(new NotFoundError('user not found'))

			return
		}

		delete user.id
		delete user.password
		delete user.email
		delete user.favs

		callback(null, user)
	})
}

module.exports = retrieveUser