import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const jump = (ottoInstance, userId) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return;
        }

        // Lógica para hacer que Otto salte
        const servoLeftLeg = new Servo(2)
        const servoRightLeg = new Servo(3)
        const servoLeftFoot = new Servo(4)
        const servoRightFoot = new Servo(5)



        servoLeftLeg.to(90)
        servoRightLeg.to(90)
        servoLeftFoot.to(150) // Posición elevada para el pie izquierdo
        servoRightFoot.to(30) // Posición elevada para el pie derecho

        setTimeout(() => {
            // Finaliza la lógica del salto
            servoLeftLeg.to(90)
            servoRightLeg.to(90)
            servoLeftFoot.to(90)
            servoRightFoot.to(90)

            console.log("Otto has jumped")

            // Crear un registro de movimiento 
            const jumpMovement = {
                type: 'jump',
                name: 'Jump',
                ordinal: 0
            }

            // comprobar si hay una secuencia ya creada o no
            SequenceMovement.findOne({ userId }).sort({ createdAt: -1 }) // Encuentra la última secuencia 
                .then(sequence => {
                    console.log("La secuencia recuperada es:", sequence)
                    const ordinal = sequence ? sequence.movements.length : 0 // calculo el ordinal basado en la longitud
                    jumpMovement.ordinal = ordinal // asigno l valor del ordinal al movmiento
                    if (!sequence) {
                        // Si no hay secuencias, crea una nueva
                        const newSequence = new SequenceMovement({
                            userId: userId,
                            movements: [jumpMovement],
                            createdAt: new Date()
                        })

                        console.log(userId)

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
                        // Si ya existe una secuencia, que es la última, lo guardo ahí
                        sequence.movements.push(jumpMovement)
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
        }, 2000) // el salto dura 2 seg
    })
}

export default jump