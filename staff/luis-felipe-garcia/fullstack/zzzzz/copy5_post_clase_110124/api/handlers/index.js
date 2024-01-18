const registerUserHandler = require('./registerUserHandler')
const authenticateUserHandler = require('./authenticateUserHandler')
const retrieveUserHandler = require('./retrieveUserHandler')
const retrievePostsHandler = require('./retrievePostsHandler')
const createPostHandler = require('./createPostHandler')
const toggleLikePostHandler = require('./toggleLikePostHandler')
const toggleFavPostHandler = require('./toggleFavPostsHandler')
const retrieveFavPostsHandler = require('./retrieveFavPostsHandler')

module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    retrieveFavPostsHandler
}