import arduinoController from '../logic/arduinoController.js'

const arduinoMoveHandler = (req, res) => {
    const { position } = req.body;

    try {
        arduinoController.sendData(`MOVE ${position}`)
        res.status(200).send({ message: 'Comando enviado al Arduino' })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error al enviar comando al Arduino' })
    }
}

export default arduinoMoveHandler