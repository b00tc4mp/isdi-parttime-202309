import session from "./session"
import { API_URL } from "../utils/constants"
import { errors } from "com"
const { SystemError } = errors

async function getIngredientsList(recipeId) {
	return (async () => {
		const req = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session.token}`
			}
		}

		let res
		try {
			res = await fetch(`${API_URL}/recipe/${recipeId}`, req)
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
			const ingredientsList = await res.json()
			return ingredientsList
		} catch (error) {
			throw new SystemError(error.message)
		}
	})()

}

export default getIngredientsList