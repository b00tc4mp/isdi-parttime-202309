import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

import saveInSequence from './saveInSequence.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

function delay(ms) {
    return new Promise(resolve => {
        console.log(`Waiting ${ms} milliseconds...`)
        setTimeout(() => {
            console.log("Wait over, continuing with the next action.")
            resolve()
        }, ms)
    })
}



async function noGravity(ottoInstance, userId) {
    if (!ottoInstance) {
        throw new Error("Otto is not initialized")
    }

    console.log(`Executing noGravity`)

    // Posiciones predeterminadas para simular el movimiento
    const positions = [
        { leftFoot: 120, rightFoot: 140 }, // move1
        { leftFoot: 140, rightFoot: 140 }, // move2
        { leftFoot: 120, rightFoot: 140 }, // move3
        { leftFoot: 90, rightFoot: 90 }    // move4
    ];

    const tempo = 2000 // Duración en milisegundos de cada movimiento

    // Iterar sobre cada conjunto de posiciones
    for (const position of positions) {
        const servoLeftFoot = new Servo(4)
        const servoRightFoot = new Servo(5)
        servoLeftFoot.to(position.leftFoot)
        servoRightFoot.to(position.rightFoot)

        // Esperar la duración antes de pasar al siguiente conjunto de posiciones
        await delay(tempo)
    }

    console.log("noGravity completed")

    try {
        // Guardar el movimiento en la base de datos utilizando saveInSequence
        const savedSequence = await saveInSequence({
            type: 'noGravity',
            name: 'No Gravity',
            // Aquí puedes añadir cualquier otro detalle relevante del movimiento
        }, userId)
        console.log('No Gravity movement saved', savedSequence)
    } catch (error) {
        console.error('Error saving No Gravity movement', error)
        throw error // Lanza el error para ser capturado por quien llama a noGravity
    }
}

export default noGravity