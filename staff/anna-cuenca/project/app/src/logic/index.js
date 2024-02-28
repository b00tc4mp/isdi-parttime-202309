
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import retrieveUserInfo from './retrieveUserInfo'


import isUserLoggedIn from './isUserLoggedIn'

import arduinoLCD from './arduinoLCD'

import ottoController from './ottoControler'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,

    retrieveUserInfo,

    ottoController,
    arduinoLCD
}

export default logic
