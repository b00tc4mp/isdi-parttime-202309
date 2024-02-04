import { validate } from 'com'
import context from "./context"

function logoutUser(callback) {
	validate.funktion(callback)

	context.sessionUserId = null

	callback(null)
}

export default logoutUser