import Dropable from "./Dropable"

export default function DietFilter() {
	const options = ['glutenfree', 'vegetarian', 'vegan', 'omnivorous']
	return <Dropable title="Diet type" options={options} />
}