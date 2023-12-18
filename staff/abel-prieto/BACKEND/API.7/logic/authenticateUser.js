const JSON = require('../utils/JSON')
const { ContentError, NotFoundError, SystemError } = require('../utils/errors')
const {validateText, validateFunction} = require('../utils/validators')

function authenticateUser(email, password, callback) {
    validateText(email, 'name')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    JSON.parseFromFile("./data/users.json", (error, users) => {
        if (error) {
            callback(new SystemError(error.message))

            return
        }

        let user = users.find(user => user.email === email)

        if (!user) {
            callback(new NotFoundError('user not found'))

            return
        }

        if (password !== user.password) {
            callback(new ContentError('wrong credentials'))

            return
        }

        callback(null, user.id)
    })
}

module.exports = authenticateUser