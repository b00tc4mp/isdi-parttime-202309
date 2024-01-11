const validate = require('./helpers/validate')
const { DuplicityError, SystemError } = require('./errors')

const { User } = require('../data/models')

function registerUser(name, email, password, callback) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(password, 'password')
    validate.function(callback, 'callback')

    // const user = new User({ name, email, password })
    // user.save()

    User.create({ name, email, password })
        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new DuplicityError('user already exists'))

                return
            }

            callback(new SystemError(error.message))
        })
}

module.exports = registerUser