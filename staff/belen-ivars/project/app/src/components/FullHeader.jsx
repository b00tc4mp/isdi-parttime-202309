import FavsButton from "./FavsButton"
import TopProfileImage from "./TopProfileImage"
import LogoutButton from "./LogoutButton"
import Search from "./Search"

export default function FullHeader({ name, email }) {
	return <>

		<TopProfileImage email={email} name={name} />

		<FavsButton />
		<LogoutButton />

		{/* <Search /> */}

	</>
}