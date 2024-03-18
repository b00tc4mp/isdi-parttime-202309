import session from "./session"

export default function logoutUser() {

	session.token = null
	session.sessionUserId = null


	console.log('logging out')
}