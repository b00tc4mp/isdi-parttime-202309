const validate = require('./helpers/validate')
const { Post } = require('../data/models')
const { SystemError } = require('./errors')

function retrieveAllDatabasePosts(callback) {
    validate.function(callback, 'callback')

    Post.find({})
        .then(userPosts => callback(null, userPosts))
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrieveAllDatabasePosts