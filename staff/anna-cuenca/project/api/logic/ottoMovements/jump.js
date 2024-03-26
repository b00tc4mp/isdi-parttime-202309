import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

import saveInSequence from './saveInSequence.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

async function jump(ottoInstance, userId) {
    if (!ottoInstance) {
        throw new Error("Otto is not initialized")
    }

    console.log("Otto is preparing to jump")

    // Inicializa los servos
    const servoLeftLeg = new Servo(2)
    const servoRightLeg = new Servo(3)
    const servoLeftFoot = new Servo(4)
    const servoRightFoot = new Servo(5)

    // Lógica para hacer que Otto salte
    servoLeftLeg.to(90)
    servoRightLeg.to(90)
    servoLeftFoot.to(150)
    servoRightFoot.to(30)

    // Espera antes de finalizar la lógica del salto
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Finaliza la lógica del salto
    servoLeftLeg.to(90)
    servoRightLeg.to(90)
    servoLeftFoot.to(90)
    servoRightFoot.to(90)

    console.log("Otto has jumped")

    // Guardar el movimiento en la base de datos utilizando saveInSequence
    try {
        const savedSequence = await saveInSequence({
            type: 'jump',
            name: 'Jump',

        }, userId)
        console.log('Jump movement saved', savedSequence)
    } catch (error) {
        console.error('Error saving Jump movement', error)
        throw error
    }
}

export default jump

