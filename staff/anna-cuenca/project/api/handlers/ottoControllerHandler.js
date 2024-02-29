
import logic from '../logic/index.js'

import { errors } from 'com'
const { ContentError } = errors



// export default (req, res) => {
//     try {
//         const action = req.body.action

//         if (action === 'walkForward') {
//             logic.ottoController.walkForward().then(() => {
//                 res.status(200).json({ message: 'otto is walking' })
//             }).catch(error => {
//                 res.status(500).json({ error: error.constructor.name, message: error.message })
//             })
//         } else if (action === 'walkBackward') {
//             logic.ottoController.walkBackward().then(() => {
//                 res.status(200).json({ message: 'Otto is walking backward' })
//             }).catch(error => {
//                 res.status(500).json({ error: error.constructor.name, message: error.message })
//             })
//         } else if (action === 'stop') {
//             logic.ottoController.stop().then(() => {
//                 res.status(200).json({ message: 'Otto has stopped' })
//             }).catch(error => {
//                 res.status(500).json({ error: error.constructor.name, message: error.message })
//             })
//         } else {
//             res.status(400).json({ message: 'Invalid action' })
//         }
//     } catch (error) {
//         let status = 500
//         if (error instanceof ContentError || error instanceof TypeError) {
//             status = 406
//         }
//         res.status(status).json({ error: error.constructor.name, message: error.message })
//     }
// }

export default (req, res) => {
    try {
        const { action, message } = req.body; // Asume que para 'sayHi' se enviará también un mensaje en el cuerpo de la petición

        switch (action) {
            case 'walkForward':
                logic.ottoController.walkForward().then(() => {
                    res.status(200).json({ message: 'Otto is walking' });
                }).catch(error => {
                    res.status(500).json({ error: error.constructor.name, message: error.message });
                });
                break;
            case 'walkBackward':
                logic.ottoController.walkBackward().then(() => {
                    res.status(200).json({ message: 'Otto is walking backward' });
                }).catch(error => {
                    res.status(500).json({ error: error.constructor.name, message: error.message });
                });
                break;
            case 'stop':
                logic.ottoController.stop().then(() => {
                    res.status(200).json({ message: 'Otto has stopped' });
                }).catch(error => {
                    res.status(500).json({ error: error.constructor.name, message: error.message });
                });
                break;
            case 'sayHi':
                if (message) { // Asegúrate de validar que el mensaje se haya enviado para la acción 'sayHi'
                    logic.ottoController.sayHi(message).then(() => {
                        res.status(200).json({ message: `Message displayed: ${message}` });
                    }).catch(error => {
                        res.status(500).json({ error: error.constructor.name, message: error.message });
                    });
                } else {
                    res.status(400).json({ message: 'Message is required for sayHi action' });
                }
                break;
            case 'clearLCD':
                logic.ottoController.clearLCD().then(() => {
                    res.status(200).json({ message: 'LCD cleared' });
                }).catch(error => {
                    res.status(500).json({ error: error.constructor.name, message: error.message });
                });
                break;
            default:
                res.status(400).json({ message: 'Invalid action' });
                break;
        }
    } catch (error) {
        let status = 500;
        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406;
        }
        res.status(status).json({ error: error.constructor.name, message: error.message });
    }
}