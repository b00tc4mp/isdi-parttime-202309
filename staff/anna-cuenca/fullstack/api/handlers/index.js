const registerUserHandler = require('./registerUserHandler')
const authenticateUserHandler = require('./authticateUserHandler')
const retrieveUserHandler = require('./retrieveUserHandler')
const createPostHandler = require('./createPostHandler')
const toggleLikePostHandler = require('./toggleLikePostHandler')
const toggleFavPostHandler = require('./toggleFavPostHandler')
const changeUserEmailHandler = require('./changeUserEmailHandler')
const changeUserPasswordHandler = require('./changeUserPasswordHandler')
const editTextPostHandler = require('./editTextPostHandler')
const retrievePostsHandler = require('./retrievePostsHandler')
const retrieveFavPostsHandler = require('./retrieveFavPostsHandler')
const deletePostHandler = require('./deletePostHandler')


module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    changeUserEmailHandler,
    changeUserPasswordHandler,
    editTextPostHandler,
    retrievePostsHandler,
    retrieveFavPostsHandler,
    deletePostHandler
}