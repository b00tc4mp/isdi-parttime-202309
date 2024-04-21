import OptionsFilters from "./OptionsFilters"

export default function MethodFilter() {
	const options = ['steamed', 'oven', 'microwave', 'grill', 'fresh']
	return <OptionsFilters title="Method" options={options} />
}