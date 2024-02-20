import registerUserHandler from './registerUserHandler.js'
import authenticateUserHandler from './authenticateUserHandler.js'
import retrieveUserHandler from './retrieveUserHandler.js'
import retrievePostsHandler from './retrievePostsHandler.js'
import retrieveFavsPostHandler from './retrieveFavsPostHandler.js'
import createPostHandler from './createPostHandler.js'
import toggleLikePostHandler from './toggleLikePostHandler.js'
import toggleFavPostHandler from './toggleFavPostHandler.js'
import deletePostHandler from './deletePostHandler.js'
import togglePostCommentHandler from './togglePostCommentHandler.js'
import updatePostTextHandler from './updatePostTextHandler.js'
import retrieveUserPostsHandler from './retrieveUserPostsHandler.js'

export {//es un scope, "importamos todo"
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    retrievePostsHandler,
    retrieveFavsPostHandler,
    createPostHandler,
    toggleLikePostHandler,
    toggleFavPostHandler,
    deletePostHandler,
    togglePostCommentHandler,
    updatePostTextHandler,
    retrieveUserPostsHandler
}