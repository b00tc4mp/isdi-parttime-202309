const { validateText, validateFunction } = require('./helpers/validators')
const { DuplicityError, SystemError } = require('./errors')

const {User} = require('../data/models')

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    //const user = new User({name, email, password})
    //user.save()
    //User.create() resume las dos línneas anteriores en una sola línea
    User.create({name, email, password})
        .then(() => callback(null))
        .catch(error => {
            //11000 es un código que pone el objeto de error mongoose cuando detecta que se produce una duplicidad
           if(error.code === 11000) {
            callback(new DuplicityError('user already exists'))

            return 
           }
            callback(new SystemError(error.message))
        })
  
}

module.exports = registerUser