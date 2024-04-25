import { useState } from "react"
import { Button, Field, Form, Container } from "../library"
import DietOptions from "./DietOptions"
import ComplexityOptions from "./ComplexityOptions"
import MethodOptions from "./MethodOptions"

export default function NewSearch(props) {
	const [diet, setDiet] = useState([])
	const [complexity, setComplexity] = useState([])
	const [method, setMethod] = useState([])

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

	function handleChangeComplexity(complexityLevel) {
		const index = complexity.indexOf(complexityLevel)

		let newComplexity
		if (index === -1) {
			newComplexity = complexity.concat(complexityLevel)
		} else {
			newComplexity = complexity.filter((_, _index) => _index !== index);
		}
		setComplexity(newComplexity)
	}

	function handleChangeMethod(methodOption) {
		const index = method.indexOf(methodOption)

		let newMethod
		if (index === -1) {
			newMethod = method.concat(methodOption)
		} else {
			newMethod = method.filter((_, _index) => _index !== index);
		}
		setMethod(newMethod)
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
		if (complexity.length > 0) {
			const formatedComplexity = complexity.join('-')
			props.setComplexity(formatedComplexity)
		}
		if (method.length > 0) {
			const formatedMethod = method.join('-')
			props.setMethod(formatedMethod)
		}
		props.onPublish()
	}

	function handleCancel(event) {
		event.preventDefault()

		props.onCancel()
	}

	return <Container className="new-form-footer">
		<h2 className="form-title">Busca les millors receptes</h2>

		<Form onSubmit={handleSubmit}>
			<Field id="search-elements" placeholder="Search..." className="search" />

			<DietOptions dietChange={handleChangeDiet}></DietOptions>
			<ComplexityOptions complexityChange={handleChangeComplexity}></ComplexityOptions>
			<MethodOptions methodChange={handleChangeMethod}></MethodOptions>

			<div>
				<Button type='submit'>🔍</Button>
				<Button onClick={handleCancel}>Cancelar</Button>
			</div>
		</Form>
	</Container>
}

