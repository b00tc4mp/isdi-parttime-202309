import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import getMetronomo from '../logic/getMetronomo';
import getSamples from '../logic/getSamples';
import BpmControl from './bpmControl';
import TapTempo from './tapTempo';
import BeatTransposition from './beatTransposition'; // Asegúrate que la ruta de importación es correcta





const Synqple = () => {
    const [bpm, setBpm] = useState(120); // Estado inicial de BPM, ajustable por BpmControl
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [metronomePlayer, setMetronomePlayer] = useState(null);
    const [samplesList, setSamplesList] = useState([]);
    const [currentSampleIndex, setCurrentSampleIndex] = useState(-1); // Usamos -1 para indicar que no hay selección inicial
    const [samplePlayers, setSamplePlayers] = useState([]);
    const [isSampleMuted, setIsSampleMuted] = useState(false);
    const [metronomeVolume, setMetronomeVolume] = useState(0); // Volumen inicial del metrónomo
    const [sampleVolume, setSampleVolume] = useState(0); // Volumen inicial de los samples
    const [prevMetronomeVolume, setPrevMetronomeVolume] = useState(0); // Guarda el volumen previo al mute
    const [prevSampleVolume, setPrevSampleVolume] = useState(0); // Guarda el volumen previo al mute






    useEffect(() => {
        getMetronomo().then(metronomo => {
            const metronomeSample = metronomo.find(m => m.name === 'Metronomo');
            if (metronomeSample) {
                const player = new Tone.Player({
                    url: metronomeSample.filePath,
                    loop: true,
                }).toDestination();
                setMetronomePlayer(player);
            }
        });

        getSamples().then(samples => {
            setSamplesList(samples);
            const players = samples.map(sample => {
                const player = new Tone.Player({
                    url: sample.filePath,
                    loop: true,
                }).toDestination();
                player.volume.value = -Infinity; // Inicialmente silenciados
                return player;
            });
            setSamplePlayers(players);
        });
    }, []);

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


    useEffect(() => {
        // Asegurarse de que metronomePlayer ha sido inicializado antes de intentar modificar su volumen.
        if (metronomePlayer) {
            metronomePlayer.volume.value = isMuted ? -Infinity : 0;
        }
        // Asegurarse de que cada player en samplePlayers ha sido inicializado antes de modificar su volumen.
        samplePlayers.forEach((player, index) => {
            if (player && index === currentSampleIndex) {
                player.volume.value = isSampleMuted ? -Infinity : 0;
            }
        });
    }, [isMuted, isSampleMuted, metronomePlayer, samplePlayers, currentSampleIndex]);

    useEffect(() => {
        if (metronomePlayer) {
            metronomePlayer.playbackRate = bpm / 120; // Asumiendo 120 como el BPM original de tu sample del metrónomo
        }
        samplePlayers.forEach(player => {
            player.playbackRate = bpm / 120; // Asegura que esto es correcto para tus samples
        });
    }, [bpm, metronomePlayer, samplePlayers]);





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




    // Ajusta el manejador de muteo del metrónomo
    const toggleMuteMetronome = () => {
        if (!isMuted) {
            setPrevMetronomeVolume(metronomeVolume); // Guarda el volumen actual antes de mutear
        } else {
            setMetronomeVolume(prevMetronomeVolume); // Restaura el volumen al valor previo al mute
        }
        setIsMuted(!isMuted);
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
            metronomePlayer.volume.value = isMuted ? -Infinity : metronomeVolume;
        }
    }, [isMuted, metronomeVolume, metronomePlayer]);

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

    return (
        <div className="bg-[#5F5784] text-white min-h-screen p-5 flex flex-col space-y-4 overflow-auto">
            {/* LP-HP Filter */}
            <div>
                <input
                    type="range"
                    className="w-full p-3 rounded bg-purple-800 placeholder-gray-300"
                />
            </div>

            {/* Sample Selection with Scroll */}
            <div className="relative w-full max-h-[200px] overflow-y-auto bg-purple-600 rounded shadow">
                {samplesList.map((sample, index) => (
                    <button
                        key={index}
                        onClick={() => handleSampleSelect(index)}
                        className="block w-full px-4 py-2 text-left hover:bg-purple-500"
                    >
                        {sample.name}
                    </button>
                ))}
            </div>

            {/* Sample Volume Control and Mute Button */}
            <div>
                <input type="range" min="-60" max="0" value={sampleVolume} onChange={handleSampleVolumeChange} className="w-full" />
                <button onClick={toggleMuteSample} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-2 w-full">
                    {isSampleMuted ? 'Unmute Sample' : 'Mute Sample'}
                </button>
            </div>

            {/* Loop Length Buttons */}
            <div className="flex justify-between">
                {['1', '2', '4', '8', '16', '32', '64'].map((value) => (
                    <button
                        key={value}
                        className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
                    >
                        {value}
                    </button>
                ))}
            </div>

            {/* BPM Control & Beat Transposition */}
            <BpmControl bpm={bpm} onChangeBpm={setBpm} />

            <BeatTransposition bpm={bpm} onBPMChange={handleChangeBpm} />

            {/* Tap Tempo, Mute Metronome, Play Button & Metronome Volume Control */}
            <div className="flex items-center justify-between space-x-4">

                <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded" onClick={handlePlayToggle}>
                    {isPlaying ? 'Stop' : 'Play'}
                </button>

                <TapTempo onBPMChange={setBpm} />

                <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded" onClick={toggleMuteMetronome}>
                    {isMuted ? 'Off' : 'On'}
                </button>


            </div>

            <input type="range" min="-60" max="0" value={metronomeVolume} onChange={handleMetronomeVolumeChange} className="flex justify-around" />
        </div>
    );

};

export default Synqple;
