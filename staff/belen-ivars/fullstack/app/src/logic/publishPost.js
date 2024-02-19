import { validate, errors } from 'com'
import session from './session'

function publishPost(image, text, callback) {
	validate.text(image)
	validate.text(text)

	const req = {
		method: 'POST',
		headers: {
			Authorization: ` Bearer ${session.token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ image, text })
	}

	fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
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

export default publishPost