import pkg from 'johnny-five'
const { Board, Servo } = pkg

import { Oscillator } from './oscillator.js'

export class Otto {
    constructor({ leftLegPin, rightLegPin, leftFootPin, rightFootPin, board }) {
        this.board = board;
        this.oscillators = [
            new Oscillator({ pin: leftLegPin, board: this.board }),
            new Oscillator({ pin: rightLegPin, board: this.board }),
            new Oscillator({ pin: leftFootPin, board: this.board }),
            new Oscillator({ pin: rightFootPin, board: this.board })
        ]
        this.isOttoResting = false;
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
