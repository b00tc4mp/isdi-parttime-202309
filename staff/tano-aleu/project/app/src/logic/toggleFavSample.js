import { validate, errors } from 'com';
import session from './session';

function toggleFavSample(sampleId) {
    validate.text(sampleId, 'sample id');

    const req = {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${session.token}`,
            'Content-Type': 'application/json'
        }
    };

    // console.log(`Toggling fav for Sample ID: ${sampleId} with token: ${session.token}`); // Verifica el ID y token

    return fetch(`${import.meta.env.VITE_API_URL}/samples/${sampleId}/favSamples`, req)
        .then(res => {
            if (!res.ok) {
                return res.json().then(body => {
                    console.error("Toggle Fav Sample Response Error:", body);
                    return Promise.reject(new errors[body.error](body.message));
                });
            }

            // console.log("Toggle Fav Sample Success for Sample ID:", sampleId);

        })
        .catch(error => {
            console.error("Toggle Fav Sample Fetch Error:", error);
        });

}

export default toggleFavSample