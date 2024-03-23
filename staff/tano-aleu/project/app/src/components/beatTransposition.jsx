import React from 'react';
import decreaseTempoImg from '../assets/nudge_buttons/nudge_button_-.png';
import increaseTempoImg from '../assets/nudge_buttons/nudge_button_+.png';

const BeatTransposition = ({ bpm, onBPMChange }) => {
    // Guardar el valor original del BPM para poder restablecerlo después
    const originalBPM = React.useRef(bpm);

    // Función para iniciar el cambio de BPM (se llama al presionar el botón)
    const startChangeTempo = (tempoChange) => {
        console.log(`Iniciando cambio de tempo: ${tempoChange}`);
        originalBPM.current = bpm; // Captura el BPM actual como el original
        const newBPM = bpm + tempoChange;
        onBPMChange(newBPM); // Aplica el nuevo BPM
    };

    // Función para restablecer el BPM a su valor original (se llama al soltar el botón)
    const stopChangeTempo = () => {
        console.log("Deteniendo cambio de tempo, restableciendo al BPM original");
        onBPMChange(originalBPM.current); // Restablece al BPM original
    };


    return (
        <div>

            <h3 className="flex justify-around">Beat Transposition</h3>
            <div className="flex justify-around">
                <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow" onMouseDown={() => startChangeTempo(-5)} onMouseUp={stopChangeTempo} onTouchStart={() => startChangeTempo(-5)}
                    onTouchEnd={stopChangeTempo}>
                    <img src={decreaseTempoImg} alt="Decrease Tempo" className="w-6 h-6" />
                </button>
                <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow" onMouseDown={() => startChangeTempo(5)} onMouseUp={stopChangeTempo}
                    onTouchStart={() => startChangeTempo(5)}
                    onTouchEnd={stopChangeTempo}>
                    <img src={increaseTempoImg} alt="Increase Tempo" className="w-6 h-6" />
                </button>

            </div>
        </div>



    );
};

export default BeatTransposition;
