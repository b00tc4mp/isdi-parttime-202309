import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import changeUserEmail from './changeUserEmail.js'
import changeUserPassword from './changeUserPassword.js'

import createPost from './createPost.js'
import retrieveFavPosts from './retrieveFavPosts.js'
import retrievePosts from './retrievePosts.js'
import toggleFavPost from './toggleFavPost.js'
import toggleLikePost from './toggleLikePost.js'
//import updatePostText from './updatePostText.js'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    createPost,
    retrieveFavPosts,
    retrievePosts,
    toggleFavPost,
    toggleLikePost,
    // updatePostText
}

export default logic