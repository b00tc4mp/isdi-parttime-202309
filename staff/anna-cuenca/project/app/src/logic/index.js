
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import arduinoConnectApp from './arduinoConnectApp'
import arduinoLedBuiltIn from './arduinoLedBuiltIn'

import isUserLoggedIn from './isUserLoggedIn'



const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    arduinoConnectApp,
    arduinoLedBuiltIn
}

export default logic
