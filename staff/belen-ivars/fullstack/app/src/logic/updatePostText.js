import validate from "./helpers/validate"
import context from "./context"

function updatePostText(postId, text, callback) {
	validate.text(postId, 'post id')
	validate.text(text)
	validate.funktion(callback)

	// TODO validate callback


}

export default updatePostText