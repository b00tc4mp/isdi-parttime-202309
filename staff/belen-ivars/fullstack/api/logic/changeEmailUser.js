import validate from './helpers/validate.js'

import { User } from '../data/models.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

function changeEmailUser(userId, email, newEmail, newEmailConfirm, password) {
	validate.id(userId, 'user id')
	validate.email(email, 'email')
	validate.email(newEmail, 'new email')
	validate.email(newEmailConfirm, 'new email confirm')
	validate.text(password, 'password')

	return User.findById(userId)
		.catch(error => { throw new SystemError(error.message) })
		.then(user => {
			if (!user)
				throw new NotFoundError('user not found')

			if (newEmail !== newEmailConfirm)
				throw new CredentialsError('new email and confirm does not match')

			if (user.password !== password)
				throw new CredentialsError('wrong credentials')

			user.email = newEmail

			user.save()
				.then(() => { })
				.catch(error => { throw new SystemError(error.message) })
		})
}

export default changeEmailUser