import { validate, errors } from 'com'
import session from './session'

function changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
	validate.password(newPassword, 'new password')
	validate.password(newPasswordConfirm, 'new password confirm')
	validate.password(password)
	validate.funktion(callback)

	// TODO call api


}

export default changeUserPassword