import loginUser from './loginUser.js'
import registerUser from './registerUser.js'
import retrieveUser from './retrieveUser.js'
import retrieveGuest from './retrieveGuest.js'
import logoutUser from './logoutUser.js'
import isUserLoggedIn from './isUserLoggedIn.js'

export {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn
}

const logic = {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn
}

export default logic