import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

import saveInSequence from './saveInSequence.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const crusaito = async (ottoInstance, userId, steps, T, h, dir) => {
    if (!ottoInstance) {
        throw new Error("Otto is not initialized")
    }
    console.log(`Crusaito for ${steps} steps with period ${T}, height ${h}, and direction ${dir}`)

    const servoLeftFoot = new Servo(4)
    const servoRightFoot = new Servo(5)

    let currentStep = 0
    const angleIncrement = h / 2
    const baseAngle = 90

    const moveFeet = () => {
        const angleOffset = (currentStep % 2 === 0) ? angleIncrement : -angleIncrement
        const leftFootAngle = dir === LEFT ? baseAngle - angleOffset : baseAngle + angleOffset
        const rightFootAngle = dir === LEFT ? baseAngle + angleOffset : baseAngle - angleOffset

        servoLeftFoot.to(leftFootAngle)
        servoRightFoot.to(rightFootAngle)

        currentStep++
    }

    for (let i = 0; i < steps; i++) {
        setTimeout(moveFeet, (T / steps) * i)
    }


    await new Promise(resolve => setTimeout(resolve, 2000)) // Añadido un pequeño buffer

    servoLeftFoot.to(90)
    servoRightFoot.to(90)

    console.log("Crusaito completed")

    // Guarda el movimiento en la base de datos una vez completado
    try {
        const savedSequence = await saveInSequence({
            type: 'crusaito',
            name: 'Crusaito',
            steps,
            T,
            h,
            dir
        }, userId)
        console.log('Crusaito movement saved', savedSequence)
    } catch (error) {
        console.error('Error saving Crusaito', error)
        throw error // Lanza el error para ser capturado por quien llama a crusaito
    }
}

export default crusaito

// const crusaito = (ottoInstance, userId, steps, T, h, dir) => {
//     return new Promise((resolve, reject) => {
//         if (!ottoInstance) {
//             reject(new Error("Otto is not initialized"))
//             return
//         }
//         console.log(`Crusaito for ${steps} steps with period ${T}, height ${h}, and direction ${dir}`)

//         // Inicializar los servos de los pies directamente
//         const servoLeftFoot = new Servo(4) // o 'A2' para OTTO GRANDE
//         const servoRightFoot = new Servo(5) // o 'A0' para OTTO GRANDE

//         let currentStep = 0
//         const angleIncrement = h / 2 // Cálculo del incremento basado en la altura
//         const baseAngle = 90 // Ángulo base para el movimiento

//         const intervalId = setInterval(() => {
//             const angleOffset = (currentStep % 2 === 0) ? angleIncrement : -angleIncrement
//             const leftFootAngle = dir === LEFT ? baseAngle - angleOffset : baseAngle + angleOffset
//             const rightFootAngle = dir === LEFT ? baseAngle + angleOffset : baseAngle - angleOffset

//             // Movimiento de los pies
//             servoLeftFoot.to(leftFootAngle)
//             servoRightFoot.to(rightFootAngle)

//             currentStep++;
//             if (currentStep >= steps) {
//                 clearInterval(intervalId)
//                 // Regresar los servos a la posición central
//                 servoLeftFoot.to(90)
//                 servoRightFoot.to(90)

//                 console.log("Crusaito completed")

//                 // Guardar el movimiento en la base de datos
//                 const crusaitoMovement = {
//                     type: 'crusaito',
//                     name: 'Crusaito',
//                     ordinal: 0,
//                     steps,
//                     T,
//                     h,
//                     dir
//                 }

//                 // Buscar la última secuencia del usuario y agregar el movimiento
//                 SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
//                     .then(sequence => {
//                         const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
//                         crusaitoMovement.ordinal = ordinal
//                         if (!sequence) {
//                             // Si no hay secuencias, crea una nueva
//                             const newSequence = new SequenceMovement({
//                                 userId: userId,
//                                 movements: [crusaitoMovement],
//                                 createdAt: new Date()
//                             })
//                             newSequence.save().then(savedSequence => {
//                                 console.log('New sequence saved with Crusaito', savedSequence)
//                                 resolve(savedSequence)
//                             }).catch(error => {
//                                 console.error('Error saving new sequence', error)
//                                 reject(error)
//                             })
//                         } else {
//                             // Añadir el movimiento a la secuencia existente
//                             sequence.movements.push(crusaitoMovement)
//                             sequence.save().then(updatedSequence => {
//                                 console.log('Crusaito added to the last sequence', updatedSequence)
//                                 resolve(updatedSequence)
//                             }).catch(error => {
//                                 console.error('Error adding Crusaito to the last sequence', error)
//                                 reject(error)
//                             })
//                         }
//                     }).catch(error => {
//                         console.error('Error finding the last sequence', error)
//                         reject(error)
//                     })
//             }
//         }, T / steps)
//     })
// }

