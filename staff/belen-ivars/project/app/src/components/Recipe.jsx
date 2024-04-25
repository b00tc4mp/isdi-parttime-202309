import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logic from "../logic"

import { Button, Container } from "../library"
import { useContext } from '../hooks'

import session from '../logic/session'

function Recipe(props) {

	console.log('Recipe')
	const [view, setView] = useState(null)
	const [ingredientsList, setIngredientsList] = useState([])

	const context = useContext()
	const navigate = useNavigate()

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

	const handleRecipeClick = () => {
		props.onRecipeClick(props.recipe._id)
	}

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

	return <article className="recipe">

		<Container className="container-top-recipe">
			<h1 className="recipe-title"> {props.recipe.title}</h1>
			<img className="recipe-image" src={props.recipe.image} />
		</Container>
		<Container className="container-info-recipe" >
			<div className='container-ingredients-list'>
				<h3 className='recipe-subtitle'> Ingredients </h3>
				<ul className='recipe-list'>
					{ingredientsList.map((ingredient, index) => (
						<li className='ingredient-item-list' key={index}>{ingredient}</li>
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
		<div>
			{session.sessionUserId === props.recipe.author && view === null && <Button className='button-recipe' onClick={handleDeleteClick}>🗑️</Button>}
			{session.sessionUserId === props.recipe.author && view === null && <Button className='button-recipe' onClick={() => props.onEditClick(props.recipe)}>Edit</Button>}
			<Button className='button-recipe' onClick={handleToggleFavClick}>{props.recipe.fav ? '❤️' : '🤍'}</Button>
			<Button onClick={handleRecipeClick} >Mostra més</Button>

		</div>


	</article>


}

export default Recipe