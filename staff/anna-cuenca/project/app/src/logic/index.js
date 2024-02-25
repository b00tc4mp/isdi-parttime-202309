
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import retrieveUserInfo from './retrieveUserInfo'


import isUserLoggedIn from './isUserLoggedIn'

import arduinoLed from './arduinoLed'

import ottoWalkForward from './ottoWalkForward'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    arduinoLed,
    retrieveUserInfo,
    ottoWalkForward
}

export default logic
