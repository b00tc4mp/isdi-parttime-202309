import pkg from 'johnny-five'
const { Board, Servo, LCD } = pkg
import { Otto } from './otto.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1




class OttoController {
    constructor() {
        this.board = new Board()

        this.lcd = null

        this.lcdState = 'clear' // Esto


        this.otto = null

        this.board.on("ready", () => {
            this.lcd = new LCD({
                controller: "PCF8574A"
            })
            this.otto = new Otto({
                leftLegPin: 2,
                rightLegPin: 3,
                leftFootPin: 4,
                rightFootPin: 5,
                board: this.board
            })

            this.otto.init()
            this.sayHi("Otto está listo!")
        })
    }

    ////// PANTALLA //////


    sayHi(message) {
        return new Promise((resolve, reject) => {
            // Verificar si el LCD está inicializado
            if (!this.lcd) {
                console.error('LCD no está inicializado.')
                reject(new Error('LCD no está inicializado.'))
                return;
            }

            this.lcd.clear(); // Limpiar el LCD

            // Importar el módulo lcd-scrolling dinámicamente
            import('lcd-scrolling').then(scrollModule => {
                const scroll = scrollModule.default

                // Configurar lcd-scrolling con el objeto LCD
                scroll.setup({
                    lcd: this.lcd,
                    debug: false,
                    char_length: 16,
                    row: 2,
                    firstCharPauseDuration: 4000,
                    lastCharPauseDuration: 1000,
                    scrollingDuration: 300,
                    full: true
                })


                scroll.line(0, message)


                console.log('Message displayed with scrolling')
                resolve()


                setTimeout(() => {
                    this.lcd.clear()
                    console.log('LCD cleared after displaying the message.')
                    resolve()
                }, 5000)


            }).catch(error => {
                console.error("Error al importar o usar lcd-scrolling:", error)
                reject(error)
            })
        })
    }



    clearLCD() {
        return new Promise((resolve, reject) => {
            if (!this.lcd) {
                console.error('LCD no está inicializado.')
                reject(new Error('LCD no está inicializado.'))
                return;
            }

            try {
                this.lcd.clear()
                //this.lcd.print("Esperando..")
                console.log('LCD cleared and "Esperando.." displayed')
                resolve()
            } catch (error) {
                console.error('Error clearing LCD or displaying message:', error)
                reject(error)
            }
        })
    }


    //// SERVOS //// 

    walkForward() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }
            this.otto.restartOscillators()
            this.otto.walk(4, 2000, FORWARD).then(() => {
                console.log('Otto walked!')
                resolve()
            }).catch(error => {
                console.error('Otto failed to walk:', error)
                reject(error)
            })
        })
    }

    walkBackward() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }
            this.otto.restartOscillators()
            this.otto.walkBackward(4, 2000).then(() => {
                console.log('Otto walked!')
                resolve()
            }).catch(error => {
                console.error('Otto failed to walk:', error)
                reject(error)
            })
        })
    }



    // BAILE DE SERPIENTE -- GUARDAR ES DIVERTIDO //

    turnRight() {
        return new Promise((resolve, reject) => {
            console.log(`Turning right`)

            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            // Asegurándose de que estamos accediendo a los osciladores a través del objeto Otto.
            this.otto.oscillators.forEach((oscillator, index) => {
                if (index < 2) { // Solo ajustamos las piernas para el giro
                    const isRightLeg = index % 2 !== 0 // Identifica si es la pierna derecha
                    oscillator.setParameters({
                        amplitude: isRightLeg ? 20 : 40, // Reducir la amplitud para la pierna derecha
                        period: 600, // Un periodo más rápido para un giro ágil
                        phase: isRightLeg ? Math.PI / 2 : 0, // Fase desfasada para pierna derecha
                        offset: 90 // Offset neutral, ajustar si es necesario
                    })
                } else {
                    // Para los pies, podrías querer mantenerlos en una posición neutral o ajustar ligeramente
                    oscillator.setParameters({
                        amplitude: 0, // Los pies no se mueven o se mueven muy poco
                        period: 600,
                        phase: 0,
                        offset: 90
                    })
                }
                oscillator.start()
            })

            // Damos tiempo al robot para completar el giro antes de resolver la promesa
            setTimeout(() => {
                console.log('Otto has turned right')
                resolve()
            }, 600) // Ajusta este tiempo según la duración del giro que observes en pruebas
        })
    }


    turn(steps, period, direction) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return;
            }
            this.otto.restartOscillators();

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
            this.otto.oscillators.forEach((oscillator, index) => {
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
                this.otto.stopServos() // Detiene y coloca en posición neutral todos los osciladores
                resolve()
            }, steps * period)
        })
    }


    jump() {

        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            // Asumiendo que has inicializado correctamente los servos en alguna parte de tu código
            const servoLeftLeg = new Servo(2) // Ejemplo, necesitas asegurarte de que esto se hace en el contexto adecuado
            const servoRightLeg = new Servo(3)
            const servoLeftFoot = new Servo(4) // Comentado por simplicidad, añade según sea necesario
            const servoRightFoot = new Servo(5)

            servoLeftLeg.to(90)
            servoRightLeg.to(90)
            servoLeftFoot.to(150) // Posición elevada para el pie izquierdo
            servoRightFoot.to(30)

            // Esperar un momento para completar el giro
            setTimeout(() => {
                // Asegúrate de devolver los servos a una posición neutral antes de caminar
                // Posiciones para "saltar"
                servoLeftLeg.to(90) // Mantener las piernas rectas
                servoRightLeg.to(90)
                servoLeftFoot.to(90) // Volver a la posición neutral para simular el salto
                servoRightFoot.to(90)

                console.log("Otto has jumped")
                resolve()

                // // Espera un poco antes de empezar a caminar para asegurar que los servos están en posición neutral
                // setTimeout(() => {
                //     // Llama a walkForward después de que el giro se ha completado
                //     servoLeftLeg.to(90);
                //     servoRightLeg.to(90);
                //     servoLeftFoot.to(90);
                //     servoRightFoot.to(90);
                //     console.log("Otto has jumped");
                //     resolve();
                // }, 2000); // Tiempo de espera para que los servos vuelvan a la posición neutral
            }, 2000) // Tiempo de espera para completar el giro, ajusta según sea necesario
        })

    }


    stop() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            this.otto.stopServos()
            resolve()
        })
    }
}

export default OttoController