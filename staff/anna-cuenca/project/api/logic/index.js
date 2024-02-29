import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'




import retrieveUserInfo from './retrieveUserInfo.js'

import OttoController from './ottoController.js' // DESCOMENTAR CON OTTO



///// LO COMENTO PARA PROBAR LA LÓGICA DE LA PANTALLA /// 

const ottoController = new OttoController()
ottoController.board.on("ready", () => {
    console.log("Placa lista y Otto inicializado.")

    ottoController.stop();
})


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    retrieveUserInfo,

    ottoController


}

export default logic