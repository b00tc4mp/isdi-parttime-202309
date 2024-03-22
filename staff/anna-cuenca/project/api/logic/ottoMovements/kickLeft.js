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

const kickLeft = (ottoInstance, userId, tempo) => {
    return new Promise(async (resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        console.log(`Executing kickLeft with tempo ${tempo}`)

        // Inicializa los servos
        const servoRightLeg = new Servo(3) // Asumiendo pie derecho en pin 3
        const servoLeftLeg = new Servo(2)  // Asumiendo pie izquierdo en pin 2

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
            await delay(tempo / 4) // Ajustar el tiempo según sea necesario
        }

        console.log("kickLeft completed")

        // Aquí va el código para guardar el movimiento en la base de datos, similar a los ejemplos anteriores
        const kickLeftMovement = {
            type: 'kickLeft',
            name: 'Kick Left',
            ordinal: 0
        }

        // Añadir el código para guardar el movimiento en la secuencia del usuario aquí
        SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
            .then(sequence => {
                const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
                kickLeftMovement.ordinal = ordinal
                if (!sequence) {
                    // Si no hay secuencias, crea una nueva
                    const newSequence = new SequenceMovement({
                        userId: userId,
                        movements: [kickLeftMovement],
                        createdAt: new Date()
                    })
                    newSequence.save().then(savedSequence => {
                        console.log('New sequence saved with kickLeftMovement', savedSequence)
                        resolve(savedSequence)
                    }).catch(error => {
                        console.error('Error saving new sequence', error)
                        reject(error)
                    })
                } else {
                    // Añadir el movimiento a la secuencia existente
                    sequence.movements.push(kickLeftMovement)
                    sequence.save().then(updatedSequence => {
                        console.log('kickLeftMovement added to the last sequence', updatedSequence)
                        resolve(updatedSequence)
                    }).catch(error => {
                        console.error('Error adding kickLeftMovement to the last sequence', error)
                        reject(error)
                    })
                }
            }).catch(error => {
                console.error('Error finding the last sequence', error)
                reject(error)
            })

        resolve() // Resolver la promesa al finalizar
    })
}

export default kickLeft