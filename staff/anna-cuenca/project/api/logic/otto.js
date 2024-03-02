import pkg from 'johnny-five'
const { Board, Servo, LCD } = pkg

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

import { Oscillator } from './oscillator.js'

export class Otto {
    constructor({ leftLegPin, rightLegPin, leftFootPin, rightFootPin, board, lcd }) {
        this.board = board;
        this.oscillators = [
            new Oscillator({ pin: leftLegPin, board: this.board }),
            new Oscillator({ pin: rightLegPin, board: this.board }),
            new Oscillator({ pin: leftFootPin, board: this.board }),
            new Oscillator({ pin: rightFootPin, board: this.board })
        ]
        this.isOttoResting = false
    }

    init() {
        this.oscillators.forEach(oscillator => oscillator.attach())
        this.home()
    }

    home() {
        this.oscillators.forEach(oscillator => {
            oscillator.setParameters({ amplitude: 30, period: 1000, phase: 0, offset: 90 })
            oscillator.start()
        })
        this.isOttoResting = true
    }

    walk(steps, period, direction) {
        return new Promise((resolve, reject) => {

            console.log(`Walking ${steps} steps in direction ${direction} with period ${period}`)


            setTimeout(() => {
                this.stopServos()
                resolve()
            }, period * steps)
        })
    }

    // walk(steps, period, direction) {
    //     return new Promise((resolve) => {
    //         const dirMultiplier = direction === FORWARD ? 1 : -1 // Asume FORWARD = 1, BACKWARD = -1
    //         const legAmplitude = 20 // Ajuste de amplitud para las piernas
    //         const footAmplitude = 20 // Ajuste de amplitud para los pies
    //         const phaseDiffLeg = 0 // Las piernas se mueven en fase para caminar
    //         const phaseDiffFoot = Math.PI / 2 * dirMultiplier // Los pies se mueven con una fase desfasada

    //         // Configuramos los osciladores para simular el caminar
    //         this.oscillators.forEach((oscillator, index) => {
    //             const isLeg = index < 2; // Primeros dos osciladores son las piernas
    //             oscillator.setParameters({
    //                 amplitude: isLeg ? legAmplitude : footAmplitude,
    //                 period: period,
    //                 phase: isLeg ? phaseDiffLeg : phaseDiffFoot,
    //                 offset: 90 // Offset neutral
    //             });
    //             oscillator.start();
    //         });

    //         // Detenemos el caminar después de la duración calculada
    //         setTimeout(() => {
    //             this.stopServos() // Detiene y coloca en posición neutral todos los osciladores
    //             resolve()
    //         }, steps * period)
    //     })
    // }

    walkBackward(steps, period) {
        return new Promise((resolve, reject) => {
            console.log(`Intentando caminar ${steps} pasos hacia atrás con un periodo de ${period}`)


            this.oscillators.forEach((oscillator, index) => {

                const isLeg = index < 2  //ajuste piernas
                const adjustment = isLeg ? 0 : 5 //ajuste pies
                const phaseAdjustment = Math.PI + (isLeg ? 0 : Math.PI / 4) // Ajustar fase para pies diferente que para piernas

                oscillator.setParameters({
                    amplitude: 20 + adjustment, // Ajuste de amplitud para compensar desviación
                    period: 1000, // Periodo para velocidad
                    phase: phaseAdjustment, // Ajuste de fase para coordinación
                    offset: 90 // Offset neutro
                })
                oscillator.start()
            })

            setTimeout(() => {
                this.stopServos()
                resolve()
            }, period * steps)
        })
    }

    walkForward(steps, period) {
        return new Promise((resolve, reject) => {
            console.log(`Intentando caminar ${steps} pasos hacia adelante con un periodo de ${period}`)

            this.oscillators.forEach((oscillator, index) => {
                const isLeg = index < 2; // Identifica si el oscilador es para una pierna
                const adjustment = isLeg ? 0 : 5; // Los pies pueden necesitar un ajuste para asegurar un paso firme
                // La fase para caminar hacia adelante es generalmente directa para las piernas, 
                // y los pies pueden tener una fase ligeramente ajustada para coordinar el movimiento.
                const phaseAdjustment = isLeg ? 0 : Math.PI / 4 // Ajuste de fase para los pies

                oscillator.setParameters({
                    amplitude: 20 + adjustment, // Amplitud ajustada para un paso firme
                    period: period, // Periodo para controlar la velocidad de caminata
                    phase: phaseAdjustment, // Ajuste de fase para coordinación entre piernas y pies
                    offset: 90 // Offset neutro, punto de partida medio para el movimiento
                });
                oscillator.start()
            })

            setTimeout(() => {
                this.stopServos() // Detiene los servos y los coloca en posición neutral
                resolve()
            }, period * steps)
        })
    }

    stopServos() {
        this.oscillators.forEach(oscillator => {
            oscillator.stop()
        })
        this.isOttoResting = true
    }

    restartOscillators() {
        this.oscillators.forEach(oscillator => oscillator.restart())
    }


}
