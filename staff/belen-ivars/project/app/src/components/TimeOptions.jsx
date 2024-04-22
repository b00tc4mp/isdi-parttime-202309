import OptionsFilters from "./OptionsFilters"

export default function TimeOptions() {
	const options = ['0 - 15 min', '15 - 30 min', '30-1 h', '+ 1h']
	return <OptionsFilters title="Time filter" options={options} />
}