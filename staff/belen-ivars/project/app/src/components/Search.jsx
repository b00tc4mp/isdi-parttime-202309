import SearchForm from "./SearchForm"
import DietFilter from "./DietFilter"
import ComplexityLevelFilter from "./ComplexityLevelFilter"
import TimeFilter from "./TimeFilter"
import MethodFilter from "./MethodFilter"

export default function Search(props) {
	return <>
		<SearchForm />
		<DietFilter />
		<ComplexityLevelFilter />
		<TimeFilter />
		<MethodFilter />
	</>
}