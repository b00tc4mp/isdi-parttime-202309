import SearchForm from "./SearchForm"
import MethodOptions from "./MethodOptions"
import { Container } from "../library"

export default function Search(props) {
	return <Container className='new-recipe'>
		<SearchForm onCancel={props.onCancel} />
		<MethodOptions />
	</Container>
}