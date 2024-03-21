import jwt from 'jsonwebtoken';
import logic from '../logic/index.js';
import { errors } from 'com';

const { NotFoundError, ContentError, TokenError } = errors;

export default (req, res) => {
    try {
        const token = req.headers.authorization.substring(7);
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET);
        const sampleId = req.params.sampleId; // Asegúrate de extraer correctamente el sampleId

        console.log(`Received toggle fav request for Sample ID: ${sampleId} from User ID: ${userId}`); // Verifica los IDs

        logic.toggleFavSample(userId, sampleId)
            .then(() => {

                console.log(`Toggle fav successful for Sample ID: ${sampleId}`);

                res.status(204).send()
            })

            .catch(error => {

                console.error("Toggle Fav Sample Handler Error:", error);

                let status = 500;
                if (error instanceof NotFoundError) status = 404;
                else if (error instanceof JsonWebTokenError) status = 401;
                else if (error instanceof ContentError || error instanceof TypeError) status = 406;

                res.status(status).json({ error: error.constructor.name, message: error.message });
            });
    } catch (error) {
        console.error("Toggle Fav Sample Handler Catch Error:", error);
        let status = 500;
        if (error instanceof JsonWebTokenError) {
            status = 401;
            error = new TokenError(error.message);
        } else if (error instanceof ContentError || error instanceof TypeError) {
            status = 406;
        }

        res.status(status).json({ error: error.constructor.name, message: error.message });
    }
};