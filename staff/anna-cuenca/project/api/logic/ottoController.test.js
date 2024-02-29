
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import OttoController from './ottoController.js'



dotenv.config();

(async () => {
    // Conexión a la base de datos
    await mongoose.connect(process.env.MONGODB_URL)

    // Crear una instancia del controlador de Otto
    const ottoController = new OttoController()

    // Esperar a que la placa esté lista
    ottoController.board.on("ready", async () => {
        console.log("Control de Otto activado. Presiona 'W' para caminar, 'S' para detener, 'B' para caminar hacia atrás, 'R' para girar a la derecha y caminar, 'J' para saltar, 'H' para decir hola en el LCD, 'C' para limpiar pantalla.");

        process.stdin.setRawMode(true) // Esto permite leer las teclas presionadas sin necesidad de presionar enter
        process.stdin.resume()
        process.stdin.setEncoding('utf8')

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
                case 's':
                    console.log("Deteniendo...")
                    try {
                        await ottoController.stop()
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
                case 'r': // girar a la derecha y caminar
                    console.log("Girando a la derecha y caminando...")
                    try {
                        await ottoController.turnRight()
                    } catch (error) {
                        console.error('Error al intentar girar a la derecha y caminar:', error)
                    }
                    break;
                case 'j': // saltar
                    console.log("Saltando")
                    try {
                        await ottoController.jump()
                    } catch (error) {
                        console.error('Error al intentar saltar:', error)
                    }
                    break;
                case 'h': // activar el LCD
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