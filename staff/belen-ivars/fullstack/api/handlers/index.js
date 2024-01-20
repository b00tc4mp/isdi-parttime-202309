const registerUserHandler = require('./registerUserHandler')
const authenticateUserHandler = require('./authenticateUserHandler')
const retrieveUserHandler = require('./retrieveUserHandler')
const createPostHandler = require('./createPostHandler')
const retrievePostsHandler = require('./retrievePostsHandler')
const toggleLikePostHandler = require('./toggleLikePostHandler')
const toggleFavPostHandler = require('./toggleFavPostHandler')
const retrieveFavPostsHandler = require('./retrieveFavPostsHandler')

module.exports = {
	registerUserHandler,
	authenticateUserHandler,
	retrieveUserHandler,
	createPostHandler,
	retrievePostsHandler,
	toggleLikePostHandler,
	toggleFavPostHandler,
	retrieveFavPostsHandler
}