import jwt from 'jsonwebtoken'

import { errors } from 'com'
const { JsonWebTokenError } = jwt

import logic from '../logic/index.js'
const { NotFoundError, ContentError, CredentialsError, TokenError, DuplicityError } = errors;

export default async (req, res) => {
    try {
        const token = req.headers.authorization.substring(7);
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET);
        const { newEmail, newEmailConfirm, password } = req.body;

        await logic.changeUserEmail(userId, newEmail, newEmailConfirm, password);
        res.status(204).send();

    } catch (error) {
        let status = 500;
        let errorMessage = error.message;

        if (error instanceof CredentialsError) {
            status = 401;

        } else if (error instanceof NotFoundError) {
            status = 404;

        } else if (error instanceof ContentError || error instanceof TypeError) {
            status = 406;

        } else if (error instanceof JsonWebTokenError || error instanceof TokenError) {
            status = 401;

        } else if (error.code === 11000 || error.message.includes('E11000')) {
            status = 409;
            errorMessage = 'The email is already in use. Please choose another one.';

        } else if (error instanceof DuplicityError) {
            status = 409; // Asegura que este caso esté cubierto, aunque debería ser redundante con el control de 'error.code === 11000'
        }

        res.status(status).json({ error: error.constructor.name, message: errorMessage });
    }
};