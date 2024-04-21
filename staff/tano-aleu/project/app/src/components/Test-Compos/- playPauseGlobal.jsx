// import React from 'react';
// import * as Tone from 'tone';
// import { useAudioContext } from '../AudioContext'; // Asegúrate de que la ruta sea correcta

// const PlayPauseGlobal = () => {
//     const { isGlobalPlaying, setGlobalPlaying } = useAudioContext();

//     const togglePlayPause = async () => {
//         try {
//             // Asegura que Tone.js esté iniciado
//             await Tone.start();
//             console.log('Contexto de audio de Tone.js iniciado');
//             // Cambia el estado global de reproducción
//             setGlobalPlaying(!isGlobalPlaying);
//         } catch (error) {
//             console.error("Error al iniciar el contexto de audio de Tone.js:", error);
//         }
//     };

//     return (
//         <button onClick={togglePlayPause}>
//             {isGlobalPlaying ? 'Pausar Todo' : 'Reproducir Todo'}
//         </button>
//     );
// };

// export default PlayPauseGlobal;
