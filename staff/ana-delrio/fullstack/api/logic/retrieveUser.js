
const { validateFunction, validateId } = require('./helpers/validators')

const { User } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')


function retrieveUser(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    // que el findby solo me traiga el userid con el nombre
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