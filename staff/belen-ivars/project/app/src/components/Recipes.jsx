import { useEffect, useState } from "react"
import Recipe from './Recipe'
import { useContext } from "../hooks"
import logic from "../logic"
import { Container, Button, Field, Form } from "../library"

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

	return <div className="recipes">

		{view !== 'edit' && <>
			{recipes.length === 0 ? <div >
				<Container>
					<h1 className="recipe-title">No s'han trobat receptes</h1>
					<p className="recipe-text">
						Oooohhh, no hi ha receptes que conicidisquen amb els teus criteris de búsqueda!
					</p>

				</Container>
			</div> : recipes.map(recipe => <Recipe onEditClick={handleEditClick} onRecipeClick={props.setRecipe} key={recipe._id} recipe={recipe} onError={props.onError} onSuccess={refreshRecipes} />)}
		</>}


		{view === 'edit' && <Container className='absolute z-10 h-screen top-2 new-form'>
			<Button onClick={() => setView(null)}>Cancel</Button>
			<Form id='edit-form' onSubmit={handleSubmit}>
				<Field type='text' id='title' placeholder={recipeToEdit.title} />
				<Field type='text' id='description' placeholder={recipeToEdit.description} />
				<Field type='url' id='image' placeholder={recipeToEdit.image} />
				<Field type='text' id='ingredients' placeholder={recipeToEdit.ingredients} />
				<Field type='text' id='diet' placeholder={recipeToEdit.diet} />
				<Field type='text' id='complexity' placeholder={recipeToEdit.complexity} />
				<Field type='text' id='method' placeholder={recipeToEdit.method} />

				<Button type='submit' > Modificar </Button>

			</Form>
		</Container>}

	</div >

}

export default Recipes