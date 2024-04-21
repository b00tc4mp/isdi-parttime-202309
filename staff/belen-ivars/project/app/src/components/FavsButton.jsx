import { Button } from "../library"
import { Route, Routes, useNavigate } from 'react-router-dom'

export default function FavsButton() {

	const navigate = useNavigate()

	function handleFavRecipesClick(event) {
		event.preventDefault()

		navigate('/favs')
	}

	return <div>

		<Button className="button-header" onClick={handleFavRecipesClick}>💛 My Favs </Button>


	</div>
}