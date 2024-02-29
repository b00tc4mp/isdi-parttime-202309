import pkg from 'johnny-five'
const { Board, LCD } = pkg


// TEXTO SIN DESPLAZAMIENTO
const arduinoLCD = async (message) => {
    return new Promise(async (resolve, reject) => {
        const board = new Board()

        board.on("ready", async () => {
            const lcd = new LCD({
                controller: "PCF8574A"
            })

            // Esperamos dinámicamente la importación del módulo 'lcd-scrolling'
            try {
                const scroll = await import('lcd-scrolling').then(module => module.default)

                // Configuración inicial de 'lcd-scrolling' con el objeto LCD
                scroll.setup({
                    lcd: lcd,
                    debug: false,
                    char_length: 16,
                    row: 2,
                    firstCharPauseDuration: 4000,
                    lastCharPauseDuration: 1000,
                    scrollingDuration: 300,
                    full: true
                })

                // Limpiamos el LCD antes de escribir el mensaje para evitar sobreescrituras
                lcd.clear()

                // Mostramos el mensaje con desplazamiento
                scroll.line(0, message)

                // No funciona :()
                setTimeout(() => {
                    lcd.clear();
                    console.log("LCD cleared")
                    resolve("LCD cleared after showing message.")
                }, 5000)

            } catch (error) {
                console.error("Error with lcd-scrolling:", error)
                reject(error)
            }
        })

        board.on("error", error => {
            console.error('Board initialization failed:', error.message)
            reject(error)
        })
    })
}

export default arduinoLCD

