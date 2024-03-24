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

async function kickLeft(ottoInstance, userId, tempo) {
    if (!ottoInstance) {
        throw new Error("Otto is not initialized")
    }

    console.log(`Executing kickLeft with tempo ${tempo}`)


    const servoRightLeg = new Servo(3)
    const servoLeftLeg = new Servo(2)

    // Colocar ambos pies en posición neutral al inicio
    servoRightLeg.to(90)
    servoLeftLeg.to(90)
    await delay(tempo)

    // Secuencia de movimientos para simular la patada
    let movements = [
        { right: 50, left: 70 },
        { right: 80, left: 70 },
        { right: 30, left: 70 },
        { right: 80, left: 70 },
        { right: 30, left: 70 },
        { right: 80, left: 70 }
    ]

    // Ejecutar cada movimiento en la secuencia
    for (let movement of movements) {
        servoRightLeg.to(movement.right)
        servoLeftLeg.to(movement.left)
        await delay(tempo / 4)
    }

    console.log("kickLeft completed")

    // Guardar el movimiento en la base de datos utilizando saveInSequence
    try {
        const savedSequence = await saveInSequence({
            type: 'kickLeft',
            name: 'Kick Left',
            tempo,

        }, userId)
        console.log('kickLeft movement saved', savedSequence)
    } catch (error) {
        console.error('Error saving kickLeft movement', error)
        throw error
    }
}

export default kickLeft



