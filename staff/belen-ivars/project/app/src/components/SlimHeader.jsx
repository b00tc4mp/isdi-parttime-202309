import FavsButton from "./FavsButton"
import LogoutButton from "./LogoutButton"

export default function FullHeader({ name, email }) {
	return <>
		<FavsButton />

		<LogoutButton />

	</>
}