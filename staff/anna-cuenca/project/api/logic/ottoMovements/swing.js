import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const swing = (ottoInstance, userId, steps, T, h) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        console.log(`Swinging for ${steps} steps with period ${T} and height ${h}`)

        // Inicializar los servos directamente
        const servoLeftFoot = new Servo(4) // o 'A2' para OTTO GRANDE
        const servoRightFoot = new Servo(5) // o 'A0' para OTTO GRANDE

        // Cálculo de los ángulos basado en la altura 'h'
        const angleUp = 90 + h
        const angleDown = 90 - h

        let currentStep = 0
        const intervalId = setInterval(() => {
            if (currentStep % 2 === 0) {
                // Mover hacia un lado
                servoLeftFoot.to(angleUp)
                servoRightFoot.to(angleUp)
            } else {
                // Mover hacia el otro lado
                servoLeftFoot.to(angleDown)
                servoRightFoot.to(angleDown)
            }
            currentStep++

            if (currentStep >= steps) {
                clearInterval(intervalId)
                // volver a poner servos en la posición normal
                servoLeftFoot.to(90)
                servoRightFoot.to(90)

                console.log("Swing completed")

                // Guardar el movimiento en la base de datos
                const swingMovement = {
                    type: 'swing',
                    name: 'Swing',

                    ordinal: 0
                }

                // Buscar la última secuencia del usuario y agregar el movimiento
                SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                    .then(sequence => {
                        const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
                        swingMovement.ordinal = ordinal

                        if (!sequence) {
                            // Si no hay secuencias, crea una nueva
                            const newSequence = new SequenceMovement({
                                userId: userId,
                                movements: [swingMovement],
                                createdAt: new Date()
                            });
                            newSequence.save().then(savedSequence => {
                                console.log('New sequence saved with Swing', savedSequence)
                                resolve(savedSequence)
                            }).catch(error => {
                                console.error('Error saving new sequence', error)
                                reject(error)
                            })
                        } else {
                            // Añadir el movimiento a la secuencia existente
                            sequence.movements.push(swingMovement)
                            sequence.save().then(updatedSequence => {
                                console.log('Swing added to the last sequence', updatedSequence)
                                resolve(updatedSequence)
                            }).catch(error => {
                                console.error('Error adding Swing to the last sequence', error)
                                reject(error)
                            })
                        }
                    }).catch(error => {
                        console.error('Error finding the last sequence', error)
                        reject(error)
                    })
            }
        }, T / steps)
    })
}

export default swing
