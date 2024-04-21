import pkg from 'johnny-five';
const { Board, Piezo } = pkg;

const arduinoBuzzer = () => {
    return new Promise((resolve, reject) => {
        const board = new Board();

        board.on("ready", () => {
            const piezo = new Piezo(6);
            // Definiendo la canción
            const song = [
                // Primeros 8 beats del estribillo, adaptados y simplificados
                ["F#4", 1 / 4], ["E4", 1 / 4], ["F#4", 1 / 4], ["E4", 1 / 4], ["F#4", 1 / 2], ["A4", 1 / 2],
                ["F#4", 1 / 4], ["A4", 1 / 4], ["F#4", 1 / 2], ["F#4", 1 / 2], ["B4", 1 / 2], ["F#4", 1 / 2],
                ["C#4", 1 / 2], ["F#4", 1 / 4], ["E4", 1 / 4], ["F#4", 1 / 2], ["F#4", 1 / 2],
                ["F#4", 1 / 4], ["E4", 1 / 4], ["F#4", 1 / 2], ["G#4", 1 / 2], ["F#4", 1 / 2],

                ["E4", 1 / 2], ["F#4", 1 / 4], ["E4", 1 / 4], ["F#4", 1 / 4], ["E4", 1 / 4], ["F#4", 1 / 2], ["A4", 1 / 2],
                ["F#4", 1 / 4], ["A4", 1 / 4], ["F#4", 1 / 2], ["F#4", 1 / 2], ["E4", 1 / 2], ["F#4", 1 / 2],
                ["C#4", 1 / 2], ["F#4", 1 / 2], ["D4", 1 / 4], ["D4", 1 / 4], ["D4", 1 / 4], ["D4", 1 / 4], ["E4", 1 / 2], ["F#4", 1 / 2],
                ["F#4", 1 / 2], ["F4", 1 / 4], ["F4", 1 / 4], ["F#4", 1 / 2], ["G#4", 1 / 2],

                ["F#4", 1 / 2], ["E4", 1 / 4], ["C#4", 1 / 4], ["F#4", 1 / 2],
                ["F#4", 1 / 2], ["E4", 1 / 4], ["C#4", 1 / 4], ["F#4", 1 / 2],
                ["F#4", 1 / 2], ["E4", 1 / 4], ["C#4", 1 / 4], ["F#4", 1 / 2],
                ["F#4", 1 / 4], ["A4", 1 / 4], ["B4", 1 / 2], ["A4", 1 / 4], ["G#4", 1 / 4], ["F#4", 1 / 2],

                ["F#4", 1 / 4], ["C#5", 1 / 4], ["B4", 1 / 2], ["F#4", 1 / 2], ["D4", 1 / 2], ["C#4", 1 / 2],

                ["F#4", 1 / 4], ["A4", 1 / 4], ["B4", 1 / 2], ["A4", 1 / 4], ["G#4", 1 / 4], ["F#4", 1 / 2],
                ["F#4", 1 / 4], ["C#5", 1 / 4], ["B4", 1 / 2], ["F#4", 1 / 2], ["D4", 1 / 2], ["C#4", 1 / 2],

                ["F#", 1 / 2], ["G#", 1 / 2], ["F#", 1 / 2],

                ////

                ["C#", 1 / 2], ["C#", 1 / 4], ["C#", 1 / 4], ["C#", 1 / 2], ["B", 1 / 2], ["A", 1 / 2], ["B", 1 / 4], ["A", 1 / 4], ["C#", 1 / 2],
                ["B", 1 / 2], ["B", 1 / 2], ["A", 1 / 2], ["B", 1 / 2], ["A", 1 / 2], ["C#", 1 / 2],
                ["C#", 1 / 2], ["C#", 1 / 2], ["C#", 1 / 2], ["C#", 1 / 2], ["B", 1 / 2], ["A", 1 / 2], ["B", 1 / 2], ["A", 1 / 4], ["C#", 1 / 4],
                ["B", 1 / 2], ["A", 1 / 2], ["G#", 1 / 2], ["F#", 1 / 2],

                ["F#", 1 / 2], ["G#", 1 / 2], ["F#", 1 / 2],
                ["F#", 1 / 2], ["G#", 1 / 2], ["F#", 1 / 2],
                ["F#", 1 / 2], ["G#", 1 / 2], ["F#", 1 / 2]
                // ["F#", 1/2], ["G#", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["G#", 1/2], ["F#", 1/2],

                // ["F#", 1/2], ["E", 1/2], ["F#", 1/2], ["A", 1/2],
                // ["F#", 1/2], ["A", 1/2], ["F#", 1/2], ["F#", 1/2], ["B", 1/2], ["F#", 1/2],
                // ["C#", 1/2], ["F#", 1/2], ["E", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["E", 1/2], ["F#", 1/2], ["G#", 1/2], ["F#", 1/2],

                // ["E", 1/2], ["F#", 1/2], ["E", 1/2], ["F#", 1/2], ["E", 1/2], ["F#", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["A", 1/2], ["F#", 1/2], ["F#", 1/2], ["B", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["D", 1/2], ["D", 1/2], ["D", 1/2], ["E", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["F", 1/2], ["F", 1/2], ["F#", 1/2], ["G#", 1/2],

                // ["F#", 1/2], ["E", 1/2], ["C#", 1/2],
                // ["C#", 1/2], ["F#", 1/2], ["F#", 1/2], ["E", 1/2], ["C#", 1/2],
                // ["F#", 1/2], ["F#", 1/2], ["F#", 1/2], ["E", 1/2], ["C#", 1/2],
                // ["C#", 1/2], ["F#", 1/2], ["A", 1/2], ["B", 1/2], ["A", 1/2], ["G#", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["F#", 1/2], ["C#", 1/2], ["B", 1/2], ["F#", 1/2], ["D", 1/2], ["C#", 1/2],
                // ["F#", 1/2], ["A", 1/2], ["B", 1/2], ["A", 1/2], ["G#", 1/2], ["F#", 1/2],
                // ["F#", 1/2], ["F#", 1/2], ["C#", 1/2], ["B", 1/2], ["F#", 1/2], ["D", 1/2], ["C#", 1/2]


            ]
            const tempo = 60 // BPM
            // Calculando el tiempo total de la canción
            const totalTime = (song.reduce((total, [note, beats]) => total + beats, 0) / tempo) * 60 * 1000
            console.log(totalTime)

            piezo.play({
                song: song,
                tempo: tempo
            })

            console.log('Singing now.');
            // Esperar hasta que la canción termine para resolver la promesa
            setTimeout(() => {
                console.log('Song finished.');
                resolve(); // Resuelve la promesa cuando la canción termina
            }, totalTime);
        });

        board.on("error", error => {
            console.error('Board initialization failed:', error.message);
            reject(error); // Rechaza la promesa en caso de error
        });
    });
}

export default arduinoBuzzer;
