import pkg from 'johnny-five'
const { Servo } = pkg

export class Oscillator {
    constructor({ pin, board }) {
        this.servo = new Servo({ pin, board });
        this.amplitude = 0;
        this.offset = 0;
        this.period = 1000; // En milisegundos
        this.phase = 0; // En radianes
        this.currentAngle = 0;
        this.lastUpdateTime = 0;
    }

    attach() {
        this.servo.to(this.offset);
    }

    setParameters({ amplitude, period, phase, offset }) {
        this.amplitude = amplitude;
        this.period = period;
        this.phase = phase;
        this.offset = offset;
    }

    start() {
        this.lastUpdateTime = Date.now();
        this.update();
    }

    update() {
        const now = Date.now();
        const elapsedTime = now - this.lastUpdateTime;

        if (elapsedTime >= this.period) {
            this.lastUpdateTime = now - (elapsedTime % this.period);
        }

        const phaseProgress = ((now - this.lastUpdateTime) / this.period) * 2 * Math.PI;
        const angle = this.amplitude * Math.sin(phaseProgress + this.phase) + this.offset;
        this.servo.to(angle);

        // Planifica el próximo update
        setTimeout(() => this.update(), 50); // Actualiza cada 50ms
    }
}