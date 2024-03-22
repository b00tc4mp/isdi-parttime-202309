import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const stop = (ottoInstance, userId) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }

        // Detener los servos de Otto
        ottoInstance.stopServos()

        // Crear un objeto de movimiento para "stop"
        const stopMovement = {
            type: 'stop',
            name: 'Stop'
        }

        // Guardar el movimiento en la última secuencia
        SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
            .then(sequence => {
                const ordinal = sequence ? sequence.movements.length : 0 // calculo el ordinal basado en la longitud
                stopMovement.ordinal = ordinal
                if (!sequence) {
                    // Si no hay secuencias, crea una nueva
                    const newSequence = new SequenceMovement({
                        userId: userId,
                        movements: [stopMovement],
                        createdAt: new Date()
                    })

                    newSequence.save()
                        .then(savedSequence => {
                            console.log('new sequence saved', savedSequence)
                            resolve(savedSequence)
                        })
                        .catch(error => {
                            console.error('Error trying to create sequence', error)
                            reject(error)
                        })
                } else {
                    // Si ya existe una secuencia, añade el movimiento a esa secuencia
                    sequence.movements.push(stopMovement)
                    sequence.save()
                        .then(updatedSequence => {
                            console.log('Movement added to last sequence', updatedSequence)
                            resolve(updatedSequence)
                        })
                        .catch(error => {
                            console.error('Error trying to add movement to last sequence', error)
                            reject(error)
                        })
                }
            })
            .catch(error => {
                console.error('Error trying to find SequenceMovement', error)
                reject(error)
            })

    })
}

export default stop
