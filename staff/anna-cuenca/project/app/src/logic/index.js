
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import retrieveUserInfo from './retrieveUserInfo'
import retrieveTutorials from './retrieveTutorials'
import publishTutorial from './publishTutorial'
import toggleLikeTutorial from './toggleLikeTutorial'
import deleteTutorial from './deleteTutorial'


import isUserLoggedIn from './isUserLoggedIn'

import arduinoLCD from './arduinoLCD'

import ottoController from './ottoControler'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    retrieveTutorials,
    publishTutorial,
    toggleLikeTutorial,
    deleteTutorial,

    retrieveUserInfo,


    ottoController,
    arduinoLCD
}

export default logic
