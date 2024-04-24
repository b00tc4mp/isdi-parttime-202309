import { Link } from "../library"
import logic from "../logic"
import { useNavigate } from 'react-router-dom'

function Logout() {
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

		<Link className="link-profile-items" onClick={handleLogoutClick}>Tancar sessió</Link>
	</>
}



export default Logout