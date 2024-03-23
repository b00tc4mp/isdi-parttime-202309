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

    // Manejador de evento para iniciar el cambio de BPM y prevenir acciones predeterminadas
    const handleTouchStart = (tempoChange) => (e) => {
        document.addEventListener('contextmenu', preventContextMenu);
        startChangeTempo(tempoChange);
    };

    const handleTouchEnd = (e) => {
        document.removeEventListener('contextmenu', preventContextMenu);
        stopChangeTempo();
    };

    const preventContextMenu = (e) => {
        e.preventDefault();
    };




    return (
        <div>

            <h3 className="flex justify-around">Beat Transposition</h3>
            <div onContextMenu={(e) => e.preventDefault()} className="flex justify-around">

                <button onMouseDown={() => startChangeTempo(-5)}
                    onMouseUp={stopChangeTempo}
                    onTouchStart={handleTouchStart(-5)}
                    onTouchEnd={handleTouchEnd}
                    onContextMenu={(e) => e.preventDefault()}>
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-purple-800 border-b-[15px] border-b-transparent"></div>

                </button>

                <button onMouseDown={() => startChangeTempo(5)}
                    onMouseUp={stopChangeTempo}
                    onTouchStart={handleTouchStart(5)}
                    onTouchEnd={handleTouchEnd}
                    onContextMenu={(e) => e.preventDefault()}>
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[30px] border-l-purple-800 border-b-[15px] border-b-transparent"></div>
                </button>


            </div>
        </div>



    );
};

export default BeatTransposition;
