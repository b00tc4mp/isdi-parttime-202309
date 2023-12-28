import registerUser from './registerUser' 
import loginUser from './loginUser' 
import retrieveUser from './retrieveUser' 
import changeUserEmail from './changeUserEmail' 
import changeUserPassword from './changeUserPassword' 
import logoutUser from './logoutUser' 

import publishPost from './publishPost' 
import retrievePosts from './retrievePosts' 
import retrieveFavUserPosts from './retrieveFavUserPosts' 
import deletePost from './deletePost' 
import toggleFavPost from './toggleFavPost' 
import toggleLikePost from './toggleLikePost'
import toggleEditPost from './toggleEditPost' 
import toggleCommentPost from './toggleCommentPost' 

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    logoutUser,

    publishPost,
    retrievePosts,
    retrieveFavUserPosts,
    deletePost,
    toggleFavPost,
    toggleLikePost,
    toggleEditPost,
    toggleCommentPost
}

export default logic