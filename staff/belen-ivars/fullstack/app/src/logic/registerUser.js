import { validate } from 'com'
import context from './context'

function registerUser(name, email, password, callback) {
	validate.text(name, 'Name')
	validate.email(email)
	validate.password(password)
	validate.funktion(callback)

	const req = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name, email, password })
	}

	fetch(`${import.meta.env.VITE_API_URL}/users`, req)
		.then(res => {
			if (!res.ok) {

				res.json()
					.then(body => callback(new errors[body.error](body.message)))
					.catch(error => callback(error))

				return
			}
			callback(null)
		})

		.catch(error => callback(error))
}

export default registerUser