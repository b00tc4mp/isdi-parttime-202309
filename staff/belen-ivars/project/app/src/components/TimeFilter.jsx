import Dropable from "./Dropable"

export default function TimeFilter() {
	const options = ['0 - 15 min', '15 - 30 min', '30-1 h', '+ 1h']
	return <Dropable title="Time filter" options={options} />
}