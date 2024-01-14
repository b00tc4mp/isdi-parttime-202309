const { validateFunction } = require("./helpers/validators")
const { Post } = require('../data/models')
const { SystemError } = require('./errors')

function retrieveAllDatabasePosts(callback) {
    validateFunction(callback, 'callback')

    Post.find({})
        .then(userPosts => callback(null, userPosts))
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrieveAllDatabasePosts