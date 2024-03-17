import FavsButton from "./FavsButton"
import ProfileButton from "./ProfileButton"

export default function FullHeader({ name, email }) {
	return <>
		<FavsButton />

		<ProfileButton />

	</>
}