import { useState } from "react"

export default function ComplexityOptions(props) {
	const [isEasyChecked, setIsEasyChecked] = useState(false);
	const [isRegularChecked, setIsRegularChecked] = useState(false);
	const [isComplexChecked, setIsComplexChecked] = useState(false);

	const handleEasyOnChange = () => {
		setIsEasyChecked(!isEasyChecked);
		props.complexityChange('easy')
	};

	const handleRegularOnChange = () => {
		setIsRegularChecked(!isRegularChecked);
		props.complexityChange('regular')
	};

	const handleComplexOnChange = () => {
		setIsComplexChecked(!isComplexChecked);
		props.complexityChange('complex')
	};

	return (
		<div>
			<h2 className="form-subtitle-text">Tria la complexitat de la recepta:</h2>Tria la complexitat de la recepta:
			<div className="flex flex-col">
				<div className="form-options-text">
					<input
						type="checkbox"
						id="easy"
						name="easy"
						value="Easy"
						checked={isEasyChecked}
						onChange={handleEasyOnChange}
					/>
					Fàcil
				</div>
				<div className="form-options-text">
					<input
						type="checkbox"
						id="regular"
						name="regular"
						value="Regular"
						checked={isRegularChecked}
						onChange={handleRegularOnChange}
					/>
					Regular
				</div>
				<div className="form-options-text">
					<input
						type="checkbox"
						id="complex"
						name="complex"
						value="Complex"
						checked={isComplexChecked}
						onChange={handleComplexOnChange}
					/>
					Complexa
				</div>
			</div>
		</div>
	);
}