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

    const preventContextMenu = (e) => {
        e.preventDefault();
    };

    // Manejador de evento para iniciar el cambio de BPM y prevenir acciones predeterminadas
    const handleTouchStart = (tempoChange) => (e) => {
        e.preventDefault();
        document.addEventListener('contextmenu', preventContextMenu);
        startChangeTempo(tempoChange);
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        document.removeEventListener('contextmenu', preventContextMenu);
        stopChangeTempo();
    };





    return (
        <div>

            <div onContextMenu={preventContextMenu} className="flex justify-around">
                <div className="select-none touch-none mb-4">
                    <button className="w-0 h-0 border-t-[30px] border-t-transparent border-r-[60px] border-r-purple-800 border-b-[30px] border-b-transparent" onMouseDown={() => startChangeTempo(-5)}
                        onMouseUp={stopChangeTempo}
                        onTouchStart={handleTouchStart(-5)}
                        onTouchEnd={handleTouchEnd}
                        onContextMenu={preventContextMenu}>
                    </button>
                </div>
                <h3 className="flex justify-around mt-4">Beat Transposition</h3>
                <div className="select-none touch-none">
                    <button className="w-6 h-6 border-t-[30px] border-t-transparent border-l-[60px] border-l-purple-800 border-b-[30px] border-b-transparent" onMouseDown={() => startChangeTempo(5)}
                        onMouseUp={stopChangeTempo}
                        onTouchStart={handleTouchStart(5)}
                        onTouchEnd={handleTouchEnd}
                        onContextMenu={preventContextMenu}>
                    </button>
                </div>

            </div>
        </div>



    );
};

export default BeatTransposition;
