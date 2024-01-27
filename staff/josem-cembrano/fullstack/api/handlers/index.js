const registerUserHandler = require('./registerUserHandler')
const authenticateUserHandler = require('./authenticateUserHandler')
const retrieveUserHandler = require('./retrieveUserHandler')
const retrievePostsHandler = require('./retrievePostsHandler')
const retrieveFavsPostHandler = require('./retrieveFavsPostHandler')
const createPostHandler = require('./createPostHandler')
const toggleLikePostHandler = require('./toggleLikePostHandler')
const toggleFavPostHandler = require('./toggleFavPostHandler')

module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    retrieveFavsPostHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler
}