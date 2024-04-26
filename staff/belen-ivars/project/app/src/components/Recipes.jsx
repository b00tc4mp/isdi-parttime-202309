import { useEffect, useState } from "react"
import Recipe from './Recipe'
import { useContext } from "../hooks"
import logic from "../logic"
import { Container, Button, Field, Form } from "../library"
import { complexityTranslations, dietTranslations, methodTranslations } from '../assets/translation'


function Recipes(props) {
	console.log('Recipes')

	const [recipes, setRecipes] = useState([])
	const [view, setView] = useState(null)
	const [recipeToEdit, setRecipeToEdit] = useState(null)

	const context = useContext()

	const refreshRecipes = () => {
		(async () => {

			try {
				const content = await props.showRecipes()
				if (props.resetInputs) props.resetInputs()
				setRecipes(content)
			} catch (error) {
				context.handleError(error)
			}
		})()
	}

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
			await logic.editRecipe(recipeToEdit._id, title, description, image, ingredients, diet, complexity, method)
			refreshRecipes()
			setView(null)
			document.getElementById("edit-form").reset()

		} catch (error) {
			context.handleError(error)
		}
	}

	function handleEditClick(recipeObject) {
		setRecipeToEdit(recipeObject)
		setView('edit')
	}

	useEffect(() => {

		refreshRecipes()
	}, [props.stamp])

	return <div>

		{view !== 'edit' && <>
			{recipes.length === 0 ?
				<NoResults />
				: <div className="recipes">{recipes.map(recipe => <Recipe onEditClick={handleEditClick} onRecipeClick={props.setRecipe} key={recipe._id} recipe={recipe} onError={props.onError} onSuccess={refreshRecipes} />)} </div>
			}
		</>}


		{view === 'edit' && <div className="recipe-complet-div">
			<Container className='new-form'>
				<h2 className='form-title'>Modifica la teua recepta</h2>
				<Button className='button-recipe' onClick={() => setView(null)}>Cancel</Button>
				<Form id='edit-form' onSubmit={handleSubmit}>
					<Field type='text' id='title' placeholder={recipeToEdit.title}>Títol</Field>
					<Field type='text' id='description' placeholder={recipeToEdit.description}>Descripció</Field>
					<Field type='url' id='image' placeholder={recipeToEdit.image} >Imatge</Field>
					<Field type='text' id='ingredients' placeholder={recipeToEdit.ingredients} >Ingredients</Field>
					<Field type='text' id='diet' placeholder={dietTranslations[recipeToEdit.diet]} >Tipus de dieta</Field>
					<Field type='text' id='complexity' placeholder={complexityTranslations[recipeToEdit.complexity]} >Nivell de complexitat</Field>
					<Field type='text' id='method' placeholder={methodTranslations[recipeToEdit.method]} >Mètode d'elaboració</Field>

					<Button className='button-recipe' type='submit' > Modificar </Button>

				</Form>
			</Container>
		</div>}

	</div >
}

const NoResults = () => {
	return <Container className="container-search-no-result">
		<h1 className="recipe-title">No s'han trobat receptes</h1>
		<p className="recipe-text">
			Oooohhh, no hi ha receptes que conicidisquen amb els teus criteris de búsqueda!
		</p>

	</Container>
}

export default Recipes