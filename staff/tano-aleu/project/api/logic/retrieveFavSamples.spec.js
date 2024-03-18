import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { expect } from 'chai';
import random from './helpers/random.js'; // Asegúrate de que esta ruta es correcta

import retrieveFavSamples from './retrieveFavSamples.js';
import { User, Sample } from '../data/models.js';
import { errors } from 'com';

const { NotFoundError } = errors;


describe('retrieveFavSamples', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL));

    beforeEach(async () => {
        await Promise.all([User.deleteMany(), Sample.deleteMany()]);

        // Crear samples con datos randomizados
        const samples = await Sample.insertMany([
            { name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() },
            { name: random.sampleName(), filePath: random.filePath(), type: random.sampleType() }
        ]);

        // Convertir los IDs de los samples a strings para usarlos más tarde
        const sampleIds = samples.map(sample => sample._id.toString());

        // Crear un usuario y asignarle samples favoritos randomizados
        const user = await User.create({
            name: random.name(),
            email: random.email(),
            password: random.password(),
            favSamples: sampleIds // Asume que tu modelo de User tiene un campo favSamples para almacenar los IDs de los samples favoritos
        });

        // Guardar el usuario para asegurarnos de que los datos se persisten correctamente
        await user.save();
    });

    it('succeeds on existing user', async () => {
        // Asumiendo que ya tienes una instancia de User creada en beforeEach
        const user = await User.findOne(); // Obtener un usuario para el test

        const favSamples = await retrieveFavSamples(user._id.toString());

        // Asumiendo que el usuario tiene 2 samples favoritos, verificamos que el resultado sea correcto
        expect(favSamples).to.exist;
        expect(favSamples).to.be.an('array').that.has.lengthOf(2);
        favSamples.forEach(sample => {
            expect(sample).to.have.all.keys('id', 'name', 'filePath', 'type'); // Asume estos son los campos que tu método devuelve
            expect(user.favSamples).to.include(sample.id);
        });
    });

    // it('fails on non-existing user', async () => {
    //     const user = await User.create({ name: random.name(), email: random.email(), password: random.password() });
    //     const nonExistingUserId = new mongoose.Types.ObjectId().toString();

    //     try {
    //         await retrieveFavSamples(user.id, nonExistingUserId);
    //         throw new Error('should not reach this point');
    //     } catch (error) {
    //         expect(error).to.be.instanceOf(NotFoundError);
    //         expect(error.message).to.equal('user not found');
    //     }
    // });

    after(async () => {
        await mongoose.disconnect()
    });
});
