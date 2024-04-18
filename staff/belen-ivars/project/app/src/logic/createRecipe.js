import { API_URL } from "../utils/constants"
import { errors } from 'com'
import session from "./session"

const { SystemError } = errors


export default function createRecipe(author, title, description, image) {
	return (async () => {
		const req = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${session.token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ author, title, description, image })
		}

		let res

		try {
			res = await fetch(`${API_URL}/recipes`, req)
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