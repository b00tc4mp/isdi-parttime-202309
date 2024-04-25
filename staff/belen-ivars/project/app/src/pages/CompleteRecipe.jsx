import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import logic from "../logic"

import { Button, Container, Field, Form, Link } from "../library"
import { useContext } from '../hooks'

import session from '../logic/session'
import { complexityTranslations, dietTranslations, methodTranslations } from '../assets/translation'

export default function CompleteRecipe() {

	console.log('Recipe')
	const [view, setView] = useState(null)
	const [ingredientsList, setIngredientsList] = useState([])
	const [recipe, setRecipe] = useState(null)
	const [stamp, setStamp] = useState(null)

	const context = useContext()
	const navigate = useNavigate()

	const { recipeId } = useParams()

	async function handleSubmit(event) {
		event.preventDefault()

		const title = event.target.title.value ? event.target.title.value : null
		const description = event.target.description.value ? event.target.description.value : null
		const image = event.target.image.value ? event.target.image.value : null
		const ingredients = event.target.ingredients.value ? event.target.ingredients.value : null
		const diet = event.target.diet.value ? event.target.diet.value : null
		const complexity = event.target.complexity.value ? event.target.complexity.value : null
		const method = event.target.method.value ? event.target.method.value : null

		try {
			await logic.editRecipe(recipeId, title, description, image, ingredients, diet, complexity, method)

			setStamp(Date.now())
			setView(null)
			document.getElementById("edit-form").reset()

		} catch (error) {
			context.handleError(error)
		}
	}

	async function handleDeleteClick(event) {
		event.preventDefault()

		try {
			await logic.deleteRecipe(recipeId)
			navigate('/')
		} catch (error) {
			context.handleError(error)
		}
	}

	async function handleToggleFavClick(event) {
		event.preventDefault
		try {
			await logic.toggleFavRecipe(recipeId)
			recipe.fav = !recipe.fav
			setStamp(Date.now())

		} catch (error) {
			context.handleError(error)
		}
	}

	useEffect(() => {
		async function getRecipe() {
			try {
				const ingredientsListFormated = await logic.getIngredientsList(recipeId)
				setIngredientsList(ingredientsListFormated)
				const retrieveRecipe = await logic.retrieveCompleteRecipe(recipeId)
				setRecipe(retrieveRecipe)
			} catch (error) {
				context.handleError(error)
			}
		}
		getRecipe()
	}, [stamp])

	if (!recipe) return <div>Carregant</div>
	return <div className='recipe-complet-div'>

		<article className="recipe-complet">

			<Container className="container-top-recipe">
				<h1 className="recipe-title"> {recipe.title}</h1>
				<img className="recipe-image" src={recipe.image} />
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
					<p className='recipe-text'>{dietTranslations[recipe.diet]}</p>

					<h3 className='recipe-subtitle'> Nivell de complexitat </h3>
					<p className='recipe-text'>{complexityTranslations[recipe.complexity]}</p>

					<h3 className='recipe-subtitle'> Mètode </h3>
					<p className='recipe-text'>{methodTranslations[recipe.method]}</p>
				</div>
			</Container>
			<Container className="container-description">
				<div>

					<h3 className='recipe-subtitle'> Descripció </h3>
					<p className='recipe-description'>{recipe.description}</p>
				</div>
			</Container >

			<div>
				{session.sessionUserId === recipe.author && view === null && <Button className='button-recipe' onClick={handleDeleteClick}>🗑️</Button>}
				{session.sessionUserId === recipe.author && view === null && <Button className='button-recipe' onClick={() => setView('edit')}>Edit</Button>}
				<Button className='button-recipe' onClick={handleToggleFavClick}>{recipe.fav ? '❤️' : '🤍'}</Button>


				{view === 'edit' && <Button onClick={() => setView(null)}>Cancel</Button>}

				{view === 'edit' && <Container className='new-form'>
					<Form id='edit-form' onSubmit={handleSubmit}>
						<Field type='text' id='title' placeholder={recipe.title}>Títol</Field>
						<Field type='text' id='description' placeholder={recipe.description} >Descripció</Field>
						<Field type='url' id='image' placeholder='Enllaça ací la imatge' >Imatge</Field>
						<Field type='text' id='ingredients' >Ingredients</Field>
						<Field type='text' id='diet' placeholder={dietTranslations[recipe.diet]} >Tipus de dieta</Field>
						<Field type='text' id='complexity' placeholder={complexityTranslations[recipe.complexity]} >Nivell de complexitat</Field>
						<Field type='text' id='method' placeholder={methodTranslations[recipe.method]} >Mètode de cocció</Field>
						<Button type='submit' > Modificar </Button>

					</Form>
				</Container>}
			</div>
		</article>
	</div>

}