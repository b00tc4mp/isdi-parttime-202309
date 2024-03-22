import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const upDown = (ottoInstance, userId, steps, T) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        console.log(`UpDown movement for ${steps} steps with period ${T}`)

        // Servos de los pies
        const servoLeftFoot = new Servo(4) // Asumiendo que el pin 4 es para el pie izquierdo
        const servoRightFoot = new Servo(5) // Asumiendo que el pin 5 es para el pie derecho

        let currentStep = 0
        const intervalId = setInterval(() => {
            // Alternar entre la posición elevada y neutral para los pies
            // Aquí se ajusta para que el pie izquierdo haga lo contrario al pie derecho
            if (currentStep % 2 === 0) {
                servoLeftFoot.to(0) // Vuelve a la posición neutral para el pie izquierdo
                servoRightFoot.to(180) // Eleva el pie derecho al máximo
            } else {
                servoLeftFoot.to(0) // Eleva el pie izquierdo al máximo
                servoRightFoot.to(180) // Vuelve a la posición neutral para el pie derecho
            }
            currentStep++

            if (currentStep >= steps) {
                clearInterval(intervalId)
                // Volver a la posición neutral al terminar
                servoLeftFoot.to(90)
                servoRightFoot.to(90)

                console.log("UpDown movement completed")

                // Guardar el movimiento en la base de datos
                const upDownMovement = {
                    type: 'upDown',
                    name: 'UpDown',
                    ordinal: 0
                }

                // Buscar la última secuencia del usuario y agregar el movimiento
                SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                    .then(sequence => {
                        const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
                        upDownMovement.ordinal = ordinal

                        if (!sequence) {
                            // Si no hay secuencias, crea una nueva
                            const newSequence = new SequenceMovement({
                                userId: userId,
                                movements: [upDownMovement],
                                createdAt: new Date()
                            })
                            newSequence.save().then(savedSequence => {
                                console.log('New sequence saved with upDownMovement', savedSequence)
                                resolve(savedSequence)
                            }).catch(error => {
                                console.error('Error saving new sequence', error)
                                reject(error)
                            })
                        } else {
                            // Añadir el movimiento a la secuencia existente
                            sequence.movements.push(upDownMovement)
                            sequence.save().then(updatedSequence => {
                                console.log('upDownMovement added to the last sequence', updatedSequence)
                                resolve(updatedSequence)
                            }).catch(error => {
                                console.error('Error adding upDownMovement to the last sequence', error)
                                reject(error)
                            })
                        }
                    }).catch(error => {
                        console.error('Error finding the last sequence', error)
                        reject(error)
                    })

                resolve()
            }
        }, T / steps)
    })
}

export default upDown