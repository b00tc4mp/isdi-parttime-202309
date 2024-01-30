import registerUser from './registerUser.js'
import authenticateUser from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import changeUserEmail from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/changeUserEmail.js'
import changeUserPassword from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/changeUserPassword.js'

import createPost from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/createPost.js'
import retrieveFavPosts from './retrieveFavPosts.js'
import retrievePosts from './retrievePosts.js'
import toggleFavPost from './toggleFavPost.js'
import toggleLikePost from './toggleLikePost.js'
import updatePostText from './updatePostText.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    //logoutUser,

    createPost,
    retrieveFavPosts,
    retrievePosts,
    toggleFavPost,
    toggleLikePost,
    updatePostText

}

export default logic