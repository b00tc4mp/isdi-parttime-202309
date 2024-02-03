import registerUserHandler from './registerUserHandler.js'
import authenticateUserHandler from './authenticateUserHandler.js'
import retrieveUserHandler from './retrieveUserHandler.js'
import retrievePostsHandler from './retrievePostsHandler.js'
import retrieveFavsPostHandler from './retrieveFavsPostHandler.js'
import createPostHandler from './createPostHandler.js'
import toggleLikePostHandler from './toggleLikePostHandler.js'
import toggleFavPostHandler from './toggleFavPostHandler.js'

export {//es un scope, "importamos todo"
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    retrieveFavsPostHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler
}