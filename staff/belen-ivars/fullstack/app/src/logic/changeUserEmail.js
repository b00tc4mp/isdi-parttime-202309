import validate from "./helpers/validate"
import context from "./context"

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
	validate.email(newEmail)
	validate.email(newEmailConfirm)
	validate.password(password)
	validate.funktion(callback)

	// TODO call api


}

export default changeUserEmail