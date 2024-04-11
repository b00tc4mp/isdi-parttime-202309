import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import registerUser from './registerUser'
import isUserLoggedIn from './isUserLoggedIn'
import retrieveDogs from './retrieveDogs'
import publishDog from './publishDog'
import retrieveMales from './retrieveMales'
import retrieveFemales from './retrieveFemales'
import retrievePuppies from './retrievePuppies'
import deleteDog from './deleteDog'
import changeEmail from './changeEmail'
import changePassword from './changePassword'
import publishHistory from './publishHistory'
import retrieveHistory from './retrieveHistory'
import modifyHistory from './modifyHistory'

import context from './context'

const logic = {
    registerUser,
    loginUser: loginUser.bind(context),
    retrieveUser: retrieveUser.bind(context),
    logoutUser: logoutUser.bind(context),
    isUserLoggedIn: isUserLoggedIn.bind(context),
    retrieveDogs: retrieveDogs.bind(context),
    publishDog: publishDog.bind(context),
    retrieveMales: retrieveMales.bind(context),
    retrieveFemales: retrieveFemales.bind(context),
    retrievePuppies: retrievePuppies.bind(context),
    deleteDog: deleteDog.bind(context),
    changeEmail: changeEmail.bind(context),
    changePassword: changePassword.bind(context),
    publishHistory: publishHistory.bind(context),
    retrieveHistory: retrieveHistory.bind(context),
    modifyHistory: modifyHistory.bind(context),

    context,
}

export default logic