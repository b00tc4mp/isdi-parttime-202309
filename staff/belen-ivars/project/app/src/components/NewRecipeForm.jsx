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

		const title = titleInput.value
		const text = textInput.value
		const image = imageInput.value
		const author = session.sessionUserId

		try {
			await logic.createRecipe(author, title, text, image)

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
			<Field id="description-input" type="text">Text</Field>
			<Field id="image-input" type="url" >Image</Field>

			<Button type="submit">Post</Button>
			<Button onClick={handleCancel}>Cancel</Button>
		</Form>
	</Container>
}
