
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'


import isUserLoggedIn from './isUserLoggedIn'

import arduinoLed from './arduinoLed'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    arduinoLed
}

export default logic
