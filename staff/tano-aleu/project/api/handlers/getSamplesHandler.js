
import jwt from 'jsonwebtoken';
import logic from '../logic/index.js';
import { SystemError, NotFoundError, TokenError } from 'com/errors.js';




export default (req, res) => {
    try {
        const token = req.headers.authorization.substring(7);
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET);


        logic.getSamples(userId)
            .then(samples => res.json(samples))
            .catch(error => {

                let status = 500;
                if (error instanceof NotFoundError) status = 404;
                res.status(status).json({ error: error.constructor.name, message: error.message });
            });
    } catch (error) {

        let status = 500;
        if (error instanceof TokenError) status = 401;
        res.status(status).json({ error: error.constructor.name, message: error.message });
    }
};

