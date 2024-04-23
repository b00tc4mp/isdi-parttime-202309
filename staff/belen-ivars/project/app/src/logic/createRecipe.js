import { API_URL } from "../utils/constants"
import { errors } from 'com'
import session from "./session"

const { SystemError } = errors


export default function createRecipe(title, description, image, ingredients, diet, complexity, method) {
	return (async () => {

		const ingredientsList = ingredients.split(', ')

		const req = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${session.token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, description, image, ingredientsList, diet, complexity, method })
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