import session from "./session"
import { API_URL } from "../utils/constants"
import { errors } from "com"
const { SystemError } = errors

export default async function retrieveFavRecipes() {
	return (async () => {
		const req = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session.token}`
			}
		}

		let res
		try {
			res = await fetch(`${API_URL}/recipes/favs`, req)
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
			const favRecipes = await res.json()

			return favRecipes
		} catch (error) {
			throw new SystemError(error.message)
		}
	})()
}