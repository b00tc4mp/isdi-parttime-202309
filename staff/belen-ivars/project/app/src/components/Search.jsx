import SearchForm from "./SearchForm"
import MethodFilter from "./MethodFilter"
import { Container } from "../library"

export default function Search(props) {
	return <Container className='new-recipe'>
		<SearchForm onCancel={props.onCancel} />
		<MethodFilter />
	</Container>
}