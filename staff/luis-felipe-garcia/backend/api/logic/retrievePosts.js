const { validateFunction } = require("./helpers/validators")
const { Post } = require('../data/models')
const { SystemError } = require('./errors')

function retrievePosts(callback) {
    validateFunction(callback, 'callback')

    Post.find({})
        .then(userPosts => callback(null, userPosts))
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrievePosts