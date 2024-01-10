const { Post, User } = require('../data/models')
const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, NotFoundError } = require("./errors")

function createPosts(userId, image, text, callback) {
    validateText(userId, "user")
    validateText(image, "image")
    validateText(text, "text")
    validateFunction(callback, "callback")

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.create({ author: userId, image, text })
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createPosts