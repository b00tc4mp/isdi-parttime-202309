const { User } = require('../data/models')
const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, DuplicityError } = require('../utils/errors')

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    // const user = new User({ name: name, email: email, password: password })
    // user.save()
        
    User.create({ name, email, password })
        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new DuplicityError('user already exist'))

                return
            }

            callback(new SystemError(error.message))
        })
    
}

module.exports = registerUser