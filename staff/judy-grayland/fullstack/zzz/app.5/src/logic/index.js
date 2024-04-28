import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import changeUserEmail from './changeUserEmail'
import changeUserPassword from './changeUserPassword'
import logout from './logout'

import retrieveFavPosts from './retrieveFavPosts'
import retrievePosts from './retrievePosts'
import createPost from './createPost'
import toggleFavPost from './toggleFavPost'
import toggleLikePost from './toggleLikePost'
import updatePostText from './updatePostText'
import deletePost from './deletePost'

const logic = {
  registerUser,
  loginUser,
  retrieveUser,
  changeUserEmail,
  changeUserPassword,
  logout,

  retrieveFavPosts,
  retrievePosts,
  createPost,
  toggleFavPost,
  toggleLikePost,
  updatePostText,
  deletePost,
}

export default logic
