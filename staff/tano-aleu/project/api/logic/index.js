import registerUser from "./registerUser.js"
import authenticateUser from "./authenticateUser.js"
import retrieveUser from "./retrieveUser.js"
import getSamples from "./getSamples.js"
import getMetronomo from "./getMetronomo.js"
import toggleFavSample from "./toggleFavSample.js"
import retrieveFavSamples from "./retrieveFavSamples.js"
import changeUserEmail from "./changeUserEmail.js"
import changeUserPassword from "./changeUserPassword.js"

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    getSamples,
    getMetronomo,
    toggleFavSample,
    retrieveFavSamples
}

export default logic