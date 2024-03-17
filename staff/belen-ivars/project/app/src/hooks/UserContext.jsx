import React, { useState, useEffect } from 'react'
import logic from '../logic'

const UserContext = React.createContext()

function UserContextProvider(props) {
	const [user, setUser] = useState(logic.retrieveUser())
	const [loggedInStatus, setLoggedInStatus] = useState(true)

	function logout() {
		logic.logoutUser({ name: 'Please log in', email: '' })
		setLoggedInStatus(false)
	}

	return (
		<UserContext.Provider value={(user, logout, loggedInStatus)}>{children}</UserContext.Provider>
	)
}

export { UserContextProvider, UserContext }