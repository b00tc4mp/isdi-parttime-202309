import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

async function turn(ottoInstance, steps, period, direction) {
    if (!ottoInstance) {
        throw new Error("Otto is not initialized")
    }

    try {
        await ottoInstance.restartOscillators()


        const dirMultiplier = direction === LEFT ? 1 : -1


        const legAmplitude = 30
        const footAmplitude = 30
        const hipAmplitudeDiff = 30
        const phaseDiffFoot = Math.PI / 2

        // Ajustar la amplitud de las caderas basado en la dirección
        const leftHipAmplitude = direction === LEFT ? legAmplitude : legAmplitude - hipAmplitudeDiff
        const rightHipAmplitude = direction === LEFT ? legAmplitude - hipAmplitudeDiff : legAmplitude
        //REVISAR ESTO PORQUE FALLA

        // Configurar los osciladores para simular el giro
        ottoInstance.oscillators.forEach((oscillator, index) => {
            let amplitude = index < 2 ? legAmplitude : footAmplitude
            if (index === 0) { amplitude = leftHipAmplitude } // Pierna izquierda
            else if (index === 1) { amplitude = rightHipAmplitude } // Pierna derecha

            oscillator.setParameters({
                amplitude: amplitude,
                period: period,
                phase: index < 2 ? 0 : phaseDiffFoot * dirMultiplier,
                offset: 90
            })
            oscillator.start()
        })


        await new Promise(resolve => setTimeout(resolve, steps * period))

        ottoInstance.stopServos() /
            console.log("Turn completed")
    } catch (error) {
        console.error('Failed to execute turn:', error)
        throw error
    }
}


export default turn