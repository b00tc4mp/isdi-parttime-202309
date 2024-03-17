import { validate, errors } from 'com'
import session from './session'
import { API_URL } from '../utils/constants'
import { SystemError } from 'com/errors'

export default async function retrieveUser() {

	return (async () => {
		const req = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session.token}`
			}
		}

		let res

		try {
			res = await fetch(`${API_URL}/users/${session.sessionUserId}`, req)
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
			const user = await res.json()

			return user
		} catch (error) {
			throw new SystemError(error.message)
		}
	})()
	// return Promise.resolve({
	// 	name: "Belén",
	// 	email: "belen.ivars@gmail.com"
	// })
}