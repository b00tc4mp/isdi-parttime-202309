import pkg from 'johnny-five'
const { Board } = pkg
import Oled from 'oled-js'


const arduinoOled = () => {
    return new Promise((resolve, reject) => {
        const board = new Board()

        board.on("ready", () => {
            const opts = {
                width: 128,
                height: 64,
                address: 0x3C
            }


            const oled = new Oled(board, opts)

            const textOpts = {
                size: 1,
                color: 'white',
                wrap: true
            }



            oled.clearDisplay()
            oled.setCursor(1, 1)



            console.log('LED should be displaying "Hola" now.')
            resolve()
        })

        board.on("error", error => {
            console.error('Board initialization failed:', error.message)
            reject(error)
        })
    })
}

export default arduinoOled