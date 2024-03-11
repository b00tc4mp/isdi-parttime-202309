import { validate, errors } from 'com';
const { SystemError } = errors;

export default function getSamples() {
    return (async () => {
        const req = {
            method: 'GET',
            headers: {}
        };

        let res;

        try {
            res = await fetch(`${import.meta.env.VITE_API_URL}/samples`, req);
        } catch (error) {
            throw new SystemError(error.message);
        }

        if (!res.ok) {
            let body;

            try {
                body = await res.json();
            } catch (error) {
                throw new SystemError(error.message);
            }

            throw new errors[body.error](body.message);
        }

        try {
            const samples = await res.json();

            return samples;
        } catch (error) {
            throw new SystemError(error.message);
        }
    })();
}