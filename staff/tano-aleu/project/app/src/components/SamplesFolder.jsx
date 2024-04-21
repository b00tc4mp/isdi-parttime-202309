import React from 'react';
import { useEffect, useState, } from 'react';
import SampleItem from './SampleItem';
import { useContext } from '../hooks';
import getSamples from '../logic/getSamples'; // Asegúrate de tener la ruta correcta a getSamples
import session from '../logic/session';
import logic from '../logic';
import logo from '../assets/synqple.logo.png';

function SamplesFolder() {
    console.log('SampleFolder')
    const [samples, setSamples] = useState([]);
    const context = useContext();

    const categoryIndices = {
        2: "Bass",
        5: "Piano/Guitar",
        8: "Synth",
        11: "Percs",
        14: "Vocals",
    };


    const refreshSamples = async () => {
        try {
            // Aquí accedes al token desde tu lógica de sesión/contexto
            const token = session.token; // Asume que 'session.token' contiene el token de autenticación actual

            const loadedSamples = await getSamples(token); // Pasas el token como argumento a getSamples

            setSamples(loadedSamples);
        } catch (error) {
            console.error("Refresh Samples Error:", error);
            context.handleError(error);
        }
    };


    const onToggleFav = (sampleId) => {
        setSamples(samples => samples.map(sample => {
            if (sample._id === sampleId) {
                // Invertir el estado de 'fav' para el sample con el ID dado
                return { ...sample, fav: !sample.fav };
            }
            return sample;
        }));
    };

    useEffect(() => {

        refreshSamples();
    }, []); // Dependencias vacías para efectuar la carga solo al montar el componente


    return (
        <div className="bg-[#5F5784] border rounded-3xl p-4 border-black text-white flex flex-col overflow-hidden min-h-screen max-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl pb-20">

            <h2 className="text-white text-lg text-center mb-4">SAMPLES</h2>
            <div className="overflow-y-auto space-y-1">
                <h2 className="text-center bg-purple-400 text-white py-2">Drums</h2>
                {samples.map((sample, index) => (
                    <React.Fragment key={sample._id}>
                        <SampleItem
                            sample={sample}
                            onToggleFav={() => onToggleFav(sample._id)}
                        />
                        {categoryIndices[index] && (
                            <h2 className="text-center bg-purple-400 text-white py-2">{categoryIndices[index]}</h2>
                        )}
                    </React.Fragment>
                ))}
            </div>


        </div>


    );
}

export default SamplesFolder;