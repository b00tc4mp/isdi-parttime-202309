const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const changeUserEmail = require('./changeUserEmail')
const changeUserPassword = require('./changeUserPassword')

const retrieveFavPosts = require('./retrieveFavPosts')
const retrievePosts = require('./retrievePosts')
const createPost = require('./createPost')
const toggleFavPost = require('./toggleFavPost')
const toggleLikePost = require('./toggleLikePost')
// import updatePostText from './updatePostText'
// import deletePost from './deletePost'

const logic = {
  registerUser,
  authenticateUser,
  retrieveUser,
  changeUserEmail,
  changeUserPassword,

  retrieveFavPosts,
  retrievePosts,
  createPost,
  toggleFavPost,
  toggleLikePost,
  // updatePostText,
  // deletePost,
}

module.exports = logic
