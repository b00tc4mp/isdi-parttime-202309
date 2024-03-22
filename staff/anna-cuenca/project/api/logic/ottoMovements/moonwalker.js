import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const moonwalker = (ottoInstance, userId, steps, T, h, dir) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        console.log(`Moonwalking for ${steps} steps with period ${T}, height ${h}, and direction ${dir}`)

        // Inicializar los servos de los pies directamente
        const servoLeftFoot = new Servo(4) // o 'A2' para OTTO GRANDE
        const servoRightFoot = new Servo(5) // o 'A0' para OTTO GRANDE

        // Definir la amplitud y los ángulos iniciales basados en la dirección
        const angleStartLeft = dir === LEFT ? 90 - h : 90 + h
        const angleStartRight = dir === LEFT ? 90 + h : 90 - h
        const angleEndLeft = dir === LEFT ? 90 + h / 2 : 90 - h / 2
        const angleEndRight = dir === LEFT ? 90 - h / 2 : 90 + h / 2

        let currentStep = 0
        const intervalId = setInterval(() => {
            if (currentStep % 2 === 0) {
                servoLeftFoot.to(angleStartLeft)
                servoRightFoot.to(angleStartRight)
            } else {
                servoLeftFoot.to(angleEndLeft)
                servoRightFoot.to(angleEndRight)
            }
            currentStep++

            if (currentStep >= steps) {
                clearInterval(intervalId)
                // Regresar los servos a la posición central
                servoLeftFoot.to(90)
                servoRightFoot.to(90)

                console.log("Moonwalk completed")

                // Guardar el movimiento en la base de datos
                const moonwalkMovement = {
                    type: 'moonwalker',
                    name: 'Moonwalker',
                    ordinal: 0
                }

                // Buscar la última secuencia del usuario y agregar el movimiento
                SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                    .then(sequence => {
                        const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
                        moonwalkMovement.ordinal = ordinal
                        if (!sequence) {
                            // Si no hay secuencias, crea una nueva
                            const newSequence = new SequenceMovement({
                                userId: userId,
                                movements: [moonwalkMovement],
                                createdAt: new Date()
                            });
                            newSequence.save().then(savedSequence => {
                                console.log('New sequence saved with Moonwalker', savedSequence)
                                resolve(savedSequence)
                            }).catch(error => {
                                console.error('Error saving new sequence', error)
                                reject(error)
                            })
                        } else {
                            // Añadir el movimiento a la secuencia existente
                            sequence.movements.push(moonwalkMovement)
                            sequence.save().then(updatedSequence => {
                                console.log('Moonwalker added to the last sequence', updatedSequence)
                                resolve(updatedSequence)
                            }).catch(error => {
                                console.error('Error adding Moonwalker to the last sequence', error)
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

export default moonwalker