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
        ];
        this.isOttoResting = false;
    }

    init() {
        this.oscillators.forEach(oscillator => oscillator.attach());
        this.home();
    }

    home() {
        this.oscillators.forEach(oscillator => {
            oscillator.setParameters({ amplitude: 0, period: 1000, phase: 0, offset: 90 });
            oscillator.start();
        });
        this.isOttoResting = true;
    }

    walk(steps, period, direction) {
        return new Promise((resolve, reject) => {
            // Aquí va la lógica para hacer caminar a Otto
            // Por ejemplo, podrías usar setTimeout o alguna otra lógica asíncrona para simular el movimiento
            console.log(`Walking ${steps} steps in direction ${direction} with period ${period}`);

            // Simulando la finalización del caminar después de un tiempo
            setTimeout(() => {
                resolve(); // Indica que Otto terminó de caminar
            }, period * steps); // Esto es solo un ejemplo, deberías ajustar el tiempo basado en tu lógica de movimiento real
        });
    }

    // Implementa otros movimientos (turn, bend, shakeLeg, etc.) de manera similar a walk.
}
