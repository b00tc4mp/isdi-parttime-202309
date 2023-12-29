const { User, Post } = require('../data/models.js')
const { NotFoundError, SystemError } = require('./errors.js')
const { validateText, validateFunction, validateId } = require('./helpers/validators.js')


function createPost(author, image, text, callback) {
    validateId(author, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    User.findById(author)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            Post.create({ author, image, text })
                .then(callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createPost