import { validate } from 'com'
import context from "./context"

function logoutUser(callback) {
	validate.funktion(callback)

	context.token = null
	context.sessionUserId = null

	callback(null)
}

export default logoutUser