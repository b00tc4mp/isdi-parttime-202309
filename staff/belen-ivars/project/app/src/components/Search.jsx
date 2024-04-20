import SearchForm from "./SearchForm"
import MethodFilter from "./MethodFilter"

export default function Search(props) {
	return <>
		<SearchForm onCancel={props.onCancel} />
		<MethodFilter />
	</>
}