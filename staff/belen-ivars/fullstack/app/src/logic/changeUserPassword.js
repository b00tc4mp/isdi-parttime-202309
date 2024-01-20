import validate from "./helpers/validate"
import context from "./context"

function changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
	validate.password(newPassword, 'new password')
	validate.password(newPasswordConfirm, 'new password confirm')
	validate.password(password)
	validate.funktion(callback)

	// TODO call api


}

export default changeUserPassword