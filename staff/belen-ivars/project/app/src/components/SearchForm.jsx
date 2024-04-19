import { useState } from "react"
import { Button, Field, Input, Form } from "../library"

export default function Searcher(props) {

	const [term, setTerm] = useState(null)

	function handleSubmit(event) {
		event.preventDefault()

		// const ingredients = event.target.querySelector('#search-elements').value
	}

	return <Form onSubmit={handleSubmit}>
		<Field id="search-elements" placeholder="Search..." className="search" value={term} />

		<Button type="submit">🔍</Button>

	</Form>
}

