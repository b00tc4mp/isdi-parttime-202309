import session from "./session"
import { API_URL } from "../utils/constants"
import { errors } from "com"
const { SystemError } = errors

export default async function searchRecipes(ingredients, diet, complexity, method) {

	let query = ''
	if (ingredients.length > 0) {
		query += `ingredients=${ingredients}`
	}
	if (diet.length > 0) {
		query.length > 0 ? query += `&diet=${diet}` : query += `diet=${diet}`
	}
	if (complexity.length > 0) {
		query.length > 0 ? query += `&complexity=${complexity}` : query += `complexity=${complexity}`
	}
	if (method.length > 0) {
		query.length > 0 ? query += `&method=${method}` : query += `method=${method}`
	}
	return (async () => {
		const req = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session.token}`
			}
		}

		let res
		try {
			res = await fetch(`${API_URL}/recipes/search?${query}`, req)
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
			const foundRecipes = await res.json()

			return foundRecipes
		} catch (error) {
			throw new SystemError(error.message)
		}
	})()
}