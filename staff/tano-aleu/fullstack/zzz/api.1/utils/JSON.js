// Importar el módulo 'fs' (File System) para leer y escribir archivos
const fs = require('fs');

// Función para cargar datos desde un archivo CSV y convertirlos en un array de objetos
function parseFromFile(file, callback) {

    // Leer el archivo de forma asíncrona en codificación utf8
    fs.readFile(file, 'utf8', (error, json) => {

        // Verificar errores durante la lectura del archivo
        if (error) {
            callback(error);
            return;
        }

        // Analizar los datos CSV utilizando la función parseCSV
        const data = JSON.parse(json);

        // Llamar al callback con los datos analizados y sin errores
        callback(null, data);
    });
}

// Función para guardar datos como un archivo CSV desde un array de objetos
function stringifyToFile(file, data, callback) {

    const json = JSON.stringify(data, null, 4)

    // Escribir la cadena CSV en el archivo de forma asíncrona
    fs.writeFile(file, json, error => {
        // Verificar errores durante la escritura del archivo
        if (error) {
            callback(error);

            return;
        }

        // Llamar al callback sin errores
        callback(null);
    });
}

// Exportar las funciones para su uso externo
module.exports = {
    parse: JSON.parse, //interpretar un string y convertirlo en objeto
    parseFromFile,
    stringify: JSON.stringify, //interpretar un objeto (array) y convertirlo a string
    stringifyToFile

};
