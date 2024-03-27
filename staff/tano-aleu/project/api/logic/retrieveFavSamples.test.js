import mongoose from 'mongoose';

import retrieveFavSamples from './retrieveFavSamples.js'; // Asegúrate de tener esta función implementada

mongoose.connect('mongodb://127.0.0.1:27017/test') // Asegúrate de ajustar la URL de tu base de datos
    .then(() => {
        try {
            retrieveFavSamples('65d662cd94a3197f2c3ac115') // Usa un ID de usuario existente en tu base de datos
                .then(samples => console.log('retrieved samples', samples))
                .catch(error => console.error(error));
        } catch (error) {
            console.error(error);
        }
    })
    .catch(error => console.error(error));
