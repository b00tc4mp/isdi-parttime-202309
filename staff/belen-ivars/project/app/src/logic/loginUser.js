import { validate, errors } from 'com'
import { API_URL } from '../utils/constants'
import session from './session'
const { SystemError } = errors

export default function loginUser(email, password) {
	validate.email(email)
	validate.password(password)

	return (async () => {
		const req = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		}

		let res

		try {
			res = await fetch(`${API_URL}/users/auth`, req)
		} catch (error) {
			throw new SystemError(error.message)
		}

		if (!res.ok) {
			let body

			try {
				body = await res.json()
			} catch (error) {
				throw new SystemError(error.message)
			}

			throw new errors[body.error](body.message)
		}

		try {
			const token = await res.json()

			const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
			const payloadJson = atob(payloadB64)
			const payload = JSON.parse(payloadJson)
			const userId = payload.sub

			session.sessionUserId = userId
			session.token = token
		} catch (error) {
			throw new SystemError(error.message)
		}
	})()
}