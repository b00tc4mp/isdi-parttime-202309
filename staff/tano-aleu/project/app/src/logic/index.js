import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import getSamples from './getSamples'
import isUserLoggedIn from './isUserLoggedIn'
import getMetronomo from './getMetronomo'
import toggleFavSample from './toggleFavSample'
import retrieveFavSamples from './retrieveFavSamples'
import changeUserEmail from './changeUserEmail'
import changeUserPassword from './changeUserPassword'


const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    logoutUser,
    isUserLoggedIn,
    getSamples,
    getMetronomo,
    toggleFavSample,
    retrieveFavSamples


}

export default logic