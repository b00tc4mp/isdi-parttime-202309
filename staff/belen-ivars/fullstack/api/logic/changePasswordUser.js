
import { User } from '../data/models.js'
import { validate, errors } from 'com'
const { NotFoundError, SystemError, CredentialsError, TokenError } = errors

function changePasswordUser(userId, password, newPassword, newPasswordConfirm) {
	validate.id(userId, 'user id')
	validate.password(password, 'password')
	validate.password(newPassword, 'new password')
	validate.password(newPasswordConfirm, 'new password confirm')

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