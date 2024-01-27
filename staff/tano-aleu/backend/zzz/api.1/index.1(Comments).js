// Importa el módulo 'fs' (file system)
const fs = require('fs');

// Lee el contenido del archivo 'users.csv' de forma asíncrona
fs.readFile('./users.csv', 'utf8', (error, content) => {
    // Manejo de errores en la lectura del archivo
    if (error) {
        console.error(error);
        return;
    }

    // Array para almacenar datos de usuarios
    const users = []

    // Divide el contenido del archivo en líneas
    const lines = content.split('\r\n')

    // Obtiene los nombres de los campos desde la primera línea (encabezados de las columnas)
    const fields = lines[0].split(',')

    // Itera sobre cada línea del archivo (excepto la primera que contiene los encabezados)
    for (let i = 1; i < lines.length; i++) {
        // Obtiene la línea actual
        const line = lines[i]

        // Divide la línea en valores usando la coma como separador
        const values = line.split(',')

        // Objeto para almacenar los datos de un usuario
        const user = {}

        // Itera sobre cada campo y asigna los valores correspondientes del usuario
        for (const j in fields) {
            
            const field = fields[j]
            
            user[field] = values[j]
        }

        //\\ Itera sobre los campos y asigna los valores correspondientes al objeto de usuario

        // for (let j = 0; j < fields.length; j++) {
        //     // Obtiene el nombre del campo en la posición j
        //     const field = fields[j];

        //     // Asigna el valor correspondiente al campo en el objeto de usuario
        //     user[field] = values[j];
        // }

        // Agrega el objeto de usuario al array de usuarios
        users.push(user)
    }

    // // Imprime los nombres de los campos
    // console.log(fields);

    // Imprime el array de usuarios
    console.log(users)

   
 })

  // Mensaje de continuación
 console.log('continue...');

// ---------------------------------------------

//     El metodo split, crea un array!