import { validate } from 'com'
import session from './session'

function logoutUser(callback) {
	validate.funktion(callback)

	session.token = null
	session.sessionUserId = null

	callback(null)
}

export default logoutUser