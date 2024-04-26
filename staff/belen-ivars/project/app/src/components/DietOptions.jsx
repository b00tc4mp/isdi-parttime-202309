import { useState } from "react"

export default function DietOptions(props) {
	const [isGlutenChecked, setIsGlutenChecked] = useState(false);
	const [isVeganChecked, setIsVeganChecked] = useState(false);
	const [isVeggieChecked, setIsVeggieChecked] = useState(false);

	const handleGlutenOnChange = () => {
		setIsGlutenChecked(!isGlutenChecked);
		props.dietChange('glutenfree')
	};

	const handleVeganOnChange = () => {
		setIsVeganChecked(!isVeganChecked);
		props.dietChange('vegan')
	};

	const handleVeggieOnChange = () => {
		setIsVeggieChecked(!isVeggieChecked);
		props.dietChange('vegetarian')
	};

	return (
		<div>
			<div className="flex flex-col">
				<h2 className="form-subtitle-text">Selecciona una dieta: </h2>
				<div className="form-options-text">
					<input
						type="checkbox"
						id="gluten"
						name="gluten"
						value="GlutenFree"
						checked={isGlutenChecked}
						onChange={handleGlutenOnChange}
					/>
					Gluten Free
				</div>
				<div className="form-options-text">
					<input
						type="checkbox"
						id="vegan"
						name="vegan"
						value="Vegan"
						checked={isVeganChecked}
						onChange={handleVeganOnChange}
					/>
					Vegà
				</div>
				<div className="form-options-text">
					<input
						type="checkbox"
						id="veggie"
						name="veggie"
						value="Vegeterian"
						checked={isVeggieChecked}
						onChange={handleVeggieOnChange}
					/>
					Vegeterià
				</div>
			</div>
		</div>
	);
}