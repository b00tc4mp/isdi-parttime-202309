import loginUser from './loginUser.js'
import registerUser from './registerUser.js'
import retrieveUser from './retrieveUser.js'
import logoutUser from './logoutUser.js'
import isUserLoggedIn from './isUserLogged.js'

export {
    loginUser,
    registerUser,
    retrieveUser,
    logoutUser,
    isUserLoggedIn
}

const logic = {
    loginUser,
    registerUser,
    retrieveUser,
    logoutUser,
    isUserLoggedIn
}

export default logic