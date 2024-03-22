import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

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



const noGravity = (ottoInstance, userId) => {
    return new Promise(async (resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        console.log(`Executing noGravity`)

        // Posiciones predeterminadas para simular el movimiento
        const positions = [
            { leftFoot: 120, rightFoot: 140 }, // move1
            { leftFoot: 140, rightFoot: 140 }, // move2
            { leftFoot: 120, rightFoot: 140 }, // move3
            { leftFoot: 90, rightFoot: 90 }    // move4
        ]

        const tempo = 2000 // Duración en milisegundos de cada movimiento

        // Iterar sobre cada conjunto de posiciones
        for (const position of positions) {
            // Mover cada pie a su posición objetivo
            const servoLeftFoot = new Servo(4) // Asumiendo pines correctos
            const servoRightFoot = new Servo(5)
            servoLeftFoot.to(position.leftFoot)
            servoRightFoot.to(position.rightFoot)

            // Esperar la duración antes de pasar al siguiente conjunto de posiciones
            await delay(tempo)
        }

        console.log("noGravity completed")

        // Crear y guardar el movimiento en la base de datos como en los ejemplos anteriores
        const noGravityMovement = {
            type: 'noGravity',
            name: 'No Gravity',
            ordinal: 0
        }

        SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
            .then(sequence => {
                const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
                noGravityMovement.ordinal = ordinal
                if (!sequence) {
                    // Si no hay secuencias, crea una nueva
                    const newSequence = new SequenceMovement({
                        userId: userId,
                        movements: [noGravityMovement],
                        createdAt: new Date()
                    })
                    newSequence.save().then(savedSequence => {
                        console.log('New sequence saved with noGravityMovement', savedSequence)
                        resolve(savedSequence)
                    }).catch(error => {
                        console.error('Error saving new sequence', error)
                        reject(error)
                    })
                } else {
                    // Añadir el movimiento a la secuencia existente
                    sequence.movements.push(noGravityMovement)
                    sequence.save().then(updatedSequence => {
                        console.log('noGravityMovement added to the last sequence', updatedSequence)
                        resolve(updatedSequence)
                    }).catch(error => {
                        console.error('Error adding noGravityMovement to the last sequence', error)
                        reject(error)
                    })
                }
            }).catch(error => {
                console.error('Error finding the last sequence', error)
                reject(error)
            })

        resolve() // Asegúrate de resolver la promesa al final
    })
}

export default noGravity