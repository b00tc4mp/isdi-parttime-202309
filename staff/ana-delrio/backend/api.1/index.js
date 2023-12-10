// fs es un paquete de node, que significa file system
const fs = require('fs')

// dentro de fs, estáreadFile, que te permite leer un archivo
// utf8: es el formato del sistema operativo

// fs.writeFile('./holamundo.txt', 'Hola, Mundo!', error => {
//     if (error) {
//         console.error(error)

//         return
//     }
//     console.log('saved')

// })


fs.readFile('./users.csv', 'utf8', (error, content) => {
    if (error) {
        console.error(error)

        return
    }
    // los usuarios que vaya leyendo
    const users = []

    // esto nos sirve para separar los strings (cada línea) con los saltos de linea (\n)
    // combinación de retorno de carro (\r)(carriage return) seguido de un salto de línea (\n)
    const lines = content.split('\r\n')

    // la primera línea, que son los fields, que nos lo separe con comas (',')
    const fields = lines[0].split(',')

    // empezamos con la línea 1 que es la que nos interesa
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        // separo los valores con comas
        const values = line.split(',')

        // creamos un objeto, al que después vayamos insertando aquellos elementos que vayamos iterando 
        const user = {}

        // la j en el índice en el array de fields
        for (const j in fields) {
            // campos: me traigo la primera posición de fields fields[j], que es "i" de id, y se lo inserto en el array de field
            const field = fields[j]

            // y la primera posición de los values, y se inserto en los user
            user[field] = values[j]

        }
        users.push(user)

    }

    console.log(users)
})