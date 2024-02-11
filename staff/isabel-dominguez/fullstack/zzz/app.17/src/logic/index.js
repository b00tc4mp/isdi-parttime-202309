import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import changeUserEmail from './changeUserEmail'
import changeUserPassword from './changeUserPassword'
import deleteUser from './deleteUser'
import isUserLoggedIn from './isUserLoggedIn'

import createPost from './createPost'
import deletePost from './deletePost'
import retrieveFavPosts from './retrieveFavPosts'
import retrievePosts from './retrievePosts'
import toggleFavPost from './toggleFavPost'
import toggleLikePost from './toggleLikePost'
import updatePostText from './updatePostText'
import commentPost from './commentPost'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    deleteUser,
    isUserLoggedIn,

    createPost,
    deletePost,
    retrieveFavPosts,
    retrievePosts,
    toggleFavPost,
    toggleLikePost,
    updatePostText,
    commentPost
}

export default logic