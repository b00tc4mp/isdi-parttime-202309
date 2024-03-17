import { Button } from "../library"
import { Route, Routes, useNavigate } from 'react-router-dom'

export default function Favs() {

	const navigate = useNavigate()

	function handleFavRecipesClick(event) {
		event.preventDefault()

		navigate('/favs')
	}

	return <div>

		<Button onClick={handleFavRecipesClick}>💛</Button>


	</div>
}