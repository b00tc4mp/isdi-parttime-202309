import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import getMetronomo from '../logic/getMetronomo';
import getSamples from '../logic/getSamples';
import BpmControl from './bpmControl';
import TapTempo from './tapTempo';
import BeatTransposition from './beatTransposition'; // 
import FilterControl from './FilterControl';

const Synqple = () => {

    const [bpm, setBpm] = useState(120); // Estado inicial de BPM, ajustable por BpmControl
    const [isPlaying, setIsPlaying] = useState(false);


    const [metronomePlayer, setMetronomePlayer] = useState(null);
    const [samplePlayers, setSamplePlayers] = useState([]);

    const [samplesList, setSamplesList] = useState([]);
    const [currentSampleIndex, setCurrentSampleIndex] = useState(0); // Usamos -1 para indicar que no hay selección inicial

    const [isSampleMuted, setIsSampleMuted] = useState(true);
    const [isMetronomeMuted, setIsMetronomeMuted] = useState(false);

    const [metronomeVolume, setMetronomeVolume] = useState(0); // Volumen inicial del metrónomo
    const [sampleVolume, setSampleVolume] = useState(0); // Volumen inicial de los samples


    const [prevMetronomeVolume, setPrevMetronomeVolume] = useState(0); // Guarda el volumen previo al mute
    const [prevSampleVolume, setPrevSampleVolume] = useState(0); // Guarda el volumen previo al mute

    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);



    //RENDERIZACION DE METRONOMO Y SAMPLES


    useEffect(() => {

        let metronomePlayer;
        let samplePlayers = [];


        getMetronomo().then(metronomo => {
            const metronomeSample = metronomo.find(m => m.name === 'Metronomo');
            if (metronomeSample) {
                metronomePlayer = new Tone.Player({
                    url: metronomeSample.filePath,
                    loop: true,
                }).toDestination();
                setMetronomePlayer(metronomePlayer);
            }
        });

        getSamples().then(samples => {
            setSamplesList(samples);
            samplePlayers = samples.map(sample => { // Usar el arreglo correctamente
                const player = new Tone.GrainPlayer({
                    url: sample.filePath,
                    loop: true,
                    grainSize: 0.1, // Ejemplo de configuración de tamaño del grano en segundos
                    overlap: 0.10, // Ejemplo de configuración de solapamiento en segundos
                    playbackRate: 1, // Velocidad de reproducción normal
                    detune: 0, // Sin desafinación
                    duration: sample.duration,
                    bpm: sample.bpm
                }).toDestination();
                return player;
            });
            setSamplePlayers(samplePlayers); // Establecemos todos los players
        });

        // Función de limpieza
        return () => {
            // Detener metrónomo si existe
            if (metronomePlayer) {
                metronomePlayer.stop();
            }

            // Detener todos los sample players
            samplePlayers.forEach(player => player.stop());
        };

    }, []);


    // CONTROL DE REPRODUCCION DE METRONOMO Y SAMPLES POR INDICE
    useEffect(() => {
        // Control de la reproducción basada en isPlaying, independiente del estado de silencio
        if (isPlaying) {
            Tone.start().then(() => {
                metronomePlayer?.start();
                const player = samplePlayers[currentSampleIndex];
                if (player) player.start();
            });
        } else {
            metronomePlayer?.stop();
            samplePlayers.forEach(player => player.stop());
        }
    }, [isPlaying, metronomePlayer, samplePlayers, currentSampleIndex]);


    //CONTROL DE VOLUMEN DEL METRONOMO Y LOS SAMPLES
    useEffect(() => {
        // Asegurarse de que metronomePlayer ha sido inicializado antes de intentar modificar su volumen.
        if (metronomePlayer) {
            metronomePlayer.volume.value = isMetronomeMuted ? -Infinity : 0;
        }
        // Asegurarse de que cada player en samplePlayers ha sido inicializado antes de modificar su volumen.
        samplePlayers.forEach((player, index) => {
            if (player && index === currentSampleIndex) {
                player.volume.value = isSampleMuted ? -Infinity : 0;
            }
        });
    }, [isMetronomeMuted, isSampleMuted, metronomePlayer, samplePlayers, currentSampleIndex]);


    //SINCRONIA DE LOS SAMPLES CON EL METRONOMO
    useEffect(() => {
        if (metronomePlayer) {
            metronomePlayer.playbackRate = bpm / 120; // Asumiendo 120 como el BPM original de tu sample del metrónomo
        }
        samplePlayers.forEach(player => {
            player.playbackRate = bpm / 120; // Asegura que esto es correcto para tus samples
        });
    }, [bpm, metronomePlayer, samplePlayers]);


    //MANEJO DEL PLAY/STOP PARA METRONOMO Y SAMPLES
    const handlePlayToggle = () => setIsPlaying(!isPlaying);

    const handleSampleSelect = index => {
        // Detén cualquier sample que se esté reproduciendo actualmente.
        if (currentSampleIndex >= 0) {
            samplePlayers[currentSampleIndex]?.stop();
        }

        // Actualiza el índice del sample actualmente seleccionado.
        setCurrentSampleIndex(index);

        // Si el reproductor está en reproducción, inicia el nuevo sample seleccionado.
        if (isPlaying && !isSampleMuted) {
            Tone.start().then(() => {
                samplePlayers[index]?.start();
            });
        }
    };

    //MANEJO DE MUTEO DE METRONOMO Y SAMPLES
    // Ajusta el manejador de muteo del metrónomo
    const toggleMuteMetronome = () => {
        if (!isMetronomeMuted) {
            setPrevMetronomeVolume(metronomeVolume); // Guarda el volumen actual antes de mutear
        } else {
            setMetronomeVolume(prevMetronomeVolume); // Restaura el volumen al valor previo al mute
        }
        setIsMetronomeMuted(!isMetronomeMuted);
    };

    // Ajusta el manejador de muteo del sample
    const toggleMuteSample = () => {
        if (!isSampleMuted) {
            setPrevSampleVolume(sampleVolume); // Guarda el volumen actual antes de mutear
        } else {
            setSampleVolume(prevSampleVolume); // Restaura el volumen al valor previo al mute
        }
        setIsSampleMuted(!isSampleMuted);
    };

    // Efecto para manejar el silencio del metrónomo
    useEffect(() => {
        if (metronomePlayer) {
            metronomePlayer.volume.value = isMetronomeMuted ? -Infinity : metronomeVolume;
        }
    }, [isMetronomeMuted, metronomeVolume, metronomePlayer]);

    // Efecto para manejar el silencio de los samples
    useEffect(() => {
        if (currentSampleIndex >= 0 && samplePlayers[currentSampleIndex]) {
            samplePlayers[currentSampleIndex].volume.value = isSampleMuted ? -Infinity : sampleVolume;
        }
    }, [isSampleMuted, sampleVolume, currentSampleIndex, samplePlayers]);


    // Manejadores para cambios de volumen
    const handleMetronomeVolumeChange = (event) => {
        const volume = Number(event.target.value);
        setMetronomeVolume(volume);
    };

    const handleSampleVolumeChange = (event) => {
        const volume = Number(event.target.value);
        setSampleVolume(volume);
    };


    const handleChangeBpm = (newBpm) => {
        setBpm(newBpm); // Actualiza el estado del BPM
        // Aquí podrías añadir cualquier otra lógica necesaria cuando el BPM cambia
    };

    const handleLoopLengthChange = (loopFraction) => {
        let multiplier;

        if (loopFraction.includes('/')) {
            const [numerator, denominator] = loopFraction.split('/').map(Number);
            // Para "1/8", esto debería resultar en un valor mucho menor, correcto para 1/8 de un compás
            multiplier = numerator / (denominator * 16); // 32 porque hay 32 octavos en 8 compases de 4/4
        } else {
            multiplier = Number(loopFraction) / 8; // Convertir a fracción de la duración total de 8 compases
        }

        samplePlayers.forEach((player, index) => {
            const sample = samplesList[index];
            if (!sample || !player.loaded) return;

            // Asumiendo 4 beats por compás, calcula la duración del loop en segundos
            const beatsPerSecond = sample.bpm / 60;
            // 32 octavos en la totalidad de los 8 compases (8 compases * 4 beats cada uno)
            const totalBeats = 4 * 2; // 8 compases de 4 beats cada uno
            const totalDuration = totalBeats / beatsPerSecond; // Duración total en segundos

            // Ajustar loopEnd basado en el multiplicador de longitud de loop
            player.loopEnd = totalDuration * multiplier;
        });

        console.log(`Loop length set to ${loopFraction} of a compás`);
    };




    return (
        <div className="bg-[#5F5784] text-white min-h-screen p-5 flex flex-col space-y-1 overflow-auto">
            {/* LP-HP Filter */}
            {
                samplePlayers.length > 0 && currentSampleIndex >= 0 &&
                <FilterControl currentSamplePlayer={samplePlayers[currentSampleIndex]} />
            }

            {/* Sample Selection with Scroll */}
            <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} className="mb-4 bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                {showFavoritesOnly ? "Mostrar Todos" : "Mostrar Favoritos"}
            </button>
            <div className="relative w-full max-h-[120px] min-h-[120px] overflow-y-auto bg-purple-600 rounded shadow">
                {samplesList
                    .filter(sample => !showFavoritesOnly || sample.fav)
                    .length > 0 ? (
                    samplesList
                        .filter(sample => !showFavoritesOnly || sample.fav)
                        .map((sample, index) => (
                            <button
                                key={index}
                                onClick={() => handleSampleSelect(index)}
                                className="block w-full px-4 py-2 text-left hover:bg-purple-500"
                            >
                                {sample.name}
                            </button>
                        ))
                ) : (
                    <div className="text-center p-4">No hay samples favoritos.</div>
                )}
            </div>
            {/* Sample Volume Control and Mute Button */}
            <div>
                <div className=' flex justify-center'>Volumen Metronomo</div>
                <input type="range" min="-60" max="0" value={sampleVolume} onChange={handleSampleVolumeChange} className="w-full" />
                <button onClick={toggleMuteSample} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-2 w-full">
                    {isSampleMuted ? 'Unmute Sample' : 'Mute Sample'}
                </button>
            </div>

            {/* Loop Length Buttons */}
            <div className=' flex justify-center'>Loop Length</div>
            <div className="flex justify-between">
                {['1/8', '1/4', '1/2', '1', '2', '4', '8'].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleLoopLengthChange(value)}
                        className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
                    >
                        {value}
                    </button>
                ))}
            </div>


            {/* BPM Control & Beat Transposition */}
            <BpmControl bpm={bpm} onChangeBpm={setBpm} />

            <BeatTransposition bpm={bpm} onBPMChange={handleChangeBpm} />

            {/* Tap Tempo, Mute Metronome, Play Button & Metronome Volume Control */} <div className=' flex justify-center'>Global Play | Sync | Metronome Controls </div>

            <div className="flex items-center justify-between space-x-2">


                <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded" onClick={handlePlayToggle}>
                    {isPlaying ? 'Stop' : 'Play'}
                </button>

                <TapTempo onBPMChange={setBpm} />

                <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded" onClick={toggleMuteMetronome}>
                    {isMetronomeMuted ? 'Off' : 'On'}
                </button>


            </div>
            <div className=' flex justify-center'>Volumen Metronomo</div>
            <input type="range" min="-60" max="0" value={metronomeVolume} onChange={handleMetronomeVolumeChange} className="flex justify-around" />
        </div>
    );

};

export default Synqple;
