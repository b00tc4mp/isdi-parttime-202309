import React, { useState } from 'react';

const TapTempo = ({ onBPMChange }) => {
    const [buttonColor, setButtonColor] = useState(true); // Estado para controlar el color del botón
    const [isTapping, setIsTapping] = useState(false); // Estado para controlar si se está realizando un tapping
    const [tapCount, setTapCount] = useState(0); // Contador de toques
    const [taps, setTaps] = useState([]); // Almacenar los tiempos de los toques

    // Función para manejar el inicio del tapping
    const handleTap = () => {
        if (!isTapping) {
            setIsTapping(true); // Marcar que se está realizando un tapping
            setTaps([]); // Limpiar la lista de tiempos de toques
        } else {
            const currentTime = Date.now();
            const newTaps = [...taps, currentTime];
            setTaps(newTaps); // Agregar el tiempo del toque actual a la lista

            // Aumentar el contador de toques y detener el tapping después del cuarto toque
            setTapCount(prevCount => prevCount + 1);
            if (tapCount >= 2) {
                setIsTapping(false); // Detener el tapping después del cuarto toque
                setTapCount(0); // Reiniciar el contador de toques
                calculateBPM(newTaps); // Calcular el BPM basado en los tiempos de los toques
            }
        }
        // Cambiar el color del botón
        setButtonColor(!buttonColor);
    };

    // Función para manejar el fin del tapping
    const handleRelease = () => {
        // No es necesario hacer nada en el fin del tapping
    };

    // Función para calcular el BPM basado en los tiempos de los toques
    const calculateBPM = (taps) => {
        const intervals = [];
        for (let i = 1; i < taps.length; i++) {
            intervals.push(taps[i] - taps[i - 1]);
        }
        const averageInterval = intervals.reduce((acc, interval) => acc + interval, 0) / intervals.length;
        const bpm = Math.round(60000 / averageInterval);
        if (onBPMChange) {
            onBPMChange(bpm);
        }
    };
    return (
        <div className="flex justify-around">
            <button
                className={`bg-${buttonColor ? 'purple-800' : 'purple-500'} hover:bg-${buttonColor ? 'purple-800' : 'purple-500'} text-white font-bold py-2 px-4 rounded shadow`}
                onMouseDown={handleTap} // Detectar inicio del tap
                onMouseUp={handleRelease} // Detectar fin del tap
            >
                {isTapping ? 'TAP' : 'SYNQ'}
            </button>
        </div>
    );
};

export default TapTempo;
