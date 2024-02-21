import logic from '../logic/index.js'

import { errors } from 'com'
const { ContentError } = errors

export default (req, res) => {

    try {
        logic.arduinoLed()
            .then(() => res.status(200).send())
            .catch(error => {

                let status = 500

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500
        if (error instanceof ContentError || error instanceof TypeError)
            status = 406
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}



// export const arduinoLedHandler = (req, res) => {

//     const board = new Board()

//     board.on("ready", function () {
//         const led = new Led(13)
//         led.blink(500)
//         res.status(200).json({ message: 'LED is blinking!' })
//     })

//     board.on("error", function (error){
//         res.status(500).json({ error: 'Failed to initialize the board', details: error.message})
//     })
// }





