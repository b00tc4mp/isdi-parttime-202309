import logic from '../logic/index.js'; // Asegúrate de que la ruta sea correcta

export default (req, res) => {
    logic.getMetronomo()
        .then(metronomo => res.json(metronomo))
        .catch(error => {
            let status = 500;

            res.status(status).json({ error: error.constructor.name, message: error.message });
        });
};
