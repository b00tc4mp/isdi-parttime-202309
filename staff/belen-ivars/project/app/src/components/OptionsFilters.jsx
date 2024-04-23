import { useState } from "react"

export default function OptionsFilters(props) {
	const [isGlutenChecked, setIsGlutenChecked] = useState(false);
	const [isVeganChecked, setIsVeganChecked] = useState(false);
	const [isVeggieChecked, setIsVeggieChecked] = useState(false);

	const handleGlutenOnChange = () => {
		setIsGlutenChecked(!isGlutenChecked);
	};

	const handleVeganOnChange = () => {
		setIsVeganChecked(!isVeganChecked);
	};

	const handleVeggieOnChange = () => {
		setIsVeggieChecked(!isVeggieChecked);
	};

	return (
		<div>
			Select your diet:
			<div>
				<input
					type="checkbox"
					id="gluten"
					name="gluten"
					value="GlutenFree"
					checked={isGlutenChecked}
					onChange={handleGlutenOnChange}
				/>
				Gluten Free
				<input
					type="checkbox"
					id="vegan"
					name="vegan"
					value="Vegan"
					checked={isVeganChecked}
					onChange={handleVeganOnChange}
				/>
				Vegan
				<input
					type="checkbox"
					id="veggie"
					name="veggie"
					value="Vegeterian"
					checked={isVeggieChecked}
					onChange={handleVeggieOnChange}
				/>
				Vegeterian
			</div>
		</div>
	);
}