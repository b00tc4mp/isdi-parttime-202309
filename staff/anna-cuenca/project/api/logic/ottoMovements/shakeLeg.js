import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const shakeLeg = (ottoInstance, userId, steps, T, dir) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        console.log(`Shaking leg ${dir === LEFT ? 'left' : 'right'} for ${steps} steps with period ${T}`)

        // Determinar cuáles servos corresponden a la pierna y el pie que se van a sacudir
        const legPin = dir === LEFT ? 2 : 3 // Asumiendo pines para la pierna izquierda y derecha
        const footPin = dir === LEFT ? 4 : 5 // Asumiendo pines para el pie izquierdo y derecho

        // Inicializar los servos directamente
        const legServo = new Servo(legPin)
        const footServo = new Servo(footPin)

        // Iniciar el movimiento de sacudida
        for (let i = 0; i < steps; i++) {
            setTimeout(() => {
                const phaseProgress = (i / steps) * 2 * Math.PI
                const angle = 30 * Math.sin(phaseProgress) + 90 // Ejemplo con amplitud de 30 y offset de 90
                legServo.to(angle)
                footServo.to(angle)

                if (i === steps - 1) {
                    setTimeout(() => {
                        legServo.to(90) // Regresa a posición central/neutra
                        footServo.to(90) // Regresa a posición central/neutra

                        console.log("ShakeLeg completed")

                        // Guardar el movimiento en la base de datos
                        const shakeLegMovement = {
                            type: 'shakeLeg',
                            name: 'Shake Leg',
                            ordinal: 0
                        }

                        // Buscar la última secuencia del usuario y agregar el movimiento
                        SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                            .then(sequence => {
                                const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
                                shakeLegMovement.ordinal = ordinal
                                if (!sequence) {
                                    // Si no hay secuencias, crea una nueva
                                    const newSequence = new SequenceMovement({
                                        userId: userId,
                                        movements: [shakeLegMovement],
                                        createdAt: new Date()
                                    })
                                    newSequence.save().then(savedSequence => {
                                        console.log('New sequence saved with Shake Leg', savedSequence)
                                        resolve(savedSequence)
                                    }).catch(error => {
                                        console.error('Error saving new sequence', error)
                                        reject(error)
                                    })
                                } else {
                                    // Añadir el movimiento a la secuencia existente
                                    sequence.movements.push(shakeLegMovement)
                                    sequence.save().then(updatedSequence => {
                                        console.log('Shake Leg added to the last sequence', updatedSequence)
                                        resolve(updatedSequence)
                                    }).catch(error => {
                                        console.error('Error adding Shake Leg to the last sequence', error)
                                        reject(error)
                                    })
                                }
                            }).catch(error => {
                                console.error('Error finding the last sequence', error)
                                reject(error)
                            })

                    }, T / steps)
                }
            }, (T / steps) * i)
        }
    })
}

export default shakeLeg