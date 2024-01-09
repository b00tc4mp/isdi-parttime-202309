const { validateFunction, validateId } = require('./helpers/validators')
const { SystemError, NotFoundError } = require('./errors')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
	validateId(userId, 'user id')
	validateFunction(callback, 'callback')

	User.findById(userId, 'name').lean()
		.then(user => {
			if (!user) {
				callback(new NotFoundError('user not found'))

				return
			}

			delete user._id

			callback(null, user)
		})
		.catch(error => callback(new SystemError(error.message)))

}

module.exports = retrieveUser