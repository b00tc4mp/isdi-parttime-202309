const { Post } = require('../data/models')
const { validateText, validateFunction } = require('./helpers/validators')
const { SystemError, DuplicityError } = require("./errors")

function createPosts(userId, image, text, callback) {
    validateText(userId, "user")
    validateText(image, "image")
    validateText(text, "text")
    validateFunction(callback, "callback")

    Post.create({ author: userId, image, text })
        .then(() => callback(null))
        .catch(error => {
            if (error.code == 11000) {
                callback(new DuplicityError('post already exist'))

                return
            }

            callback(new SystemError(error.message))
        })
    
}

module.exports = createPosts