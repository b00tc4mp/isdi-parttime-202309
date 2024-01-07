import { validateText } from "../utils/validators"

function publishPost(image, text, callback) {
	validateText(image, 'image')
	validateText(text, 'text')

	// TODO call api

	/* db.posts.insert(new Post(null, this.sessionUserId, image, text, []), error => {
		if (error) {
			callback(error)

			return
		}

		callback(null)
	}) */
}

export default publishPost