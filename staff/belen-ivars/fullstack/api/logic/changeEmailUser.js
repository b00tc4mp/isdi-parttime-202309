import { User, Post } from '../data/models.js'
import validate from './helpers/validate.js'

function changeEmailUser(userId, email, newEmail, newEmailConfirm, callback) {
	validate.id(userId, 'user id')
	validate.email(email, 'email')
	validate.email(newEmail, 'new email')
	validate.email(newEmailConfirm, 'new email confirm')
	validate.funktion(callback, 'callback')

	// TODO
}

export default changeEmailUser