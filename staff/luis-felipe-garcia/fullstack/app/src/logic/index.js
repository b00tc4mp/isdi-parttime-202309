import changeUserEmail from './changeUserEmail'
import changeUserPassword from './changeUserPassword'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import registerUser from './registerUser'
import retrieveUser from './retrieveUser'

import publishPost from './publishPost'
import retrieveFavPost from './retrieveFavPost'
import retrievePosts from './retrievePosts'
import toggleFavPost from './toggleFavPost'
import toggleLikePost from './toggleLikePost'
import updatePostText from './updatePostText'


const logic = {
    changeUserEmail,
    changeUserPassword,
    loginUser,
    logoutUser,
    registerUser,
    retrieveUser,

    publishPost,  
    retrieveFavPost,
    retrievePosts,
    toggleFavPost,
    toggleLikePost,
    updatePostText

}

export default logic