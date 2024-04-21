import Gravatar from 'react-gravatar'
import { Button } from '../library'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FavsButton from './FavsButton'
import LogoutButton from './LogoutButton'

export default function TopProfileImage({ name, email }) {

	const [view, setView] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()


	function handleProfileClick(event) {
		event.preventDefault()

		setIsOpen(!isOpen)

		if (isOpen) {
			setIsOpen(false)
		}
	}

	return <Button className="link-profile" onClick={handleProfileClick}>
		<Gravatar email={email} /> {name}
		{isOpen && (
			<div>
				<FavsButton />
				<LogoutButton />
			</div>
		)}
	</Button>
}

