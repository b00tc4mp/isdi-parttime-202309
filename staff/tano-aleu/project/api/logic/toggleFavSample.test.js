import mongoose from 'mongoose';
import toggleFavSample from './toggleFavSample.js'; // Asegúrate de que la ruta de importación es correcta

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        const userId = '65d662cd94a3197f2c3ac115'; // Asegúrate de reemplazar esto con un ID de usuario válido de tu base de datos
        const sampleId = '65f5cf4f3d50884462dfabf2'; // Asegúrate de reemplazar esto con un ID de sample válido de tu base de datos

        try {
            toggleFavSample(userId, sampleId)
                .then(() => {
                    console.log('Sample fav toggled');
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    })
    .catch(error => console.error(error));
