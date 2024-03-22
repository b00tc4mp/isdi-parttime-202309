import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg
import { Otto } from './otto.js'
import { Movement, SequenceMovement } from '../data/models.js'

import movement from './ottoMovements/index.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1



function delay(ms) {
    return new Promise(resolve => {
        console.log(`Waiting ${ms} milliseconds...`)
        setTimeout(() => {
            console.log("Wait over, continuing with the next action.")
            resolve()
        }, ms)
    })
}

class OttoController {
    constructor() {
        this.board = new Board()

        this.lcd = null

        this.lcdState = 'clear'


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


                // OTTO GRANDE
                // leftLegPin: 'A3',
                // rightLegPin: 'A1',
                // leftFootPin: 'A2',
                // rightFootPin: 'A0',

                board: this.board
            })

            this.otto.init()
            this.sayHi("Otto está listo!")
        })
    }







    ////////////// END SEQUENCE ////////////



    endSequence(userId) {
        return new Promise((resolve, reject) => {

            if (!userId) {
                console.error('Error: userId is required to end a sequence.')
                reject(new Error('userId is required to end a sequence.'))
                return;
            }


            const newSequence = new SequenceMovement({
                userId,
                movements: [],
                createdAt: new Date()
            })

            newSequence.save()
                .then(() => {
                    console.log('New sequence created for userId:', userId)
                    resolve(newSequence)
                })
                .catch(error => {
                    console.error('Error al crear una nueva secuencia:', error)
                    reject(error)
                })
        })
    }
    ////// PANTALLA //////


    sayHi(message) {
        return new Promise((resolve, reject) => {
            // comprobamos que el LCD esté 
            if (!this.lcd) {
                console.error('LCD no está inicializado.')
                reject(new Error('LCD no está inicializado.'))
                return;
            }

            this.lcd.clear() // borramos lo que haya en la pantalla

            // Importar el módulo lcd-scrolling dinámicamente, pero no funciona bien luego en front... :(
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
                return
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


    crusaito(userId, steps, T, h, dir) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }
            console.log(`Crusaito for ${steps} steps with period ${T}, height ${h}, and direction ${dir}`)

            // Inicializar los servos de los pies directamente
            const servoLeftFoot = new Servo(4) // o 'A2' para OTTO GRANDE
            const servoRightFoot = new Servo(5) // o 'A0' para OTTO GRANDE

            let currentStep = 0
            const angleIncrement = h / 2 // Cálculo del incremento basado en la altura
            const baseAngle = 90 // Ángulo base para el movimiento

            const intervalId = setInterval(() => {
                const angleOffset = (currentStep % 2 === 0) ? angleIncrement : -angleIncrement
                const leftFootAngle = dir === LEFT ? baseAngle - angleOffset : baseAngle + angleOffset
                const rightFootAngle = dir === LEFT ? baseAngle + angleOffset : baseAngle - angleOffset

                // Movimiento de los pies
                servoLeftFoot.to(leftFootAngle)
                servoRightFoot.to(rightFootAngle)

                currentStep++;
                if (currentStep >= steps) {
                    clearInterval(intervalId)
                    // Regresar los servos a la posición central
                    servoLeftFoot.to(90)
                    servoRightFoot.to(90)

                    console.log("Crusaito completed")

                    // Guardar el movimiento en la base de datos
                    const crusaitoMovement = {
                        type: 'crusaito',
                        name: 'Crusaito',
                        ordinal: 0
                    }

                    // Buscar la última secuencia del usuario y agregar el movimiento
                    SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                        .then(sequence => {
                            if (!sequence) {
                                // Si no hay secuencias, crea una nueva
                                const newSequence = new SequenceMovement({
                                    userId: userId,
                                    movements: [crusaitoMovement],
                                    createdAt: new Date()
                                })
                                newSequence.save().then(savedSequence => {
                                    console.log('New sequence saved with Crusaito', savedSequence)
                                    resolve(savedSequence)
                                }).catch(error => {
                                    console.error('Error saving new sequence', error)
                                    reject(error)
                                })
                            } else {
                                // Añadir el movimiento a la secuencia existente
                                sequence.movements.push(crusaitoMovement)
                                sequence.save().then(updatedSequence => {
                                    console.log('Crusaito added to the last sequence', updatedSequence)
                                    resolve(updatedSequence)
                                }).catch(error => {
                                    console.error('Error adding Crusaito to the last sequence', error)
                                    reject(error)
                                })
                            }
                        }).catch(error => {
                            console.error('Error finding the last sequence', error)
                            reject(error)
                        })
                }
            }, T / steps)
        })
    }

    async upDown(userId, steps, T) {
        if (!this.otto) {
            throw new Error("Otto is not initialized");
        }
        await movement.upDown(this.otto, userId, steps, T) // Uso del movimiento upDown
    }

    // upDown(userId, steps, T) {
    //     return new Promise((resolve, reject) => {
    //         if (!this.otto) {
    //             reject(new Error("Otto is not initialized"))
    //             return
    //         }

    //         console.log(`UpDown movement for ${steps} steps with period ${T}`)

    //         // Servos de los pies
    //         const servoLeftFoot = new Servo(4) // Asumiendo que el pin 4 es para el pie izquierdo
    //         const servoRightFoot = new Servo(5) // Asumiendo que el pin 5 es para el pie derecho

    //         let currentStep = 0
    //         const intervalId = setInterval(() => {
    //             // Alternar entre la posición elevada y neutral para los pies
    //             // Aquí se ajusta para que el pie izquierdo haga lo contrario al pie derecho
    //             if (currentStep % 2 === 0) {
    //                 servoLeftFoot.to(0) // Vuelve a la posición neutral para el pie izquierdo
    //                 servoRightFoot.to(180) // Eleva el pie derecho al máximo
    //             } else {
    //                 servoLeftFoot.to(0) // Eleva el pie izquierdo al máximo
    //                 servoRightFoot.to(180) // Vuelve a la posición neutral para el pie derecho
    //             }
    //             currentStep++

    //             if (currentStep >= steps) {
    //                 clearInterval(intervalId)
    //                 // Volver a la posición neutral al terminar
    //                 servoLeftFoot.to(90)
    //                 servoRightFoot.to(90)

    //                 console.log("UpDown movement completed")

    //                 // Guardar el movimiento en la base de datos
    //                 const upDownMovement = {
    //                     type: 'upDown',
    //                     name: 'UpDown',
    //                     ordinal: 0
    //                 }

    //                 // Buscar la última secuencia del usuario y agregar el movimiento
    //                 SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
    //                     .then(sequence => {
    //                         const ordinal = sequence ? sequence.movements.length : 0 // Determina el nuevo ordinal
    //                         upDownMovement.ordinal = ordinal

    //                         if (!sequence) {
    //                             // Si no hay secuencias, crea una nueva
    //                             const newSequence = new SequenceMovement({
    //                                 userId: userId,
    //                                 movements: [upDownMovement],
    //                                 createdAt: new Date()
    //                             })
    //                             newSequence.save().then(savedSequence => {
    //                                 console.log('New sequence saved with upDownMovement', savedSequence)
    //                                 resolve(savedSequence)
    //                             }).catch(error => {
    //                                 console.error('Error saving new sequence', error)
    //                                 reject(error)
    //                             })
    //                         } else {
    //                             // Añadir el movimiento a la secuencia existente
    //                             sequence.movements.push(upDownMovement)
    //                             sequence.save().then(updatedSequence => {
    //                                 console.log('upDownMovement added to the last sequence', updatedSequence)
    //                                 resolve(updatedSequence)
    //                             }).catch(error => {
    //                                 console.error('Error adding upDownMovement to the last sequence', error)
    //                                 reject(error)
    //                             })
    //                         }
    //                     }).catch(error => {
    //                         console.error('Error finding the last sequence', error)
    //                         reject(error)
    //                     })

    //                 resolve()
    //             }
    //         }, T / steps)
    //     })
    // }



    kickLeft(userId, tempo) {
        return new Promise(async (resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            console.log(`Executing kickLeft with tempo ${tempo}`)

            // Inicializa los servos
            const servoRightLeg = new Servo(3) // Asumiendo pie derecho en pin 3
            const servoLeftLeg = new Servo(2)  // Asumiendo pie izquierdo en pin 2

            // Colocar ambos pies en posición neutral al inicio
            servoRightLeg.to(90)
            servoLeftLeg.to(90)
            await delay(tempo)

            // Secuencia de movimientos para simular la patada
            let movements = [
                { right: 50, left: 70 },
                { right: 80, left: 70 },
                { right: 30, left: 70 },
                { right: 80, left: 70 },
                { right: 30, left: 70 },
                { right: 80, left: 70 }
            ]

            // Ejecutar cada movimiento en la secuencia
            for (let movement of movements) {
                servoRightLeg.to(movement.right)
                servoLeftLeg.to(movement.left)
                await delay(tempo / 4) // Ajustar el tiempo según sea necesario
            }

            console.log("kickLeft completed")

            // Aquí va el código para guardar el movimiento en la base de datos, similar a los ejemplos anteriores
            const kickLeftMovement = {
                type: 'kickLeft',
                name: 'Kick Left',
                ordinal: 0
            }

            // Añadir el código para guardar el movimiento en la secuencia del usuario aquí
            SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                .then(sequence => {
                    if (!sequence) {
                        // Si no hay secuencias, crea una nueva
                        const newSequence = new SequenceMovement({
                            userId: userId,
                            movements: [kickLeftMovement],
                            createdAt: new Date()
                        })
                        newSequence.save().then(savedSequence => {
                            console.log('New sequence saved with kickLeftMovement', savedSequence)
                            resolve(savedSequence)
                        }).catch(error => {
                            console.error('Error saving new sequence', error)
                            reject(error)
                        })
                    } else {
                        // Añadir el movimiento a la secuencia existente
                        sequence.movements.push(kickLeftMovement)
                        sequence.save().then(updatedSequence => {
                            console.log('kickLeftMovement added to the last sequence', updatedSequence)
                            resolve(updatedSequence)
                        }).catch(error => {
                            console.error('Error adding kickLeftMovement to the last sequence', error)
                            reject(error)
                        })
                    }
                }).catch(error => {
                    console.error('Error finding the last sequence', error)
                    reject(error)
                })

            resolve() // Resolver la promesa al finalizar
        })
    }


    noGravity(userId) {
        return new Promise(async (resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            console.log(`Executing noGravity`)

            // Posiciones predeterminadas para simular el movimiento
            const positions = [
                { leftFoot: 120, rightFoot: 140 }, // move1
                { leftFoot: 140, rightFoot: 140 }, // move2
                { leftFoot: 120, rightFoot: 140 }, // move3
                { leftFoot: 90, rightFoot: 90 }    // move4
            ]

            const tempo = 2000 // Duración en milisegundos de cada movimiento

            // Iterar sobre cada conjunto de posiciones
            for (const position of positions) {
                // Mover cada pie a su posición objetivo
                const servoLeftFoot = new Servo(4) // Asumiendo pines correctos
                const servoRightFoot = new Servo(5)
                servoLeftFoot.to(position.leftFoot)
                servoRightFoot.to(position.rightFoot)

                // Esperar la duración antes de pasar al siguiente conjunto de posiciones
                await delay(tempo)
            }

            console.log("noGravity completed")

            // Crear y guardar el movimiento en la base de datos como en los ejemplos anteriores
            const noGravityMovement = {
                type: 'noGravity',
                name: 'No Gravity',
                ordinal: 0
            }

            SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                .then(sequence => {
                    if (!sequence) {
                        // Si no hay secuencias, crea una nueva
                        const newSequence = new SequenceMovement({
                            userId: userId,
                            movements: [noGravityMovement],
                            createdAt: new Date()
                        })
                        newSequence.save().then(savedSequence => {
                            console.log('New sequence saved with noGravityMovement', savedSequence)
                            resolve(savedSequence)
                        }).catch(error => {
                            console.error('Error saving new sequence', error)
                            reject(error)
                        })
                    } else {
                        // Añadir el movimiento a la secuencia existente
                        sequence.movements.push(noGravityMovement)
                        sequence.save().then(updatedSequence => {
                            console.log('noGravityMovement added to the last sequence', updatedSequence)
                            resolve(updatedSequence)
                        }).catch(error => {
                            console.error('Error adding noGravityMovement to the last sequence', error)
                            reject(error)
                        })
                    }
                }).catch(error => {
                    console.error('Error finding the last sequence', error)
                    reject(error)
                })

            resolve() // Asegúrate de resolver la promesa al final
        })
    }

    moonwalker(userId, steps, T, h, dir) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            console.log(`Moonwalking for ${steps} steps with period ${T}, height ${h}, and direction ${dir}`)

            // Inicializar los servos de los pies directamente
            const servoLeftFoot = new Servo(4) // o 'A2' para OTTO GRANDE
            const servoRightFoot = new Servo(5) // o 'A0' para OTTO GRANDE

            // Definir la amplitud y los ángulos iniciales basados en la dirección
            const angleStartLeft = dir === LEFT ? 90 - h : 90 + h
            const angleStartRight = dir === LEFT ? 90 + h : 90 - h
            const angleEndLeft = dir === LEFT ? 90 + h / 2 : 90 - h / 2
            const angleEndRight = dir === LEFT ? 90 - h / 2 : 90 + h / 2

            let currentStep = 0
            const intervalId = setInterval(() => {
                if (currentStep % 2 === 0) {
                    servoLeftFoot.to(angleStartLeft)
                    servoRightFoot.to(angleStartRight)
                } else {
                    servoLeftFoot.to(angleEndLeft)
                    servoRightFoot.to(angleEndRight)
                }
                currentStep++

                if (currentStep >= steps) {
                    clearInterval(intervalId)
                    // Regresar los servos a la posición central
                    servoLeftFoot.to(90)
                    servoRightFoot.to(90)

                    console.log("Moonwalk completed")

                    // Guardar el movimiento en la base de datos
                    const moonwalkMovement = {
                        type: 'moonwalker',
                        name: 'Moonwalker',
                        ordinal: 0
                    }

                    // Buscar la última secuencia del usuario y agregar el movimiento
                    SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                        .then(sequence => {
                            if (!sequence) {
                                // Si no hay secuencias, crea una nueva
                                const newSequence = new SequenceMovement({
                                    userId: userId,
                                    movements: [moonwalkMovement],
                                    createdAt: new Date()
                                });
                                newSequence.save().then(savedSequence => {
                                    console.log('New sequence saved with Moonwalker', savedSequence)
                                    resolve(savedSequence)
                                }).catch(error => {
                                    console.error('Error saving new sequence', error)
                                    reject(error)
                                })
                            } else {
                                // Añadir el movimiento a la secuencia existente
                                sequence.movements.push(moonwalkMovement)
                                sequence.save().then(updatedSequence => {
                                    console.log('Moonwalker added to the last sequence', updatedSequence)
                                    resolve(updatedSequence)
                                }).catch(error => {
                                    console.error('Error adding Moonwalker to the last sequence', error)
                                    reject(error)
                                })
                            }
                        }).catch(error => {
                            console.error('Error finding the last sequence', error)
                            reject(error)
                        })
                }
            }, T / steps)
        })
    }


    swing(userId, steps, T, h) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            console.log(`Swinging for ${steps} steps with period ${T} and height ${h}`)

            // Inicializar los servos directamente
            const servoLeftFoot = new Servo(4) // o 'A2' para OTTO GRANDE
            const servoRightFoot = new Servo(5) // o 'A0' para OTTO GRANDE

            // Cálculo de los ángulos basado en la altura 'h'
            const angleUp = 90 + h
            const angleDown = 90 - h

            let currentStep = 0
            const intervalId = setInterval(() => {
                if (currentStep % 2 === 0) {
                    // Mover hacia un lado
                    servoLeftFoot.to(angleUp)
                    servoRightFoot.to(angleUp)
                } else {
                    // Mover hacia el otro lado
                    servoLeftFoot.to(angleDown)
                    servoRightFoot.to(angleDown)
                }
                currentStep++

                if (currentStep >= steps) {
                    clearInterval(intervalId)
                    // volver a poner servos en la posición normal
                    servoLeftFoot.to(90)
                    servoRightFoot.to(90)

                    console.log("Swing completed")

                    // Guardar el movimiento en la base de datos
                    const swingMovement = {
                        type: 'swing',
                        name: 'Swing',

                        ordinal: 0
                    }

                    // Buscar la última secuencia del usuario y agregar el movimiento
                    SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                        .then(sequence => {
                            if (!sequence) {
                                // Si no hay secuencias, crea una nueva
                                const newSequence = new SequenceMovement({
                                    userId: userId,
                                    movements: [swingMovement],
                                    createdAt: new Date()
                                });
                                newSequence.save().then(savedSequence => {
                                    console.log('New sequence saved with Swing', savedSequence)
                                    resolve(savedSequence)
                                }).catch(error => {
                                    console.error('Error saving new sequence', error)
                                    reject(error)
                                })
                            } else {
                                // Añadir el movimiento a la secuencia existente
                                sequence.movements.push(swingMovement)
                                sequence.save().then(updatedSequence => {
                                    console.log('Swing added to the last sequence', updatedSequence)
                                    resolve(updatedSequence)
                                }).catch(error => {
                                    console.error('Error adding Swing to the last sequence', error)
                                    reject(error)
                                })
                            }
                        }).catch(error => {
                            console.error('Error finding the last sequence', error)
                            reject(error)
                        })
                }
            }, T / steps)
        })
    }




    shakeLeg(userId, steps, T, dir) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            console.log(`Shaking leg ${dir === LEFT ? 'left' : 'right'} for ${steps} steps with period ${T}`)

            // Determinar cuáles servos corresponden a la pierna y el pie que se van a sacudir
            const legPin = dir === LEFT ? 2 : 3 // Asumiendo pines para la pierna izquierda y derecha
            const footPin = dir === LEFT ? 4 : 5 // Asumiendo pines para el pie izquierdo y derecho

            // Inicializar los servos directamente
            const legServo = new Servo(legPin)
            const footServo = new Servo(footPin)

            // Iniciar el movimiento de sacudida
            for (let i = 0; i < steps; i++) {
                setTimeout(() => {
                    const phaseProgress = (i / steps) * 2 * Math.PI
                    const angle = 30 * Math.sin(phaseProgress) + 90 // Ejemplo con amplitud de 30 y offset de 90
                    legServo.to(angle)
                    footServo.to(angle)

                    if (i === steps - 1) {
                        setTimeout(() => {
                            legServo.to(90) // Regresa a posición central/neutra
                            footServo.to(90) // Regresa a posición central/neutra

                            console.log("ShakeLeg completed")

                            // Guardar el movimiento en la base de datos
                            const shakeLegMovement = {
                                type: 'shakeLeg',
                                name: 'Shake Leg',
                                ordinal: 0
                            }

                            // Buscar la última secuencia del usuario y agregar el movimiento
                            SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                                .then(sequence => {
                                    if (!sequence) {
                                        // Si no hay secuencias, crea una nueva
                                        const newSequence = new SequenceMovement({
                                            userId: userId,
                                            movements: [shakeLegMovement],
                                            createdAt: new Date()
                                        })
                                        newSequence.save().then(savedSequence => {
                                            console.log('New sequence saved with Shake Leg', savedSequence)
                                            resolve(savedSequence)
                                        }).catch(error => {
                                            console.error('Error saving new sequence', error)
                                            reject(error)
                                        })
                                    } else {
                                        // Añadir el movimiento a la secuencia existente
                                        sequence.movements.push(shakeLegMovement)
                                        sequence.save().then(updatedSequence => {
                                            console.log('Shake Leg added to the last sequence', updatedSequence)
                                            resolve(updatedSequence)
                                        }).catch(error => {
                                            console.error('Error adding Shake Leg to the last sequence', error)
                                            reject(error)
                                        })
                                    }
                                }).catch(error => {
                                    console.error('Error finding the last sequence', error)
                                    reject(error)
                                })

                        }, T / steps)
                    }
                }, (T / steps) * i)
            }
        })
    }


    walkForward() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }
            this.otto.restartOscillators()
            this.otto.home()
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




    turn(steps, period, direction) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return;
            }
            this.otto.restartOscillators()

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

    jump(userId) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return;
            }

            // Lógica para hacer que Otto salte
            const servoLeftLeg = new Servo(2)
            const servoRightLeg = new Servo(3)
            const servoLeftFoot = new Servo(4)
            const servoRightFoot = new Servo(5)



            servoLeftLeg.to(90)
            servoRightLeg.to(90)
            servoLeftFoot.to(150) // Posición elevada para el pie izquierdo
            servoRightFoot.to(30) // Posición elevada para el pie derecho

            setTimeout(() => {
                // Finaliza la lógica del salto
                servoLeftLeg.to(90)
                servoRightLeg.to(90)
                servoLeftFoot.to(90)
                servoRightFoot.to(90)

                console.log("Otto has jumped")

                // Crear un registro de movimiento 
                const jumpMovement = {
                    type: 'jump',
                    name: 'Jump',
                    ordinal: 0
                }

                // comprobar si hay una secuencia ya creada o no
                SequenceMovement.findOne({ userId }).sort({ createdAt: -1 }) // Encuentra la última secuencia 
                    .then(sequence => {
                        console.log("La secuencia recuperada es:", sequence)
                        const ordinal = sequence ? sequence.movements.length : 0 // calculo el ordinal basado en la longitud
                        jumpMovement.ordinal = ordinal // asigno l valor del ordinal al movmiento
                        if (!sequence) {
                            // Si no hay secuencias, crea una nueva
                            const newSequence = new SequenceMovement({
                                userId: userId,
                                movements: [jumpMovement],
                                createdAt: new Date()
                            })

                            console.log(userId)

                            newSequence.save()
                                .then(savedSequence => {
                                    console.log('new sequence saved', savedSequence)
                                    resolve(savedSequence)
                                })
                                .catch(error => {
                                    console.error('Error trying to create sequence', error)
                                    reject(error)
                                })
                        } else {
                            // Si ya existe una secuencia, que es la última, lo guardo ahí
                            sequence.movements.push(jumpMovement)
                            sequence.save()
                                .then(updatedSequence => {
                                    console.log('Movement added to last sequence', updatedSequence)
                                    resolve(updatedSequence)
                                })
                                .catch(error => {
                                    console.error('Error trying to add movement to last sequence', error)
                                    reject(error)
                                })
                        }
                    })
                    .catch(error => {
                        console.error('Error trying to find SequenceMovement', error)
                        reject(error)
                    })
            }, 2000) // el salto dura 2 seg
        })
    }


    // BAILE DE SERPIENTE //

    snakeMove(userId) {
        return new Promise((resolve, reject) => {
            console.log(`Turning right`)

            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

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

            setTimeout(() => {
                console.log('Otto has completed the snake move')
                // Detener todos los osciladores para finalizar el movimiento
                this.otto.oscillators.forEach((oscillator) => {
                    oscillator.stop()
                })

                // Crear un registro de movimiento para snakeMove
                const snakeMove = {
                    type: 'snakeMove',
                    name: 'Snake Move'
                }

                // Guardar el movimiento en la base de datos, siguiendo el mismo patrón que jump
                SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                    .then(sequence => {
                        const ordinal = sequence ? sequence.movements.length : 0
                        snakeMove.ordinal = ordinal
                        if (!sequence) {
                            const newSequence = new SequenceMovement({
                                userId: userId,
                                movements: [snakeMove],
                                createdAt: new Date()
                            })
                            newSequence.save()
                                .then(savedSequence => {
                                    console.log('new sequence saved', savedSequence)
                                    resolve(savedSequence)
                                })
                                .catch(error => {
                                    console.error('Error trying to create sequence', error)
                                    reject(error)
                                })
                        } else {
                            sequence.movements.push(snakeMove)
                            sequence.save()
                                .then(updatedSequence => {
                                    console.log('Movement added to last sequence', updatedSequence)
                                    resolve(updatedSequence)
                                })
                                .catch(error => {
                                    console.error('Error trying to add movement to last sequence', error)
                                    reject(error)
                                })
                        }
                    })
                    .catch(error => {
                        console.error('Error trying to find SequenceMovement', error)
                        reject(error)
                    })
            }, 2000) // Ajusta a 2000 para 2 segundos
        })
    }



    stop(userId) {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            // Detener los servos de Otto
            this.otto.stopServos()

            // Crear un objeto de movimiento para "stop"
            const stopMovement = {
                type: 'stop',
                name: 'Stop'
            }

            // Guardar el movimiento en la última secuencia
            SequenceMovement.findOne({ userId }).sort({ createdAt: -1 })
                .then(sequence => {
                    const ordinal = sequence ? sequence.movements.length : 0 // calculo el ordinal basado en la longitud
                    stopMovement.ordinal = ordinal
                    if (!sequence) {
                        // Si no hay secuencias, crea una nueva
                        const newSequence = new SequenceMovement({
                            userId: userId,
                            movements: [stopMovement],
                            createdAt: new Date()
                        })

                        newSequence.save()
                            .then(savedSequence => {
                                console.log('new sequence saved', savedSequence)
                                resolve(savedSequence)
                            })
                            .catch(error => {
                                console.error('Error trying to create sequence', error)
                                reject(error)
                            })
                    } else {
                        // Si ya existe una secuencia, añade el movimiento a esa secuencia
                        sequence.movements.push(stopMovement)
                        sequence.save()
                            .then(updatedSequence => {
                                console.log('Movement added to last sequence', updatedSequence)
                                resolve(updatedSequence)
                            })
                            .catch(error => {
                                console.error('Error trying to add movement to last sequence', error)
                                reject(error)
                            })
                    }
                })
                .catch(error => {
                    console.error('Error trying to find SequenceMovement', error)
                    reject(error)
                })

        })
    }



    ////// LOGICA DE SECUENCIAS ///////


    async executeMovement(movement) {
        // Mapear el nombre del movimiento a un método
        switch (movement.type) {
            case 'jump':
                await this.jump()
                break;
            case 'stop':
                await this.stop()
                break;
            case 'snakeMove':
                await this.snakeMove()
                break;

            // Aquí añadiré más cuando tenga más cosas
            default:
                console.log(`Movement ${movement.type} not found`)
        }
    }

    async executeSequenceById(sequenceId) {
        try {
            // Buscar la secuencia por ID
            const sequence = await SequenceMovement.findById(sequenceId)
            if (!sequence) {
                console.log('Sequence not found')
                return
            }

            // Iterar sobre cada movimiento en la secuencia
            for (const movement of sequence.movements) {
                console.log(`Executing ${movement.name}`)
                // Ejecutar el movimiento correspondiente
                await this.executeMovement(movement)
                // Espera 2 segundos antes de proceder al siguiente movimiento
                await delay(2000)
            }

            console.log('All movements of the sequence have been executed')
        } catch (error) {
            console.error('Error executing the sequence', error)
        }
    }

}

export default OttoController