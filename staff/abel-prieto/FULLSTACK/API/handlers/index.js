const authenticateUserHandler = require('./authenticateUserHandler')
const changeEmailUserHandler = require('./changeEmailUserHandler')
const changePasswordUserHandler = require('./changePasswordUserHandler')
const createPostHandler = require('./createPostHandler')
const deletePostHandler = require('./deletePostHandler')
const registerUserHandler = require('./registerUserHandler')
const retrievePostHandler = require('./retrievePostHandler')
const retrieveFavPostHandler = require('./retrieveFavPostHandler')
const retrieveUserHandler = require('./retrieveUserHandler')
const toggleFavPostHandler = require('./toggleFavPostHandler')
const togglePostCommentHandler = require('./togglePostCommentHandler')
const toggleLikePostHandler = require('./toggleLikePostHandler')
const updatePostTextHandler = require('./updatePostTextHandler')

module.exports = {
    authenticateUserHandler,
    changeEmailUserHandler,
    changePasswordUserHandler,
    createPostHandler,
    deletePostHandler,
    registerUserHandler,
    retrievePostHandler,
    retrieveFavPostHandler,
    retrieveUserHandler,
    toggleFavPostHandler,
    toggleLikePostHandler,
    togglePostCommentHandler,
    updatePostTextHandler
}