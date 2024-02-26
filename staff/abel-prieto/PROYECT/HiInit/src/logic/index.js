import loginUser from './loginUser.js'
import registerUser from './registerUser.js'
import retrieveUser from './retrieveUser.js'
import retrieveGuest from './retrieveGuest.js'
import logoutUser from './logoutUser.js'
import isUserLoggedIn from './isUserLoggedIn.js'
import uploadFile from './uploadFile.js'

export {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn,
    uploadFile
}

const logic = {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn,
    uploadFile
}

export default logic