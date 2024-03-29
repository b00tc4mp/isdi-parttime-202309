import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import registerUser from './registerUser'
import isUserLoggedIn from './isUserLoggedIn'
import retrieveDogs from './retrieveDogs'
import publishDog from './publishDog'
import retrieveMales from './retrieveMales'

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

    context,
}

export default logic