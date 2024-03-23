import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

import saveInSequence from './saveInSequence.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

async function shakeLegRight(ottoInstance, userId, steps, T) {
    if (!ottoInstance) {
        throw new Error("Otto is not initialized")
    }

    console.log(`Shaking right leg for ${steps} steps with period ${T}`)

    // Definir los pines para la pierna y pie derecho específicamente
    const legPin = 3
    const footPin = 5

    const legServo = new Servo(legPin)
    const footServo = new Servo(footPin)

    // Iniciar el movimiento de sacudida para la pierna derecha
    for (let i = 0; i < steps; i++) {
        const phaseProgress = (i / steps) * 2 * Math.PI
        const angle = 30 * Math.sin(phaseProgress) + 90 // Ejemplo con amplitud de 30 y offset de 90
        legServo.to(angle)
        footServo.to(angle)
        await new Promise(resolve => setTimeout(resolve, T / steps))
    }


    legServo.to(90)
    footServo.to(90)

    console.log("ShakeLegRight completed")

    try {
        const savedSequence = await saveInSequence({
            type: 'shakeLegRight', // Tipo específico para sacudir la pierna derecha
            name: 'Shake Leg Right',
            steps,
            T,
        }, userId)
        console.log('Shake Leg Right movement saved', savedSequence)
    } catch (error) {
        console.error('Error saving Shake Leg Right movement', error)
        throw error
    }
}

export default shakeLegRight