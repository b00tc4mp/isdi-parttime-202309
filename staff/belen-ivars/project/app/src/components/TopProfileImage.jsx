import Gravatar from 'react-gravatar'
import { Link } from '../library'
import { useState } from 'react'
import FavsButton from './FavsButton'
import Logout from './Logout'
import { Container } from '../library'

export default function TopProfileImage({ name, email }) {

	const [isOpen, setIsOpen] = useState(false)


	function handleProfileClick(event) {
		event.preventDefault()

		setIsOpen(!isOpen)

		if (isOpen) {
			setIsOpen(false)
		}
	}

	return <Link className="link-menu" onClick={handleProfileClick}>
		<Gravatar email={email} /> {name}
		{isOpen && (
			<Container className='profile-menu'>
				<FavsButton />
				<Logout />
			</Container>
		)}
	</Link>
}

