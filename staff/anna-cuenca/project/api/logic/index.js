import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'


import arduinoLed from './oldLogics/arduinoLed.js'

import retrieveUserInfo from './retrieveUserInfo.js'

import ottoWalkForward from './oldLogics/ottoWalkForward.js'
import ottoServosStop from './oldLogics/ottoServosStop.js'
import OttoController from './ottoController.js' // DESCOMENTAR CON OTTO

import arduinoLCD from './arduinoLCD.js'

///// LO COMENTO PARA PROBAR LA LÓGICA DE LA PANTALLA /// 

const ottoController = new OttoController()
ottoController.board.on("ready", () => {
    console.log("Placa lista y Otto inicializado.")
    // Aquí puedes realizar acciones adicionales si es necesario.
    ottoController.stop();
})


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    arduinoLed,
    retrieveUserInfo,
    ottoWalkForward,
    ottoServosStop,
    ottoController,
    arduinoLCD

}

export default logic