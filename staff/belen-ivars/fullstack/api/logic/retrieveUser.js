const validate = require('./helpers/validate')
const { SystemError, NotFoundError } = require('./errors')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
	validate.id(userId, 'user id')
	validate.funktion(callback, 'callback')

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