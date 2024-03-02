import loginUser from './loginUser.js'
import registerUser from './registerUser.js'
import retrieveUser from './retrieveUser.js'
import retrieveGuest from './retrieveGuest.js'
import logoutUser from './logoutUser.js'
import isUserLoggedIn from './isUserLoggedIn.js'
import changeUserEmail from './changeUserEmail.js'
import changeUserPassword from './changeUserPassword.js'

import uploadFile from './uploadFile.js'

export {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn,
    changeUserEmail,
    changeUserPassword,
    uploadFile
}

const logic = {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn,
    changeUserEmail,
    changeUserPassword,
    uploadFile
}

export default logic