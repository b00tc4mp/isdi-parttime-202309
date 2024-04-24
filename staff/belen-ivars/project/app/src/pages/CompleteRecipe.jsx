import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logic from "../logic"

import { Button, Container, Field, Form, Link } from "../library"
import { useContext } from '../hooks'

import session from '../logic/session'

function CompleteRecipe(props) {

	console.log('Recipe')
	const [view, setView] = useState(null)
	const [ingredientsList, setIngredientsList] = useState([])

	const context = useContext()
	const navigate = useNavigate()

	async function handleSubmit(event) {
		event.preventDefault()

		const title = event.target.title.value ? event.target.title.value : null
		const description = event.target.description.value ? event.target.description.value : null
		const image = event.target.image.value ? event.target.image.value : null
		console.log(props.recipe._id)
		const ingredients = event.target.ingredients.value ? event.target.ingredients.value : null
		const diet = event.target.diet.value ? event.target.diet.value : null
		const complexity = event.target.complexity.value ? event.target.complexity.value : null
		const method = event.target.method.value ? event.target.complexity.value : null

		try {
			await logic.editRecipe(props.recipe._id, title, description, image, ingredients, diet, complexity, method)
			props.onSuccess()

			setView(null)
			document.getElementById("edit-form").reset()

		} catch (error) {
			context.handleError(error)
		}
	}

	async function handleDeleteClick(event) {
		event.preventDefault()

		try {
			await logic.deleteRecipe(props.recipe._id)
			props.onSuccess()

		} catch (error) {
			context.handleError(error)
		}
	}

	async function handleToggleFavClick(event) {
		event.preventDefault
		try {
			await logic.toggleFavRecipe(props.recipe._id)
			props.recipe.fav = !props.recipe.fav
			props.onSuccess()
			console.log('fav done')

		} catch (error) {
			context.handleError(error)
		}
	}

	useEffect(() => {

	}, [handleSubmit])

	useEffect(() => {
		async function getIngredients() {
			try {
				const ingredientsListFormated = await logic.getIngredientsList(props.recipe._id)
				setIngredientsList(ingredientsListFormated)
			} catch (error) {
				context.handleError(error)
			}
		}
		getIngredients()
	}, [props.recipe._id])

	return <div className='recipe-complet-div'>

		<article className="recipe-complet">

			<Container className="container-top-recipe">
				<h1 className="recipe-title"> {props.recipe.title}</h1>
				<img className="recipe-image" src={props.recipe.image} />
			</Container>

			<Container className="container-info-recipe" >
				<div>
					<h3 className='recipe-subtitle'> Ingredients </h3>
					<ul className='recipe-list'>
						{ingredientsList.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='recipe-subtitle'> Tipus de dieta </h3>
					<p className='recipe-text'>{props.recipe.diet}</p>

					<h3 className='recipe-subtitle'> Nivell de complexitat </h3>
					<p className='recipe-text'>{props.recipe.complexity}</p>

					<h3 className='recipe-subtitle'> Mètode </h3>
					<p className='recipe-text'>{props.recipe.method}</p>
				</div>
			</Container>
			<Container className="container-description">
				<div>

					<h3 className='recipe-subtitle'> Descripció </h3>
					<p className='recipe-description'>{props.recipe.description}</p>
				</div>
			</Container >

			<div>
				{session.sessionUserId === props.recipe.author && view === null && <Button className='button-recipe' onClick={handleDeleteClick}>🗑️</Button>}
				{session.sessionUserId === props.recipe.author && view === null && <Button className='button-recipe' onClick={() => setView('edit')}>Edit</Button>}
				<Button className='button-recipe' onClick={handleToggleFavClick}>{props.recipe.fav ? '❤️' : '🤍'}</Button>


				{view === 'edit' && <Button onClick={() => setView(null)}>Cancel</Button>}

				{view === 'edit' && <Container className='new-form'>
					<Form id='edit-form' onSubmit={handleSubmit}>
						<Field type='text' id='title' placeholder={props.recipe.title} />
						<Field type='text' id='description' placeholder={props.recipe.description} />
						<Field type='url' id='image' placeholder={props.recipe.image} />
						<Button type='submit' > Modificar </Button>

					</Form>
				</Container>}
			</div>
		</article>
	</div>

}

export default CompleteRecipe