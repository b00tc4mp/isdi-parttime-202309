import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logic from "../logic"

import { Button, Container, Field, Form, Link } from "../library"
import { useContext } from '../hooks'

import session from '../logic/session'

function Recipe(props) {

	console.log('Recipe')
	const [view, setView] = useState(null)

	const context = useContext()
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault()

		const title = event.target.title.value ? event.target.title.value : null
		const description = event.target.description.value ? event.target.description.value : null
		const image = event.target.image.value ? event.target.image.value : null
		console.log(props.recipe._id)
		try {
			await logic.editRecipe(props.recipe._id, title, description, image)
			props.onSuccess()

			setView(null)
			document.getElementById("edit-form").reset()

		} catch (error) {
			console.log(error)
		}
	}

	const handleDeleteClick = async (event) => {
		event.preventDefault()

		try {
			await logic.deleteRecipe(props.recipe._id)
			props.onSuccess()

		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {

	}, [handleSubmit])


	return <article className="recipe">

		<h2> {props.recipe.title}</h2>
		<img className="recipe-image" src={props.recipe.image} />
		<p>{props.recipe.description}</p>

		{/* Ací estic configurant el botó d'edició*/}

		{session.sessionUserId === props.recipe.author && view === null && <Button onClick={handleDeleteClick}>🗑️</Button>}
		{session.sessionUserId === props.recipe.author && view === null && <Button className="edit-recipe" onClick={() => setView('edit')}>Edit</Button>}

		{view === 'edit' && <Button onClick={() => setView(null)}>Cancel</Button>}

		{view === 'edit' && <Form id='edit-form' onSubmit={handleSubmit}>
			<Field type='text' id='title' placeholder={props.recipe.title} />
			<Field type='text' id='description' placeholder={props.recipe.description} />
			<Field type='url' id='image' placeholder={props.recipe.image} />
			<Button type='submit' > Modificar </Button>

		</Form>}




	</article>
}

export default Recipe