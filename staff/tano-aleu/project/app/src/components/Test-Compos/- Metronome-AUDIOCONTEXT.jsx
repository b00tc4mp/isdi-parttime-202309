import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { useAudioContext } from '../AudioContext';
import getMetronomo from '../logic/getMetronomo'; // Verifica que la ruta sea correcta

const Metronome = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(-12); // Ajustamos un volumen inicial más razonable
    const metronomePlayer = useRef(null);
    const { isMetronomePlaying, currentBPM } = useAudioContext();

    useEffect(() => {
        // Asegúrate de que este efecto solo se ejecute una vez
        getMetronomo().then(metronomoSamples => {
            const metronomeSample = metronomoSamples.find(m => m.name === 'Metronomo');
            if (metronomeSample) {
                const player = new Tone.Player({
                    url: metronomeSample.filePath,
                    loop: true,
                }).toDestination();

                player.volume.value = volume; // Ajusta el volumen inicial
                player.autostart = false;
                metronomePlayer.current = player;
            }
        });

        // Cleanup: Detener el metrónomo y liberar recursos cuando el componente se desmonte
        return () => {
            if (metronomePlayer.current) {
                metronomePlayer.current.stop();
                metronomePlayer.current.dispose();
            }
        };
    }, []); // Sin dependencias, para que solo se ejecute una vez

    useEffect(() => {
        // Actualiza el volumen cuando cambia el estado de isMuted o volume
        if (metronomePlayer.current) {
            metronomePlayer.current.volume.value = isMuted ? -Infinity : volume;
        }
    }, [isMuted, volume]);

    useEffect(() => {
        // Inicia o detiene el metrónomo según el estado de isMetronomePlaying
        if (isMetronomePlaying) {
            metronomePlayer.current?.start();
        } else {
            metronomePlayer.current?.stop();
        }
    }, [isMetronomePlaying]);

    useEffect(() => {
        // Ajusta el playbackRate del metrónomo según el currentBPM
        if (metronomePlayer.current) {
            const playbackRate = currentBPM / 120; // Asumiendo que el BPM base del sample es 120
            metronomePlayer.current.playbackRate = playbackRate;
        }
    }, [currentBPM]);

    // Funciones para manejar eventos de la UI
    const toggleMute = () => setIsMuted(!isMuted);
    const handleVolumeChange = (e) => setVolume(Number(e.target.value));

    return (
        <div>
            <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
            <input type="range" min="-60" max="0" value={volume} onChange={handleVolumeChange} />
        </div>
    );
};

export default Metronome;
