import { NotFoundError, SystemError } from "com/errors.js"
import { User } from "../data/models.js"

export default async function retrieveUser(id) {

	let user
	try {
		user = await User.findById(id)
	} catch (error) {
		throw new SystemError(error.message)
	}

	if (!user) {
		throw new NotFoundError("No user found")
	}

	return user
}
