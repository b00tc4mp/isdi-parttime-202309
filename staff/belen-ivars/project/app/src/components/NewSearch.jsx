import { useState } from "react"
import { Button, Field, Form, Container } from "../library"
import DietOptions from "./DietOptions"

export default function NewSearch(props) {
	const [diet, setDiet] = useState([])

	function handleChangeDiet(dietType) {
		const index = diet.indexOf(dietType)

		let newDiet
		if (index === -1) {
			newDiet = diet.concat(dietType)
		} else {
			newDiet = diet.filter((_, _index) => _index !== index);
		}
		setDiet(newDiet)
	}

	function handleSubmit(event) {
		event.preventDefault()

		const ingredients = event.target.querySelector('#search-elements').value
		if (ingredients.length > 0) {
			const formatedIngredients = ingredients.split(', ').join('-')
			props.setIngredients(formatedIngredients)
		}
		if (diet.length > 0) {
			const formatedDiet = diet.join('-')
			props.setDiet(formatedDiet)
		}
		props.onPublish()
	}

	function handleCancel(event) {
		event.preventDefault()

		props.onCancel()
	}

	return <Container className="new-form">
		<h2 className="form-title">Busca les millors receptes</h2>

		<Form onSubmit={handleSubmit}>
			<Field id="search-elements" placeholder="Search..." className="search" />

			<DietOptions dietChange={handleChangeDiet}></DietOptions>


			<div>
				<Button type='submit'>🔍</Button>
				<Button onClick={handleCancel}>Cancelar</Button>
			</div>
		</Form>
	</Container>
}

