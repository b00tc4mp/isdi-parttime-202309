import validate from './helpers/validate.js'

import { User } from '../data/models.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'

function changePasswordUser(userId, password, newPassword, newPasswordConfirm) {
	validate.id(userId, 'user id')
	validate.text(password, 'password')
	validate.text(newPassword, 'new password')
	validate.text(newPasswordConfirm, 'new password confirm')

	return User.findById(userId)
		.catch(error => { throw new SystemError(error.message) })
		.then(user => {
			if (!user)
				throw new NotFoundError('user not found')

			if (user.password !== password)
				throw new CredentialsError('wrong credentials')

			if (newPassword !== newPasswordConfirm)
				throw new CredentialsError('new password and confirm does not match')

			user.password = newPassword

			user.save()
				.then(() => { })
				.catch(error => { throw new SystemError(error.message) })
		})
}

export default changePasswordUser