
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import OttoController from './ottoController.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1



dotenv.config();

(async () => {
    // Conexión a la base de datos
    await mongoose.connect(process.env.MONGODB_URL)

    // Crear una instancia del controlador de Otto
    const ottoController = new OttoController()

    // Esperar a que la placa esté lista
    ottoController.board.on("ready", async () => {
        console.log("Control de Otto activado. Presiona 'W' para caminar, 'S' para detener, 'B' para caminar hacia atrás, 'H' para shake leg, 'R' para girar a la derecha, 'L' para girar a la derecha, 'J' para saltar, 'M' para snakeMove,  'A' para reproducir secuencia, 'H' para decir hola en el LCD, 'C' para limpiar pantalla.");

        process.stdin.setRawMode(true) // Esto permite leer las teclas presionadas sin necesidad de presionar enter
        process.stdin.resume()
        process.stdin.setEncoding('utf8')

        // executeSequenceById

        process.stdin.on('data', async (key) => {
            switch (key.toLowerCase()) {
                case 'w':
                    console.log("Caminando hacia adelante...")
                    try {
                        await ottoController.walkForward()
                    } catch (error) {
                        console.error(error)
                    }
                    break;


                case 'o':
                    console.log("Haciendo Moonwalker..")
                    try {
                        await ottoController.moonwalker('65d8d9dffdfc051c2e6c1e96', 8, 1000, 30, 1)
                    } catch (error) {
                        console.error(error)
                    }
                    break;

                case 'u':
                    console.log("Haciendo crusaito..")
                    try {
                        await ottoController.crusaito('65d8d9dffdfc051c2e6c1e96', 10, 2000, 70, 1)
                    } catch (error) {
                        console.error(error)
                    }
                    break;

                case 'a':
                    console.log("Ejecutando secuencia..")
                    try {
                        await ottoController.executeSequenceById('65e779b95ca9de5f2e0d0b44')
                    } catch (error) {
                        console.error(error)
                    }
                    break;
                case 's':
                    console.log("Deteniendo...")
                    try {
                        await ottoController.stop('65d8d9dffdfc051c2e6c1e96')
                    } catch (error) {
                        console.error(error)
                    }
                    break;
                case 'e':
                    console.log("Guardando secuencia")
                    try {
                        await ottoController.endSequence('65d8d9dffdfc051c2e6c1e96')
                    } catch (error) {
                        console.error(error)
                    }
                    break;
                case 'b':
                    console.log("Caminando hacia atrás...")
                    try {
                        await ottoController.walkBackward()
                    } catch (error) {
                        console.error(error)
                    }
                    break;



                case 'x': //hacer shake leg con la derecha
                    console.log("Swing")
                    try {
                        await ottoController.swing('65d8d9dffdfc051c2e6c1e96', 4, 1000, 40)
                    } catch (error) {
                        console.error('Error al intentar girar a la derecha y caminar:', error)
                    }
                    break;

                case 'h': //hacer shake leg con la derecha
                    console.log("Shake leg")
                    try {
                        await ottoController.shakeLeg('65d8d9dffdfc051c2e6c1e96', 3, 1000, RIGHT)
                    } catch (error) {
                        console.error('Error al intentar girar a la derecha y caminar:', error)
                    }
                    break;

                case 'i': //hacer shake leg con la derecha
                    console.log("Shake leg")
                    try {
                        await ottoController.shakeLeg('65d8d9dffdfc051c2e6c1e96', 4, 1000, LEFT)
                    } catch (error) {
                        console.error('Error al intentar girar a la derecha y caminar:', error)
                    }
                    break;

                case 'r': // girar a la derecha y caminar
                    console.log("Girando a la derecha")
                    try {
                        await ottoController.turn(7, 2000, RIGHT)
                    } catch (error) {
                        console.error('Error al intentar girar a la derecha y caminar:', error)
                    }
                    break;
                case 'l': // girar a la derecha y caminar
                    console.log("Girando a la izquierda")
                    try {
                        await ottoController.turn(7, 2000, LEFT)
                    } catch (error) {
                        console.error('Error al intentar girar a la izquierda y caminar:', error)
                    }
                    break;

                case 'j': // saltar
                    console.log("Saltando")
                    try {
                        await ottoController.jump('65d8d9dffdfc051c2e6c1e96')
                    } catch (error) {
                        console.error('Error al intentar saltar:', error)
                    }
                    break;

                case 'm': // snakeMove
                    console.log("Movimiento Snake")
                    try {
                        await ottoController.snakeMove('65d8d9dffdfc051c2e6c1e96')
                    } catch (error) {
                        console.error('Error al intentar saltar:', error)
                    }
                    break;
                case 'z': // activar el LCD
                    console.log("Diciendo hola...")
                    try {
                        await ottoController.sayHi("¡Hola, soy Otto!")
                    } catch (error) {
                        console.error('Error al intentar mostrar mensaje en el LCD:', error)
                    }
                    break;
                case 'c': // limpiar el LCD
                    console.log("Limpiando pantalla")
                    try {
                        await ottoController.clearLCD()
                    } catch (error) {
                        console.error('Error al intentar borrar el contenido LCD:', error)
                    }
                    break;
                case '\u0003': // Detecta la combinación de teclas Ctrl+C para terminar el programa
                    console.log("Saliendo...")
                    process.exit()
                    break;
                default:
                    console.log("Entrada inválida.")
                    break;
            }
        })
    })
})()