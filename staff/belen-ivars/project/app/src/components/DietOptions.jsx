import OptionsFilters from "./OptionsFilters"

export default function DietOptions() {
	const options = ['glutenfree', 'vegetarian', 'vegan', 'omnivorous']
	return <OptionsFilters title="Diet type" options={options} />
}