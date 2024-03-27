// import React, { useState, useEffect } from 'react';
// import * as Tone from 'tone';
// import getSamples from '../logic/getSamples'; // Asegúrate de que la ruta sea correcta
// import { useAudioContext } from '../AudioContext';

// const SampleList = () => {
//     const [samples, setSamples] = useState([]);
//     const [selectedSample, setSelectedSample] = useState(null);
//     const [samplePlayer, setSamplePlayer] = useState(null);
//     const { isMetronomePlaying, currentBPM } = useAudioContext();
//     const [isSamplePlaying, setIsSamplePlaying] = useState(false);
//     const [isMuted, setIsMuted] = useState(false);

//     useEffect(() => {
//         // Cargar los samples disponibles
//         getSamples().then(fetchedSamples => {
//             setSamples(fetchedSamples);
//             // Opcional: seleccionar automáticamente el primer sample
//             // setSelectedSample(fetchedSamples[0]);
//         });
//     }, []);

//     useEffect(() => {
//         if (selectedSample) {
//             const player = new Tone.Player(selectedSample.filePath, () => {
//                 console.log("Sample cargado y listo para reproducir.");
//                 setSamplePlayer(player);
//             }).toDestination();
//             player.loop = true;
//             // Actualiza el volumen y el playbackRate inmediatamente
//             player.volume.value = isMuted ? -Infinity : 0;
//             player.playbackRate = currentBPM / (selectedSample.bpm || 120);
//         }
//     }, [selectedSample, isMuted, currentBPM]);

//     useEffect(() => {
//         if (isSamplePlaying && isMetronomePlaying && samplePlayer) {
//             samplePlayer.start();
//         } else {
//             samplePlayer?.stop();
//         }
//     }, [isSamplePlaying, isMetronomePlaying, samplePlayer]);

//     const handleSampleSelection = (sample) => {
//         setIsSamplePlaying(false); // Detener la reproducción del sample anterior
//         setSelectedSample(sample);
//     };

//     const handlePlayToggle = () => {
//         setIsSamplePlaying(!isSamplePlaying);
//     };

//     const handleVolumeChange = (e) => {
//         if (samplePlayer) {
//             samplePlayer.volume.value = Number(e.target.value);
//         }
//     };

//     const handleMuteToggle = () => {
//         setIsMuted(!isMuted);
//     };

//     return (
//         <div>
//             <h2>Sample List</h2>
//             {samples.map(sample => (
//                 <div key={sample.name} onClick={() => handleSampleSelection(sample)}>
//                     {sample.name}
//                 </div>
//             ))}
//             <button onClick={handlePlayToggle}>
//                 {isSamplePlaying ? 'Pause' : 'Play'}
//             </button>
//             <button onClick={handleMuteToggle}>
//                 {isMuted ? 'Unmute' : 'Mute'}
//             </button>
//             <input type="range" min="-60" max="0" onChange={handleVolumeChange} />
//         </div>
//     );
// };

// export default SampleList;
