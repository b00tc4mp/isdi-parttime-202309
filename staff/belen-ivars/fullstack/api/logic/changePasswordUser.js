import { User, Post } from '../data/models.js'
import validate from './helpers/validate.js'

function changePasswordUser(userId, password, newPassword, newPasswordConfirm, callback) {
	validate.id(userId, 'user id')
	validate.text(password, 'password')
	validate.text(newPassword, 'new password')
	validate.text(newPasswordConfirm, 'new password confirm')
	validate.funktion(callback, 'callback')

	// TODO

}

export default changePasswordUser