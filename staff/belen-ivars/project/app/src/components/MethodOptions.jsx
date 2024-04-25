import { useState } from "react"

export default function MethodOptions(props) {
	const [isSteamedChecked, setIsSteamedChecked] = useState(false);
	const [isOvenChecked, setIsOvenChecked] = useState(false);
	const [isMicrowaveChecked, setIsMicrowaveChecked] = useState(false);
	const [isGrillChecked, setIsGrillChecked] = useState(false);
	const [isFreshChecked, setIsFreshChecked] = useState(false);
	const [isCookedChecked, setIsCookedChecked] = useState(false);

	const handleSteamedOnChange = () => {
		setIsSteamedChecked(!isSteamedChecked);
		props.methodChange('steamed')
	};

	const handleOvenOnChange = () => {
		setIsOvenChecked(!isOvenChecked);
		props.methodChange('oven')
	};

	const handleMicrowaveOnChange = () => {
		setIsMicrowaveChecked(!isMicrowaveChecked);
		props.methodChange('microwave')
	};

	const handleGrillOnChange = () => {
		setIsGrillChecked(!isGrillChecked);
		props.methodChange('grill')
	};

	const handleFreshOnChange = () => {
		setIsFreshChecked(!isFreshChecked);
		props.methodChange('fresh')
	};

	const handleCookedOnChange = () => {
		setIsCookedChecked(!isCookedChecked);
		props.methodChange('cooked')
	};

	return (
		<div>
			Tria el mètode d'elaboració:
			<div className="flex flex-col">
				<div>
					<input
						type="checkbox"
						id="steamed"
						name="steamed"
						value="Steamed"
						checked={isSteamedChecked}
						onChange={handleSteamedOnChange}
					/>
					Al vapor
				</div>
				<div>
					<input
						type="checkbox"
						id="oven"
						name="oven"
						value="Oven"
						checked={isOvenChecked}
						onChange={handleOvenOnChange}
					/>
					Forn
				</div>
				<div>
					<input
						type="checkbox"
						id="microwave"
						name="microwave"
						value="Microwave"
						checked={isMicrowaveChecked}
						onChange={handleMicrowaveOnChange}
					/>
					Microones
				</div>
				<div>
					<input
						type="checkbox"
						id="grill"
						name="grill"
						value="Grill"
						checked={isGrillChecked}
						onChange={handleGrillOnChange}
					/>
					Planxa
				</div>
				<div>
					<input
						type="checkbox"
						id="fresh"
						name="fresh"
						value="Fresh"
						checked={isFreshChecked}
						onChange={handleFreshOnChange}
					/>
					Fresc
				</div>
				<div>
					<input
						type="checkbox"
						id="cooked"
						name="cooked"
						value="Cooked"
						checked={isCookedChecked}
						onChange={handleCookedOnChange}
					/>
					Cuit
				</div>
			</div>
		</div>
	);
}