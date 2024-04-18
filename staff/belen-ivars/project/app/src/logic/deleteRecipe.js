import { SystemError } from "com/errors"
import { API_URL } from "../utils/constants"
import session from "./session"
import { errors } from 'com'


export default function deleteRecipe(recipeId) {
	return (async () => {
		const req = {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${session.token}`,
			}
		}

		let res
		try {
			res = await fetch(`${API_URL}/recipes/${recipeId}`, req)
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