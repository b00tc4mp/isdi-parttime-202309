import { NotFoundError } from "com/errors.js"
import { User } from "../data/models.js"

async function retrieveUser(id) {

	const user = await User.findById(id)

	console.log(user)

	if (!user) {
		console.log("no user found")
		throw new NotFoundError("No user found :cry:")
	}
	return user
}

export default retrieveUser