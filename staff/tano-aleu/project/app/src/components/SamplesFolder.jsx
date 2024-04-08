import { useEffect, useState } from 'react';
import SampleItem from './SampleItem';
import { useContext } from '../hooks';
import getSamples from '../logic/getSamples'; // Asegúrate de tener la ruta correcta a getSamples
import session from '../logic/session';
import logic from '../logic';
import logo from '../assets/synqple.logo.png';

function SamplesFolder() {
    const [samples, setSamples] = useState([]);
    const context = useContext();

    const refreshSamples = async () => {
        try {
            // Aquí accedes al token desde tu lógica de sesión/contexto
            const token = session.token; // Asume que 'session.token' contiene el token de autenticación actual
            console.log("Token for getSamples:", token); // Verifica el token
            const loadedSamples = await getSamples(token); // Pasas el token como argumento a getSamples
            console.log("Loaded Samples:", loadedSamples); // Verifica los samples cargados
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
        console.log('SampleFolder effect');
        refreshSamples();
    }, []); // Dependencias vacías para efectuar la carga solo al montar el componente


    return (
        <div className="bg-[#5F5784] border rounded-3xl p-4 border-black text-white flex flex-col  overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h2 className="text-white text-lg text-center mb-4">SAMPLES</h2>
            <div className="space-y-1">

                <h2 className="text-center bg-purple-400 text-white py-2">Drums</h2>
                {samples.map((sample, index) => (
                    <>
                        <SampleItem
                            key={sample._id}
                            sample={sample}
                            onToggleFav={() => onToggleFav(sample._id)}
                        />
                        {index === 2 && <h2 className="text-center bg-purple-400 text-white py-2">Bass</h2>}
                        {index === 5 && <h2 className="text-center bg-purple-400 text-white py-2">Piano</h2>}
                        {index === 8 && <h2 className="text-center bg-purple-400 text-white py-2">Synth</h2>}
                        {index === 11 && <h2 className="text-center bg-purple-400 text-white py-2">Percs</h2>}
                        {index === 14 && <h2 className="text-center bg-purple-400 text-white py-2">Vocals</h2>}
                    </>
                ))}
            </div>


            <footer className="flex justify-center py-0">

                <img src={logo} alt="Logo" className="w-40 h-auto  justify-center" />

            </footer>

        </div>


    );
}

export default SamplesFolder;