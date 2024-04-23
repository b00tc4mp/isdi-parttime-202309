import { Container } from "../library"
import OptionsFilters from "./OptionsFilters"
import { useState } from "react"

export default function MethodOptions() {
	const [isOpen, setIsOpen] = useState(false)

	const options = ['steamed', 'oven', 'microwave', 'grill', 'fresh', 'cook']

	function handleMethodlick(event) {
		event.preventDefault()

		setIsOpen(!isOpen)

		if (isOpen) {
			setIsOpen(false)
		}
	}
	return <Container className="options" onClick={handleMethodlick}>
		{isOpen &&
			<OptionsFilters title="Method" options={options} />
		}
	</Container>
}