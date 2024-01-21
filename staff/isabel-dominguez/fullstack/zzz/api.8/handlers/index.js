const registerUserHandler = require('./registerUserHandler')
const authenticateUserHandler = require('./authenticateUserHandler')
const retrieveUserHandler = require('./retrieveUserHandler')
const retrievePostsHandler = require('./retrievePostsHandler')
const createPostHandler = require('./createPostHandler')
const toggleLikePostHandler = require('./toggleLikePostHandler')
const toggleFavPostHandler = require('./toggleFavPostHandler')
const changeUserEmailHandler = require('./changeUserEmailHandler')
const changeUserPasswordHandler = require('./changeUserPasswordHandler')
const deletePostHandler = require('./deletePostHandler')
const deleteUserHandler = require('./deleteUserHandler')
const retrieveFavPostsHandler = require('./retrieveFavPostsHandler')
const updatePostTextHandler = require('./updatePostTextHandler')


module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    changeUserEmailHandler,
    changeUserPasswordHandler,
    deletePostHandler,
    deleteUserHandler,
    retrieveFavPostsHandler,
    updatePostTextHandler
}