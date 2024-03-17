import Dropable from "./Dropable"

export default function MethodFilter() {
	const options = ['steamed', 'oven', 'microwave', 'grill', 'fresh']
	return <Dropable title="Method" options={options} />
}