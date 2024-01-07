import registerUser from './registerUser.js'
import loginUser from './loginUser.js'
import logoutUser from './logoutUser.js'
import retrieveUser from './retrieveUser.js'
import changeUserEmail from './changeUserEmail.js'
import changeUserPassword from './changeUserPassword.js'


import publishPost from './publishPost.js'
import retrieveFavPosts from './retrieveFavPosts.js'
import retrievePosts from './retrievePosts.js'
import toggleFavPost from './toggleFavPost.js'
import toggleLikePost from './toggleLikePost.js'
import updatePostText from './updatePostText.js'
import deletePost from './deletePost.js'

const logic = {
	registerUser,
	loginUser,
	logoutUser,
	retrieveUser,
	changeUserEmail,
	changeUserPassword,

	publishPost,
	retrieveFavPosts,
	retrievePosts,
	toggleFavPost,
	toggleLikePost,
	updatePostText,
	deletePost
}
export default logic