// Importa todo el módulo logic
import logic from '../logic/index.js'

import { errors } from 'com'
const { ContentError } = errors

export default (req, res) => {
    try {
        const action = req.body.action;

        if (action === 'walkForward') {
            logic.ottoController.walkForward().then(() => {
                res.status(200).json('otto is walking')
            }).catch(error => {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            });
        } else if (action === 'stop') {
            logic.ottoController.stop().then(() => {
                res.status(200).json('Otto has stopped')
            }).catch(error => {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            });
        } else {
            res.status(400).send('Invalid action');
        }
    } catch (error) {
        let status = 500
        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}