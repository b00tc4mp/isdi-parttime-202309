import { Button, Form, Field, Container } from "../library"
import logic from "../logic"
import { useContext } from 'react'
import session from "../logic/session"
import Context from "../Context"
import { getEnglishKey, dietTranslations, methodTranslations, complexityTranslations } from "../assets/translation"

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
		const ingredients = ingredientsInput.value

		const diet = getEnglishKey(dietTranslations, dietInput.value)
		const complexity = getEnglishKey(complexityTranslations, complexityInput.value)
		const method = getEnglishKey(methodTranslations, methodInput.value)


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

	return <Container className="new-form-footer">
		<h2 className="form-title">Puja la teua recepta</h2>

		<Form onSubmit={handleSubmit}>
			<Field id="title-input" type="text" placeholder='Títol de la recepta'>Títol</Field>
			<Field id="description-input" type="text" placeholder='Descriu els pasos'>Descripció</Field>
			<Field id="image-input" type="url" placeholder='Inclou una imatge'>Imatge</Field>
			<Field id="ingredients-input" type="text" placeholder='exemple1, exemple2,...'>Ingredients</Field>
			<Field id="diet-input" type="text" placeholder='glutenfree, vegan or vegetarian'>Tipus de dieta</Field>
			<Field id="complexity-input" type="text" placeholder='fàcil, regular o complexe' >Nivell de complexitat</Field>
			<Field id="method-input" type="text" placeholder='al vapor, forn, microones, planxa, fresc or cuit'>Mètode de cocció</Field>


			<Button type="submit">Post</Button>
			<Button onClick={handleCancel}>Cancela</Button>
		</Form>
	</Container>
}
