import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import logo from '../assets/synqple.logo.png';
import metronome_button from '../assets/synqple_buttons/metronome_button.png';
import getMetronomo from '../logic/getMetronomo';
import getSamples from '../logic/getSamples';
import BpmControl from './bpmControl';
import TapTempo from './tapTempo';
import BeatTransposition from './beatTransposition'; // 
import FilterControl from './FilterControl';
import retrieveFavSamples from '../logic/retrieveFavSamples';
import StartAudioContext from 'startaudiocontext';

const Synqple = () => {
    console.log('Synqple')

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

    const [favoritesList, setFavoritesList] = useState([]); // Solo los favoritos
    // const [favSamplesPlayer, setFavSamplesPlayer] = useState([]);

    const [lastStartTime, setLastStartTime] = useState(0);

    const [audioContextActive, setAudioContextActive] = useState(false);



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
        }).catch(error => {
            console.error("Error loading metronome:", error);
            // Aquí puedes manejar el error, como mostrar un mensaje al usuario.
        });

        getSamples().then(samples => {
            setSamplesList(samples);
            samplePlayers = samples.map(sample => { // Usar el arreglo correctamente
                const player = new Tone.GrainPlayer({
                    url: sample.filePath,
                    loop: true,
                    grainSize: 0.1, // Ejemplo de configuración de tamaño del grano en segundos
                    overlap: 0.1, // Ejemplo de configuración de solapamiento en segundos
                    playbackRate: 1, // Velocidad de reproducción normal
                    detune: 0, // Sin desafinación
                    duration: sample.duration,
                    bpm: sample.bpm
                }).toDestination();
                return player;
            });
            setSamplePlayers(samplePlayers); // Establecemos todos los players
        }).catch(error => {
            console.error("Error loading samples:", error);
            // Manejo del error
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
            }).catch(error => {
                console.error("Error starting audio context:", error);
                // Manejo del error
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

    const getAbsoluteIndex = (index) => {

        const name = favoritesList[index]?.name;

        const isNameTheSame = (sample) => sample.name === name;

        return (samplesList.findIndex(isNameTheSame));

    }

    const handleSampleSelect = (index) => {
        let indexToPlay = showFavoritesOnly ? getAbsoluteIndex(index) : index;

        // Calcula un tiempo de inicio que sea seguro, basado en el último tiempo de inicio conocido
        const safeStartTime = Math.max(Tone.now(), lastStartTime + 0.1);

        // Detén cualquier sample que se esté reproduciendo actualmente.
        if (currentSampleIndex >= 0 && samplePlayers[currentSampleIndex]) {
            samplePlayers[currentSampleIndex].stop();
        }

        // Asegura que el contexto de audio de Tone.js esté iniciado.
        Tone.start().then(() => {
            // Actualiza el índice del sample actualmente seleccionado.
            setCurrentSampleIndex(indexToPlay);

            // Si el reproductor está en reproducción, inicia el nuevo sample seleccionado con un retraso.
            if (isPlaying && !isSampleMuted && samplePlayers[indexToPlay]) {
                samplePlayers[indexToPlay].start(safeStartTime);
                // Actualiza el último tiempo de inicio conocido
                setLastStartTime(safeStartTime);
            }
        });
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



    const [loopConfig, setLoopConfig] = useState({});



    const getMultiplierFromFraction = (loopFraction) => {
        let multiplier;
        if (loopFraction.includes('/')) {
            const [numerator, denominator] = loopFraction.split('/').map(Number);
            multiplier = numerator / (denominator * 16); // Ajuste según tu lógica actual
        } else {
            multiplier = Number(loopFraction) / 8;
        }
        return multiplier;
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

            // Verifica si ya se aplicó el mismo loopFraction a este sample
            if (loopConfig[index] && loopConfig[index].isLooping && loopConfig[index].loopFraction === loopFraction) {
                // Si es el mismo, resetea a la configuración normal
                player.loop = true; // Desactiva el loop
                player.loopEnd = 0; // Reset loop end a la duración completa del sample
                setLoopConfig(current => ({ ...current, [index]: { isLooping: false, loopFraction: null } }));
            } else {
                // Aplica la nueva configuración de loop
                let multiplier = getMultiplierFromFraction(loopFraction);
                const beatsPerSecond = sample.bpm / 60;
                const totalBeats = 4 * 2; // Asumiendo 4 beats por compás
                const totalDuration = totalBeats / beatsPerSecond;
                player.loop = true;
                player.loopEnd = totalDuration * multiplier;
                setLoopConfig(current => ({ ...current, [index]: { isLooping: true, loopFraction } }));
            }
        });


    };


    function retrieveFavSamplesPromise() {
        return new Promise((resolve, reject) => {
            retrieveFavSamples((error, samples) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(samples);
                }
            });
        });
    }

    // Obtener todos los samples al iniciar
    useEffect(() => {
        getSamples().then(samples => {
            setSamplesList(samples);
        });
    }, []);

    // Obtener los samples favoritos cuando showFavoritesOnly cambie
    useEffect(() => {
        if (showFavoritesOnly) {
            retrieveFavSamplesPromise()
                .then(favSamples => {
                    setFavoritesList(favSamples); // Establece los favoritos obtenidos

                })
                .catch(error => console.error("Error retrieving favorite samples:", error));
        }
    }, [showFavoritesOnly]);

    // Decide qué lista mostrar
    const displayedSamples = showFavoritesOnly ? favoritesList : samplesList;

    const toggleAudioContext = () => {
        console.log('toggleAudioContext')
        setAudioContextActive(!audioContextActive);
    };


    return (
        <div className="bg-[#5F5784] border rounded-3xl p-4 border-black text-white flex flex-col overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

            <div>
                {/* Otro contenido de tu componente aquí */}
                <button
                    className='bg-purple-800 hover:bg-purple-900 text-white  py-2 px-4 rounded text-xs
                    '
                    style={{ backgroundColor: audioContextActive ? '#34D399' : '#EF4444' }}
                    onClick={toggleAudioContext}
                >
                    {audioContextActive ? "SYNQPLE ON" : " SYNQPLE OFF"}
                </button>
            </div>


            {/* LP-HP Filter */}
            {
                samplePlayers.length > 0 && currentSampleIndex >= 0 &&
                <FilterControl currentSamplePlayer={samplePlayers[currentSampleIndex]} />
            }



            {/* Sample Selection with Scroll */}

            <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} className=" bg-purple-800 hover:bg-purple-900 text-white font-bold rounded py-2">
                {showFavoritesOnly ? "Show all Samples" : "Show Favorites Samples"}
            </button>

            <div className="relative w-full max-h-[120px] min-h-[120px] overflow-y-auto bg-purple-600 rounded shadow">
                {displayedSamples.length > 0 ? (
                    displayedSamples.map((sample, index) => (
                        <button
                            key={index}
                            onClick={() => handleSampleSelect(index)}
                            className="block w-full px-4 py-2 text-left hover:bg-purple-500"
                        >
                            {sample.name}
                        </button>
                    ))
                ) : (
                    <div className="text-center p-4">No favorite samples yet.</div>
                )}
            </div>




            {/* Sample Volume Control and Mute Button */}
            <div>
                <div className=' flex justify-center mt-3'>Samples Volume</div>

                <input type="range" min="-60" max="0" value={sampleVolume} onChange={handleSampleVolumeChange} className="w-full" />

                <button onClick={toggleMuteSample} className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-2 w-full mb-1">
                    {isSampleMuted ? 'Unmute Sample' : 'Mute Sample'}
                </button>
            </div>


            {/* Loop Length Buttons */}
            <h3 className='flex justify-center mt-2 mb-2'>Loop Length</h3>
            <div className="flex justify-between">
                {['1/8', '1/4', '1/2', '1', '2', '4', '8'].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleLoopLengthChange(value)}
                        className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                        {value}
                    </button>
                ))}
            </div>


            {/* BPM Control & Beat Transposition */}
            <BpmControl bpm={bpm} onChangeBpm={setBpm} />

            <BeatTransposition bpm={bpm} onBPMChange={handleChangeBpm} />

            {/* Tap Tempo, Mute Metronome, Play Button & Metronome Volume Control */} <div className=' flex justify-center'></div>

            <div className="flex items-center justify-between space-x-2 mb-4">








                <button className='bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded'
                    style={{ backgroundColor: isPlaying ? '#34D399' : '#EF4444' }} onClick={handlePlayToggle}>
                    {isPlaying ? 'Stop' : 'Play'}
                </button>

                <TapTempo onBPMChange={setBpm} />

                <button
                    className='bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded'
                    style={{ backgroundColor: isMetronomeMuted ? '#EF4444' : '#34D399' }}
                    onClick={toggleMuteMetronome}
                >
                    <img className='w-6' src={metronome_button} alt="Metronome" />
                </button>



            </div>

            <div className=' flex justify-center mt-1 mb-2'>Metronome Volume</div>
            <input type="range" min="-60" max="0" value={metronomeVolume} onChange={handleMetronomeVolumeChange} className="flex justify-around" />



            <footer className="flex justify-center">
                <img src={logo} alt="Logo" className="w-40 h-auto mt-20  justify-center" />

            </footer>
        </div>


    );

};

export default Synqple;
