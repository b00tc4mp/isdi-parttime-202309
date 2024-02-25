import pkg from 'johnny-five'
const { Servo } = pkg

export class Oscillator {
    constructor({ pin, board }) {
        this.servo = new Servo({ pin, board })
        this.amplitude = 0
        this.offset = 0
        this.period = 1000 // En milisegundos
        this.phase = 0 // En radianes
        this.currentAngle = 0
        this.lastUpdateTime = 0
        this.isRunning = false

    }

    attach() {
        this.servo.to(this.offset)
    }

    setParameters({ amplitude, period, phase, offset }) {
        this.amplitude = amplitude
        this.period = period
        this.phase = phase
        this.offset = offset
    }

    reset() {
        this.isRunning = false // Restablece el estado de ejecución
        // Restablecer cualquier otro estado necesario aquí
    }

    start() {
        this.reset();
        this.isRunning = true
        this.lastUpdateTime = Date.now()
        this.update()
    }

    update() {

        if (!this.isRunning) return

        const now = Date.now()
        const elapsedTime = now - this.lastUpdateTime

        if (elapsedTime >= this.period) {
            this.lastUpdateTime = now - (elapsedTime % this.period)
        }

        const phaseProgress = ((now - this.lastUpdateTime) / this.period) * 2 * Math.PI
        const angle = this.amplitude * Math.sin(phaseProgress + this.phase) + this.offset
        //console.log(angle)
        //console.log(phaseProgress)
        this.servo.to(angle)

        // Planifica el próximo update
        setTimeout(() => this.update(), 50) // Actualiza cada 50ms
    }

    stop() {
        if (this.servo) {
            this.servo.to(this.offset) // Mueve el servo a una posición neutral o deseada antes de detener
            this.servo.stop() // Intenta llamar a stop en el objeto servo directamente si está disponible
        }
        this.isRunning = false
    }

    restart() {
        this.stop()  // Detiene el oscilador si está corriendo
        this.reset() // Restablece cualquier estado necesario
        this.start() // Inicia el oscilador
    }

}