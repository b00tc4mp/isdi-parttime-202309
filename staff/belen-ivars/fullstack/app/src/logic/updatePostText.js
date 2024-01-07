import { validateText } from "../utils/validators"

function updatePostText(postId, text, callback) {
	validateText(postId, 'post id')
	validateText(text, 'text')

	// TODO validate callback

	// TODO call api

	/* db.posts.findById(postId, (error, post) => {
		if (error) {
			callback(error)

			return
		}
		if (!post) {

			callback(new Error('post not found'))

			return
		}

		if (post.author !== this.sessionUserId) {
			callback(new Error('post does not belong to user'))

			return
		}

		post.text = text

		db.posts.update(post, error => {
			if (error) {
				callback(error)

				return
			}
			callback(null)
		})
	}) */
}

export default updatePostText