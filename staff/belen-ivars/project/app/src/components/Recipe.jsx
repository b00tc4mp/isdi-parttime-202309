import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logic from "../logic"

import { Button, Field, Form, Link } from "../library"
import { useContext } from '../hooks'

import session from '../logic/session'

function Recipe(props) {

	console.log('Recipe')
	const [view, setView] = useState(null)

	const context = useContext()
	const navigate = useNavigate()



	return <article className="recipe">
		{/* <h2><Link onClick={handleUserClick}> {props.recipe.author.name}</Link></h2> */}

		<h2> {props.recipe.title}</h2>
		<img className="recipe-image" src={props.recipe.image} />
		<p>{props.recipe.description}</p>

		{/* {view === null && <p>{props.recipe.text}</p>} */}

		{/* {view === 'edit' && <Form onSubmit={handleEditSubmit}>
			<Field id="text" value={props.recipe.text} />
			<Button type="submit">Save</Button>
			<Button onClick={handleEditCancelClick}>Cancel</Button>
		</Form>} */}


		{/* <div className="recipe-actions">
			<Button onClick={handleToggleLikeClick}>{props.recipe.liked ? '❤️' : '🤍'} {props.recipe.likes.length}</Button>
			<Button onClick={handleToggleFavClick}>{props.recipe.fav ? '⭐️' : '✩'}</Button>
			{session.sessionUserId === props.recipe.author.id && <Button onClick={handleDeleteRecipeClick}>🗑️</Button>}
			{session.sessionUserId === props.recipe.author.id && view === null && <Button onClick={handleEditclick}>✏️</Button>}

		</div> */}
	</article>
}

export default Recipe