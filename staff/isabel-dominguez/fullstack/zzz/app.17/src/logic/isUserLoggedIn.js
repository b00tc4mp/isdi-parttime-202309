import session from "./session"

function isUserLoggedIn() {
    return !!session.token
    // !null => true !!null = !true = false
}

export default isUserLoggedIn