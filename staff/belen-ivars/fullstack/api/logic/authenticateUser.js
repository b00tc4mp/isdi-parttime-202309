import bcrypt from 'bcryptjs'

import { User } from '../data/models.js'

import { validate, errors } from 'com'
import { SystemError } from 'com/errors.js'
const { NotFoundError, CredentialsError } = errors

function authenticateUser(email, password) {
	validate.email(email, 'email')
	validate.password(password, 'password')

	return User.findOne({ email })
		.catch(error => {
			throw new SystemError(error.message)
		})
		.then(user => {
			if (!user)
				throw new NotFoundError('user not found')

			return bcrypt.compare(password, user.password)
				.catch(error => { new SystemError(error.message) })
				.then(match => {
					if (!match)
						throw new CredentialsError('wrong password')

					return user.id
				})


		})
}

export default authenticateUser