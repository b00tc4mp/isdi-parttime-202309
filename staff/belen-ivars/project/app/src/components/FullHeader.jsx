import FavsButton from "./FavsButton"
import TopProfileImage from "./TopProfileImage"
import ProfileButton from "./ProfileButton"
import Search from "./Search"

export default function FullHeader({ name, email }) {
	return <>

		<TopProfileImage email={email} name={name} />

		<FavsButton />
		<ProfileButton />

		{/* <Search /> */}

	</>
}