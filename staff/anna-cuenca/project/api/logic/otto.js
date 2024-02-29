import pkg from 'johnny-five'
const { Board, Servo, LCD } = pkg

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
            oscillator.setParameters({ amplitude: 32, period: 900, phase: 0, offset: 90 })
            oscillator.start()
        })
        this.isOttoResting = true
    }

    walk(steps, period, direction) {
        return new Promise((resolve, reject) => {

            console.log(`Walking ${steps} steps in direction ${direction} with period ${period}`)


            setTimeout(() => {
                resolve()
            }, period * steps)
        })
    }



    walkBackward(steps, period) {
        return new Promise((resolve, reject) => {
            console.log(`Intentando caminar ${steps} pasos hacia atrás con un periodo de ${period}`)


            this.oscillators.forEach((oscillator, index) => {

                const isLeg = index < 2  //ajuste piernas
                const adjustment = isLeg ? 0 : 5 //ajuste pies
                const phaseAdjustment = Math.PI + (isLeg ? 0 : Math.PI / 4) // Ajustar fase para pies diferente que para piernas

                oscillator.setParameters({
                    amplitude: 32 + adjustment, // Ajuste de amplitud para compensar desviación
                    period: 1000, // Periodo para velocidad
                    phase: phaseAdjustment, // Ajuste de fase para coordinación
                    offset: 90 // Offset neutro
                })
                oscillator.start()
            })

            setTimeout(() => {
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
