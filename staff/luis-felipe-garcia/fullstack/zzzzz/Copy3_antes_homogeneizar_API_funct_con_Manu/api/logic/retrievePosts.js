const { validateId, validateFunction } = require("./helpers/validators")
const { User, Post } = require('../data/models')
const { SystemError, NotFoundError, CredentialsError } = require('./errors')
const { ObjectId } = require('mongoose').Types

function retrievePosts(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            Post.find({ author: new ObjectId(userId) }).exec()
                .then(userPosts => callback(null, userPosts))
                .catch(error => callback(new SystemError(error.message)))

        })

        .catch(error => callback(new SystemError(error.message)))

}

module.exports = retrievePosts