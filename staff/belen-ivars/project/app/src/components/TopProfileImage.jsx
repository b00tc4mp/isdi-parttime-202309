import Gravatar from 'react-gravatar'
import { Link } from '../library'
import { useNavigate } from 'react-router-dom'

export default function TopProfileImage({ name, email }) {

	function handleProfileClick(event) {
		event.preventDefault()
		const navigate = useNavigate()
		navigate('/profile')
	}

	return <Link onClick={handleProfileClick}>
		<Gravatar email={email} /> {name}
	</Link>
}

