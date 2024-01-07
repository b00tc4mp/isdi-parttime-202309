import { validateText } from "../utils/validators"

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
	validateText(newEmail, 'new email')
	validateText(newEmailConfirm, 'new email confirm')
	validateText(password, 'password')

	// TODO call api

	/* db.users.findById(context.sessionUserId, (error, user) => {
		if (error) {
			callback(error)

			return
		}
		if (!user || user.password !== password) {

			callback(new Error('Wrong credentials'))

			return
		}
		if (newEmail !== newEmailConfirm) {

			callback(new Error('new email and its confirmation do not match'))

			return
		}

		user.email = newEmail

		db.users.update(user, error => {
			if (error) {
				callback(error)

				return
			}

			callback(null)
		})
	}) */
}

export default changeUserEmail