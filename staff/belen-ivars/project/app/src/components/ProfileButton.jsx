import { Button } from "../library"
import logic from "../logic"

function ProfileButton() {


	return <>

		<Button onClick={handleLogoutClick}>Logout</Button>
	</>
}


function handleLogoutClick(props) {

	logic.logoutUser(error => {
		if (error) {
			console.error(error)
			return
		}
	})

	props.onLogoutClick()
}

export default ProfileButton