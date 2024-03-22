import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const turn = (ottoInstance, steps, period, direction) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return;
        }
        ottoInstance.restartOscillators()

        // Convertir dirección a multiplicador para el ajuste de fase
        const dirMultiplier = direction === LEFT ? 1 : -1

        // Configurar los parámetros de los osciladores para girar
        const legAmplitude = 30 // Amplitud para las piernas, igual para ambos lados
        const footAmplitude = 30 // Amplitud para los pies, igual para ambos lados
        const hipAmplitudeDiff = 30 // Diferencia de amplitud entre las caderas para girar
        const phaseDiffFoot = Math.PI / 2 // Los pies se mueven con una fase desfasada

        // Ajustar la amplitud de las caderas basado en la dirección
        const leftHipAmplitude = direction === LEFT ? legAmplitude : legAmplitude - hipAmplitudeDiff
        const rightHipAmplitude = direction === LEFT ? legAmplitude - hipAmplitudeDiff : legAmplitude

        // Configurar los osciladores para simular el giro
        ottoInstance.oscillators.forEach((oscillator, index) => {
            let amplitude = legAmplitude
            if (index === 0) { // Pierna izquierda
                amplitude = leftHipAmplitude
            } else if (index === 1) { // Pierna derecha
                amplitude = rightHipAmplitude
            } else { // Pies
                amplitude = footAmplitude
            }

            oscillator.setParameters({
                amplitude: amplitude,
                period: period,
                phase: index < 2 ? 0 : phaseDiffFoot * dirMultiplier,
                offset: 90 // Offset neutral
            })
            oscillator.start()
        })

        // Detener el giro después de la duración calculada
        setTimeout(() => {
            ottoInstance.stopServos() // Detiene y coloca en posición neutral todos los osciladores
            resolve()
        }, steps * period)
    })
}

export default turn