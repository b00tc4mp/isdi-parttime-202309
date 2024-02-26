
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
        console.log("Control de Otto activado. Presiona 'W' para caminar, 'S' para detener, 'B' para caminar hacia atrás.")

        process.stdin.setRawMode(true) // Esto permite leer las teclas presionadas sin necesidad de presionar enter
        process.stdin.resume()
        process.stdin.setEncoding('utf8')

        process.stdin.on('data', async (key) => {
            if (key === 'W' || key === 'w') {
                console.log("Caminando hacia adelante...")
                try {
                    await ottoController.walkForward()
                } catch (error) {
                    console.error(error)
                }
            } else if (key === 'S' || key === 's') {
                console.log("Deteniendo...")
                try {
                    await ottoController.stop()
                } catch (error) {
                    console.error(error)
                }
            } else if (key === 'B' || key === 'b') {
                console.log("Caminando hacia atrás...")
                try {
                    await ottoController.walkBackward()
                } catch (error) {
                    console.error(error)
                }
            } else if (key === '\u0003') { // Esto detecta la combinación de teclas Ctrl+C para terminar el programa
                process.exit()
            }
        })
    })
})()