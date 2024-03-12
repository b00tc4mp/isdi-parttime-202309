import loginUser from './loginUser.js'
import registerUser from './registerUser.js'
import retrieveUser from './retrieveUser.js'
import retrieveGuest from './retrieveGuest.js'
import logoutUser from './logoutUser.js'
import isUserLoggedIn from './isUserLoggedIn.js'
import changeUserEmail from './changeUserEmail.js'
import changeUserPassword from './changeUserPassword.js'

import retrieveFiles from './retrieveFiles.js'
import uploadFile from './uploadFile.js'
import deleteFile from './deleteFile.js'
import downloadFile from './downloadFile.js'

export {
    loginUser,
    registerUser,
    retrieveUser,
    retrieveGuest,
    logoutUser,
    isUserLoggedIn,
    changeUserEmail,
    changeUserPassword,

    retrieveFiles,
    uploadFile,
    deleteFile,
    downloadFile
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

    retrieveFiles,
    uploadFile,
    deleteFile,
    downloadFile
}

export default logic