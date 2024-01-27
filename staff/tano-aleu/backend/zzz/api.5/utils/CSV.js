// Importar el módulo 'fs' (File System) para leer y escribir archivos
const fs = require('fs');

// Función para analizar datos CSV y convertirlos en un array de objetos
function parse(csv) {
    // Inicializar un array vacío para almacenar los datos
    const data = [];

    // Dividir la cadena CSV en un array de líneas
    const lines = csv.split('\n');

    // Extraer los nombres de los campos de la primera línea
    const fields = lines[0].split(',');

    // Recorrer cada línea (empezando desde la segunda línea)
    for (let i = 1; i < lines.length; i++) {
        // Obtener la línea actual
        const line = lines[i];

        // Dividir la línea en un array de valores
        const values = line.split(',');

        // Crear un objeto para almacenar los datos de la línea actual
        const item = {};

        // Recorrer cada campo y asignar el valor correspondiente
        for (const j in fields) {
            const field = fields[j];
            item[field] = values[j];
        }

        // Agregar el objeto al array de datos
        data.push(item);
    }

    // Devolver los datos analizados
    return data;
}

// Función para cargar datos desde un archivo CSV y convertirlos en un array de objetos
function parseFromFile(file, callback) {
    // Leer el archivo de forma asíncrona en codificación utf8
    fs.readFile(file, 'utf8', (error, csv) => {
        // Verificar errores durante la lectura del archivo
        if (error) {
            callback(error);
            return;
        }

        // Analizar los datos CSV utilizando la función parseCSV
        const data = parse(csv);

        // Llamar al callback con los datos analizados y sin errores
        callback(null, data);
    });
}

function stringify(data) {
       // Extraer los nombres de los campos del primer objeto en el array de datos
       const fields = Object.keys(data[0]);

       // Crear una línea de encabezado con los nombres de los campos separados por comas
       let csv = fields.join(',');
   
       // Recorrer cada objeto en el array de datos
       for (const item of data) {
           let line = '';
   
           // Recorrer cada campo en el objeto actual
           for (let i = 0; i < fields.length; i++) {
               const field = fields[i];
   
               // Agregar el valor del campo a la línea con una coma (excepto para el último campo)
               line += item[field] + (i < fields.length - 1 ? ',' : '');
           }
   
           // Agregar la línea a la cadena CSV con un carácter de nueva línea
           csv += '\n' + line;
       }

       return csv
   
}

// Función para guardar datos como un archivo CSV desde un array de objetos
function stringifyToFile(file, data, callback) {

    const csv = stringify(data)
 
    // Escribir la cadena CSV en el archivo de forma asíncrona
    fs.writeFile(file, csv, (error) => {
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
    parse, //interpretar un string y convertirlo en objeto
    parseFromFile, 
    stringify, //interpretar un objeto (array) y convertirlo a string
    stringifyToFile
    
};
