import { validate, errors } from 'com'
import { API_URL } from '../utils/constants'

const { SystemError } = errors

export default function registerUser(name, email, password) {
	validate.text(name, 'name')
	validate.email(email)
	validate.password(password)

	return (async () => {

		const req = {
			method: 'POST',
			headers: {
				'Content-Type': 'applications/json'
			},
			body: JSON.stringify({ name, email, password })
		}

		let res

		try {
			res = await fetch(`${API_URL}/users`, req)
		} catch (error) {
			throw new SystemError(error.message)
		}

		if (!res.ok) {
			let body

			try {
				body = await res.json()
			} catch (error) {
				throw new SystemError(errors.message)
			}

			throw new errors[body.error](body.message)
		}

	})()

}