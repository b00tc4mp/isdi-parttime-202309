const { validateText, validateFunction, validateId } = require('./helpers/validators')

const { SystemError } = require('./errors')

const { Post } = require('../data/models')

function createPost(userId, image, text, callback) {
    validateId(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    const post = new Post({ author: userId, image, text })

    post.save()
        .then(() => callback(null))
        .catch(error => callback(new SystemError(error.message)))


}

module.exports = createPost
