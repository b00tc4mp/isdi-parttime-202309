import { Button } from "../library"
import logic from "../logic"
import { useNavigate } from 'react-router-dom'

function LogoutButton() {
	const navigate = useNavigate()

	const handleLogoutClick = () => {

		try {
			logic.logoutUser()
			navigate('/login')

		} catch (error) {
			console.log('error en logout')
		}
	}

	return <>

		<Button className="button-header" onClick={handleLogoutClick}>Logout</Button>
	</>
}



export default LogoutButton