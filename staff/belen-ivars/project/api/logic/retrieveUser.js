import { NotFoundError } from "com/errors.js"
import { User } from "../data/models.js"

async function retrieveUser(id) {

	const user = await User.findById(id)

	if (!user) {
		throw new NotFoundError("No user found")
	}

	return user
}

export default retrieveUser