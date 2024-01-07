import context from "./context"

function retrievePosts(callback) {

	const req = {
		method: 'GET',
		headers: {
			Authorization: `Barear ${context.sessionUserId}`
		},
	}

	fetch('http://localhost:8000/posts', req)
		.then(res => {
			if (!res.ok) {

				res.json()
					.then(body => callback(new Error(body.message)))
					.catch(error => callback(error))

				return
			}

			res.json()
				.then(posts => callback(null, posts))
				.catch(error => callback(error))
		})

		.catch(error => callback(error))

}

export default retrievePosts