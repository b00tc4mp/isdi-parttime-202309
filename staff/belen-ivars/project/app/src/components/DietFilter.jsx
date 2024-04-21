import OptionsFilters from "./OptionsFilters"

export default function DietFilter() {
	const options = ['glutenfree', 'vegetarian', 'vegan', 'omnivorous']
	return <OptionsFilters title="Diet type" options={options} />
}