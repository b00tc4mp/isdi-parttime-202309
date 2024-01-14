const { User, Post } = require('../data/models.js')
const { NotFoundError, SystemError } = require('./errors.js')
const { validateText, validateFunction, validateId } = require('./helpers/validators.js')


function createPost(userId, image, text, callback) {
    validateId(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            Post.create({ author: userId, image, text })
                .then(callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createPost