const { validateText, validateFunction, validateId } = require('./helpers/validators')

const { SystemError } = require('./errors')

const { Post, User } = require('../data/models')

function createPost(userId, image, text, callback) {
    validateId(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }
            const post = new Post({ author: userId, image, text })

            post.save()

                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })

        .catch(error => callback(new SystemError(error.message)))


}

module.exports = createPost
