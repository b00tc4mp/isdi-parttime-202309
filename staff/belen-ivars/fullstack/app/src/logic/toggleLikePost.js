import { validate, errors } from 'com'
import session from './session'

function toggleLikePost(postId, callback) {
	//debugger
	validate.text(postId, 'post id')
	validate.funktion(callback)

	const req = {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${session.token}`
		},
	}

	fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/likes`, req)
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

export default toggleLikePost