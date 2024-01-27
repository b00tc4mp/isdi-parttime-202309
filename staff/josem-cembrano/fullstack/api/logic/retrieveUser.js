const validate = require('./helpers/validate')

const { User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')

const retrieveUser = (userId, callback) => {
    validate.function(callback, 'callback')
    validate.id(userId, 'userId')

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