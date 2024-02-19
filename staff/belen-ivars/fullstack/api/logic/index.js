import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import changeEmailUser from './changeEmailUser.js'
import changePasswordUser from './changePasswordUser.js'


import createPost from './createPost.js'
import retrieveFavPosts from './retrieveFavPosts.js'
import retrievePosts from './retrievePosts.js'
import toggleFavPost from './toggleFavPost.js'
import toggleLikePost from './toggleLikePost.js'
// 

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
	toggleLikePost,
	// updatePostText,
	// deletePost
}

export default logic