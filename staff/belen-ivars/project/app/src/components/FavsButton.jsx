import { Link } from "../library"
import { Route, Routes, useNavigate } from 'react-router-dom'

export default function FavsButton() {

	const navigate = useNavigate()

	function handleFavRecipesClick(event) {
		event.preventDefault()

		navigate('/favs')
	}

	return <div>

		<Link className="link-profile" onClick={handleFavRecipesClick}>💛 My Favs </Link>


	</div>
}