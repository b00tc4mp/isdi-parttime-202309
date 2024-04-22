import { Button, Form, Field, Container } from "../library"
import logic from "../logic"
import { useContext } from 'react'
import session from "../logic/session"
import Context from "../Context"

export default function NewRecipe(props) {
	console.log('NewRecipe')

	const context = useContext(Context)

	const handleSubmit = async event => {
		event.preventDefault()

		const titleInput = event.target.querySelector('#title-input')
		const textInput = event.target.querySelector('#description-input')
		const imageInput = event.target.querySelector('#image-input')
		const ingredientsInput = event.target.querySelector('#ingredients-input')
		const dietInput = event.target.querySelector('#diet-input')
		const complexityInput = event.target.querySelector('#complexity-input')
		const methodInput = event.target.querySelector('#method-input')


		const title = titleInput.value
		const text = textInput.value
		const image = imageInput.value
		const ingredients = ingredientsInput.value.split(',' || '-' || '.')
		const diet = dietInput.value
		const complexity = complexityInput.value
		const method = methodInput.value


		try {
			await logic.createRecipe(title, text, image, ingredients, diet, complexity, method)

			props.onPublish()

		} catch (error) {
			context.handleError(error)
		}
	}

	const handleCancel = event => {
		event.preventDefault()

		props.onCancel()
	}

	return <Container className="new-recipe">
		<h2>New recipe</h2>

		<Form onSubmit={handleSubmit}>
			<Field id="title-input" type="text" >Title</Field>
			<Field id="description-input" type="text">Description</Field>
			<Field id="image-input" type="url" >Image</Field>
			<Field id="ingredients-input" type="text" placeholder='example1, example2,...'>Ingredients</Field>
			<Field id="diet-input" type="text" >Diet</Field>
			<Field id="complexity-input" type="text" >Complexity</Field>
			<Field id="method-input" type="text" >Method</Field>


			<Button type="submit">Post</Button>
			<Button onClick={handleCancel}>Cancel</Button>
		</Form>
	</Container>
}
