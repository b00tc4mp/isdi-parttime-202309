import { validate, errors } from 'com'
import context from "./context"

function updatePostText(postId, text, callback) {
	validate.id(postId, 'post id')
	validate.text(text)
	validate.funktion(callback)

	// TODO validate callback


}

export default updatePostText