import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import changeUserEmail from './changeUserEmail.js'
import changeUserPassword from './changeUserPassword.js'

import retrieveFavPosts from './retrieveFavPosts.js'
import retrievePosts from './retrievePosts.js'
import createPost from './createPost.js'
import toggleFavPost from './toggleFavPost.js'
import toggleLikePost from './toggleLikePost.js'
// import updatePostText from './updatePostText.js'
// import deletePost from './deletePost.js'

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

// esto sí es un objeto con todas sus propiedades

export default logic
