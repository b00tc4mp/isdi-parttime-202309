// la forma de trabajar con require se llama commonJS (CJ.jsS, es la forma tradicional de node
// en cambio trabajar con export se llama ESM (ECMA script Module.jss


import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import changeEmailUser from './changeEmailUser.js'
import changePasswordUser from './changePasswordUser.js'
import createPost from './createPost.js'
import retrieveFavPosts from './retrieveFavPosts.js'
import retrievePosts from './retrievePosts.js'
import toggleFavPost from './toggleFavPost.js'
import toogleLikePost from './toogleLikePost.js'
import editTextPost from './editTextPost.js'
import deletePost from './deletePost.js'
import retrieveUserPosts from './retrieveUserPosts.js'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    changeEmailUser,
    changePasswordUser,
    createPost,
    retrieveFavPosts,
    retrievePosts,
    toggleFavPost,
    toogleLikePost,
    editTextPost,
    deletePost,
    retrieveUserPosts
}

export default logic

