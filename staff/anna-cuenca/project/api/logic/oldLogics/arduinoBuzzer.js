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
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"

                // Repetir estos 4 beats 5 veces para llenar 20 beats

                ["E4", 1 / 4], ["G4", 1 / 4],
                ["E4", 1 / 4], ["C4", 1 / 4],
                [null, 1 / 2], [null, 1 / 2],
                ["E4", 1 / 4], ["G4", 1 / 4],
                ["E4", 1 / 4], ["C4", 1 / 4],

                // Agregar una sección intermedia para variación, 20 beats ya cubiertos aquí
                ["G4", 1 / 4], ["F#4", 1 / 4], ["E4", 1 / 4], ["D4", 1 / 4],
                ["C4", 1 / 4], [null, 3 / 4], // Breve pausa para simular transición
                // Repetir el inicio o variar ligeramente para mantener el interés
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                // Asegurarse de que la repetición y la variación sumen hasta los 60 beats totales
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                ["E4", 1 / 2], [null, 1 / 2],
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                ["E4", 1 / 2], [null, 1 / 2],
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                ["E4", 1 / 2], [null, 1 / 2],
                ["E4", 1 / 2], [null, 1 / 2], // "Beat It, Beat It"
                ["E4", 1 / 2], [null, 1 / 2],
            ];
            const tempo = 120; // BPM
            // Calculando el tiempo total de la canción
            const totalTime = (song.reduce((total, [note, beats]) => total + beats, 0) / tempo) * 60 * 1000;
            console.log(totalTime)

            piezo.play({
                song: song,
                tempo: tempo
            });

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
