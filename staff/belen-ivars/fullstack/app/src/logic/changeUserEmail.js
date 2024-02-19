import { validate, errors } from 'com'
import session from './session'

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
	validate.email(newEmail)
	validate.email(newEmailConfirm)
	validate.password(password)
	validate.funktion(callback)

	// TODO call api


}

export default changeUserEmail