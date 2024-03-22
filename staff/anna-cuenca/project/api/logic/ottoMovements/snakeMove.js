import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

import saveInSequence from './saveInSequence.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const snakeMove = (ottoInstance, userId) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return;
        }

        console.log(`Turning right`)

        ottoInstance.oscillators.forEach((oscillator, index) => {
            if (index < 2) { // Solo ajustamos las piernas para el giro
                const isRightLeg = index % 2 !== 0 // Identifica si es la pierna derecha
                oscillator.setParameters({
                    amplitude: isRightLeg ? 20 : 40, // Reducir la amplitud para la pierna derecha
                    period: 600, // Un periodo más rápido para un giro ágil
                    phase: isRightLeg ? Math.PI / 2 : 0, // Fase desfasada para pierna derecha
                    offset: 90 // Offset neutral, ajustar si es necesario
                })
            } else {
                oscillator.setParameters({
                    amplitude: 0, // Los pies no se mueven o se mueven muy poco
                    period: 600,
                    phase: 0,
                    offset: 90
                })
            }
            oscillator.start()
        })

        setTimeout(async () => {
            try {
                // Detener todos los osciladores para finalizar el movimiento
                ottoInstance.oscillators.forEach(oscillator => oscillator.stop())
                console.log('Otto has completed the snake move')

                // Ahora llamamos a saveInSequence en lugar de manejar directamente la lógica de base de datos aquí
                const savedSequence = await saveInSequence({ type: 'snakeMove', name: 'Snake Move' }, userId)
                resolve(savedSequence)
            } catch (error) {
                console.error('Error trying to save snakeMove', error)
                reject(error)
            }
        }, 2000) // Ajusta a 2000 para 2 segundos
    })
}

// const snakeMove = (ottoInstance, userId) => {
//     return new Promise((resolve, reject) => {
//         console.log(`Snake Move`)

//         if (!ottoInstance) {
//             reject(new Error("Otto is not initialized"))
//             return
//         }

//         ottoInstance.oscillators.forEach((oscillator, index) => {
//             if (index < 2) { // Solo ajustamos las piernas para el giro
//                 const isRightLeg = index % 2 !== 0 // Identifica si es la pierna derecha
//                 oscillator.setParameters({
//                     amplitude: isRightLeg ? 20 : 40, // Reducir la amplitud para la pierna derecha
//                     period: 600, // Un periodo más rápido para un giro ágil
//                     phase: isRightLeg ? Math.PI / 2 : 0, // Fase desfasada para pierna derecha
//                     offset: 90 // Offset neutral, ajustar si es necesario
//                 })
//             } else {
//                 // Para los pies, podrías querer mantenerlos en una posición neutral o ajustar ligeramente
//                 oscillator.setParameters({
//                     amplitude: 0, // Los pies no se mueven o se mueven muy poco
//                     period: 600,
//                     phase: 0,
//                     offset: 90
//                 })
//             }
//             oscillator.start()
//         })

//         setTimeout(() => {
//             console.log('Otto has completed the snake move')
//             // Detener todos los osciladores para finalizar el movimiento
//             ottoInstance.oscillators.forEach((oscillator) => {
//                 oscillator.stop()
//             })

//             // Crear un registro de movimiento para snakeMove
//             const snakeMove = {
//                 type: 'snakeMove',
//                 name: 'Snake Move'
//             }

//             // Guardar el movimiento en la base de datos, siguiendo el mismo patrón que jump
//             SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
//                 .then(sequence => {
//                     const ordinal = sequence ? sequence.movements.length : 0
//                     snakeMove.ordinal = ordinal
//                     if (!sequence) {
//                         const newSequence = new SequenceMovement({
//                             userId: userId,
//                             movements: [snakeMove],
//                             createdAt: new Date()
//                         })
//                         newSequence.save()
//                             .then(savedSequence => {
//                                 console.log('new sequence saved', savedSequence)
//                                 resolve(savedSequence)
//                             })
//                             .catch(error => {
//                                 console.error('Error trying to create sequence', error)
//                                 reject(error)
//                             })
//                     } else {
//                         sequence.movements.push(snakeMove)
//                         sequence.save()
//                             .then(updatedSequence => {
//                                 console.log('Movement added to last sequence', updatedSequence)
//                                 resolve(updatedSequence)
//                             })
//                             .catch(error => {
//                                 console.error('Error trying to add movement to last sequence', error)
//                                 reject(error)
//                             })
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error trying to find SequenceMovement', error)
//                     reject(error)
//                 })
//         }, 2000) // Ajusta a 2000 para 2 segundos
//     })
// }

export default snakeMove
