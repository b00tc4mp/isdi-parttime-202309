import registerUserHandler from './registerUserHandler.js'
import authenticateUserHandler from './authenticateUserHandler.js'
import retrieveUserHandler from './retrieveUserHandler.js'
import retrievePostsHandler from './retrievePostsHandler.js'
import retrieveFavPostsHandler from './retrieveFavPostsHandler.js'
import createPostHandler from './createPostHandler.js'
import toggleLikePostHandler from './toggleLikePostHandler.js'
import toggleFavPostHandler from './toggleFavPostHandler.js'

// no estás exportando un objeto, es un scope, un bloque. Esto te permite luego hace destructuring cuando lo importas en las lógicas
export {
  registerUserHandler,
  authenticateUserHandler,
  retrieveUserHandler,
  retrievePostsHandler,
  retrieveFavPostsHandler,
  createPostHandler,
  toggleLikePostHandler,
  toggleFavPostHandler,
}
