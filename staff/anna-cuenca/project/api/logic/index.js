import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import { arduinoConnect } from './arduinoConnect.js'
import arduinoLedBuiltIn from './arduinoLedBuiltIn.js'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    arduinoConnect,
    arduinoLedBuiltIn

}

export default logic