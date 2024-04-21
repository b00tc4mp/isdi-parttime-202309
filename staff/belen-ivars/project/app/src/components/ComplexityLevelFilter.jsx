import OptionsFilters from "./OptionsFilters"

export default function ComplexityLevelFilter() {
	const options = ['very easy', 'easy', 'medium', 'complex', 'very complex']
	return <OptionsFilters title="Complexity level" options={options} />
}