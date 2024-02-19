import { validate, errors } from 'com'
import session from './session'

function deletePost(postId, callback) {
	validate.id(postId, 'post id')
	validate.funktion(callback, 'callback')

	const req = {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${session.token}`
		},
	}

	fetch(`${import.meta.env.VITE_API_URL}/users/${postId}/favs`, req)
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

export default deletePost