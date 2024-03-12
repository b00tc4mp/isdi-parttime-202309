import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'

import createTutorial from './createTutorial.js'
import retrieveTutorials from './retrieveTutorials.js'
import toggleLikeTutorial from './toggleLikeTutorial.js'
import deleteTutorial from './deleteTutorial.js'

import retrieveSequence from './retrieveSequence.js'
import deleteSequence from './deleteSequence.js'
import editSequence from './editSequence.js'


import retrieveUserInfo from './retrieveUserInfo.js'
import retrieveMovements from './retrieveMovements.js'

import OttoController from './ottoController.js' // DESCOMENTAR CON OTTO
//import editSequence from './editSequence.js'

import changeEmailUser from './changeEmailUser.js'
import changePassword from './changePassword.js'

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
    createTutorial,
    retrieveTutorials,
    toggleLikeTutorial,
    deleteTutorial,

    retrieveUserInfo,
    retrieveSequence,
    deleteSequence,
    editSequence,
    retrieveMovements,

    changeEmailUser,
    changePassword,


    ottoController


}

export default logic