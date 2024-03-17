import Dropable from "./Dropable"

export default function ComplexityLevelFilter() {
	const options = ['very easy', 'easy', 'medium', 'complex', 'very complex']
	return <Dropable title="Complexity level" options={options} />
}